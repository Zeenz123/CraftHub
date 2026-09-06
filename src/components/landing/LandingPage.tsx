import React from 'react';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  Layers, 
  Users, 
  FolderGit2, 
  Briefcase, 
  Cpu, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  Flame, 
  Building2, 
  FlaskConical, 
  Workflow,
  Compass,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const LandingPage: React.FC = () => {
  const { setCurrentView, setIsAuthModalOpen, setAuthModalMode } = useApp();

  const handleGetStarted = () => {
    setAuthModalMode('signup');
    setIsAuthModalOpen(true);
  };

  const handleLogin = () => {
    setAuthModalMode('login');
    setIsAuthModalOpen(true);
  };

  return (
    <div id="landing-page" className="min-h-screen bg-[#060b19] text-slate-100 selection:bg-blue-500/30 font-sans">
      {/* Top Floating Landing Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-[#16254a] sticky top-0 bg-[#060b19]/95 backdrop-blur-md z-40">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              CraftHub
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-400">
            <button onClick={() => setCurrentView('explore')} className="hover:text-cyan-300 transition-colors">Explore</button>
            <button onClick={() => setCurrentView('projects')} className="hover:text-cyan-300 transition-colors">Projects</button>
            <button onClick={() => setCurrentView('opportunities')} className="hover:text-cyan-300 transition-colors">Opportunities</button>
            <button onClick={() => setCurrentView('learn')} className="hover:text-cyan-300 transition-colors">Learn</button>
            <button onClick={() => setCurrentView('feed')} className="hover:text-cyan-300 transition-colors">Community</button>
            <button onClick={() => setCurrentView('infrastructure')} className="hover:text-cyan-300 transition-colors">Infrastructure</button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleLogin}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white transition-colors"
          >
            Log In
          </button>
          <button 
            onClick={handleGetStarted}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
          >
            Sign Up
          </button>
          <button
            onClick={() => setCurrentView('dashboard')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-cyan-400"
          >
            <span>Enter App</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-6 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto text-center">
          {/* Tag badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-6 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Open Technology Collaboration Ecosystem</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-none">
            People. Projects. <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Possibilities.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-normal mb-8 leading-relaxed">
            A unified ecosystem to learn, build, contribute, and create real-world impact. Bridging the gap between individual capability, physical infrastructure, and enterprise opportunity.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <button 
              onClick={handleGetStarted}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-200 font-bold text-sm transition-colors hover:bg-slate-800"
            >
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
              <span>Explore Interactive Platform</span>
            </button>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm mb-16 shadow-2xl">
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">50K+</div>
              <div className="text-xs font-semibold text-slate-400 mt-0.5">Learners & Makers</div>
            </div>
            <div className="text-center p-2 border-l border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">10K+</div>
              <div className="text-xs font-semibold text-slate-400 mt-0.5">Active Projects</div>
            </div>
            <div className="text-center p-2 border-l border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">2K+</div>
              <div className="text-xs font-semibold text-slate-400 mt-0.5">Startups & Labs</div>
            </div>
            <div className="text-center p-2 border-l border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">1K+</div>
              <div className="text-xs font-semibold text-slate-400 mt-0.5">Facilities & CNCs</div>
            </div>
            <div className="text-center p-2 border-l border-slate-800 col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100+</div>
              <div className="text-xs font-semibold text-slate-400 mt-0.5">Institutions</div>
            </div>
          </div>

          {/* 5 Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto text-left">
            {[
              {
                title: 'Learn',
                sub: 'Build skills for real-world',
                icon: GraduationCap,
                color: 'from-blue-500 to-cyan-500',
                view: 'learn' as const
              },
              {
                title: 'Build',
                sub: 'Work on physical & digital projects',
                icon: FolderGit2,
                color: 'from-cyan-500 to-teal-500',
                view: 'project-workspace' as const
              },
              {
                title: 'Contribute',
                sub: 'Make verifiable differences',
                icon: CheckCircle2,
                color: 'from-indigo-500 to-blue-500',
                view: 'submit-contribution' as const
              },
              {
                title: 'Connect',
                sub: 'Join a global tech ecosystem',
                icon: Users,
                color: 'from-purple-500 to-indigo-500',
                view: 'feed' as const
              },
              {
                title: 'Grow',
                sub: 'Turn ideas into impact & startups',
                icon: TrendingUp,
                color: 'from-emerald-500 to-teal-500',
                view: 'startups' as const
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  onClick={() => setCurrentView(pillar.view)}
                  className="p-4 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c1426] border border-slate-800/80 hover:border-cyan-500/50 cursor-pointer transition-all hover:-translate-y-1 group"
                >
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    {pillar.title}
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-1" />
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{pillar.sub}</p>
                </div>
              );
            })}
          </div>

          {/* Ecosystem Ribbon */}
          <div className="mt-8 text-xs font-semibold text-slate-400 uppercase tracking-widest flex flex-wrap justify-center gap-3">
            <span>Students</span> •
            <span>Professionals</span> •
            <span>Startups</span> •
            <span>Businesses</span> •
            <span>Researchers</span> •
            <span>Labs</span> •
            <span>Makers</span>
          </div>
        </div>
      </section>

      {/* Core Flow Architecture Section */}
      <section className="py-16 px-6 border-t border-slate-800/60 bg-[#090e1c]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">The Engine</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">From Idea to Sustainable Impact</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Unlike generic job boards or social networks, CraftHub links every stage of development into a verifiable portfolio of execution.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {[
              { step: '01', title: 'IDEA', desc: 'Conceive solution' },
              { step: '02', title: 'PROJECT', desc: 'Define workspace' },
              { step: '03', title: 'PEOPLE', desc: 'Gather team' },
              { step: '04', title: 'WORK', desc: 'Perform tasks' },
              { step: '05', title: 'VERIFY', desc: 'Proof of work' },
              { step: '06', title: 'GROWTH', desc: 'Skill credit' },
              { step: '07', title: 'OPP', desc: 'Earn roles' },
              { step: '08', title: 'SCALE', desc: 'Launch startup' },
            ].map((node, i) => (
              <div 
                key={node.step}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400">{node.step}</span>
                  <div className="text-xs font-black text-white mt-1">{node.title}</div>
                </div>
                <div className="text-[10px] text-slate-400 mt-2">{node.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Verification Levels */}
      <section className="py-16 px-6 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">Security & Trust</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Tiered Verification Architecture</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Protecting intellectual property, ensuring lab safety, and creating cryptographic proof of work.
              </p>
            </div>
            <button 
              onClick={() => {
                setAuthModalMode('levels');
                setIsAuthModalOpen(true);
              }}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-xs font-bold text-cyan-300 transition-colors self-start md:self-auto"
            >
              Explore Verification Levels (0–5)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#0b1222] border border-slate-800">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" /> Level 0 & 1 — Explorer
              </div>
              <h3 className="text-base font-bold text-white mb-2">Visitors & Basic Individuals</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Browse open source hardware schemas, view public opportunities, enroll in modular learning paths, and build an initial skill profile.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b1222] border border-blue-800/50 shadow-lg shadow-blue-950/30">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" /> Level 2 & 3 — Practitioner
              </div>
              <h3 className="text-base font-bold text-white mb-2">Verified Makers & Professionals</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Identity verified. Submit pull requests, firmware updates, and PCB layouts directly to workspace maintainers with verified portfolio logging.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b1222] border border-indigo-800/50">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" /> Level 4 & 5 — Organization
              </div>
              <h3 className="text-base font-bold text-white mb-2">Startups, Labs & Institutions</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Authorized representatives. Host proprietary workspaces, publish stipended opportunities, and grant physical lab machine access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer Strip */}
      <section className="py-20 px-6 bg-gradient-to-t from-blue-950/30 via-[#070b14] to-[#070b14] border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Anyone can build. Anyone can contribute.
          </h2>
          <p className="text-sm text-slate-300 mb-8">
            Join thousands of students, hardware engineers, researchers, and startups uniting to solve real physical and digital challenges.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={handleGetStarted}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform"
            >
              Join CraftHub Today
            </button>
            <button 
              onClick={() => setCurrentView('explore')}
              className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs"
            >
              Browse Open Workspaces
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
