import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  ExternalLink,
  Users,
  Building2,
  Cpu
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const VerificationLevelsView: React.FC = () => {
  const { currentUser, setCurrentUser } = useApp();

  const levels = [
    {
      level: 0,
      title: 'Level 0 - Visitor',
      description: 'Browse, explore, learn',
      requirements: 'Public unregistered or anonymous browsing',
      unlockedFeatures: 'Read public projects, browse learn modules, view community feed',
      badge: 'Current'
    },
    {
      level: 1,
      title: 'Level 1 - Basic Individual',
      description: 'Create basic profile, join projects',
      requirements: 'Verified email & GitHub / LinkedIn login',
      unlockedFeatures: 'Submit project contributions, bookmark opportunities, comment in feed',
      badge: 'Get Started'
    },
    {
      level: 2,
      title: 'Level 2 - Verified Individual',
      description: 'Identity verification, more access',
      requirements: 'Academic affiliation or government KYC check',
      unlockedFeatures: 'Claim task stipends, apply to Tier 2/3 opportunities, request lab hours',
      badge: 'Requires KYC'
    },
    {
      level: 3,
      title: 'Level 3 - Professional',
      description: 'Show experience, work history',
      requirements: 'Proven technical portfolio or corporate engineering role',
      unlockedFeatures: 'Lead open-source projects, review pull requests, create startup bounties',
      badge: 'Locked'
    },
    {
      level: 4,
      title: 'Level 4 - Organization',
      description: 'For startups, businesses, research groups',
      requirements: 'Company incorporation or registered venture syndicate',
      unlockedFeatures: 'Post paid internships, fund bounties, recruit verified contributors',
      badge: 'Locked'
    },
    {
      level: 5,
      title: 'Level 5 - Institutional / Infrastructure',
      description: 'For universities, labs, factories',
      requirements: 'Authorized institutional signatory & laboratory audit',
      unlockedFeatures: 'List CNC / PCB facilities, issue recognized academic credentials',
      badge: 'Locked'
    }
  ];

  const handleLevelSelect = (lvl: number) => {
    setCurrentUser(prev => ({
      ...prev,
      verificationLevel: lvl
    }));
  };

  return (
    <div id="verification-levels-view" className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Trust & Identity Architecture</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Grow with Trust</h1>
        <p className="text-sm text-slate-400">
          Verification unlocks more opportunities, hardware access, and institutional credibility.
        </p>
      </div>

      {/* Levels List matching Screen 4 in Reference Image */}
      <div className="space-y-3">
        {levels.map((item) => {
          const isUserLevel = currentUser.verificationLevel === item.level;
          const isHigher = currentUser.verificationLevel >= item.level;

          return (
            <div
              key={item.level}
              className={`ch-card p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                isUserLevel 
                  ? 'border-blue-500/70 bg-[#0d1c44] shadow-[0_0_20px_rgba(30,107,255,0.2)]'
                  : 'hover:border-[#28468a]'
              }`}
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                  isUserLevel 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : isHigher
                      ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-400'
                      : 'bg-[#111e44] border border-[#1e3060] text-slate-400'
                }`}>
                  {isHigher && !isUserLevel ? <CheckCircle2 className="w-5 h-5" /> : `L${item.level}`}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    {isUserLevel && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                        Current Level
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
                  <p className="text-[11px] text-blue-300/80 mt-1">{item.unlockedFeatures}</p>
                </div>
              </div>

              {/* Action / Badge matching Screen 4 */}
              <div className="flex items-center justify-end sm:shrink-0">
                {isUserLevel ? (
                  <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                    Active
                  </span>
                ) : item.level === 1 ? (
                  <button 
                    onClick={() => handleLevelSelect(1)}
                    className="ch-btn-primary px-4 py-1.5 text-xs font-semibold"
                  >
                    Get Started
                  </button>
                ) : item.level === 2 ? (
                  <button 
                    onClick={() => handleLevelSelect(2)}
                    className="ch-btn-secondary px-4 py-1.5 text-xs font-semibold"
                  >
                    Requires KYC
                  </button>
                ) : (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#091126] border border-[#142247] text-slate-500 text-xs font-medium">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Locked</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
