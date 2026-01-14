import { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Gamepad2, Code, Users, Award, Brain, Box, Glasses, Film, Cpu, Layers } from 'lucide-react';

interface CourseProps {
  formUrl1?: string;   // Unreal Engine Course
  formUrl2?: string;   // Live Masterclass
  masterclassDate?: string;
  courseImageUrl?: string;
  posterImageUrl?: string;
  phoneNumber?: string;
}


interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  gradient 
}) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-all duration-300 hover:border-transparent">
      
      {/* Header Row with Icon + Title */}
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-10 h-10 rounded-lg ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors leading-snug">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-3 text-sm leading-relaxed text-left">
        {description}
      </p>
      
      {/* Features List */}
      <ul className="space-y-1.5 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            {feature}
          </li>
        ))}
      </ul>
      
      {/* Button */}
      <button className="w-full mt-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-md border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-colors group-hover:shadow-sm">
        Learn More
      </button>
    </div>
  );
};

const CoursesSection = ({
  formUrl1 = 'https://forms.gle/pZHu4HfCqQ5W6wdM8',
  formUrl2 = 'https://forms.gle/gniqb52DSs8kR8eY8',
  masterclassDate = '2026-01-24T17:30:00',
  courseImageUrl = 'https://cdn.jsdelivr.net/gh/sreejithSHR/solanki-assets@main/3.png',
  posterImageUrl = 'https://cdn.jsdelivr.net/gh/sreejithSHR/solanki-assets@main/1.png',
  phoneNumber = '+916381810189',
}: CourseProps) => {

  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date(masterclassDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsLive(true);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setIsLive(false);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, [masterclassDate]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const services = [
    {
      icon: Brain,
      title: "Computer Vision AI",
      description: "Master the future of visual intelligence with cutting-edge AI and machine learning technologies.",
      features: [
        "Object Detection & Recognition",
        "Image Processing & Analysis",
        "Deep Learning Models",
        "Real-world AI Applications"
      ],
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: Box,
      title: "3D Modelling",
      description: "Create stunning 3D assets and environments using industry-standard tools and techniques.",
      features: [
        "Character & Environment Design",
        "Texturing & Material Creation",
        "UV Mapping & Optimization",
        "Portfolio Development"
      ],
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: Glasses,
      title: "AR/VR Development",
      description: "Build immersive augmented and virtual reality experiences for the next generation of computing.",
      features: [
        "Unity & Unreal AR/VR",
        "Spatial Computing",
        "Interactive Experiences",
        "Cross-platform Deployment"
      ],
      gradient: "bg-gradient-to-br from-pink-500 to-pink-600"
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Transform your ideas into playable games with professional game design and development skills.",
      features: [
        "Game Design Fundamentals",
        "Unreal & Unity Engines",
        "Gameplay Programming",
        "Level Design & Mechanics"
      ],
      gradient: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: Film,
      title: "VFX & Animation",
      description: "Create breathtaking visual effects and animations for films, games, and digital media.",
      features: [
        "Motion Graphics & Compositing",
        "Particle Systems & Dynamics",
        "Character Animation",
        "Post-Production Workflows"
      ],
      gradient: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      icon: Cpu,
      title: "Simulation & Physics",
      description: "Develop realistic simulations for training, visualization, and scientific applications.",
      features: [
        "Physics-based Simulation",
        "Training Simulators",
        "Data Visualization",
        "Real-time Rendering"
      ],
      gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 ">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Master 3D Development
          </h2>
          <p className="text-center text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-6">
            Transform your career with our comprehensive 3D courses in Computer Vision AI, 3D Modelling, AR/VR, Game Development, VFX, and Simulation. Expert-led training for individuals, colleges, and schools.
          </p>
          
        </div>

        

        {/* Services Grid */}
        <div className="mb-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* What's Happening Now Section */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            What's Happening Now
          </h3>
          <p className="text-center text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-10">
            Join our live courses and masterclasses to accelerate your learning journey
          </p>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* 3-Month Unreal Engine Course Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              {/* Image Container - Taller for poster */}
              <div className="relative h-96 md:h-[500px] lg:h-[550px] overflow-hidden bg-gradient-to-br from-purple-900 to-purple-700 flex-shrink-0">
                <img
                  src={courseImageUrl}
                  alt="Unreal Engine Course"
                  className="w-full h-full object-cover object-center opacity-100 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4 right-4">
                  <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                    ONLINE COURSE
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    Unreal Engine
                  </h3>
                  <p className="text-purple-200 text-sm md:text-base font-medium">
                    Game Design & Development
                  </p>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="text-purple-700 font-semibold text-base md:text-lg mb-2">
                    Beginner → Intermediate Unreal Engine Training
                  </p>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-purple-600" />
                    <span>12 weeks | 120+ Hours | Live Instructor-Led</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                  Master Unreal Engine through instructor-led live classes, hands-on development, and industry-grade workflows.
                </p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-purple-600 font-bold mr-3 mt-0.5">✓</span>
                    <span><strong>Beginner to Intermediate</strong> Training</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-purple-600 font-bold mr-3 mt-0.5">✓</span>
                    <span><strong>Hands-On Development</strong> with Projects</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-purple-600 font-bold mr-3 mt-0.5">✓</span>
                    <span><strong>Industry-Experienced</strong> Trainers</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <span className="text-purple-600 font-bold mr-3 mt-0.5">✓</span>
                    <span><strong>120+ Hours</strong> Live Classes</span>
                  </li>
                </ul>

                <a
                  href={formUrl1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors duration-200 group/btn shadow-md hover:shadow-lg mt-auto"
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* 2-Hour Live Masterclass Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              {/* Poster Image Container with Countdown Overlay */}
              <div className="relative h-96 md:h-[500px] lg:h-[550px] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 flex-shrink-0">
                <img
                  src={posterImageUrl}
                  alt="Live Masterclass"
                  className="w-full h-full object-cover object-center opacity-100 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Live Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                    LIVE SOON
                  </div>
                </div>

                {/* Countdown Timer Over Image - Minimalist Style */}
                <div className="absolute top-4 left-4 right-4">
                  {isLive ? (
                    <div className="bg-red-600/95 backdrop-blur-sm rounded-full px-6 py-3 text-center">
                      <p className="text-white font-bold text-base">🔴 LIVE NOW!</p>
                    </div>
                  ) : (
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                      <div className="flex items-center justify-center gap-3 md:gap-4">
                        <div className="text-center">
                          <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                            {countdown.days}
                          </div>
                          <div className="text-xs text-white/70 uppercase tracking-wider">Days</div>
                        </div>
                        <div className="text-2xl md:text-3xl text-white/50 font-light">:</div>
                        <div className="text-center">
                          <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                            {countdown.hours}
                          </div>
                          <div className="text-xs text-white/70 uppercase tracking-wider">Hours</div>
                        </div>
                        <div className="text-2xl md:text-3xl text-white/50 font-light">:</div>
                        <div className="text-center">
                          <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                            {countdown.minutes}
                          </div>
                          <div className="text-xs text-white/70 uppercase tracking-wider">Min</div>
                        </div>
                        <div className="text-2xl md:text-3xl text-white/50 font-light">:</div>
                        <div className="text-center">
                          <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                            {countdown.seconds}
                          </div>
                          <div className="text-xs text-white/70 uppercase tracking-wider">Sec</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Build a Game in Two Hours
                  </h3>
                  <p className="text-red-400 font-semibold text-base md:text-lg">
                    Want to be a Game Developer?
                  </p>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-gray-200">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-4 h-4 mr-2 text-red-600" />
                    <span className="text-sm font-bold">{formatDate(masterclassDate)}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 mr-2 text-red-600" />
                    <span className="text-sm font-bold">{formatTime(masterclassDate)}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                  Join our live masterclass and build a complete playable game with our experts. Perfect for beginners who want real results.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-5 flex-1">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-xs text-gray-700">
                      <Code className="w-4 h-4 mr-2 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Hands-on training in tools</span>
                    </li>
                    <li className="flex items-start text-xs text-gray-700">
                      <Gamepad2 className="w-4 h-4 mr-2 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Understanding Game Design</span>
                    </li>
                    <li className="flex items-start text-xs text-gray-700">
                      <Users className="w-4 h-4 mr-2 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Level Building & Mechanics</span>
                    </li>
                    <li className="flex items-start text-xs text-gray-700">
                      <Award className="w-4 h-4 mr-2 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Beginner-friendly learning</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-2.5 mb-5">
                  <p className="text-green-800 font-semibold text-xs text-center">
                    🎁 Free Assets & Project Files Provided
                  </p>
                </div>

                <a
                  href={formUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 group/btn shadow-md hover:shadow-lg mt-auto"
                >
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
        </div>
        {/* School/College Workshop Contact Section */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Are you a college or school Lokking For A Workshop?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Bring industry-standard 3D development training to your institution. Schedule a call to discuss custom workshop programs.
              </p>
            </div>
            <a
              href={`tel:${phoneNumber}`}

              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-base hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              📞 Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;