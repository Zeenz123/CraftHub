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
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      tag: 'CAD'
    }
  ];

  const learningPaths = [
    { title: 'Become a Robotics Developer', courses: 6, projects: 3 },
    { title: 'AI for Innovators', courses: 5, projects: 2 },
    { title: 'Hardware Product Design', courses: 7, projects: 3 },
    { title: 'Research & Publication', courses: 4, projects: 1 },
    { title: 'Build a Startup', courses: 5, projects: 2 },
  ];

  const popularSkills = [
    'Python', 'Machine Learning', 'PCB Design', 'Embedded Systems', 
    'Computer Vision', 'ROS', '3D Printing', 'CAD', 'Data Analysis', 'Technical Writing'
  ];

  return (
    <div id="learning-view" className="p-6 space-y-6 max-w-[1440px] mx-auto font-sans text-slate-100 select-none">
      {/* Hero Banner matching Reference Image 5 */}
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
                <div key={lp.title} className="p-3.5 rounded-xl bg-[#09173d] border border-[#18346e] hover:border-cyan-500/50 cursor-pointer transition-all flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{lp.title}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{lp.courses} courses • {lp.projects} projects</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
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
              {[
                { title: 'Build Your First Drone', date: 'Apr 10', time: '5:00 PM' },
                { title: 'Intro to Computer Vision', date: 'Apr 12', time: '6:30 PM' },
                { title: 'From Prototype to Startup', date: 'Apr 15', time: '4:00 PM' },
              ].map((s) => (
                <div key={s.title} className="p-3 rounded-xl bg-[#09173d] border border-[#18346e] flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white">{s.title}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{s.time} • Live Workshop</div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#0e214d] text-cyan-300 font-bold text-[10px] border border-[#1b3a7a]">
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
  );
};
