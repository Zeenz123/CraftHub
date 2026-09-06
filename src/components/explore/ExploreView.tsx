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
      image: '/assets/images/card_robotics_intern.jpg',
      stats: '210 Projects • 14 Research Labs',
      badge: 'Top Active Sector'
    },
    {
      id: 'embedded',
      title: 'Embedded Systems & IoT',
      desc: 'Ultra low-power MCUs, RTOS firmware, LoRa telemetry, and edge inferencing.',
      image: '/assets/images/card_pcb_design.jpg',
      stats: '340 Projects • 45 Verified Mentors',
      badge: 'Fastest Growing'
    },
    {
      id: 'aerospace',
      title: 'Aerospace & UAVs',
      desc: 'Autonomous quadcopters, fixed-wing mapping drones, and cubesat subsystems.',
      image: '/assets/images/card_drone_swarm.jpg',
      stats: '180 Projects • 8 National Grants',
      badge: 'National Priority'
    },
    {
      id: 'cleantech',
      title: 'CleanTech & EV Mobility',
      desc: 'BMS algorithms, regenerative motor controllers, and solar microgrid sync.',
      image: '/assets/images/card_autonomous_ev.jpg',
      stats: '145 Projects • 12 Open Bounties',
      badge: 'Green Energy'
    },
    {
      id: 'bionics',
      title: 'Bionics & Medical Devices',
      desc: 'EMG prosthetic arms, non-invasive bio-sensors, and clinical diagnostic nodes.',
      image: '/assets/images/card_wearable_biosensor.jpg',
      stats: '95 Projects • 18 Journal Papers',
      badge: 'Healthcare Impact'
    },
    {
      id: 'semiconductors',
      title: 'Semiconductor & Nanofab',
      desc: 'High-speed 6-layer impedance matched layouts and open-source ASIC silicon.',
      image: '/assets/images/card_cleanroom_nanofab.jpg',
      stats: '115 Projects • 6 Cleanrooms',
      badge: 'Hardware Sovereignty'
    },
    {
      id: 'quantum',
      title: 'Quantum & Advanced Computing',
      desc: 'Superconducting qubits, cryogenic testbeds, quantum simulation, and optical links.',
      image: '/assets/images/card_quantum_computing.jpg',
      stats: '82 Projects • 7 Cryo-Labs',
      badge: 'Next-Gen Horizon'
    },
    {
      id: 'aiml',
      title: 'AI & Neural Hardware',
      desc: 'Edge TPU inference, neuromorphic silicon, computer vision pipelines, and robotics brains.',
      image: '/assets/images/card_ai_neural_processor.jpg',
      stats: '310 Projects • 22 HPC Nodes',
      badge: 'AI Hardware'
    }
  ];

  const trendingInnovations = [
    {
      id: 'trend-1',
      title: 'Autonomous Planetary Rover',
      domain: 'Robotics',
      author: 'Zaman (Lead) & IIT Delhi Lab',
      desc: 'Quad-wheel rocker-bogie exploration platform utilizing stereoscopic visual odometry, ROS2 Galactic, and obstacle clearance algorithms.',
      metrics: '72% Built • 8 Contributors • 48 Stars',
      image: '/assets/images/card_robotics_intern.jpg',
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
      image: '/assets/images/card_wearable_biosensor.jpg',
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
      image: '/assets/images/card_drone_swarm.jpg',
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
      image: '/assets/images/card_smart_agriculture.jpg',
      tags: ['LoRaWAN', 'Soil Sensors', 'Energy Harvesting'],
      projectId: 'proj-agri',
      badge: 'Verified Deploy'
    },
    {
      id: 'trend-5',
      title: 'Open Source CubeSat Subsystem',
      domain: 'Aerospace',
      author: 'OpenSpace India Consortium',
      desc: 'Radiation-tolerant solar power management unit with magnetic torquer attitude stabilization for low Earth orbit nanosatellites.',
      metrics: '65% Built • 14 Contributors • 120 Stars',
      image: '/assets/images/card_satellite_project.jpg',
      tags: ['Aerospace', 'Radiation Hardened', 'Embedded'],
      projectId: 'proj-satellite',
      badge: 'Space Tech'
    },
    {
      id: 'trend-6',
      title: 'Neural Edge AI Vision Accelerator',
      domain: 'Semiconductors',
      author: 'IIT Madras Microelectronics',
      desc: 'FPGA-accelerated quantization core for real-time robotic object classification under 2.5 watts power budget.',
      metrics: '90% Built • 12 Contributors • 94 Stars',
      image: '/assets/images/card_ai_neural_processor.jpg',
      tags: ['Verilog', 'FPGA', 'Quantization', 'Edge AI'],
      projectId: 'proj-chip',
      badge: 'Deep Tech'
    },
    {
      id: 'trend-7',
      title: 'Precision 6-DOF Cycloidal Robotic Arm',
      domain: 'Robotics',
      author: 'Aarav Singh & MakerGuild',
      desc: 'Backlash-free cycloidal gearboxes 3D printed with carbon-fiber reinforced nylon, driven by custom closed-loop FOC drivers.',
      metrics: '85% Built • 7 Contributors • 108 Stars',
      image: '/assets/images/card_3d_printing.jpg',
      tags: ['3D Printing', 'Robotics', 'FOC Motor', 'Kinematics'],
      projectId: 'proj-arm',
      badge: 'Maker Favorite'
    },
    {
      id: 'trend-8',
      title: 'Offshore Hybrid Solar & Wind Microgrid',
      domain: 'CleanTech',
      author: 'Green Earth Technology Lab',
      desc: 'Bifacial floating solar arrays synchronized with high-efficiency wind turbines and 250kWh battery energy storage system.',
      metrics: '100% Operational • 15 Contributors • 145 Stars',
      image: '/assets/images/card_wind_solar_hybrid.jpg',
      tags: ['CleanTech', 'Renewable', 'Grid Inverter', 'Telemetry'],
      projectId: 'proj-microgrid',
      badge: 'Sustainability'
    },
    {
      id: 'trend-9',
      title: 'Carbon Nanotube Flexible Transistors',
      domain: 'Semiconductors',
      author: 'Dr. Ramesh Kulkarni & NCL Pune',
      desc: 'High-carrier-mobility carbon nanotube network transistors printed directly onto biodegradable polymer film substrates.',
      metrics: '88% Built • 10 Contributors • 92 Stars',
      image: '/assets/images/card_nanomaterials_research.jpg',
      tags: ['Nanotech', 'Materials', 'Semiconductor', 'Flexible'],
      projectId: 'proj-nano',
      badge: 'Material Science'
    },
    {
      id: 'trend-10',
      title: 'Closed-Loop Circular Electronics Recycler',
      domain: 'CleanTech',
      author: 'SustainTech Labs & IIT Madras',
      desc: 'Pyrolytic eco-stripper extracting 99.2% pure copper, tin, and gold from legacy consumer electronic scrap without toxic acid leaching.',
      metrics: '95% Tested • 16 Contributors • 134 Stars',
      image: '/assets/images/card_sustainability_project.jpg',
      tags: ['CircularEconomy', 'Recycling', 'CleanTech', 'E-Waste'],
      projectId: 'proj-sustain',
      badge: 'Green Pioneer'
    },
    {
      id: 'trend-11',
      title: 'Autonomous Precision CNC Sheet Metal Cell',
      domain: 'Robotics',
      author: 'Vikram Joshi & Pune Industrial Guild',
      desc: 'Vision-guided robotic arm paired with a hydraulic folding brake for automated custom electronic enclosure fabrication with zero operator setups.',
      metrics: '78% Built • 13 Contributors • 89 Stars',
      image: '/assets/images/card_manufacturing_intern.jpg',
      tags: ['Robotics', 'Automation', 'CNC', 'Manufacturing'],
      projectId: 'proj-cnc',
      badge: 'Industrial Tech'
    },
    {
      id: 'trend-12',
      title: 'Cas13 Microfluidic Viral Diagnostic Cartridge',
      domain: 'Bionics',
      author: 'BioCraft Consortium & IISc Bangalore',
      desc: 'Point-of-care CRISPR-based RNA detection device reporting pathogenic viral markers via smartphone camera fluorescence readout in under 15 minutes.',
      metrics: '100% Verified • 18 Contributors • 162 Stars',
      image: '/assets/images/card_biotech_crispr.jpg',
      tags: ['CRISPR', 'Microfluidics', 'BioTech', 'Diagnostics'],
      projectId: 'proj-crispr',
      badge: 'Clinical Trial'
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
      avatar: '/assets/images/tech_biotech_01.jpg',
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
      avatar: '/assets/images/tech_circuit_01.jpg',
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
      avatar: '/assets/images/tech_biotech_02.jpg',
      contributions: '68 Verified Contributions',
      skills: ['EMG Signal Proc', '3D Prototyping', 'MATLAB', 'Actuators'],
      badge: 'Innovator'
    },
    {
      id: 'builder-5',
      name: 'Vikram Patel',
      handle: '@vikram_clean',
      role: 'Renewable Microgrid Architect',
      org: 'CleanTech Innovation Hub',
      level: 'Level 4 Mentor',
      avatar: '/assets/images/tech_energy_03.jpg',
      contributions: '110 Verified Contributions',
      skills: ['BMS', 'Solar PV', 'Inverters', 'CAN-FD'],
      badge: 'Clean Energy'
    },
    {
      id: 'builder-6',
      name: 'Sneha Kulkarni',
      handle: '@sneha_nano',
      role: 'Nanofabrication Specialist',
      org: 'IIT Bombay Cleanroom',
      level: 'Level 3 Verified',
      avatar: '/assets/images/tech_ai_04.jpg',
      contributions: '74 Verified Contributions',
      skills: ['Lithography', 'MEMS', 'Cleanroom', 'Thin Film'],
      badge: 'Semiconductor'
    },
    {
      id: 'builder-7',
      name: 'Arjun Nair',
      handle: '@arjun_uav',
      role: 'Autonomous Flight Dynamics',
      org: 'National Drone Range',
      level: 'Level 3 Verified',
      avatar: '/assets/images/tech_robotics_03.jpg',
      contributions: '88 Verified Contributions',
      skills: ['PX4', 'ROS2', 'Aerodynamics', 'Telemetry'],
      badge: 'UAV Architect'
    },
    {
      id: 'builder-8',
      name: 'Dr. Devendra Joshi',
      handle: '@dev_robotics',
      role: 'Advanced Kinematics Fellow',
      org: 'Makerspace Pune',
      level: 'Level 4 Mentor',
      avatar: '/assets/images/tech_manufacturing_05.jpg',
      contributions: '142 Verified Contributions',
      skills: ['FOC Drivers', 'SolidWorks', 'FEA', 'Industrial Arms'],
      badge: 'Master Builder'
    }
  ];

  const activeBounties = [
    {
      id: 'bounty-1',
      title: 'National Hardware Buildathon 2025',
      sponsor: 'DST & NITI Aayog',
      reward: '₹10 Lakhs Prize Pool',
      deadline: '18 Days Left',
      image: '/assets/images/tech_robotics_07.jpg',
      desc: 'Build physical open-source hardware prototypes for agriculture automation, disaster drones, or rural healthcare diagnostics.',
      tags: ['Hardware', 'Robotics', 'Healthcare', 'Gov of India']
    },
    {
      id: 'bounty-2',
      title: 'Low-Power LoRa Sensor Gateway Challenge',
      sponsor: 'AgriTech Consortium',
      reward: '₹2.5 Lakhs Bounty',
      deadline: '12 Days Left',
      image: '/assets/images/tech_energy_05.jpg',
      desc: 'Design an ultra low-power firmware module achieving sub-10 microamp sleep currents with solar energy harvesting circuitry.',
      tags: ['Embedded C', 'Energy Harvesting', 'LoRaWAN']
    },
    {
      id: 'bounty-3',
      title: 'Open Source Cycloidal Drive Verification',
      sponsor: 'RoboCraft India',
      reward: '₹1.5 Lakhs Bounty',
      deadline: '24 Days Left',
      image: '/assets/images/tech_circuit_07.jpg',
      desc: 'Perform dynamic torque, thermal dissipation, and back-drive tolerance characterization on high-ratio 3D printed cycloidal actuators.',
      tags: ['Mechanical', 'Testing', 'Robotics', 'FEA']
    },
    {
      id: 'bounty-4',
      title: 'High-Voltage Solid State BMS Design',
      sponsor: 'EV Mobility Mission',
      reward: '₹4.0 Lakhs Bounty',
      deadline: '30 Days Left',
      image: '/assets/images/card_autonomous_ev.jpg',
      desc: 'Develop an ISO 26262 compliant battery management firmware system with active cell balancing and CAN-FD communication.',
      tags: ['PCB Design', 'Power Electronics', 'BMS', 'Safety']
    },
    {
      id: 'bounty-5',
      title: 'Ultra-Low Power Edge Neural Engine',
      sponsor: 'Semiconductor India Mission',
      reward: '₹6.0 Lakhs Bounty',
      deadline: '20 Days Left',
      image: '/assets/images/card_ai_neural_processor.jpg',
      desc: 'Synthesize an INT4 quantization accelerator in Verilog for RISC-V with sub-500mW power consumption on TSMC 28nm PDK.',
      tags: ['Verilog', 'Edge AI', 'Semiconductor', 'RISCV']
    },
    {
      id: 'bounty-6',
      title: 'Autonomous Swarm Collision Avoidance',
      sponsor: 'Aerospace Defense Labs',
      reward: '₹8.0 Lakhs Bounty',
      deadline: '25 Days Left',
      image: '/assets/images/card_drone_swarm.jpg',
      desc: 'Develop a decentralized visual-inertial SLAM package enabling 5+ UAVs to cooperatively map indoor tunnels without GNSS.',
      tags: ['Drones', 'SLAM', 'UAV', 'ROS2']
    }
  ];

  const toggleLike = (id: string) => {
    setLikedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div id="explore-view" className="p-4 sm:p-6 space-y-6 max-w-[1600px] mx-auto font-sans text-slate-100 select-none">
      {/* 1. Full-Width Hero Banner Matching Reference Theme */}
      <div className="relative rounded-2xl overflow-hidden border border-[#173066] shadow-[0_10px_35px_rgba(0,0,0,0.6)] min-h-[220px]">
        <img
          src="/assets/images/hero_explore_banner.jpg"
          alt="Explore CraftHub Ecosystem"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b1d] via-[#050b1d]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b1d] via-transparent to-transparent" />

        <div className="relative z-10 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-extrabold text-cyan-400 tracking-wider uppercase flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>ECOSYSTEM DISCOVERY ENGINE</span>
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight uppercase">
              EXPLORE CRAFTHUB.<br />
              <span className="text-white">PEOPLE. PROJECTS. POSSIBILITIES.</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Immerse yourself in India’s decentralized deep-tech ecosystem. Discover trending hardware builds, connect with peer-reviewed researchers, tackle open bounties, and access nationwide laboratory infrastructure.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button 
                onClick={() => setCurrentView('projects')}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-[0_0_18px_rgba(37,99,235,0.5)] transition-all flex items-center gap-1.5"
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Browse All Projects</span>
              </button>
              <button 
                onClick={() => setCurrentView('research')}
                className="px-4 py-2 rounded-xl bg-[#091535]/80 hover:bg-[#112456] border border-[#1b3b7e] text-slate-200 text-xs font-bold backdrop-blur-sm transition-all flex items-center gap-1.5"
              >
                <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
                <span>Research Papers & Labs</span>
              </button>
              <button 
                onClick={() => setCurrentView('infrastructure')}
                className="px-4 py-2 rounded-xl bg-[#091535]/80 hover:bg-[#112456] border border-[#1b3b7e] text-slate-200 text-xs font-bold backdrop-blur-sm transition-all flex items-center gap-1.5"
              >
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Find Makerspaces</span>
              </button>
            </div>
          </div>

          {/* Right Floating Stats Card */}
          <div className="hidden lg:flex flex-col items-end space-y-2">
            <div className="p-4 rounded-xl bg-[#06122d]/85 border border-[#17336b] backdrop-blur-md space-y-3 w-64 shadow-xl">
              <div className="flex items-center justify-between text-xs border-b border-[#142857] pb-2">
                <span className="text-slate-400">Total Projects:</span>
                <span className="font-extrabold text-white">1,240+</span>
              </div>
              <div className="flex items-center justify-between text-xs border-b border-[#142857] pb-2">
                <span className="text-slate-400">Verified Builders:</span>
                <span className="font-extrabold text-cyan-300">8,500+</span>
              </div>
              <div className="flex items-center justify-between text-xs border-b border-[#142857] pb-2">
                <span className="text-slate-400">Labs & Makerspaces:</span>
                <span className="font-extrabold text-white">420+</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Active Bounties:</span>
                <span className="font-extrabold text-emerald-400">₹1.2 Cr+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Engineering Domain Pillars with Rich Images */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-wide flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Explore by Engineering Domain</span>
            </h2>
            <p className="text-xs text-slate-400">Focus on specialized hardware sectors with verified teams and testing equipment.</p>
          </div>
          <button 
            onClick={() => setCurrentView('projects')}
            className="text-xs text-blue-400 hover:underline font-semibold flex items-center gap-1"
          >
            <span>View All Sectors</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5">
          {domainPillars.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => {
                setSearchQuery(pillar.title.split(' ')[0]);
                setCurrentView('projects');
              }}
              className="rounded-xl overflow-hidden bg-[#070e24] border border-[#142857] hover:border-[#2350b0] hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)] cursor-pointer transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="relative h-28 w-full overflow-hidden bg-[#0a1533]">
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e24] via-transparent to-black/30" />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[9px] font-bold bg-blue-600/90 text-white shadow-sm">
                  {pillar.badge}
                </span>
              </div>

              <div className="p-3 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {pillar.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed mt-0.5">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#12234d] flex items-center justify-between text-[10px] text-cyan-400 font-semibold">
                  <span className="truncate">{pillar.stats}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Interactive Spotlight Hub */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#070e24] border border-[#142857] space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#12234d]">
          <div className="space-y-0.5">
            <h2 className="text-sm sm:text-base font-bold text-white tracking-wide flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Ecosystem Spotlight</span>
            </h2>
            <p className="text-xs text-slate-400">Curated breakthroughs, verified builders, live challenge bounties, and lab facilities.</p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1.5 bg-[#050a1d] border border-[#162d63] rounded-xl p-1 overflow-x-auto scrollbar-none">
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
                      ? 'bg-blue-600 text-white font-bold shadow-sm' 
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

        {/* Tab 1: Trending Builds - 8 High-Quality Cards */}
        {activeSpotlightTab === 'innovations' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {trendingInnovations.map((item) => {
              const isLiked = likedItems.includes(item.id);

              return (
                <div 
                  key={item.id}
                  className="rounded-xl overflow-hidden bg-[#050a1d] border border-[#142857] hover:border-[#2350b0] hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all flex flex-col justify-between group"
                >
                  <div className="relative h-36 w-full overflow-hidden bg-[#091535]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050a1d] via-transparent to-black/30" />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-600/90 text-white shadow-sm">
                      {item.badge}
                    </span>
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-black/60 text-cyan-300 backdrop-blur-sm border border-cyan-500/30">
                      {item.domain}
                    </span>
                  </div>

                  <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-slate-400 font-medium truncate mt-0.5">
                        {item.author}
                      </p>
                      <p className="text-[11px] text-slate-300 leading-relaxed mt-1 line-clamp-2">
                        {item.desc}
                      </p>

                      <div className="flex flex-wrap gap-1 mt-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-[9px] font-medium px-2 py-0.5 rounded bg-[#0b1b42] text-cyan-300 border border-[#163470]">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-[#12234d] flex items-center justify-between text-xs">
                      <span className="text-[10px] text-slate-400">{item.metrics}</span>
                      <div className="flex items-center gap-1.5">
                        <button 
                          onClick={() => toggleLike(item.id)}
                          className={`p-1 hover:text-rose-400 transition-colors ${
                            isLiked ? 'text-rose-400' : 'text-slate-500'
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-400' : ''}`} />
                        </button>
                        <button 
                          onClick={() => {
                            setSelectedProjectId('proj-rover');
                            setCurrentView('project-workspace');
                          }}
                          className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold shadow-sm"
                        >
                          Workspace
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Top Builders */}
        {activeSpotlightTab === 'builders' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {featuredBuilders.map((builder) => (
              <div 
                key={builder.id}
                className="p-4 rounded-xl bg-[#050a1d] border border-[#142857] hover:border-[#2350b0] transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={builder.avatar} 
                    alt={builder.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/40"
                  />
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold text-white truncate">{builder.name}</h3>
                    <p className="text-[10px] text-cyan-400 font-semibold">{builder.handle}</p>
                    <p className="text-[10px] text-slate-400 truncate">{builder.org}</p>
                  </div>
                </div>

                <div className="space-y-1 text-[11px]">
                  <p className="text-slate-300 font-medium">{builder.role}</p>
                  <p className="text-[10px] text-emerald-400 font-semibold">{builder.contributions}</p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {builder.skills.map((s) => (
                    <span key={s} className="text-[9px] px-2 py-0.5 rounded bg-[#081538] text-slate-300 border border-[#132757]">
                      {s}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setCurrentView('profile')}
                  className="w-full py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Open Bounties */}
        {activeSpotlightTab === 'bounties' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {activeBounties.map((bounty) => (
              <div 
                key={bounty.id}
                className="rounded-xl overflow-hidden bg-[#050a1d] border border-[#142857] hover:border-cyan-500/50 hover:shadow-[0_8px_25px_rgba(0,200,248,0.15)] transition-all flex flex-col justify-between group"
              >
                <div className="relative h-32 w-full overflow-hidden bg-[#091535]">
                  <img 
                    src={bounty.image} 
                    alt={bounty.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a1d] via-transparent to-black/30" />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-bold text-amber-300 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm border border-amber-500/40">
                    {bounty.deadline}
                  </span>
                  <span className="absolute top-2.5 right-2.5 text-xs font-extrabold text-[#00d2ff] bg-black/70 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-cyan-500/40">
                    {bounty.reward}
                  </span>
                </div>

                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">{bounty.title}</h3>
                    <p className="text-[10px] text-slate-400 font-medium">{bounty.sponsor}</p>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {bounty.desc}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {bounty.tags.map((t) => (
                        <span key={t} className="text-[9px] px-2 py-0.5 rounded bg-[#0b1b42] text-cyan-300 border border-[#163470]">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => alert(`Submitting interest for: ${bounty.title}`)}
                    className="w-full mt-2 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-sm hover:scale-[1.02] transition-all"
                  >
                    Apply for Bounty
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Facilities */}
        {activeSpotlightTab === 'labs' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { name: 'IIT Delhi Nano-Fab Cleanroom', type: 'Semiconductor Fab', location: 'New Delhi', img: '/assets/images/card_cleanroom_nanofab.jpg' },
              { name: 'IISc High-Voltage Robotics Lab', type: 'Robotics & Control', location: 'Bengaluru', img: '/assets/images/card_robotics_intern.jpg' },
              { name: 'MakerSpace Mumbai Heavy Fab', type: 'CNC & 3D Prototyping', location: 'Mumbai', img: '/assets/images/card_3d_printing.jpg' },
              { name: 'National Drone Testing Range', type: 'UAV Aerodynamics', location: 'Pune', img: '/assets/images/card_drone_swarm.jpg' },
              { name: 'Cryogenic Quantum Computing Center', type: 'Quantum Testbed', location: 'Bengaluru', img: '/assets/images/card_quantum_computing.jpg' },
              { name: 'Floating Marine Solar-Wind Microgrid', type: 'CleanTech Testbed', location: 'Chennai', img: '/assets/images/card_wind_solar_hybrid.jpg' },
              { name: 'BSL-3 Genomics & Molecular Core', type: 'Biotech & CRISPR', location: 'Hyderabad', img: '/assets/images/card_biotech_crispr.jpg' },
              { name: 'High-Performance Neuromorphic Grid', type: 'Edge AI Compute', location: 'Delhi NCR', img: '/assets/images/card_ai_neural_processor.jpg' }
            ].map((lab, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-[#050a1d] border border-[#142857] hover:border-[#2350b0] transition-all group">
                <div className="h-32 w-full overflow-hidden relative">
                  <img src={lab.img} alt={lab.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a1d] via-transparent to-transparent" />
                </div>
                <div className="p-3 space-y-1">
                  <h4 className="text-xs font-bold text-white truncate">{lab.name}</h4>
                  <p className="text-[10px] text-cyan-400 font-medium">{lab.type}</p>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{lab.location}</span>
                  </p>
                  <button 
                    onClick={() => setCurrentView('infrastructure')}
                    className="w-full mt-2 py-1 rounded bg-[#0b173d] hover:bg-[#10235e] text-cyan-300 text-[10px] font-bold border border-[#1a3a78]"
                  >
                    Book Slot
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
