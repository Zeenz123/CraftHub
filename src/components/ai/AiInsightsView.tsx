import React from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Target, 
  BarChart3, 
  TrendingUp, 
  Activity, 
  Bot,
  Layers,
  Clock
} from 'lucide-react';

export const AiInsightsView: React.FC = () => {
  const insightsModules = [
    {
      id: 'ai-1',
      title: 'Personalized Learning',
      description: 'Generative adaptive curriculum matching your hardware gaps with targeted micro-tasks.',
      icon: GraduationCap,
      badge: 'Coming Soon'
    },
    {
      id: 'ai-2',
      title: 'Project Matching',
      description: 'Neural graph pairing of student engineers to high-priority open-source repository issues.',
      icon: Target,
      badge: 'Coming Soon'
    },
    {
      id: 'ai-3',
      title: 'Skill Analysis',
      description: 'Automated cryptographic verification of code commits, schematic reviews, and lab proofs.',
      icon: BarChart3,
      badge: 'Coming Soon'
    },
    {
      id: 'ai-4',
      title: 'Market Insights',
      description: 'Predictive analytics on regional hardware component shortages and high-demand skill niches.',
      icon: TrendingUp,
      badge: 'Coming Soon'
    },
    {
      id: 'ai-5',
      title: 'Ecosystem Forecasting',
      description: 'Macro mapping of university lab throughput, prototyping pipeline velocity, and patent yields.',
      icon: Activity,
      badge: 'Coming Soon'
    },
    {
      id: 'ai-6',
      title: 'Intelligent Assistant',
      description: 'Context-aware copilot for KiCAD routing guidance, FreeCAD constraint checks, and BOM pricing.',
      icon: Bot,
      badge: 'Coming Soon'
    }
  ];

  return (
    <div id="ai-insights-view" className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-2xl font-bold text-white tracking-tight">AI Insights</h1>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-cyan-400" /> Planned Architecture
          </span>
        </div>
        <p className="text-xs text-slate-400">Smarter recommendations, deeper analysis, and automated matching algorithms.</p>
      </div>

      {/* 6 Cards in 3x2 Grid matching Reference Image Screen 17 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {insightsModules.map((module) => {
          const Icon = module.icon;
          return (
            <div 
              key={module.id}
              className="ch-card p-6 flex flex-col items-center text-center justify-between min-h-[170px] hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(30,107,255,0.15)] transition-all group"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-[#0e1b3d] border border-[#1d3166] flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 group-hover:border-blue-400 transition-all">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{module.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                  {module.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#152347] w-full flex justify-center">
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#111e44] text-blue-300 border border-[#1e3060] font-medium flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5 text-blue-400" /> {module.badge}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center Brand Footer */}
      <div className="text-center pt-8 border-t border-[#192a56]/60 flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <span className="font-extrabold text-base text-white tracking-tight">CraftHub</span>
        </div>
        <p className="text-xs text-slate-400">People. Projects. Possibilities.</p>
      </div>
    </div>
  );
};
