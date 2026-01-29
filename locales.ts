export type LanguageCode = 'zh-MO' | 'zh-CN' | 'en' | 'pt';

export const LANGUAGE_LABELS: Record<LanguageCode, string> = {
  'zh-MO': '繁',
  'zh-CN': '简',
  'en': 'EN',
  'pt': 'PT'
};

export const translations = {
  "zh-MO": {
    app: {
      title: "領事保護",
      copyright: "© 2024 澳門領事保護",
      placeholder: "內容建設中...",
      construction: "🚧"
    },
    menu: {
      title: "功能菜單",
      "star-challenge": "領保之星挑戰賽",
      "safety-test": "海外旅行安全指數",
      "going-abroad": "我即將出國",
      "overseas-help": "我在海外遇到困難",
      "emergency": "緊急求助專區",
      "consular-protection": "領事保護與協助",
      "resident-rights": "居民身份權利",
      "videos": "一分鐘短片集",
      "podcasts": "播客集",
      "events": "活動日程",
      "resources": "資源專區",
      "contact": "聯絡我們"
    },
    home: {
      hero: {
        protection: "領事保護",
        protection_sub: "Protection",
        rights: "居民權利",
        rights_sub: "Rights",
        alerts: "旅遊警示",
        alerts_sub: "Alerts",
        emergency: "緊急熱線",
        emergency_sub: "Hotline",
        scroll: "下滑瀏覽更多"
      },
      knowledge: {
        title: "領保燙知識",
        read: "閱讀",
        label: "KNOWLEDGE"
      },
      notifications: {
        title: "通知面板",
        col_date: "日期",
        col_content: "內容",
        col_download: "下載",
        more: "查看更多通知"
      }
    },
    emergency: {
      title: "外交部全球領事保護與服務\n應急熱線 (24小時)",
      call_btn: "一鍵呼叫",
      location_btn: "尋找附近使領館",
      locating: "正在獲取位置...",
      location_found: "位置已獲取",
      location_error: "無法獲取位置",
      location_unsupported: "您的瀏覽器不支持地理位置服務",
      tips_title: "求助須知",
      tip_1: "遭遇突發緊急情況時，請首先撥打當地報警電話。",
      tip_2: "如需領事協助，請撥打12308熱線。",
      tip_3: "丟失護照請立即向當地警方掛失並聯繫就近使領館補辦旅行證。"
    },
    multimedia: {
      videos_title: "一分鐘短片集",
      swipe_hint: "滑動查看",
      video_title_template: "海外出行安全指南 - 第{{i}}集：證件保管的重要性",
      podcasts_title: "領保播客",
      rss_btn: "RSS 訂閱",
      podcast_title_template: "領事保護真實案例解析 #{{i}}"
    },
    challenge: {
      my_score: "我的積分",
      weekly_challenge: "每週挑戰",
      question_progress: "第 {{current}} / {{total}} 題",
      complete_title: "挑戰完成!",
      points_earned: "本次獲得積分",
      play_again: "再來一次",
      leaderboard_title: "本週排行榜",
      score_suffix: "分"
    },
    safety: {
      intro: "請勾選您已完成的準備事項，系統將評估您的出行安全指數。",
      generate_btn: "生成安全報告",
      result_title: "您的安全指數",
      subjects: {
        health: "健康準備",
        crime: "治安防範",
        political: "政策了解",
        contact: "緊急聯絡",
        docs: "證件備份"
      },
      suggestions: {
        passport: "⚠️ 強烈建議您備份護照首頁及簽證頁，並與原件分開存放。",
        insurance: "⚠️ 醫療費用在海外極其昂貴，請務必購買保險。",
        success: "🎉 您的準備工作非常充分，祝您旅途愉快！",
        title: "改進建議:"
      },
      retake_btn: "重新測試"
    },
    data: {
      notifications: {
        "1": "最新旅遊警示更新：東南亞地區",
        "2": "更換特區護照新規定說明會",
        "3": "2026年度領保之星招募計劃",
        "4": "聖誕假期海外出行安全提示"
      },
      knowledge: {
        "1": "如何遺失護照？",
        "2": "緊急聯絡方式",
        "3": "領事保護範圍"
      },
      quiz: {
        "1": {
          q: "在國外丟失護照，應該首先做什麼？",
          o: ["立即回國", "向當地警方報案並聯繫使領館", "在社交媒體發佈求助", "尋找當地華人社團"]
        },
        "2": {
          q: "外交部全球領事保護與服務應急熱線是多少？",
          o: ["12345", "110", "12308", "911"]
        }
      },
      safety_questions: {
        "1": "您是否購買了涵蓋醫療和意外的旅行保險？",
        "2": "您是否了解目的地的治安狀況和常見犯罪手段？",
        "3": "您是否登記了外交部'出國及海外中國公民自願登記'？",
        "4": "您是否備份了護照和簽證複印件？",
        "5": "您是否了解當地的急救電話和使領館聯繫方式？"
      }
    }
  },
  "zh-CN": {
    app: {
      title: "领事保护",
      copyright: "© 2024 澳门领事保护",
      placeholder: "内容建设中...",
      construction: "🚧"
    },
    menu: {
      title: "功能菜单",
      "star-challenge": "领保之星挑战赛",
      "safety-test": "海外旅行安全指数",
      "going-abroad": "我即将出国",
      "overseas-help": "我在海外遇到困难",
      "emergency": "紧急求助专区",
      "consular-protection": "领事保护与协助",
      "resident-rights": "居民身份权利",
      "videos": "一分钟短片集",
      "podcasts": "播客集",
      "events": "活动日程",
      "resources": "资源专区",
      "contact": "联络我们"
    },
    home: {
      hero: {
        protection: "领事保护",
        protection_sub: "Protection",
        rights: "居民权利",
        rights_sub: "Rights",
        alerts: "旅游警示",
        alerts_sub: "Alerts",
        emergency: "紧急热线",
        emergency_sub: "Hotline",
        scroll: "下滑浏览更多"
      },
      knowledge: {
        title: "领保烫知识",
        read: "阅读",
        label: "KNOWLEDGE"
      },
      notifications: {
        title: "通知面板",
        col_date: "日期",
        col_content: "内容",
        col_download: "下载",
        more: "查看更多通知"
      }
    },
    emergency: {
      title: "外交部全球领事保护与服务\n应急热线 (24小时)",
      call_btn: "一键呼叫",
      location_btn: "寻找附近使领馆",
      locating: "正在获取位置...",
      location_found: "位置已获取",
      location_error: "无法获取位置",
      location_unsupported: "您的浏览器不支持地理位置服务",
      tips_title: "求助须知",
      tip_1: "遭遇突发紧急情况时，请首先拨打当地报警电话。",
      tip_2: "如需领事协助，请拨打12308热线。",
      tip_3: "丢失护照请立即向当地警方挂失并联系就近使领馆补办旅行证。"
    },
    multimedia: {
      videos_title: "一分钟短片集",
      swipe_hint: "滑动查看",
      video_title_template: "海外出行安全指南 - 第{{i}}集：证件保管的重要性",
      podcasts_title: "领保播客",
      rss_btn: "RSS 订阅",
      podcast_title_template: "领事保护真实案例解析 #{{i}}"
    },
    challenge: {
      my_score: "我的积分",
      weekly_challenge: "每周挑战",
      question_progress: "第 {{current}} / {{total}} 题",
      complete_title: "挑战完成!",
      points_earned: "本次获得积分",
      play_again: "再来一次",
      leaderboard_title: "本周排行榜",
      score_suffix: "分"
    },
    safety: {
      intro: "请勾选您已完成的准备事项，系统将评估您的出行安全指数。",
      generate_btn: "生成安全报告",
      result_title: "您的安全指数",
      subjects: {
        health: "健康准备",
        crime: "治安防范",
        political: "政策了解",
        contact: "紧急联络",
        docs: "证件备份"
      },
      suggestions: {
        passport: "⚠️ 强烈建议您备份护照首页及签证页，并与原件分开存放。",
        insurance: "⚠️ 医疗费用在海外极其昂贵，请务必购买保险。",
        success: "🎉 您的准备工作非常充分，祝您旅途愉快！",
        title: "改进建议:"
      },
      retake_btn: "重新测试"
    },
    data: {
      notifications: {
        "1": "最新旅游警示更新：东南亚地区",
        "2": "更换特区护照新规定说明会",
        "3": "2026年度领保之星招募计划",
        "4": "圣诞假期海外出行安全提示"
      },
      knowledge: {
        "1": "如何遗失护照？",
        "2": "紧急联络方式",
        "3": "领事保护范围"
      },
      quiz: {
        "1": {
          q: "在国外丢失护照，应该首先做什么？",
          o: ["立即回国", "向当地警方报案并联系使领馆", "在社交媒体发布求助", "寻找当地华人社团"]
        },
        "2": {
          q: "外交部全球领事保护与服务应急热线是多少？",
          o: ["12345", "110", "12308", "911"]
        }
      },
      safety_questions: {
        "1": "您是否购买了涵盖医疗和意外的旅行保险？",
        "2": "您是否了解目的地的治安状况和常见犯罪手段？",
        "3": "您是否登记了外交部'出国及海外中国公民自愿登记'？",
        "4": "您是否备份了护照和签证复印件？",
        "5": "您是否了解当地的急救电话和使领馆联系方式？"
      }
    }
  },
  "en": {
    app: {
      title: "Consular Prot.",
      copyright: "© 2024 Macao Consular Protection",
      placeholder: "Content Coming Soon...",
      construction: "🚧"
    },
    menu: {
      title: "Menu",
      "star-challenge": "Consular Star Challenge",
      "safety-test": "Travel Safety Index",
      "going-abroad": "Going Abroad",
      "overseas-help": "Overseas Assistance",
      "emergency": "Emergency Zone",
      "consular-protection": "Consular Protection",
      "resident-rights": "Resident Rights",
      "videos": "1-Min Videos",
      "podcasts": "Podcasts",
      "events": "Events Calendar",
      "resources": "Resources",
      "contact": "Contact Us"
    },
    home: {
      hero: {
        protection: "Protection",
        protection_sub: "Consular",
        rights: "Rights",
        rights_sub: "Resident",
        alerts: "Alerts",
        alerts_sub: "Travel",
        emergency: "Hotline",
        emergency_sub: "Emergency",
        scroll: "Scroll for more"
      },
      knowledge: {
        title: "Knowledge",
        read: "Read",
        label: "INFO"
      },
      notifications: {
        title: "Notifications",
        col_date: "Date",
        col_content: "Content",
        col_download: "DL",
        more: "View More"
      }
    },
    emergency: {
      title: "Global Emergency Call Center\nfor Consular Protection (24H)",
      call_btn: "Call Now",
      location_btn: "Find Consulate",
      locating: "Locating...",
      location_found: "Location found",
      location_error: "Error locating",
      location_unsupported: "Geolocation not supported",
      tips_title: "Important Tips",
      tip_1: "In an emergency, call local police first.",
      tip_2: "Call 12308 for consular assistance.",
      tip_3: "Report lost passports to police immediately."
    },
    multimedia: {
      videos_title: "1-Min Video Series",
      swipe_hint: "Swipe for more",
      video_title_template: "Travel Safety Guide - Ep {{i}}: Importance of Document Safety",
      podcasts_title: "Consular Podcasts",
      rss_btn: "RSS Subscribe",
      podcast_title_template: "Real Consular Protection Cases #{{i}}"
    },
    challenge: {
      my_score: "My Score",
      weekly_challenge: "Weekly Challenge",
      question_progress: "Q {{current}} / {{total}}",
      complete_title: "Challenge Complete!",
      points_earned: "Points Earned",
      play_again: "Play Again",
      leaderboard_title: "Weekly Leaderboard",
      score_suffix: "pts"
    },
    safety: {
      intro: "Please check the items you have prepared. The system will evaluate your travel safety index.",
      generate_btn: "Generate Report",
      result_title: "Your Safety Index",
      subjects: {
        health: "Health",
        crime: "Safety",
        political: "Policy",
        contact: "Contact",
        docs: "Documents"
      },
      suggestions: {
        passport: "⚠️ Highly recommended to backup passport/visa copies separately.",
        insurance: "⚠️ Medical costs abroad are high. Travel insurance is essential.",
        success: "🎉 You are well prepared. Have a safe trip!",
        title: "Suggestions:"
      },
      retake_btn: "Retake Test"
    },
    data: {
      notifications: {
        "1": "Travel Alert Update: Southeast Asia",
        "2": "New Passport Renewal Regulations Seminar",
        "3": "2026 Consular Star Recruitment Plan",
        "4": "Christmas Holiday Travel Safety Tips"
      },
      knowledge: {
        "1": "Lost Passport?",
        "2": "Emergency Contacts",
        "3": "Consular Scope"
      },
      quiz: {
        "1": {
          q: "What should you do first if you lose your passport abroad?",
          o: ["Return home immediately", "Report to local police and contact consulate", "Post on social media for help", "Find local community groups"]
        },
        "2": {
          q: "What is the Global Emergency Call Center number?",
          o: ["12345", "110", "12308", "911"]
        }
      },
      safety_questions: {
        "1": "Have you purchased travel insurance covering medical & accidents?",
        "2": "Do you know the local safety situation and common crimes?",
        "3": "Have you registered with the Ministry of Foreign Affairs?",
        "4": "Have you backed up copies of your passport and visa?",
        "5": "Do you know local emergency numbers and consulate contacts?"
      }
    }
  },
  "pt": {
    app: {
      title: "Proteção Consular",
      copyright: "© 2024 Proteção Consular de Macau",
      placeholder: "Conteúdo em Breve...",
      construction: "🚧"
    },
    menu: {
      title: "Menu",
      "star-challenge": "Desafio Estrela Consular",
      "safety-test": "Índice de Segurança",
      "going-abroad": "Vou para o Estrangeiro",
      "overseas-help": "Assistência no Estrangeiro",
      "emergency": "Zona de Emergência",
      "consular-protection": "Proteção Consular",
      "resident-rights": "Direitos de Residente",
      "videos": "Vídeos de 1 Min",
      "podcasts": "Podcasts",
      "events": "Eventos",
      "resources": "Recursos",
      "contact": "Contacte-nos"
    },
    home: {
      hero: {
        protection: "Proteção",
        protection_sub: "Consular",
        rights: "Direitos",
        rights_sub: "Residente",
        alerts: "Alertas",
        alerts_sub: "Viagem",
        emergency: "Linha",
        emergency_sub: "Emergência",
        scroll: "Rolar para mais"
      },
      knowledge: {
        title: "Informações",
        read: "Ler",
        label: "INFO"
      },
      notifications: {
        title: "Notificações",
        col_date: "Data",
        col_content: "Conteúdo",
        col_download: "DL",
        more: "Ver Mais"
      }
    },
    emergency: {
      title: "Linha de Emergência Global\nProteção Consular (24H)",
      call_btn: "Ligar Agora",
      location_btn: "Encontrar Consulado",
      locating: "Localizando...",
      location_found: "Localização encontrada",
      location_error: "Erro ao localizar",
      location_unsupported: "Geolocalização não suportada",
      tips_title: "Dicas Importantes",
      tip_1: "Em emergência, ligue primeiro para a polícia local.",
      tip_2: "Ligue 12308 para assistência consular.",
      tip_3: "Reporte perda de passaporte à polícia imediatamente."
    },
    multimedia: {
      videos_title: "Série de Vídeos de 1 Min",
      swipe_hint: "Deslize para ver",
      video_title_template: "Guia de Segurança - Ep {{i}}: Importância dos Documentos",
      podcasts_title: "Podcasts Consulares",
      rss_btn: "Assinar RSS",
      podcast_title_template: "Casos Reais de Proteção Consular #{{i}}"
    },
    challenge: {
      my_score: "Minha Pontuação",
      weekly_challenge: "Desafio Semanal",
      question_progress: "Q {{current}} / {{total}}",
      complete_title: "Desafio Completo!",
      points_earned: "Pontos Ganhos",
      play_again: "Jogar Novamente",
      leaderboard_title: "Ranking Semanal",
      score_suffix: "pts"
    },
    safety: {
      intro: "Verifique os itens preparados. O sistema avaliará seu índice de segurança.",
      generate_btn: "Gerar Relatório",
      result_title: "Seu Índice de Segurança",
      subjects: {
        health: "Saúde",
        crime: "Segurança",
        political: "Política",
        contact: "Contacto",
        docs: "Documentos"
      },
      suggestions: {
        passport: "⚠️ Altamente recomendado fazer cópias do passaporte/visto.",
        insurance: "⚠️ Custos médicos no exterior são altos. Seguro é essencial.",
        success: "🎉 Você está bem preparado. Boa viagem!",
        title: "Sugestões:"
      },
      retake_btn: "Refazer Teste"
    },
    data: {
      notifications: {
        "1": "Atualização de Alerta de Viagem: Sudeste Asiático",
        "2": "Seminário sobre Novas Regras de Renovação de Passaporte",
        "3": "Plano de Recrutamento Estrela Consular 2026",
        "4": "Dicas de Segurança para Férias de Natal"
      },
      knowledge: {
        "1": "Perdeu o Passaporte?",
        "2": "Contactos de Emergência",
        "3": "Âmbito Consular"
      },
      quiz: {
        "1": {
          q: "O que fazer primeiro se perder o passaporte no exterior?",
          o: ["Voltar para casa imediatamente", "Informar a polícia local e contactar o consulado", "Pedir ajuda nas redes sociais", "Procurar grupos comunitários locais"]
        },
        "2": {
          q: "Qual é o número do Centro de Atendimento de Emergência Global?",
          o: ["12345", "110", "12308", "911"]
        }
      },
      safety_questions: {
        "1": "Comprou seguro de viagem cobrindo saúde e acidentes?",
        "2": "Conhece a situação de segurança local e crimes comuns?",
        "3": "Registou-se no Ministério dos Negócios Estrangeiros?",
        "4": "Fez cópias de segurança do passaporte e visto?",
        "5": "Sabe os números de emergência locais e contactos consulares?"
      }
    }
  }
};