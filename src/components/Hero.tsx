import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Vector utility classes
class Vector2D {
  constructor(public x: number, public y: number) {}
  
  static random(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }
}

class Vector3D {
  constructor(public x: number, public y: number, public z: number) {}
  
  static random(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }
}

// Animation Controller
class AnimationController {
  private time = 0;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private dpr: number;
  private size: number;
  private stars: Star[] = [];
  
  private readonly changeEventTime = 0.32;
  private readonly cameraZ = -400;
  private readonly cameraTravelDistance = 3400;
  private readonly startDotYOffset = 28;
  private readonly viewZoom = 100;
  private readonly numberOfStars = 5000;
  private readonly trailLength = 80;
  
  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, dpr: number, size: number) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.dpr = dpr;
    this.size = size;
    
    this.setupRandomGenerator();
    this.createStars();
  }
  
  private setupRandomGenerator() {
    const originalRandom = Math.random;
    const customRandom = () => {
      let seed = 1234;
      return () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
      };
    };
    
    Math.random = customRandom();
    this.createStars();
    Math.random = originalRandom;
  }
  
  private createStars() {
    for (let i = 0; i < this.numberOfStars; i++) {
      this.stars.push(new Star(this.cameraZ, this.cameraTravelDistance));
    }
  }
  
  public setTime(t: number) {
    this.time = Math.max(0, Math.min(1, t));
    this.render();
  }
  
  public ease(p: number, g: number): number {
    if (p < 0.5) 
      return 0.5 * Math.pow(2 * p, g);
    else
      return 1 - 0.5 * Math.pow(2 * (1 - p), g);
  }
  
  public easeOutElastic(x: number): number {
    const c4 = (2 * Math.PI) / 4.5;
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    return Math.pow(2, -8 * x) * Math.sin((x * 8 - 0.75) * c4) + 1;
  }
  
  public map(value: number, start1: number, stop1: number, start2: number, stop2: number): number {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
  }
  
  public constrain(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }
  
  public lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
  }
  
  public spiralPath(p: number): Vector2D {
    p = this.constrain(1.2 * p, 0, 1);
    p = this.ease(p, 1.8);
    const numberOfSpiralTurns = 6;
    const theta = 2 * Math.PI * numberOfSpiralTurns * Math.sqrt(p);
    const r = 170 * Math.sqrt(p);
    
    return new Vector2D(
      r * Math.cos(theta),
      r * Math.sin(theta) + this.startDotYOffset
    );
  }
  
  public rotate(v1: Vector2D, v2: Vector2D, p: number, orientation: boolean): Vector2D {
    const middle = new Vector2D((v1.x + v2.x) / 2, (v1.y + v2.y) / 2);
    const dx = v1.x - middle.x;
    const dy = v1.y - middle.y;
    const angle = Math.atan2(dy, dx);
    const o = orientation ? -1 : 1;
    const r = Math.sqrt(dx * dx + dy * dy);
    const bounce = Math.sin(p * Math.PI) * 0.05 * (1 - p);
    
    return new Vector2D(
      middle.x + r * (1 + bounce) * Math.cos(angle + o * Math.PI * this.easeOutElastic(p)),
      middle.y + r * (1 + bounce) * Math.sin(angle + o * Math.PI * this.easeOutElastic(p))
    );
  }
  
  public showProjectedDot(position: Vector3D, sizeFactor: number) {
    const t2 = this.constrain(this.map(this.time, this.changeEventTime, 1, 0, 1), 0, 1);
    const newCameraZ = this.cameraZ + this.ease(Math.pow(t2, 1.2), 1.8) * this.cameraTravelDistance;
    
    if (position.z > newCameraZ) {
      const dotDepthFromCamera = position.z - newCameraZ;
      const x = this.viewZoom * position.x / dotDepthFromCamera;
      const y = this.viewZoom * position.y / dotDepthFromCamera;
      const sw = 400 * sizeFactor / dotDepthFromCamera;
      
      this.ctx.lineWidth = sw;
      this.ctx.beginPath();
      this.ctx.arc(x, y, 0.5, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }
  
  private drawStartDot() {
    if (this.time > this.changeEventTime) {
      const dy = this.cameraZ * this.startDotYOffset / this.viewZoom;
      const position = new Vector3D(0, dy, this.cameraTravelDistance);
      this.showProjectedDot(position, 2.5);
    }
  }
  
  public render() {
    const ctx = this.ctx;
    if (!ctx) return;
    
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, this.size, this.size);
    
    ctx.save();
    ctx.translate(this.size / 2, this.size / 2);
    
    const t1 = this.constrain(this.map(this.time, 0, this.changeEventTime + 0.25, 0, 1), 0, 1);
    const t2 = this.constrain(this.map(this.time, this.changeEventTime, 1, 0, 1), 0, 1);
    
    ctx.rotate(-Math.PI * this.ease(t2, 2.7));
    
    this.drawTrail(t1);
    
    ctx.fillStyle = 'white';
    for (const star of this.stars) {
      star.render(t1, this);
    }
    
    this.drawStartDot();
    ctx.restore();
  }
  
  private drawTrail(t1: number) {
    for (let i = 0; i < this.trailLength; i++) {
      const f = this.map(i, 0, this.trailLength, 1.1, 0.1);
      const sw = (1.3 * (1 - t1) + 3.0 * Math.sin(Math.PI * t1)) * f;
      
      this.ctx.fillStyle = 'white';
      this.ctx.lineWidth = sw;
      
      const pathTime = t1 - 0.00015 * i;
      const position = this.spiralPath(pathTime);
      
      const basePos = position;
      const offset = new Vector2D(position.x + 5, position.y + 5);
      const rotated = this.rotate(
        basePos, 
        offset, 
        Math.sin(this.time * Math.PI * 2) * 0.5 + 0.5, 
        i % 2 === 0
      );
      
      this.ctx.beginPath();
      this.ctx.arc(rotated.x, rotated.y, sw / 2, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }
}

// Star class
class Star {
  private dx: number;
  private dy: number;
  private spiralLocation: number;
  private strokeWeightFactor: number;
  private z: number;
  private angle: number;
  private distance: number;
  private rotationDirection: number;
  private expansionRate: number;
  private finalScale: number;
  
  constructor(cameraZ: number, cameraTravelDistance: number) {
    this.angle = Math.random() * Math.PI * 2;
    this.distance = 30 * Math.random() + 15;
    this.rotationDirection = Math.random() > 0.5 ? 1 : -1;
    this.expansionRate = 1.2 + Math.random() * 0.8;
    this.finalScale = 0.7 + Math.random() * 0.6;
    
    this.dx = this.distance * Math.cos(this.angle);
    this.dy = this.distance * Math.sin(this.angle);
    
    this.spiralLocation = (1 - Math.pow(1 - Math.random(), 3.0)) / 1.3;
    this.z = Vector2D.random(0.5 * cameraZ, cameraTravelDistance + cameraZ);
    
    const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;
    this.z = lerp(this.z, cameraTravelDistance / 2, 0.3 * this.spiralLocation);
    this.strokeWeightFactor = Math.pow(Math.random(), 2.0);
  }
  
  render(p: number, controller: AnimationController) {
    const spiralPos = controller.spiralPath(this.spiralLocation);
    const q = p - this.spiralLocation;
    
    if (q > 0) {
      const displacementProgress = controller.constrain(4 * q, 0, 1);
      
      const linearEasing = displacementProgress;
      const elasticEasing = controller.easeOutElastic(displacementProgress);
      const powerEasing = Math.pow(displacementProgress, 2);
      
      let easing;
      if (displacementProgress < 0.3) {
        easing = controller.lerp(linearEasing, powerEasing, displacementProgress / 0.3);
      } else if (displacementProgress < 0.7) {
        const t = (displacementProgress - 0.3) / 0.4;
        easing = controller.lerp(powerEasing, elasticEasing, t);
      } else {
        easing = elasticEasing;
      }
      
      let screenX, screenY;
      
      if (displacementProgress < 0.3) {
        screenX = controller.lerp(spiralPos.x, spiralPos.x + this.dx * 0.3, easing / 0.3);
        screenY = controller.lerp(spiralPos.y, spiralPos.y + this.dy * 0.3, easing / 0.3);
      } else if (displacementProgress < 0.7) {
        const midProgress = (displacementProgress - 0.3) / 0.4;
        const curveStrength = Math.sin(midProgress * Math.PI) * this.rotationDirection * 1.5;
        
        const baseX = spiralPos.x + this.dx * 0.3;
        const baseY = spiralPos.y + this.dy * 0.3;
        const targetX = spiralPos.x + this.dx * 0.7;
        const targetY = spiralPos.y + this.dy * 0.7;
        
        const perpX = -this.dy * 0.4 * curveStrength;
        const perpY = this.dx * 0.4 * curveStrength;
        
        screenX = controller.lerp(baseX, targetX, midProgress) + perpX * midProgress;
        screenY = controller.lerp(baseY, targetY, midProgress) + perpY * midProgress;
      } else {
        const finalProgress = (displacementProgress - 0.7) / 0.3;
        
        const baseX = spiralPos.x + this.dx * 0.7;
        const baseY = spiralPos.y + this.dy * 0.7;
        
        const targetDistance = this.distance * this.expansionRate * 1.5;
        const spiralTurns = 1.2 * this.rotationDirection;
        const spiralAngle = this.angle + spiralTurns * finalProgress * Math.PI;
        
        const targetX = spiralPos.x + targetDistance * Math.cos(spiralAngle);
        const targetY = spiralPos.y + targetDistance * Math.sin(spiralAngle);
        
        screenX = controller.lerp(baseX, targetX, finalProgress);
        screenY = controller.lerp(baseY, targetY, finalProgress);
      }
      
      const vx = (this.z - controller['cameraZ']) * screenX / controller['viewZoom'];
      const vy = (this.z - controller['cameraZ']) * screenY / controller['viewZoom'];
      
      const position = new Vector3D(vx, vy, this.z);
      
      let sizeMultiplier = 1.0;
      if (displacementProgress < 0.6) {
        sizeMultiplier = 1.0 + displacementProgress * 0.2;
      } else {
        const t = (displacementProgress - 0.6) / 0.4;
        sizeMultiplier = 1.2 * (1.0 - t) + this.finalScale * t;
      }
      
      const dotSize = 8.5 * this.strokeWeightFactor * sizeMultiplier;
      controller.showProjectedDot(position, dotSize);
    }
  }
}

// World Shipping Icon Component
function WorldShippingIcon({ width = 30, height = 30 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// Main Scroll-Controlled Hero Component
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<AnimationController | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Initialize animation controller
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const dpr = window.devicePixelRatio || 1;
    const updateSize = () => {
      const size = Math.max(window.innerWidth, window.innerHeight);
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      
      if (animationRef.current) {
        animationRef.current = new AnimationController(canvas, ctx, dpr, size);
        animationRef.current.setTime(scrollProgress);
      } else {
        animationRef.current = new AnimationController(canvas, ctx, dpr, size);
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);
  
  // Handle scroll-driven animation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      // Start when container enters viewport, end when it leaves
      const scrollStart = -rect.top;
      const scrollRange = containerHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollRange));
      
      setScrollProgress(progress);
      
      if (animationRef.current) {
        animationRef.current.setTime(progress);
      }
    };
    
    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Text fade calculations
  const textOpacity = scrollProgress < 0.3 ? 1 : Math.max(0, 1 - (scrollProgress - 0.3) / 0.2);
  const textScale = 1 - scrollProgress * 0.1;
  
  return (
    <div ref={containerRef} className="relative  " style={{ height: '300vh' }}>
      {/* Fixed canvas background */}
      <div className="fixed inset-0 w-full h-screen">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      
      {/* Fixed content overlay */}
      <div className="fixed inset-0 w-full h-screen flex items-center justify-center pointer-events-none">
        <div 
          className="text-center px-4 md:px-6 transition-all duration-300"
          style={{ 
            opacity: textOpacity,
            transform: `scale(${textScale})`,
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4 md:mb-6">
            <WorldShippingIcon width={24} height={24} />
            <span className="text-xs md:text-sm text-white">World Of Wonders</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-4 md:mb-6 text-white">
            Tomorrow isn't coming—
            <br />
            it's already built here
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 max-w-3xl mx-auto">
            Step into the World Of Wonders That We Translate Your Innovation into Reality With AR/VR and AI
          </p>

          {/* CTA Button */}
          <button className="pointer-events-auto px-6 md:px-8 py-3 md:py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 shadow-lg text-black font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="fixed bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 pointer-events-none"
        style={{ opacity: scrollProgress < 0.1 ? 1 : 0 }}
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
