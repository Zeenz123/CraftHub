import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Mail, 
  Lock, 
  Building, 
  User, 
  GraduationCap, 
  Briefcase, 
  Rocket, 
  FlaskConical, 
  Cpu, 
  Factory, 
  HeartHandshake, 
  Code, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { UserRole, VerificationLevel } from '../../types';

export const AuthModal: React.FC = () => {
  const { 
    isAuthModalOpen, 
    setIsAuthModalOpen, 
    authModalMode, 
    setAuthModalMode,
    currentUser,
    switchRole,
    setCurrentUser
  } = useApp();

  const [signupStep, setSignupStep] = useState<number>(1);
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    organization: '',
    rememberMe: true
  });

  if (!isAuthModalOpen) return null;

  const roleCards: { role: UserRole; title: string; subtitle: string; icon: any }[] = [
    { role: 'student', title: 'Student', subtitle: 'Learn & Contribute', icon: GraduationCap },
    { role: 'professional', title: 'Individual', subtitle: 'Explore & Build', icon: User },
    { role: 'professional', title: 'Professional', subtitle: 'Work & Collaborate', icon: Briefcase },
    { role: 'startup', title: 'Startup', subtitle: 'Build & Grow', icon: Rocket },
    { role: 'business', title: 'Business', subtitle: 'Innovate & Scale', icon: Building },
    { role: 'researcher', title: 'Researcher', subtitle: 'Research & Publish', icon: FlaskConical },
    { role: 'researcher', title: 'University', subtitle: 'Educate & Share', icon: GraduationCap },
    { role: 'facility', title: 'Laboratory', subtitle: 'Provide & Share', icon: Cpu },
    { role: 'business', title: 'Factory', subtitle: 'Manufacture & Scale', icon: Factory },
    { role: 'student', title: 'Volunteer', subtitle: 'Support & Contribute', icon: HeartHandshake },
    { role: 'professional', title: 'Hobbyist', subtitle: 'Create & Learn', icon: Sparkles },
    { role: 'professional', title: 'Open Source', subtitle: 'Build for Everyone', icon: Code },
  ];

  const levels: { level: VerificationLevel; title: string; desc: string; status: string; current: boolean }[] = [
    {
      level: 0,
      title: 'Level 0 — Visitor',
      desc: 'Browse public projects, read open opportunities, and explore published technical reports.',
      status: currentUser.verificationLevel >= 0 ? 'Active' : 'Locked',
      current: currentUser.verificationLevel === 0
    },
    {
      level: 1,
      title: 'Level 1 — Basic Individual',
      desc: 'Create individual maker profile, enroll in modular learning courses, bookmark workspaces.',
      status: currentUser.verificationLevel >= 1 ? 'Active' : 'Get Started',
      current: currentUser.verificationLevel === 1
    },
    {
      level: 2,
      title: 'Level 2 — Verified Individual',
      desc: 'Identity and academic/institutional credential verification. Direct contribution submission and pull requests.',
      status: currentUser.verificationLevel >= 2 ? 'Active' : 'Requires ID',
      current: currentUser.verificationLevel === 2
    },
    {
      level: 3,
      title: 'Level 3 — Professional',
      desc: 'Validated professional engineering experience. Lead workspaces, review pull requests, and mentor contributors.',
      status: currentUser.verificationLevel >= 3 ? 'Active' : 'Locked',
      current: currentUser.verificationLevel === 3
    },
    {
      level: 4,
      title: 'Level 4 — Organization',
      desc: 'Corporate, startup, or research group identity. Host workspaces, publish stipended opportunities, and manage teams.',
      status: currentUser.verificationLevel >= 4 ? 'Active' : 'Locked',
      current: currentUser.verificationLevel === 4
    },
    {
      level: 5,
      title: 'Level 5 — Institutional / Infrastructure',
      desc: 'Accredited university, manufacturing factory, or cleanroom facility. Manage physical equipment and machine access.',
      status: currentUser.verificationLevel >= 5 ? 'Active' : 'Locked',
      current: currentUser.verificationLevel === 5
    },
  ];

  const handleCompleteAuth = () => {
    switchRole(selectedRole);
    setCurrentUser(prev => ({
      ...prev,
      name: formData.name ? formData.name : (prev.name?.includes('Aman') ? 'Zaman' : (prev.name || 'Zaman')),
      handle: prev.handle?.includes('aman') ? '@zaman' : (prev.handle || '@zaman'),
      organization: formData.organization || prev.organization
    }));
    setIsAuthModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        id="auth-modal-card"
        className="w-full max-w-2xl bg-[#0a101f] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#080d1a]">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white text-base tracking-tight">CraftHub</span>
            <span className="text-slate-500">•</span>
            <span className="text-xs font-semibold text-slate-300">
              {authModalMode === 'signup' && 'Create Your Account'}
              {authModalMode === 'login' && 'Welcome Back'}
              {authModalMode === 'levels' && 'Grow with Trust — Verification Levels'}
            </span>
          </div>
          <button 
            onClick={() => setIsAuthModalOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content Switch */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* 1. SIGN UP MULTI-STEP */}
          {authModalMode === 'signup' && (
            <div>
              {/* Stepper Progress */}
              <div className="flex items-center justify-between mb-6 px-2">
                {[
                  { step: 1, label: 'Account Type' },
                  { step: 2, label: 'Basic Details' },
                  { step: 3, label: 'Verification' },
                  { step: 4, label: 'Review' },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      signupStep >= s.step 
                        ? 'bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/30' 
                        : 'bg-slate-800 text-slate-500'
                    }`}>
                      {signupStep > s.step ? <Check className="w-3.5 h-3.5" /> : s.step}
                    </div>
                    <span className={`text-xs font-semibold hidden sm:inline ${
                      signupStep === s.step ? 'text-cyan-300' : 'text-slate-400'
                    }`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {signupStep === 1 && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Choose how you want to be part of the ecosystem</h3>
                  <p className="text-xs text-slate-400 mb-5">Select the role that best defines your primary objective in CraftHub.</p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-72 overflow-y-auto pr-1">
                    {roleCards.map((rc, idx) => {
                      const Icon = rc.icon;
                      const isSelected = selectedRole === rc.role;
                      return (
                        <div
                          key={idx}
                          onClick={() => setSelectedRole(rc.role)}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-cyan-950/40 border-cyan-500 shadow-md shadow-cyan-950/50'
                              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center mb-2 ${
                            isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="text-xs font-bold text-white">{rc.title}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{rc.subtitle}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800">
                    <span className="text-[11px] text-slate-400 italic">"Different journeys. One ecosystem."</span>
                    <button
                      onClick={() => setSignupStep(2)}
                      className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold shadow-md shadow-cyan-500/20 hover:scale-105 transition-transform"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {signupStep === 2 && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Your Identity & Affiliation</h3>
                  <p className="text-xs text-slate-400 mb-5">Enter your basic credentials to construct your initial portfolio.</p>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name or Handle</label>
                      <input 
                        type="text"
                        placeholder="e.g. Zaman"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0d1426] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                      <input 
                        type="email"
                        placeholder="e.g. zaman@iitd.ac.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0d1426] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Organization / Institution / Startup</label>
                      <input 
                        type="text"
                        placeholder="e.g. IIT Delhi or AgroSense Labs"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-[#0d1426] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800">
                    <button
                      onClick={() => setSignupStep(1)}
                      className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setSignupStep(3)}
                      className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold hover:scale-105 transition-transform"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {signupStep === 3 && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Trust Verification Setup</h3>
                  <p className="text-xs text-slate-400 mb-4">CraftHub assigns baseline verification to protect intellectual property and workspace safety.</p>

                  <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/50 mb-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 mb-1">
                      <ShieldCheck className="w-4 h-4" />
                      Assigned Level: Level 2 (Verified Individual)
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Instant student/professional tier unlocked for the demo. Enables direct hardware, firmware, and code pull request submissions.
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Email verification simulated</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Institutional domain matched to verified registry</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800">
                    <button
                      onClick={() => setSignupStep(2)}
                      className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleCompleteAuth}
                      className="px-6 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform"
                    >
                      Enter CraftHub
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2. LOGIN VIEW */}
          {authModalMode === 'login' && (
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Good to see you again!</h3>
              <p className="text-xs text-slate-400 mb-5">Log in to resume your active projects and contributions.</p>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email or Phone</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text"
                      placeholder="Enter your email or phone"
                      defaultValue="zaman@iitd.ac.in"
                      className="w-full bg-[#0d1426] border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-slate-300">Password</label>
                    <a href="#" className="text-[11px] text-cyan-400 hover:underline">Forgot password?</a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      type="password"
                      defaultValue="••••••••••••"
                      placeholder="Enter your password"
                      className="w-full bg-[#0d1426] border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input type="checkbox" id="remember" defaultChecked className="rounded border-slate-700 bg-slate-900 text-cyan-500" />
                  <label htmlFor="remember" className="text-xs text-slate-400">Remember me on this device</label>
                </div>

                <button
                  onClick={handleCompleteAuth}
                  className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold shadow-md shadow-cyan-500/20 transition-all"
                >
                  Log In
                </button>
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs text-slate-400">Don't have an account? </span>
                <button
                  onClick={() => setAuthModalMode('signup')}
                  className="text-xs font-bold text-cyan-400 hover:underline"
                >
                  Sign up
                </button>
              </div>
            </div>
          )}

          {/* 3. VERIFICATION LEVELS MODAL VIEW */}
          {authModalMode === 'levels' && (
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Verification Levels (0 to 5)</h3>
              </div>
              <p className="text-xs text-slate-400 mb-5">
                Verification unlocks more opportunities, workspace permissions, lab access, and high-trust collaborations.
              </p>

              <div className="space-y-2.5">
                {levels.map((lvl) => (
                  <div
                    key={lvl.level}
                    className={`p-3.5 rounded-xl border transition-all ${
                      lvl.current
                        ? 'bg-cyan-950/30 border-cyan-500 shadow-md shadow-cyan-950/40'
                        : 'bg-slate-900/50 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{lvl.title}</span>
                        {lvl.current && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500 text-slate-950 font-bold">
                            Current
                          </span>
                        )}
                      </div>
                      <span className={`text-[11px] px-2 py-0.5 rounded font-semibold ${
                        lvl.status === 'Active'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {lvl.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{lvl.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
