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
  ArrowRight 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CommunityFeed: React.FC = () => {
  const { currentUser, setCurrentView } = useApp();

  const [activeTab, setActiveTab] = useState('All Posts');
  const [postText, setPostText] = useState('');
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [postLikesCount, setPostLikesCount] = useState<Record<string, number>>({
    'p-1': 38,
    'p-2': 52,
    'p-3': 84,
    'p-4': 29,
    'p-5': 67,
    'p-6': 91
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
      time: '2 hours ago',
      content: 'Autonomous Rover - Field Testing Complete! Successfully tested the navigation system in rough terrain with obstacle avoidance. Next step: optimizing battery telemetry and solar trickle-charging efficiency.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      tags: ['Robotics', 'Embedded', 'FieldTesting', 'Innovation'],
      comments: 14,
      shares: 6
    },
    {
      id: 'p-2',
      author: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      role: 'AI/ML Researcher • IIT Delhi',
      tag: 'Research',
      time: '5 hours ago',
      content: 'New Research on Flexible Electronics for Wearable Healthcare: Our paper on piezoresistive graphene sensing layers just completed peer-review! Open-source dataset released for biomedical impedance detection.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      tags: ['Research', 'FlexibleElectronics', 'Healthcare', 'IoT'],
      comments: 9,
      shares: 8
    },
    {
      id: 'p-3',
      author: 'Aarav Singh',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      role: 'Hardware Maker • Pune',
      tag: 'Showcase',
      time: '1 day ago',
      content: '3D Printed Robotic Arm v2.0 - Completed assembly and kinematics calibration. Replaced metal servos with high-torque NEMA17 steppers and geared cycloidal drives. Open source STEP files available!',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      tags: ['3DPrinting', 'Robotics', 'OpenSource', 'Hardware'],
      comments: 22,
      shares: 19
    },
    {
      id: 'p-4',
      author: 'Rohit Mehta',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      role: 'Electronics Engineer • Bengaluru',
      tag: 'Discussion',
      time: '1 day ago',
      content: 'Best PCB Manufacturer in India for fast turnaround prototyping? Looking for 4-layer FR4 boards with impedance matching within 5 days. What are your recommended vendors in Bengaluru or Noida?',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80',
      tags: ['PCBDesign', 'Hardware', 'Manufacturing', 'Prototyping'],
      comments: 31,
      shares: 4
    },
    {
      id: 'p-5',
      author: 'Sneha Iyer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'Community Lead • STEM India',
      tag: 'Opportunity',
      time: '2 days ago',
      content: 'Volunteers Needed for Rural STEM Workshop - Join us to introduce hands-on electronics & robotics to 200+ high school students in rural Maharashtra. Mentors with Arduino / Tinkercad experience welcomed!',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      tags: ['STEM', 'Education', 'Volunteering', 'RuralInnovation'],
      comments: 18,
      shares: 15
    },
    {
      id: 'p-6',
      author: 'Karan Verma',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
      role: 'Organizer • Hardware Guild',
      tag: 'Event',
      time: '2 days ago',
      content: 'Delhi Hardware Meetup - March 22 at IIT Delhi Makerspace! Live demos of DIY drones, robotic arms, PCB reflow soldering demos, and startup pitch rounds. Free entry for all verified students & makers.',
      image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80',
      tags: ['DelhiMeetup', 'Hardware', 'Networking', 'Makerspace'],
      comments: 40,
      shares: 28
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

  return (
    <div id="community-view" className="p-6 space-y-6 max-w-[1440px] mx-auto font-sans text-slate-100 select-none">
      {/* Hero Banner matching Reference Image 4 */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#071333] via-[#091b49] to-[#040e29] border border-[#193570] p-6 sm:p-8 shadow-[0_4px_35px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Community
            </h1>
            <div className="text-sm text-cyan-300 font-bold tracking-wide uppercase">
              Ideas Become Real Together
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              A community of builders, researchers, innovators and problem solvers collaborating to turn concepts into real-world impact.
            </p>

            {/* Stats Row matching Image 4 */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div>
                <span className="text-lg font-extrabold text-white">12K</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Members</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">3.4K</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Projects</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">8.9K</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Discussions</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-[#00d2ff]">1.2K</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Events</span>
              </div>
            </div>
          </div>

          {/* Right Card with Maker Graphic */}
          <div className="bg-[#0b1b42]/90 border border-[#21478f] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5 backdrop-blur-md shadow-lg">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-[11px] font-extrabold tracking-wider text-cyan-300 uppercase">
                Build • Share • Learn • Grow
              </div>
              <p className="text-xs text-slate-300 font-medium">
                People • Projects • Possibilities
              </p>
              <div className="pt-2">
                <button
                  onClick={() => alert('New Discussion thread opened')}
                  className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] text-white text-xs font-bold shadow-[0_0_15px_rgba(0,200,248,0.35)] hover:scale-105 transition-all"
                >
                  Join the Discussion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Row + Create Post Button matching Image 4 */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#142854]">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {feedTabs.map((tab) => (
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

        <button 
          onClick={() => {
            const elem = document.getElementById('post-composer-input');
            elem?.focus();
          }}
          className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] text-white text-xs font-bold shadow-md flex items-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>+ Create Post</span>
        </button>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Post Composer + Posts (2 Cols) */}
        <div className="lg:col-span-2 space-y-5">
          {/* Post Composer matching Image 4 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-4 space-y-3 shadow-lg">
            <div className="flex items-center gap-3">
              <img 
                src={currentUser.avatar} 
                alt="Zaman" 
                className="w-10 h-10 rounded-full object-cover ring-2 ring-cyan-500/40 shrink-0" 
              />
              <input
                id="post-composer-input"
                type="text"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="What are you building, Zaman?"
                className="w-full bg-[#09173d] border border-[#18346e] rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-[#13254e]">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <button className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                  <ImageIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>Image</span>
                </button>
                <button className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                  <Video className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Video</span>
                </button>
                <button className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Document</span>
                </button>
                <button className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                  <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Project</span>
                </button>
                <button className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                  <BarChart2 className="w-3.5 h-3.5 text-rose-400" />
                  <span>Poll</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <select className="bg-[#09173d] border border-[#18346e] rounded-lg px-2 py-1 text-[11px] text-slate-300 focus:outline-none">
                  <option>Public 🌐</option>
                  <option>Collaborators Only</option>
                </select>
                <button 
                  onClick={() => {
                    if (postText) {
                      alert('Post published to CraftHub Community!');
                      setPostText('');
                    }
                  }}
                  className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] text-white text-xs font-bold shadow-sm"
                >
                  Post
                </button>
              </div>
            </div>
          </div>

          {/* Posts List matching Reference Image 4 */}
          <div className="space-y-4">
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="bg-[#071333] border border-[#162c5e] hover:border-[#21478f] rounded-2xl p-5 space-y-3.5 shadow-md transition-all"
              >
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={post.avatar} 
                      alt={post.author} 
                      className="w-10 h-10 rounded-full object-cover ring-1 ring-cyan-500/30" 
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{post.author}</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-950/80 text-cyan-300 border border-cyan-500/30">
                          {post.tag}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{post.role} • {post.time}</div>
                    </div>
                  </div>
                  <button className="text-slate-500 hover:text-slate-300 text-xs">•••</button>
                </div>

                {/* Content */}
                <p className="text-xs text-slate-200 leading-relaxed">
                  {post.content}
                </p>

                {/* Image */}
                {post.image && (
                  <div className="relative rounded-xl overflow-hidden h-56 sm:h-64 bg-[#0a1840] border border-[#193670]">
                    <img 
                      src={post.image} 
                      alt="Post visual" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                )}

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium text-cyan-400 hover:underline cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Bar */}
                <div className="pt-2 border-t border-[#13254e] flex items-center justify-between text-xs text-slate-400">
                  <button 
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-1.5 font-medium transition-colors ${
                      likedPosts[post.id] ? 'text-rose-400' : 'hover:text-white'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${likedPosts[post.id] ? 'fill-rose-400 text-rose-400' : ''}`} />
                    <span>{postLikesCount[post.id]} Likes</span>
                  </button>

                  <button className="flex items-center gap-1.5 hover:text-white font-medium transition-colors">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.comments} Comments</span>
                  </button>

                  <button className="flex items-center gap-1.5 hover:text-white font-medium transition-colors">
                    <Share2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.shares} Shares</span>
                  </button>

                  <button className="p-1 hover:text-cyan-300">
                    <Bookmark className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Trending Topics, Upcoming Events, People to Follow (1 Col) */}
        <div className="space-y-6">
          {/* Trending Topics matching Image 4 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>Trending Topics</span>
              </span>
            </div>

            <div className="space-y-2.5">
              {[
                { tag: 'AI in Hardware', posts: '1.4K posts' },
                { tag: 'Sustainable Tech', posts: '1.1K posts' },
                { tag: 'Robotics', posts: '980 posts' },
                { tag: 'Open Source', posts: '850 posts' },
                { tag: 'PCB Design', posts: '720 posts' },
                { tag: 'Climate Tech', posts: '640 posts' },
                { tag: '3D Printing', posts: '590 posts' },
                { tag: 'Rural Innovation', posts: '450 posts' },
              ].map((topic, i) => (
                <div key={topic.tag} className="flex items-center justify-between text-xs hover:bg-[#09173d] p-1.5 rounded-lg cursor-pointer transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-500">#{i + 1}</span>
                    <span className="font-semibold text-slate-200 hover:text-cyan-300">{topic.tag}</span>
                  </div>
                  <span className="text-[10px] text-slate-500">{topic.posts}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Community Events matching Image 4 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>Upcoming Community Events</span>
              </span>
              <span className="text-[10px] text-cyan-400 hover:underline cursor-pointer">View All</span>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Buildathon 2025', loc: 'IIT Delhi', date: 'Mar 15' },
                { title: 'Hardware Meetup', loc: 'New Delhi', date: 'Mar 22' },
                { title: 'AI for Social Good Workshop', loc: 'Bengaluru', date: 'Apr 05' },
                { title: 'Rural Innovation Summit', loc: 'Pune', date: 'Apr 12' },
              ].map((ev) => (
                <div key={ev.title} className="p-2.5 rounded-xl bg-[#09173d] border border-[#18346e] flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white">{ev.title}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{ev.loc}</div>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 rounded bg-[#0e214d] text-cyan-300 font-bold text-[10px] border border-[#1b3a7a]">
                      {ev.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* People to Follow matching Image 4 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3.5">
            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <UserPlus className="w-3.5 h-3.5 text-cyan-400" />
              <span>People to Follow</span>
            </span>

            <div className="space-y-3">
              {[
                { name: 'Dr. Ananya Rao', role: 'Senior AI Researcher', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80' },
                { name: 'Vikram Patel', role: 'Hardware & Drone Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
                { name: 'Meera Joshi', role: 'CleanTech Innovator', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
                { name: 'Arjun Nair', role: 'Embedded Systems Lead', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
              ].map((p) => (
                <div key={p.name} className="flex items-center justify-between p-2 rounded-xl bg-[#09173d] border border-[#18346e]">
                  <div className="flex items-center gap-2.5">
                    <img src={p.avatar} alt={p.name} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <div className="text-xs font-bold text-white">{p.name}</div>
                      <div className="text-[10px] text-slate-400">{p.role}</div>
                    </div>
                  </div>
                  <button className="px-2.5 py-1 rounded-lg bg-[#0e214d] text-cyan-300 hover:bg-blue-600 hover:text-white text-[10px] font-bold border border-[#1b3a7a] transition-colors">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Slogan Banner Card matching Image 4 */}
          <div className="p-5 rounded-2xl bg-gradient-to-tr from-[#0b2158] to-[#071438] border border-[#1d438d] text-center space-y-2 shadow-lg">
            <div className="text-xs font-extrabold text-cyan-300 tracking-wider uppercase">
              A Stronger Innovation Ecosystem Together
            </div>
            <p className="text-[11px] text-slate-300 font-medium">
              People • Projects • Possibilities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
