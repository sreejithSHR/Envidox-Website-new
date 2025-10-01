import React from "react";

const Icons = {
  notion: () => (
    <svg
      fill="none"
      height="40"
      viewBox="0 0 100 100"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917z"
        fill="#000000"
      />
    </svg>
  ),
  openai: () => (
    <svg
      className="fill-black"
      height="40"
      viewBox="0 0 24 24"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729z" />
    </svg>
  ),
  googleDrive: () => (
    <svg
      height="40"
      viewBox="0 0 87.3 78"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
    </svg>
  ),
  whatsapp: () => (
    <svg
      height="40"
      viewBox="0 0 175.216 175.552"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        fill="#25D366"
      />
      <path
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        fill="#ffffff"
      />
    </svg>
  ),
  github: () => (
    <svg height="40" viewBox="0 0 438.549 438.549" width="40">
      <path
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
        fill="currentColor"
      />
    </svg>
  ),
};

function OrbitingCircles() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:py-16 overflow-hidden gap-8 lg:gap-4">
      {/* Left Text */}
      <div className="flex-1 text-center lg:text-left space-y-4 lg:space-y-6 z-20 order-1 lg:order-1">
        <div className="space-y-2">
          <h3 className="text-xs sm:text-sm font-semibold text-violet-600 uppercase tracking-wide">
            Integrations
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Connect Everything
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-md mx-auto lg:mx-0">
            Seamlessly integrate with your favorite tools and platforms to
            streamline your workflow
          </p>
        </div>
        <div className="space-y-2 lg:space-y-3">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="w-2 h-2 bg-violet-600 rounded-full" />
            <span className="text-sm sm:text-base text-gray-500">
              Real-time synchronization
            </span>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="w-2 h-2 bg-violet-600 rounded-full" />
            <span className="text-sm sm:text-base text-gray-500">
              Secure API connections
            </span>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="w-2 h-2 bg-violet-600 rounded-full" />
            <span className="text-sm sm:text-base text-gray-500">
              One-click setup
            </span>
          </div>
        </div>
      </div>

      {/* Center - Orbiting Circles */}
      <div className="relative flex items-center justify-center w-full sm:w-[400px] lg:w-[500px] h-[350px] sm:h-[400px] lg:h-[500px] order-2">
        {/* Ambient Glow Effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[300px] h-[300px] bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Center Logo */}
        <div className="absolute z-10 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 rounded-full shadow-[0_0_50px_rgba(139,92,246,0.5),inset_0_2px_20px_rgba(255,255,255,0.3)] backdrop-blur-sm border border-white/20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/10 to-white/30" />
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M13 10V3L4 14h7v7l9-11h-7z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>

        {/* Outer Orbit */}
        <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] animate-[spin_20s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-full shadow-[0_8px_32px_rgba(139,92,246,0.3),inset_0_2px_12px_rgba(255,255,255,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300 border border-violet-500/30 backdrop-blur-sm hover:shadow-[0_8px_48px_rgba(139,92,246,0.6)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-violet-500/10 to-violet-400/20" />
            <div className="relative z-10">
              <Icons.notion />
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-full shadow-[0_8px_32px_rgba(139,92,246,0.3),inset_0_2px_12px_rgba(255,255,255,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300 border border-violet-500/30 backdrop-blur-sm hover:shadow-[0_8px_48px_rgba(139,92,246,0.6)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-violet-500/10 to-violet-400/20" />
            <div className="relative z-10">
              <Icons.openai />
            </div>
          </div>
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-full shadow-[0_8px_32px_rgba(139,92,246,0.3),inset_0_2px_12px_rgba(255,255,255,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300 border border-violet-500/30 backdrop-blur-sm hover:shadow-[0_8px_48px_rgba(139,92,246,0.6)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-violet-500/10 to-violet-400/20" />
            <div className="relative z-10">
              <Icons.googleDrive />
            </div>
          </div>
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-full shadow-[0_8px_32px_rgba(139,92,246,0.3),inset_0_2px_12px_rgba(255,255,255,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300 border border-violet-500/30 backdrop-blur-sm hover:shadow-[0_8px_48px_rgba(139,92,246,0.6)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-violet-500/10 to-violet-400/20" />
            <div className="relative z-10">
              <Icons.whatsapp />
            </div>
          </div>
        </div>

        {/* Inner Orbit (Reverse) */}
        <div className="absolute w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] animate-[spin_15s_linear_infinite_reverse]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-full shadow-[0_8px_32px_rgba(168,85,247,0.3),inset_0_2px_12px_rgba(255,255,255,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300 border border-purple-500/30 backdrop-blur-sm hover:shadow-[0_8px_48px_rgba(168,85,247,0.6)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-purple-500/10 to-purple-400/20" />
            <div className="relative z-10">
              <Icons.github />
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-full shadow-[0_8px_32px_rgba(168,85,247,0.3),inset_0_2px_12px_rgba(255,255,255,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300 border border-purple-500/30 backdrop-blur-sm hover:shadow-[0_8px_48px_rgba(168,85,247,0.6)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-purple-500/10 to-purple-400/20" />
            <div className="relative z-10">
              <Icons.whatsapp />
            </div>
          </div>
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-full shadow-[0_8px_32px_rgba(168,85,247,0.3),inset_0_2px_12px_rgba(255,255,255,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300 border border-purple-500/30 backdrop-blur-sm hover:shadow-[0_8px_48px_rgba(168,85,247,0.6)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-purple-500/10 to-purple-400/20" />
            <div className="relative z-10">
              <Icons.notion />
            </div>
          </div>
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-full shadow-[0_8px_32px_rgba(168,85,247,0.3),inset_0_2px_12px_rgba(255,255,255,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300 border border-purple-500/30 backdrop-blur-sm hover:shadow-[0_8px_48px_rgba(168,85,247,0.6)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-purple-500/10 to-purple-400/20" />
            <div className="relative z-10">
              <Icons.openai />
            </div>
          </div>
        </div>

        {/* Orbit Rings with Glow */}
        <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] border-2 border-dashed border-violet-500/30 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.2)]" />
        <div className="absolute w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] border-2 border-dashed border-purple-500/30 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.2)]" />
      </div>

      {/* Right Text */}
      <div className="flex-1 text-center lg:text-right space-y-4 lg:space-y-6 z-20 order-3 lg:order-3">
        <div className="space-y-2">
          <h3 className="text-xs sm:text-sm font-semibold text-violet-600 uppercase tracking-wide">
            Automation
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Work Smarter
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-md mx-auto lg:ml-auto lg:mr-0">
            Automate repetitive tasks and focus on what matters most with
            intelligent workflows
          </p>
        </div>
        <div className="space-y-2 lg:space-y-3">
          <div className="flex items-center justify-center lg:justify-end gap-3">
            <span className="text-sm sm:text-base text-gray-500 lg:order-1 order-2">
              Advanced analytics
            </span>
            <div className="w-2 h-2 bg-violet-600 rounded-full lg:order-2 order-1" />
          </div>
          <div className="flex items-center justify-center lg:justify-end gap-3">
            <span className="text-sm sm:text-base text-gray-500 lg:order-1 order-2">
              Custom workflows
            </span>
            <div className="w-2 h-2 bg-violet-600 rounded-full lg:order-2 order-1" />
          </div>
          <div className="flex items-center justify-center lg:justify-end gap-3">
            <span className="text-sm sm:text-base text-gray-500 lg:order-1 order-2">
              24/7 monitoring
            </span>
            <div className="w-2 h-2 bg-violet-600 rounded-full lg:order-2 order-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrbitingCircles;
