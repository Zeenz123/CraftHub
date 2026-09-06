import React, { useState } from 'react';
import { 
  UploadCloud, 
  CheckCircle2, 
  FolderGit2, 
  FileText, 
  Link as LinkIcon, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Clock,
  Sparkles,
  Info,
  Award,
  Lock
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Contribution } from '../../types';

export const ContributionView: React.FC = () => {
  const { 
    projects, 
    activeProject, 
    currentUser, 
    submitContribution, 
    setCurrentView,
    setSelectedProjectId 
  } = useApp();

  const [selectedProjId, setSelectedProjId] = useState<string>(activeProject.id || projects[0]?.id || '');
  const [selectedTask, setSelectedTask] = useState<string>('Design 3D Enclosure');
  const [type, setType] = useState<string>('Design');
  const [title, setTitle] = useState<string>('Final CAD model for 3D printed enclosure');
  const [description, setDescription] = useState<string>(
    'Designed in Fusion 360, tested for airflow and sensor fit.'
  );
  const [link, setLink] = useState<string>('https://github.com/crafthub-ecosystem/water-monitor-cad');
  const [files, setFiles] = useState<string[]>(['enclosure_v2.step', 'airflow_simulation.stl']);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const selectedProj = projects.find(p => p.id === selectedProjId) || activeProject;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContribution({
      projectId: selectedProj.id,
      projectTitle: selectedProj.title,
      taskId: 'task-submitted',
      taskTitle: selectedTask,
      contributor: {
        name: currentUser.name,
        avatar: currentUser.avatar,
        handle: currentUser.handle,
        level: currentUser.verificationLevel
      },
      type: type as any,
      title,
      description,
      evidenceFiles: files,
      repoOrLink: link,
      skillsUsed: ['CAD', '3D Printing', 'Hardware']
    });
    setIsSubmitted(true);
  };

  return (
    <div id="contribution-page" className="p-6 space-y-6 max-w-7xl mx-auto font-sans">
      {/* Top Banner matching Screen 8 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Submit Your Contribution
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Add your work and make an impact. Every verifiable submission builds your engineering portfolio.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs px-3 py-1.5 rounded-xl bg-[#0e1d44] text-blue-400 border border-[#1b3470] font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Proof of Work Verification
          </span>
        </div>
      </div>

      {isSubmitted ? (
        <div className="ch-card p-8 text-center max-w-xl mx-auto space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
            <Check className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-white">Contribution Successfully Logged!</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Your submission for <strong>{selectedProj.title}</strong> has been submitted. It is now queued for peer and lead verification.
          </p>

          <div className="flex items-center justify-center gap-3 pt-3">
            <button
              onClick={() => {
                setSelectedProjectId(selectedProj.id);
                setCurrentView('project-workspace');
              }}
              className="ch-btn-primary px-5 py-2 text-xs"
            >
              Go to Workspace
            </button>
            <button
              onClick={() => setIsSubmitted(false)}
              className="ch-btn-secondary px-4 py-2 text-xs"
            >
              Submit Another
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Form (8 cols) matching Screen 8 */}
          <form onSubmit={handleSubmit} className="lg:col-span-8 ch-card p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Select Project */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Project
                </label>
                <select
                  value={selectedProjId}
                  onChange={(e) => setSelectedProjId(e.target.value)}
                  className="w-full bg-[#091126] border border-[#16254a] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                >
                  {projects.map(p => (
                    <option key={p.id} value={p.id} className="bg-[#091126] text-white">
                      [{p.code}] {p.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Task */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Task
                </label>
                <input 
                  type="text"
                  value={selectedTask}
                  onChange={(e) => setSelectedTask(e.target.value)}
                  className="w-full bg-[#091126] border border-[#16254a] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  placeholder="Task name or milestone"
                />
              </div>
            </div>

            {/* Contribution Type matching Screen 8 */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Contribution Type
              </label>
              <div className="flex flex-wrap gap-2">
                {['Code', 'Design', 'Hardware', 'Research'].map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      type === t
                        ? 'bg-[#1e6bff] text-white border-blue-400 shadow-[0_0_12px_rgba(30,107,255,0.3)]'
                        : 'bg-[#091126] text-slate-400 border-[#16254a] hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Final CAD model for 3D printed enclosure"
                className="w-full bg-[#091126] border border-[#16254a] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Description
              </label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Explain what was implemented or tested..."
                className="w-full bg-[#091126] border border-[#16254a] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500 leading-relaxed"
                required
              />
            </div>

            {/* Link/Repo */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Link / Repository URL
              </label>
              <input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://github.com/..."
                className="w-full bg-[#091126] border border-[#16254a] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Drag & Drop File Upload Area */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Upload Proof Files (CAD, code, logs, photos)
              </label>
              <div className="p-5 rounded-2xl border-2 border-dashed border-[#1d3572] bg-[#091126] hover:border-blue-500/60 transition-all text-center cursor-pointer">
                <UploadCloud className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-xs font-semibold text-white">
                  Drop files here or <span className="text-blue-400 underline">browse</span>
                </p>
                <p className="text-[10px] text-slate-400 mt-1">
                  Supports STEP, STL, ZIP, C/C++, Python, PDF, Schematics (Max 50MB)
                </p>
              </div>

              {files.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {files.map((file, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-[#0e1d44] border border-[#1d3572] text-[11px] text-blue-300 flex items-center gap-1.5">
                      <FileText className="w-3 h-3 text-blue-400" />
                      {file}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full ch-btn-primary py-2.5 text-xs font-bold shadow-lg shadow-blue-500/20"
              >
                Submit for Review
              </button>
            </div>
          </form>

          {/* Right Card: Why Proof of Work Matters matching Screen 8 */}
          <div className="lg:col-span-4 space-y-4">
            <div className="ch-card p-5 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[#16254a]">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  Why Proof of Work Matters
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0e1d44] border border-[#1d3572] flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Verifiable Skills</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                      Every verified contribution is anchored to your cryptographic multi-portfolio ledger.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0e1d44] border border-[#1d3572] flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Unlock Opportunities</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                      Verified contributors are prioritized for paid venture grants, hiring bounties, and lab access.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0e1d44] border border-[#1d3572] flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Reputation & Badges</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                      Earn on-chain badges validated by institutional faculty and industry leads.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Pill */}
            <div className="p-4 rounded-2xl bg-[#091126] border border-[#16254a] text-center">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                Average Review Turnaround
              </span>
              <div className="text-xl font-extrabold text-blue-400 mt-1">24 - 48 Hours</div>
              <p className="text-[10px] text-slate-500 mt-0.5">Verified by 2 peer reviewers</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
