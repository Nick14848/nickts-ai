import type { ExperienceId, InquiryType, LifePhotoId, ProjectId, WorkChapterId } from "./content";
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

type LensAction = {
  label: string;
  href: string;
};

type ChapterCopy = {
  name: string;
  tagline: string;
  summary: string;
  details: string;
  solutions?: string;
};

type InquiryCopy = {
  name: string;
  email: string;
  type: string;
  message: string;
  submit: string;
  note: string;
  types: Record<InquiryType, string>;
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
    resumeCta: string;
    briefs: Record<Lens, string>;
    actions: Record<Lens, LensAction[]>;
  };
  work: {
    label: string;
    headline: string;
    chapters: Record<WorkChapterId, ChapterCopy>;
    inquiry: InquiryCopy;
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
    headline: string;
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
      resume: "CV ↗",
      command: "⌘K",
      menu: "Menu",
      closeMenu: "Close",
      skip: "Skip to about",
    },
    hero: {
      given: "蔡逸凯",
      line1: "A personal homepage",
      line2: "Invest in yourself · Build systems · Long-termism",
      line3: "Stay Childish.",
      subline: "HKU Data Science · Hong Kong AI + Finance · ex-HSBC CIB · 小菜Nick",
      corridorHint: "Hi, I’m",
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
    lens: {
      label: "A different view",
      hint: "Pick a role. Only see the parts you care about.",
      start: "Start here →",
      recruiter: "Recruiter",
      builder: "AI / Startup",
      creator: "Media",
      resumeCta: "open the CV",
      briefs: {
        recruiter: "See internships and work history, or ",
        builder: "See some cool AI products I built, to B or to C.",
        creator: "See the content I make, and 小菜Nick off-camera.",
      },
      actions: {
        recruiter: [
          { label: "Past experience →", href: "#experience" },
          { label: "Open CV ↗", href: "resume" },
        ],
        builder: [{ label: "See projects →", href: "#work" }],
        creator: [{ label: "See the work →", href: "#community" }],
      },
    },
    work: {
      label: "03 / Projects",
      headline: "Projects",
      chapters: {
        "deep-pivot": {
          name: "Deep Pivot",
          tagline: "Private Market AI Workspace",
          summary:
            "AI implementation for mid-market financial firms — PE, private credit, VC and family offices. One workspace for deal data, screening, private inference and market monitoring.",
          details:
            "Nexus, Feasibility Agent, private AI infrastructure and the market-intelligence pipeline are product demos under this umbrella. Client names and deal data stay off this site.",
          solutions: "Solution demos",
        },
        "custom-ai": {
          name: "Custom AI",
          tagline: "Forward-deployed, mixed tech and talking to customers",
          summary:
            "I help people and companies use AI to solve real problems: cut cost, raise throughput, and bridge technical work with business requirements.",
          details:
            "If you want a scoped build, an internal workflow, or a site like this one, send an inquiry. It opens a draft email you can edit before it goes out.",
        },
      },
      inquiry: {
        name: "Full name",
        email: "Email",
        type: "What is this about?",
        message: "Message",
        submit: "Draft an email →",
        note: "Opens your mail app with a draft to Nick. Edit it before sending.",
        types: {
          consulting: "AI consulting / FDE",
          "deep-pivot": "Deep Pivot",
          website: "Personal site / build",
          other: "Other",
        },
      },
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
        "Haha — the chubby kid in the photos is me. I cut weight because I felt too fat and wanted to be healthier. And why not?",
        "I think fitness, investing, work and building a company are the same game: discipline, long-term, resilience, compounding, systems.",
        "I study Data Science at HKU (graduating end of 2026), interned in analytics at HSBC CIB, and now build private AI systems inside a Hong Kong asset manager.",
        "Outside work I’m 小菜Nick on RedNote and Douyin. I record life, make people laugh, share study-abroad and job-hunting days, the cultural gaps across the strait, and practical AI notes.",
        "I like investing and asset allocation, cycling, basketball, training, and making things that actually matter — like using AI to solve problems for companies and friends, and creating value.",
      ],
      photos: {
        bike: { title: "Cycling", caption: "" },
        "used-to-be-fat": { title: "Used to be really fat", caption: "" },
        "really-fat": { title: "Not going back", caption: "" },
        "wall-street": {
          title: "time in the market > timing the market",
          caption: "",
        },
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
      headline: "Want a site like this?",
      copy: "Using AI is not that hard. This homepage took me one morning.",
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
      line1: "的个人主页",
      line2: "投资自己 · 构建系统 · 长期主义",
      line3: "Stay Childish.",
      subline: "港大 数据科学 · 香港 AI + Finance · ex-HSBC CIB · 小菜Nick",
      corridorHint: "Hi 大家好我是",
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
    lens: {
      label: "换个角度看",
      hint: "选择你的角色，只看你感兴趣的部分",
      start: "从这里开始 →",
      recruiter: "招聘",
      builder: "AI创业",
      creator: "自媒体",
      resumeCta: "看简历",
      briefs: {
        recruiter: "查看我的过往实习工作经历，或者直接",
        builder: "查看我做的一些 cool AI 产品项目，to B or to C",
        creator: "查看我做的自媒体内容，以及镜头外面的那个小菜Nick~",
      },
      actions: {
        recruiter: [
          { label: "过往经历 →", href: "#experience" },
          { label: "看简历 ↗", href: "resume" },
        ],
        builder: [{ label: "看项目 →", href: "#work" }],
        creator: [{ label: "看内容 →", href: "#community" }],
      },
    },
    work: {
      label: "03 / 我的项目",
      headline: "我的项目",
      chapters: {
        "deep-pivot": {
          name: "Deep Pivot",
          tagline: "私募投资 AI 工作平台",
          summary:
            "给中小金融机构做 AI 落地：PE、私募信贷、VC、家族办公室。把交易资料、筛选、私有推理和市场监测收在同一套工作台里。",
          details:
            "Nexus、Feasibility Agent、私有 AI 基础设施和市场情报流水线，是这套平台下的落地 demo。客户名和交易数据不会出现在这个站点。",
          solutions: "落地案例",
        },
        "custom-ai": {
          name: "AI 定制服务",
          tagline: "定制化落地，技术与业务之间的翻译",
          summary:
            "我帮人和公司用 AI 解决问题、降本增效。擅长把技术工作和业务需求接上，一边写系统一边和客户把问题谈清楚。",
          details:
            "如果你想做内部流程、一个具体系统，或是像这样一份个人主页，发一条咨询。会打开一封邮件草稿，你可以改完再发。",
        },
      },
      inquiry: {
        name: "姓名",
        email: "邮箱",
        type: "想聊什么？",
        message: "留言",
        submit: "生成邮件草稿 →",
        note: "会打开邮件应用，草稿发给 Nick。发出前你可以自己改。",
        types: {
          consulting: "AI 咨询 / FDE",
          "deep-pivot": "Deep Pivot",
          website: "个人网站 / 搭建",
          other: "其他",
        },
      },
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
        "哈哈照片里那个小胖子是我，减肥只是因为觉得以前太胖了，想健康一点，and why not?",
        "我觉得减肥健身、投资金融市场、工作、创业本质其实是同一件事：自律、长期、韧性、复利、系统。",
        "我在港大读 Data Science（即将 2026 年底毕业），在 HSBC CIB 做过分析，现在在香港资管机构里搭私有 AI 系统。",
        "工作之外我在小红书和抖音做自媒体，小菜Nick，主要是记录生活，给其他人带来快乐，分享留学求职日常，记录两岸文化差异，AI学习干货等等。",
        "我喜欢研究投资、资产配置，还喜欢骑车、打篮球、健身，也喜欢上手做一些有价值、有意义的东西。比如帮企业/朋友用AI解决问题，创造价值！",
      ],
      photos: {
        bike: { title: "骑车", caption: "" },
        "used-to-be-fat": { title: "以前真的好胖", caption: "" },
        "really-fat": { title: "现在胖不回去了", caption: "" },
        "wall-street": {
          title: "time in the market > timing the market",
          caption: "",
        },
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
      headline: "也想搭建属于自己的网站吗？",
      copy: "其实用 AI 真的不难，这个网站花了我一个早上",
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
