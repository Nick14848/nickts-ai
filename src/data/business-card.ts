import type { Locale } from "./site";

/** Public, user-approved details. Edit these rather than presentation components. */
export const cardDetails = {
  phone: "+852 6990 2741",
  phoneHref: "tel:+85269902741",
  cities: ["Taiwan", "Hong Kong", "Shenzhen"],
  followers: "7K+",
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
      label: "APPLIED AI · FINANCIAL SERVICES",
      title: ["AI built for", "financial workflows."],
      summary:
        "Bringing business context and hands-on implementation together. I build AI tools, internal platforms and automation for investment and operational workflows.",
      affiliations: "Education & experience",
    },
    experience: {
      title: "Work experience",
      cv: "View résumé",
      jobs: [
        {
          company: "Archbridge Capital Partners",
          role: "AI Transformation & Asset Management Analyst Intern",
          dates: "Jun 2026 — Present",
          location: "Hong Kong",
          type: "Internship · continuing part-time",
          points: [
            "Build internal AI tools and workflow automation across investment research and fund operations.",
            "Deploy private LLM infrastructure for sensitive financial workflows.",
            "Support private-credit deal screening, due diligence, financial analysis and investment committee preparation.",
          ],
        },
        {
          company: "HSBC",
          role: "Data & Analytics Intern",
          dates: "Jul 2025 — Dec 2025",
          location: "Hong Kong",
          type: "Corporate & Institutional Banking",
          points: [
            "Analyze corporate-client onboarding and digital journeys to identify process bottlenecks.",
            "Develop predictive analytics and explainable machine-learning models to support operational decisions.",
            "Build governed data assets and reporting workflows using enterprise data platforms.",
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
      label: "AI 应用 · 金融服务",
      title: ["面向金融业务的", "AI 应用与转型。"],
      summary:
        "结合金融业务理解与技术实施经验，开发 AI 工具、内部平台与自动化流程，支持投资研究及运营决策。",
      affiliations: "教育与工作经历",
    },
    experience: {
      title: "工作经历",
      cv: "查看简历",
      jobs: [
        {
          company: "Archbridge Capital Partners",
          role: "AI 转型与资产管理分析实习生",
          dates: "2026.06 — 至今",
          location: "香港",
          type: "暑期实习 · 现继续兼职",
          points: [
            "开发内部 AI 工具与自动化流程，支持投资研究及基金运营。",
            "部署私有大语言模型基础设施，服务敏感金融数据场景。",
            "参与私募信贷项目筛选、尽职调查、财务分析及投委会材料准备。",
          ],
        },
        {
          company: "HSBC 汇丰",
          role: "数据与分析实习生",
          dates: "2025.07 — 2025.12",
          location: "香港",
          type: "企业与机构银行 · Corporate & Institutional Banking",
          points: [
            "分析对公客户开户流程与数字旅程，识别业务及运营瓶颈。",
            "开发预测分析与可解释机器学习模型，支持运营决策。",
            "运用企业数据平台构建受治理的数据资产与报告工作流。",
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
