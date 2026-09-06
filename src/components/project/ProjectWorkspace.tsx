import React, { useState } from 'react';
import { 
  FolderGit2, 
  CheckCircle2, 
  Clock, 
  Users, 
  FileText, 
  MessageSquare, 
  Cpu, 
  ShieldCheck, 
  Settings, 
  Plus, 
  Upload, 
  Share2, 
  Edit3, 
  ExternalLink,
  ChevronRight,
  Play,
  Bookmark,
  UserPlus,
  Compass,
  Layers,
  ArrowRight,
  TrendingUp,
  Download,
  Terminal,
  Activity,
  Calendar,
  MapPin,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProjectTask, ProjectFile } from '../../types';

export const ProjectWorkspace: React.FC = () => {
  const { 
    activeProject, 
    setCurrentView, 
    currentUser,
    projects, 
    setSelectedProjectId,
    contributions
  } = useApp();

  const [activeTab, setActiveTab] = useState<string>('Overview');
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState<boolean>(false);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [newTaskSkills, setNewTaskSkills] = useState<string>('');

  const tabs = [
    'Overview',
    'Tasks',
    'Contributors',
    'Files',
    'Discussions',
    'Documentation',
    'Requirements',
    'Resources',
    'Analytics',
    'Settings'
  ];

  const handleCreateTask = () => {
    if (!newTaskTitle) return;
    const newTask: ProjectTask = {
      id: `task-${Date.now()}`,
      title: newTaskTitle,
      description: 'Community-assigned task for the rover workspace.',
      category: 'Hardware / Firmware',
      status: 'Open',
      priority: 'Medium',
      rewardTier: 'Tier 2',
      skillsRequired: newTaskSkills ? newTaskSkills.split(',').map(s => s.trim()) : ['Embedded C', 'ROS'],
      dueDate: '2026-11-15'
    };
    activeProject.tasks.unshift(newTask);
    activeProject.openTasksCount += 1;
    setNewTaskTitle('');
    setNewTaskSkills('');
    setIsAddTaskModalOpen(false);
  };

  const collaborators = [
    { name: 'Priya Sharma', role: 'Lead - AI/ML Engineer', avatar: '/assets/images/tech_ai_03.jpg' },
    { name: 'Arjun Mehta', role: 'Core - Embedded Systems', avatar: '/assets/images/tech_robotics_02.jpg' },
    { name: 'Riya Verma', role: 'Core - Mechanical Design', avatar: '/assets/images/tech_manufacturing_04.jpg' },
    { name: 'Karan Singh', role: 'Member - Computer Vision', avatar: '/assets/images/tech_circuit_01.jpg' },
    { name: 'Ananya Rao', role: 'Member - Research & Testing', avatar: '/assets/images/tech_biotech_02.jpg' },
  ];

  const galleryImages = [
    { title: 'Rover Chassis CAD', src: '/assets/images/card_robotics_intern.jpg' },
    { title: 'PCB Power Board', src: '/assets/images/card_pcb_design.jpg' },
    { title: 'Mars Yard Terrain Test', src: '/assets/images/tech_robotics_03.jpg' },
    { title: 'Robotic Arm End-Effector', src: '/assets/images/card_3d_printing.jpg' },
    { title: 'Stereo Vision Rig', src: '/assets/images/card_drone_swarm.jpg' },
    { title: 'Telemetry Dashboard', src: '/assets/images/card_ai_neural_processor.jpg' }
  ];

  return (
    <div id="project-workspace" className="p-6 space-y-6 max-w-[1440px] mx-auto font-sans text-slate-100 select-none">
      {/* Breadcrumbs and Action Bar matching Reference Image 3 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-400 font-medium">
          <button onClick={() => setCurrentView('projects')} className="hover:text-cyan-300">Projects</button>
          <span>›</span>
          <span className="text-slate-300">Robotics</span>
          <span>›</span>
          <span className="text-white font-bold">{activeProject.title || 'Autonomous Rover'}</span>
          <span>›</span>
          <span className="text-[#00d2ff] font-semibold">Workspace</span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => alert('Share link copied to clipboard!')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#081330] border border-[#1a3473] text-slate-300 hover:text-white hover:border-[#2b54b5] transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
          <button 
            onClick={() => alert('Workspace settings opened')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#081330] border border-[#1a3473] text-slate-300 hover:text-white hover:border-[#2b54b5] transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Project</span>
          </button>
          <button 
            onClick={() => alert('Invitation modal opened')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] text-white font-bold shadow-[0_0_12px_rgba(0,200,248,0.3)] transition-all"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Invite</span>
          </button>
        </div>
      </div>

      {/* Header Banner matching Reference Image 3 */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#06102b] via-[#091b49] to-[#040e29] border border-[#193570] shadow-[0_4px_35px_rgba(0,0,0,0.6)]">
        <div className="relative h-48 sm:h-56 w-full overflow-hidden">
          <img 
            src="/assets/images/hero_dashboard_banner.jpg" 
            alt="Autonomous Rover Banner"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06102b] via-[#06102b]/60 to-transparent" />
          
          {/* Content inside the Banner */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 backdrop-blur-md">
                  Active
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-950/80 text-cyan-300 border border-cyan-500/50 backdrop-blur-md">
                  Physical Project
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Autonomous Rover
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                An AI-powered rover for planetary exploration and research.
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {['Robotics', 'AI', 'Embedded Systems', 'Computer Vision', 'Mechanical Engineering'].map((t) => (
                  <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#0a1840]/90 text-blue-200 border border-[#1b3a7a] backdrop-blur-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right side of Banner: Slogan & Tricolor */}
            <div className="hidden lg:flex flex-col items-end gap-2 shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 overflow-hidden">
                  {collaborators.map((c, i) => (
                    <img key={i} src={c.avatar} alt={c.name} className="inline-block h-6 w-6 rounded-full ring-2 ring-[#06102b]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">8 Contributors</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-slate-300">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-cyan-400" /> Delhi, India</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-slate-400" /> Started Mar 10, 2025</span>
              </div>
              <div className="p-2 rounded-xl bg-[#091535]/80 border border-[#1d3d7d] flex items-center gap-2">
                <span className="text-base">🇮🇳</span>
                <div className="text-right">
                  <div className="text-[9px] font-extrabold text-cyan-300 tracking-wider">BUILD EXPLORE DISCOVER</div>
                  <div className="text-[9px] text-slate-300 font-medium">Exploring Beyond Boundaries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs Strip matching Reference Image 3 */}
      <div className="flex items-center gap-1 overflow-x-auto border-b border-[#142854] pb-2 scrollbar-none text-xs font-semibold">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === tab
                ? 'bg-gradient-to-r from-[#175beb] to-[#00a8e8] text-white shadow-sm font-bold'
                : 'text-slate-400 hover:text-white hover:bg-[#0b1b42]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Overview Tab Content (matches Image 3 exactly) */}
      {activeTab === 'Overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Overview Box */}
            <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-white tracking-tight">Project Overview</h2>
                <span className="text-[11px] text-cyan-400 font-medium cursor-pointer hover:underline">Read Full Spec ›</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                The Autonomous Rover project aims to design and fabricate a high-mobility unmanned ground vehicle capable of traversing unstructured, rocky off-road planetary simulations. It features stereoscopic visual SLAM for real-time localization, LiDAR depth mapping, sample collection robotic arm mechanisms, and fault-tolerant solar-assisted power distribution.
              </p>

              {/* 4 Overview Spec Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-[#09173d] border border-[#18346e]">
                  <span className="text-[10px] text-slate-400 font-medium block">Project Type</span>
                  <span className="text-xs font-bold text-white mt-0.5 block">Hardware + Software</span>
                </div>
                <div className="p-3 rounded-xl bg-[#09173d] border border-[#18346e]">
                  <span className="text-[10px] text-slate-400 font-medium block">Target Use</span>
                  <span className="text-xs font-bold text-white mt-0.5 block">Research & Exploration</span>
                </div>
                <div className="p-3 rounded-xl bg-[#09173d] border border-[#18346e]">
                  <span className="text-[10px] text-slate-400 font-medium block">Current Phase</span>
                  <span className="text-xs font-bold text-cyan-300 mt-0.5 block">Prototype Testing</span>
                </div>
                <div className="p-3 rounded-xl bg-[#09173d] border border-[#18346e]">
                  <span className="text-[10px] text-slate-400 font-medium block">Expected Completion</span>
                  <span className="text-xs font-bold text-white mt-0.5 block">Dec 2025</span>
                </div>
              </div>

              {/* Video Preview Card */}
              <div className="relative rounded-xl overflow-hidden bg-[#0a163a] border border-[#1b3878] group cursor-pointer h-48 sm:h-56">
                <img 
                  src="/assets/images/card_autonomous_ev.jpg" 
                  alt="Video thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#175beb] to-[#00c8f8] flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,200,248,0.5)] group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-bold">Project Field Test & Demonstration Video</span>
                  <span className="px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono">02:15</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-white tracking-tight">Recent Activity</h2>
                <span className="text-[11px] text-[#00d2ff] font-medium cursor-pointer hover:underline">View All ›</span>
              </div>

              <div className="space-y-3">
                {[
                  { user: 'Priya Sharma', action: 'uploaded', file: 'rover_navigation_v2.pdf', time: '2 hours ago', icon: FileText },
                  { user: 'Arjun Mehta', action: 'completed task', file: 'Sensor Integration', time: '5 hours ago', icon: CheckCircle2 },
                  { user: 'Riya Verma', action: 'commented', file: '"Great progress on the mobility module!"', time: '8 hours ago', icon: MessageSquare },
                  { user: 'Karan Singh', action: 'updated project timeline', file: 'Phase 3 Milestones', time: '12 hours ago', icon: Clock },
                ].map((act, idx) => {
                  const Icon = act.icon;
                  return (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#09173d] border border-[#18346e] text-xs">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#0e2252] text-cyan-400 shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="font-bold text-white">{act.user}</span>{' '}
                          <span className="text-slate-400">{act.action}</span>{' '}
                          <span className="font-semibold text-cyan-300">{act.file}</span>
                        </div>
                      </div>
                      <span className="text-[11px] text-slate-500 shrink-0">{act.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Technologies */}
            <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-6 space-y-4">
              <h2 className="text-base font-bold text-white tracking-tight">Key Technologies</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'ROS', desc: 'Robotics Operating System', tag: 'Framework' },
                  { name: 'Python', desc: 'AI / ML Pipelines & OpenCV', tag: 'Language' },
                  { name: 'C++', desc: 'Embedded Real-Time Firmware', tag: 'Language' },
                  { name: 'OpenCV', desc: 'Computer Vision & Depth Sensing', tag: 'Library' },
                  { name: 'Arduino', desc: 'Motor Driver & Microcontrollers', tag: 'Hardware' },
                  { name: 'SolidWorks', desc: 'Chassis & Arm Mechanical CAD', tag: 'CAD' },
                ].map((tech) => (
                  <div key={tech.name} className="p-3 rounded-xl bg-[#09173d] border border-[#18346e] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs text-white">{tech.name}</div>
                      <div className="text-[10px] text-slate-400 truncate mt-0.5">{tech.desc}</div>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#0e214d] text-cyan-300 font-semibold border border-[#1a3875]">
                      {tech.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Gallery */}
            <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-white tracking-tight">Project Gallery</h2>
                <span className="text-[11px] text-[#00d2ff] font-medium cursor-pointer hover:underline">+8 More ›</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {galleryImages.map((img, idx) => (
                  <div key={idx} className="group relative rounded-xl overflow-hidden h-28 bg-[#0a1840] border border-[#1a3473]">
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[10px] font-semibold text-white leading-tight truncate">{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (1 Col) */}
          <div className="space-y-6">
            {/* Project Owner: Zaman */}
            <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Project Owner</span>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#09173d] border border-[#18346e]">
                <img 
                  src={currentUser.avatar} 
                  alt="Zaman" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-cyan-400/50 shrink-0" 
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-white truncate">{currentUser.name}</h3>
                  <p className="text-[11px] text-cyan-400 truncate">Builder | Innovator</p>
                  <p className="text-[10px] text-slate-400 truncate">IIT Delhi • Level 3 Verified</p>
                </div>
              </div>
              <button 
                onClick={() => setCurrentView('profile')}
                className="w-full py-2 rounded-xl bg-[#0a1840] border border-[#1a3473] hover:border-cyan-500/50 text-xs font-bold text-cyan-300 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>View Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Collaborators (8) */}
            <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Collaborators (8)</span>
                <span className="text-[11px] text-[#00d2ff] hover:underline cursor-pointer font-semibold">+ Invite</span>
              </div>
              <div className="space-y-2.5">
                {collaborators.map((c, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-[#09173d] border border-[#18346e]">
                    <div className="flex items-center gap-2.5">
                      <img src={c.avatar} alt={c.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <div className="text-xs font-bold text-white">{c.name}</div>
                        <div className="text-[10px] text-slate-400">{c.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full text-center text-xs text-[#00d2ff] font-semibold pt-1 hover:underline">
                +3 More Collaborators ›
              </button>
            </div>

            {/* Progress: 72% On Track */}
            <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Progress</span>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  On Track
                </span>
              </div>

              {/* Radial Gauge Representation */}
              <div className="flex items-center justify-center py-2">
                <div className="relative w-28 h-28 flex items-center justify-center rounded-full border-4 border-[#0c1e4c] border-t-cyan-400 border-r-blue-500 border-b-cyan-400">
                  <div className="text-center">
                    <span className="text-2xl font-extrabold text-white">72%</span>
                    <span className="text-[10px] text-slate-400 block font-medium">Completed</span>
                  </div>
                </div>
              </div>

              {/* Milestone Breakdown */}
              <div className="space-y-2 text-xs">
                {[
                  { name: 'Design', pct: 100 },
                  { name: 'Hardware', pct: 80 },
                  { name: 'Software', pct: 60 },
                  { name: 'Testing', pct: 40 },
                  { name: 'Documentation', pct: 30 }
                ].map((m) => (
                  <div key={m.name} className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400 font-medium">{m.name}</span>
                      <span className="font-bold text-white">{m.pct}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#0e1d44] rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${m.pct === 100 ? 'bg-emerald-400' : 'bg-gradient-to-r from-blue-500 to-cyan-400'}`} 
                        style={{ width: `${m.pct}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-[#09173d] border border-[#18346e] text-xs space-y-1">
                <span className="text-[10px] text-slate-400 font-medium">Next Milestone</span>
                <div className="font-bold text-white">Field Testing Phase</div>
                <div className="text-[10px] text-cyan-400">Due in 45 days • <span className="hover:underline cursor-pointer">View Details ›</span></div>
              </div>
            </div>

            {/* Quick Actions matching Image 3 */}
            <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Quick Actions</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button 
                  onClick={() => setIsAddTaskModalOpen(true)}
                  className="p-2.5 rounded-xl bg-[#09173d] border border-[#18346e] hover:border-cyan-500/50 text-slate-200 hover:text-white font-medium text-left"
                >
                  + Add Task
                </button>
                <button 
                  onClick={() => setCurrentView('submit-contribution')}
                  className="p-2.5 rounded-xl bg-[#09173d] border border-[#18346e] hover:border-cyan-500/50 text-slate-200 hover:text-white font-medium text-left"
                >
                  ↑ Upload File
                </button>
                <button 
                  onClick={() => setActiveTab('Discussions')}
                  className="p-2.5 rounded-xl bg-[#09173d] border border-[#18346e] hover:border-cyan-500/50 text-slate-200 hover:text-white font-medium text-left"
                >
                  💬 Create Discussion
                </button>
                <button 
                  onClick={() => alert('Progress update form')}
                  className="p-2.5 rounded-xl bg-[#09173d] border border-[#18346e] hover:border-cyan-500/50 text-slate-200 hover:text-white font-medium text-left"
                >
                  📊 Update Progress
                </button>
                <button 
                  onClick={() => alert('Resource request opened')}
                  className="p-2.5 rounded-xl bg-[#09173d] border border-[#18346e] hover:border-cyan-500/50 text-slate-200 hover:text-white font-medium text-left"
                >
                  ⚙️ Request Resource
                </button>
                <button 
                  onClick={() => alert('Generating PDF Workspace Report...')}
                  className="p-2.5 rounded-xl bg-[#09173d] border border-[#18346e] hover:border-cyan-500/50 text-slate-200 hover:text-white font-medium text-left"
                >
                  📑 Generate Report
                </button>
              </div>
            </div>

            {/* Promo Card: "From Ideas to Impact" */}
            <div className="p-4 rounded-2xl bg-gradient-to-tr from-[#0d2258] to-[#0a1738] border border-[#1d4490] text-center space-y-1.5 shadow-lg">
              <div className="text-xs font-extrabold text-cyan-300 tracking-wider uppercase">From Ideas to Impact</div>
              <p className="text-[11px] text-slate-300">CraftHub Collaborative Technology Network</p>
            </div>
          </div>
        </div>
      )}

      {/* Tasks Tab */}
      {activeTab === 'Tasks' && (
        <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white">Project Work Breakdown & Tasks</h2>
            <button 
              onClick={() => setIsAddTaskModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] text-white text-xs font-bold shadow-md"
            >
              + Create Task
            </button>
          </div>
          <div className="space-y-3">
            {activeProject.tasks.map((task) => (
              <div key={task.id} className="p-4 rounded-xl bg-[#09173d] border border-[#18346e] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">{task.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{task.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#0e214d] text-cyan-300 font-semibold">{task.category}</span>
                    <span className="text-[10px] text-slate-500">Due: {task.dueDate}</span>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-blue-950 text-cyan-300 font-bold border border-blue-800">
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Files Tab */}
      {activeTab === 'Files' && (
        <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white">Hardware Schematics, Firmware & CAD Files</h2>
            <button 
              onClick={() => setCurrentView('submit-contribution')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] text-white text-xs font-bold shadow-md"
            >
              + Upload File
            </button>
          </div>
          <div className="space-y-2">
            {activeProject.files.map((file) => (
              <div key={file.id} className="p-3 rounded-xl bg-[#09173d] border border-[#18346e] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <div>
                    <span className="text-xs font-bold text-white">{file.name}</span>
                    <span className="text-[10px] text-slate-400 ml-2">({file.size}) • by {file.uploadedBy}</span>
                  </div>
                </div>
                <button 
                  onClick={() => alert(`Downloading ${file.name}`)}
                  className="px-3 py-1 rounded-lg bg-[#0e2252] text-cyan-300 text-xs font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Discussions Tab */}
      {activeTab === 'Discussions' && (
        <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-6 space-y-4">
          <h2 className="text-base font-bold text-white">Technical Discussion Threads</h2>
          <div className="p-4 rounded-xl bg-[#09173d] border border-[#18346e] space-y-2">
            <div className="flex justify-between text-xs text-slate-400">
              <span className="font-bold text-white">Priya Sharma: Should we switch from I2C to SPI for turbidity probe?</span>
              <span>Yesterday</span>
            </div>
            <p className="text-xs text-slate-300">
              The cable run from the probe enclosure to the main MCU is ~1.5 meters. Over I2C at 100kHz, we are seeing occasional capacitance spikes.
            </p>
            <div className="text-[11px] text-cyan-400 font-semibold pt-1">3 replies from Zaman & Rohan Patel</div>
          </div>
        </div>
      )}

      {/* Other tabs fallback */}
      {['Contributors', 'Documentation', 'Requirements', 'Resources', 'Analytics', 'Settings'].includes(activeTab) && (
        <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-6 space-y-4 text-center py-12">
          <h3 className="text-base font-bold text-white">{activeTab} Workspace Module</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Configured and synchronizing with the CraftHub project repository for Autonomous Rover.
          </p>
        </div>
      )}

      {/* Quick Add Task Modal */}
      {isAddTaskModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-[#08122c] border border-[#1a3473] rounded-2xl p-6 space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-white">Create New Workspace Task</h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Task Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Optimize FreeRTOS queue buffer" 
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="w-full bg-[#09173d] border border-[#18346e] rounded-xl p-2.5 text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Required Skills (comma separated)</label>
                <input 
                  type="text" 
                  placeholder="e.g. C++, ROS, OpenCV" 
                  value={newTaskSkills}
                  onChange={(e) => setNewTaskSkills(e.target.value)}
                  className="w-full bg-[#09173d] border border-[#18346e] rounded-xl p-2.5 text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button 
                onClick={() => setIsAddTaskModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button 
                onClick={handleCreateTask}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
