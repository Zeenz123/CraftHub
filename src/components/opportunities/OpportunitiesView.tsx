import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Search, 
  Award, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  Bookmark, 
  Users, 
  MessageSquare,
  GraduationCap,
  Globe2,
  Bell,
  Cpu,
  TrendingUp,
  Compass,
  CheckCircle2,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const OpportunitiesView: React.FC = () => {
  const { currentUser, setCurrentView } = useApp();

  const [activeTab, setActiveTab] = useState('All');
  const [appliedIds, setAppliedIds] = useState<string[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('Most Relevant');

  const tabs = [
    'All',
    'Internship',
    'Research',
    'Project Contribution',
    'Volunteer',
    'Startup',
    'Business',
    'Infrastructure',
    'Mentorship',
    'Other'
  ];

  const opportunities = [
    {
      id: 'opp-1',
      title: 'Robotics Intern – Rover Development',
      organization: 'NASA (Research Collaboration)',
      badge: 'Featured',
      badgeColor: 'bg-blue-600/90 text-white',
      orgLogo: 'NASA',
      image: '/assets/images/card_robotics_intern.jpg',
      roleType: 'Internship',
      level: 'Intermediate',
      location: 'Remote',
      duration: '3 months',
      tags: ['Robotics', 'AI', 'Embedded'],
      applicants: 128,
      comments: 24,
      category: 'Internship'
    },
    {
      id: 'opp-2',
      title: 'PCB Design Contributor',
      organization: 'TechBuild Innovations',
      badge: 'Urgent',
      badgeColor: 'bg-amber-600/90 text-white',
      image: '/assets/images/card_pcb_design.jpg',
      roleType: 'Project Contribution',
      level: 'Intermediate',
      location: 'Remote',
      duration: 'Flexible',
      tags: ['PCB', 'Electronics', 'Hardware'],
      applicants: 86,
      comments: 12,
      category: 'Project Contribution'
    },
    {
      id: 'opp-3',
      title: 'Research Assistant – Nanomaterials',
      organization: 'IIT Delhi',
      badge: 'New',
      badgeColor: 'bg-emerald-600/90 text-white',
      image: '/assets/images/card_nanomaterials_research.jpg',
      roleType: 'Research',
      level: 'Advanced',
      location: 'On-site',
      duration: '6 months',
      tags: ['Nanotechnology', 'Materials', 'Research'],
      applicants: 64,
      comments: 10,
      category: 'Research'
    },
    {
      id: 'opp-4',
      title: 'Manufacturing Process Intern',
      organization: 'Siemens India',
      badge: null,
      orgLogo: 'SIEMENS',
      image: '/assets/images/card_manufacturing_intern.jpg',
      roleType: 'Internship',
      level: 'Beginner',
      location: 'Gurugram, Haryana',
      duration: '3 months',
      tags: ['Manufacturing', 'Process', 'Engineering'],
      applicants: 92,
      comments: 18,
      category: 'Internship'
    },
    {
      id: 'opp-5',
      title: 'Sustainability Project Volunteer',
      organization: 'Green Earth Foundation',
      badge: 'Volunteer',
      badgeColor: 'bg-emerald-500/90 text-white',
      image: '/assets/images/card_sustainability_project.jpg',
      roleType: 'Volunteer',
      level: 'Beginner',
      location: 'Remote / Field',
      duration: 'Flexible',
      tags: ['Sustainability', 'Environment', 'Field Work'],
      applicants: 56,
      comments: 8,
      category: 'Volunteer'
    },
    {
      id: 'opp-6',
      title: 'AI/ML Developer (Part-time)',
      organization: 'EduTech Labs',
      badge: 'Part-time',
      badgeColor: 'bg-purple-600/90 text-white',
      orgLogo: 'Python',
      image: '/assets/images/card_aiml_developer.jpg',
      roleType: 'Project Contribution',
      level: 'Intermediate',
      location: 'Remote',
      duration: 'Flexible',
      tags: ['Python', 'Machine Learning', 'AI'],
      applicants: 134,
      comments: 26,
      category: 'Project Contribution'
    },
    {
      id: 'opp-7',
      title: '3D Printing Lab Assistant',
      organization: 'MakerSpace Delhi',
      badge: 'On-site',
      badgeColor: 'bg-cyan-600/90 text-white',
      image: '/assets/images/card_3d_printing.jpg',
      roleType: 'Assistant Role',
      level: 'Beginner',
      location: 'Delhi',
      duration: 'Flexible',
      tags: ['3D Printing', 'Hardware', 'Prototyping'],
      applicants: 38,
      comments: 6,
      category: 'Infrastructure'
    },
    {
      id: 'opp-8',
      title: 'Open Source Satellite Project',
      organization: 'OpenSpace Community',
      badge: 'Remote',
      badgeColor: 'bg-blue-500/90 text-white',
      image: '/assets/images/card_satellite_project.jpg',
      roleType: 'Open Source',
      level: 'Advanced',
      location: 'Aerospace',
      duration: 'Flexible',
      tags: ['Aerospace', 'Embedded', 'Open Source'],
      applicants: 77,
      comments: 14,
      category: 'Project Contribution'
    },
    {
      id: 'opp-9',
      title: 'Quantum Algorithm Fellow',
      organization: 'IBM Quantum India Lab',
      badge: 'Featured',
      badgeColor: 'bg-indigo-600/90 text-white',
      orgLogo: 'IBM',
      image: '/assets/images/card_quantum_computing.jpg',
      roleType: 'Research',
      level: 'Advanced',
      location: 'Bengaluru',
      duration: '6 months',
      tags: ['Quantum', 'Qiskit', 'Linear Algebra', 'Physics'],
      applicants: 104,
      comments: 31,
      category: 'Research'
    },
    {
      id: 'opp-10',
      title: 'Autonomous EV Powertrain Intern',
      organization: 'Ather Energy & IIT Madras',
      badge: 'New',
      badgeColor: 'bg-emerald-600/90 text-white',
      orgLogo: 'EV',
      image: '/assets/images/card_autonomous_ev.jpg',
      roleType: 'Internship',
      level: 'Intermediate',
      location: 'Hosur, TN',
      duration: '3 months',
      tags: ['EV Mobility', 'BMS', 'CAN Bus', 'FOC Motor'],
      applicants: 156,
      comments: 42,
      category: 'Internship'
    },
    {
      id: 'opp-11',
      title: 'Drone Flight Software Engineer',
      organization: 'IdeaForge Aerospace',
      badge: 'Urgent',
      badgeColor: 'bg-amber-600/90 text-white',
      orgLogo: 'UAV',
      image: '/assets/images/card_drone_swarm.jpg',
      roleType: 'Project Contribution',
      level: 'Advanced',
      location: 'Navi Mumbai',
      duration: 'Flexible',
      tags: ['PX4', 'ROS2', 'Computer Vision', 'C++'],
      applicants: 89,
      comments: 17,
      category: 'Project Contribution'
    },
    {
      id: 'opp-12',
      title: 'CRISPR Gene Circuit Design Assistant',
      organization: 'IISc Bio-Nanotech Center',
      badge: 'Research',
      badgeColor: 'bg-blue-600/90 text-white',
      orgLogo: 'IISc',
      image: '/assets/images/card_biotech_crispr.jpg',
      roleType: 'Research',
      level: 'Intermediate',
      location: 'Bengaluru',
      duration: '6 months',
      tags: ['Biotech', 'Genomics', 'Synthetic Bio', 'PCR'],
      applicants: 62,
      comments: 11,
      category: 'Research'
    },
    {
      id: 'opp-13',
      title: 'Lithography Cleanroom Technician',
      organization: 'India Semiconductor Mission',
      badge: 'On-site',
      badgeColor: 'bg-cyan-600/90 text-white',
      orgLogo: 'ISM',
      image: '/assets/images/card_cleanroom_nanofab.jpg',
      roleType: 'Infrastructure',
      level: 'Beginner',
      location: 'Mohali, Punjab',
      duration: '1 Year',
      tags: ['Silicon Fab', 'Photolithography', 'Cleanroom', 'VLSI'],
      applicants: 74,
      comments: 15,
      category: 'Infrastructure'
    },
    {
      id: 'opp-14',
      title: 'Neural NPU Compiler Architect',
      organization: 'Shakti Processor Project',
      badge: 'Part-time',
      badgeColor: 'bg-purple-600/90 text-white',
      orgLogo: 'RISC-V',
      image: '/assets/images/card_ai_neural_processor.jpg',
      roleType: 'Project Contribution',
      level: 'Advanced',
      location: 'Remote',
      duration: 'Flexible',
      tags: ['RISC-V', 'LLVM', 'Verilog', 'AI Acceleration'],
      applicants: 118,
      comments: 29,
      category: 'Project Contribution'
    },
    {
      id: 'opp-15',
      title: 'Precision Hydroponics IoT Lead',
      organization: 'National AgriTech Mission',
      badge: 'Volunteer',
      badgeColor: 'bg-emerald-500/90 text-white',
      orgLogo: 'ICAR',
      image: '/assets/images/card_smart_agriculture.jpg',
      roleType: 'Volunteer',
      level: 'Beginner',
      location: 'Pune / Remote',
      duration: 'Flexible',
      tags: ['AgriTech', 'LoRaWAN', 'Telemetry', 'Automation'],
      applicants: 48,
      comments: 9,
      category: 'Volunteer'
    },
    {
      id: 'opp-16',
      title: 'Wearable Biosensor Fellow',
      organization: 'AIIMS MedTech Incubator',
      badge: 'New',
      badgeColor: 'bg-rose-600/90 text-white',
      orgLogo: 'AIIMS',
      image: '/assets/images/card_wearable_biosensor.jpg',
      roleType: 'Research',
      level: 'Intermediate',
      location: 'New Delhi',
      duration: '6 months',
      tags: ['MedTech', 'Biosensors', 'Flexible Electronics', 'IoT'],
      applicants: 82,
      comments: 20,
      category: 'Research'
    }
  ];

  const handleApply = (id: string, title: string) => {
    if (appliedIds.includes(id)) return;
    setAppliedIds(prev => [...prev, id]);
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredOpportunities = opportunities.filter(opp => {
    if (activeTab === 'All') return true;
    return opp.category.toLowerCase().includes(activeTab.toLowerCase()) ||
           opp.roleType.toLowerCase().includes(activeTab.toLowerCase());
  });

  const trendingSkills = [
    { rank: 1, name: 'Python', growth: '+ 42%' },
    { rank: 2, name: 'PCB Design', growth: '+ 38%' },
    { rank: 3, name: 'Machine Learning', growth: '+ 35%' },
    { rank: 4, name: 'Embedded Systems', growth: '+ 31%' },
    { rank: 5, name: '3D Printing', growth: '+ 29%' },
    { rank: 6, name: 'Robotics', growth: '+ 27%' },
    { rank: 7, name: 'CAD', growth: '+ 24%' },
    { rank: 8, name: 'Research Methods', growth: '+ 22%' }
  ];

  const locations = [
    { name: 'Delhi', count: 142 },
    { name: 'Bengaluru', count: 128 },
    { name: 'Hyderabad', count: 96 },
    { name: 'Pune', count: 74 },
    { name: 'Chennai', count: 63 },
    { name: 'Mumbai', count: 59 },
    { name: 'Others', count: 120 }
  ];

  return (
    <div id="opportunities-view" className="p-4 sm:p-6 space-y-5 max-w-[1600px] mx-auto font-sans text-slate-100 select-none">
      {/* 1. Hero Banner Matching Reference Image 1 */}
      <div className="relative rounded-2xl overflow-hidden border border-[#173066] shadow-[0_10px_35px_rgba(0,0,0,0.6)] min-h-[220px]">
        {/* Background Banner Image */}
        <img
          src="/assets/images/hero_opportunities_banner.jpg"
          alt="Opportunities Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b1d] via-[#050b1d]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b1d] via-transparent to-transparent" />

        <div className="relative z-10 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left Text and CTA */}
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-extrabold text-cyan-400 tracking-wider uppercase">
              OPPORTUNITIES
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight uppercase">
              YOUR SKILLS<br />
              <span className="text-white">CAN CREATE REAL CHANGE.</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Find internships, collaborations, research roles, volunteer work, and real-world projects with startups, businesses, institutions and more.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-[0_0_18px_rgba(37,99,235,0.5)] transition-all flex items-center gap-2">
                <span>Find Opportunities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => alert('Post Opportunity Dialog')}
                className="px-4 py-2 rounded-xl bg-[#091535]/80 hover:bg-[#112456] border border-[#1b3b7e] text-slate-200 text-xs font-bold backdrop-blur-sm transition-all"
              >
                Post an Opportunity
              </button>
            </div>
          </div>

          {/* Right Floating Pills inside Banner */}
          <div className="hidden md:flex flex-col items-end space-y-2">
            <span className="text-[11px] italic text-slate-300 font-medium pb-1">
              Same Skills. Bigger Possibilities.
            </span>
            <div className="flex flex-col gap-2 w-48">
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#06122d]/80 border border-[#17336b] backdrop-blur-md text-xs font-semibold text-slate-200">
                <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Learn</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#06122d]/80 border border-[#17336b] backdrop-blur-md text-xs font-semibold text-slate-200">
                <HeartHandshake className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Contribute</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#06122d]/80 border border-[#17336b] backdrop-blur-md text-xs font-semibold text-slate-200">
                <Briefcase className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Gain Experience</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#06122d]/80 border border-[#17336b] backdrop-blur-md text-xs font-semibold text-slate-200">
                <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Build Your Future</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Filter Pills Matching Reference Image 1 */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === tab
                ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                : 'bg-[#08122c] border border-[#142959] text-slate-300 hover:text-white hover:bg-[#0f214d]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3. Main Grid Layout: Left Content (Featured Opportunities) + Right Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* LEFT COLUMN: Featured Opportunities (lg:col-span-9) */}
        <div className="lg:col-span-9 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
              Featured Opportunities
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#08122c] text-xs text-slate-200 border border-[#162d63] rounded-lg px-2 py-1 focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option>Most Relevant</option>
                <option>Newest</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>

          {/* Cards Grid: 4 cards per row matching Reference Image 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {filteredOpportunities.map((opp) => {
              const isApplied = appliedIds.includes(opp.id);
              const isBookmarked = bookmarkedIds.includes(opp.id);

              return (
                <div 
                  key={opp.id}
                  className="rounded-xl overflow-hidden bg-[#070e24] border border-[#142857] hover:border-[#2350b0] hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all flex flex-col justify-between group"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-36 w-full overflow-hidden bg-[#0a1533]">
                    <img 
                      src={opp.image} 
                      alt={opp.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070e24] via-transparent to-black/30" />

                    {/* Badge top-left */}
                    {opp.badge && (
                      <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold ${opp.badgeColor}`}>
                        {opp.badge}
                      </span>
                    )}

                    {/* Logo/Icon top-right */}
                    {opp.orgLogo && (
                      <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-[#050b1d]/85 text-white border border-[#1d3d82] tracking-wider">
                        {opp.orgLogo}
                      </span>
                    )}
                  </div>

                  {/* Card Details Body */}
                  <div className="p-3.5 space-y-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-bold text-white line-clamp-1 group-hover:text-cyan-300 transition-colors">
                        {opp.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-medium truncate mt-0.5">
                        {opp.organization}
                      </p>

                      {/* Row 1: Role Type & Level */}
                      <div className="flex items-center gap-3 text-[10px] text-slate-300 mt-2">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span className="truncate">{opp.roleType}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span className="truncate">{opp.level}</span>
                        </div>
                      </div>

                      {/* Row 2: Location & Duration */}
                      <div className="flex items-center gap-3 text-[10px] text-slate-300 mt-1">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate">{opp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate">{opp.duration}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-2.5">
                        {opp.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="text-[9px] font-medium px-2 py-0.5 rounded bg-[#0b1b42] text-cyan-300 border border-[#163470]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Stats & Apply Button */}
                    <div className="pt-3 border-t border-[#12234d] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 text-[10px] text-slate-400">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-slate-400" />
                          <span>{opp.applicants}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3 text-slate-400" />
                          <span>{opp.comments}</span>
                        </div>
                        <button 
                          onClick={() => toggleBookmark(opp.id)}
                          className={`hover:text-cyan-400 transition-colors ${
                            isBookmarked ? 'text-cyan-400' : 'text-slate-500'
                          }`}
                        >
                          <Bookmark className="w-3 h-3 fill-current" />
                        </button>
                      </div>

                      <button
                        onClick={() => handleApply(opp.id, opp.title)}
                        disabled={isApplied}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all shrink-0 ${
                          isApplied 
                            ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 cursor-default'
                            : 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]'
                        }`}
                      >
                        {isApplied ? 'Applied' : 'Apply'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Matching Reference Image 1 */}
          <div className="flex items-center justify-center gap-1.5 pt-4">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="px-2.5 py-1 rounded-lg text-xs text-slate-400 hover:text-white bg-[#08122c] border border-[#162d63] transition-colors"
            >
              ← Previous
            </button>
            {[1, 2, 3, 4, 5].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-colors ${
                  currentPage === page 
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 bg-[#08122c] border border-[#162d63] hover:bg-[#0f214d]'
                }`}
              >
                {page}
              </button>
            ))}
            <span className="text-xs text-slate-500 px-1">...</span>
            <button
              onClick={() => setCurrentPage(20)}
              className="w-7 h-7 rounded-lg text-xs font-bold text-slate-300 bg-[#08122c] border border-[#162d63] hover:bg-[#0f214d]"
            >
              20
            </button>
            <button 
              onClick={() => setCurrentPage(p => p + 1)}
              className="px-2.5 py-1 rounded-lg text-xs text-slate-400 hover:text-white bg-[#08122c] border border-[#162d63] transition-colors"
            >
              Next →
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Right Sidebar Matching Reference Image 1 (lg:col-span-3) */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* Trending Skills Card */}
          <div className="p-4 rounded-xl bg-[#070e24] border border-[#142857] space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-white tracking-wide">
                Trending Skills
              </h3>
              <button className="text-[10px] text-blue-400 hover:underline font-semibold">
                View All
              </button>
            </div>

            <div className="space-y-2">
              {trendingSkills.map((skill) => (
                <div key={skill.rank} className="flex items-center justify-between text-xs py-1 px-1.5 rounded-lg hover:bg-[#0b173d] transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 text-center text-slate-500 font-bold text-[11px]">
                      {skill.rank}
                    </span>
                    <span className="text-slate-200 font-medium">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-0.5">
                    <span className="text-xs">▲</span> {skill.growth.replace('+ ', '')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunity Locations Card with India Map Graphic */}
          <div className="p-4 rounded-xl bg-[#070e24] border border-[#142857] space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-white tracking-wide">
                Opportunity Locations
              </h3>
              <button 
                onClick={() => setCurrentView('map')}
                className="text-[10px] text-blue-400 hover:underline font-semibold"
              >
                View Map
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 items-center">
              {/* Left India map svg illustration */}
              <div className="relative h-28 flex items-center justify-center p-2 rounded-lg bg-[#040817] border border-[#101f44]">
                <svg viewBox="0 0 100 120" className="w-full h-full text-cyan-500/40">
                  <path 
                    d="M35 15 Q45 8 55 12 Q65 18 68 25 Q75 35 65 45 Q70 55 65 65 Q60 80 50 100 Q45 105 40 90 Q30 75 35 60 Q25 45 35 30 Z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeDasharray="2,2"
                  />
                  {/* Glowing Node Points */}
                  <circle cx="45" cy="35" r="3" fill="#00d2ff" className="animate-ping" />
                  <circle cx="45" cy="35" r="2.5" fill="#00d2ff" />
                  <circle cx="42" cy="70" r="2.5" fill="#38bdf8" />
                  <circle cx="50" cy="72" r="2.5" fill="#38bdf8" />
                  <circle cx="40" cy="65" r="2" fill="#38bdf8" />
                  <circle cx="55" cy="85" r="2" fill="#38bdf8" />
                  <circle cx="35" cy="68" r="2" fill="#38bdf8" />
                </svg>
              </div>

              {/* Right Location Stats */}
              <div className="space-y-1 text-[11px]">
                {locations.map((loc) => (
                  <div key={loc.name} className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                      <span>{loc.name}</span>
                    </span>
                    <span className="font-bold text-slate-400 text-[10px]">{loc.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Not Finding the Right Opportunity? Alert Card */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#081538] to-[#050d24] border border-[#16326e] space-y-3">
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">
                  Not finding the right opportunity?
                </h4>
                <p className="text-[10px] text-slate-400 leading-relaxed mt-0.5">
                  Set up alerts and get notified when new opportunities match your skills.
                </p>
              </div>
            </div>

            <button 
              onClick={() => alert('Alert Created! You will be notified on matching openings.')}
              className="w-full py-2 rounded-lg bg-[#0a1a44] hover:bg-[#10296e] border border-[#1c3f8a] text-cyan-300 text-xs font-bold transition-colors"
            >
              Create Alert
            </button>
          </div>

          {/* "From Ideas to Impact" Card with Flag Ribbon Accent */}
          <div className="p-3.5 rounded-xl bg-[#060d21] border border-[#132654] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
            <p className="text-xs font-serif italic text-cyan-300 tracking-wide">
              From Ideas to Impact
            </p>
            <div className="h-0.5 w-16 mx-auto mt-1.5 rounded-full bg-gradient-to-r from-orange-500 via-white to-emerald-500" />
          </div>

        </div>

      </div>
    </div>
  );
};
