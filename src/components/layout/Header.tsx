import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  MessageSquare, 
  ChevronDown,
  Moon,
  Sun,
  User,
  SlidersHorizontal,
  ShieldCheck,
  LogOut
} from 'lucide-react';
import { useApp, AppView } from '../../context/AppContext';

export const Header: React.FC = () => {
  const { 
    currentUser, 
    currentView, 
    setCurrentView, 
    searchQuery, 
    setSearchQuery,
    notifications,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    setIsAuthModalOpen,
    setAuthModalMode
  } = useApp();

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const getCategoryLabel = () => {
    switch (currentView) {
      case 'explore':
        return 'Explore';
      case 'projects':
      case 'project-workspace':
        return 'Projects';
      case 'feed':
      case 'messages':
        return 'Community';
      case 'learning':
      case 'learn':
        return 'Learn';
      case 'infrastructure':
        return 'Infrastructure';
      case 'startups':
        return 'Startups';
      case 'businesses':
        return 'Businesses';
      case 'research':
        return 'Research';
      case 'opportunities':
        return 'Opportunities';
      default:
        return 'All Categories';
    }
  };

  const getSearchPlaceholder = () => {
    switch (currentView) {
      case 'explore':
        return 'Explore hardware builds, top creators, bounties, labs...';
      case 'projects':
      case 'project-workspace':
        return 'Search projects, skills, status, tech stack...';
      case 'research':
        return 'Search papers, researchers, topics, journals, datasets...';
      case 'feed':
        return 'Search posts, topics, discussions, questions...';
      case 'learning':
      case 'learn':
        return 'Search courses, skills, paths, instructors...';
      case 'infrastructure':
        return 'Search labs, equipment, makerspaces, facilities...';
      case 'startups':
        return 'Search startups, founders, investors, domains...';
      case 'businesses':
        return 'Search businesses, industries, partners, programs...';
      default:
        return 'Search projects, skills, people, organizations...';
    }
  };

  const categories: { label: string; view: AppView }[] = [
    { label: 'Explore', view: 'explore' },
    { label: 'Projects', view: 'projects' },
    { label: 'Community', view: 'feed' },
    { label: 'Learn', view: 'learn' },
    { label: 'Infrastructure', view: 'infrastructure' },
    { label: 'Startups', view: 'startups' },
    { label: 'Businesses', view: 'businesses' },
    { label: 'Research', view: 'research' },
    { label: 'Opportunities', view: 'opportunities' },
  ];

  return (
    <header 
      id="main-header"
      className="h-14 bg-[#050b1d]/90 backdrop-blur-md border-b border-[#142654] sticky top-0 z-30 flex items-center justify-between px-6 gap-4 font-sans select-none"
    >
      {/* Left Search Bar + Category Dropdown */}
      <div className="flex-1 max-w-2xl flex items-center gap-2">
        <div className="relative flex-1 flex items-center bg-[#09132e] border border-[#1a3473] rounded-xl px-3 py-1.5 focus-within:border-[#00d2ff] focus-within:shadow-[0_0_12px_rgba(0,210,255,0.2)] transition-all">
          <Search className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
          <input
            id="global-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={getSearchPlaceholder()}
            className="w-full bg-transparent text-xs text-slate-100 placeholder-slate-400 focus:outline-none font-medium"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-xs text-slate-400 hover:text-slate-200 ml-1 shrink-0"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="relative shrink-0">
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#09132e] border border-[#1a3473] rounded-xl text-xs font-semibold text-slate-200 hover:border-[#2550b0] transition-colors"
          >
            <span>{getCategoryLabel()}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {isCategoryOpen && (
            <div className="absolute left-0 mt-1.5 w-44 bg-[#08122c] border border-[#1a3473] rounded-xl shadow-2xl p-1.5 z-50 animate-in fade-in slide-in-from-top-1 text-xs">
              {categories.map((c) => (
                <button
                  key={c.label}
                  onClick={() => {
                    setCurrentView(c.view);
                    setIsCategoryOpen(false);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
                    getCategoryLabel() === c.label 
                      ? 'bg-[#153478] text-cyan-300 font-bold' 
                      : 'text-slate-300 hover:bg-[#0f1f45] hover:text-white'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Controls matching screenshots */}
      <div className="flex items-center gap-3">
        {/* Sun / Moon Theme Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-xl bg-[#09132e] border border-[#1a3473] hover:border-[#2550b0] text-slate-300 hover:text-cyan-300 transition-colors focus:outline-none"
          title="Toggle Theme"
        >
          {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-400" />}
        </button>

        {/* Notifications Icon with Badge 0 */}
        <div className="relative">
          <button
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className="relative p-2 rounded-xl bg-[#09132e] border border-[#1a3473] hover:border-[#2550b0] text-slate-300 hover:text-white transition-colors focus:outline-none"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#1d4ed8] text-[10px] font-bold text-white rounded-full flex items-center justify-center">
              {unreadCount}
            </span>
          </button>

          {isNotifOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-[#08122c] border border-[#1a3473] rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center justify-between pb-2 border-b border-[#182f66] mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white">Notifications</span>
                  {unreadCount > 0 && (
                    <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-semibold">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllNotificationsAsRead}
                    className="text-[11px] text-cyan-400 hover:underline font-medium"
                  >
                    Mark all as read
                  </button>
                )}
              </div>

              <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    onClick={() => markNotificationAsRead(notif.id)}
                    className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                      notif.isRead 
                        ? 'bg-[#0b1636]/60 border-[#162a5c]/60 text-slate-400' 
                        : 'bg-[#102456] border-cyan-500/40 text-slate-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-bold text-white">{notif.title}</p>
                      <span className="text-[10px] text-slate-400 shrink-0">{notif.timestamp}</span>
                    </div>
                    <p className="text-[11px] mt-1 text-slate-300 leading-relaxed">{notif.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Avatar with Name "Zaman" and chevron */}
        <div className="relative">
          <button
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            className="flex items-center gap-2.5 px-2.5 py-1 rounded-xl bg-[#09132e] border border-[#1a3473] hover:border-[#2550b0] transition-colors focus:outline-none"
          >
            <img
              src={currentUser.avatar}
              alt="Zaman"
              className="w-7 h-7 rounded-full object-cover ring-1 ring-cyan-500/40"
            />
            <span className="text-xs font-semibold text-white tracking-wide">
              {currentUser.name}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-[#08122c] border border-[#1a3473] rounded-2xl shadow-2xl p-2 z-50 text-xs">
              <div className="px-3 py-2 border-b border-[#182f66]">
                <p className="font-bold text-white truncate">{currentUser.name}</p>
                <p className="text-[11px] text-cyan-400 truncate">{currentUser.organization || currentUser.handle}</p>
              </div>

              <div className="py-1">
                <button
                  onClick={() => {
                    setCurrentView('profile');
                    setIsProfileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#112457] text-slate-300 hover:text-white text-left font-medium"
                >
                  <User className="w-3.5 h-3.5 text-cyan-400" /> View Profile
                </button>
                <button
                  onClick={() => {
                    setAuthModalMode('levels');
                    setIsAuthModalOpen(true);
                    setIsProfileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#112457] text-slate-300 hover:text-white text-left font-medium"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Verification Status
                </button>
                <button
                  onClick={() => {
                    setCurrentView('admin');
                    setIsProfileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#112457] text-slate-300 hover:text-white text-left font-medium"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" /> Platform Admin
                </button>
              </div>

              <div className="pt-1 border-t border-[#182f66]">
                <button
                  onClick={() => {
                    setAuthModalMode('login');
                    setIsAuthModalOpen(true);
                    setIsProfileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-500/10 text-red-400 hover:text-red-300 text-left font-medium"
                >
                  <LogOut className="w-3.5 h-3.5" /> Sign Out / Switch
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
