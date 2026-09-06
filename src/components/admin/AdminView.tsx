import React from 'react';
import { 
  Users, 
  Building2, 
  FolderGit2, 
  GitCommit, 
  ShieldCheck, 
  FileText, 
  BarChart3, 
  Filter, 
  Sliders,
  Shield,
  Clock
} from 'lucide-react';

export const AdminView: React.FC = () => {
  const adminTiles = [
    { id: 'adm-1', title: 'Users', icon: Users, desc: 'Manage user profiles, trust scores, and permissions' },
    { id: 'adm-2', title: 'Organizations', icon: Building2, desc: 'Enterprise, startup, and university affiliations' },
    { id: 'adm-3', title: 'Projects', icon: FolderGit2, desc: 'Repository approvals, visibility, and milestones' },
    { id: 'adm-4', title: 'Contributions', icon: GitCommit, desc: 'Proof auditing, dispute resolution, ledger hashing' },
    { id: 'adm-5', title: 'Verification', icon: ShieldCheck, desc: 'KYC, institutional email check, credentials review' },
    { id: 'adm-6', title: 'Reports', icon: FileText, desc: 'Community flags, issue tracking, and compliance logs' },
    { id: 'adm-7', title: 'Analytics', icon: BarChart3, desc: 'Ecosystem velocity, active projects, and lab utilization' },
    { id: 'adm-8', title: 'Content Moderation', icon: Filter, desc: 'Automated spam filtering and copyright inspection' },
    { id: 'adm-9', title: 'System Settings', icon: Sliders, desc: 'Platform configuration, API keys, and rate limits' }
  ];

  return (
    <div id="admin-view" className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-white tracking-tight">Platform Administration</h1>
            <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold flex items-center gap-1">
              <Shield className="w-3 h-3 text-cyan-400" /> Admin Access
            </span>
          </div>
          <p className="text-xs text-slate-400">Manage users, content and ecosystem infrastructure.</p>
        </div>

        <div className="text-right">
          <span className="text-xs text-slate-400">Environment: <strong className="text-emerald-400">Production Node</strong></span>
        </div>
      </div>

      {/* 9 Admin Grid Tiles matching Reference Image Screen 18 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {adminTiles.map((tile) => {
          const Icon = tile.icon;
          return (
            <button
              key={tile.id}
              onClick={() => alert(`Admin module: ${tile.title}. Audited access only.`)}
              className="ch-card p-6 flex flex-col items-center text-center justify-center min-h-[140px] hover:border-blue-500 hover:shadow-[0_0_20px_rgba(30,107,255,0.2)] transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0e1b3d] border border-[#1d3166] flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 group-hover:border-blue-400 transition-all">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{tile.title}</h3>
              <p className="text-[11px] text-slate-400">{tile.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Bottom Inspiration Quote */}
      <div className="pt-8 border-t border-[#192a56]/60 text-center">
        <p className="text-sm text-slate-400 font-medium italic">
          “A more capable, collaborative and innovative tomorrow.”
        </p>
      </div>
    </div>
  );
};
