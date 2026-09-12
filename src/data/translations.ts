import type { ExperienceId, InquiryRole, InquiryType, LifePhotoId, SolutionId } from "./content";
import type { Lens, Locale } from "./site";

export type AudienceCardCopy = {
  title: string;
  description: string;
  action: string;
  secondaryAction?: string;
};

export type SolutionCopy = {
  summary: string;
};

export type InquiryCopy = {
  heading: string;
  name: string;
  email: string;
  role: string;
  type: string;
  message: string;
  submit: string;
  note: string;
  tooLong: string;
  roles: Record<InquiryRole, string>;
  types: Record<InquiryType, string>;
};

type ExperienceCopy = {
  dates: string;
  location: string;
  role: string;
  summary: string;
  points: [string, string, string];
};

export type Dictionary = {
  nav: {
    work: string;
    story: string;
    elsewhere: string;
    resume: string;
    command: string;
    menu: string;
    closeMenu: string;
    skip: string;
  };
  hero: {
    given: string;
    homepage: string;
    thesis: string;
    line3: string;
    credentials: [string, string, string, string];
    corridorHint: string;
    explore: string;
    resume: string;
    github: string;
    bikeAlt: string;
    places: [
      { id: "taiwan"; name: string; note: string },
      { id: "shenzhen"; name: string; note: string },
      { id: "hongkong"; name: string; note: string },
    ];
  };
  audience: {
    label: string;
    hint: string;
    cards: Record<Lens, AudienceCardCopy>;
  };
  work: {
    label: string;
    headline: string;
    deepPivot: {
      status: string;
      title: string;
      descriptor: string;
      summary: string;
      audience: string;
      audienceList: [string, string, string, string];
    };
    solutionsLabel: string;
    solutions: Record<SolutionId, SolutionCopy>;
    service: {
      status: string;
      title: string;
      summary: string;
      points: [string, string, string];
      inquiry: InquiryCopy;
    };
  };
  experience: {
    label: string;
    items: Record<ExperienceId, ExperienceCopy>;
  };
  story: {
    label: string;
    headline: string;
    paragraphs: string[];
    photos: Record<LifePhotoId, { title: string; caption: string }>;
    rail: {
      school: string;
      degree: string;
      cfa: string;
      cfaStatus: string;
      principle: string;
      principleLine: string;
      languages: string;
      languageList: string[];
    };
  };
  community: {
    dsaTitle: string;
    dsaRole: string;
    dsaCopy: string;
    creatorTitle: string;
    creatorCopy: string;
    topics: string;
    topicList: string[];
  };
  elsewhere: {
    label: string;
    github: string;
    rednote: string;
    douyin: string;
    email: string;
    copied: string;
  };
  build: {
    heading: string;
    copy: string;
    action: string;
  };
  footer: {
    built: string;
    copyright: string;
    notice: string;
  };
  palette: {
    title: string;
    hint: string;
    actions: {
      "go-work": string;
      "go-story": string;
      "go-elsewhere": string;
      "open-resume": string;
      "open-github": string;
      "copy-email": string;
      "switch-language": string;
    };
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      work: "Projects",
      story: "About",
      elsewhere: "Contact",
      resume: "CV ↗",
      command: "⌘K",
      menu: "Menu",
      closeMenu: "Close",
      skip: "Skip to about",
    },
    hero: {
      given: "蔡逸凯",
      homepage: "Personal homepage",
      thesis: "Invest in yourself · Build systems · Long-termism",
      line3: "Stay Childish.",
      credentials: [
        "HKU Data Science",
        "Hong Kong AI + Finance",
        "ex-HSBC CIB",
        "小菜Nick",
      ],
      corridorHint: "Hi guys, welcome to",
      explore: "About ↓",
      resume: "CV ↗",
      github: "GitHub ↗",
      bikeAlt: "Nick on a morning ride, caught in a traffic mirror",
      places: [
        { id: "taiwan", name: "Taiwan", note: "My happy hometown." },
        {
          id: "shenzhen",
          name: "Shenzhen",
          note: "Lived here more than a decade. Half Shenzhen, honestly.",
        },
        {
          id: "hongkong",
          name: "Hong Kong",
          note: "I study at HKU and work here.",
        },
      ],
    },
    audience: {
      label: "A different view",
      hint: "Pick a path. Skip the rest.",
      cards: {
        recruiter: {
          title: "Recruiter",
          description: "Internships, work history, CV.",
          action: "Experience →",
          secondaryAction: "CV ↗",
        },
        builder: {
          title: "AI Venture",
          description: "AI products, B2B and B2C.",
          action: "Projects →",
        },
        creator: {
          title: "Media",
          description: "小菜Nick — content off-camera.",
          action: "Content →",
        },
      },
    },
    work: {
      label: "03 / Projects",
      headline: "Projects",
      deepPivot: {
        status: "Project in progress",
        title: "DEEP PIVOT",
        descriptor: "Private Market AI Workspace",
        summary:
          "Practical AI implementation for private equity, private credit, venture capital and family offices — connecting fragmented information, investment workflows and decision tools.",
        audience: "Built for",
        audienceList: [
          "Private Equity",
          "Private Credit",
          "Venture Capital",
          "Family Offices",
        ],
      },
      solutionsLabel: "Solution modules",
      solutions: {
        "investment-workspace": {
          summary:
            "A shared investment workspace for documents, workflow state and model-assisted tools.",
        },
        feasibility: {
          summary:
            "Human-in-the-loop screening that turns investment teasers into evidence-backed scorecards.",
        },
        "private-ai": {
          summary: "Private model serving for privacy-sensitive financial workflows.",
        },
        "market-intel": {
          summary:
            "Repeatable Bloomberg and news monitoring for market research and portfolios.",
        },
      },
      service: {
        status: "Available for selected projects",
        title: "AI CUSTOM SOLUTIONS / FDE",
        summary:
          "I bridge technical delivery, business requirements and customer conversations to help teams use AI to reduce cost, improve execution and create value.",
        points: [
          "Turn business bottlenecks into practical AI workflows",
          "Build internal tools, data automation and AI products",
          "Mix hands-on engineering with customer-facing delivery",
        ],
        inquiry: {
          heading: "Tell me what you want to improve",
          name: "Name",
          email: "Contact email",
          role: "Are you an individual or a company?",
          type: "What do you need?",
          message: "Context",
          submit: "Open email draft ↗",
          note: "This opens a prepared draft in your email app. You decide when to send it.",
          tooLong:
            "This draft is too long for a reliable email link. Shorten the context or email me directly.",
          roles: {
            individual: "Individual",
            company: "Company",
          },
          types: {
            "deep-pivot": "DEEP PIVOT investment AI platform",
            "custom-ai": "Custom AI solutions",
            website: "Personal website (like this one)",
            other: "Other inquiries (including study abroad)",
          },
        },
      },
    },
    experience: {
      label: "02 / Past experience",
      items: {
        archbridge: {
          dates: "Present",
          location: "Hong Kong",
          role: "AI Transformation & Asset Management Analyst Intern",
          summary:
            "Building AI infrastructure and workflow automation for a Hong Kong asset manager while supporting private-credit investment processes.",
          points: [
            "Built internal AI systems across investment and fund-operations workflows.",
            "Deployed private local-LLM infrastructure for sensitive financial use cases.",
            "Supported deal screening, due diligence, financial analysis, KYC and investment committee preparation.",
          ],
        },
        hsbc: {
          dates: "2025",
          location: "Hong Kong",
          role: "Corporate & Institutional Banking\nData & Analytics Intern — Channel Analytics",
          summary:
            "Used analytics, machine learning and governed enterprise data to improve corporate-client onboarding and digital journeys.",
          points: [
            "Identified major onboarding bottlenecks through client and operations analytics.",
            "Built an XGBoost delay-risk model with SHAP.",
            "Designed governed data assets across core enterprise systems using PySpark and Starburst.",
          ],
        },
      },
    },
    story: {
      label: "01 / About",
      headline: "About me",
      paragraphs: [
        "Born in Taiwan, raised in Shenzhen, now studying and working in Hong Kong.",
        "Years living between Taiwan, Shenzhen and Hong Kong have made me used to seeing things through different cities, cultures and environments.",
        "I mostly live in Nanshan, Shenzhen, work in Hong Kong, and go back to Taiwan from time to time.",
        "Haha — the chubby kid in the photos is me. I later started cutting fat and training seriously, just because I felt I should be healthier. And why not?",
        "I've come to think fitness, investing, work, even building a company, are essentially the same game: discipline, the long term, resilience, compounding, and building systems.",
        "I study Data Science at HKU, graduating at the end of 2026. I previously did analytics at HSBC CIB. Now I do AI Transformation at a Hong Kong asset manager — building private AI systems and working inside real investment workflows.",
        "Outside work I make content on RedNote and Douyin as 小菜Nick — mostly study abroad, job hunting, AI, life in Hong Kong, and things I'm learning and trying.",
        "I like investing and asset allocation, and I like cycling, basketball, and training. More than talking about ideas, I like actually making things — using AI to solve problems for companies and friends, and building products people will use and that create real value.",
      ],
      photos: {
        bike: { title: "Cycling", caption: "" },
        "used-to-be-fat": { title: "I used to be really fat", caption: "" },
        "really-fat": { title: "Not going back", caption: "" },
        "wall-street": {
          title: "Investment principle",
          caption: "time in the market > timing the market",
        },
      },
      rail: {
        school: "HKU",
        degree: "BEng Data Science & Engineering",
        cfa: "CFA",
        cfaStatus: "Level I Passed",
        principle: "Investment principle",
        principleLine: "time in the market > timing the market",
        languages: "Languages",
        languageList: ["Mandarin", "English", "Cantonese"],
      },
    },
    community: {
      dsaTitle: "HKU Data Science Association",
      dsaRole: "Co-founder",
      dsaCopy: "A community of 150+ members, and 5+ industry events.",
      creatorTitle: "Media",
      creatorCopy: "7,443 followers on RedNote and Douyin as 小菜Nick.",
      topics: "Mostly",
      topicList: ["AI", "Job hunting notes", "HKU daily life"],
    },
    elsewhere: {
      label: "04 / Contact",
      github: "GitHub ↗",
      rednote: "RedNote / 小红书 ↗",
      douyin: "Douyin / 抖音 ↗",
      email: "Email ↗",
      copied: "Copied",
    },
    build: {
      heading: "Want to build a website of your own?",
      copy: "Building with AI is genuinely approachable. This site took me one morning.",
      action: "Tell me what you want to build →",
    },
    footer: {
      built: "By Nick Tsai",
      copyright: "© 2026 Nick Tsai. All rights reserved.",
      notice:
        "Personal website. Views are my own. No client, employer, or deal information is published. This site does not use advertising or tracking cookies.",
    },
    palette: {
      title: "Command",
      hint: "Jump around.",
      actions: {
        "go-work": "Go to Projects",
        "go-story": "Go to About",
        "go-elsewhere": "Go to Contact",
        "open-resume": "Open CV",
        "open-github": "Open GitHub",
        "copy-email": "Copy Email",
        "switch-language": "Switch Language",
      },
    },
  },
  zh: {
    nav: {
      work: "我的项目",
      story: "关于我",
      elsewhere: "联系方式",
      resume: "简历 ↗",
      command: "⌘K",
      menu: "菜单",
      closeMenu: "关闭",
      skip: "跳到关于我",
    },
    hero: {
      given: "蔡逸凯",
      homepage: "的个人主页",
      thesis: "投资自己 · 构建系统 · 长期主义",
      line3: "Stay Childish.",
      credentials: ["港大 数据科学", "香港 AI + Finance", "ex-HSBC CIB", "小菜Nick"],
      corridorHint: "Hi guys 欢迎来到",
      explore: "关于我 ↓",
      resume: "简历 ↗",
      github: "GitHub ↗",
      bikeAlt: "Nick 骑行时拍在凸面镜里的一张照片",
      places: [
        { id: "taiwan", name: "台湾", note: "我的快乐老家" },
        {
          id: "shenzhen",
          name: "深圳",
          note: "住了十几年也算半个深圳人吧",
        },
        {
          id: "hongkong",
          name: "香港",
          note: "我在港大念书和工作",
        },
      ],
    },
    audience: {
      label: "换个角度看",
      hint: "选一条路，直达你想看的部分。",
      cards: {
        recruiter: {
          title: "招聘",
          description: "实习、经历、简历。",
          action: "过往经历 →",
          secondaryAction: "看简历 ↗",
        },
        builder: {
          title: "AI创业",
          description: "我在做的 AI 产品。",
          action: "看项目 →",
        },
        creator: {
          title: "自媒体",
          description: "镜头外的小菜Nick。",
          action: "看内容 →",
        },
      },
    },
    work: {
      label: "03 / 我的项目",
      headline: "我的项目",
      deepPivot: {
        status: "项目进行中",
        title: "DEEP PIVOT",
        descriptor: "私募投资 AI 工作平台",
        summary:
          "为 PE、Private Credit、VC 和 Family Office 等中小金融机构提供 AI 落地，把分散的信息、投资流程和决策工具连接起来。",
        audience: "面向",
        audienceList: ["PE", "Private Credit", "VC", "Family Office"],
      },
      solutionsLabel: "解决方案",
      solutions: {
        "investment-workspace": {
          summary: "把文档、流程状态和模型辅助工具放在同一套投资工作台。",
        },
        feasibility: {
          summary: "人机协同筛选，把投资项目简介转成有证据支撑的评分卡。",
        },
        "private-ai": {
          summary: "为敏感金融流程提供私有模型部署与推理服务。",
        },
        "market-intel": {
          summary: "把 Bloomberg 和新闻监测变成可复用的市场研究与组合监测流程。",
        },
      },
      service: {
        status: "承接合适的项目",
        title: "AI 定制化服务 / FDE",
        summary:
          "我擅长连接技术实现、商业需求和客户沟通，帮助团队用 AI 降本增效、改善执行并创造价值。",
        points: [
          "把业务卡点转成能落地的 AI 工作流",
          "搭建内部工具、数据自动化和 AI 产品",
          "结合工程交付与客户沟通",
        ],
        inquiry: {
          heading: "告诉我你想改善什么",
          name: "姓名",
          email: "联系邮箱",
          role: "你是个人还是公司企业？",
          type: "你需要什么？",
          message: "补充背景",
          submit: "在邮箱中打开草稿 ↗",
          note: "会在你的邮箱应用里打开已填写的草稿，由你确认发送。",
          tooLong: "内容较长，无法可靠地打开邮件草稿。请精简背景，或直接发邮件联系我。",
          roles: {
            individual: "个人",
            company: "公司企业",
          },
          types: {
            "deep-pivot": "DEEP PIVOT 投资 AI 工具平台",
            "custom-ai": "AI定制化服务",
            website: "个人网站搭建 (比如这个网站)",
            other: "其他咨询（包括留学）",
          },
        },
      },
    },
    experience: {
      label: "02 / 过往经历",
      items: {
        archbridge: {
          dates: "至今",
          location: "香港",
          role: "AI 转型与资产管理分析实习生",
          summary:
            "为一家香港资产管理机构做 AI 基础设施与流程自动化，同时支持私募信贷投资流程。",
          points: [
            "在投资与基金运营流程中做内部 AI 系统。",
            "为敏感金融场景部署私有本地 LLM 基础设施。",
            "支持项目筛选、尽调、财务分析、KYC 与投委会准备。",
          ],
        },
        hsbc: {
          dates: "2025",
          location: "香港",
          role: "企业与机构银行\n数据与分析实习 — Channel Analytics",
          summary:
            "用分析、机器学习与受治理的企业数据，改进对公客户开户与数字旅程。",
          points: [
            "通过客户与运营分析定位关键开户瓶颈。",
            "构建 XGBoost 延误风险模型，并用 SHAP 解释。",
            "用 PySpark 与 Starburst 在核心企业系统上设计受治理的数据资产。",
          ],
        },
      },
    },
    story: {
      label: "01 / 关于我",
      headline: "关于我",
      paragraphs: [
        "生于台湾，深圳长大，现在在香港读书和工作。",
        "多年在台湾、深圳和香港之间生活，也让我习惯从不同城市、文化和环境里看事情。",
        "现在主要生活在深圳南山，在香港工作，偶尔回台湾。",
        "哈哈，照片里那个小胖子是我。后来开始认真减脂、训练，只是因为觉得自己应该更健康一点。And why not?",
        "我越来越觉得，健身、投资、工作甚至创业，本质上其实很像：自律、长期、韧性、复利，以及建立系统。",
        "我在港大读 Data Science，预计 2026 年底毕业。之前在 HSBC CIB 做数据分析，现在在香港一家资产管理机构里做 AI Transformation，搭建私有 AI 系统，也参与真实的投资工作流。",
        "工作之外，我在小红书和抖音做内容，叫 小菜Nick。主要记录留学、求职、AI、香港生活，以及一些我正在学习和尝试的东西。",
        "我喜欢投资和资产配置，也喜欢骑车、篮球、健身。比起单纯讨论想法，我更喜欢真正把东西做出来——用 AI 帮企业和朋友解决问题，做一些真正有人会用、有价值的产品。",
      ],
      photos: {
        bike: { title: "骑车", caption: "" },
        "used-to-be-fat": { title: "以前真的好胖", caption: "" },
        "really-fat": { title: "现在胖不回去了", caption: "" },
        "wall-street": {
          title: "投资原则",
          caption: "time in the market > timing the market",
        },
      },
      rail: {
        school: "HKU",
        degree: "数据科学与工程学士（BEng）",
        cfa: "CFA",
        cfaStatus: "Level I Passed",
        principle: "投资原则",
        principleLine: "time in the market > timing the market",
        languages: "语言",
        languageList: ["普通话", "英语", "粤语"],
      },
    },
    community: {
      dsaTitle: "港大数据科学协会",
      dsaRole: "联合创始人",
      dsaCopy: "一个 150+ 人的社区，办过 5+ 场行业活动。",
      creatorTitle: "自媒体",
      creatorCopy: "小红书和抖音累积 7,443 位粉丝，账号小菜Nick。",
      topics: "主要发",
      topicList: ["AI", "求职干货", "港大留学日常生活"],
    },
    elsewhere: {
      label: "04 / 联系方式",
      github: "GitHub ↗",
      rednote: "小红书 ↗",
      douyin: "抖音 ↗",
      email: "邮箱 ↗",
      copied: "已复制",
    },
    build: {
      heading: "也想搭建属于自己的网站吗？",
      copy: "其实用 AI 真的不难，这个网站花了我一个早上",
      action: "告诉我你想做什么 →",
    },
    footer: {
      built: "By Nick Tsai",
      copyright: "© 2026 Nick Tsai. 保留所有权利。",
      notice:
        "个人主页。观点仅代表本人。不展示客户、雇主或交易信息。本站不使用广告或追踪 Cookie。",
    },
    palette: {
      title: "指令",
      hint: "跳到任意一处。",
      actions: {
        "go-work": "我的项目",
        "go-story": "关于我",
        "go-elsewhere": "联系方式",
        "open-resume": "打开简历",
        "open-github": "打开 GitHub",
        "copy-email": "复制邮箱",
        "switch-language": "切换语言",
      },
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function collectKeys(value: unknown, prefix = ""): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) =>
      collectKeys(item, prefix ? `${prefix}.${index}` : String(index)),
    );
  }

  if (value && typeof value === "object") {
    return Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
      collectKeys(child, prefix ? `${prefix}.${key}` : key),
    );
  }

  return [prefix];
}
