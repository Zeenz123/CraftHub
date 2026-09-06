export type UserRole = 
  | 'student' 
  | 'professional' 
  | 'startup' 
  | 'business' 
  | 'researcher' 
  | 'facility'
  | 'visitor';

export type VerificationLevel = 0 | 1 | 2 | 3 | 4 | 5;

export type ProjectCategory = 
  | 'Software' 
  | 'Hardware' 
  | 'Electronics' 
  | 'PCB' 
  | 'Robotics' 
  | 'Research' 
  | 'AI / ML' 
  | 'Manufacturing' 
  | 'CleanTech' 
  | 'Biotech' 
  | 'Open Source' 
  | 'Social Impact';

export type ProjectStage = 'Concept' | 'Design' | 'Prototype' | 'Testing' | 'Production' | 'Active' | 'Completed' | 'Open';

export type ContributionStatus = 'Verified' | 'Pending Review' | 'Unverified';

export type RewardTier = 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Tier 4' | 'Tier 5';

export interface UserProfile {
  id: string;
  name: string;
  handle: string;
  role: UserRole;
  headline: string;
  avatar: string;
  coverImage?: string;
  bio: string;
  location: string;
  verificationLevel: VerificationLevel;
  organization?: string;
  skills: string[];
  learningProgress: number;
  stats: {
    projects: number;
    contributions: number;
    skillsCount: number;
    certificates: number;
    opportunitiesCount: number;
  };
  portfolios: {
    personal: boolean;
    startups: string[];
    businesses: string[];
    research: string[];
    facilities: string[];
  };
}

export interface ProjectTask {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'Open' | 'In Progress' | 'Under Review' | 'Completed';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  rewardTier: RewardTier;
  assignee?: {
    name: string;
    avatar: string;
  };
  skillsRequired: string[];
  dueDate: string;
}

export interface ProjectContributor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  contributionsCount: number;
  level: VerificationLevel;
  joinedDate: string;
}

export interface ProjectFile {
  id: string;
  name: string;
  size: string;
  type: string;
  updatedAt: string;
  uploadedBy: string;
}

export type VisibilityType = 'Public' | 'Private' | 'Private Team' | 'Open Source' | 'Limited Collaboration';

export interface Project {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  problemStatement: string;
  objective: string;
  category: ProjectCategory;
  stage: ProjectStage;
  progress: number;
  owner: {
    name: string;
    avatar: string;
    role: string;
    organization?: string;
  };
  location: string;
  timeline: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Beginner - Intermediate' | 'Intermediate - Advanced' | 'All Levels';
  visibility: VisibilityType;
  isPhysical: boolean;
  requiredSkills: string[];
  currentContributors: number;
  maxContributors: number;
  openTasksCount: number;
  verified: boolean;
  tasks: ProjectTask[];
  contributors: ProjectContributor[];
  files: ProjectFile[];
  coverImage: string;
  views: number;
  stars: number;
  createdAt: string;
}

export interface Contribution {
  id: string;
  projectId: string;
  projectTitle: string;
  taskId?: string;
  taskTitle?: string;
  contributor: {
    name: string;
    avatar: string;
    handle: string;
    level: VerificationLevel;
  };
  type: 'Code' | 'Hardware' | 'PCB' | 'Research' | 'Documentation' | 'Analysis' | 'Design' | 'Testing' | 'Manufacturing';
  title: string;
  description: string;
  evidenceFiles: string[];
  repoOrLink?: string;
  date: string;
  status: ContributionStatus;
  authorizedBy?: string;
  skillsUsed: string[];
}

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  orgLogo?: string;
  orgType: 'Startup' | 'Business' | 'Research Lab' | 'Open Source' | 'Institution';
  category: 'Project Contribution' | 'Paid Internship' | 'Non-paid Internship' | 'Research Assistant' | 'Volunteer' | 'Hardware Testing' | 'Lab Access';
  location: string;
  isRemote: boolean;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rewardTier: RewardTier;
  rewardDetails: string;
  skillsRequired: string[];
  description: string;
  verificationRequired: VerificationLevel;
  deadline: string;
  applicantsCount: number;
  postedDate: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  modulesCount: number;
  enrolledCount: number;
  rating: number;
  progress?: number;
  thumbnail: string;
  skillsTaught: string[];
  linkedProjectsCount: number;
}

export interface InfrastructureFacility {
  id: string;
  name: string;
  type: 'Electronics & PCB' | '3D Printing' | 'CNC Machining' | 'Robotics' | 'Semiconductor' | 'Testing & Calibration' | 'Supercomputing';
  institution: string;
  location: string;
  coordinates: { x: number; y: number };
  distance: string;
  equipment: string[];
  capacity: string;
  availability: 'Immediate' | 'Waitlist (2 days)' | 'Booking Required' | 'High Demand';
  supportedWork: string[];
  provider: string;
  hourlyRate?: string;
  status: 'Available' | 'Reserved' | 'Under Maintenance';
  image: string;
}

export interface FeedPost {
  id: string;
  author: {
    name: string;
    avatar: string;
    handle: string;
    role: string;
    verificationLevel: VerificationLevel;
  };
  project?: {
    id: string;
    title: string;
    code: string;
    progress: number;
  };
  type: 'PROJECT UPDATE' | 'TECHNICAL WORK' | 'RESEARCH PAPER' | 'PROTOTYPE MILESTONE' | 'CONTRIBUTION VERIFIED' | 'EQUIPMENT DEMAND';
  title?: string;
  content: string;
  mediaUrl?: string;
  skillsUsed: string[];
  task?: string;
  contributionStatus?: ContributionStatus;
  likes: number;
  comments: number;
  shares: number;
  collaboratorsInterested: number;
  timestamp: string;
  isLiked?: boolean;
}

export interface StartupEntity {
  id: string;
  name: string;
  tagline: string;
  founder: string;
  stage: 'Idea' | 'Prototype' | 'Seed' | 'Early Stage' | 'Growth';
  category: string;
  teamSize: number;
  problem: string;
  solution: string;
  openRoles: number;
  infrastructureNeeded: string[];
  fundingStatus: string;
  logo: string;
  location?: string;
  coverImage?: string;
}

export interface BusinessEntity {
  id: string;
  name: string;
  tagline: string;
  category: string;
  location: string;
  type: 'Industry Leader' | 'Innovative SME' | 'Social Enterprise' | 'Global Player' | 'Corporate Partner';
  tags: string[];
  coverImage: string;
  logo: string;
  description: string;
  openProjects: number;
  openRoles: number;
  partnershipOpportunities: number;
}

export interface ResearchPaper {
  id: string;
  title: string;
  category: string;
  journal: string;
  year: number;
  authors: string[];
  abstract: string;
  citations: number;
  coverImage: string;
  doi?: string;
  pdfUrl?: string;
}

export interface NotificationItem {
  id: string;
  type: 'project' | 'contribution' | 'opportunity' | 'verification' | 'message' | 'system';
  title: string;
  description: string;
  timestamp: string;
  isRead: boolean;
  link?: string;
}

export interface DirectMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  message: string;
  timestamp: string;
  isSelf: boolean;
  channelId?: string;
}
