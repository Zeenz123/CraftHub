import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  MapPin, 
  Users, 
  MessageSquare, 
  Heart, 
  SlidersHorizontal, 
  Grid, 
  List, 
  ChevronRight, 
  Cpu, 
  Bookmark, 
  Filter, 
  FolderGit2, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export interface ProjectCardItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  status: 'Active' | 'Seeking Contributors' | 'Open' | 'Research' | 'Completed';
  progress: number;
  tags: string[];
  contributors: number;
  comments: number;
  likes: number;
  location: string;
  isOwner?: boolean;
}

export const ProjectsView: React.FC = () => {
  const { 
    setSelectedProjectId, 
    setCurrentView, 
    setIsCreateProjectOpen,
    searchQuery,
    setSearchQuery,
    currentUser
  } = useApp();

  const [activeTab, setActiveTab] = useState('All Projects');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['proj-rover']);

  const allProjects: ProjectCardItem[] = [
    {
      id: 'proj-rover',
      title: 'Autonomous Rover',
      category: 'Robotics',
      description: 'An AI-powered rover for planetary exploration and autonomous terrain navigation with ROS2 and stereoscopic SLAM.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      status: 'Active',
      progress: 72,
      tags: ['Robotics', 'AI', 'Embedded', 'ROS'],
      contributors: 8,
      comments: 12,
      likes: 48,
      location: 'Delhi, India',
      isOwner: true
    },
    {
      id: 'proj-pcb',
      title: 'Low-Cost PCB Fabrication',
      category: 'Electronics',
      description: 'Open-source desktop machine for rapid PCB chemical milling & solder mask prototyping at fractional institutional cost.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      status: 'Seeking Contributors',
      progress: 45,
      tags: ['Electronics', 'OpenSource', 'Hardware'],
      contributors: 5,
      comments: 8,
      likes: 34,
      location: 'Bengaluru, India'
    },
    {
      id: 'proj-agri',
      title: 'Smart Agriculture System',
      category: 'Hardware',
      description: 'IoT-based soil moisture and nutrient tracking telemetry system for precision farming with solar trickle charge.',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80',
      status: 'Active',
      progress: 30,
      tags: ['IoT', 'Agriculture', 'Sensors', 'AI'],
      contributors: 6,
      comments: 15,
      likes: 52,
      location: 'Hyderabad, India'
    },
    {
      id: 'proj-hand',
      title: 'Bionic Hand Prototype',
      category: 'Hardware',
      description: '3D printed affordable multi-articulated prosthetic arm controlled via non-invasive EMG surface muscle signals.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      status: 'Seeking Contributors',
      progress: 60,
      tags: ['Prosthetics', '3DPrinting', 'Biomechanics'],
      contributors: 9,
      comments: 21,
      likes: 67,
      location: 'Pune, India'
    },
    {
      id: 'proj-energy',
      title: 'Hybrid Renewable Energy System',
      category: 'Manufacturing',
      description: 'Microgrid power management module combining dual solar PV tracking and vertical-axis wind turbine inputs.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
      status: 'Open',
      progress: 25,
      tags: ['CleanTech', 'Energy', 'Microgrid'],
      contributors: 4,
      comments: 6,
      likes: 29,
      location: 'Chennai, India'
    },
    {
      id: 'proj-nano',
      title: 'Nano-Material Battery Research',
      category: 'Research',
      description: 'Investigating high-conductivity graphene and silicon anode composites for next-gen solid-state battery cells.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      status: 'Research',
      progress: 40,
      tags: ['Materials', 'Nanotech', 'EnergyStorage'],
      contributors: 7,
      comments: 18,
      likes: 43,
      location: 'Mumbai, India'
    },
    {
      id: 'proj-drone',
      title: 'Disaster Relief Response Drone',
      category: 'Robotics',
      description: 'Autonomous aerial search-and-rescue quadcopter with dual thermal imaging camera and emergency payload drop latch.',
      image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80',
      status: 'Active',
      progress: 80,
      tags: ['Drones', 'ComputerVision', 'Emergency'],
      contributors: 11,
      comments: 32,
      likes: 88,
      location: 'Delhi, India'
    },
    {
      id: 'proj-edtech',
      title: 'AI Robotics Learning Platform',
      category: 'Software',
      description: 'Interactive web emulator and curriculum providing browser-based simulated hardware debugging in WebAssembly.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      status: 'Active',
      progress: 50,
      tags: ['EdTech', 'AI/ML', 'Software'],
      contributors: 5,
      comments: 9,
      likes: 37,
      location: 'Remote'
    }
  ];

  const toggleBookmark = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleOpenProject = (id: string) => {
    setSelectedProjectId(id);
    setCurrentView('project-workspace');
  };

  const getStatusBadge = (status: ProjectCardItem['status']) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40';
      case 'Seeking Contributors':
        return 'bg-amber-950/70 text-amber-300 border-amber-500/40';
      case 'Open':
        return 'bg-blue-950/70 text-cyan-300 border-cyan-500/40';
      case 'Research':
        return 'bg-indigo-950/70 text-indigo-300 border-indigo-500/40';
      case 'Completed':
        return 'bg-purple-950/70 text-purple-300 border-purple-500/40';
    }
  };

  // Filtering projects
  const filteredProjects = allProjects.filter((p) => {
    if (activeTab === 'My Projects' && !p.isOwner) return false;
    if (activeTab === 'Seeking Contributors' && p.status !== 'Seeking Contributors') return false;
    if (activeTab === 'Featured' && p.progress < 60) return false;
    if (activeTab === 'Trending' && p.likes < 45) return false;

    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    if (selectedStatus !== 'All' && p.status !== selectedStatus) return false;
    if (selectedLocation !== 'All' && !p.location.includes(selectedLocation)) return false;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchesTitle = p.title.toLowerCase().includes(q);
      const matchesDesc = p.description.toLowerCase().includes(q);
      const matchesTag = p.tags.some(t => t.toLowerCase().includes(q));
      if (!matchesTitle && !matchesDesc && !matchesTag) return false;
    }

    return true;
  });

  return (
    <div id="projects-view" className="p-6 space-y-6 max-w-[1440px] mx-auto font-sans text-slate-100 select-none">
      {/* Top Banner Matching Reference Screen 2 */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#071333] via-[#091b49] to-[#040e29] border border-[#193570] p-6 sm:p-8 shadow-[0_4px_35px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-blue-950/80 text-cyan-300 border border-cyan-500/40">
                Engineering & Hardware Workspace
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Projects
            </h1>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              Discover, manage, join, or launch engineering builds that create tangible real-world impact.
            </p>

            {/* Stats Row matching screenshot */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div>
                <span className="text-lg font-extrabold text-white">1,240</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Total Projects</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">8,500</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Contributors</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">320</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Organizations</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-[#00d2ff]">45</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Active Challenges</span>
              </div>
            </div>
          </div>

          {/* Right Card with Graphic & Call to Action */}
          <div className="bg-[#0b1b42]/90 border border-[#21478f] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5 backdrop-blur-md shadow-lg">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-[11px] font-extrabold tracking-wider text-cyan-300 uppercase">
                Ideas → Projects → Real Impact
              </div>
              <p className="text-xs text-slate-300 font-medium">
                From concept schematic to physical deployment.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setIsCreateProjectOpen(true)}
                  className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] hover:from-[#134bc2] hover:to-[#00a8d1] text-white text-xs font-bold shadow-[0_0_15px_rgba(0,200,248,0.35)] transition-all flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Create Project</span>
                </button>
                <button 
                  onClick={() => setActiveTab('My Projects')}
                  className="text-xs text-cyan-300 hover:underline font-semibold"
                >
                  My Workspace ({currentUser.stats.projects})
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body: Left Filters Sidebar + Right Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Filter Sidebar */}
        <div className="lg:col-span-1 space-y-5">
          {/* Project Category */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Project Category</span>
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="space-y-1.5 text-xs">
              {[
                { label: 'All', count: allProjects.length },
                { label: 'Robotics', count: 2 },
                { label: 'Hardware', count: 2 },
                { label: 'Electronics', count: 1 },
                { label: 'Research', count: 1 },
                { label: 'Manufacturing', count: 1 },
                { label: 'Software', count: 1 }
              ].map((c) => (
                <button
                  key={c.label}
                  onClick={() => setSelectedCategory(c.label)}
                  className={`w-full flex items-center justify-between px-2 py-1.5 rounded-lg transition-colors text-left ${
                    selectedCategory === c.label 
                      ? 'bg-[#153478] text-white font-bold' 
                      : 'text-slate-300 hover:text-white hover:bg-[#0b1b42]'
                  }`}
                >
                  <span>{c.label}</span>
                  <span className={`text-[11px] ${selectedCategory === c.label ? 'text-cyan-300' : 'text-slate-500'}`}>
                    {c.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Project Status */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-xl p-4 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">Project Status</span>
            <div className="space-y-1.5 text-xs">
              {[
                { label: 'All', count: allProjects.length },
                { label: 'Active', count: 4 },
                { label: 'Seeking Contributors', count: 2 },
                { label: 'Open', count: 1 },
                { label: 'Research', count: 1 }
              ].map((s) => (
                <button
                  key={s.label}
                  onClick={() => setSelectedStatus(s.label)}
                  className={`w-full flex items-center justify-between px-2 py-1.5 rounded-lg transition-colors text-left ${
                    selectedStatus === s.label 
                      ? 'bg-[#153478] text-white font-bold' 
                      : 'text-slate-300 hover:text-white hover:bg-[#0b1b42]'
                  }`}
                >
                  <span>{s.label}</span>
                  <span className={`text-[11px] ${selectedStatus === s.label ? 'text-cyan-300' : 'text-slate-500'}`}>
                    {s.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-xl p-4 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">Location Hub</span>
            <div className="space-y-1.5 text-xs">
              {[
                { label: 'All', count: allProjects.length },
                { label: 'Delhi', count: 2 },
                { label: 'Bengaluru', count: 1 },
                { label: 'Hyderabad', count: 1 },
                { label: 'Pune', count: 1 },
                { label: 'Remote', count: 1 }
              ].map((loc) => (
                <button
                  key={loc.label}
                  onClick={() => setSelectedLocation(loc.label)}
                  className={`w-full flex items-center justify-between px-2 py-1.5 rounded-lg transition-colors text-left ${
                    selectedLocation === loc.label 
                      ? 'bg-[#153478] text-white font-bold' 
                      : 'text-slate-300 hover:text-white hover:bg-[#0b1b42]'
                  }`}
                >
                  <span>{loc.label}</span>
                  <span className={`text-[11px] ${selectedLocation === loc.label ? 'text-cyan-300' : 'text-slate-500'}`}>
                    {loc.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Skill Tag Quick Filters */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-xl p-4 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">Featured Skills</span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['ROS', 'Python', 'C++', 'CAD', 'PCB Design', 'AI/ML', 'IoT', 'CleanTech'].map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSearchQuery(searchQuery === skill ? '' : skill)}
                  className={`px-2 py-0.5 rounded-md border text-[10px] transition-colors ${
                    searchQuery === skill
                      ? 'bg-cyan-500 text-white border-cyan-400 font-bold'
                      : 'bg-[#0e214d] border-[#1d3d7d] text-slate-300 hover:text-white'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Tabs + 4x2 Grid of Projects */}
        <div className="lg:col-span-3 space-y-4">
          {/* Tabs row matching screenshot */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-1 border-b border-[#142854]">
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {[
                'All Projects',
                'My Projects',
                'Featured',
                'Trending',
                'Seeking Contributors'
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === tab 
                      ? 'bg-gradient-to-r from-[#175beb] to-[#00a8e8] text-white shadow-sm' 
                      : 'text-slate-400 hover:text-white hover:bg-[#0b1b42]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* View Mode Icons */}
            <div className="flex items-center gap-1 bg-[#091535] border border-[#172e61] rounded-xl p-0.5">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-[#153478] text-cyan-300' : 'text-slate-400 hover:text-white'}`}
                title="Grid View"
              >
                <Grid className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-[#153478] text-cyan-300' : 'text-slate-400 hover:text-white'}`}
                title="List View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Project List or Empty State */}
          {filteredProjects.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-[#071333] border border-[#162c5e] space-y-3">
              <FolderGit2 className="w-10 h-10 text-slate-500 mx-auto" />
              <h3 className="text-sm font-bold text-white">No projects found</h3>
              <p className="text-xs text-slate-400">Try adjusting your filters or search query.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedStatus('All');
                  setSelectedLocation('All');
                  setActiveTab('All Projects');
                  setSearchQuery('');
                }}
                className="px-4 py-1.5 rounded-xl bg-[#0e214d] text-cyan-300 text-xs font-semibold hover:bg-[#153478]"
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleOpenProject(project.id)}
                  className="bg-[#071333] border border-[#162c5e] hover:border-[#00c8f8] rounded-2xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,180,255,0.15)]"
                >
                  {/* Thumbnail with Status Tag & Bookmark */}
                  <div className="relative h-36 w-full overflow-hidden bg-[#0a163a]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071333] via-transparent to-black/30" />
                    
                    {/* Status badge */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border backdrop-blur-md ${getStatusBadge(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Bookmark icon */}
                    <button 
                      onClick={(e) => toggleBookmark(e, project.id)}
                      className={`absolute top-2.5 right-2.5 p-1 rounded-full backdrop-blur-sm transition-colors ${
                        bookmarkedIds.includes(project.id)
                          ? 'bg-cyan-500 text-white'
                          : 'bg-black/40 text-slate-300 hover:text-white'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <h3 className="text-sm font-bold text-white group-hover:text-[#00d2ff] transition-colors leading-snug">
                          {project.title}
                        </h3>
                        {project.isOwner && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-900/60 text-cyan-300 border border-cyan-500/30">
                            Lead
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-slate-400 font-medium">Progress</span>
                        <span className="font-bold text-[#00d2ff]">{project.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#0e1d44] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" 
                          style={{ width: `${project.progress}%` }} 
                        />
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-[#0e214d] text-blue-300 border border-[#18366d]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer stats matching screenshot */}
                    <div className="pt-2 border-t border-[#13254e] flex items-center justify-between text-[10px] text-slate-400">
                      <div className="flex items-center gap-2.5">
                        <span className="flex items-center gap-1 hover:text-white">
                          <Users className="w-3 h-3 text-cyan-400" />
                          {project.contributors}
                        </span>
                        <span className="flex items-center gap-1 hover:text-white">
                          <MessageSquare className="w-3 h-3 text-slate-400" />
                          {project.comments}
                        </span>
                        <span className="flex items-center gap-1 hover:text-white">
                          <Heart className="w-3 h-3 text-rose-400" />
                          {project.likes}
                        </span>
                      </div>
                      <span className="truncate max-w-[80px] text-[9px] text-slate-500">{project.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-3">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleOpenProject(project.id)}
                  className="bg-[#071333] border border-[#162c5e] hover:border-[#00c8f8] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer transition-all hover:bg-[#09173d]"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#1a3875]"
                    />
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-white hover:text-cyan-300 truncate">{project.title}</h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getStatusBadge(project.status)}`}>
                          {project.status}
                        </span>
                        {project.isOwner && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-900/60 text-cyan-300">
                            You Lead
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 truncate max-w-xl">{project.description}</p>
                      <div className="flex items-center gap-3 text-[11px] text-slate-400">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-cyan-400" /> {project.location}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Users className="w-3 h-3 text-slate-400" /> {project.contributors} contributors</span>
                        <span>•</span>
                        <span className="text-cyan-300 font-bold">{project.progress}% completed</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                    <button 
                      onClick={(e) => toggleBookmark(e, project.id)}
                      className="p-2 rounded-xl bg-[#09173d] border border-[#18346e] text-slate-400 hover:text-white"
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarkedIds.includes(project.id) ? 'fill-cyan-400 text-cyan-400' : ''}`} />
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold flex items-center gap-1.5">
                      <span>Open Workspace</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Pagination matching Reference Screen 2 */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div>
              Showing <span className="text-white font-bold">{filteredProjects.length}</span> of <span className="text-white font-bold">1,240</span> projects
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3 py-1 rounded-lg bg-[#071333] border border-[#162c5e] text-slate-300 hover:text-white">
                Previous
              </button>
              <button className="px-2.5 py-1 rounded-lg bg-[#1554db] text-white font-bold">1</button>
              <button className="px-2.5 py-1 rounded-lg bg-[#071333] border border-[#162c5e] text-slate-300 hover:text-white">2</button>
              <button className="px-2.5 py-1 rounded-lg bg-[#071333] border border-[#162c5e] text-slate-300 hover:text-white">3</button>
              <span>...</span>
              <button className="px-2.5 py-1 rounded-lg bg-[#071333] border border-[#162c5e] text-slate-300 hover:text-white">10</button>
              <button className="px-3 py-1 rounded-lg bg-[#071333] border border-[#162c5e] text-slate-300 hover:text-white">
                Next
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span>Sort by:</span>
              <select className="bg-[#071333] border border-[#162c5e] rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none text-xs">
                <option>Most Relevant</option>
                <option>Recently Added</option>
                <option>Most Contributed</option>
                <option>Highest Progress</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
