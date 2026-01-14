import { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface CourseProps {
  formUrl?: string;
  masterclassDate?: string;
  courseImageUrl?: string;
  posterImageUrl?: string;
}

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CoursesSection = ({
  formUrl = '#',
  masterclassDate = '2026-02-15T14:00:00',
  courseImageUrl = 'https://images.pexels.com/photos/3862630/pexels-photo-3862630.jpeg?auto=compress&cs=tinysrgb&w=600',
  posterImageUrl = 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
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
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Level Up Your Skills
          </h2>
          <p className="text-center text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Join our comprehensive courses and live masterclasses to master the art of interactive design and development.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* 3-Month Course Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300">
            {/* Image Container */}
            <div className="relative h-64 md:h-72 overflow-hidden bg-gray-200">
              <img
                src={courseImageUrl}
                alt="3-Month Course"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  Comprehensive Course
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                3-Month Intensive Course
              </h3>

              <div className="mb-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="text-sm md:text-base">12 weeks of intensive learning</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="text-sm md:text-base">Flexible scheduling available</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Master advanced concepts through structured lessons, hands-on projects, and personalized mentorship. Perfect for those serious about leveling up.
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-start text-sm md:text-base text-gray-700">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span>Expert-led curriculum</span>
                </li>
                <li className="flex items-start text-sm md:text-base text-gray-700">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span>Real-world projects</span>
                </li>
                <li className="flex items-start text-sm md:text-base text-gray-700">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span>1-on-1 mentorship</span>
                </li>
                <li className="flex items-start text-sm md:text-base text-gray-700">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span>Certification included</span>
                </li>
              </ul>

              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 group/btn"
              >
                Go to Forms
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Live Masterclass Card - LinkedIn Style */}
          <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
            {/* Poster Image Container */}
            <div className="relative h-64 md:h-72 overflow-hidden bg-gray-200">
              <img
                src={posterImageUrl}
                alt="Live Masterclass"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Live Badge */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm animate-pulse">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                  Live Coming Soon
                </div>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  2-Hour Live Masterclass
                </h3>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 pb-6 border-b border-gray-200">
                <div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-5 h-5 mr-2 text-red-600" />
                    <span className="text-sm md:text-base font-semibold">
                      {formatDate(masterclassDate)}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2 text-red-600" />
                    <span className="text-sm md:text-base font-semibold">
                      {formatTime(masterclassDate)} UTC
                    </span>
                  </div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                {isLive ? (
                  <div className="text-center">
                    <p className="text-red-600 font-bold text-lg">Class is LIVE NOW!</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs md:text-sm text-gray-600 text-center mb-3 font-semibold uppercase tracking-wide">
                      Starts in
                    </p>
                    <div className="grid grid-cols-4 gap-2 md:gap-3">
                      <div className="text-center">
                        <div className="bg-blue-600 text-white rounded-lg p-2 md:p-3">
                          <p className="font-bold text-lg md:text-xl">{countdown.days}</p>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Days</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-blue-600 text-white rounded-lg p-2 md:p-3">
                          <p className="font-bold text-lg md:text-xl">{countdown.hours}</p>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Hours</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-blue-600 text-white rounded-lg p-2 md:p-3">
                          <p className="font-bold text-lg md:text-xl">{countdown.minutes}</p>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Mins</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-blue-600 text-white rounded-lg p-2 md:p-3">
                          <p className="font-bold text-lg md:text-xl">{countdown.seconds}</p>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Secs</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1">
                Join our expert instructors for an exclusive 2-hour live session where we dive deep into the latest techniques and trends. Interactive Q&A included!
              </p>

              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 md:py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 group/btn"
              >
                Click to Register
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
