import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  targetX: number;
  targetY: number;
  id: string;
}

const ParticleHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Text to display
  const text = 'welcome to world of wonders';

  // Create particles that form the text
  const createTextParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return [];

    const ctx = canvas.getContext('2d');
    if (!ctx) return [];

    // Set font
    const fontSize = window.innerWidth < 768 ? 24 : 48;
    ctx.font = `bold ${fontSize}px 'Space Grotesk', sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Get text metrics
    const metrics = ctx.measureText(text);
    const textWidth = metrics.width;
    const textHeight = fontSize;

    // Calculate starting position (centered)
    const startX = canvas.width / 2 - textWidth / 2;
    const startY = canvas.height / 2;

    // Create particles for each character
    const newParticles: Particle[] = [];
    let particleId = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const charX = startX + ctx.measureText(text.substring(0, i)).width;
      const charY = startY;

      // Create multiple particles per character
      const particlesPerChar = window.innerWidth < 768 ? 3 : 6;
      for (let j = 0; j < particlesPerChar; j++) {
        newParticles.push({
          x: canvas.width / 2 + (Math.random() - 0.5) * 400,
          y: canvas.height / 2 + (Math.random() - 0.5) * 400,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          life: 1,
          size: Math.random() * 3 + 2,
          targetX: charX + (Math.random() - 0.5) * 20,
          targetY: charY + (Math.random() - 0.5) * 20,
          id: `${i}-${j}-${particleId++}`,
        });
      }
    }

    return newParticles;
  };

  // Initialize canvas and particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create initial particles
    const newParticles = createTextParticles();
    particlesRef.current = newParticles;
    setParticles(newParticles);

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  // Animate particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      const updatedParticles = particlesRef.current.map((particle) => {
        // Move towards target
        const dx = particle.targetX - particle.x;
        const dy = particle.targetY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 1) {
          particle.vx += (dx / distance) * 0.2;
          particle.vy += (dy / distance) * 0.2;
        } else {
          // Particle reached target, add slight drift
          particle.vx += (Math.random() - 0.5) * 0.1;
          particle.vy += (Math.random() - 0.5) * 0.1;
        }

        // Apply friction
        particle.vx *= 0.95;
        particle.vy *= 0.95;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Maintain life
        particle.life = Math.min(particle.life + 0.005, 1);

        return particle;
      });

      // Draw particles
      updatedParticles.forEach((particle) => {
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.life * 0.8})`;
        ctx.shadowColor = `rgba(59, 130, 246, ${particle.life * 0.6})`;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * particle.life, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.shadowColor = 'transparent';
      particlesRef.current = updatedParticles;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center">
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
      />

      {/* Overlay text for fallback */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-300 text-center px-4 opacity-30">
          welcome to world of wonders
        </h1>
      </div>

      {/* Bottom section with content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-white via-white to-transparent pt-20 pb-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Experience the magic of interactive design
          </p>
          <button className="px-8 py-3 md:px-10 md:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParticleHero;
