import React, { useState } from 'react';
import { 
  Cpu, 
  MapPin, 
  Calendar, 
  Wrench, 
  Search, 
  Map as MapIcon, 
  CheckCircle2, 
  Clock, 
  SlidersHorizontal, 
  Building2, 
  ArrowRight, 
  ShieldCheck, 
  Compass,
  Bookmark,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const InfrastructureView: React.FC = () => {
  const { setCurrentView } = useApp();

  const [activeTab, setActiveTab] = useState('All');
  const [selectedCity, setSelectedCity] = useState('New Delhi, India');

  const tabs = [
    'All',
    'Labs',
    'Makerspaces',
    'Equipment',
    'Research Centers',
    'Incubators',
    'Testing Facilities',
    'Cloud & Compute'
  ];

  const featuredFacilities = [
    {
      id: 'fac-1',
      name: 'Advanced AI & Robotics Lab',
      type: 'Lab',
      institution: 'IIT Delhi',
      location: 'New Delhi, India',
      image: '/assets/images/tech_robotics_01.jpg',
      tags: ['Robotics', 'AI/ML', 'Computer Vision'],
      rating: '4.9',
      availability: 'Available Now'
    },
    {
      id: 'fac-2',
      name: 'TinkerHub Makerspace',
      type: 'Makerspace',
      institution: 'NIT Trichy',
      location: 'Tamil Nadu, India',
      image: '/assets/images/card_3d_printing.jpg',
      tags: ['3D Printing', 'CNC', 'IoT'],
      rating: '4.8',
      availability: 'Booking Open'
    },
    {
      id: 'fac-3',
      name: 'Clean Energy Research Center',
      type: 'Research Center',
      institution: 'IISc Bengaluru',
      location: 'Karnataka, India',
      image: '/assets/images/card_wind_solar_hybrid.jpg',
      tags: ['Renewable Energy', 'Sustainability', 'EV'],
      rating: '5.0',
      availability: 'Available'
    },
    {
      id: 'fac-4',
      name: 'Electronics Prototyping Lab',
      type: 'Equipment',
      institution: 'IIIT Hyderabad',
      location: 'Telangana, India',
      image: '/assets/images/card_pcb_design.jpg',
      tags: ['Oscilloscope', 'PCB Fabrication', 'Embedded'],
      rating: '4.7',
      availability: 'Available Now'
    },
    {
      id: 'fac-5',
      name: 'National Nanofab Cleanroom Facility',
      type: 'Cleanroom',
      institution: 'IIT Bombay',
      location: 'Maharashtra, India',
      image: '/assets/images/card_cleanroom_nanofab.jpg',
      tags: ['Semiconductor', 'Photolithography', 'DRC'],
      rating: '4.9',
      availability: 'Slot Booking Open'
    },
    {
      id: 'fac-6',
      name: 'Supercomputer & AI Datacenter',
      type: 'Compute',
      institution: 'C-DAC Pune',
      location: 'Maharashtra, India',
      image: '/assets/images/card_ai_neural_processor.jpg',
      tags: ['HPC', 'A100 Clusters', 'Parallel CUDA'],
      rating: '5.0',
      availability: 'Available Now'
    },
    {
      id: 'fac-7',
      name: 'Drone Flight Testing & Wind Tunnel',
      type: 'Testbed',
      institution: 'IIT Kanpur',
      location: 'Uttar Pradesh, India',
      image: '/assets/images/card_drone_swarm.jpg',
      tags: ['UAV Aerodynamics', 'Telemetry', 'Wind Tunnel'],
      rating: '4.8',
      availability: 'Available'
    },
    {
      id: 'fac-8',
      name: 'Precision AgriTech Vertical Biome',
      type: 'Bio-Lab',
      institution: 'ICAR Delhi',
      location: 'New Delhi, India',
      image: '/assets/images/card_smart_agriculture.jpg',
      tags: ['Hydroponics', 'Sensor Array', 'Automation'],
      rating: '4.9',
      availability: 'Available Now'
    },
    {
      id: 'fac-9',
      name: 'Cryogenic Dilution & Quantum Testbed',
      type: 'Research Center',
      institution: 'IISc / TIFR',
      location: 'Bengaluru, India',
      image: '/assets/images/card_quantum_computing.jpg',
      tags: ['Quantum Qubits', 'Cryogenics', 'RF Microwave'],
      rating: '5.0',
      availability: 'Booking Open'
    },
    {
      id: 'fac-10',
      name: 'High-Precision 5-Axis CNC Milling Center',
      type: 'Factory',
      institution: 'Pune Smart Factory Hub',
      location: 'Maharashtra, India',
      image: '/assets/images/card_manufacturing_intern.jpg',
      tags: ['5-Axis Milling', 'Titanium DMLS', 'Metrology'],
      rating: '4.9',
      availability: 'Available Now'
    },
    {
      id: 'fac-11',
      name: 'Genomic Sequencing & BSL-3 Bio-Core',
      type: 'Lab',
      institution: 'NCBS Bengaluru',
      location: 'Karnataka, India',
      image: '/assets/images/card_biotech_crispr.jpg',
      tags: ['CRISPR Cas13', 'NovaSeq', 'Flow Cytometry'],
      rating: '4.8',
      availability: 'Slot Booking Open'
    },
    {
      id: 'fac-12',
      name: 'Thermal-Vacuum Orbital Simulation Chamber',
      type: 'Testbed',
      institution: 'ISRO Telemetry Wing',
      location: 'Thiruvananthapuram, India',
      image: '/assets/images/card_satellite_project.jpg',
      tags: ['SpaceTech', 'CubeSat TVAC', 'Solar Sim'],
      rating: '4.9',
      availability: 'Available'
    }
  ];

  const popularEquipment = [
    { name: '3D Printer', model: 'Prusa i3 MK4', status: 'Available', type: 'Additive', image: '/assets/images/card_3d_printing.jpg' },
    { name: 'Laser Cutter', model: 'Glowforge Pro', status: 'Available', type: 'Fabrication', image: '/assets/images/tech_manufacturing_08.jpg' },
    { name: 'Robotic Arm', model: 'UR5 Industrial', status: 'Available', type: 'Robotics', image: '/assets/images/card_robotics_intern.jpg' },
    { name: 'CNC Machine', model: 'Tormach 1100M', status: 'Available', type: 'Subtractive', image: '/assets/images/tech_manufacturing_09.jpg' },
    { name: 'Digital Oscilloscope', model: 'Keysight 4-Ch 1GHz', status: 'Available', type: 'Electronics', image: '/assets/images/card_pcb_design.jpg' },
    { name: 'Thermal Vacuum Chamber', model: 'TVAC Orbital Sim', status: 'Booking Open', type: 'SpaceTech', image: '/assets/images/card_satellite_project.jpg' },
    { name: 'Cleanroom Mask Aligner', model: 'Karl Suss MJB4', status: 'Available', type: 'Nanofab', image: '/assets/images/card_cleanroom_nanofab.jpg' },
    { name: 'Edge AI Supercomputer', model: '8x NVIDIA H100', status: 'Available', type: 'Compute', image: '/assets/images/card_ai_neural_processor.jpg' }
  ];

  return (
    <div id="infrastructure-view" className="font-sans text-slate-100 select-none">
      {/* Hero Banner Image */}
      <div className="relative overflow-hidden">
        <img
          src="/assets/images/hero_infrastructure_banner.jpg"
          alt="Infrastructure Hero"
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b19]/95 via-[#060b19]/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8">
          <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1">INFRASTRUCTURE</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight uppercase">
            ACCESS LABS,<br />
            <span className="text-[#00d2ff]">TOOLS & MAKERSPACES.</span>
          </h1>
          <p className="text-xs text-slate-300 mt-2 max-w-md">
            Find verified labs, workshops, CNC machines, PCB printers, and research-grade equipment near you.
          </p>
        </div>
      </div>
      <div className="p-6 space-y-6 max-w-[1440px] mx-auto">
      {/* Hero Banner matching Reference Image 6 */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#071333] via-[#091b49] to-[#040e29] border border-[#193570] p-6 sm:p-8 shadow-[0_4px_35px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Infrastructure
            </h1>
            <div className="text-sm text-cyan-300 font-bold tracking-wide uppercase">
              Real Spaces. Real Innovation.
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Access world-class labs, equipment, makerspaces and research infrastructure to turn your concepts into certified physical reality.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <button 
                onClick={() => setCurrentView('map')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] hover:from-[#134bc2] hover:to-[#00a8d1] text-white text-xs font-bold shadow-[0_0_15px_rgba(0,200,248,0.35)] transition-all flex items-center gap-1.5"
              >
                <span>Find a Facility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => alert('List your facility registration form')}
                className="px-4 py-2 rounded-xl bg-[#09173d] border border-[#1b3a7a] hover:border-cyan-500 text-slate-200 text-xs font-bold transition-all"
              >
                List Your Facility
              </button>
            </div>

            {/* Stats Row matching Image 6 */}
            <div className="flex flex-wrap items-center gap-6 pt-3">
              <div>
                <span className="text-lg font-extrabold text-white">420+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Labs</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">180+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Makerspaces</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">320+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Equipment</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-[#00d2ff]">150+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Research Centers</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <div>
                <span className="text-lg font-extrabold text-white">50+</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">Compute Clusters</span>
              </div>
            </div>
          </div>

          {/* Right Architecture Graphic Card */}
          <div className="bg-[#0b1b42]/90 border border-[#21478f] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5 backdrop-blur-md shadow-lg">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-[11px] font-extrabold tracking-wider text-cyan-300 uppercase">
                Bridging Digital & Physical
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Verified access with institutional booking passes.
              </p>
              <div className="pt-2">
                <span className="text-[10px] text-blue-300 font-semibold bg-[#0e214d] px-2.5 py-1 rounded-full border border-[#1b3a7a]">
                  Government & University Backed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs matching Image 6 */}
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
          onClick={() => alert('Advanced infrastructure filters drawer')}
          className="px-3 py-1.5 rounded-xl bg-[#09173d] border border-[#18346e] text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
          <span>Filters</span>
        </button>
      </div>

      {/* Main 2-Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols): Featured Infrastructure, Interactive Map, Popular Equipment */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white tracking-tight">Featured Infrastructure</h2>
            <span className="text-xs text-[#00d2ff] hover:underline cursor-pointer font-semibold">View All 420+ Facilities ›</span>
          </div>

          {/* 4 Featured Facilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredFacilities.map((fac) => (
              <div 
                key={fac.id}
                className="bg-[#071333] border border-[#162c5e] hover:border-[#00c8f8] rounded-2xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,180,255,0.15)]"
              >
                <div className="relative h-36 w-full overflow-hidden bg-[#0a163a]">
                  <img 
                    src={fac.image} 
                    alt={fac.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071333] via-transparent to-black/30" />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-950/80 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                    {fac.type}
                  </span>
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                    {fac.availability}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#00d2ff] transition-colors leading-snug">
                      {fac.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{fac.institution} • {fac.location}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {fac.tags.map((t) => (
                      <span key={t} className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-[#0e214d] text-blue-300 border border-[#18366d]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-[#13254e] flex items-center justify-between">
                    <span className="text-xs font-bold text-white">⭐ {fac.rating}</span>
                    <button 
                      onClick={() => alert(`Opening booking slot for ${fac.name}!`)}
                      className="px-3.5 py-1 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] text-white text-xs font-bold shadow-sm hover:scale-105 transition-all"
                    >
                      Book Slot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Infrastructure Map Preview matching Image 6 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                  <MapIcon className="w-4 h-4 text-cyan-400" />
                  <span>Interactive Infrastructure Map</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">Explore 420+ facilities distributed across major tech clusters in India</p>
              </div>
              <button 
                onClick={() => setCurrentView('map')}
                className="px-3 py-1.5 rounded-xl bg-[#09173d] border border-[#18346e] text-cyan-300 text-xs font-semibold hover:border-cyan-500 transition-colors"
              >
                View on Map ›
              </button>
            </div>

            {/* Simulated Geographic Radar Map */}
            <div 
              onClick={() => setCurrentView('map')}
              className="relative rounded-xl overflow-hidden h-48 bg-[#09132e] border border-[#1a3473] flex items-center justify-center cursor-pointer group"
            >
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#15357a_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Pulsing City Pins */}
              <div className="absolute top-1/4 left-1/3 flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping absolute" />
                <span className="w-3 h-3 rounded-full bg-cyan-400 relative border border-white" />
                <span className="text-[10px] font-bold text-white mt-1 bg-black/70 px-1.5 py-0.5 rounded">Delhi (42)</span>
              </div>

              <div className="absolute top-2/3 left-1/2 flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-blue-400 relative border border-white" />
                <span className="text-[10px] font-bold text-white mt-1 bg-black/70 px-1.5 py-0.5 rounded">Bengaluru (58)</span>
              </div>

              <div className="absolute top-1/2 left-2/5 flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative border border-white" />
                <span className="text-[10px] font-bold text-white mt-1 bg-black/70 px-1.5 py-0.5 rounded">Hyderabad (34)</span>
              </div>

              <div className="absolute top-3/4 left-3/5 flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 relative border border-white" />
                <span className="text-[10px] font-bold text-white mt-1 bg-black/70 px-1.5 py-0.5 rounded">Chennai (29)</span>
              </div>

              <div className="relative z-10 px-4 py-2 rounded-xl bg-[#060e24]/90 border border-[#1e3e80] text-center backdrop-blur-md group-hover:border-cyan-400 transition-colors">
                <span className="text-xs font-bold text-cyan-300">Click to Open Full Interactive National Map</span>
              </div>
            </div>
          </div>

          {/* Popular Equipment matching Image 6 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">Popular Equipment Ready for Use</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {popularEquipment.map((eq) => (
                <div key={eq.name} className="rounded-xl overflow-hidden bg-[#09173d] border border-[#18346e] hover:border-cyan-500/50 transition-all flex flex-col group cursor-pointer">
                  <div className="h-20 w-full overflow-hidden relative">
                    <img 
                      src={eq.image} 
                      alt={eq.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09173d] via-transparent to-transparent" />
                    <span className="absolute top-1.5 right-1.5 text-[8px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-cyan-300 backdrop-blur-sm border border-cyan-500/30">
                      {eq.type}
                    </span>
                  </div>
                  <div className="p-2.5 space-y-1">
                    <div className="font-bold text-xs text-white group-hover:text-cyan-300 transition-colors truncate">{eq.name}</div>
                    <div className="text-[10px] text-slate-400 truncate">{eq.model}</div>
                    <span className="inline-block text-[9px] font-semibold text-emerald-300 bg-emerald-950/70 px-1.5 py-0.5 rounded mt-1 border border-emerald-500/30">
                      {eq.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): Check Availability, Upcoming Bookings, Category Count, Promo */}
        <div className="space-y-6">
          {/* Check Availability Widget matching Image 6 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-4">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Check Availability</span>
            <div className="space-y-3 text-xs">
              <div>
                <label className="text-[10px] text-slate-400 block mb-1">Location</label>
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    value={selectedCity} 
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full bg-[#09173d] border border-[#18346e] rounded-xl pl-8 pr-3 py-2 text-white text-xs focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 block mb-1">Preferred Date</label>
                <div className="relative">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input 
                    type="date" 
                    defaultValue="2026-04-12"
                    className="w-full bg-[#09173d] border border-[#18346e] rounded-xl pl-8 pr-3 py-2 text-white text-xs focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <button 
                onClick={() => alert(`Searching facilities in ${selectedCity}...`)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#175beb] to-[#00c8f8] text-white font-bold text-xs shadow-md hover:scale-105 transition-all"
              >
                Search Facilities
              </button>
            </div>
          </div>

          {/* Upcoming Bookings matching Image 6 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Upcoming Bookings</span>
              </span>
            </div>

            <div className="space-y-2.5">
              {[
                { title: 'Robotics Lab', inst: 'IIT Delhi', date: 'Apr 12', image: '/assets/images/tech_robotics_08.jpg' },
                { title: '3D Printing Room', inst: 'NIT Trichy', date: 'Apr 15', image: '/assets/images/tech_manufacturing_10.jpg' },
                { title: 'Electronics Lab', inst: 'IIIT Hyderabad', date: 'Apr 18', image: '/assets/images/tech_circuit_08.jpg' },
                { title: 'Nanofab Cleanroom', inst: 'IIT Bombay', date: 'Apr 21', image: '/assets/images/tech_lab_08.jpg' }
              ].map((b) => (
                <div key={b.title} className="p-2.5 rounded-xl bg-[#09173d] border border-[#18346e] flex items-center justify-between text-xs group">
                  <div className="flex items-center gap-2.5">
                    <img src={b.image} alt={b.title} className="w-9 h-9 rounded-lg object-cover border border-[#1a3473] shrink-0" />
                    <div>
                      <div className="font-bold text-white group-hover:text-cyan-300 transition-colors">{b.title}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{b.inst}</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#0e214d] text-cyan-300 font-bold text-[10px] border border-[#1b3a7a] shrink-0">
                    {b.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure by Category matching Image 6 */}
          <div className="bg-[#071333] border border-[#162c5e] rounded-2xl p-5 space-y-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Infrastructure by Category</span>
            <div className="space-y-2 text-xs">
              {[
                { label: 'Labs', count: '420' },
                { label: 'Makerspaces', count: '180' },
                { label: 'Equipment', count: '320' },
                { label: 'Research Centers', count: '150' },
                { label: 'Incubators', count: '90' },
                { label: 'Testing Facilities', count: '60' },
                { label: 'Cloud & Compute', count: '50' },
              ].map((cat) => (
                <div key={cat.label} className="flex items-center justify-between p-1.5 hover:bg-[#09173d] rounded-lg transition-colors cursor-pointer">
                  <span className="text-slate-300 font-medium">{cat.label}</span>
                  <span className="font-bold text-cyan-300 text-[11px]">{cat.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Promo Card: "Better Infrastructure Brighter Futures" */}
          <div className="p-5 rounded-2xl bg-gradient-to-tr from-[#0b2158] to-[#071438] border border-[#1d438d] text-center space-y-2 shadow-lg">
            <div className="text-xs font-extrabold text-cyan-300 tracking-wider uppercase">
              Better Infrastructure Brighter Futures
            </div>
            <p className="text-[11px] text-slate-300 font-medium">
              National R&D Facilities Unified on CraftHub
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
