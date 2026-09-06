import React from 'react';
import { 
  LayoutDashboard, 
  Compass,
  FolderGit2, 
  Briefcase, 
  GraduationCap,
  Users, 
  Cpu, 
  Rocket,
  Building2,
  FlaskConical,
  MessageSquare, 
  Bell,
  MapPin,
  ShieldCheck,
  ChevronRight,
  UserCheck,
  Award,
  Sparkles
} from 'lucide-react';
import { useApp, AppView } from '../../context/AppContext';
import { UserRole } from '../../types';

export const Sidebar: React.FC = () => {
  const { 
    currentView, 
    setCurrentView, 
    currentUser, 
    switchRole,
    setIsAuthModalOpen,
    setAuthModalMode
  } = useApp();

  const navItems = [
    { id: 'dashboard' as AppView, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'explore' as AppView, label: 'Explore', icon: Compass },
    { id: 'projects' as AppView, label: 'Projects', icon: FolderGit2 },
    { id: 'opportunities' as AppView, label: 'Opportunities', icon: Briefcase },
    { id: 'learn' as AppView, label: 'Learn', icon: GraduationCap },
    { id: 'feed' as AppView, label: 'Community', icon: Users },
    { id: 'infrastructure' as AppView, label: 'Infrastructure', icon: Cpu },
    { id: 'startups' as AppView, label: 'Startups', icon: Rocket },
    { id: 'businesses' as AppView, label: 'Businesses', icon: Building2 },
    { id: 'research' as AppView, label: 'Research', icon: FlaskConical },
    { id: 'messages' as AppView, label: 'Messages', icon: MessageSquare, badge: '3' },
    { id: 'notifications' as AppView, label: 'Notifications', icon: Bell, badge: '5' },
  ];

  const handleNavClick = (id: AppView) => {
    if (id === 'projects') {
      setCurrentView('projects');
    } else if (id === 'notifications' || id === 'messages') {
      setCurrentView('feed');
    } else {
      setCurrentView(id);
    }
  };

  const roles: { role: UserRole; label: string; icon: string }[] = [
    { role: 'student', label: 'Student', icon: '🎓' },
    { role: 'professional', label: 'Professional', icon: '💼' },
    { role: 'startup', label: 'Startup Founder', icon: '🚀' },
    { role: 'business', label: 'Business Enterprise', icon: '🏢' },
    { role: 'researcher', label: 'Academic Researcher', icon: '🔬' },
    { role: 'facility', label: 'Lab Facility Provider', icon: '⚙️' },
  ];

  return (
    <aside 
      id="main-sidebar" 
      className="w-60 bg-[#050a1d]/95 backdrop-blur-xl border-r border-[#152a5c] shadow-[4px_0_30px_rgba(0,0,0,0.5)] flex flex-col h-screen sticky top-0 shrink-0 select-none z-30 transition-all font-sans"
    >
      {/* Brand Header matching Reference Images 2-9 */}
      <div className="p-4 border-b border-[#152754]">
        <button 
          onClick={() => setCurrentView('landing')}
          className="flex items-center gap-2.5 text-left group focus:outline-none w-full"
        >
          {/* Glowing Delta/Diamond Icon */}
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1554db] to-[#00d2ff] flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,210,255,0.45)] group-hover:scale-105 transition-transform shrink-0">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="min-w-0">
            <span className="font-extrabold text-base tracking-tight text-white block">
              CraftHub
            </span>
            <p className="text-[10px] text-blue-400 font-medium truncate">People. Projects. Possibilities.</p>
          </div>
        </button>
      </div>

      {/* Role / Persona Switcher */}
      <div className="px-3 pt-2.5">
        <div className="p-2 rounded-xl bg-[#0b1636] border border-[#182d60]">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
              <UserCheck className="w-3 h-3 text-cyan-400" /> Persona
            </span>
            <button 
              onClick={() => {
                setAuthModalMode('levels');
                setIsAuthModalOpen(true);
              }}
              className="text-[9px] font-semibold text-blue-400 hover:text-cyan-300 flex items-center gap-0.5"
            >
              Lvl {currentUser.verificationLevel} <ChevronRight className="w-2.5 h-2.5" />
            </button>
          </div>
          <select 
            value={currentUser.role}
            onChange={(e) => switchRole(e.target.value as UserRole)}
            className="w-full bg-[#070e24] text-[11px] text-slate-200 border border-[#1b3470] rounded-lg px-2 py-1 focus:outline-none focus:border-cyan-500 font-medium cursor-pointer"
          >
            {roles.map(r => (
              <option key={r.role} value={r.role} className="bg-[#070e24] text-slate-100">
                {r.icon} {r.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Navigation List matching Reference Images 2-9 */}
      <div className="flex-1 overflow-y-auto px-2.5 py-3 space-y-1 scrollbar-none">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = 
            currentView === item.id || 
            (item.id === 'projects' && (currentView === 'project-workspace' || currentView === 'projects')) ||
            (item.id === 'learn' && currentView === 'learning');
          
          return (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all group ${
                isActive
                  ? 'bg-gradient-to-r from-[#112457] to-[#133075] text-white font-bold border border-[#2355cc] shadow-[0_0_14px_rgba(30,107,255,0.25)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#0b1636]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={`w-4 h-4 transition-colors ${
                  isActive ? 'text-[#00d2ff]' : 'text-slate-400 group-hover:text-slate-200'
                }`} />
                <span>{item.label}</span>
              </div>

              {item.badge && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-600/30 text-cyan-300 border border-cyan-500/30">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        {/* Quick Hub Links */}
        <div className="pt-2 pb-1 px-3">
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
            More Tools
          </span>
        </div>

        <button
          onClick={() => setCurrentView('map')}
          className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-xs transition-all ${
            currentView === 'map'
              ? 'bg-[#112457] text-cyan-300 font-bold border border-[#2355cc]'
              : 'text-slate-400 hover:text-slate-200 hover:bg-[#0b1636]'
          }`}
        >
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive Map</span>
        </button>

        <button
          onClick={() => setCurrentView('verification-levels')}
          className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-xs transition-all ${
            currentView === 'verification-levels'
              ? 'bg-[#112457] text-cyan-300 font-bold border border-[#2355cc]'
              : 'text-slate-400 hover:text-slate-200 hover:bg-[#0b1636]'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Trust & Verification</span>
        </button>
      </div>

      {/* User Mini Profile Card matching Reference Screen 2 */}
      <div className="p-3 border-t border-[#152754] bg-[#070e24] space-y-2.5">
        <div 
          onClick={() => setCurrentView('profile')}
          className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0b1636] border border-[#182d60] hover:border-[#2a4f9e] cursor-pointer transition-all group"
        >
          <img 
            src={currentUser.avatar} 
            alt={currentUser.name} 
            className="w-9 h-9 rounded-full object-cover border border-[#1f3f80] group-hover:scale-105 transition-transform shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-white truncate">{currentUser.name}</p>
              <span className="text-[9px] text-cyan-400 font-semibold group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
            <p className="text-[10px] text-slate-400 truncate">Builder | Learner | Innovator</p>
          </div>
        </div>

        {/* "Build Together A Stronger, Smarter India" Banner with Flag */}
        <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#0d1c44] to-[#091535] border border-[#1d3875] text-left">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-sm">🇮🇳</span>
            <span className="text-[9px] font-extrabold text-white tracking-wide uppercase">
              Build Together
            </span>
          </div>
          <p className="text-[10px] text-blue-300 font-medium leading-tight">
            A Stronger, Smarter India.
          </p>
        </div>
      </div>
    </aside>
  );
};
