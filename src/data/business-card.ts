import type { Locale } from "./site";

/** Public, user-approved details. Edit these rather than presentation components. */
export const cardDetails = {
  phone: "+852 6990 2741",
  phoneHref: "tel:+85269902741",
  cities: ["Taiwan", "Hong Kong", "Shenzhen"],
  followers: 7443,
  degree: "BEng Data Science & Engineering",
  creatorImage: "/life/bike.jpg",
} as const;

type CardCopy = {
  nav: { experience: string; language: string; skip: string };
  card: { university: string; scroll: string; welcome: string };
  intro: {
    label: string;
    title: string[];
    summary: string;
    bridges: { label: string; detail: string }[];
    credentials: string;
    affiliations: string;
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
      points: string[];
    }[];
    educationLabel: string;
    school: string;
    degree: string;
    educationDates: string;
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
    },
    intro: {
      label: "AI × FINANCE · CROSS-CULTURAL BUILDER",
      title: ["A bridge between", "technology and business."],
      summary:
        "I combine enterprise AI, data analytics and financial-services experience to turn real operating needs into systems that ship — from AI workspaces and agents to private models and automated workflows.",
      bridges: [
        {
          label: "Technical ↔ Business",
          detail: "Translate business needs into deployable AI solutions.",
        },
        {
          label: "Taiwan ↔ Hong Kong ↔ Shenzhen",
          detail: "A cross-cultural perspective shaped by three cities.",
        },
        {
          label: "Work ↔ Creation",
          detail: "Build in finance while growing a creator-led personal brand.",
        },
      ],
      credentials: "CFA Level I · IELTS 7.5",
      affiliations: "Education & experience",
    },
    experience: {
      title: "Work experience",
      cv: "View résumé",
      jobs: [
        {
          company: "Archbridge Capital Partners",
          role: "AI Transformation & Asset Management Analyst",
          dates: "Jun 2026 — Present",
          location: "Hong Kong",
          type: "AI × Finance · Private Markets",
          points: [
            "Shape and build an integrated AI workspace for investment research and fund operations, connecting fragmented project data, internal systems and AI tools.",
            "Design human-in-the-loop AI agents for private-credit screening, turning unstructured deal materials into evidence-backed scorecards and review workflows.",
            "Deploy private LLM infrastructure and automated market-intelligence pipelines for privacy-sensitive financial work.",
          ],
        },
        {
          company: "HSBC",
          role: "Data & Analytics",
          dates: "Jul 2025 — Dec 2025",
          location: "Hong Kong",
          type: "Corporate & Institutional Banking",
          points: [
            "Analyzed end-to-end corporate-client onboarding journeys within HSBC CIB, identifying 8+ process bottlenecks and delay drivers.",
            "Built governed analytics assets across three enterprise systems to support an AI-driven CRM and operational reporting.",
            "Developed an explainable XGBoost + SHAP risk model that translated machine-learning outputs into operational decisions.",
          ],
        },
      ],
      educationLabel: "Education",
      school: "The University of Hong Kong",
      degree: "BEng Data Science & Engineering",
      educationDates: "2022 — 2026 · Expected graduation: late 2026",
    },
    creator: {
      title: "Beyond work",
      followers: "followers across platforms",
      name: "小菜Nick",
      headline: "From consumer to creator.",
      copy: "I document life, share what I learn and turn curiosity into things I make. Content is both a creative practice and a way to build a lasting personal brand — one useful piece at a time.",
      photoAlt: "Nick taking a photo in a roadside mirror during a ride",
      photoCaption: "Life, in progress.",
      rednote: "RedNote",
      douyin: "Douyin",
      douyinNote: "Find 小菜Nick",
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
    },
    intro: {
      label: "AI × 金融 · 跨文化 BUILDER",
      title: ["连接技术与商业，", "也连接不同的世界。"],
      summary:
        "具备企业 AI 应用、数据分析与金融场景数字化落地经验，能够从真实业务需求出发，将 AI 工作台、AI Agent、私有化大模型与自动化工作流推进到实际应用。",
      bridges: [
        {
          label: "技术 ↔ 商业",
          detail: "理解业务、拆解问题，把 AI 方案真正落到工作流中。",
        },
        {
          label: "台湾 ↔ 香港 ↔ 深圳",
          detail: "三座城市的成长经历，形成跨文化的观察与沟通方式。",
        },
        {
          label: "工作 ↔ 创作",
          detail: "在 AI 与金融领域实践，也持续经营个人品牌与内容事业。",
        },
      ],
      credentials: "CFA Level I · IELTS 7.5",
      affiliations: "教育与工作经历",
    },
    experience: {
      title: "工作经历",
      cv: "查看简历",
      jobs: [
        {
          company: "Archbridge Capital Partners",
          role: "AI 转型与资产管理分析师",
          dates: "2026.06 — 至今",
          location: "香港",
          type: "AI × 金融 · 私募市场",
          points: [
            "参与规划并开发一体化 AI 工作台，连接项目资料、内部数据与 AI 工具，服务投资研究及基金运营。",
            "设计 Human-in-the-loop AI Agent，将非结构化项目材料转化为基于证据的评分卡，支持私募信贷项目筛选与尽调。",
            "部署私有化大模型环境与自动化市场监控流程，兼顾金融数据隐私与后续系统集成。",
          ],
        },
        {
          company: "HSBC 汇丰",
          role: "数据与分析",
          dates: "2025.07 — 2025.12",
          location: "香港",
          type: "企业与机构银行 · Corporate & Institutional Banking",
          points: [
            "在汇丰香港 CIB 分析企业客户开户的端到端流程，识别 8+ 个关键流程瓶颈与延误驱动因素。",
            "整合三个核心业务系统的数据，构建受治理的数据资产，支持 AI 驱动的 CRM 与运营分析。",
            "基于 XGBoost + SHAP 构建可解释风险模型，将机器学习结果转化为可执行的业务判断。",
          ],
        },
      ],
      educationLabel: "教育背景",
      school: "香港大学",
      degree: "数据科学与工程 · 工学学士（在读）",
      educationDates: "2022 — 2026 · 预计 2026 年底毕业",
    },
    creator: {
      title: "工作之外",
      followers: "全平台粉丝",
      name: "小菜Nick",
      headline: "从消费者，成为创造者。",
      copy: "热爱生活，也认真记录。把学习与实践转化为内容，在 AI 时代持续拓展能力，让每一次创造都成为个人品牌的长期积累。",
      photoAlt: "Nick 骑行时在路边镜子前记录生活",
      photoCaption: "记录生活，也记录成长。",
      rednote: "小红书",
      douyin: "抖音",
      douyinNote: "查找小菜Nick",
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
