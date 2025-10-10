import { LucideIcon, ArrowUpRight } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  emoji: string;
}

export default function ExperienceCard({ title, description, icon: Icon, gradient, emoji }: ExperienceCardProps) {
  return (
    <div className="group relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <div className="flex items-start justify-between mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed mb-4">
        {description}
      </p>

      <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Try it out
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>

      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
    </div>
  );
}
