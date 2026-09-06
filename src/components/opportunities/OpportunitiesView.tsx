import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Filter, 
  Search, 
  Award, 
  Check, 
  Building2, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  SlidersHorizontal, 
  Bookmark, 
  Trophy, 
  DollarSign, 
  User 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const OpportunitiesView: React.FC = () => {
  const { currentUser, setCurrentView } = useApp();

  const [activeTab, setActiveTab] = useState('All');
  const [appliedIds, setAppliedIds] = useState<string[]>([]);

  const tabs = [
    'All',
    'Internships',
    'Full-Time Jobs',
    'Research Positions',
    'Grants & Funding',
    'Hackathons & Competitions',
    'Freelance / Gigs',
    'Mentorship'
  ];

  const featuredOpportunities = [
    {
      id: 'opp-1',
      title: 'Robotics Firmware Intern',
      organization: 'IIT Delhi Robotics Lab',
      location: 'New Delhi, India',
      stipend: '₹25,000/mo',
      duration: '3 Months',
      type: 'Hybrid',
      skills: ['ROS', 'C++', 'Embedded Systems'],
      tag: 'Internship',
      posted: '2 days ago'
    },
    {
      id: 'opp-2',
      title: 'AI Research Fellow',
      organization: 'IISc AI Center',
      location: 'Bengaluru, India',
      stipend: '₹45,000/mo',
      duration: '1 Year',
      type: 'On-site',
      skills: ['Python', 'PyTorch', 'Deep Learning'],
      tag: 'Research',
      posted: '1 day ago'
    },
    {
      id: 'opp-3',
      title: 'Hardware Design Engineer',
      organization: 'RoboCraft AI',
      location: 'Bengaluru, India',
      stipend: '₹12-18 LPA',
      duration: 'Full-Time',
      type: 'On-site',
      skills: ['Altium', 'PCB Design', 'STM32'],
      tag: 'Full-Time',
      posted: '3 days ago'
    },
    {
      id: 'opp-4',
      title: 'DeepTech Innovation Grant 2025',
      organization: 'DST Government of India',
      location: 'All India',
      stipend: '₹10-25 Lakhs',
      duration: 'Grant',
      type: 'Open Funding',
      skills: ['Hardware', 'CleanTech', 'AI'],
      tag: 'Grant',
      posted: '5 days ago'
    }
  ];

  const handleApply = (id: string, title: string) => {
    if (appliedIds.includes(id)) return;
    setAppliedIds(prev => [...prev, id]);
    alert(`Application submitted for "${title}"!`);
  };

  return (
    <div id="opportunities-view" className="p-6 space-y-6 max-w-[1440px] mx-auto font-sans text-slate-100 select-none">
      {/* Hero Banner matching Reference Image 8 */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#071333] via-[#091b49] to-[#040e29] border border-[#193570] p-6 sm:p-8 shadow-[0_4px_35px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Opportunities
            </h1>
            <div className="text-sm text-cyan-300 font-bold tracking-wide uppercase">
              Build Your Career • Explore Your Potential
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Discover verified hardware internships, deep-tech engineering roles, funded research positions, university grants, and elite hackathons tailored to your skill tree.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] hover:from-[#134bc2] hover:to-[#00a8d1] text-white text-xs font-bold shadow-[0_0_15px_rgba(0,200,248,0.35)] transition-all flex items-center gap-1.5">
                <span>Explore Opportunities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => alert('Post an opportunity recruitment wizard')}
                className="px-4 py-2 rounded-xl bg-[#09173d] border border-[#1b3a7a] hover:border-cyan-500 text-slate-200 text-xs font-bold transition-all"
              >
                Post an Opportunity
              </button>
            </div>

            {/* Stats Row matching Image 8 */}
            <div className="flex flex-wrap items-center gap-6 pt-3">
              <div>
                <span className="text-lg font-extrabold text-white">1.8K+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Open Positions</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">450+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Companies Hiring</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-[#00d2ff]">₹1.2 Cr+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Grants & Prizes</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">92%</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Placement Rate</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">60+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Research Labs</span>
              </div>
            </div>
          </div>

          {/* Right Drone Maker Graphic Card */}
          <div className="bg-[#0b1b42]/90 border border-[#21478f] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5 backdrop-blur-md shadow-lg">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-[11px] font-extrabold tracking-wider text-cyan-300 uppercase">
                Learn • Work • Grow • Build
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Direct hiring pipelines based on your verified code & hardware builds.
              </p>
              <div className="pt-2">
                <span className="text-[10px] text-emerald-300 font-semibold bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/40">
                  Direct Fast-Track Interviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Row matching Image 8 */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#142854]">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#175beb] to-[#00a8e8] text-white shadow-sm font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-[#0b1b42]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button 
          onClick={() => alert('Filter opportunities by location, stipend and level')}
          className="px-3 py-1.5 rounded-xl bg-[#09173d] border border-[#18346e] text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
          <span>Filters</span>
        </button>
      </div>

      {/* 2-Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols): Featured Opportunities, Top Hiring Companies, Upcoming Competitions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white tracking-tight">Featured Opportunities</h2>
            <span className="text-xs text-[#00d2ff] hover:underline cursor-pointer font-semibold">View All 1,800+ Roles ›</span>
          </div>

          {/* 4 Featured Opportunities Cards matching Image 8 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredOpportunities.map((opp) => {
              const isApplied = appliedIds.includes(opp.id);
              return (
                <div 
                  key={opp.id}
                  className="bg-[#071333] border border-[#162c5e] hover:border-[#00c8f8] rounded-2xl p-5 flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,180,255,0.15)]"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-950/80 text-cyan-300 border border-cyan-500/40">
                        {opp.tag}
                      </span>
                      <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                        {opp.stipend}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-[#00d2ff] transition-colors leading-snug">
                        {opp.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-1 font-medium flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{opp.organization} • {opp.location}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-slate-500" /> {opp.duration}</span>
                      <span>•</span>
                      <span>{opp.type}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {opp.skills.map((s) => (
                        <span key={s} className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-[#0e214d] text-blue-300 border border-[#18366d]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#13254e] flex items-center justify-between mt-4">
                    <span className="text-[10px] text-slate-500">{opp.posted}</span>
                    <button 
                      onClick={() => handleApply(opp.id, opp.title)}
                      disabled={isApplied}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        isApplied 
                          ? 'bg-emerald-800 text-emerald-100 cursor-default' 
                          : 'bg-gradient-to-r from-[#175beb] to-[#00c8f8] text-white shadow-sm hover:scale-105'
                      }`}
                    >
                      {isApplied ? 'Applied ✓' : 'Apply Now'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Top Hiring Companies matching Image 8 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white tracking-tight">Top Hiring Hardware & Tech Companies</h2>
              <span className="text-xs text-[#00d2ff] hover:underline cursor-pointer font-semibold">View All 450+ ›</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Tata Technologies', desc: 'Hardware & Automotive Platforms', roles: '12 open roles' },
                { name: 'ISRO Space Applications', desc: 'Aerospace, Robotics & Satellites', roles: '8 open roles' },
                { name: 'Ather Energy', desc: 'EV Battery, BMS & Firmware', roles: '15 open roles' },
                { name: 'DRDO Labs', desc: 'Defense Electronics & Navigation', roles: '6 open roles' },
              ].map((co) => (
                <div key={co.name} className="p-3.5 rounded-xl bg-[#09173d] border border-[#18346e] hover:border-cyan-500/50 cursor-pointer transition-all flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{co.name}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{co.desc}</p>
                  </div>
                  <span className="text-[10px] font-bold text-cyan-300 bg-[#0e214d] px-2 py-1 rounded border border-[#1a3875]">
                    {co.roles}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Hackathons & Competitions matching Image 8 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Upcoming National Competitions & Hackathons</span>
            </h2>
            <div className="space-y-2.5">
              {[
                { title: 'National Hardware Buildathon 2025', prize: '₹10 Lakhs Prize', venue: 'IIT Delhi • Apr 20-22' },
                { title: 'CleanTech Innovation Challenge', prize: '₹5 Lakhs Prize', venue: 'IISc Bengaluru • May 10' },
                { title: 'Smart India Hackathon Hardware Edition', prize: '₹15 Lakhs Prize', venue: 'National Centers • Jun 15' },
              ].map((h) => (
                <div key={h.title} className="p-3 rounded-xl bg-[#09173d] border border-[#18346e] flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white">{h.title}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{h.venue}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-amber-950/70 text-amber-300 font-bold text-[11px] border border-amber-500/30">
                    {h.prize}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): Quick Apply Profile, Match Rate, Categories, Promo */}
        <div className="space-y-6">
          {/* Quick Apply Profile: Zaman */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-4">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Quick Apply Profile</span>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#09173d] border border-[#18346e]">
              <img 
                src={currentUser.avatar} 
                alt="Zaman" 
                className="w-12 h-12 rounded-full object-cover ring-2 ring-cyan-400/50 shrink-0" 
              />
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-white truncate">{currentUser.name}</h3>
                <p className="text-[11px] text-cyan-400 truncate">Builder | Innovator</p>
                <p className="text-[10px] text-slate-400 truncate">7 Verified Skills • Profile 85% Complete</p>
              </div>
            </div>
            <button 
              onClick={() => setCurrentView('profile')}
              className="w-full py-2 rounded-xl bg-[#0a1840] border border-[#1a3473] hover:border-cyan-500/50 text-xs font-bold text-cyan-300 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Update Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Opportunity Match Rate matching Image 8 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-4">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Profile Match Rate</span>

            <div className="flex items-center justify-center py-2">
              <div className="relative w-28 h-28 flex items-center justify-center rounded-full border-4 border-[#0c1e4c] border-t-cyan-400 border-r-blue-500 border-b-cyan-400">
                <div className="text-center">
                  <span className="text-2xl font-extrabold text-white">88%</span>
                  <span className="text-[10px] text-slate-400 block font-medium">Match</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#09173d] border border-[#18346e] text-center">
              <span className="text-xs font-bold text-cyan-300">42 Opportunities</span>
              <span className="text-xs text-slate-300 font-medium"> directly match your verified credentials</span>
            </div>
          </div>

          {/* Opportunities by Category matching Image 8 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Opportunities by Category</span>
            <div className="space-y-2 text-xs">
              {[
                { label: 'Internships', count: '620' },
                { label: 'Full-Time Jobs', count: '450' },
                { label: 'Research Positions', count: '280' },
                { label: 'Grants & Funding', count: '180' },
                { label: 'Hackathons', count: '150' },
                { label: 'Freelance / Gigs', count: '120' },
              ].map((c) => (
                <div key={c.label} className="flex items-center justify-between p-1.5 hover:bg-[#09173d] rounded-lg transition-colors cursor-pointer">
                  <span className="text-slate-300 font-medium">{c.label}</span>
                  <span className="font-bold text-cyan-300 text-[11px]">{c.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Slogan Banner matching Image 8 */}
          <div className="p-5 rounded-2xl bg-gradient-to-tr from-[#0b2158] to-[#071438] border border-[#1d438d] text-center space-y-2 shadow-lg">
            <div className="text-xs font-extrabold text-cyan-300 tracking-wider uppercase">
              Your Next Big Leap Starts Here
            </div>
            <p className="text-[11px] text-slate-300 font-medium">
              Real Work. Real Verifications. Real Growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
