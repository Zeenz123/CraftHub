import React, { useState } from 'react';
import { 
  Compass, 
  Search, 
  Sparkles, 
  TrendingUp, 
  Users, 
  FolderGit2, 
  FlaskConical, 
  Cpu, 
  Rocket, 
  Award, 
  Building2, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Bookmark, 
  ShieldCheck, 
  Heart, 
  ExternalLink,
  ChevronRight,
  Flame,
  Zap,
  Globe2,
  Layers,
  GraduationCap
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ExploreView: React.FC = () => {
  const { 
    setSelectedProjectId, 
    setCurrentView, 
    currentUser,
    searchQuery,
    setSearchQuery
  } = useApp();

  const [activeDomain, setActiveDomain] = useState('All');
  const [activeSpotlightTab, setActiveSpotlightTab] = useState<'innovations' | 'builders' | 'bounties' | 'labs'>('innovations');
  const [likedItems, setLikedItems] = useState<string[]>(['trend-1']);

  const domains = [
    'All',
    'Robotics & Autonomy',
    'Embedded & IoT',
    'Aerospace & Drones',
    'CleanTech & EV',
    'Bionics & MedTech',
    'Nanotech & Materials',
    'Semiconductor & PCB'
  ];

  const domainPillars = [
    {
      id: 'robotics',
      title: 'Robotics & Autonomy',
      desc: 'Planetary rovers, quadruped walkers, SLAM navigation, and robotic manipulators.',
      icon: '🤖',
      stats: '210 Projects • 14 Research Labs',
      gradient: 'from-blue-600/20 to-cyan-500/20',
      border: 'border-cyan-500/40'
    },
    {
      id: 'embedded',
      title: 'Embedded Systems & IoT',
      desc: 'Ultra low-power MCUs, RTOS firmware, LoRa telemetry, and edge inferencing.',
      icon: '⚡',
      stats: '340 Projects • 45 Verified Mentors',
      gradient: 'from-amber-600/20 to-yellow-500/20',
      border: 'border-amber-500/40'
    },
    {
      id: 'aerospace',
      title: 'Aerospace & UAVs',
      desc: 'Autonomous quadcopters, fixed-wing mapping drones, and cubesat subsystems.',
      icon: '🛰️',
      stats: '180 Projects • 8 National Grants',
      gradient: 'from-indigo-600/20 to-purple-500/20',
      border: 'border-indigo-500/40'
    },
    {
      id: 'cleantech',
      title: 'CleanTech & EV Mobility',
      desc: 'BMS algorithms, regenerative motor controllers, and solar microgrid sync.',
      icon: '🔋',
      stats: '145 Projects • 12 Open Bounties',
      gradient: 'from-emerald-600/20 to-teal-500/20',
      border: 'border-emerald-500/40'
    },
    {
      id: 'bionics',
      title: 'Bionics & Medical Devices',
      desc: 'EMG prosthetic arms, non-invasive bio-sensors, and clinical diagnostic nodes.',
      icon: '🦿',
      stats: '95 Projects • 18 Journal Papers',
      gradient: 'from-rose-600/20 to-pink-500/20',
      border: 'border-rose-500/40'
    },
    {
      id: 'semiconductors',
      title: 'Semiconductor & PCB Fab',
      desc: 'High-speed 6-layer impedance matched layouts and open-source ASIC silicon.',
      icon: '🔬',
      stats: '115 Projects • 6 Cleanrooms',
      gradient: 'from-violet-600/20 to-fuchsia-500/20',
      border: 'border-violet-500/40'
    },
  ];

  const trendingInnovations = [
    {
      id: 'trend-1',
      title: 'Autonomous Planetary Rover',
      domain: 'Robotics',
      author: 'Zaman (Lead) & IIT Delhi Lab',
      desc: 'Quad-wheel rocker-bogie exploration platform utilizing stereoscopic visual odometry, ROS2 Galactic, and obstacle clearance algorithms.',
      metrics: '72% Built • 8 Contributors • 48 Stars',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      tags: ['ROS2', 'Stereo SLAM', 'C++', 'STM32'],
      projectId: 'proj-rover',
      badge: 'Trending #1'
    },
    {
      id: 'trend-2',
      title: 'Bionic Myoelectric Prosthetic Arm',
      domain: 'Bionics',
      author: 'Rohan Patel & Pune BioFab',
      desc: 'Lightweight SLA 3D-printed bionic hand controlled with dual-channel surface EMG sensors and adaptive gripping algorithms.',
      metrics: '60% Built • 9 Contributors • 67 Stars',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      tags: ['EMG', 'BioMechanics', 'ESP32', 'CAD'],
      projectId: 'proj-hand',
      badge: 'Breakthrough'
    },
    {
      id: 'trend-3',
      title: 'Disaster Relief Thermal UAV',
      domain: 'Aerospace',
      author: 'Delhi Drone Innovation Center',
      desc: 'Search-and-rescue quadcopter equipped with long-wave infrared FLIR cameras, edge AI human detection, and a servo payload release.',
      metrics: '80% Built • 11 Contributors • 88 Stars',
      image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80',
      tags: ['YOLOv8', 'PX4', 'Thermal AI', 'Carbon Fiber'],
      projectId: 'proj-drone',
      badge: 'High Impact'
    },
    {
      id: 'trend-4',
      title: 'Smart Soil Telemetry LoRa Node',
      domain: 'CleanTech',
      author: 'IISc Precision Agri Hub',
      desc: 'Solar-trickle charged agronomic probe evaluating NPK nitrogen content, soil moisture conductivity, and long-range chirp modulation.',
      metrics: '100% Tested • 6 Contributors • 52 Stars',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80',
      tags: ['LoRaWAN', 'Soil Sensors', 'Energy Harvesting'],
      projectId: 'proj-agri',
      badge: 'Verified Deploy'
    }
  ];

  const featuredBuilders = [
    {
      id: 'builder-1',
      name: 'Zaman',
      handle: '@zaman',
      role: 'Robotics Lead & Hardware Engineer',
      org: 'IIT Delhi Robotics Lab',
      level: 'Level 3 Verified',
      avatar: currentUser.avatar,
      contributions: '86 Verified Contributions',
      skills: ['ROS2', 'Embedded C', 'KiCad PCB', 'Sensor Fusion'],
      badge: 'Top Contributor'
    },
    {
      id: 'builder-2',
      name: 'Dr. Ananya Rao',
      handle: '@ananya_rao',
      role: 'Autonomous Systems Fellow',
      org: 'IISc Centre for AI & Robotics',
      level: 'Level 4 Mentor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      contributions: '124 Verified Contributions',
      skills: ['Computer Vision', 'PyTorch', 'SLAM', 'UAV Flight'],
      badge: 'Research Lead'
    },
    {
      id: 'builder-3',
      name: 'Rohan Patel',
      handle: '@rohan_patel',
      role: 'High-Density PCB Architect',
      org: 'MakerSpace Mumbai',
      level: 'Level 3 Verified',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      contributions: '92 Verified Contributions',
      skills: ['Altium Designer', 'STM32', 'RF Layout', 'EMI/EMC'],
      badge: 'Hardware Hero'
    },
    {
      id: 'builder-4',
      name: 'Priya Sharma',
      handle: '@priya_sharma',
      role: 'Bio-Mechatronics Specialist',
      org: 'Pune MedTech Lab',
      level: 'Level 3 Verified',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
      contributions: '68 Verified Contributions',
      skills: ['EMG Signal Proc', '3D Prototyping', 'MATLAB', 'Actuators'],
      badge: 'Innovator'
    }
  ];

  const activeBounties = [
    {
      id: 'bounty-1',
      title: 'National Hardware Buildathon 2025',
      sponsor: 'DST & NITI Aayog',
      reward: '₹10 Lakhs Prize Pool',
      deadline: '18 Days Left',
      desc: 'National competition for physical hardware prototypes in CleanTech, Defense Electronics, and AgriTech.',
      tags: ['Hardware', 'National', 'Grants']
    },
    {
      id: 'bounty-2',
      title: 'Stereo Vision SLAM Node Optimization',
      sponsor: 'IIT Delhi Rover Project',
      reward: '₹45,000 Bounty',
      deadline: '10 Days Left',
      desc: 'Optimize dual OAK-D stereo disparity compute pipeline for low-latency Jetson Orin Nano inferencing.',
      tags: ['ROS2', 'CUDA', 'Optimization']
    },
    {
      id: 'bounty-3',
      title: 'Ultra-Low ESR BMS Balancing Circuit',
      sponsor: 'ElectroCraft AI',
      reward: '₹60,000 Bounty',
      deadline: '14 Days Left',
      desc: 'Design and simulate an active balancing 16S LiFePO4 battery management system in KiCad.',
      tags: ['PCB Design', 'Power Electronics', 'BMS']
    }
  ];

  const toggleLike = (id: string) => {
    setLikedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div id="explore-view" className="p-6 space-y-8 max-w-[1440px] mx-auto font-sans text-slate-100 select-none">
      {/* Hero Banner: CraftHub Ecosystem Explorer */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#071333] via-[#091b49] to-[#040e29] border border-[#193570] p-6 sm:p-8 shadow-[0_4px_35px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r from-blue-900/80 to-cyan-950/80 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5 shadow-sm">
                <Compass className="w-3 h-3 text-cyan-400" />
                <span>Ecosystem Discovery Engine</span>
              </span>
              <span className="text-[11px] text-slate-400 hidden sm:inline font-semibold">
                People • Projects • Possibilities
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Explore CraftHub
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Immerse yourself in India’s decentralized deep-tech ecosystem. Discover trending hardware builds, connect with peer-reviewed researchers, tackle open engineering bounties, and access nation-wide laboratory infrastructure.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button 
                onClick={() => setCurrentView('projects')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] hover:from-[#134bc2] hover:to-[#00a8d1] text-white text-xs font-bold shadow-[0_0_15px_rgba(0,200,248,0.35)] transition-all flex items-center gap-1.5"
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Browse All Projects</span>
              </button>
              <button 
                onClick={() => setCurrentView('research')}
                className="px-4 py-2 rounded-xl bg-[#09173d] border border-[#1b3a7a] hover:border-cyan-500 text-slate-200 text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
                <span>Research Papers & Labs</span>
              </button>
              <button 
                onClick={() => setCurrentView('infrastructure')}
                className="px-4 py-2 rounded-xl bg-[#09173d] border border-[#1b3a7a] hover:border-cyan-500 text-slate-200 text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Find Makerspaces</span>
              </button>
            </div>

            {/* Live Stats Row */}
            <div className="flex flex-wrap items-center gap-5 pt-3">
              <div>
                <span className="text-lg font-extrabold text-white">1,240+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Projects</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">8,500+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Builders</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">420+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Facilities</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-[#00d2ff]">₹1.2 Cr+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Bounties & Grants</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="bg-[#0b1b42]/90 border border-[#21478f] rounded-2xl p-5 flex flex-col justify-between max-w-sm backdrop-blur-md shadow-lg space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,210,255,0.4)]">
                <Globe2 className="w-7 h-7 text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-extrabold text-cyan-300 uppercase tracking-wider block">
                  Decentralized Network
                </span>
                <h3 className="text-sm font-bold text-white leading-snug">
                  Verified Engineering from 85+ Universities
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Every build on CraftHub is backed by actual schematics, verified Git code commits, test reports, and peer-reviewed hardware milestones.
            </p>

            <div className="pt-2 border-t border-[#1a3875] flex items-center justify-between text-xs">
              <span className="text-slate-400">Your Verification:</span>
              <span className="text-xs font-bold text-cyan-300 bg-blue-950/80 px-2.5 py-0.5 rounded-full border border-cyan-500/40">
                Level 3 Expert
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Domain Pillars Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>Explore by Engineering Domain</span>
            </h2>
            <p className="text-xs text-slate-400">Dive into focused hardware sectors with dedicated teams and testbeds.</p>
          </div>
          <button 
            onClick={() => setCurrentView('projects')}
            className="text-xs text-[#00d2ff] hover:underline font-semibold flex items-center gap-1"
          >
            <span>View All Sectors</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {domainPillars.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => {
                setSearchQuery(pillar.title.split(' ')[0]);
                setCurrentView('projects');
              }}
              className={`p-5 rounded-2xl bg-[#071333] border ${pillar.border} hover:border-[#00c8f8] cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,180,255,0.15)] group relative overflow-hidden`}
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl">{pillar.icon}</span>
                <span className="p-1.5 rounded-xl bg-[#0e214d] text-slate-400 group-hover:text-cyan-300 transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>

              <div className="mt-3 space-y-1.5">
                <h3 className="text-sm font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#13254e] flex items-center justify-between text-[11px]">
                <span className="text-cyan-300 font-semibold">{pillar.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Spotlight Hub */}
      <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#142854]">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Ecosystem Spotlight</span>
            </h2>
            <p className="text-xs text-slate-400">Curated breakthroughs, verified builders, live challenge bounties, and lab facilities.</p>
          </div>

          {/* Spotlight Navigation Tabs */}
          <div className="flex items-center gap-1.5 bg-[#08122c] border border-[#18346e] rounded-xl p-1 overflow-x-auto scrollbar-none">
            {[
              { id: 'innovations', label: 'Trending Builds', icon: Flame },
              { id: 'builders', label: 'Top Builders', icon: Users },
              { id: 'bounties', label: 'Open Bounties', icon: Zap },
              { id: 'labs', label: 'Facilities', icon: Cpu }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSpotlightTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSpotlightTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#175beb] to-[#00a8e8] text-white font-bold shadow-sm' 
                      : 'text-slate-400 hover:text-white hover:bg-[#0b1b42]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: Trending Builds */}
        {activeSpotlightTab === 'innovations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trendingInnovations.map((item) => (
              <div 
                key={item.id}
                onClick={() => {
                  setSelectedProjectId(item.projectId);
                  setCurrentView('project-workspace');
                }}
                className="p-4 rounded-xl bg-[#09173d] border border-[#18346e] hover:border-cyan-500/60 transition-all cursor-pointer flex flex-col sm:flex-row gap-4 group"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full sm:w-36 h-32 rounded-xl object-cover shrink-0 border border-[#1d3d7d] group-hover:scale-[1.02] transition-transform"
                />
                <div className="flex-1 flex flex-col justify-between space-y-2 min-w-0">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-950/80 text-cyan-300 border border-cyan-500/40">
                        {item.badge}
                      </span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(item.id);
                        }}
                        className="p-1 text-slate-400 hover:text-rose-400"
                      >
                        <Heart className={`w-3.5 h-3.5 ${likedItems.includes(item.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                      </button>
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#13254e] flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 truncate">{item.author}</span>
                    <span className="text-cyan-300 font-bold flex items-center gap-1">
                      <span>View Build</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Top Builders */}
        {activeSpotlightTab === 'builders' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredBuilders.map((builder) => (
              <div 
                key={builder.id}
                onClick={() => setCurrentView('profile')}
                className="p-4 rounded-xl bg-[#09173d] border border-[#18346e] hover:border-cyan-500/60 transition-all cursor-pointer flex flex-col justify-between space-y-3 group"
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={builder.avatar} 
                    alt={builder.name} 
                    className="w-12 h-12 rounded-xl object-cover ring-2 ring-cyan-500/40 shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 truncate">
                      {builder.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 truncate">{builder.handle}</p>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-950 text-cyan-300 border border-cyan-500/30">
                      {builder.level}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-slate-300 font-medium leading-snug">{builder.role}</p>
                  <p className="text-[10px] text-slate-400">{builder.org}</p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {builder.skills.map((s) => (
                    <span key={s} className="text-[9px] px-1.5 py-0.5 rounded bg-[#0e214d] text-blue-300 border border-[#1a3875]">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-[#13254e] flex items-center justify-between text-[10px] text-slate-400">
                  <span>{builder.contributions}</span>
                  <span className="text-cyan-400 font-bold group-hover:underline">Profile ›</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Open Bounties */}
        {activeSpotlightTab === 'bounties' && (
          <div className="space-y-3">
            {activeBounties.map((bounty) => (
              <div 
                key={bounty.id}
                className="p-4 rounded-xl bg-[#09173d] border border-[#18346e] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-cyan-500/50 transition-all"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">{bounty.title}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                      {bounty.reward}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{bounty.desc}</p>
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-0.5">
                    <span>Sponsor: <span className="text-slate-300">{bounty.sponsor}</span></span>
                    <span>•</span>
                    <span className="text-amber-400 font-semibold">{bounty.deadline}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <button 
                    onClick={() => setCurrentView('opportunities')}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-sm"
                  >
                    Apply for Bounty
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Facilities & Makerspaces */}
        {activeSpotlightTab === 'labs' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: 'IIT Delhi Mechatronics & CNC Lab', location: 'Hauz Khas, New Delhi', eq: '5-Axis CNC, Wire EDM, Laser Cutter', status: 'Available for Booking' },
              { name: 'IISc Nano-Fabrication Cleanroom', location: 'Malleshwaram, Bengaluru', eq: 'Photolithography, Sputtering, SEM', status: 'Verification Required' },
              { name: 'MakerSpace Mumbai Rapid Prototyping', location: 'Andheri East, Mumbai', eq: 'SLS 3D Printing, Pick & Place PCB', status: 'Immediate Access' },
            ].map((lab) => (
              <div 
                key={lab.name}
                onClick={() => setCurrentView('infrastructure')}
                className="p-4 rounded-xl bg-[#09173d] border border-[#18346e] hover:border-cyan-500/50 cursor-pointer transition-all space-y-2.5 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xs font-bold text-white hover:text-cyan-300">{lab.name}</h4>
                  <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>{lab.location}</span>
                  </p>
                  <p className="text-[11px] text-slate-300 mt-2">Equipment: {lab.eq}</p>
                </div>
                <div className="pt-2 border-t border-[#13254e] flex items-center justify-between text-[10px]">
                  <span className="text-emerald-400 font-semibold">{lab.status}</span>
                  <span className="text-cyan-300 font-bold">Book Slot ›</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Ecosystem Pathways / "What Do You Want to Accomplish?" */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#081538] via-[#0b1d4f] to-[#071333] border border-[#1a3875] space-y-4">
        <div>
          <h3 className="text-base font-bold text-white">How will you participate today?</h3>
          <p className="text-xs text-slate-300">Choose your path to start collaborating, prototyping, or researching.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <button 
            onClick={() => setCurrentView('projects')}
            className="p-3.5 rounded-xl bg-[#09173d]/80 border border-[#1b3a7a] hover:border-cyan-400 text-left transition-all group"
          >
            <FolderGit2 className="w-5 h-5 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Join an Active Project</div>
            <p className="text-[10px] text-slate-400 mt-1">Contribute code, circuit schematics, or CAD models.</p>
          </button>

          <button 
            onClick={() => setCurrentView('research')}
            className="p-3.5 rounded-xl bg-[#09173d]/80 border border-[#1b3a7a] hover:border-cyan-400 text-left transition-all group"
          >
            <FlaskConical className="w-5 h-5 text-indigo-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Publish or Read Research</div>
            <p className="text-[10px] text-slate-400 mt-1">Peer-reviewed preprints, patents, and datasets.</p>
          </button>

          <button 
            onClick={() => setCurrentView('opportunities')}
            className="p-3.5 rounded-xl bg-[#09173d]/80 border border-[#1b3a7a] hover:border-cyan-400 text-left transition-all group"
          >
            <Award className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Apply for Grants & Jobs</div>
            <p className="text-[10px] text-slate-400 mt-1">Direct hiring pipelines and funded research grants.</p>
          </button>

          <button 
            onClick={() => setCurrentView('infrastructure')}
            className="p-3.5 rounded-xl bg-[#09173d]/80 border border-[#1b3a7a] hover:border-cyan-400 text-left transition-all group"
          >
            <Cpu className="w-5 h-5 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Reserve Lab Equipment</div>
            <p className="text-[10px] text-slate-400 mt-1">Book CNCs, cleanrooms, and testing facilities.</p>
          </button>
        </div>
      </div>
    </div>
  );
};
