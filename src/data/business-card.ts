import type { Locale } from "./site";

/** Public, user-approved details. Edit these rather than presentation components. */
export const cardDetails = {
  cities: ["Taiwan", "Hong Kong", "Shenzhen"],
  followers: 7443,
  degree: "BEng Data Science & Engineering",
  creatorImage: "/life/bike.jpg",
} as const;

type CardCopy = {
  nav: { experience: string; language: string; skip: string };
  card: {
    university: string;
    scroll: string;
    welcome: string;
    role: string;
    base: string;
  };
  intro: {
    label: string;
    title: string[];
    tagline: string;
    summary: string;
    bridges: { label: string; detail: string }[];
  };
  experience: {
    title: string;
    cv: string;
    jobs: {
      company: string;
      role: string;
      dates: string;
      location: string;
      type: string;
      description?: string;
      website?: { label: string; url: string };
      points: string[];
    }[];
    educationLabel: string;
    school: string;
    degree: string;
    educationDates: string;
    credentials: string;
    languages: string;
  };
  creator: {
    title: string;
    followers: string;
    name: string;
    headline: string;
    copy: string;
    photoAlt: string;
    photoCaption: string;
    rednote: string;
    douyin: string;
    douyinNote: string;
  };
  contact: {
    greeting: string;
    button: string;
    title: string;
    email: string;
    phone: string;
    close: string;
    copy: string;
    copied: string;
    notice: string;
  };
  commands: {
    title: string;
    intro: string;
    experience: string;
    creator: string;
    contact: string;
    resume: string;
    github: string;
    language: string;
  };
};

