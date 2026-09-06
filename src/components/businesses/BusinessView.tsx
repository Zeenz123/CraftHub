import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  MapPin, 
  Briefcase, 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  ExternalLink,
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
  Award,
  Sparkles,
  Users,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MOCK_BUSINESSES } from '../../mockData';

export const BusinessView: React.FC = () => {
  const { setCurrentView } = useApp();
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const filterPills = [
    'All', 
    'Industry Leaders', 
    'Innovative SMEs', 
    'Social Enterprises', 
    'Global Players', 
    'Corporate Partners'
  ];

  const filteredBusinesses = MOCK_BUSINESSES.filter(biz => {
    if (activeFilter !== 'All' && biz.type !== activeFilter) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        biz.name.toLowerCase().includes(q) ||
        biz.tagline.toLowerCase().includes(q) ||
        biz.category.toLowerCase().includes(q) ||
        biz.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div id="business-view" className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto font-sans text-slate-100">
      {/* Top Banner Matching Reference Image Screen 8 */}
      <div className="relative rounded-2xl overflow-hidden border border-[#172750] bg-gradient-to-r from-[#070e24] via-[#091535] to-[#0d1d49] p-6 sm:p-8">
        <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 opacity-30 pointer-events-none overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80" 
            alt="Business Campus" 
            className="w-full h-full object-cover mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e24] via-[#070e24]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#112457] border border-[#1f3f96] text-[11px] font-bold text-cyan-400 mb-3">
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENTERPRISE & INDUSTRY ECOSYSTEM</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            BUSINESSES
          </h1>
          <p className="text-sm font-semibold text-blue-300 mb-2">
            Empowering Businesses for a Better Tomorrow.
          </p>
          <p className="text-xs text-slate-400 max-w-xl mb-6 leading-relaxed">
            Connect, collaborate, and grow with industry leaders, innovative SMEs, and global partners. Access vetted talent, co-create deep-tech solutions, and sponsor high-impact university research.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={() => setCurrentView('opportunities')}
              className="ch-btn-primary px-5 py-2.5 text-xs flex items-center gap-2 shadow-lg shadow-blue-500/25"
            >
              <Briefcase className="w-4 h-4" />
              <span>Explore Partnerships</span>
            </button>
            <button 
              onClick={() => setCurrentView('feed')}
              className="ch-btn-secondary px-5 py-2.5 text-xs flex items-center gap-2"
            >
              <span>Connect with Industry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Stats Row Matching Reference Screen 8 */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-8 pt-6 border-t border-[#162753]">
          <div className="bg-[#09132c]/80 backdrop-blur-sm p-3 rounded-xl border border-[#182a57]">
            <p className="text-lg sm:text-2xl font-black text-cyan-400">5,200+</p>
            <p className="text-[11px] text-slate-400 font-medium">Businesses</p>
          </div>
          <div className="bg-[#09132c]/80 backdrop-blur-sm p-3 rounded-xl border border-[#182a57]">
            <p className="text-lg sm:text-2xl font-black text-blue-400">12,000+</p>
            <p className="text-[11px] text-slate-400 font-medium">Professionals</p>
          </div>
          <div className="bg-[#09132c]/80 backdrop-blur-sm p-3 rounded-xl border border-[#182a57]">
            <p className="text-lg sm:text-2xl font-black text-emerald-400">3,500+</p>
            <p className="text-[11px] text-slate-400 font-medium">Partnership Opps</p>
          </div>
          <div className="bg-[#09132c]/80 backdrop-blur-sm p-3 rounded-xl border border-[#182a57]">
            <p className="text-lg sm:text-2xl font-black text-purple-400">1,200+</p>
            <p className="text-[11px] text-slate-400 font-medium">Active Projects</p>
          </div>
          <div className="bg-[#09132c]/80 backdrop-blur-sm p-3 rounded-xl border border-[#182a57] col-span-2 sm:col-span-1">
            <p className="text-lg sm:text-2xl font-black text-amber-400">25+</p>
            <p className="text-[11px] text-slate-400 font-medium">Industries</p>
          </div>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {filterPills.map(pill => (
            <button
              key={pill}
              onClick={() => setActiveFilter(pill)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === pill
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_12px_rgba(0,180,255,0.35)]'
                  : 'bg-[#0b1530] text-slate-400 hover:text-slate-200 border border-[#182b57]'
              }`}
            >
              {pill}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search companies, domains..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0b1530] border border-[#182a57] rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button 
            onClick={() => setActiveFilter('All')}
            className="ch-btn-secondary px-3 py-1.5 text-xs flex items-center gap-1.5"
          >
            <SlidersHorizontal className="w-3 h-3 text-cyan-400" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Main Grid + Sidebar Layout matching Reference Screen 8 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Businesses Grid & Map Preview */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Featured Businesses & Partners</span>
            </h2>
            <span className="text-xs text-slate-400">{filteredBusinesses.length} partners displayed</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredBusinesses.map(biz => (
              <div 
                key={biz.id}
                className="ch-card hover:border-[#2a55b3] transition-all group overflow-hidden flex flex-col"
              >
                {/* Visual Cover Photo */}
                <div className="h-36 relative overflow-hidden bg-slate-900">
                  <img 
                    src={biz.coverImage} 
                    alt={biz.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1530] via-transparent to-black/30" />
                  
                  {/* Category Pill on Image */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#070e24]/90 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                      {biz.type}
                    </span>
                  </div>

                  {/* Logo Badge */}
                  <div className="absolute bottom-2.5 left-3 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-[#091535] border border-[#1e3b7e] flex items-center justify-center text-lg shadow-lg">
                      {biz.logo}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white text-sm drop-shadow-md">
                        {biz.name}
                      </h3>
                      <p className="text-[10px] text-cyan-300 flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" />
                        {biz.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-medium">
                    {biz.tagline}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {biz.tags.slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#101f46] text-blue-300 border border-[#1c3877]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-[#162753] text-center">
                    <div>
                      <p className="text-xs font-bold text-white">{biz.openProjects}</p>
                      <p className="text-[9px] text-slate-400">Projects</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cyan-400">{biz.openRoles}</p>
                      <p className="text-[9px] text-slate-400">Open Roles</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-emerald-400">{biz.partnershipOpportunities}</p>
                      <p className="text-[9px] text-slate-400">Partnerships</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-1">
                    <button 
                      onClick={() => setCurrentView('opportunities')}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>View Opportunities</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                    <button 
                      onClick={() => setCurrentView('feed')}
                      className="px-3 py-1 rounded-lg bg-[#112457] hover:bg-[#1a3889] text-[11px] font-bold text-white border border-[#20449e] transition-colors"
                    >
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Business Ecosystem Map Preview Matching Reference Screen 8 */}
          <div className="ch-card p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>Business Ecosystem Map</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Discover corporate R&D centers, industrial clusters, and tech parks across India
                </p>
              </div>
              <button 
                onClick={() => setCurrentView('map')}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>Full Map</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div 
              onClick={() => setCurrentView('map')}
              className="relative h-44 rounded-xl overflow-hidden border border-[#192f66] bg-[#070e24] cursor-pointer group"
            >
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&auto=format&fit=crop&q=80" 
                alt="Map Background"
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-radial from-transparent via-[#070e24]/70 to-[#070e24]" />

              {/* Glowing City Nodes */}
              <div className="absolute top-1/4 left-1/3 flex items-center gap-1.5 animate-pulse">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00d2ff]" />
                <span className="text-[10px] font-bold text-white bg-[#070e24]/80 px-1.5 py-0.5 rounded border border-[#19326d]">Delhi NCR (1,240)</span>
              </div>
              <div className="absolute bottom-1/3 right-1/3 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_#38bdf8]" />
                <span className="text-[10px] font-bold text-white bg-[#070e24]/80 px-1.5 py-0.5 rounded border border-[#19326d]">Bengaluru (2,150)</span>
              </div>
              <div className="absolute bottom-1/4 left-2/5 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
                <span className="text-[10px] font-bold text-white bg-[#070e24]/80 px-1.5 py-0.5 rounded border border-[#19326d]">Hyderabad (890)</span>
              </div>
              <div className="absolute bottom-1/5 right-1/4 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span className="text-[10px] font-bold text-white bg-[#070e24]/80 px-1.5 py-0.5 rounded border border-[#19326d]">Chennai (740)</span>
              </div>

              <div className="absolute bottom-3 right-3">
                <span className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-500/30 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Explore on Interactive Map</span>
                </span>
              </div>
            </div>
          </div>

          {/* Success Stories Matching Reference Screen 8 */}
          <div className="ch-card p-5 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Industry Success Stories</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#09132c] border border-[#172b5c] space-y-2">
                <div className="flex items-center gap-2.5">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" 
                    alt="Neha Sharma" 
                    className="w-8 h-8 rounded-full object-cover border border-[#1e3a7a]"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">Neha Sharma</h4>
                    <p className="text-[10px] text-cyan-400">CEO, AgriTech Innovations</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "Partnering with university robotics labs through CraftHub accelerated our drone sensor R&D by 6 months while providing students real field deployments."
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#09132c] border border-[#172b5c] space-y-2">
                <div className="flex items-center gap-2.5">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" 
                    alt="Rohit Verma" 
                    className="w-8 h-8 rounded-full object-cover border border-[#1e3a7a]"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">Rohit Verma</h4>
                    <p className="text-[10px] text-cyan-400">Founder, EduNext Robotics</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "Connecting with manufacturing partners on CraftHub helped us pilot robotic sorting arms in 40 automotive facilities in Maharashtra."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Find Businesses & Resources Matching Screen 8 */}
        <div className="lg:col-span-4 space-y-5">
          {/* Find Businesses Widget */}
          <div className="ch-card p-5 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Find Businesses</span>
            </h3>

            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-400 block mb-1">Location</label>
                <input 
                  type="text"
                  placeholder="e.g. Bengaluru, Delhi, Mumbai"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-[#070e24] border border-[#172a59] rounded-xl px-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-400 block mb-1">Select Industry</label>
                <select 
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full bg-[#070e24] border border-[#172a59] rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="All">All Industries</option>
                  <option value="Automotive">Automotive & Mobility</option>
                  <option value="Renewables">CleanTech & Energy</option>
                  <option value="Manufacturing">Manufacturing & Robotics</option>
                  <option value="IT">IT & Enterprise AI</option>
                  <option value="Bio">Healthcare & Life Sciences</option>
                </select>
              </div>

              <button 
                onClick={() => setSearchQuery(selectedLocation)}
                className="w-full ch-btn-primary py-2 text-xs flex items-center justify-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search Businesses</span>
              </button>
            </div>
          </div>

          {/* Top Industries List */}
          <div className="ch-card p-5 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span>Top Industries</span>
            </h3>

            <div className="space-y-2">
              {[
                { name: 'Information Technology', count: '1,420 businesses' },
                { name: 'Manufacturing & Engineering', count: '980 businesses' },
                { name: 'Renewable Energy & CleanTech', count: '640 businesses' },
                { name: 'Healthcare & Life Sciences', count: '510 businesses' },
                { name: 'Automotive & Electric Mobility', count: '480 businesses' },
                { name: 'Agriculture & Food Tech', count: '390 businesses' },
              ].map((ind, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-[#070e24] hover:bg-[#0c183b] transition-colors">
                  <span className="text-xs text-slate-300 font-medium">{ind.name}</span>
                  <span className="text-[10px] text-cyan-400 font-bold">{ind.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Resources */}
          <div className="ch-card p-5 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Business Resources</span>
            </h3>

            <div className="space-y-2">
              {[
                'Corporate Innovation Playbook',
                'Enterprise University Partnership Guide',
                'Co-Creation Intellectual Property Framework',
                'Standard NDA & Trial Agreement Templates',
                'Industrial Pilot Deployment Checklist'
              ].map((res, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-[#070e24] cursor-pointer group transition-colors">
                  <span className="text-xs text-slate-300 group-hover:text-cyan-300 font-medium">{res}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Inspiration Banner Matching Reference Screen 8 */}
          <div className="p-4 rounded-xl border border-[#1b3670] bg-gradient-to-br from-[#0c1a40] to-[#070e24] space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-base">🇮🇳</span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">From Businesses to a Brighter India</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              When forward-thinking enterprises, bold startups, and talented researchers collaborate on real challenges, entire nations leap forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
