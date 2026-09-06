import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  MapPin, 
  Calendar, 
  FolderGit2, 
  CheckCircle2, 
  ExternalLink, 
  Edit3, 
  Share2, 
  Download, 
  Cpu, 
  Star, 
  Sparkles, 
  ChevronRight, 
  TrendingUp, 
  FileCheck, 
  Users, 
  Github, 
  Linkedin, 
  ArrowRight, 
  Bookmark,
  Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const UserProfileView: React.FC = () => {
  const { currentUser, projects, setCurrentView, setSelectedProjectId } = useApp();

  const [activeTab, setActiveTab] = useState('Overview');
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const tabs = [
    'Overview',
    'Projects (14)',
    'Contributions (86)',
    'Skills & Badges',
    'Activity',
    'Bookmarks',
    'About'
  ];

  const badges = [
    { title: 'Hardware Hero', tier: 'Gold', color: 'from-amber-400 to-yellow-600', icon: '🏆' },
    { title: 'ROS Master', tier: 'Silver', color: 'from-slate-300 to-slate-500', icon: '🤖' },
    { title: 'Top Mentor', tier: 'Gold', color: 'from-amber-400 to-yellow-600', icon: '⭐' },
    { title: 'Bug Hunter', tier: 'Bronze', color: 'from-amber-700 to-amber-900', icon: '🐞' },
    { title: 'Buildathon Winner', tier: 'Platinum', color: 'from-cyan-400 to-blue-600', icon: '👑' },
  ];

  const verifiedSkills = [
    { name: 'Embedded Systems', level: 'Level 4', verifiedBy: 'IIT Delhi' },
    { name: 'ROS / Robotics', level: 'Level 4', verifiedBy: 'Lead Reviewers' },
    { name: 'Python & OpenCV', level: 'Level 3', verifiedBy: 'Verified Tasks' },
    { name: 'PCB Design', level: 'Level 3', verifiedBy: 'Lab Signoff' },
    { name: 'C / C++', level: 'Level 4', verifiedBy: 'Firmware Audit' },
  ];

  return (
    <div id="user-profile-view" className="p-6 space-y-6 max-w-[1440px] mx-auto font-sans text-slate-100 select-none">
      {/* Header Banner & Profile Card matching Reference Image 9 */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#071333] via-[#091b49] to-[#040e29] border border-[#193570] shadow-[0_4px_35px_rgba(0,0,0,0.6)]">
        {/* Cover Photo Backdrop */}
        <div className="h-32 sm:h-40 w-full relative overflow-hidden bg-gradient-to-r from-[#05112e] via-[#0b2259] to-[#071842]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#00d2ff_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button 
              onClick={() => alert('Share profile link copied!')}
              className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/20 text-white text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 hover:bg-black/60 transition-all"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
            <button 
              onClick={() => alert('Profile editing modal')}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] text-white text-xs font-bold shadow-sm flex items-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>

        {/* Profile Details Container */}
        <div className="px-6 sm:px-8 pb-6 pt-0 relative -mt-16 sm:-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 text-center sm:text-left">
              {/* Avatar with Verification Ring */}
              <div className="relative">
                <img 
                  src={currentUser.avatar} 
                  alt="Zaman" 
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-4 ring-[#071333] border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,210,255,0.4)]"
                />
                <div className="absolute -bottom-1 -right-1 p-1 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-md">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Handles */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{currentUser.name}</h1>
                  <span className="text-xs font-semibold text-slate-400">{currentUser.handle}</span>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-950/80 text-cyan-300 border border-cyan-500/50">
                    Level 3 Verified
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/40">
                    Top Contributor
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl">
                  Robotics Engineer & Hardware Innovator • Lead Developer on Autonomous Rover
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-400 pt-0.5">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {currentUser.location}</span>
                  <span>•</span>
                  <span>{currentUser.organization}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-slate-500" /> Joined {currentUser.joinedDate}</span>
                  <span>•</span>
                  <span className="text-cyan-300 font-bold">420 Followers</span>
                  <span>•</span>
                  <span className="text-slate-300">180 Following</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center justify-center gap-2 self-center sm:self-end">
              <button 
                onClick={() => setShowUpgradeModal(true)}
                className="px-4 py-2 rounded-xl bg-[#09173d] border border-[#1b3a7a] hover:border-cyan-500 text-slate-200 text-xs font-bold transition-all"
              >
                Request Level Upgrade
              </button>
              <button 
                onClick={() => alert('Downloading verified cryptographic portfolio PDF...')}
                className="p-2 rounded-xl bg-[#09173d] border border-[#1b3a7a] text-cyan-300 hover:text-white transition-all"
                title="Download Verified Portfolio PDF"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stats Bar matching Image 9 */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6 mt-6 border-t border-[#142854]">
            <div className="p-3 rounded-xl bg-[#09173d]/70 border border-[#18346e] text-center">
              <span className="text-xl font-extrabold text-white block">14</span>
              <span className="text-[11px] text-slate-400 font-medium">Projects</span>
            </div>
            <div className="p-3 rounded-xl bg-[#09173d]/70 border border-[#18346e] text-center">
              <span className="text-xl font-extrabold text-[#00d2ff] block">86</span>
              <span className="text-[11px] text-slate-400 font-medium">Contributions</span>
            </div>
            <div className="p-3 rounded-xl bg-[#09173d]/70 border border-[#18346e] text-center">
              <span className="text-xl font-extrabold text-white block">12</span>
              <span className="text-[11px] text-slate-400 font-medium">Verified Skills</span>
            </div>
            <div className="p-3 rounded-xl bg-[#09173d]/70 border border-[#18346e] text-center">
              <span className="text-xl font-extrabold text-amber-400 block">4</span>
              <span className="text-[11px] text-slate-400 font-medium">Hackathon Wins</span>
            </div>
            <div className="p-3 rounded-xl bg-[#09173d]/70 border border-[#18346e] text-center col-span-2 sm:col-span-1">
              <span className="text-xl font-extrabold text-emerald-400 block">98%</span>
              <span className="text-[11px] text-slate-400 font-medium">Completion Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Row matching Image 9 */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-[#142854] scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === tab
                ? 'bg-gradient-to-r from-[#175beb] to-[#00a8e8] text-white shadow-sm font-bold'
                : 'text-slate-400 hover:text-white hover:bg-[#0b1b42]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 2-Column Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols): About Me, Featured Projects, Recent Contributions, Verified Skills */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Me matching Image 9 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">About Me</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Passionate robotics engineer working at the intersection of embedded systems, computer vision, and autonomous navigation. Currently leading the Autonomous Rover project at CraftHub and building hardware solutions for unstructured planetary-simulation environments. Keen interest in ROS2 microcontrollers, high-density PCB layouts, and open-source scientific hardware.
            </p>
          </div>

          {/* Featured Projects matching Image 9 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white tracking-tight">Featured Projects</h2>
              <span className="text-xs text-[#00d2ff] hover:underline cursor-pointer font-semibold">View All 14 Projects ›</span>
            </div>

            <div className="space-y-3">
              {[
                { 
                  title: 'Autonomous Rover', 
                  desc: 'AI-powered rover for planetary exploration and research.',
                  tag: 'Robotics', 
                  role: 'Project Lead', 
                  progress: 72, 
                  contributors: 8,
                  id: 'proj-1'
                },
                { 
                  title: 'Smart Irrigation IoT Node', 
                  desc: 'LoRaWAN-enabled soil sensor with solar trickle-charger.',
                  tag: 'IoT / CleanTech', 
                  role: 'Core Hardware', 
                  progress: 100, 
                  contributors: 4,
                  id: 'proj-2'
                },
                { 
                  title: 'Drone Flight Controller Board', 
                  desc: 'Custom STM32H7 flight computer running Betaflight.',
                  tag: 'Aerospace', 
                  role: 'Firmware Contributor', 
                  progress: 60, 
                  contributors: 6,
                  id: 'proj-3'
                },
              ].map((p) => (
                <div 
                  key={p.title} 
                  onClick={() => {
                    setSelectedProjectId(p.id);
                    setCurrentView('project-workspace');
                  }}
                  className="p-4 rounded-xl bg-[#09173d] border border-[#18346e] hover:border-cyan-500/60 cursor-pointer transition-all space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-white hover:text-cyan-300">{p.title}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#0e214d] text-cyan-300 border border-[#1b3a7a]">
                        {p.tag}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 bg-black/40 px-2 py-0.5 rounded">
                      {p.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{p.desc}</p>
                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-[11px] text-slate-400">{p.contributors} Contributors</span>
                    <span className="text-[11px] font-bold text-cyan-300">{p.progress}% Completed</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#0e1d44] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: `${p.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Contributions matching Image 9 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white tracking-tight">Recent Verified Contributions</h2>
              <span className="text-xs text-[#00d2ff] hover:underline cursor-pointer font-semibold">View All 86 Contributions ›</span>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Implemented SLAM navigation nodes for Autonomous Rover', proj: 'Autonomous Rover', time: '2 days ago', status: 'Verified' },
                { title: 'Designed custom 4-layer power distribution PCB in KiCad', proj: 'Autonomous Rover', time: '5 days ago', status: 'Verified' },
                { title: 'Authored firmware calibration documentation and safety manual', proj: 'Autonomous Rover', time: '1 week ago', status: 'Verified' },
              ].map((c, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#09173d] border border-[#18346e] flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <div className="font-bold text-white">{c.title}</div>
                    <div className="text-[10px] text-slate-400">{c.proj} • {c.time}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-950/70 text-emerald-300 font-bold text-[10px] border border-emerald-500/30">
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Skills matching Image 9 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-4">
            <h2 className="text-base font-bold text-white tracking-tight">Verified Skills & Endorsements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {verifiedSkills.map((s) => (
                <div key={s.name} className="p-3 rounded-xl bg-[#09173d] border border-[#18346e] flex items-center justify-between">
                  <div>
                    <div className="font-bold text-xs text-white">{s.name}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Verified by {s.verifiedBy}</div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0e214d] text-cyan-300 border border-[#1a3875]">
                    {s.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): Verification Status, Badges & Achievements, Connected Accounts, Promo */}
        <div className="space-y-6">
          {/* Verification Status matching Image 9 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Verification Status</span>
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
            </div>

            <div className="p-3 rounded-xl bg-[#09173d] border border-[#18346e] space-y-1">
              <div className="text-xs font-bold text-white">Level 3: Expert & Mentor</div>
              <p className="text-[10px] text-slate-400">Institutional academic and technical credentials peer-reviewed by IIT Delhi.</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400 font-medium text-[11px]">Progress to Level 4</span>
                <span className="font-bold text-cyan-300 text-[11px]">75%</span>
              </div>
              <div className="w-full h-2 bg-[#0e1d44] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: '75%' }} />
              </div>
              <span className="text-[10px] text-slate-400 block pt-1">2 more peer-reviewed hardware deliverables required.</span>
            </div>

            <button 
              onClick={() => setShowUpgradeModal(true)}
              className="w-full py-2 rounded-xl bg-[#0a1840] border border-[#1a3473] hover:border-cyan-500/50 text-xs font-bold text-cyan-300 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Upgrade to Level 4</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Badges & Achievements matching Image 9 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3.5">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Badges & Achievements</span>
            <div className="space-y-2.5">
              {badges.map((b) => (
                <div key={b.title} className="p-2.5 rounded-xl bg-[#09173d] border border-[#18346e] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{b.icon}</span>
                    <span className="font-bold text-white">{b.title}</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0e214d] text-cyan-300 border border-[#1a3875]">
                    {b.tier}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Connected Accounts matching Image 9 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Connected Verified Profiles</span>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-[#09173d] border border-[#18346e]">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-slate-300" />
                  <span className="font-semibold text-white">GitHub</span>
                </div>
                <span className="text-cyan-400 font-mono text-[11px]">@zaman-tech</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-[#09173d] border border-[#18346e]">
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold text-white">LinkedIn</span>
                </div>
                <span className="text-cyan-400 font-mono text-[11px]">/in/zaman-tech</span>
              </div>
            </div>
          </div>

          {/* Slogan Banner matching Image 9 */}
          <div className="p-5 rounded-2xl bg-gradient-to-tr from-[#0b2158] to-[#071438] border border-[#1d438d] text-center space-y-2 shadow-lg">
            <div className="text-xs font-extrabold text-cyan-300 tracking-wider uppercase">
              A Portfolio Backed by Real Code & Circuits
            </div>
            <p className="text-[11px] text-slate-300 font-medium">
              Verified on the CraftHub Decentralized Registry
            </p>
          </div>
        </div>
      </div>

      {/* Upgrade Level Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-[#08122c] border border-[#1a3473] rounded-2xl p-6 space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-white">Request Verification Level Upgrade</h3>
            <p className="text-xs text-slate-300">
              Submit proof of institutional credentials or hardware project lead reviews for Level 4 certification.
            </p>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Institutional / Work Email</label>
                <input 
                  type="email" 
                  defaultValue="zaman@iitd.ac.in" 
                  className="w-full bg-[#09173d] border border-[#18346e] rounded-xl p-2.5 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Verification Proof / Link</label>
                <input 
                  type="text" 
                  placeholder="https://github.com/zaman-tech or lab letter" 
                  className="w-full bg-[#09173d] border border-[#18346e] rounded-xl p-2.5 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button 
                onClick={() => setShowUpgradeModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  alert('Verification upgrade request submitted for review!');
                  setShowUpgradeModal(false);
                }}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold"
              >
                Submit for Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
