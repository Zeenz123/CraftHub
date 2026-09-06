import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  UserProfile, 
  UserRole, 
  Project, 
  Opportunity, 
  CourseModule, 
  InfrastructureFacility, 
  FeedPost, 
  StartupEntity, 
  NotificationItem,
  Contribution,
  VerificationLevel
} from '../types';
import { 
  INITIAL_USER, 
  MOCK_PROJECTS, 
  MOCK_OPPORTUNITIES, 
  MOCK_LEARNING_MODULES, 
  MOCK_FACILITIES, 
  MOCK_FEED_POSTS, 
  MOCK_STARTUPS, 
  MOCK_NOTIFICATIONS 
} from '../mockData';

export type AppView = 
  | 'landing'
  | 'dashboard'
  | 'explore'
  | 'projects'
  | 'project-workspace'
  | 'submit-contribution'
  | 'feed'
  | 'opportunities'
  | 'learn'
  | 'learning'
  | 'infrastructure'
  | 'map'
  | 'portfolio'
  | 'profile'
  | 'startups'
  | 'businesses'
  | 'research'
  | 'ai-insights'
  | 'admin'
  | 'messages'
  | 'notifications'
  | 'verification-levels';

interface AppContextType {
  currentUser: UserProfile;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserProfile>>;
  switchRole: (role: UserRole) => void;
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  selectedProjectId: string;
  setSelectedProjectId: (id: string) => void;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  activeProject: Project;
  opportunities: Opportunity[];
  appliedOpportunityIds: string[];
  applyToOpportunity: (id: string) => void;
  feedPosts: FeedPost[];
  toggleLikePost: (postId: string) => void;
  addFeedPost: (newPost: Omit<FeedPost, 'id' | 'likes' | 'comments' | 'shares' | 'collaboratorsInterested' | 'timestamp'>) => void;
  facilities: InfrastructureFacility[];
  requestFacility: (facilityId: string, projectName: string, hours: string, notes: string) => void;
  courses: CourseModule[];
  updateCourseProgress: (courseId: string, progress: number) => void;
  notifications: NotificationItem[];
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  authModalMode: 'login' | 'signup' | 'levels';
  setAuthModalMode: (mode: 'login' | 'signup' | 'levels') => void;
  isCreateProjectOpen: boolean;
  setIsCreateProjectOpen: (open: boolean) => void;
  selectedFacility: InfrastructureFacility | null;
  setSelectedFacility: (fac: InfrastructureFacility | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  savedItemIds: string[];
  toggleSaveItem: (id: string) => void;
  contributions: Contribution[];
  submitContribution: (contribution: Omit<Contribution, 'id' | 'date' | 'status'>) => void;
  createNewProject: (newProj: Partial<Project>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('crafthub_user');
      if (saved) {
        const parsed = JSON.parse(saved);
        const name = (!parsed.name || parsed.name === 'Aman Kumar' || parsed.name === 'Aman') ? 'Zaman' : parsed.name;
        const handle = (!parsed.handle || parsed.handle === '@aman' || parsed.handle === '@amankumar') ? '@zaman' : parsed.handle;
        return {
          ...INITIAL_USER,
          ...parsed,
          name,
          handle
        };
      }
    } catch (e) {
      console.error('Failed to parse saved user', e);
    }
    return INITIAL_USER;
  });

  const [currentView, setCurrentView] = useState<AppView>('research');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('proj-01');
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [opportunities, setOpportunities] = useState<Opportunity[]>(MOCK_OPPORTUNITIES);
  const [appliedOpportunityIds, setAppliedOpportunityIds] = useState<string[]>(['opp-1']);
  const [feedPosts, setFeedPosts] = useState<FeedPost[]>(MOCK_FEED_POSTS);
  const [facilities, setFacilities] = useState<InfrastructureFacility[]>(MOCK_FACILITIES);
  const [courses, setCourses] = useState<CourseModule[]>(MOCK_LEARNING_MODULES);
  const [notifications, setNotifications] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup' | 'levels'>('signup');
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState<boolean>(false);
  const [selectedFacility, setSelectedFacility] = useState<InfrastructureFacility | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [savedItemIds, setSavedItemIds] = useState<string[]>(['proj-01', 'opp-2']);
  
  const [contributions, setContributions] = useState<Contribution[]>([
    {
      id: 'contrib-01',
      projectId: 'proj-01',
      projectTitle: 'Autonomous Rover',
      taskId: 'task-1',
      taskTitle: 'Computer Vision: Stereoscopic Depth Map SLAM Tuning',
      contributor: {
        name: 'Zaman',
        avatar: '/assets/images/tech_robotics_01.jpg',
        handle: '@zaman',
        level: 2
      },
      type: 'Code',
      title: 'Added CUDA-accelerated depth disparity node and obstacle boundary filters',
      description: 'Implemented real-time moving average filter on the stereoscopic disparity maps with point-cloud boundary classification for rough terrain.',
      evidenceFiles: ['stereoscopic_slam_node.py', 'terrain_nav_test_log.bag'],
      repoOrLink: 'https://github.com/crafthub-ecosystem/autonomous-rover-ros2/pull/8',
      date: 'Yesterday at 16:40',
      status: 'Verified',
      authorizedBy: 'Zaman (Project Lead)',
      skillsUsed: ['Python', 'ROS2', 'OpenCV', 'CUDA']
    }
  ]);

  useEffect(() => {
    localStorage.setItem('crafthub_user', JSON.stringify(currentUser));
  }, [currentUser]);

  const activeProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  const switchRole = (role: UserRole) => {
    let newLevel: VerificationLevel = 2;
    let headline = 'IoT & Embedded Systems Enthusiast | IIT Delhi ECE';
    let organization = 'Indian Institute of Technology Delhi';

    if (role === 'professional') {
      newLevel = 3;
      headline = 'Senior Mechatronics & Embedded Systems Architect';
      organization = 'RoboTech Solutions';
    } else if (role === 'startup') {
      newLevel = 4;
      headline = 'Founder & CEO @ AgroSense Labs | CleanTech Builder';
      organization = 'AgroSense Labs Pvt Ltd';
    } else if (role === 'business') {
      newLevel = 4;
      headline = 'VP of Advanced Engineering & Manufacturing Operations';
      organization = 'TechFab Industrial Automation';
    } else if (role === 'researcher') {
      newLevel = 3;
      headline = 'Principal Investigator — Sustainable Energy & Sensor Mesh';
      organization = 'IISc Center for Sustainable Technologies';
    } else if (role === 'facility') {
      newLevel = 5;
      headline = 'Lab Director & Cleanroom Infrastructure Supervisor';
      organization = 'IIT Delhi Nanoscale Research Facility';
    } else if (role === 'visitor') {
      newLevel = 0;
      headline = 'Guest Explorer';
      organization = 'Visitor';
    }

    setCurrentUser(prev => ({
      ...prev,
      role,
      verificationLevel: newLevel,
      headline,
      organization
    }));
  };

  const applyToOpportunity = (id: string) => {
    if (!appliedOpportunityIds.includes(id)) {
      setAppliedOpportunityIds(prev => [...prev, id]);
      const opp = opportunities.find(o => o.id === id);
      const newNotif: NotificationItem = {
        id: `notif-${Date.now()}`,
        type: 'opportunity',
        title: 'Application Submitted!',
        description: `Your application for "${opp?.title || 'Role'}" has been forwarded to ${opp?.organization || 'the review team'}.`,
        timestamp: 'Just now',
        isRead: false
      };
      setNotifications(prev => [newNotif, ...prev]);
    }
  };

  const toggleLikePost = (postId: string) => {
    setFeedPosts(prev => prev.map(post => {
      if (post.id === postId) {
        const wasLiked = post.isLiked;
        return {
          ...post,
          isLiked: !wasLiked,
          likes: wasLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const addFeedPost = (newPost: Omit<FeedPost, 'id' | 'likes' | 'comments' | 'shares' | 'collaboratorsInterested' | 'timestamp'>) => {
    const post: FeedPost = {
      ...newPost,
      id: `post-${Date.now()}`,
      likes: 0,
      comments: 0,
      shares: 0,
      collaboratorsInterested: 0,
      timestamp: 'Just now'
    };
    setFeedPosts(prev => [post, ...prev]);
  };

  const requestFacility = (facilityId: string, projectName: string, hours: string, notes: string) => {
    const fac = facilities.find(f => f.id === facilityId);
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      type: 'project',
      title: 'Facility Slot Requested',
      description: `Request for ${fac?.name || 'facility'} (${hours} hrs) submitted for project "${projectName}".`,
      timestamp: 'Just now',
      isRead: false
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const updateCourseProgress = (courseId: string, progress: number) => {
    setCourses(prev => prev.map(c => c.id === courseId ? { ...c, progress } : c));
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const toggleSaveItem = (id: string) => {
    setSavedItemIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const submitContribution = (data: Omit<Contribution, 'id' | 'date' | 'status'>) => {
    const newContrib: Contribution = {
      ...data,
      id: `contrib-${Date.now()}`,
      date: 'Just now',
      status: 'Pending Review'
    };
    setContributions(prev => [newContrib, ...prev]);

    // Add to project progress
    setProjects(prev => prev.map(p => {
      if (p.id === data.projectId) {
        return {
          ...p,
          progress: Math.min(100, p.progress + 5),
          currentContributors: p.currentContributors + 1
        };
      }
      return p;
    }));

    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      type: 'contribution',
      title: 'Contribution Recorded',
      description: `"${data.title}" submitted to ${data.projectTitle}. Awaiting maintainer review.`,
      timestamp: 'Just now',
      isRead: false
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const createNewProject = (newProj: Partial<Project>) => {
    const project: Project = {
      id: `proj-${Date.now()}`,
      code: `CH-PROJ-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      title: newProj.title || 'Untitled Innovation Project',
      tagline: newProj.tagline || 'Open ecosystem collaborative technology project.',
      description: newProj.description || 'Project description and methodology.',
      problemStatement: newProj.problemStatement || 'Targeted problem statement.',
      objective: newProj.objective || 'Measurable technical milestone objective.',
      category: newProj.category || 'Hardware',
      stage: newProj.stage || 'Design',
      progress: 10,
      owner: {
        name: currentUser.name,
        avatar: currentUser.avatar,
        role: 'Project Creator',
        organization: currentUser.organization
      },
      location: newProj.location || currentUser.location,
      timeline: newProj.timeline || '3 months',
      skillLevel: newProj.skillLevel || 'Beginner - Intermediate',
      visibility: newProj.visibility || 'Public',
      isPhysical: newProj.isPhysical ?? true,
      requiredSkills: newProj.requiredSkills || ['Prototyping', 'Testing'],
      currentContributors: 1,
      maxContributors: newProj.maxContributors || 10,
      openTasksCount: 2,
      verified: false,
      coverImage: newProj.coverImage || '/assets/images/card_robotics_intern.jpg',
      views: 1,
      stars: 1,
      createdAt: new Date().toISOString().split('T')[0],
      tasks: [
        {
          id: `task-${Date.now()}-1`,
          title: 'Initial Architecture Specification & BOM',
          description: 'Establish repository structure, bill of materials, and safety guidelines.',
          category: 'Documentation',
          status: 'Open',
          priority: 'High',
          rewardTier: 'Tier 1',
          skillsRequired: ['Technical Writing', 'BOM Analysis'],
          dueDate: '2026-10-15'
        }
      ],
      contributors: [
        {
          id: currentUser.id,
          name: currentUser.name,
          role: 'Project Creator',
          avatar: currentUser.avatar,
          contributionsCount: 1,
          level: currentUser.verificationLevel,
          joinedDate: 'Sep 2026'
        }
      ],
      files: []
    };

    setProjects(prev => [project, ...prev]);
    setSelectedProjectId(project.id);
    setCurrentView('project-workspace');

    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      type: 'project',
      title: 'Project Initialized!',
      description: `Project "${project.title}" (${project.code}) is now active in your workspace.`,
      timestamp: 'Just now',
      isRead: false
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        switchRole,
        currentView,
        setCurrentView,
        selectedProjectId,
        setSelectedProjectId,
        projects,
        setProjects,
        activeProject,
        opportunities,
        appliedOpportunityIds,
        applyToOpportunity,
        feedPosts,
        toggleLikePost,
        addFeedPost,
        facilities,
        requestFacility,
        courses,
        updateCourseProgress,
        notifications,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authModalMode,
        setAuthModalMode,
        isCreateProjectOpen,
        setIsCreateProjectOpen,
        selectedFacility,
        setSelectedFacility,
        searchQuery,
        setSearchQuery,
        savedItemIds,
        toggleSaveItem,
        contributions,
        submitContribution,
        createNewProject
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
