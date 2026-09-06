import React, { useState } from 'react';
import { 
  Heart, 
  MessageSquare, 
  Share2, 
  Bookmark, 
  Sparkles, 
  CheckCircle2, 
  Plus, 
  Users, 
  Send, 
  Image as ImageIcon, 
  Video, 
  FileText, 
  FolderGit2, 
  BarChart2, 
  Globe, 
  TrendingUp, 
  Calendar, 
  UserPlus, 
  MapPin, 
  Cpu, 
  ArrowRight,
  Play,
  Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CommunityFeed: React.FC = () => {
  const { currentUser } = useApp();

  const [activeTab, setActiveTab] = useState('All Posts');
  const [postText, setPostText] = useState('');
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Record<string, boolean>>({});
  const [followingUsers, setFollowingUsers] = useState<Record<string, boolean>>({});
  const [joinedEvents, setJoinedEvents] = useState<Record<string, boolean>>({});
  
  const [postLikesCount, setPostLikesCount] = useState<Record<string, number>>({
    'p-1': 124,
    'p-2': 98,
    'p-3': 210,
    'p-4': 87,
    'p-5': 64,
    'p-6': 112
  });

  const feedTabs = [
    'All Posts',
    'Project Updates',
    'Discussions',
    'Showcases',
    'Questions',
    'Collaboration',
    'Events',
    'Announcements'
  ];

  const posts = [
    {
      id: 'p-1',
      author: 'Zaman',
      avatar: currentUser.avatar,
      role: 'Project Lead • Hardware Systems',
      tag: 'Project Update',
      tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      time: '2 hours ago',
      title: 'Autonomous Rover – Sensor Integration Complete!',
      content: 'Completed LiDAR and IMU integration. The rover is now successfully mapping the terrain in real-time. Next step: field testing and obstacle avoidance calibration.',
      image: '/assets/images/card_robotics_intern.jpg',
      tags: ['Robotics', 'Embedded', 'ComputerVision', 'R&D'],
      comments: 18,
      shares: 12,
      isVideo: false
    },
    {
      id: 'p-2',
      author: 'Priya Sharma',
      avatar: '/assets/images/tech_ai_04.jpg',
      role: 'AI/ML Researcher • IIT Delhi',
      tag: 'Research',
      tagColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      time: '5 hours ago',
      title: 'PCB Prototype v2.0',
      content: 'New PCB design with improved power management and thermal efficiency. Testing in progress with high-speed serial links and noise filters.',
      image: '/assets/images/card_pcb_design.jpg',
      tags: ['PCB', 'Hardware', 'Electronics', 'Prototyping'],
      comments: 26,
      shares: 14,
      isVideo: true
    },
    {
      id: 'p-3',
      author: 'Aarav Singh',
      avatar: '/assets/images/tech_robotics_05.jpg',
      role: 'Hardware Maker • Pune',
      tag: 'Showcase',
      tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      time: '1 day ago',
      title: '3D Printed Robotic Arm',
      content: 'Designed and printed a 6-DOF robotic arm using PLA+. Open to collaboration for control system development and ROS2 kinematics integration.',
      image: '/assets/images/card_3d_printing.jpg',
      tags: ['3DPrinting', 'Robotics', 'Mechanical', 'OpenSource'],
      comments: 32,
      shares: 28,
      isVideo: true
    },
    {
      id: 'p-4',
      author: 'Rohit Mehta',
      avatar: '/assets/images/tech_circuit_04.jpg',
      role: 'Electronics Engineer • Bengaluru',
      tag: 'Discussion',
      tagColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
      time: '1 day ago',
      title: 'AI Model for Defect Detection',
      content: 'Trained a vision model to detect defects in PCB manufacturing. Achieved 96% accuracy across micro-solder bridges and misaligned SMT chips.',
      image: '/assets/images/card_aiml_developer.jpg',
      tags: ['AI', 'ComputerVision', 'Hardware', 'Quality'],
      comments: 14,
      shares: 9,
      isVideo: false
    },
    {
      id: 'p-5',
      author: 'Sneha Iyer',
      avatar: '/assets/images/tech_biotech_05.jpg',
      role: 'Community Lead • STEM India',
      tag: 'Opportunity',
      tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      time: '2 days ago',
      title: 'Research Paper Published!',
      content: 'Our paper on nanomaterials for flexible electronics is now published in Advanced Materials. Open dataset and schematics available for community research.',
      image: '/assets/images/card_nanomaterials_research.jpg',
      tags: ['Research', 'Nanotech', 'Materials', 'Sensors'],
      comments: 19,
      shares: 11,
      isVideo: false
    },
    {
      id: 'p-6',
      author: 'Karan Verma',
      avatar: '/assets/images/tech_manufacturing_06.jpg',
      role: 'Organizer • Hardware Guild',
      tag: 'Event',
      tagColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      time: '2 days ago',
      title: 'New Lab Setup at Delhi',
      content: 'Our electronics prototyping lab is now operational! Available for student projects, reflow soldering, FPGA testing, and startup research cohorts.',
      image: '/assets/images/card_manufacturing_intern.jpg',
      tags: ['Infrastructure', 'Makerspace', 'Electronics', 'Delhi'],
      comments: 45,
      shares: 23,
      isVideo: false
    },
    {
      id: 'p-7',
      author: 'Dr. Vikram Sethi',
      avatar: '/assets/images/tech_robotics_01.jpg',
      role: 'Professor of Aerospace • IIT Bombay',
      tag: 'Project Update',
      tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      time: '3 days ago',
      title: 'Autonomous Drone Swarm Field Demo',
      content: 'Demonstrated decentralized mesh networking across 8 autonomous carbon-fiber UAVs with real-time GPS-denied visual SLAM positioning.',
      image: '/assets/images/card_drone_swarm.jpg',
      tags: ['Drones', 'UAV', 'SwarmRobotics', 'MeshNetwork'],
      comments: 38,
      shares: 19,
      isVideo: true
    },
    {
      id: 'p-8',
      author: 'Ananya Deshmukh',
      avatar: '/assets/images/tech_circuit_01.jpg',
      role: 'EV Powertrain Lead • Pune',
      tag: 'Showcase',
      tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      time: '4 days ago',
      title: 'Open Source EV Chassis Prototype Complete',
      content: 'Finished assembling the drive-by-wire modular EV skateboard chassis. Active liquid-cooled battery thermal management passed 45°C stress testing.',
      image: '/assets/images/card_autonomous_ev.jpg',
      tags: ['EVMobility', 'Automotive', 'BMS', 'DriveByWire'],
      comments: 52,
      shares: 31,
      isVideo: false
    },
    {
      id: 'p-9',
      author: 'Rahul Subramanian',
      avatar: '/assets/images/tech_ai_03.jpg',
      role: 'Quantum Information Fellow • IISc',
      tag: 'Research',
      tagColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      time: '5 days ago',
      title: 'Quantum Key Distribution Milestone',
      content: 'Successfully executed entangled photon key exchange across a 12km free-space optical link in Bengaluru. Low bit-error rate verified.',
      image: '/assets/images/card_quantum_computing.jpg',
      tags: ['Quantum', 'Photonics', 'Cryptography', 'IISc'],
      comments: 29,
      shares: 16,
      isVideo: false
    },
    {
      id: 'p-10',
      author: 'Maya Kulkarni',
      avatar: '/assets/images/tech_biotech_01.jpg',
      role: 'AgriTech Fellow • ICAR',
      tag: 'Showcase',
      tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      time: '6 days ago',
      title: 'Vertical Hydroponic Sensor Array Tested',
      content: 'Automated 6-tier vertical farm monitoring nutrient conductivity, pH, and spectrally tuned LED grow lights. 35% reduction in power consumption achieved.',
      image: '/assets/images/card_smart_agriculture.jpg',
      tags: ['AgriTech', 'Hydroponics', 'IoT', 'Sustainability'],
      comments: 21,
      shares: 15,
      isVideo: false
    },
    {
      id: 'p-11',
      author: 'Prof. Srinivas Rao',
      avatar: '/assets/images/tech_manufacturing_04.jpg',
      role: 'Director • Semiconductor Nanofab Lab',
      tag: 'Project Update',
      tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      time: '1 week ago',
      title: 'First Tapeout: 28nm Open-Silicon Test Chip',
      content: 'Our university cleanroom cohort has successfully taped out a RISC-V cryptographic coprocessor with 100% DRC sign-off.',
      image: '/assets/images/card_cleanroom_nanofab.jpg',
      tags: ['Semiconductor', 'Tapeout', 'RISCV', 'Cleanroom'],
      comments: 64,
      shares: 42,
      isVideo: false
    },
    {
      id: 'p-12',
      author: 'Devendra Joshi',
      avatar: '/assets/images/tech_energy_01.jpg',
      role: 'Renewable Systems Engineer',
      tag: 'Discussion',
      tagColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
      time: '1 week ago',
      title: 'Offshore Wind-Solar Hybrid Grid Live',
      content: 'Telemetry data from our floating hybrid solar-wind platform is now publicly streamable. Open API documentation released for researchers.',
      image: '/assets/images/card_wind_solar_hybrid.jpg',
      tags: ['RenewableEnergy', 'CleanTech', 'Solar', 'WindPower'],
      comments: 34,
      shares: 20,
      isVideo: false
    }
  ];

  const handleLike = (id: string) => {
    setLikedPosts(prev => {
      const isLiked = !prev[id];
      setPostLikesCount(c => ({
        ...c,
        [id]: (c[id] || 0) + (isLiked ? 1 : -1)
      }));
      return { ...prev, [id]: isLiked };
    });
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleFollow = (name: string) => {
    setFollowingUsers(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const toggleEventJoin = (eventName: string) => {
    setJoinedEvents(prev => ({ ...prev, [eventName]: !prev[eventName] }));
  };

  const filteredPosts = posts.filter(post => {
    if (activeTab === 'All Posts') return true;
    return post.tag.toLowerCase().includes(activeTab.toLowerCase());
  });

  const trendingTopics = [
    { rank: 1, name: 'AI in Hardware', count: '342 posts' },
    { rank: 2, name: 'PCB Design', count: '276 posts' },
    { rank: 3, name: 'Robotics', count: '198 posts' },
    { rank: 4, name: '3D Printing', count: '165 posts' },
    { rank: 5, name: 'Sustainable Energy', count: '142 posts' },
    { rank: 6, name: 'Open Source Hardware', count: '128 posts' },
    { rank: 7, name: 'Climate Tech', count: '115 posts' },
    { rank: 8, name: 'Rural Innovation', count: '98 posts' }
  ];

  const upcomingEvents = [
    { month: 'MAR', day: '15', title: 'Buildathon 2025', location: 'Online', desc: 'Hardware & AI hackathon' },
    { month: 'MAR', day: '22', title: 'AI for Hardware Workshop', location: 'IIT Delhi (Hybrid)', desc: 'Edge AI inference' },
    { month: 'APR', day: '05', title: 'Open Source Hardware Meet', location: 'Bengaluru', desc: 'Showcases & networking' }
  ];

  const peopleToFollow = [
    { name: 'Dr. Ananya Rao', role: 'Researcher | Nano-tech', avatar: '/assets/images/tech_biotech_06.jpg' },
    { name: 'Vikram Patel', role: 'Founder | GreenTech', avatar: '/assets/images/tech_energy_04.jpg' },
    { name: 'Meera Joshi', role: 'Hardware Engineer', avatar: '/assets/images/tech_circuit_05.jpg' },
    { name: 'Arjun Nair', role: 'AI/ML Researcher', avatar: '/assets/images/tech_ai_06.jpg' }
  ];

  return (
    <div id="community-view" className="p-4 sm:p-6 space-y-5 max-w-[1600px] mx-auto font-sans text-slate-100 select-none">
      {/* 1. Hero Banner Matching Reference Image 2 & 3 */}
      <div className="relative rounded-2xl overflow-hidden border border-[#173066] shadow-[0_10px_35px_rgba(0,0,0,0.6)] min-h-[200px]">
        {/* Background Banner Image */}
        <img
          src="/assets/images/hero_community_banner.jpg"
          alt="Community Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b1d] via-[#050b1d]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b1d] via-transparent to-transparent" />

        <div className="relative z-10 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-extrabold text-cyan-400 tracking-wider uppercase">
              COMMUNITY
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight uppercase">
              BUILD TOGETHER.<br />
              <span className="text-white">SHARE PROGRESS. INSPIRE OTHERS.</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              A community of builders, researchers, innovators and problem solvers.
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap items-center gap-5 pt-2 text-xs">
              <div>
                <span className="text-base font-extrabold text-white">12K</span>
                <span className="text-slate-400 ml-1.5 font-medium">Members</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-base font-extrabold text-white">3.4K</span>
                <span className="text-slate-400 ml-1.5 font-medium">Projects</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-base font-extrabold text-white">8.9K</span>
                <span className="text-slate-400 ml-1.5 font-medium">Discussions</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-base font-extrabold text-[#00d2ff]">1.2K</span>
                <span className="text-slate-400 ml-1.5 font-medium">Events</span>
              </div>
            </div>
          </div>

          {/* Right Floating Quotes */}
          <div className="hidden lg:flex flex-col items-end space-y-2 text-right">
            <span className="text-xs italic text-slate-300 font-medium">
              "Ideas grow faster together."
            </span>
            <span className="text-xs italic text-blue-400 font-semibold">
              "A community today, a better tomorrow."
            </span>
          </div>
        </div>
      </div>

      {/* 2. Filter Tabs + "+ Create Post" Button */}
      <div className="flex items-center justify-between gap-3 overflow-x-auto scrollbar-none py-1">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
          {feedTabs.map((tab) => (
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

        <button 
          onClick={() => {
            const input = document.getElementById('community-post-input');
            input?.focus();
          }}
          className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center gap-1.5 shrink-0 transition-all"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Create Post</span>
        </button>
      </div>

      {/* 3. Share Input Box Matching Reference Image 2 & 3 */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-[#070e24] border border-[#142857] space-y-3">
        <div className="flex items-center gap-3">
          <img 
            src={currentUser.avatar} 
            alt="Zaman" 
            className="w-8 h-8 rounded-full object-cover border border-[#1f3f80] shrink-0"
          />
          <input
            id="community-post-input"
            type="text"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="Share your progress, ideas, questions or achievements..."
            className="w-full bg-[#050a1d] text-xs text-white placeholder-slate-400 border border-[#162d63] rounded-xl px-3.5 py-2 focus:outline-none focus:border-cyan-500"
          />
          <select className="bg-[#050a1d] text-xs text-slate-300 border border-[#162d63] rounded-xl px-2 py-2 focus:outline-none shrink-0 cursor-pointer">
            <option>Public 🌐</option>
            <option>Collaborators Only</option>
          </select>
        </div>

        <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#12234d]">
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <button className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
              <ImageIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>Image</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
              <Video className="w-3.5 h-3.5 text-indigo-400" />
              <span>Video</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Document</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
              <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Project</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
              <BarChart2 className="w-3.5 h-3.5 text-rose-400" />
              <span>Poll</span>
            </button>
          </div>

          <button 
            onClick={() => {
              if (postText.trim()) {
                alert('Your update has been posted to the CraftHub Community!');
                setPostText('');
              }
            }}
            className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-sm transition-all"
          >
            Post
          </button>
        </div>
      </div>

      {/* 4. Main Grid: Posts (3 cols) + Right Sidebar (1 col) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* LEFT AREA: 3-Column Posts Grid (lg:col-span-9) */}
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredPosts.map((post) => {
              const isLiked = likedPosts[post.id];
              const isBookmarked = bookmarkedPosts[post.id];

              return (
                <div 
                  key={post.id}
                  className="rounded-xl overflow-hidden bg-[#070e24] border border-[#142857] hover:border-[#2350b0] hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all flex flex-col justify-between group"
                >
                  {/* Author Header */}
                  <div className="p-3.5 pb-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img 
                        src={post.avatar} 
                        alt={post.author} 
                        className="w-8 h-8 rounded-full object-cover border border-[#1f3f80] shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate">{post.author}</p>
                        <p className="text-[10px] text-slate-400 truncate">{post.time}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${post.tagColor}`}>
                        {post.tag}
                      </span>
                      <button className="text-slate-500 hover:text-slate-300 text-xs">•••</button>
                    </div>
                  </div>

                  {/* Post Title & Snippet */}
                  <div className="px-3.5 pb-2">
                    <h3 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed mt-1 line-clamp-2">
                      {post.content}
                    </p>
                  </div>

                  {/* Post Media Banner */}
                  <div className="relative h-40 w-full overflow-hidden bg-[#0a1533]">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070e24]/70 via-transparent to-transparent" />

                    {/* Play Button Overlay if Video */}
                    {post.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-black/60 border border-white/40 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                          <Play className="w-4 h-4 fill-white ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tags & Action Bar */}
                  <div className="p-3.5 pt-2.5 space-y-2.5">
                    {/* Hashtags */}
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-[9px] font-medium text-blue-400 hover:text-cyan-300 cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Likes, Comments, Shares */}
                    <div className="pt-2 border-t border-[#12234d] flex items-center justify-between text-xs text-slate-400">
                      <button 
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center gap-1 hover:text-rose-400 transition-colors ${
                          isLiked ? 'text-rose-400' : ''
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-400 text-rose-400' : ''}`} />
                        <span className="text-[11px]">{postLikesCount[post.id]}</span>
                      </button>

                      <div className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
                        <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-[11px]">{post.comments}</span>
                      </div>

                      <div className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
                        <Share2 className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-[11px]">{post.shares}</span>
                      </div>

                      <button 
                        onClick={() => toggleBookmark(post.id)}
                        className={`hover:text-cyan-300 transition-colors ${
                          isBookmarked ? 'text-cyan-400' : 'text-slate-500'
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Right Sidebar Matching Reference Image 2 & 3 (lg:col-span-3) */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* Trending Topics Card */}
          <div className="p-4 rounded-xl bg-[#070e24] border border-[#142857] space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-white tracking-wide">
                Trending Topics
              </h3>
              <button className="text-[10px] text-blue-400 hover:underline font-semibold">
                View All
              </button>
            </div>

            <div className="space-y-2">
              {trendingTopics.map((topic) => (
                <div key={topic.rank} className="flex items-center justify-between text-xs py-1 px-1.5 rounded-lg hover:bg-[#0b173d] transition-colors cursor-pointer">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-4 text-center text-slate-500 font-bold text-[11px]">
                      {topic.rank}
                    </span>
                    <span className="text-slate-200 font-medium truncate">
                      {topic.name}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 shrink-0">
                    {topic.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Community Events Card */}
          <div className="p-4 rounded-xl bg-[#070e24] border border-[#142857] space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-white tracking-wide">
                Upcoming Community Events
              </h3>
              <button className="text-[10px] text-blue-400 hover:underline font-semibold">
                View All
              </button>
            </div>

            <div className="space-y-2.5">
              {upcomingEvents.map((evt) => {
                const isJoined = joinedEvents[evt.title];

                return (
                  <div key={evt.title} className="flex items-center justify-between gap-2.5 p-2 rounded-lg bg-[#050b1d] border border-[#12234d]">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Date Badge */}
                      <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 flex flex-col items-center justify-center shrink-0">
                        <span className="text-[8px] font-extrabold text-cyan-400 uppercase tracking-wider">{evt.month}</span>
                        <span className="text-xs font-black text-white">{evt.day}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate">{evt.title}</p>
                        <p className="text-[10px] text-slate-400 truncate">{evt.location}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleEventJoin(evt.title)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all shrink-0 ${
                        isJoined 
                          ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                          : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
                      }`}
                    >
                      {isJoined ? 'Joined' : 'Join'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* People to Follow Card */}
          <div className="p-4 rounded-xl bg-[#070e24] border border-[#142857] space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-white tracking-wide">
                People to Follow
              </h3>
              <button className="text-[10px] text-blue-400 hover:underline font-semibold">
                View All
              </button>
            </div>

            <div className="space-y-2.5">
              {peopleToFollow.map((person) => {
                const isFollowing = followingUsers[person.name];

                return (
                  <div key={person.name} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img 
                        src={person.avatar} 
                        alt={person.name} 
                        className="w-8 h-8 rounded-full object-cover border border-[#1f3f80] shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate">{person.name}</p>
                        <p className="text-[10px] text-slate-400 truncate">{person.role}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleFollow(person.name)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all shrink-0 ${
                        isFollowing 
                          ? 'bg-[#0f214d] text-cyan-300 border border-cyan-500/40'
                          : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
                      }`}
                    >
                      {isFollowing ? 'Following' : 'Follow'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Slogan Banner Matching Reference Image 2 & 3 */}
          <div className="relative rounded-xl overflow-hidden border border-[#173066] p-4 text-center group cursor-pointer shadow-md">
            <img 
              src="/assets/images/card_quantum_computing.jpg" 
              alt="Ecosystem Banner" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050b1d] via-[#050b1d]/80 to-transparent" />
            
            <div className="relative z-10 space-y-1 py-3">
              <p className="text-xs font-serif italic text-cyan-300">
                Ideas. People. Possibilities.
              </p>
              <p className="text-[11px] text-slate-300 font-semibold flex items-center justify-center gap-1">
                <span>Join the movement</span>
                <ArrowRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
