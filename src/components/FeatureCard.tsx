import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="group relative bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-10 hover:bg-white/80 hover:border-gray-300/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600/10 to-violet-600/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:from-blue-600/20 group-hover:to-violet-600/20 transition-all duration-500">
          <Icon className="w-10 h-10 text-blue-600" />
        </div>

        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed text-lg">
          {description}
        </p>
      </div>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
