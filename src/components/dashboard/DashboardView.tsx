import React from 'react';
import { 
  FolderGit2, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  ArrowRight, 
  Clock, 
  Plus, 
  ExternalLink, 
  Sparkles, 
  ChevronRight, 
  Cpu, 
  Users, 
  Award,
  Layers
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DashboardView: React.FC = () => {
  const { 
    currentUser, 
    projects, 
    opportunities, 
    courses, 
    setCurrentView, 
    setSelectedProjectId,
    applyToOpportunity,
    appliedOpportunityIds,
    setIsCreateProjectOpen
  } = useApp();

  const inProgressCourse = courses[0] || {
    id: 'learn-1',
    title: 'Embedded Systems Basics',
    category: 'Electronics',
    level: 'Beginner',
    progress: 60,
    thumbnail: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&auto=format&fit=crop&q=80'
  };

  const featuredOpp = opportunities.find(o => o.title.includes('Frontend') || o.title.includes('Water')) || opportunities[0] || {
    id: 'opp-1',
    title: 'IoT Based Water Monitor',
    organization: 'CleanEarth Tech',
    location: 'Remote',
    difficulty: 'Beginner'
  };

  return (
    <div id="dashboard-view" className="p-6 space-y-5 max-w-7xl mx-auto font-sans">
      {/* Greeting Header matching Screen 5 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Good Evening,
            </h1>
            <span className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-1.5">
              {currentUser.name} <span>👋</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            “Small steps in the right direction lead to big opportunities.”
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setCurrentView('submit-contribution')}
            className="ch-btn-secondary px-3.5 py-1.5 text-xs flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Submit Work</span>
          </button>
          <button
            onClick={() => setIsCreateProjectOpen(true)}
            className="ch-btn-primary px-3.5 py-1.5 text-xs flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Project</span>
          </button>
        </div>
      </div>

      {/* 4 Metric Cards in a Row matching Reference Image Screen 5 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* 1. Active Projects */}
        <div 
          onClick={() => setCurrentView('projects')}
          className="ch-card p-4 text-center cursor-pointer hover:border-blue-500 hover:shadow-[0_0_15px_rgba(30,107,255,0.15)] transition-all"
        >
          <div className="text-2xl sm:text-3xl font-extrabold text-white">3</div>
          <div className="text-xs text-slate-400 font-medium mt-1">Active Projects</div>
        </div>

        {/* 2. Contributions */}
        <div 
          onClick={() => setCurrentView('portfolio')}
          className="ch-card p-4 text-center cursor-pointer hover:border-blue-500 hover:shadow-[0_0_15px_rgba(30,107,255,0.15)] transition-all"
        >
          <div className="text-2xl sm:text-3xl font-extrabold text-white">12</div>
          <div className="text-xs text-slate-400 font-medium mt-1">Contributions</div>
        </div>

        {/* 3. Learning Modules */}
        <div 
          onClick={() => setCurrentView('learn')}
          className="ch-card p-4 text-center cursor-pointer hover:border-blue-500 hover:shadow-[0_0_15px_rgba(30,107,255,0.15)] transition-all"
        >
          <div className="text-2xl sm:text-3xl font-extrabold text-white">6</div>
          <div className="text-xs text-slate-400 font-medium mt-1">Learning Modules</div>
        </div>

        {/* 4. Opportunities */}
        <div 
          onClick={() => setCurrentView('opportunities')}
          className="ch-card p-4 text-center cursor-pointer hover:border-blue-500 hover:shadow-[0_0_15px_rgba(30,107,255,0.15)] transition-all"
        >
          <div className="text-2xl sm:text-3xl font-extrabold text-white">8</div>
          <div className="text-xs text-slate-400 font-medium mt-1">Opportunities</div>
        </div>
      </div>

      {/* Row 2: Continue Learning & Your Opportunity (50% / 50% matching Screen 5) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Continue Learning */}
        <div className="ch-card p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold text-white tracking-wide">Continue Learning</h2>
            <button 
              onClick={() => setCurrentView('learn')}
              className="text-[11px] text-blue-400 hover:underline flex items-center"
            >
              All Courses <ChevronRight className="w-3 h-3 ml-0.5" />
            </button>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#091126] border border-[#16254a]">
            <img 
              src={inProgressCourse.thumbnail} 
              alt={inProgressCourse.title}
              className="w-16 h-14 rounded-lg object-cover border border-[#1b2f62] shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-xs font-bold text-white truncate">{inProgressCourse.title}</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">Electronics • Beginner</p>
              
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 h-1.5 bg-[#121f42] rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }} />
                </div>
                <span className="text-[10px] text-blue-400 font-bold">60%</span>
              </div>
            </div>

            <button 
              onClick={() => setCurrentView('learn')}
              className="ch-btn-primary px-3 py-1.5 text-xs shrink-0"
            >
              Continue
            </button>
          </div>
        </div>

        {/* Your Opportunity */}
        <div className="ch-card p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold text-white tracking-wide">Your Opportunity</h2>
            <button 
              onClick={() => setCurrentView('opportunities')}
              className="text-[11px] text-blue-400 hover:underline flex items-center"
            >
              Explore <ChevronRight className="w-3 h-3 ml-0.5" />
            </button>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#091126] border border-[#16254a]">
            <div className="w-14 h-14 rounded-lg bg-[#111e44] border border-[#1d3166] flex items-center justify-center text-blue-400 shrink-0">
              <Briefcase className="w-6 h-6 text-blue-400" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-xs font-bold text-white truncate">IoT Based Water Monitor</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">Remote • Beginner</p>
              <div className="flex items-center gap-1.5 mt-1.5 text-[10px] text-blue-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Active project opening</span>
              </div>
            </div>

            <button 
              onClick={() => {
                applyToOpportunity('opp-1');
                setCurrentView('opportunities');
              }}
              className="ch-btn-primary px-3.5 py-1.5 text-xs shrink-0"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Row 3: Your Recent Activity & Recommended For You (50% / 50% matching Screen 5) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Your Recent Activity */}
        <div className="ch-card p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold text-white tracking-wide">Your Recent Activity</h2>
            <span className="text-[10px] text-slate-400">Past 7 days</span>
          </div>

          <div className="space-y-2.5">
            {[
              {
                title: 'Submitted a contribution',
                sub: 'Solar Tracker Project',
                color: 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
              },
              {
                title: 'Completed a learning module',
                sub: 'Python for IoT',
                color: 'bg-cyan-600/20 text-cyan-400 border border-cyan-500/30'
              },
              {
                title: 'Applied to opportunity',
                sub: 'Hardware Testing Support',
                color: 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#091126] border border-[#16254a]">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${item.color}`}>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-white truncate">{item.title}</p>
                  <p className="text-[11px] text-slate-400 truncate">{item.sub}</p>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Recommended For You */}
        <div className="ch-card p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold text-white tracking-wide">Recommended For You</h2>
            <button 
              onClick={() => setCurrentView('learn')}
              className="text-[11px] text-blue-400 hover:underline flex items-center"
            >
              View More <ChevronRight className="w-3 h-3 ml-0.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Card 1: PCB Design Basics */}
            <div 
              onClick={() => setCurrentView('learn')}
              className="p-2.5 rounded-xl bg-[#091126] border border-[#16254a] hover:border-blue-500/50 cursor-pointer transition-all group"
            >
              <div className="w-full h-20 rounded-lg overflow-hidden mb-2 border border-[#1c2e60]">
                <img 
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&auto=format&fit=crop&q=80" 
                  alt="PCB Design Basics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                PCB Design Basics
              </h3>
              <p className="text-[10px] text-blue-400 mt-0.5">Hardware</p>
            </div>

            {/* Card 2: AI for Agriculture */}
            <div 
              onClick={() => setCurrentView('explore')}
              className="p-2.5 rounded-xl bg-[#091126] border border-[#16254a] hover:border-blue-500/50 cursor-pointer transition-all group"
            >
              <div className="w-full h-20 rounded-lg overflow-hidden mb-2 border border-[#1c2e60]">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80" 
                  alt="AI for Agriculture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                AI for Agriculture
              </h3>
              <p className="text-[10px] text-cyan-400 mt-0.5">AgriTech</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
