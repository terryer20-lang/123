import { MenuItem, ChallengeQuestion, SafetyQuestion, NotificationItem, KnowledgeCard } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {id: "star-challenge", icon: "⭐", text: "领保之星挑战赛", path: "/challenge"},
  {id: "safety-test", icon: "📊", text: "海外旅行安全指数", path: "/safety-index"},
  {id: "going-abroad", icon: "✈️", text: "我即将出国", path: "/prepare"},
  {id: "overseas-help", icon: "🆘", text: "我在海外遇到困难", path: "/help"},
  {id: "emergency", icon: "🚨", text: "紧急求助专区", path: "/emergency"},
  {id: "consular-protection", icon: "🛡️", text: "领事保护与协助", path: "/protection"},
  {id: "resident-rights", icon: "📜", text: "居民身份权利", path: "/rights"},
  {id: "videos", icon: "🎥", text: "一分钟短片集", path: "/multimedia"},
  {id: "podcasts", icon: "🎙️", text: "播客集", path: "/multimedia"},
  {id: "events", icon: "📅", text: "活动日程", path: "/events"},
  {id: "resources", icon: "📚", text: "资源专区", path: "/resources"},
  {id: "contact", icon: "📞", text: "联络我们", path: "/contact"}
];

export const EXTERNAL_LINKS = {
  emergencyHotline: "+85312308",
  consulateFinder: "https://www.fmprc.gov.cn/web/wjb_673085/zwjg_673153/",
};

export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  { id: '1', date: '2026-03-15', title: '最新旅游警示更新：东南亚地区', link: '#' },
  { id: '2', date: '2026-02-28', title: '更换特区护照新规定说明会', link: '#' },
  { id: '3', date: '2026-01-10', title: '2026年度领保之星招募计划', link: '#' },
  { id: '4', date: '2025-12-24', title: '圣诞假期海外出行安全提示', link: '#' },
];

export const KNOWLEDGE_CARDS: KnowledgeCard[] = [
  {
    id: '1',
    title: '如何遗失护照？',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80', // Venice/Travel like
    link: '/resources'
  },
  {
    id: '2',
    title: '紧急联络方式',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80', // City/Urban
    link: '/emergency'
  },
  {
    id: '3',
    title: '领事保护范围',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', // Sea/Bridge
    link: '/protection'
  }
];

export const QUIZ_DATA: ChallengeQuestion[] = [
  {
    id: 1,
    question: "在国外丢失护照，应该首先做什么？",
    options: ["立即回国", "向当地警方报案并联系使领馆", "在社交媒体发布求助", "寻找当地华人社团"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "外交部全球领事保护与服务应急热线是多少？",
    options: ["12345", "110", "12308", "911"],
    correctAnswer: 2
  }
];

export const SAFETY_QUESTIONS: SafetyQuestion[] = [
  { id: 1, question: "您是否购买了涵盖医疗和意外的旅行保险？", category: 'health', weight: 10 },
  { id: 2, question: "您是否了解目的地的治安状况和常见犯罪手段？", category: 'crime', weight: 10 },
  { id: 3, question: "您是否登记了外交部'出国及海外中国公民自愿登记'？", category: 'political', weight: 10 },
  { id: 4, question: "您是否备份了护照和签证复印件？", category: 'crime', weight: 10 },
  { id: 5, question: "您是否了解当地的急救电话和使领馆联系方式？", category: 'health', weight: 10 },
];