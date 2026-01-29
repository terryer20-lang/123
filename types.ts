export interface MenuItem {
  id: string;
  icon: string;
  text: string;
  path: string;
}

export interface ChallengeQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface SafetyQuestion {
  id: number;
  question: string;
  category: 'health' | 'crime' | 'political' | 'nature';
  weight: number;
}

export interface NotificationItem {
  id: string;
  date: string;
  title: string;
  link: string;
}

export interface KnowledgeCard {
  id: string;
  title: string;
  image: string;
  link: string;
}

export enum SafetyRating {
  LOW = "低风险",
  MEDIUM = "中等风险",
  HIGH = "高风险"
}