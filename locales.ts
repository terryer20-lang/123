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
        label: "知識"
      },
      notifications: {
        title: "通知面板",
        col_date: "日期",
        col_content: "內容",
        col_download: "下載",
        more: "查看更多通知"
      }
    },
    protection: {
      hero_title: "海外安全的最強後盾",
      hero_desc: "無論是留學、畢業旅行還是探親，當你遇到緊急情況時，祖國始終在你身後。",
      definition_title: "什麼是領事保護？",
      definition_desc: "當中國公民在海外正當權益受侵害或需幫助時，中國駐外使領館依法維護其權益的行為。",
      who_title: "誰能獲得幫助？",
      who_1_title: "澳門同胞",
      who_1_desc: "具有中國血統且出生在中國領土（含澳門）者，不論是否持有葡萄牙旅行證件，均為中國公民。",
      who_2_title: "中葡血統居民",
      who_2_desc: "可根據意願選擇國籍，選擇後享有相應權利。",
      scope_title: "領事官員能為你做什麼？",
      scope_subtitle: "職責範圍內的協助清單",
      tab_can: "✅ 可以做",
      tab_cannot: "❌ 不可以做",
      can_list: {
        1: { t: "緊急應變", d: "遇戰爭、災害時協助撤離或救助" },
        2: { t: "人身安全", d: "敦促當地警方公正處理案件" },
        3: { t: "探視權利", d: "被捕或拘留時進行領事探視" },
        4: { t: "文件補發", d: "遺失證件時協助簽發應急證件" },
        5: { t: "醫療法律", d: "提供當地醫生、律師翻譯名單" },
        6: { t: "聯繫家人", d: "協助聯絡在澳親屬" }
      },
      cannot_list: {
        1: { t: "經濟糾紛", d: "不可介入私人財務、勞務或合約糾紛" },
        2: { t: "代為報案", d: "不可代你報案或參與案件調查" },
        3: { t: "支付費用", d: "不可代付食宿、交通、醫療或訴訟費" },
        4: { t: "司法干預", d: "不可干預當地司法或為違法行為買單" },
        5: { t: "工作擔保", d: "不可為你找工作、申辦居留或擔保" }
      },
      checklist_title: "出發前必做 5 件事",
      checklist_items: {
        1: "檢查證件：確保護照有效期在 6 個月以上",
        2: "關注提醒：查詢「中國領事服務網」，留意安全預警",
        3: "備好保險：根據目的地風險購買合適保險",
        4: "留下日程：將行程發給家人，約定聯絡方式",
        5: "登記資訊：透過「中國領事」APP 登記個人資訊"
      },
      fraud_title: "警惕電信詐騙",
      fraud_subtitle: "留學生必看！",
      fraud_1_t: "假冒使領館",
      fraud_1_d: "聲稱涉刑事案或包裹被扣，要求轉賬至「安全賬戶」。使領館絕不會電話要求轉賬！",
      fraud_2_t: "虛擬綁架",
      fraud_2_d: "誘導切斷聯絡，再向家長索贖金。遇到此類情況應立即向警方核實。",
      footer_hotline: "外交部全球領保熱線"
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
        label: "知识"
      },
      notifications: {
        title: "通知面板",
        col_date: "日期",
        col_content: "内容",
        col_download: "下载",
        more: "查看更多通知"
      }
    },
    protection: {
      hero_title: "海外安全的最强后盾",
      hero_desc: "无论是留学、毕业旅行还是探亲，当你遇到紧急情况时，祖国始终在你身后。",
      definition_title: "什么是领事保护？",
      definition_desc: "当中国公民在海外正当权益受侵害或需帮助时，中国驻外使领馆依法维护其权益的行为。",
      who_title: "谁能获得帮助？",
      who_1_title: "澳门同胞",
      who_1_desc: "具有中国血统且出生在中国领土（含澳门）者，不论是否持有葡萄牙旅行证件，均为中国公民。",
      who_2_title: "中葡血统居民",
      who_2_desc: "可根据意愿选择国籍，选择后享有相应权利。",
      scope_title: "领事官员能为你做什么？",
      scope_subtitle: "职责范围内的协助清单",
      tab_can: "✅ 可以做",
      tab_cannot: "❌ 不可以做",
      can_list: {
        1: { t: "紧急应变", d: "遇战争、灾害时协助撤离或救助" },
        2: { t: "人身安全", d: "敦促当地警方公正处理案件" },
        3: { t: "探视权利", d: "被捕或拘留时进行领事探视" },
        4: { t: "文件补发", d: "遗失证件时协助签发应急证件" },
        5: { t: "医疗法律", d: "提供当地医生、律师翻译名单" },
        6: { t: "联系家人", d: "协助联络在澳亲属" }
      },
      cannot_list: {
        1: { t: "经济纠纷", d: "不可介入私人财务、劳务或合约纠纷" },
        2: { t: "代为报案", d: "不可代你报案或参与案件调查" },
        3: { t: "支付费用", d: "不可代付食宿、交通、医疗或诉讼费" },
        4: { t: "司法干预", d: "不可干预当地司法或为违法行为买单" },
        5: { t: "工作担保", d: "不可为你找工作、申办居留或担保" }
      },
      checklist_title: "出发前必做 5 件事",
      checklist_items: {
        1: "检查证件：确保护照有效期在 6 个月以上",
        2: "关注提醒：查询「中国领事服务网」，留意安全预警",
        3: "备好保险：根据目的地风险购买合适保险",
        4: "留下日程：将行程发给家人，约定联络方式",
        5: "登记资讯：透过「中国领事」APP 登记个人资讯"
      },
      fraud_title: "警惕电信诈骗",
      fraud_subtitle: "留学生必看！",
      fraud_1_t: "假冒使领馆",
      fraud_1_d: "声称涉刑事案或包裹被扣，要求转账至「安全账户」。使领馆绝不会电话要求转账！",
      fraud_2_t: "虚拟绑架",
      fraud_2_d: "诱导切断联络，再向家长索赎金。遇到此类情况应立即向警方核实。",
      footer_hotline: "外交部全球领保热线"
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
        label: "KNOWLEDGE"
      },
      notifications: {
        title: "Notifications",
        col_date: "Date",
        col_content: "Content",
        col_download: "DL",
        more: "View More"
      }
    },
    protection: {
      hero_title: "Strongest Backing for Safety",
      hero_desc: "Whether studying, traveling, or visiting relatives, the motherland is always behind you.",
      definition_title: "What is Consular Protection?",
      definition_desc: "Actions by embassies to protect rights of Chinese citizens abroad.",
      who_title: "Who is Eligible?",
      who_1_title: "Macao Compatriots",
      who_1_desc: "Chinese descent born in Chinese territory (inc. Macao) are Chinese citizens.",
      who_2_title: "Sino-Portuguese",
      who_2_desc: "Can choose nationality according to preference.",
      scope_title: "What Can They Do?",
      scope_subtitle: "Scope of Assistance",
      tab_can: "✅ CAN DO",
      tab_cannot: "❌ CANNOT DO",
      can_list: {
        1: { t: "Emergency", d: "Evacuation or relief in war/disaster" },
        2: { t: "Safety", d: "Urge police to handle cases fairly" },
        3: { t: "Visitation", d: "Consular visits if arrested" },
        4: { t: "Documents", d: "Issue emergency travel documents" },
        5: { t: "Legal/Medical", d: "Provide lists of local doctors/lawyers" },
        6: { t: "Family", d: "Help contact relatives in Macao" }
      },
      cannot_list: {
        1: { t: "Private Disputes", d: "Cannot intervene in financial/contract disputes" },
        2: { t: "Report Crimes", d: "Cannot report crimes on your behalf" },
        3: { t: "Pay Bills", d: "Cannot pay for food, transport, or legal fees" },
        4: { t: "Judicial", d: "Cannot interfere in local judicial processes" },
        5: { t: "Jobs", d: "Cannot find jobs or provide guarantees" }
      },
      checklist_title: "5 Must-Dos Before Departure",
      checklist_items: {
        1: "Check Docs: Passport valid for 6+ months",
        2: "Alerts: Check Consular Service Network",
        3: "Insurance: Buy suitable travel insurance",
        4: "Itinerary: Share schedule with family",
        5: "Register: Use 'China Consular' App"
      },
      fraud_title: "Beware of Telecom Fraud",
      fraud_subtitle: "Students Take Note!",
      fraud_1_t: "Fake Consulate",
      fraud_1_d: "Claims of criminal involvement? Fake. We never ask for transfers.",
      fraud_2_t: "Virtual Kidnapping",
      fraud_2_d: "Luring to cut contact to extort parents. Verify with police immediately.",
      footer_hotline: "Global Consular Hotline"
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
        label: "INFORMAÇÃO"
      },
      notifications: {
        title: "Notificações",
        col_date: "Data",
        col_content: "Conteúdo",
        col_download: "DL",
        more: "Ver Mais"
      }
    },
    protection: {
      hero_title: "O Seu Escudo no Estrangeiro",
      hero_desc: "Em caso de emergência no estrangeiro, a pátria está sempre consigo.",
      definition_title: "O que é Proteção Consular?",
      definition_desc: "Ações das embaixadas para proteger os direitos dos cidadãos chineses.",
      who_title: "Quem é Elegível?",
      who_1_title: "Compatriotas de Macau",
      who_1_desc: "Ascendência chinesa nascida em território chinês (inc. Macau) são cidadãos chineses.",
      who_2_title: "Luso-Chineses",
      who_2_desc: "Podem escolher a nacionalidade de acordo com a preferência.",
      scope_title: "O Que Podem Fazer?",
      scope_subtitle: "Âmbito de Assistência",
      tab_can: "✅ PODE",
      tab_cannot: "❌ NÃO PODE",
      can_list: {
        1: { t: "Emergência", d: "Evacuação ou socorro em guerra/desastre" },
        2: { t: "Segurança", d: "Instar a polícia a tratar casos com justiça" },
        3: { t: "Visitação", d: "Visitas consulares em caso de prisão" },
        4: { t: "Documentos", d: "Emitir documentos de viagem de emergência" },
        5: { t: "Legal/Médico", d: "Fornecer listas de médicos/advogados" },
        6: { t: "Família", d: "Ajudar a contactar parentes em Macau" }
      },
      cannot_list: {
        1: { t: "Disputas Privadas", d: "Não intervém em disputas financeiras" },
        2: { t: "Reportar Crimes", d: "Não pode reportar crimes por si" },
        3: { t: "Pagar Contas", d: "Não paga alimentação, transporte ou taxas" },
        4: { t: "Judicial", d: "Não interfere em processos judiciais" },
        5: { t: "Empregos", d: "Não encontra empregos nem fornece garantias" }
      },
      checklist_title: "5 Coisas a Fazer Antes de Partir",
      checklist_items: {
        1: "Verificar Docs: Passaporte válido por 6+ meses",
        2: "Alertas: Verificar Rede de Serviços Consulares",
        3: "Seguro: Comprar seguro de viagem adequado",
        4: "Itinerário: Partilhar agenda com a família",
        5: "Registo: Usar App 'China Consular'"
      },
      fraud_title: "Cuidado com Fraudes",
      fraud_subtitle: "Estudantes Atenção!",
      fraud_1_t: "Falso Consulado",
      fraud_1_d: "Alega envolvimento criminal? Falso. Nunca pedimos transferências.",
      fraud_2_t: "Sequestro Virtual",
      fraud_2_d: "Induzir corte de contacto para extorquir pais. Verifique com a polícia.",
      footer_hotline: "Linha Global Consular"
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