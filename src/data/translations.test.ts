import { describe, expect, it } from "vitest";
import * as content from "./content";
import { site } from "./site";
import { collectKeys, dictionaries } from "./translations";

describe("translations", () => {
  it("keeps English and Chinese dictionaries in key parity", () => {
    expect(collectKeys(dictionaries.zh)).toEqual(collectKeys(dictionaries.en));
  });

  it("excludes legacy dictionary sections", () => {
    for (const dictionary of Object.values(dictionaries)) {
      const dictionaryRecord = dictionary as unknown as Record<string, unknown>;
      const workRecord = dictionary.work as unknown as Record<string, unknown>;

      expect(dictionaryRecord).not.toHaveProperty("lens");
      expect(workRecord).not.toHaveProperty("projects");
      expect(workRecord).not.toHaveProperty("chapters");
    }
  });

  it("locks the site contact contract", () => {
    expect(site).toMatchObject({
      domain: "nicktsai.me",
      url: "https://nicktsai.me",
      email: "nicktsai1221@gmail.com",
      inquiryEmail: "nicktsai1221@163.com",
      deepPivotUrl: null,
    });
    expect(site).not.toHaveProperty("nexusDemoHref");
  });

  it("locks project, solution, and inquiry identifiers", () => {
    const nextContent = content as typeof content & {
      projectEntries?: ReadonlyArray<{ id: string; index: string; copyKey?: string }>;
      solutionModules?: ReadonlyArray<{
        id: string;
        name: string;
        tags: readonly string[];
        visual: string;
      }>;
      inquiryTypes?: readonly string[];
    };

    expect(nextContent.projectEntries).toEqual([
      { id: "deep-pivot", index: "01", copyKey: "deepPivot" },
      { id: "ai-services", index: "02", copyKey: "service" },
    ]);
    expect(nextContent.projectEntries?.map(({ id }) => id)).toEqual([
      "deep-pivot",
      "ai-services",
    ]);
    expect(nextContent.solutionModules).toEqual([
      {
        id: "investment-workspace",
        name: "INVESTMENT WORKSPACE",
        tags: ["AI SYSTEMS", "PRIVATE MARKETS", "WORKFLOW", "NODE.JS"],
        visual: "workspace",
      },
      {
        id: "feasibility",
        name: "FEASIBILITY AGENT",
        tags: ["LLM AGENTS", "HUMAN-IN-THE-LOOP", "PRIVATE CREDIT"],
        visual: "feasibility",
      },
      {
        id: "private-ai",
        name: "PRIVATE AI INFRASTRUCTURE",
        tags: ["DGX SPARK", "vLLM", "LOCAL LLM"],
        visual: "privateAi",
      },
      {
        id: "market-intel",
        name: "MARKET INTELLIGENCE PIPELINE",
        tags: ["BLOOMBERG", "BLPAPI", "AUTOMATION"],
        visual: "market",
      },
    ]);
    expect(nextContent.solutionModules).toHaveLength(4);
    expect(nextContent.solutionModules?.[0]?.name).toBe("INVESTMENT WORKSPACE");
    expect(nextContent.inquiryTypes).toEqual([
      "deep-pivot",
      "custom-ai",
      "website",
      "other",
    ]);
  });

  it("routes each audience to its relevant section", () => {
    const nextContent = content as typeof content & {
      audienceOrder?: readonly string[];
      audienceRoutes?: Record<string, { href: string }>;
    };

    expect(nextContent.audienceOrder).toEqual(["recruiter", "builder", "creator"]);
    expect(nextContent.audienceRoutes).toEqual({
      recruiter: { href: "#experience" },
      builder: { href: "#work" },
      creator: { href: "#community" },
    });
  });

  it("locks English navigation, hero, and audience copy", () => {
    expect(dictionaries.en.nav).toMatchObject({
      work: "Projects",
      story: "About",
      elsewhere: "Contact",
      resume: "CV ↗",
    });
    expect(dictionaries.en.hero).toEqual({
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
    });
    expect(dictionaries.en.audience).toEqual({
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
    });
  });

  it("locks Chinese navigation, hero, and audience copy", () => {
    expect(dictionaries.zh.nav).toMatchObject({
      work: "我的项目",
      story: "关于我",
      elsewhere: "联系方式",
      resume: "简历 ↗",
    });
    expect(dictionaries.zh.hero).toEqual({
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
    });
    expect(dictionaries.zh.hero.places.map(({ name }) => name)).toEqual([
      "台湾",
      "深圳",
      "香港",
    ]);
    expect(dictionaries.zh.audience).toEqual({
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
    });
  });

  it("locks English story, project, inquiry, and build copy", () => {
    expect(dictionaries.en.story.paragraphs).toEqual([
      "Born in Taiwan, raised in Shenzhen, now studying and working in Hong Kong.",
      "Years living between Taiwan, Shenzhen and Hong Kong have made me used to seeing things through different cities, cultures and environments.",
      "I mostly live in Nanshan, Shenzhen, work in Hong Kong, and go back to Taiwan from time to time.",
      "Haha — the chubby kid in the photos is me. I later started cutting fat and training seriously, just because I felt I should be healthier. And why not?",
      "I've come to think fitness, investing, work, even building a company, are essentially the same game: discipline, the long term, resilience, compounding, and building systems.",
      "I study Data Science at HKU, graduating at the end of 2026. I previously did analytics at HSBC CIB. Now I do AI Transformation at a Hong Kong asset manager — building private AI systems and working inside real investment workflows.",
      "Outside work I make content on RedNote and Douyin as 小菜Nick — mostly study abroad, job hunting, AI, life in Hong Kong, and things I'm learning and trying.",
      "I like investing and asset allocation, and I like cycling, basketball, and training. More than talking about ideas, I like actually making things — using AI to solve problems for companies and friends, and building products people will use and that create real value.",
    ]);
    expect(dictionaries.en.story.photos["used-to-be-fat"].title).toBe(
      "I used to be really fat",
    );
    expect(dictionaries.en.work).toEqual({
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
          summary: "Repeatable Bloomberg and news monitoring for market research and portfolios.",
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
    });
    expect(dictionaries.en.build).toEqual({
      heading: "Want to build a website of your own?",
      copy: "Building with AI is genuinely approachable. This site took me one morning.",
      action: "Tell me what you want to build →",
    });
  });

  it("locks Chinese story, project, inquiry, and build copy", () => {
    expect(dictionaries.zh.story.paragraphs).toEqual([
      "生于台湾，深圳长大，现在在香港读书和工作。",
      "多年在台湾、深圳和香港之间生活，也让我习惯从不同城市、文化和环境里看事情。",
      "现在主要生活在深圳南山，在香港工作，偶尔回台湾。",
      "哈哈，照片里那个小胖子是我。后来开始认真减脂、训练，只是因为觉得自己应该更健康一点。And why not?",
      "我越来越觉得，健身、投资、工作甚至创业，本质上其实很像：自律、长期、韧性、复利，以及建立系统。",
      "我在港大读 Data Science，预计 2026 年底毕业。之前在 HSBC CIB 做数据分析，现在在香港一家资产管理机构里做 AI Transformation，搭建私有 AI 系统，也参与真实的投资工作流。",
      "工作之外，我在小红书和抖音做内容，叫 小菜Nick。主要记录留学、求职、AI、香港生活，以及一些我正在学习和尝试的东西。",
      "我喜欢投资和资产配置，也喜欢骑车、篮球、健身。比起单纯讨论想法，我更喜欢真正把东西做出来——用 AI 帮企业和朋友解决问题，做一些真正有人会用、有价值的产品。",
    ]);
    expect(dictionaries.zh.story.photos["used-to-be-fat"].title).toBe("以前真的好胖");
    expect(dictionaries.zh.work).toEqual({
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
    });
    expect(dictionaries.zh.build).toEqual({
      heading: "也想搭建属于自己的网站吗？",
      copy: "其实用 AI 真的不难，这个网站花了我一个早上",
      action: "告诉我你想做什么 →",
    });

    expect(dictionaries.zh.work.deepPivot.status).toBe("项目进行中");
    expect(dictionaries.en.work.deepPivot.status).toBe("Project in progress");
    expect(dictionaries.en.story.rail.cfaStatus).toBe("Level I Passed");
    expect(dictionaries.zh.story.rail.cfaStatus).toBe("Level I Passed");
    expect(dictionaries.zh.story.rail.principle).toBe("投资原则");
    expect(dictionaries.en.story.rail.principleLine).toBe(
      "time in the market > timing the market",
    );
  });
});
