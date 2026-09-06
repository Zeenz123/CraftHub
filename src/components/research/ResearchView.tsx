import React, { useState } from 'react';
import { 
  FlaskConical, 
  Search, 
  PlusCircle, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  BookOpen, 
  ChevronRight,
  Award,
  Sparkles,
  Cpu,
  Microscope,
  Atom,
  Radio,
  Dna,
  Zap,
  Globe2,
  Rocket,
  SunMedium,
  Layers,
  Building2,
  Calendar,
  Compass,
  Briefcase,
  MapPin,
  ExternalLink,
  GraduationCap,
  Activity,
  Terminal,
  FileCheck,
  ShieldCheck,
  Share2,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { useApp, AppView } from '../../context/AppContext';

export const ResearchView: React.FC = () => {
  const { 
    setCurrentView, 
    currentUser, 
    setIsCreateProjectOpen,
    setSelectedProjectId
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTimelineStep, setActiveTimelineStep] = useState<number>(2);
  const [activityTab, setActivityTab] = useState<'all' | 'experiments' | 'publications' | 'contributors'>('all');

  // Top Nav Items
  const topNavItems: { id: AppView; label: string }[] = [
    { id: 'explore', label: 'Explore' },
    { id: 'projects', label: 'Projects' },
    { id: 'learn', label: 'Learn' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'startups', label: 'Startups' },
    { id: 'businesses', label: 'Business' },
    { id: 'research', label: 'Research' },
    { id: 'opportunities', label: 'Opportunities' }
  ];

  // Research Categories with rich imagery
  const researchCategories = [
    {
      id: 'ai-ml',
      name: 'AI & ML',
      papersCount: 142,
      labsCount: 28,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
      tag: 'Neural Compute'
    },
    {
      id: 'robotics',
      name: 'Robotics',
      papersCount: 98,
      labsCount: 34,
      image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=600&auto=format&fit=crop&q=80',
      tag: 'Autonomous SLAM'
    },
    {
      id: 'electronics',
      name: 'Electronics',
      papersCount: 120,
      labsCount: 42,
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&auto=format&fit=crop&q=80',
      tag: 'High-Speed PCB'
    },
    {
      id: 'semiconductors',
      name: 'Semiconductors',
      papersCount: 64,
      labsCount: 19,
      image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=600&auto=format&fit=crop&q=80',
      tag: '3nm Lithography'
    },
    {
      id: 'biotechnology',
      name: 'Biotechnology',
      papersCount: 85,
      labsCount: 22,
      image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&auto=format&fit=crop&q=80',
      tag: 'CRISPR & Genomics'
    },
    {
      id: 'energy',
      name: 'Energy',
      papersCount: 110,
      labsCount: 31,
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80',
      tag: 'Solid-State Cells'
    },
    {
      id: 'materials',
      name: 'Materials',
      papersCount: 76,
      labsCount: 18,
      image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80',
      tag: 'Graphene & MXenes'
    },
    {
      id: 'space',
      name: 'Space',
      papersCount: 52,
      labsCount: 14,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
      tag: 'CubeSat Avionics'
    },
    {
      id: 'climate',
      name: 'Climate',
      papersCount: 94,
      labsCount: 26,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=80',
      tag: 'Carbon Capture'
    },
    {
      id: 'physics',
      name: 'Physics',
      papersCount: 48,
      labsCount: 15,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=80',
      tag: 'Quantum Qubits'
    },
  ];

  // Research Discovery Cards
  const discoveryCards = [
    {
      id: 'res-disc-1',
      title: 'Nanoscale Gallium Nitride (GaN) Power Switching Architecture',
      category: 'Semiconductors',
      organization: 'IISc Bengaluru — Center for Nano Science & Engineering (CeNSE)',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
      progress: 78,
      stage: 'Phase 3: Wafer Fabrication',
      researchers: [
        { name: 'Dr. Srinivas Iyer', role: 'Principal Investigator', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
        { name: 'Zaman', role: 'Lead Design Engineer', avatar: currentUser.avatar },
        { name: 'Pooja Nair', role: 'Solid State Fellow', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' }
      ],
      location: 'Bengaluru, Karnataka',
      skills: ['GaN Epi-wafers', 'Cleanroom Lithography', 'TCAD Simulation', 'Thermal Dissipation'],
      grant: 'Funded ($240,000 DST Grant)',
      projectId: 'proj-01'
    },
    {
      id: 'res-disc-2',
      title: 'Decentralized Swarm Robotics for Rough Terrain Mapping & SLAM',
      category: 'Robotics',
      organization: 'IIT Bombay — Autonomous Systems & Robotics Research Core',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
      progress: 65,
      stage: 'Phase 2: Mesh Flight Testing',
      researchers: [
        { name: 'Prof. Ramesh Kulkarni', role: 'Lead Director', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
        { name: 'Zaman', role: 'Perception Specialist', avatar: currentUser.avatar },
        { name: 'Kavita Menon', role: 'Control Systems', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80' }
      ],
      location: 'Mumbai, Maharashtra',
      skills: ['ROS2 Humble', 'CUDA Disparity', 'LiDAR Odometry', 'Ultra-Wideband Mesh'],
      grant: 'Co-Funded by L&T Technology',
      projectId: 'proj-01'
    },
    {
      id: 'res-disc-3',
      title: 'Solid-State Garnet Electrolyte Pellets for Sub-Zero Fast Charging',
      category: 'Energy',
      organization: 'IIT Madras Research Park — National Battery Consortium',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80',
      progress: 84,
      stage: 'Phase 4: Coin-Cell Life Cycle',
      researchers: [
        { name: 'Dr. Ananya Roy', role: 'Materials Scientist', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
        { name: 'Rahul Chhabra', role: 'Electrochemistry Fellow', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' }
      ],
      location: 'Chennai, Tamil Nadu',
      skills: ['Impedance Spectroscopy', 'Garnet LLZO', 'Dry Cleanroom', 'X-Ray Diffraction'],
      grant: 'SERB India Apex Grant',
      projectId: 'proj-02'
    },
    {
      id: 'res-disc-4',
      title: 'Non-Invasive Bionic Myoelectric Neuro-Prosthetic Interface',
      category: 'Biotechnology',
      organization: 'IIT Delhi — Biomedical Engineering & Neuro-Rehab Center',
      image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop&q=80',
      progress: 92,
      stage: 'Phase 5: Clinical Patient Trial',
      researchers: [
        { name: 'Dr. Tarun Verma', role: 'Clinical Neuro-Engineer', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80' },
        { name: 'Meera Deshmukh', role: 'Firmware Engineer', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80' }
      ],
      location: 'New Delhi, NCR',
      skills: ['HD-sEMG Decoding', 'Embedded TinyML', 'Carbon Prosthetic 3D', 'BLE 5.3'],
      grant: 'ICMR Supported Clinical Pilot',
      projectId: 'proj-03'
    }
  ];

  // Active Research Spotlight
  const activeSpotlight = {
    title: 'Stereoscopic Depth Mapping & Rough Terrain Autonomous Navigation (Autonomous Rover)',
    category: 'Robotics & Deep Perception',
    stage: 'Hardware-In-The-Loop Validation (Stage 4 of 6)',
    progress: 74,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80',
    leadResearcher: 'Zaman (Project Lead & Hardware Systems)',
    researchers: [
      { name: 'Zaman', role: 'Lead Architect', avatar: currentUser.avatar },
      { name: 'Dr. Vikram Sethi', role: 'Advisor (IIT Delhi)', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
      { name: 'Ayesha Siddiqui', role: 'Computer Vision', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' }
    ],
    requiredEquipment: [
      'NVIDIA Jetson AGX Orin DevKit',
      'Dual Global-Shutter Stereoscopic Cameras',
      'Solid-State FMCW LiDAR Test Bench',
      'Oscilloscope 1GHz 4-Channel'
    ],
    requiredSkills: ['C++20', 'ROS2 Nav2 Stack', 'OpenCV CUDA', 'TensorRT Quantization', 'Kalman Filtering'],
    location: 'Advanced Mechatronics Lab, IISc & CraftHub Deep-Tech Lab',
    openStatus: 'Accepting External Contributors (3 Tasks Open)',
    paperPreprint: 'IEEE Transactions on Field Robotics (In Submission)'
  };

  // Timeline Steps
  const timelineSteps = [
    { 
      step: 1, 
      name: 'IDEA', 
      desc: 'Scientific literature review, problem definition & hypothesis proposal',
      detail: 'Identify gaps in existing literature, define technical scope, and establish reproducibility benchmarks.'
    },
    { 
      step: 2, 
      name: 'HYPOTHESIS', 
      desc: 'Mathematical modeling, computational simulation & test matrix',
      detail: 'Formulate predictive physics equations, FEA or CFD models, and formal test parameters.'
    },
    { 
      step: 3, 
      name: 'EXPERIMENT', 
      desc: 'Cleanroom fabrication, prototyping, hardware assembly & bench trials',
      detail: 'Produce physical test coupons, calibrate test instruments, and log high-frequency telemetry.'
    },
    { 
      step: 4, 
      name: 'VALIDATION', 
      desc: 'Statistical rigor, blind trial replications & cross-lab testing',
      detail: 'Verify repeatable precision, execute edge-case stress runs, and undergo institutional review.'
    },
    { 
      step: 5, 
      name: 'RESULT', 
      desc: 'Data synthesis, error margin determination & performance benchmarks',
      detail: 'Analyze empirical deviations, benchmark against world standards, and compile dataset assets.'
    },
    { 
      step: 6, 
      name: 'PUBLICATION / IMPLEMENTATION', 
      desc: 'Peer-reviewed paper, open-source dataset, patenting & pilot scale-up',
      detail: 'Publish in indexed journals, open-source repositories, and transfer IP for industrial prototyping.'
    },
  ];

  // Research Infrastructure Cards
  const infrastructureItems = [
    {
      id: 'inf-1',
      title: 'Nano-Fabrication Cleanroom (Class 100 / 1000)',
      type: 'Laboratories',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
      specs: 'Electron Beam Lithography, Deep Reactive Ion Etching (DRIE), Thermal Evaporator',
      location: 'IISc CeNSE, Bengaluru',
      capacity: '4 slots available next week'
    },
    {
      id: 'inf-2',
      title: 'High-Resolution Field Emission SEM & TEM',
      type: 'Equipment',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
      specs: '0.8nm Spatial Resolution, Energy Dispersive X-Ray Spectroscopy (EDX)',
      location: 'IIT Bombay Central Facility',
      capacity: 'Immediate booking via CraftHub'
    },
    {
      id: 'inf-3',
      title: 'Anechoic RF & EMI/EMC Testing Chamber',
      type: 'Testing facilities',
      image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&auto=format&fit=crop&q=80',
      specs: 'DC to 40GHz Full Shielding, 3D Antenna Radiation Pattern Measurement',
      location: 'SAMEER Research Center, Chennai',
      capacity: 'Open for university projects'
    },
    {
      id: 'inf-4',
      title: 'IIT Madras Research Park Deep-Tech Wing',
      type: 'Universities',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=80',
      specs: '200+ Incubated Labs, Battery Pack Cycling Testbeds, Micro-Grid Simulation',
      location: 'Taramani, Chennai',
      capacity: 'Academic & Industry Cohorts'
    },
    {
      id: 'inf-5',
      title: 'National Center for Biological Sciences (NCBS)',
      type: 'Research centers',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80',
      specs: 'Biosafety Level 3 (BSL-3), Next-Gen Illumina NovaSeq Sequencers, Cryo-EM',
      location: 'Bengaluru, Karnataka',
      capacity: 'Open Access Research Portal'
    },
    {
      id: 'inf-6',
      title: 'Precision Additive & 5-Axis CNC Fabrication Hub',
      type: 'Factories',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
      specs: 'Direct Metal Laser Sintering (DMLS Titanium/Inconel), 5-Axis DMG Mori CNC',
      location: 'Pune Industrial Corridor',
      capacity: 'Rapid Turnaround Prototyping'
    }
  ];

  // Research Activity Feeds
  const activityItems = [
    {
      id: 'act-1',
      type: 'publication',
      title: 'Preprint accepted: "Stereoscopic Visual SLAM on Edge GPUs in Unstructured Terrain"',
      project: 'Autonomous Rover',
      author: 'Zaman & Prof. Ramesh Kulkarni',
      avatar: currentUser.avatar,
      time: '12 minutes ago',
      badge: 'IEEE Preprint',
      badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/40',
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&auto=format&fit=crop&q=80'
    },
    {
      id: 'act-2',
      type: 'experiment',
      title: 'Completed 1,200 continuous thermal cycles on GaN power wafer',
      project: 'GaN Power Semiconductor',
      author: 'Dr. Srinivas Iyer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      time: '1 hour ago',
      badge: 'Cleanroom Run #41',
      badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40',
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&auto=format&fit=crop&q=80'
    },
    {
      id: 'act-3',
      type: 'contributor',
      title: 'Dr. Ayesha Siddiqui joined Autonomous Rover as Computer Vision Specialist',
      project: 'Autonomous Rover',
      author: 'Dr. Ayesha Siddiqui',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      time: '3 hours ago',
      badge: 'Verified Level 3',
      badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-950/40',
      thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=200&auto=format&fit=crop&q=80'
    },
    {
      id: 'act-4',
      type: 'milestone',
      title: 'Achieved 99.2% accuracy in real-time sEMG hand gesture decoding at 4ms latency',
      project: 'Bionic Myoelectric Neuro-Prosthetic',
      author: 'Dr. Tarun Verma',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
      time: '6 hours ago',
      badge: 'Phase 5 Cleared',
      badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-950/40',
      thumbnail: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=200&auto=format&fit=crop&q=80'
    }
  ];

  const filteredDiscovery = discoveryCards.filter(c => {
    if (selectedCategory !== 'All' && c.category !== selectedCategory) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        c.title.toLowerCase().includes(q) ||
        c.organization.toLowerCase().includes(q) ||
        c.skills.some(s => s.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const filteredActivity = activityItems.filter(item => {
    if (activityTab === 'all') return true;
    if (activityTab === 'experiments') return item.type === 'experiment';
    if (activityTab === 'publications') return item.type === 'publication';
    if (activityTab === 'contributors') return item.type === 'contributor';
    return true;
  });

  return (
    <div id="research-ecosystem-page" className="min-h-screen bg-[#040817] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* -------------------------------------------------- */}
      {/* 1. TOP NAVIGATION                                  */}
      {/* -------------------------------------------------- */}
      <nav 
        id="research-top-nav" 
        className="sticky top-0 z-40 bg-[#060c20]/90 backdrop-blur-xl border-b border-[#142654] px-4 sm:px-8 py-3 transition-all"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* CraftHub Logo */}
          <button 
            onClick={() => setCurrentView('explore')}
            className="flex items-center gap-2.5 group text-left shrink-0"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1554db] to-[#00d2ff] flex items-center justify-center text-white shadow-[0_0_16px_rgba(0,210,255,0.5)] group-hover:scale-105 transition-transform">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white block leading-none">
                CraftHub
              </span>
              <span className="text-[10px] text-cyan-400 font-semibold tracking-wider uppercase">
                Research Ecosystem
              </span>
            </div>
          </button>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#091432] p-1 rounded-xl border border-[#172c60]">
            {topNavItems.map(item => {
              const isActive = item.id === 'research';
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_12px_rgba(0,210,255,0.4)]'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-[#10204c]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Search + User Profile */}
          <div className="flex items-center gap-3">
            <div className="relative w-40 sm:w-60">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search labs, papers..."
                className="w-full bg-[#08132e] text-xs text-slate-200 placeholder:text-slate-500 rounded-xl pl-9 pr-3 py-1.5 border border-[#1a336f] focus:outline-none focus:border-cyan-400 transition-all"
              />
            </div>

            <button 
              onClick={() => setCurrentView('profile')}
              className="flex items-center gap-2 p-1 pl-2 rounded-xl bg-[#091535] border border-[#19326e] hover:border-cyan-500/50 transition-all"
            >
              <span className="text-xs font-bold text-white hidden md:inline">{currentUser.name}</span>
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="w-7 h-7 rounded-lg object-cover border border-cyan-500/40"
              />
            </button>
          </div>

        </div>
      </nav>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-12">

        {/* -------------------------------------------------- */}
        {/* 2. RESEARCH HERO                                   */}
        {/* -------------------------------------------------- */}
        <section 
          id="research-hero"
          className="relative rounded-3xl overflow-hidden border border-[#182f6a] bg-gradient-to-br from-[#07112c] via-[#09173d] to-[#040817] p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
        >
          {/* Subtle atmospheric blue glow behind hero */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[140px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT: Information & Call to Actions */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2258] border border-[#204ca6] text-cyan-400 text-xs font-extrabold tracking-wider uppercase">
                <Atom className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
                <span>Peer-Reviewed Deep-Tech & Academic Science</span>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-black tracking-widest text-cyan-400 uppercase">
                  RESEARCH
                </p>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  Discover, collaborate and build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">real-world research</span>.
                </h1>
              </div>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Connect university faculty, premier research institutes, and deep-tech founders. Co-create reproducible hardware, access cleanrooms, publish open-science benchmarks, and turn peer-reviewed prototypes into industrial realities.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="#research-discovery"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_24px_rgba(0,180,255,0.45)] hover:shadow-[0_0_32px_rgba(0,180,255,0.7)] transition-all group"
                >
                  <Search className="w-4 h-4 text-cyan-200" />
                  <span>Explore Research</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button 
                  onClick={() => setIsCreateProjectOpen(true)}
                  className="px-6 py-3 rounded-xl bg-[#091535] hover:bg-[#102357] border border-[#1f3f88] hover:border-cyan-400/80 text-cyan-300 hover:text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md"
                >
                  <PlusCircle className="w-4 h-4 text-cyan-400" />
                  <span>Start Research Project</span>
                </button>
              </div>

              {/* Live Metric Badges */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#162a5c]">
                <div>
                  <p className="text-lg sm:text-2xl font-black text-cyan-400">890+</p>
                  <p className="text-[11px] text-slate-400 font-medium">Published Papers</p>
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-black text-blue-400">140+</p>
                  <p className="text-[11px] text-slate-400 font-medium">Vetted Labs & Cleanrooms</p>
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-black text-emerald-400">320+</p>
                  <p className="text-[11px] text-slate-400 font-medium">Active Collaborators</p>
                </div>
              </div>

            </div>

            {/* RIGHT: Large High-Quality Research Image (~40% area) with Blue Glow */}
            <div className="lg:col-span-5 relative">
              {/* Outer Blue Glow Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/40 via-blue-600/30 to-indigo-600/40 blur-xl opacity-80" />
              
              <div className="relative rounded-2xl overflow-hidden border border-[#234ca1] bg-[#070e24] shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1200&auto=format&fit=crop&q=80" 
                  alt="Scientific Cleanroom Research Lab"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Atmospheric gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040817] via-transparent to-black/20" />

                {/* Floating Live Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#070e24]/90 backdrop-blur-md border border-cyan-500/40 text-[11px] font-bold text-cyan-300">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>IISc CeNSE Cleanroom #2 — Active Run</span>
                  </div>
                </div>

                {/* Floating Specs Card */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#081433]/90 backdrop-blur-md border border-[#1b3774] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Quantum & Semiconductor R&D</p>
                    <p className="text-[10px] text-slate-400">High-Purity Silicon Epitaxy & Deep UV Lithography</p>
                  </div>
                  <span className="px-2 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-500/40">
                    Class 100
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* -------------------------------------------------- */}
        {/* 3. RESEARCH DISCOVERY                              */}
        {/* -------------------------------------------------- */}
        <section id="research-discovery" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-400">
                  Discovery Hub
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Featured Research Projects & Trials
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Large-scale experiments with open lab access, verified datasets, and publication roadmaps.
              </p>
            </div>

            {/* Quick Filter Status */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400">Showing</span>
              <span className="px-2.5 py-1 rounded-lg bg-[#0e1c44] text-cyan-300 font-bold border border-[#1c3877]">
                {filteredDiscovery.length} Projects
              </span>
            </div>
          </div>

          {/* Large Visual Research Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDiscovery.map(card => (
              <div 
                key={card.id}
                className="rounded-2xl border border-[#182e66] bg-[#07112c] hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(0,180,255,0.2)] transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* [ LARGE IMAGE ] occupying meaningful visual space */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07112c] via-transparent to-black/40" />

                  {/* Category & Grant Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-[#070e24]/90 backdrop-blur-md text-[11px] font-bold text-cyan-300 border border-cyan-500/30 shadow-md">
                      {card.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-950/80 backdrop-blur-md text-[10px] font-bold text-emerald-300 border border-emerald-500/40">
                      {card.grant}
                    </span>
                  </div>

                  {/* Stage Pill */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#08163a]/90 backdrop-blur-md text-[10px] font-semibold text-blue-200 border border-[#1c3b7a]">
                      {card.stage}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-1">
                      {card.title}
                    </h3>
                    
                    <p className="text-xs text-blue-300 font-medium flex items-center gap-1.5 mt-1">
                      <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{card.organization}</span>
                    </p>

                    <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{card.location}</span>
                    </p>
                  </div>

                  {/* Progress Bar with Electric Cyan Accent */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Research Completion</span>
                      <span className="font-extrabold text-cyan-400">{card.progress}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#0a1533] border border-[#172b5a] overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-300 shadow-[0_0_8px_#00d2ff]" 
                        style={{ width: `${card.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Researchers & Avatars */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {card.researchers.map((res, i) => (
                          <img 
                            key={i} 
                            src={res.avatar} 
                            alt={res.name} 
                            title={`${res.name} — ${res.role}`}
                            className="w-7 h-7 rounded-full object-cover border-2 border-[#07112c]"
                          />
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-300 font-medium">
                        {card.researchers[0].name} +{card.researchers.length - 1} researchers
                      </span>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {card.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#0a1638] text-cyan-300/90 border border-[#18326e]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contribute / Explore Button */}
                  <div className="pt-2 border-t border-[#132757] flex items-center justify-between">
                    <button 
                      onClick={() => {
                        setSelectedProjectId(card.projectId);
                        setCurrentView('project-workspace');
                      }}
                      className="w-full py-2 rounded-xl bg-[#0d2154] hover:bg-[#133282] border border-[#214aa8] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_15px_rgba(0,180,255,0.3)] transition-all"
                    >
                      <Microscope className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Contribute / Explore Research</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------- */}
        {/* 4. RESEARCH CATEGORIES                             */}
        {/* -------------------------------------------------- */}
        <section id="research-categories" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-400">
                  Domain Exploration
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                Research Disciplines & Laboratories
              </h2>
            </div>

            {selectedCategory !== 'All' && (
              <button 
                onClick={() => setSelectedCategory('All')}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300"
              >
                Reset Filter (Show All)
              </button>
            )}
          </div>

          {/* 10 Visual Category Cards: AI & ML, Robotics, Electronics, Semiconductors, Biotechnology, Energy, Materials, Space, Climate, Physics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {researchCategories.map(cat => {
              const isSelected = selectedCategory === cat.name;
              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(selectedCategory === cat.name ? 'All' : cat.name)}
                  className={`relative rounded-2xl overflow-hidden border cursor-pointer transition-all group h-44 flex flex-col justify-end p-3.5 ${
                    isSelected 
                      ? 'border-cyan-400 shadow-[0_0_20px_rgba(0,210,255,0.45)] ring-1 ring-cyan-400' 
                      : 'border-[#172d62] hover:border-[#274ea8] hover:shadow-lg'
                  }`}
                >
                  {/* Category Background Image */}
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Layers */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040817] via-[#040817]/70 to-transparent" />
                  
                  {/* Top Tag */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-[#070e24]/90 text-cyan-300 border border-cyan-500/40">
                      {cat.tag}
                    </span>
                  </div>

                  {/* Bottom Text */}
                  <div className="relative z-10 space-y-0.5">
                    <h3 className="text-sm font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                      {cat.name}
                    </h3>
                    <div className="flex items-center justify-between text-[10px] text-slate-300 font-medium">
                      <span>{cat.papersCount} Papers</span>
                      <span className="text-cyan-400 font-bold">{cat.labsCount} Labs</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* -------------------------------------------------- */}
        {/* 5. ACTIVE RESEARCH                                 */}
        {/* -------------------------------------------------- */}
        <section id="active-research" className="space-y-4">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-400">
              Active Spotlight Investigation
            </span>
          </div>

          <div className="rounded-3xl border border-[#204396] bg-gradient-to-br from-[#081538] via-[#06102a] to-[#040817] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Big Visual Image */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                <img 
                  src={activeSpotlight.image} 
                  alt={activeSpotlight.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent to-[#081538]/90" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-xl bg-[#070e24]/90 backdrop-blur-md text-xs font-bold text-cyan-400 border border-cyan-500/40">
                    Flagship Hardware Project
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#060c20]/90 backdrop-blur-md border border-[#1a336f]">
                  <p className="text-xs font-bold text-white">Preprint Status</p>
                  <p className="text-[11px] text-cyan-300 font-medium">{activeSpotlight.paperPreprint}</p>
                </div>
              </div>

              {/* Right Column: Project details, stage, progress, equipment, skills */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-5">
                
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-500/30">
                      {activeSpotlight.category}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                      {activeSpotlight.openStatus}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                    {activeSpotlight.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-medium">
                    Led by: <span className="text-white font-bold">{activeSpotlight.leadResearcher}</span>
                  </p>
                </div>

                {/* Progress Bar & Stage */}
                <div className="space-y-2 p-4 rounded-xl bg-[#091535] border border-[#182c60]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-cyan-300 font-bold">{activeSpotlight.stage}</span>
                    <span className="text-cyan-400 font-extrabold text-sm">{activeSpotlight.progress}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-[#050b1d] overflow-hidden border border-[#1c356f]">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-cyan-200 shadow-[0_0_12px_#00d2ff]" 
                      style={{ width: `${activeSpotlight.progress}%` }}
                    />
                  </div>
                </div>

                {/* Required Equipment & Skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Required Equipment & Testbeds
                    </span>
                    <ul className="space-y-1 text-xs text-slate-200">
                      {activeSpotlight.requiredEquipment.map((eq, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Core Skills Under Deployment
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeSpotlight.requiredSkills.map((sk, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#0e1d44] text-cyan-300 border border-[#1e3e87]">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Location & Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[#162a5b]">
                  <p className="text-xs text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{activeSpotlight.location}</span>
                  </p>

                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => {
                        setSelectedProjectId('proj-01');
                        setCurrentView('project-workspace');
                      }}
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold shadow-[0_0_15px_rgba(0,180,255,0.4)] flex items-center gap-2"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Open Research Workspace</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* -------------------------------------------------- */}
        {/* 6. RESEARCH TIMELINE                               */}
        {/* -------------------------------------------------- */}
        <section id="research-timeline" className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-400">
                Scientific Lifecycle
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Research Progression & Verification Pipeline
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Every project transitions systematically through rigorous experimental verification stages.
            </p>
          </div>

          {/* Visual Interactive Timeline Grid */}
          <div className="p-6 rounded-3xl border border-[#192f68] bg-[#07112c] shadow-xl space-y-6">
            
            {/* Timeline Stepper Track */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-4 right-4 h-1 bg-[#122452] -translate-y-1/2 z-0" />
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 relative z-10">
                {timelineSteps.map((stepItem) => {
                  const isCurrent = activeTimelineStep === stepItem.step;
                  const isCompleted = stepItem.step < activeTimelineStep;
                  
                  return (
                    <div 
                      key={stepItem.step}
                      onClick={() => setActiveTimelineStep(stepItem.step)}
                      className={`p-3 rounded-2xl border cursor-pointer transition-all text-center flex flex-col items-center justify-between space-y-2 ${
                        isCurrent 
                          ? 'bg-[#0f245c] border-cyan-400 shadow-[0_0_20px_rgba(0,210,255,0.4)] ring-1 ring-cyan-400' 
                          : isCompleted
                            ? 'bg-[#081538] border-blue-500/40 text-slate-300'
                            : 'bg-[#060e22] border-[#152754] text-slate-500 hover:border-[#22448f]'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${
                        isCurrent
                          ? 'bg-cyan-400 text-black shadow-[0_0_10px_#00d2ff]'
                          : isCompleted
                            ? 'bg-blue-600 text-white'
                            : 'bg-[#101e42] text-slate-400'
                      }`}>
                        {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : stepItem.step}
                      </div>

                      <div>
                        <h4 className={`text-xs font-extrabold tracking-wide uppercase ${
                          isCurrent ? 'text-cyan-300' : 'text-slate-200'
                        }`}>
                          {stepItem.name}
                        </h4>
                      </div>

                      <span className="text-[10px] text-slate-400 line-clamp-2">
                        {stepItem.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active Step Description Card */}
            <div className="p-4 rounded-2xl bg-[#091535] border border-[#1d3877] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-extrabold text-sm shrink-0">
                  {activeTimelineStep}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Stage {activeTimelineStep}: {timelineSteps[activeTimelineStep - 1].name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">Active Inspection</span>
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {timelineSteps[activeTimelineStep - 1].detail}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button 
                  onClick={() => setActiveTimelineStep(prev => prev > 1 ? prev - 1 : 6)}
                  className="px-3 py-1.5 rounded-lg bg-[#070e24] border border-[#1a3168] text-xs font-bold text-slate-300 hover:text-white"
                >
                  Previous
                </button>
                <button 
                  onClick={() => setActiveTimelineStep(prev => prev < 6 ? prev + 1 : 1)}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white shadow-md"
                >
                  Next Stage
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* -------------------------------------------------- */}
        {/* 7. RESEARCH INFRASTRUCTURE                         */}
        {/* -------------------------------------------------- */}
        <section id="research-infrastructure" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-400">
                  Shared Hardware Assets
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                Research Infrastructure & Advanced Laboratories
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                High-end test equipment, cleanroom facilities, and computational clusters accessible for research projects.
              </p>
            </div>

            <button 
              onClick={() => setCurrentView('infrastructure')}
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <span>View All 80+ Facilities</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Cards for Laboratories, Equipment, Testing facilities, Universities, Research centers, Factories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {infrastructureItems.map(item => (
              <div 
                key={item.id}
                className="rounded-2xl border border-[#172c62] bg-[#07112c] overflow-hidden hover:border-cyan-500/50 transition-all group flex flex-col justify-between"
              >
                {/* Visual Image */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07112c] via-transparent to-black/30" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-[#070e24]/90 backdrop-blur-md text-[10px] font-bold text-cyan-300 border border-cyan-500/40">
                      {item.type}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300 bg-[#070e24]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#1b346d]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.specs}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#132654] flex items-center justify-between">
                    <span className="text-[11px] text-emerald-400 font-semibold">
                      {item.capacity}
                    </span>
                    <button 
                      onClick={() => setCurrentView('infrastructure')}
                      className="px-3 py-1 rounded-lg bg-[#0e1f48] hover:bg-blue-600 text-white text-[11px] font-bold border border-[#1c3d82] transition-colors"
                    >
                      Book Slot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------- */}
        {/* 8. RESEARCH ACTIVITY                               */}
        {/* -------------------------------------------------- */}
        <section id="research-activity" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-400">
                  Live Dispatch Feed
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                Research Activity & Verification Stream
              </h2>
            </div>

            {/* Activity Tabs */}
            <div className="flex items-center gap-1.5 bg-[#08132e] p-1 rounded-xl border border-[#172b5c]">
              {[
                { id: 'all', label: 'All Activity' },
                { id: 'experiments', label: 'Experiments' },
                { id: 'publications', label: 'Publications' },
                { id: 'contributors', label: 'Contributors' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActivityTab(tab.id as any)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activityTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dark Activity Panel */}
          <div className="rounded-3xl border border-[#172c60] bg-[#07112c] p-6 shadow-xl space-y-4">
            {filteredActivity.map((act) => (
              <div 
                key={act.id}
                className="p-4 rounded-2xl bg-[#091535] border border-[#172d62] hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5">
                  {/* Small Visual Project Thumbnail */}
                  <img 
                    src={act.thumbnail} 
                    alt={act.project}
                    className="w-12 h-12 rounded-xl object-cover border border-[#1b346e] shrink-0"
                  />

                  {/* Small Avatar & Title */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${act.badgeColor}`}>
                        {act.badge}
                      </span>
                      <span className="text-[11px] text-cyan-400 font-semibold">{act.project}</span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {act.title}
                    </h4>

                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <img 
                        src={act.avatar} 
                        alt={act.author} 
                        className="w-4 h-4 rounded-full object-cover"
                      />
                      <span>{act.author}</span>
                      <span>•</span>
                      <span>{act.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button 
                    onClick={() => {
                      setSelectedProjectId('proj-01');
                      setCurrentView('project-workspace');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#0e214d] hover:bg-blue-600 text-xs font-bold text-white border border-[#204494] transition-all flex items-center gap-1"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
