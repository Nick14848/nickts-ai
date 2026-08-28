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
      "ai-workflows",
      "internal-tools",
      "data-automation",
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
    });
    expect(dictionaries.en.audience).toEqual({
      label: "A different view",
      hint: "Choose your role and see only what matters to you.",
      cards: {
        recruiter: {
          title: "Recruiter",
          description:
            "See my previous internships and work experience, or go straight to my CV.",
          action: "View experience →",
          secondaryAction: "View CV ↗",
        },
        builder: {
          title: "AI Venture",
          description: "See the cool AI products I build, from B2B to B2C.",
          action: "View projects →",
        },
        creator: {
          title: "Media",
          description: "See my content, community, and 小菜Nick off-camera.",
          action: "View content →",
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
    });
    expect(dictionaries.zh.hero.places.map(({ name }) => name)).toEqual([
      "台湾",
      "深圳",
      "香港",
    ]);
    expect(dictionaries.zh.audience).toEqual({
      label: "换个角度看",
      hint: "选择你的角色，只看你感兴趣的部分",
      cards: {
        recruiter: {
          title: "招聘",
          description: "查看我的过往实习工作经历，或者直接看简历",
          action: "查看过往经历 →",
          secondaryAction: "看简历 ↗",
        },
        builder: {
          title: "AI创业",
          description: "查看我做的一些 cool AI 产品项目，to B or to C",
          action: "查看项目 →",
        },
        creator: {
          title: "自媒体",
          description: "查看我做的自媒体内容，以及镜头外面的那个小菜Nick~",
          action: "查看内容 →",
        },
      },
    });
  });

  it("locks English story, project, inquiry, and build copy", () => {
    expect(dictionaries.en.story.paragraphs).toEqual([
      "Born in Taiwan, raised in Shenzhen, studying and working in Hong Kong.",
      "Years across Taiwan, Shenzhen and Hong Kong gave me a fairly unusual perspective.",
      "I mostly live in Nanshan, Shenzhen, work in Hong Kong, and go back to Taiwan for breaks.",
      "Yes, the chubby kid in the photos is me. I lost weight because I felt too heavy and wanted to be healthier — and why not?",
      "I think fitness, investing in financial markets, work, and entrepreneurship are fundamentally the same game: discipline, patience, resilience, compounding, and systems.",
      "I study Data Science at HKU (graduating at the end of 2026), previously worked in analytics at HSBC CIB, and now build private AI systems inside a Hong Kong asset manager.",
      "Outside work, I create content on RedNote and Douyin as 小菜Nick — recording life, making people smile, sharing study-abroad and career experiences, exploring cultural differences across the Taiwan Strait, and publishing practical AI notes.",
      "I enjoy studying investing and asset allocation, cycling, basketball, and training. I also like building useful things — for example, helping companies and friends solve problems with AI and create real value.",
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
          type: "What do you need?",
          message: "Context",
          submit: "Open email draft ↗",
          note: "This opens a prepared draft in your email app. You decide when to send it.",
          tooLong:
            "This draft is too long for a reliable email link. Shorten the context or email me directly.",
          types: {
            "ai-workflows": "AI workflows",
            "internal-tools": "Internal tools",
            "data-automation": "Data and automation",
            website: "Website building",
            other: "Other",
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
      "生于台湾，深圳长大，在香港读书和工作。",
      "多年在两岸三地生活，给了我比较独特的视野。",
      "现在主要住在深圳南山，香港工作，偶尔回台湾度假。",
      "哈哈照片里那个小胖子是我，减肥只是因为觉得以前太胖了，想健康一点，and why not?",
      "我觉得减肥健身、投资金融市场、工作、创业本质其实是同一件事：自律、长期、韧性、复利、系统。",
      "我在港大读 Data Science（即将 2026 年底毕业），在 HSBC CIB 做过分析，现在在香港资管机构里搭私有 AI 系统。",
      "工作之外我在小红书和抖音做自媒体，小菜Nick，主要是记录生活，给其他人带来快乐，分享留学求职日常，记录两岸文化差异，AI学习干货等等。",
      "我喜欢研究投资、资产配置，还喜欢骑车、打篮球、健身，也喜欢上手做一些有价值、有意义的东西。比如帮企业/朋友用AI解决问题，创造价值！",
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
          type: "你需要什么？",
          message: "补充背景",
          submit: "在邮箱中打开草稿 ↗",
          note: "会在你的邮箱应用里打开已填写的草稿，由你确认发送。",
          tooLong: "内容较长，无法可靠地打开邮件草稿。请精简背景，或直接发邮件联系我。",
          types: {
            "ai-workflows": "AI 工作流",
            "internal-tools": "内部工具",
            "data-automation": "数据与自动化",
            website: "网站搭建",
            other: "其他",
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
  });
});
