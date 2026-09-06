import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Cpu, 
  Building, 
  Radio, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { InfrastructureFacility } from '../../types';

export const LocationMapView: React.FC = () => {
  const { facilities, setCurrentView } = useApp();

  const [selectedRadius, setSelectedRadius] = useState<string>('All');
  const [activePin, setActivePin] = useState<InfrastructureFacility>(facilities[0]);

  return (
    <div id="location-map-page" className="p-6 space-y-5 max-w-7xl mx-auto font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Facilities Near You
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Find physical prototyping labs, cleanrooms, and CNC hubs across regional technology clusters.
          </p>
        </div>

        {/* Distance Filter Pills */}
        <div className="flex items-center gap-2">
          {['< 5 km', '< 15 km', '< 50 km', 'All'].map((d) => (
            <button
              key={d}
              onClick={() => setSelectedRadius(d)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedRadius === d
                  ? 'bg-[#1e6bff] text-white shadow-md shadow-blue-500/25'
                  : 'bg-[#0d1838] text-slate-400 hover:text-white border border-[#192a56]'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Map & Facilities Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Interactive Stylized Geospatial Radar Canvas (7 cols) */}
        <div className="lg:col-span-7 h-[460px] rounded-2xl bg-[#091126] border border-[#16254a] relative overflow-hidden shadow-2xl p-4 flex flex-col justify-between">
          {/* Radar background grids and contours */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e3a7a_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-blue-500/20 rounded-full pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] border border-blue-400/15 rounded-full pointer-events-none" />

          {/* Top Canvas Controls */}
          <div className="z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0b1530]/90 border border-[#192a56] backdrop-blur-md text-xs font-semibold text-blue-300">
              <Radio className="w-3.5 h-3.5 text-blue-400 animate-ping" />
              <span>Active Radar: Bengaluru Hardware Hub</span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-slate-300 bg-[#0b1530]/90 border border-[#192a56] px-2.5 py-1 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>5 Verified Facilities Online</span>
            </div>
          </div>

          {/* Map Node Pins */}
          <div className="absolute inset-0 z-10 pointer-events-auto">
            {facilities.map((fac) => {
              const isSelected = activePin.id === fac.id;
              return (
                <div
                  key={fac.id}
                  onClick={() => setActivePin(fac)}
                  style={{
                    left: `${fac.coordinates.x}%`,
                    top: `${fac.coordinates.y}%`
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                >
                  <div className="relative">
                    <div className={`w-9 h-9 rounded-2xl flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#1e6bff] text-white scale-125 shadow-[0_0_20px_rgba(30,107,255,0.7)] ring-4 ring-blue-400/30'
                        : 'bg-[#0b1530] text-blue-400 border border-[#192a56] hover:scale-110'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-2 py-0.5 rounded text-[10px] text-white border border-[#192a56] pointer-events-none">
                      {fac.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Canvas Stats */}
          <div className="z-10 flex items-center justify-between text-[11px] text-slate-400 bg-[#0b1530]/80 backdrop-blur-md p-2.5 rounded-xl border border-[#192a56]">
            <span>12.9716° N, 77.5946° E</span>
            <span>Click any node to inspect equipment & availability</span>
          </div>
        </div>

        {/* Selected Facility Details (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="ch-card p-5 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#0d1c44] text-[#38bdf8] border border-[#1b3470] font-semibold">
                  {activePin.type}
                </span>
                <h3 className="text-base font-bold text-white mt-1.5">{activePin.name}</h3>
                <p className="text-xs text-slate-400">{activePin.institution} • {activePin.location}</p>
              </div>

              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20">
                {activePin.availableSlots} Slots Free
              </span>
            </div>

            <div className="h-36 rounded-xl overflow-hidden bg-[#091126] border border-[#16254a]">
              <img
                src={activePin.image}
                alt={activePin.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {activePin.description}
            </p>

            <div className="space-y-1.5">
              <span className="text-[11px] font-semibold text-slate-400">Available Specialized Tools</span>
              <div className="flex flex-wrap gap-1.5">
                {activePin.equipment.map((eq, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-[#091126] border border-[#16254a] text-[10px] text-slate-200">
                    {eq}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[#152347] flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Level {activePin.minVerificationLevel}+ Required</span>
              </div>

              <button
                onClick={() => setCurrentView('infrastructure')}
                className="ch-btn-primary px-4 py-1.5 text-xs font-semibold flex items-center gap-1.5"
              >
                <span>Book This Facility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
