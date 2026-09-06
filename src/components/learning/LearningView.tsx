import React, { useState } from 'react';
import { 
  GraduationCap, 
  Clock, 
  Star, 
  CheckCircle2, 
  Search, 
  BookOpen, 
  Award, 
  ChevronRight, 
  Play, 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  Layers, 
  Cpu, 
  Bookmark 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const LearningView: React.FC = () => {
  const { currentUser } = useApp();

  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const categories = [
    'All',
    'AI & ML',
    'Electronics',
    'Robotics',
    'Programming',
    'Design & CAD',
    'Research',
    'Business',
    'Soft Skills',
    'Tools & Software'
  ];

  const featuredCourses = [
    {
      id: 'c-1',
      title: 'AI for Real-World Projects',
      instructor: 'Dr. Ananya Rao',
      level: 'Beginner',
      rating: 4.8,
      reviews: '1.2K',
      modules: 6,
      duration: '4 hrs',
      image: '/assets/images/card_aiml_developer.jpg',
      tag: 'AI/ML'
    },
    {
      id: 'c-2',
      title: 'PCB Design and Prototyping',
      instructor: 'Vikram Patel',
      level: 'Intermediate',
      rating: 4.7,
      reviews: '850',
      modules: 8,
      duration: '6 hrs',
      image: '/assets/images/card_pcb_design.jpg',
      tag: 'Hardware'
    },
    {
      id: 'c-3',
      title: 'Robotics and Embedded Systems',
      instructor: 'Rohit Mehta',
      level: 'Intermediate',
      rating: 4.9,
      reviews: '2.1K',
      modules: 10,
      duration: '8 hrs',
      image: '/assets/images/card_robotics_intern.jpg',
      tag: 'Robotics'
    },
    {
      id: 'c-4',
      title: '3D Modeling & Printing',
      instructor: 'Sneha Iyer',
      level: 'Beginner',
      rating: 4.6,
      reviews: '640',
      modules: 5,
      duration: '4 hrs',
      image: '/assets/images/card_3d_printing.jpg',
      tag: 'CAD'
    },
    {
      id: 'c-5',
      title: 'Quantum Computing Fundamentals',
      instructor: 'Dr. Srinivas Rao',
      level: 'Advanced',
      rating: 4.9,
      reviews: '980',
      modules: 12,
      duration: '10 hrs',
      image: '/assets/images/card_quantum_computing.jpg',
      tag: 'Quantum'
    },
    {
      id: 'c-6',
      title: 'Autonomous EV Powertrain & BMS',
      instructor: 'Kavita Menon',
      level: 'Intermediate',
      rating: 4.8,
      reviews: '1.4K',
      modules: 9,
      duration: '7 hrs',
      image: '/assets/images/card_autonomous_ev.jpg',
      tag: 'EV Mobility'
    },
    {
      id: 'c-7',
      title: 'Drone Aerodynamics & PX4 Autopilots',
      instructor: 'Arjun Nair',
      level: 'Intermediate',
      rating: 4.9,
      reviews: '1.8K',
      modules: 11,
      duration: '9 hrs',
      image: '/assets/images/card_drone_swarm.jpg',
      tag: 'Aerospace'
    },
    {
      id: 'c-8',
      title: 'Semiconductor Fab & Cleanroom Protocols',
      instructor: 'Prof. Ramesh Kulkarni',
      level: 'Advanced',
      rating: 4.7,
      reviews: '720',
      modules: 8,
      duration: '6 hrs',
      image: '/assets/images/card_cleanroom_nanofab.jpg',
      tag: 'Hardware'
    },
    {
      id: 'c-9',
      title: 'Precision AgriTech IoT & LoRa Arrays',
      instructor: 'Dr. Gurpreet Singh',
      level: 'Intermediate',
      rating: 4.8,
      reviews: '890',
      modules: 7,
      duration: '5.5 hrs',
      image: '/assets/images/card_smart_agriculture.jpg',
      tag: 'AgriTech'
    },
    {
      id: 'c-10',
      title: 'Wearable Biosensors & Epidermal Circuits',
      instructor: 'Priya Sharma',
      level: 'Advanced',
      rating: 4.9,
      reviews: '1.1K',
      modules: 9,
      duration: '7 hrs',
      image: '/assets/images/card_wearable_biosensor.jpg',
      tag: 'Biomedical'
    },
    {
      id: 'c-11',
      title: 'Hybrid Wind-Solar Power Inverters',
      instructor: 'Vikram Patel',
      level: 'Intermediate',
      rating: 4.7,
      reviews: '620',
      modules: 6,
      duration: '5 hrs',
      image: '/assets/images/card_wind_solar_hybrid.jpg',
      tag: 'CleanTech'
    },
    {
      id: 'c-12',
      title: 'Nanomaterials for Flexible Electronics',
      instructor: 'Dr. Ramesh Kulkarni',
      level: 'Advanced',
      rating: 4.9,
      reviews: '1.3K',
      modules: 10,
      duration: '8.5 hrs',
      image: '/assets/images/card_nanomaterials_research.jpg',
      tag: 'Materials'
    }
  ];

  const learningPaths = [
    { title: 'Become a Robotics Developer', courses: 6, projects: 3, image: '/assets/images/tech_robotics_06.jpg' },
    { title: 'AI for Innovators', courses: 5, projects: 2, image: '/assets/images/tech_ai_07.jpg' },
    { title: 'Hardware Product Design', courses: 7, projects: 3, image: '/assets/images/tech_circuit_06.jpg' },
    { title: 'Research & Publication', courses: 4, projects: 1, image: '/assets/images/tech_lab_05.jpg' },
    { title: 'Build a Deep-Tech Startup', courses: 5, projects: 2, image: '/assets/images/tech_startup_03.jpg' },
    { title: 'CleanTech & EV Mobility', courses: 6, projects: 3, image: '/assets/images/tech_energy_06.jpg' }
  ];

  const upcomingSessions = [
    { title: 'Build Your First Drone', date: 'Apr 10', time: '5:00 PM', instructor: 'Dr. Vikram Sethi', avatar: '/assets/images/tech_robotics_01.jpg' },
    { title: 'Intro to Computer Vision', date: 'Apr 12', time: '6:30 PM', instructor: 'Priya Sharma', avatar: '/assets/images/tech_ai_03.jpg' },
    { title: 'From Prototype to Startup', date: 'Apr 15', time: '4:00 PM', instructor: 'Vikram Patel', avatar: '/assets/images/tech_startup_02.jpg' },
    { title: 'Cleanroom Fabrication 101', date: 'Apr 18', time: '3:00 PM', instructor: 'Prof. Ramesh Kulkarni', avatar: '/assets/images/tech_circuit_03.jpg' }
  ];

  const popularSkills = [
    'Python', 'Machine Learning', 'PCB Design', 'Embedded Systems', 
    'Computer Vision', 'ROS', '3D Printing', 'CAD', 'Data Analysis', 'Technical Writing'
  ];

  return (
    <div id="learning-view" className="font-sans text-slate-100 select-none">
      {/* Hero Banner Image */}
      <div className="relative overflow-hidden">
        <img
          src="/assets/images/hero_learning_banner.jpg"
          alt="Learning Hero"
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b19]/95 via-[#060b19]/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8">
          <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1">LEARN</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight uppercase">
            LEARN TODAY.<br />
            <span className="text-[#00d2ff]">BUILD TOMORROW.</span>
          </h1>
          <p className="text-xs text-slate-300 mt-2 max-w-md">
            Skill up for real-world projects. Learn from domain experts and create measurable impact.
          </p>
        </div>
      </div>
      <div className="p-6 space-y-6 max-w-[1440px] mx-auto">
      {/* Hero Card */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#071333] via-[#091b49] to-[#040e29] border border-[#193570] p-6 sm:p-8 shadow-[0_4px_35px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight">
              Learn Today Build Tomorrow
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Skill up for real-world projects. Learn from domain experts. Apply knowledge directly to open challenges. Create measurable impact.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] hover:from-[#134bc2] hover:to-[#00a8d1] text-white text-xs font-bold shadow-[0_0_15px_rgba(0,200,248,0.35)] transition-all flex items-center gap-1.5">
                <span>Explore Courses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button className="px-4 py-2 rounded-xl bg-[#09173d] border border-[#1b3a7a] hover:border-cyan-500 text-slate-200 text-xs font-bold transition-all">
                My Learning Path
              </button>
            </div>

            {/* Stats Row matching Image 5 */}
            <div className="flex flex-wrap items-center gap-6 pt-3">
              <div>
                <span className="text-lg font-extrabold text-white">2.5K+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Courses</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">500+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Expert Instructors</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">50K+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Learners</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-[#00d2ff]">100+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Hands-on Projects</span>
              </div>
            </div>
          </div>

          {/* Right Card with Graphic */}
          <div className="bg-[#0b1b42]/90 border border-[#21478f] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5 backdrop-blur-md shadow-lg">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-[11px] font-extrabold tracking-wider text-cyan-300 uppercase">
                Learn • Build • Apply • Grow
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Real-world curriculums linked to hardware labs.
              </p>
              <div className="pt-2">
                <span className="text-[10px] text-blue-300 font-semibold bg-[#0e214d] px-2.5 py-1 rounded-full border border-[#1b3a7a]">
                  Certified by CraftHub & Institutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Pills matching Image 5 */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-[#142854] pb-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-[#175beb] to-[#00a8e8] text-white shadow-sm font-bold'
                : 'bg-[#071333] text-slate-400 hover:text-white border border-[#162c5e]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 2-Column Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols): Featured Courses, Learning Paths, Popular Skills */}
        <div className="lg:col-span-2 space-y-6">
          {/* Featured Courses Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white tracking-tight">Featured Courses</h2>
            <span className="text-xs text-[#00d2ff] hover:underline cursor-pointer font-semibold">View All Courses ›</span>
          </div>

          {/* 4 Featured Courses Cards matching Image 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredCourses.map((course) => (
              <div 
                key={course.id}
                className="bg-[#071333] border border-[#162c5e] hover:border-[#00c8f8] rounded-2xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,180,255,0.15)]"
              >
                <div className="relative h-36 w-full overflow-hidden bg-[#0a163a]">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071333] via-transparent to-black/30" />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-950/80 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                    {course.tag}
                  </span>
                  <button className="absolute top-2.5 right-2.5 p-1 rounded-full bg-black/40 text-slate-300 hover:text-white backdrop-blur-sm">
                    <Bookmark className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 font-medium">
                      By {course.instructor} • <span className="text-cyan-300 font-semibold">{course.level}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="font-bold text-white">{course.rating}</span>
                      <span className="text-slate-500">({course.reviews})</span>
                    </div>
                    <span className="text-slate-400">{course.modules} modules • {course.duration}</span>
                  </div>

                  <div className="pt-2 border-t border-[#13254e] flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Free Access</span>
                    <button 
                      onClick={() => alert(`Enrolled in ${course.title}!`)}
                      className="px-3.5 py-1 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] text-white text-xs font-bold shadow-sm hover:scale-105 transition-all"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Paths matching Image 5 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white tracking-tight">Structured Learning Paths</h2>
              <span className="text-xs text-[#00d2ff] hover:underline cursor-pointer font-semibold">Explore Paths ›</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {learningPaths.map((lp) => (
                <div key={lp.title} className="p-3 rounded-xl bg-[#09173d] border border-[#18346e] hover:border-cyan-500/50 cursor-pointer transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <img 
                      src={lp.image} 
                      alt={lp.title} 
                      className="w-11 h-11 rounded-lg object-cover border border-[#1d3c7d] group-hover:scale-105 transition-transform shrink-0" 
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">{lp.title}</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">{lp.courses} courses • {lp.projects} projects</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          {/* Popular Skills matching Image 5 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">Popular Skills in Demand</h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {popularSkills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 rounded-xl bg-[#09173d] border border-[#18346e] text-xs font-medium text-slate-200 hover:text-cyan-300 hover:border-cyan-500 cursor-pointer transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): My Learning, Live Sessions, Quote */}
        <div className="space-y-6">
          {/* My Learning Gauge matching Image 5 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-4">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">My Learning</span>

            <div className="flex items-center justify-center py-2">
              <div className="relative w-28 h-28 flex items-center justify-center rounded-full border-4 border-[#0c1e4c] border-t-cyan-400 border-r-blue-500 border-b-cyan-400">
                <div className="text-center">
                  <span className="text-2xl font-extrabold text-white">62%</span>
                  <span className="text-[10px] text-slate-400 block font-medium">8 of 13 done</span>
                </div>
              </div>
            </div>

            {/* Continue Learning list */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Continue Learning</span>
              {[
                { title: 'PCB Design Basics', pct: 35 },
                { title: 'Python for AI', pct: 62 },
                { title: 'Robotics Fundamentals', pct: 28 },
              ].map((item) => (
                <div key={item.title} className="p-3 rounded-xl bg-[#09173d] border border-[#18346e] space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{item.title}</span>
                    <span className="font-bold text-cyan-300">{item.pct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#0e1d44] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Live Sessions matching Image 5 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Upcoming Live Sessions</span>
              </span>
            </div>

            <div className="space-y-2.5">
              {upcomingSessions.map((s) => (
                <div key={s.title} className="p-3 rounded-xl bg-[#09173d] border border-[#18346e] flex items-center justify-between text-xs group">
                  <div className="flex items-center gap-2.5">
                    <img 
                      src={s.avatar} 
                      alt={s.instructor} 
                      className="w-8 h-8 rounded-full object-cover border border-cyan-500/40 shrink-0" 
                    />
                    <div>
                      <div className="font-bold text-white group-hover:text-cyan-300 transition-colors">{s.title}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{s.instructor} • {s.time}</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#0e214d] text-cyan-300 font-bold text-[10px] border border-[#1b3a7a] shrink-0">
                    {s.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Card matching Image 5 */}
          <div className="p-5 rounded-2xl bg-gradient-to-tr from-[#0b2158] to-[#071438] border border-[#1d438d] text-center space-y-2 shadow-lg">
            <p className="text-xs text-slate-200 font-semibold italic leading-relaxed">
              "A more skilled generation builds a brighter tomorrow."
            </p>
            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">
              — CraftHub Learning Network
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
