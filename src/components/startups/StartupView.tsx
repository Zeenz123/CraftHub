import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  PlusCircle, 
  Rocket, 
  Users, 
  DollarSign, 
  Wrench, 
  ExternalLink, 
  ChevronRight, 
  Sparkles, 
  Briefcase, 
  ArrowRight, 
  SlidersHorizontal, 
  Bookmark, 
  Award,
  TrendingUp
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const StartupView: React.FC = () => {
  const { setCurrentView } = useApp();

  const [activeTab, setActiveTab] = useState('All');
  const [selectedRole, setSelectedRole] = useState('Hardware / Robotics Engineer');

  const tabs = [
    'All',
    'Deep Tech',
    'Hardware & IoT',
    'AI & Robotics',
    'CleanTech & Energy',
    'HealthTech',
    'AgriTech',
    'EdTech',
    'FinTech'
  ];

  const featuredStartups = [
    {
      id: 'st-1',
      name: 'RoboCraft AI',
      tagline: 'Autonomous warehouse robotics & multi-agent swarm intelligence systems.',
      stage: 'Seed Stage',
      funding: '$1.2M Raised',
      incubator: 'IIT Delhi Incubated',
      location: 'Bangalore, India',
      image: '/assets/images/card_drone_swarm.jpg',
      tags: ['Robotics', 'AI Swarm', 'Warehouse Tech']
    },
    {
      id: 'st-2',
      name: 'VoltGen Energy',
      tagline: 'Next-gen solid-state electrolyte battery technology for commercial electric fleets.',
      stage: 'Pre-Seed',
      funding: '$800K Raised',
      incubator: 'IISc Incubated',
      location: 'Bangalore, India',
      image: '/assets/images/card_wind_solar_hybrid.jpg',
      tags: ['CleanTech', 'Solid State', 'EV Mobility']
    },
    {
      id: 'st-3',
      name: 'BioSense Tech',
      tagline: 'Non-invasive continuous metabolic & glucose monitoring micro-wearables.',
      stage: 'Series A',
      funding: '$3.5M Raised',
      incubator: 'IIT Madras',
      location: 'Chennai, India',
      image: '/assets/images/card_wearable_biosensor.jpg',
      tags: ['HealthTech', 'Wearables', 'Sensors']
    },
    {
      id: 'st-4',
      name: 'AgriDrone Labs',
      tagline: 'Autonomous precision crop-spraying drones with multispectral AI cameras.',
      stage: 'Seed Stage',
      funding: '$1.5M Raised',
      incubator: 'T-Hub',
      location: 'Hyderabad, India',
      image: '/assets/images/card_smart_agriculture.jpg',
      tags: ['AgriTech', 'Drones', 'Computer Vision']
    },
    {
      id: 'st-5',
      name: 'NeuroPulse Silicon',
      tagline: 'Sub-watt ultra-low latency neuromorphic vision processors for robotic edge perception.',
      stage: 'Seed Stage',
      funding: '$2.1M Raised',
      incubator: 'IIT Bombay SINE',
      location: 'Mumbai, India',
      image: '/assets/images/card_ai_neural_processor.jpg',
      tags: ['Semiconductor', 'Edge AI', 'Neuromorphic']
    },
    {
      id: 'st-6',
      name: 'TerraMobility EV',
      tagline: 'Modular electric vehicle skateboard platform and drive-by-wire telematics.',
      stage: 'Series A',
      funding: '$4.2M Raised',
      incubator: 'NSRCEL IIMB',
      location: 'Pune, India',
      image: '/assets/images/card_autonomous_ev.jpg',
      tags: ['CleanTech', 'EV Mobility', 'Automotive']
    },
    {
      id: 'st-7',
      name: 'QuantumCore Foundry',
      tagline: 'Cryogenic quantum control processors and QKD photonic encryption modules.',
      stage: 'Pre-Seed',
      funding: '$950K Raised',
      incubator: 'CeNSE IISc',
      location: 'Bengaluru, India',
      image: '/assets/images/card_quantum_computing.jpg',
      tags: ['Deep Tech', 'Quantum', 'Cryptography']
    },
    {
      id: 'st-8',
      name: 'GeneCraft Therapeutics',
      tagline: 'Benchtop microfluidic automated CRISPR ribonucleoprotein delivery synthesis systems.',
      stage: 'Seed Stage',
      funding: '$1.8M Raised',
      incubator: 'C-CAMP Bengaluru',
      location: 'Bengaluru, India',
      image: '/assets/images/card_biotech_crispr.jpg',
      tags: ['HealthTech', 'CRISPR', 'Microfluidics']
    },
    {
      id: 'st-9',
      name: 'OrbitSense Constellations',
      tagline: 'LEO hyperspectral earth-observation cubesats for real-time agricultural monitoring.',
      stage: 'Seed Stage',
      funding: '$2.7M Raised',
      incubator: 'IN-SPACe & T-Hub',
      location: 'Hyderabad, India',
      image: '/assets/images/card_satellite_project.jpg',
      tags: ['SpaceTech', 'CubeSats', 'Earth Observation']
    },
    {
      id: 'st-10',
      name: 'NanoClean Material Labs',
      tagline: 'Scalable 2D MXene and graphene composite filters for industrial industrial wastewater.',
      stage: 'Pre-Seed',
      funding: '$650K Raised',
      incubator: 'IIT Kanpur FIRST',
      location: 'Kanpur, India',
      image: '/assets/images/card_nanomaterials_research.jpg',
      tags: ['Materials', 'Nanotech', 'Sustainability']
    }
  ];

  return (
    <div id="startup-view" className="font-sans text-slate-100 select-none">
      {/* Hero Banner Image */}
      <div className="relative overflow-hidden">
        <img
          src="/assets/images/hero_startups_banner.jpg"
          alt="Startups Hero"
          className="w-full h-52 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b19]/95 via-[#060b19]/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8">
          <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1">STARTUPS</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight uppercase">
            LAUNCH YOUR<br />
            <span className="text-[#00d2ff]">STARTUP JOURNEY.</span>
          </h1>
          <p className="text-xs text-slate-300 mt-2 max-w-md">
            Connect with co-founders, mentors, and investors. Turn your idea into a fundable deep-tech venture.
          </p>
        </div>
      </div>
      <div className="p-6 space-y-6 max-w-[1440px] mx-auto">
      {/* Hero Banner matching Reference Image 7 */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#071333] via-[#091b49] to-[#040e29] border border-[#193570] p-6 sm:p-8 shadow-[0_4px_35px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Startup
            </h1>
            <div className="text-sm text-cyan-300 font-bold tracking-wide uppercase">
              Build • Launch • Scale
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Turn your validated hardware & deep-tech prototypes into thriving commercial ventures. Connect with co-founders, investors, and premier incubators.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <button 
                onClick={() => alert('Startup registration form')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] hover:from-[#134bc2] hover:to-[#00a8d1] text-white text-xs font-bold shadow-[0_0_15px_rgba(0,200,248,0.35)] transition-all flex items-center gap-1.5"
              >
                <span>Register Your Startup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => {
                  const elem = document.getElementById('co-founders-card');
                  elem?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl bg-[#09173d] border border-[#1b3a7a] hover:border-cyan-500 text-slate-200 text-xs font-bold transition-all"
              >
                Find Co-founders
              </button>
            </div>

            {/* Stats Row matching Image 7 */}
            <div className="flex flex-wrap items-center gap-6 pt-3">
              <div>
                <span className="text-lg font-extrabold text-white">850+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Startups</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">$42M+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Funding Raised</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">320+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Incubator Partners</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-[#00d2ff]">1.2K+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Angel Investors</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">95+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Corporate Partners</span>
              </div>
            </div>
          </div>

          {/* Right Rocket Graphic Card */}
          <div className="bg-[#0b1b42]/90 border border-[#21478f] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5 backdrop-blur-md shadow-lg">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-[11px] font-extrabold tracking-wider text-cyan-300 uppercase">
                Build • Launch • Scale • Impact
              </div>
              <p className="text-xs text-slate-300 font-medium">
                From academic prototype to high-growth tech business.
              </p>
              <div className="pt-2">
                <span className="text-[10px] text-blue-300 font-semibold bg-[#0e214d] px-2.5 py-1 rounded-full border border-[#1b3a7a]">
                  Government SIDBI & SISFS Linked
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Row matching Image 7 */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#142854]">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#175beb] to-[#00a8e8] text-white shadow-sm font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-[#0b1b42]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button 
          onClick={() => alert('Venture filter drawer')}
          className="px-3 py-1.5 rounded-xl bg-[#09173d] border border-[#18346e] text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
          <span>Filters</span>
        </button>
      </div>

      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols): Featured Startups, Incubator Programs, Investor Network */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white tracking-tight">Featured Startups</h2>
            <span className="text-xs text-[#00d2ff] hover:underline cursor-pointer font-semibold">View All 850+ Ventures ›</span>
          </div>

          {/* 4 Featured Startups Cards matching Image 7 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredStartups.map((st) => (
              <div 
                key={st.id}
                className="bg-[#071333] border border-[#162c5e] hover:border-[#00c8f8] rounded-2xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,180,255,0.15)]"
              >
                <div className="relative h-36 w-full overflow-hidden bg-[#0a163a]">
                  <img 
                    src={st.image} 
                    alt={st.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071333] via-transparent to-black/30" />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-950/80 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                    {st.stage}
                  </span>
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                    {st.funding}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#00d2ff] transition-colors leading-snug">
                      {st.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 font-medium line-clamp-2 leading-relaxed">
                      {st.tagline}
                    </p>
                    <div className="text-[10px] text-cyan-400 font-semibold mt-1">
                      {st.incubator} • {st.location}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {st.tags.map((t) => (
                      <span key={t} className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-[#0e214d] text-blue-300 border border-[#18366d]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-[#13254e] flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-medium">Hiring 3 roles</span>
                    <button 
                      onClick={() => alert(`Viewing venture profile for ${st.name}`)}
                      className="px-3.5 py-1 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] text-white text-xs font-bold shadow-sm hover:scale-105 transition-all"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Startup Programs & Incubators matching Image 7 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white tracking-tight">Top Institutional Incubator Programs</h2>
              <span className="text-xs text-[#00d2ff] hover:underline cursor-pointer font-semibold">View All 320+ ›</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'IIT Delhi Tech Incubator (FITT)', grant: 'Grants up to ₹50L + Lab Access', tag: 'Academic' },
                { name: 'T-Hub Innovation Engine', grant: 'Seed to Series A Acceleration • Hyderabad', tag: 'State' },
                { name: 'NSRCEL IIM Bangalore', grant: 'Venture Mentorship & Seed Capital', tag: 'Business' },
                { name: 'SINE IIT Bombay', grant: 'Hardware & DeepTech Commercialization', tag: 'DeepTech' },
              ].map((inc) => (
                <div key={inc.name} className="p-3.5 rounded-xl bg-[#09173d] border border-[#18346e] hover:border-cyan-500/50 cursor-pointer transition-all flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{inc.name}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{inc.grant}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Active Investor Network matching Image 7 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">Active Investor Network</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: 'Sequoia Surge', stage: 'Seed & Series A', status: 'Actively Investing' },
                { name: 'Blume Ventures', stage: 'DeepTech Focus', status: 'Actively Investing' },
                { name: 'Kalaari Capital', stage: 'Early Tech', status: 'Actively Investing' },
                { name: 'Indian Angel Net', stage: 'Seed Syndicates', status: 'Actively Investing' },
              ].map((inv) => (
                <div key={inv.name} className="p-3 rounded-xl bg-[#09173d] border border-[#18346e] space-y-1">
                  <div className="font-bold text-xs text-white">{inv.name}</div>
                  <div className="text-[10px] text-slate-400">{inv.stage}</div>
                  <span className="inline-block text-[9px] font-semibold text-emerald-300 bg-emerald-950/70 px-1.5 py-0.5 rounded mt-1 border border-emerald-500/30">
                    {inv.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): Find Co-founders, Recent Investments, Stage Breakdown, Promo */}
        <div className="space-y-6">
          {/* Find Co-Founders Widget matching Image 7 */}
          <div id="co-founders-card" className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-4">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Find Co-Founders</span>
            <div className="space-y-3 text-xs">
              <div>
                <label className="text-[10px] text-slate-400 block mb-1">Looking for Role</label>
                <select 
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full bg-[#09173d] border border-[#18346e] rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-cyan-500"
                >
                  <option>Hardware / Robotics Engineer</option>
                  <option>CTO / AI Research Lead</option>
                  <option>Embedded Firmware Developer</option>
                  <option>Product & Business Lead</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 block mb-1">Key Skills</label>
                <input 
                  type="text" 
                  defaultValue="ROS, C++, Computer Vision"
                  className="w-full bg-[#09173d] border border-[#18346e] rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button 
                onClick={() => alert(`Searching for qualified co-founders in ${selectedRole}...`)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] text-white font-bold text-xs shadow-md hover:scale-105 transition-all"
              >
                Search Co-Founders
              </button>
            </div>
          </div>

          {/* Recent Investments matching Image 7 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>Recent Investments</span>
              </span>
            </div>

            <div className="space-y-2.5">
              {[
                { name: 'RoboCraft AI', amount: '$1.2M • Seed', lead: 'Lead: Blume Ventures' },
                { name: 'BioSense Tech', amount: '$3.5M • Series A', lead: 'Lead: Kalaari Capital' },
                { name: 'VoltGen Energy', amount: '$800K • Pre-Seed', lead: 'Lead: TechStars India' },
              ].map((inv) => (
                <div key={inv.name} className="p-3 rounded-xl bg-[#09173d] border border-[#18346e] flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white">{inv.name}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{inv.lead}</div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#0e214d] text-cyan-300 font-bold text-[10px] border border-[#1b3a7a]">
                    {inv.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Startups by Stage matching Image 7 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Startups by Stage</span>
            <div className="space-y-2 text-xs">
              {[
                { label: 'Idea / Concept', count: '340' },
                { label: 'Prototype / MVP', count: '280' },
                { label: 'Seed Stage', count: '150' },
                { label: 'Early Growth', count: '60' },
                { label: 'Scaling / Series A+', count: '20' },
              ].map((stg) => (
                <div key={stg.label} className="flex items-center justify-between p-1.5 hover:bg-[#09173d] rounded-lg transition-colors cursor-pointer">
                  <span className="text-slate-300 font-medium">{stg.label}</span>
                  <span className="font-bold text-cyan-300 text-[11px]">{stg.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Slogan Banner: "Turning Projects into Powerhouses" */}
          <div className="p-5 rounded-2xl bg-gradient-to-tr from-[#0b2158] to-[#071438] border border-[#1d438d] text-center space-y-2 shadow-lg">
            <div className="text-xs font-extrabold text-cyan-300 tracking-wider uppercase">
              Turning Projects into Powerhouses
            </div>
            <p className="text-[11px] text-slate-300 font-medium">
              Venture Acceleration at CraftHub
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
