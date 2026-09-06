import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { LandingPage } from './components/landing/LandingPage';
import { DashboardView } from './components/dashboard/DashboardView';
import { ExploreView } from './components/explore/ExploreView';
import { ProjectsView } from './components/project/ProjectsView';
import { ProjectWorkspace } from './components/project/ProjectWorkspace';
import { ContributionView } from './components/contribution/ContributionView';
import { CommunityFeed } from './components/feed/CommunityFeed';
import { OpportunitiesView } from './components/opportunities/OpportunitiesView';
import { LearningView } from './components/learning/LearningView';
import { InfrastructureView } from './components/infrastructure/InfrastructureView';
import { LocationMapView } from './components/map/LocationMapView';
import { UserProfileView } from './components/profile/UserProfileView';
import { StartupView } from './components/startups/StartupView';
import { BusinessView } from './components/businesses/BusinessView';
import { ResearchView } from './components/research/ResearchView';
import { AiInsightsView } from './components/ai/AiInsightsView';
import { AdminView } from './components/admin/AdminView';
import { VerificationLevelsView } from './components/verification/VerificationLevelsView';
import { AuthModal } from './components/auth/AuthModal';
import { CreateProjectModal } from './components/modals/CreateProjectModal';

const AppContent: React.FC = () => {
  const { currentView } = useApp();

  // If on public landing page view, render full landing page layout
  if (currentView === 'landing') {
    return (
      <div className="min-h-screen bg-[#060b19] text-slate-100 selection:bg-blue-500 selection:text-white">
        <LandingPage />
        <AuthModal />
        <CreateProjectModal />
      </div>
    );
  }

  // App Layout with Sidebar, Header, and View router
  return (
    <div className="flex h-screen bg-[#060b19] text-slate-100 overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Collapsible/Responsive Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#060b19]">
        {/* Universal Header with Search, Role Switcher, Notifications, User */}
        <Header />

        {/* Scrollable View Canvas */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-[#060b19]">
          {currentView === 'dashboard' && <DashboardView />}
          {currentView === 'explore' && <ExploreView />}
          {currentView === 'projects' && <ProjectsView />}
          {currentView === 'project-workspace' && <ProjectWorkspace />}
          {currentView === 'submit-contribution' && <ContributionView />}
          {currentView === 'feed' && <CommunityFeed />}
          {currentView === 'opportunities' && <OpportunitiesView />}
          {(currentView === 'learning' || currentView === 'learn') && <LearningView />}
          {currentView === 'infrastructure' && <InfrastructureView />}
          {currentView === 'map' && <LocationMapView />}
          {(currentView === 'profile' || currentView === 'portfolio') && <UserProfileView />}
          {currentView === 'verification-levels' && <VerificationLevelsView />}
          {currentView === 'startups' && <StartupView />}
          {currentView === 'businesses' && <BusinessView />}
          {currentView === 'research' && <ResearchView />}
          {currentView === 'ai-insights' && <AiInsightsView />}
          {currentView === 'admin' && <AdminView />}
          {currentView === 'messages' && <CommunityFeed />}
        </main>
      </div>

      {/* Global Modals */}
      <AuthModal />
      <CreateProjectModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
