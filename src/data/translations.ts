import type { ExperienceId, LifePhotoId, ProjectId } from "./content";
import type { Lens, Locale } from "./site";

type ProjectCopy = {
  summary: string;
  details: string;
  demo?: string;
};

type ExperienceCopy = {
  dates: string;
  location: string;
  role: string;
  summary: string;
  points: [string, string, string];
};

type LensCue = {
  label: string;
  href: string;
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
    line1: string;
    line2: string;
    line3: string;
    subline: string;
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
  lens: {
    label: string;
    hint: string;
    start: string;
    recruiter: string;
    builder: string;
    creator: string;
    briefs: Record<Lens, string>;
    destinations: Record<Lens, string>;
    cues: Record<Lens, LensCue[]>;
  };
  work: {
    label: string;
    headline: string;
    projects: Record<ProjectId, ProjectCopy>;
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
    copy: string;
    ask: string;
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
      resume: "Resume ↗",
      command: "⌘K",
      menu: "Menu",
      closeMenu: "Close",
      skip: "Skip to about",
    },
    hero: {
      given: "蔡逸凯",
      line1: "Long-termism",
      line2: "Invest in yourself · Capital · Build systems",
      line3: "Stay Childish.",
      subline: "HKU Data Science · Hong Kong AI + Finance · ex-HSBC CIB · 小菜Nick",
      corridorHint: "Hi, I’m",
      explore: "About ↓",
      resume: "Resume ↗",
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
    lens: {
      label: "A different view",
      hint: "Pick a role. Only see the parts you care about.",
      start: "Start here →",
      recruiter: "Recruiter",
      builder: "AI / Startup",
      creator: "Media (my people?)",
      briefs: {
        recruiter: "See internships and work history — or go straight to the resume.",
        builder: "Some cool products I built, to B or to C.",
        creator: "Content, community, and 小菜Nick off-camera.",
      },
      destinations: {
        recruiter: "Past experience",
        builder: "Projects",
        creator: "Community",
      },
      cues: {
        recruiter: [
          { label: "AI Transformation", href: "#experience" },
          { label: "Financial workflows", href: "#experience" },
          { label: "HSBC CIB", href: "#experience" },
          { label: "HKU", href: "#story" },
          { label: "CFA Level I", href: "#story" },
        ],
        builder: [
          { label: "LLM Agents", href: "#project-feasibility" },
          { label: "DGX Spark", href: "#project-private-ai" },
          { label: "vLLM", href: "#project-private-ai" },
          { label: "FastAPI", href: "#work" },
          { label: "Enterprise integrations", href: "#project-nexus" },
        ],
        creator: [
          { label: "AI", href: "#community" },
          { label: "Careers", href: "#community" },
          { label: "HKU", href: "#story" },
          { label: "Student life", href: "#story" },
          { label: "7K+ community", href: "#community" },
        ],
      },
    },
    work: {
      label: "03 / Projects",
      headline: "Projects",
      projects: {
        nexus: {
          summary:
            "An internal AI workspace that pulls together fragmented deal data, investment workflows and AI tools for investment teams.",
          details:
            "It sits between messy source systems and the people who actually use them: documents, workflow state and model-assisted tools on one surface. No client or deal information is shown here.",
          demo: "Request for demo",
        },
        feasibility: {
          summary:
            "A human-in-the-loop screening system that turns investment teasers into evidence-backed scorecards, so review is more consistent.",
          details:
            "The agent extracts claims and asks for evidence. Judgment stays with the investment team. Consistency comes from structure, not from pretending a model can replace review.",
        },
        "private-ai": {
          summary:
            "Deployed Qwen on NVIDIA DGX Spark via vLLM to create a private inference layer for privacy-sensitive financial workflows.",
          details:
            "Sensitive workflows stay on private infrastructure. This site only shows the architecture idea: local model, serving layer, and the systems that call it.",
        },
        "market-intel": {
          summary:
            "A Bloomberg and news-monitoring pipeline that automates recurring market research and portfolio monitoring.",
          details:
            "Recurring research should not depend on someone remembering to check the same screens. The pipeline takes market and news signals and turns them into a repeatable brief.",
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
        "Born in Taiwan, raised in Shenzhen, studying and working in Hong Kong.",
        "Years across Taiwan, Shenzhen and Hong Kong gave me a fairly unusual view of things.",
        "I mostly live in Nanshan, Shenzhen, work in Hong Kong, and go back to Taiwan when I can.",
        "The chubby kid in the photos is me. I got leaner because I felt too fat and wanted to be healthier. And why not?",
        "I think cutting weight, investing, and work are the same game: discipline, long-term, resilience, compounding, systems.",
        "I study Data Science at HKU (graduating end of 2026), interned in analytics at HSBC CIB, and now build private AI systems inside a Hong Kong asset manager.",
        "Outside work I make content on RedNote and Douyin as 小菜Nick. I like investing and asset allocation, cycling, basketball, training, and making things that actually matter — like using AI to solve problems for companies and friends, and creating value.",
      ],
      photos: {
        bike: { title: "Cycling", caption: "" },
        "used-to-be-fat": { title: "I used to be really fat", caption: "" },
        "really-fat": { title: "Not going back", caption: "" },
        "wall-street": {
          title: "time in the market > timing the market",
          caption: "",
        },
        portfolio: { title: "My portfolio (2026/08/28 snapshot)", caption: "" },
      },
      rail: {
        school: "HKU",
        degree: "BEng Data Science & Engineering",
        cfa: "CFA",
        cfaStatus: "Level I passed",
        languages: "Languages",
        languageList: ["Mandarin", "English", "Cantonese"],
      },
    },
    community: {
      dsaTitle: "HKU Data Science Association",
      dsaRole: "Co-founder",
      dsaCopy: "A community of 150+ members, and 5+ industry events.",
      creatorTitle: "Media",
      creatorCopy: "7K+ followers on RedNote and Douyin as 小菜Nick.",
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
      copy: "This is a personal homepage.",
      ask: "How I made this?",
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
        "open-resume": "Open Resume",
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
      line1: "长期主义",
      line2: "投资自己 · 资本 · 构建系统",
      line3: "Stay Childish.",
      subline: "HKU Data Science · 香港 AI + Finance · ex-HSBC CIB · 小菜Nick",
      corridorHint: "Hi 大家好我是",
      explore: "关于我 ↓",
      resume: "简历 ↗",
      github: "GitHub ↗",
      bikeAlt: "Nick 骑行时拍在凸面镜里的一张照片",
      places: [
        { id: "taiwan", name: "Taiwan", note: "我的快乐老家" },
        {
          id: "shenzhen",
          name: "Shenzhen",
          note: "住了十几年也算半个深圳人吧",
        },
        {
          id: "hongkong",
          name: "Hong Kong",
          note: "我在港大念书和工作",
        },
      ],
    },
    lens: {
      label: "换个角度看",
      hint: "选择你的角色，只看你感兴趣的部分",
      start: "从这里开始 →",
      recruiter: "招聘",
      builder: "AI创业",
      creator: "自媒体 (我的粉丝？)",
      briefs: {
        recruiter: "看我的过往实习工作经历，或者直接看简历",
        builder: "看我做的一些 cool 产品项目，to B or to C",
        creator: "看内容、社区，以及镜头外面的那个小菜Nick~",
      },
      destinations: {
        recruiter: "过往经历",
        builder: "我的项目",
        creator: "社区",
      },
      cues: {
        recruiter: [
          { label: "AI Transformation", href: "#experience" },
          { label: "金融工作流", href: "#experience" },
          { label: "HSBC CIB", href: "#experience" },
          { label: "HKU", href: "#story" },
          { label: "CFA Level I", href: "#story" },
        ],
        builder: [
          { label: "LLM Agents", href: "#project-feasibility" },
          { label: "DGX Spark", href: "#project-private-ai" },
          { label: "vLLM", href: "#project-private-ai" },
          { label: "FastAPI", href: "#work" },
          { label: "企业系统集成", href: "#project-nexus" },
        ],
        creator: [
          { label: "AI", href: "#community" },
          { label: "求职干货", href: "#community" },
          { label: "HKU", href: "#story" },
          { label: "港大日常", href: "#story" },
          { label: "7K+ 粉丝", href: "#community" },
        ],
      },
    },
    work: {
      label: "03 / 我的项目",
      headline: "我的项目",
      projects: {
        nexus: {
          summary:
            "一套内部 AI 工作台，把分散的交易资料、投资流程和 AI 工具收拢给投资团队使用。",
          details:
            "它处在凌乱的源系统和真正使用者之间：文档、流程状态和模型辅助工具放在同一块界面。这里只讲系统结构，不展示任何客户或交易信息。",
          demo: "申请演示",
        },
        feasibility: {
          summary:
            "一个人机协同的筛选系统，把投资项目简介转成有证据支撑的评分卡，让审阅更稳定。",
          details:
            "Agent 负责抽取主张、追问证据；判断仍留给投资团队。稳定性来自结构，而不是假装模型可以替代审阅。",
        },
        "private-ai": {
          summary:
            "在 NVIDIA DGX Spark 上通过 vLLM 部署 Qwen，为敏感金融流程做私有推理层。",
          details:
            "敏感流程留在私有基础设施里。这个站点只展示架构意图：本地模型、服务层，以及调用它的系统。",
        },
        "market-intel": {
          summary:
            "做 Bloomberg 与新闻监测流水线，把重复的市场研究和组合监测变成自动流程。",
          details:
            "重复研究不该依赖有人记得去看同一批屏幕。流水线接收市场与新闻信号，再整理成可复用的简报。",
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
        "生于台湾，深圳长大，在香港读书和工作。",
        "多年在两岸三地生活，给了我比较独特的视野。",
        "现在主要住在深圳南山，香港工作，偶尔回台湾度假。",
        "照片里那个小胖子是我，变瘦只是因为觉得以前太胖了，想健康一点，and why not?",
        "我觉得减肥、投资金融市场、工作其实是同一件事：自律、长期、韧性、复利、系统。",
        "我在港大读 Data Science（即将 2026 年底毕业），在 HSBC CIB 做过分析，现在在香港资管机构里搭私有 AI 系统。",
        "工作之外我在小红书和抖音做自媒体，小菜Nick，喜欢研究投资、资产配置，还喜欢骑车、打篮球、健身，也喜欢上手做一些有价值、有意义的东西。比如帮企业/朋友用AI解决问题，创造价值！",
      ],
      photos: {
        bike: { title: "骑车", caption: "" },
        "used-to-be-fat": { title: "我以前真的好胖", caption: "" },
        "really-fat": { title: "现在胖不回去了", caption: "" },
        "wall-street": {
          title: "time in the market > timing the market",
          caption: "",
        },
        portfolio: { title: "我的投资组合 (2026/08/28 snapshot)", caption: "" },
      },
      rail: {
        school: "HKU",
        degree: "数据科学与工程学士（BEng）",
        cfa: "CFA",
        cfaStatus: "已通过 Level I",
        languages: "语言",
        languageList: ["普通话", "英语", "粤语"],
      },
    },
    community: {
      dsaTitle: "港大数据科学协会",
      dsaRole: "联合创始人",
      dsaCopy: "一个 150+ 人的社区，办过 5+ 场行业活动。",
      creatorTitle: "自媒体",
      creatorCopy: "小红书和抖音累积 7K+ 粉丝，账号小菜Nick。",
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
      copy: "这是一份个人主页。",
      ask: "我怎么做的？",
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
