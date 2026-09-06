import React, { useState } from 'react';
import { X, FolderGit2, Sparkles, ShieldCheck, Check, Layers, Cpu } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProjectCategory, ProjectStage, VisibilityType } from '../../types';

export const CreateProjectModal: React.FC = () => {
  const { isCreateProjectOpen, setIsCreateProjectOpen, createProject } = useApp();

  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [category, setCategory] = useState<ProjectCategory>('Hardware');
  const [stage, setStage] = useState<ProjectStage>('Prototyping');
  const [visibility, setVisibility] = useState<VisibilityType>('Public');
  const [problemStatement, setProblemStatement] = useState('');
  const [objective, setObjective] = useState('');
  const [skills, setSkills] = useState('Embedded C, KiCAD, 3D Printing');
  const [timeline, setTimeline] = useState('3 months');
  const [location, setLocation] = useState('Bengaluru (Hybrid)');
  const [isPhysical, setIsPhysical] = useState(true);

  if (!isCreateProjectOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    createProject({
      title,
      tagline: tagline || 'Community-driven open technology project on CraftHub.',
      category,
      stage,
      visibility,
      problemStatement: problemStatement || 'Developing localized physical computing hardware for environmental monitoring.',
      objective: objective || 'Validate working functional MVP in partner laboratory.',
      requiredSkills: skills.split(',').map(s => s.trim()).filter(Boolean),
      timeline,
      location,
      isPhysical
    });

    setIsCreateProjectOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="w-full max-w-2xl bg-[#0a1122] border border-slate-800 rounded-2xl p-6 space-y-5 shadow-2xl my-8">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Launch New Project Workspace</h2>
              <p className="text-xs text-slate-400">Initialize a dedicated verifiable workspace on CraftHub</p>
            </div>
          </div>
          <button
            onClick={() => setIsCreateProjectOpen(false)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Project Title <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Solar-Powered Subsurface Salinity Sensor"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Primary Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ProjectCategory)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Hardware">Hardware / Embedded</option>
                <option value="IoT">IoT / Telemetry</option>
                <option value="Robotics">Robotics & Mechatronics</option>
                <option value="Research">Academic Research</option>
                <option value="AI / ML">AI / Edge Intelligence</option>
                <option value="Software">Open Source Software</option>
                <option value="HealthTech">HealthTech / Biotech</option>
                <option value="Renewable Energy">Renewable Energy</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Short Tagline
            </label>
            <input
              type="text"
              placeholder="A brief 1-sentence synopsis of what is being built"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Initial Stage</label>
              <select
                value={stage}
                onChange={(e) => setStage(e.target.value as ProjectStage)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white"
              >
                <option value="Ideation">Ideation</option>
                <option value="Prototyping">Prototyping</option>
                <option value="Validation">Validation</option>
                <option value="Scaling">Scaling</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Visibility</label>
              <select
                value={visibility}
                onChange={(e) => setVisibility(e.target.value as VisibilityType)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white"
              >
                <option value="Public">Public Workspace</option>
                <option value="Open Source">Open Source (OSHW)</option>
                <option value="Private">Private / Limited</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Timeline</label>
              <input
                type="text"
                placeholder="e.g. 3 months"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Problem Statement
            </label>
            <textarea
              rows={2}
              placeholder="What real-world engineering or scientific problem does this tackle?"
              value={problemStatement}
              onChange={(e) => setProblemStatement(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Required Skills (comma separated)
            </label>
            <input
              type="text"
              placeholder="e.g. ESP32, KiCAD, SolidWorks, MQTT, React"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Physical fabrication toggle */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
            <input
              type="checkbox"
              id="isPhysical"
              checked={isPhysical}
              onChange={(e) => setIsPhysical(e.target.checked)}
              className="w-4 h-4 rounded text-cyan-500 focus:ring-0 cursor-pointer"
            />
            <label htmlFor="isPhysical" className="cursor-pointer">
              <span className="text-white font-bold block">Requires Physical Fabrication / Laboratory Access</span>
              <span className="text-slate-400 text-[11px] block">
                Automatically matches your workspace with regional partner labs, CNC mills, and SMT assembly lines.
              </span>
            </label>
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsCreateProjectOpen(false)}
              className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 text-white font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
            >
              Create Workspace
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