export const businessCardCopy: Record<Locale, CardCopy> = {
  en: {
    nav: {
      experience: "Work experience",
      language: "Switch to Chinese",
      skip: "Skip to work experience",
    },
    card: {
      university: "The University of Hong Kong",
      scroll: "Scroll to discover more",
      welcome: "A pleasure to meet you.",
      role: "AI Builder",
      base: "Based in",
    },
    intro: {
      label: "About Me",
      title: ["A Bridge Between", "Technology and Business."],
      tagline:
        "Bringing AI into real business. Making AI something every person and every business can truly own and use.",
      summary:
        "With a Data Science & Engineering background from HKU, I work across AI transformation and investment analysis at a Hong Kong private-markets firm. Over a decade in Shenzhen's Nanshan district, hands-on experience in Hong Kong finance and longstanding personal connections around Taiwan's semiconductor industry give me a grounded perspective on connecting technology, people and business across the three regions.",
      bridges: [
        {
          label: "Technical ↔ Business",
          detail:
            "Grounded in data and engineering, I bring AI into real workflows to automate investment research and fund operations.",
        },
        {
          label: "Shenzhen ↔ Hong Kong ↔ Taiwan",
          detail:
            "Bring together local knowledge and personal networks across AI innovation, finance and semiconductors to identify opportunities between the three regions.",
        },
        {
          label: "Work ↔ Creation",
          detail:
            "Alongside AI and finance, I continue building a personal brand and an independent creative practice.",
        },
      ],
    },
    experience: {
      title: "Work experience",
      cv: "View résumé",
      jobs: [
        {
          company: "Archbridge Capital Partners",
          role: "AI Transformation & Investment Analyst",
          dates: "Jun 2026 — Present",
          location: "Hong Kong",
          type: "AI × Finance · Private Markets",
          description:
            "A Hong Kong SFC-licensed (Types 4 & 9) asset manager overseeing approximately US$100 million in private and structured credit assets for family-office clients.",
          website: {
            label: "archbridgecap.com",
            url: "https://archbridgecap.com/",
          },
          points: [
            "Shape and build an integrated AI workspace for investment research and fund operations, connecting fragmented project data, internal systems and AI tools.",
            "Design human-in-the-loop AI agents for private-credit screening, turning unstructured deal materials into evidence-backed scorecards and review workflows.",
            "Deploy private LLM infrastructure and automated market-intelligence pipelines for privacy-sensitive financial work.",
          ],
        },
        {
          company: "HSBC",
          role: "Data & Analytics Intern",
          dates: "Jul 2025 — Dec 2025",
          location: "Hong Kong",
          type: "Corporate & Institutional Banking",
          points: [
            "Supported analysis of corporate-client onboarding journeys, helping teams understand opportunities for process improvement.",
            "Prepared and analyzed business data to support operational reporting and analytics use cases.",
            "Applied interpretable machine-learning methods to explore process delays and communicate findings to business stakeholders.",
          ],
        },
      ],
      educationLabel: "Education",
      school: "The University of Hong Kong",
      degree: "BEng Data Science & Engineering",
      educationDates: "2022 — 2026 · Expected graduation: late 2026",
      credentials: "CFA Level I passed · IELTS 7.5",
      languages:
        "Mandarin (native) · English (fluent) · Cantonese (basic)",
    },
    creator: {
      title: "Beyond work",
      followers: "followers across platforms",
      name: "尼克NickTsai",
      headline: "From consumer to creator.",
      copy: "I document life, share what I learn and turn curiosity into things I make. Content is both a creative practice and a way to build a lasting personal brand — one useful piece at a time.",
      photoAlt: "Nick taking a photo in a roadside mirror during a ride",
      photoCaption: "Life, in progress.",
      rednote: "RedNote",
      douyin: "Douyin",
      douyinNote: "Find 尼克NickTsai",
    },
    contact: {
      greeting: "A pleasure to meet you.",
      button: "Keep in touch",
      title: "Contact Nick",
      email: "Email",
      phone: "Phone",
      close: "Close",
      copy: "Copy email",
      copied: "Email copied",
      notice:
        "Personal website. Views are my own; affiliations describe my education and work experience.",
    },
    commands: {
      title: "Quick navigation",
      intro: "Business card",
      experience: "Work experience",
      creator: "Beyond work",
      contact: "Contact Nick",
      resume: "Open résumé",
      github: "Open GitHub",
      language: "Switch language",
    },
  },
  zh: {
    nav: {
      experience: "工作经历",
      language: "Switch to English",
      skip: "跳到工作经历",
    },
    card: {
      university: "香港大学",
      scroll: "往下滑查看更多",
      welcome: "很高兴认识你。",
      role: "AI Builder",
      base: "Based in",
    },
    intro: {
      label: "关于我",
      title: ["连接技术与业务的桥梁"],
      tagline:
        "让AI进入真实业务。让每个人，每家企业，都能真正拥有和使用AI。",
      summary:
        "香港大学数据科学与工程本科背景，现于香港私募资管机构从事 AI 转型与投资分析。在深圳南山拥有 10+ 年生活与人脉积累，在香港金融业务中实践，与台湾半导体产业保持长期个人联系。熟悉三地不同的产业环境与沟通方式，善于连接技术、人才与业务需求，发现跨地区的合作机会。",
      bridges: [
        {
          label: "技术 ↔ 商业",
          detail:
            "以数据与工程为底，把 AI 应用落地到真实业务场景，自动化投资研究与基金运营工作流。",
        },
        {
          label: "深圳 ↔ 香港 ↔ 台湾",
          detail:
            "结合 AI 科技、金融与半导体领域的产业接触及人脉积累，连接三地真实需求，发现跨地区合作机会。",
        },
        {
          label: "工作 ↔ 创作",
          detail:
            "除了在 AI 与金融领域实践，也持续经营个人品牌与内容事业。",
        },
      ],
    },
    experience: {
      title: "工作经历",
      cv: "查看简历",
      jobs: [
        {
          company: "凯翔资本",
          role: "AI 转型与投资分析师",
          dates: "2026.06 — 至今",
          location: "香港",
          type: "",
          description:
            "香港证监会（SFC）第4/9类持牌资产管理机构，为家族办公室客户管理约 1 亿美元私募及结构化信贷资产。",
          website: {
            label: "archbridgecap.com",
            url: "https://archbridgecap.com/",
          },
          points: [
            "参与规划并开发一体化 AI 工作台，连接项目资料、内部数据与 AI 工具，服务投资研究及基金运营。",
            "设计 Human-in-the-loop AI Agent，将非结构化项目材料转化为基于证据的评分卡，支持私募信贷项目筛选与尽调。",
            "部署私有化大模型环境与自动化市场监控流程，兼顾金融数据隐私与后续系统集成。",
          ],
        },
        {
          company: "HSBC 汇丰",
          role: "数据分析实习生 · Intern",
          dates: "2025.07 — 2025.12",
          location: "香港",
          type: "企业与机构银行 · Corporate & Institutional Banking",
          points: [
            "参与企业客户开户流程分析，帮助业务团队理解流程改进机会。",
            "整理与分析业务数据，支持运营报告及数据分析场景。",
            "运用可解释机器学习方法探索流程延误因素，将分析发现转化为便于业务理解的结论。",
          ],
        },
      ],
      educationLabel: "教育背景",
      school: "香港大学",
      degree: "数据科学与工程 · 工学学士",
      educationDates: "2022 — 2026 · 预计 2026 年底毕业",
      credentials: "CFA 一级考试通过 · IELTS 7.5",
      languages: "普通话（母语） · 英语（流利） · 粤语（基础）",
    },
    creator: {
      title: "工作之外",
      followers: "全平台粉丝量",
      name: "尼克NickTsai",
      headline: "从使用者，成为创造者。",
      copy: "热爱生活，也认真记录。把学习与实践转化为内容，在 AI 时代持续拓展能力，让每一次创造都成为个人品牌的长期积累。",
      photoAlt: "Nick 骑行时在路边镜子前记录生活",
      photoCaption: "记录生活，也记录成长。",
      rednote: "小红书",
      douyin: "抖音",
      douyinNote: "查找尼克NickTsai",
    },
    contact: {
      greeting: "很高兴认识你～",
      button: "保持联系",
      title: "联系 Nick",
      email: "邮箱",
      phone: "电话",
      close: "关闭",
      copy: "复制邮箱",
      copied: "邮箱已复制",
      notice: "个人网站，观点仅代表个人。机构名称用于说明教育与工作经历。",
    },
    commands: {
      title: "快速导航",
      intro: "商务名片",
      experience: "工作经历",
      creator: "工作之外",
      contact: "联系 Nick",
      resume: "打开简历",
      github: "打开 GitHub",
      language: "切换语言",
    },
  },
};
