export type Language = "en" | "zh";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experiments: "AI Experiments",
      blog: "Blog",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      title: "AI Product Manager",
      subtitle:
        "Building intelligent and secure systems through AI, security engineering, and product thinking.",
      ctaProjects: "View Projects",
      ctaContact: "Contact",
    },
    about: {
      heading: "About",
      body:
        "I am a computer science and technology graduate with strong interests in artificial intelligence systems, cybersecurity, and product design. My work focuses on bridging technical implementation with product thinking.",
    },
    skills: {
      heading: "Skills",
      categories: [
        { title: "AI & Machine Learning", items: ["LLM workflows", "Model evaluation", "Prompting"] },
        { title: "Cybersecurity", items: ["Threat modeling", "Secure auth", "App security"] },
        { title: "Product Strategy", items: ["Discovery", "Roadmapping", "Metrics"] },
        { title: "System Design", items: ["APIs", "Scalability", "Reliability"] },
        { title: "Data Analysis", items: ["Experiment design", "Dashboards", "Insights"] },
      ],
    },
    projects: {
      heading: "Projects",
      items: [
        {
          title: "Credit Risk Assessment System",
          description:
            "A credit risk classification system using PyTorch neural networks. Includes data preprocessing, SMOTE-based imbalance handling, federated learning with FedAvg aggregation, and model sharing via IPFS and smart contracts.",
          tags: ["PyTorch", "Machine Learning", "Federated Learning", "Blockchain", "IPFS"],
        },
        {
          title: "Medical Data Access Control Platform",
          description:
            "A secure access control platform for medical data systems integrating password + TOTP multi-factor authentication, RSA + AES hybrid encryption, RBAC authorization, and PMML-based risk scoring.",
          tags: ["MFA", "Hybrid Encryption", "RBAC", "PMML", "Security"],
        },
        {
          title: "AI Product Prototyping Experiments",
          description:
            "Exploring AI-assisted product development by rapidly generating product prototypes using prompt-driven design and iterative development workflows.",
          tags: ["AI", "Prompt", "Product design", "Prototype development"],
        },
      ],
    },
    experiments: {
      heading: "AI Experiments",
      body:
        "AI tools accelerate product prototyping by transforming ideas into working systems through prompt-driven iteration.",
    },
    blog: {
      heading: "Blog",
      items: [
        "AI-Assisted Product Development",
        "Designing Secure AI Systems",
        "Rapid Prototyping with AI Tools",
      ],
    },
    process: {
      heading: "Product Development Process",
      steps: [
        { title: "Problem Definition", description: "Clarify user pain, constraints, and success metrics." },
        { title: "AI-assisted Prototype Generation", description: "Use AI to draft flows, specs, and initial builds." },
        { title: "Prompt-driven Iteration", description: "Iterate fast with structured prompts and feedback loops." },
        { title: "UX Optimization", description: "Polish usability, accessibility, and interaction details." },
        { title: "Deployment", description: "Ship, monitor, and improve with real-world data." },
      ],
    },
    contact: {
      heading: "Contact",
      email: "Email",
      github: "GitHub",
      linkedin: "Wechat",
    },
    footer: {
      copyright: "© {year} AI Product Manager. All rights reserved for tangtang.",
    },
  },
  zh: {
    nav: {
      about: "关于",
      skills: "技能",
      projects: "项目",
      experiments: "AI 实验",
      blog: "博客",
      process: "产品流程",
      contact: "联系",
    },
    hero: {
      title: "AI 产品经理",
      subtitle: "专注于通过人工智能、安全工程与产品思维构建智能且安全的系统。",
      ctaProjects: "查看项目",
      ctaContact: "联系我",
    },
    about: {
      heading: "关于",
      body:
        "我是一名计算机科学与技术背景的毕业生，主要关注人工智能系统、安全工程以及产品设计。我的工作重点在于将技术实现与产品思维结合。",
    },
    skills: {
      heading: "技能",
      categories: [
        { title: "AI 与机器学习", items: ["LLM 工作流", "模型评估", "Prompt 设计"] },
        { title: "安全工程", items: ["威胁建模", "安全认证", "应用安全"] },
        { title: "产品策略", items: ["需求洞察", "路线图", "指标体系"] },
        { title: "系统设计", items: ["API 设计", "可扩展性", "可靠性"] },
        { title: "数据分析", items: ["实验设计", "数据看板", "洞察分析"] },
      ],
    },
    projects: {
      heading: "项目",
      items: [
        {
          title: "信用风险评估系统",
          description: "使用 PyTorch 构建多层神经网络进行信用风险二分类预测，完成数据预处理、SMOTE 过采样及联邦学习训练流程，并结合 IPFS 与智能合约实现模型共享与版本管理。",
          tags: ["PyTorch", "机器学习", "联邦学习", "区块链", "IPFS"],
        },
        {
          title: "医疗数据访问控制平台",
          description: "面向医疗数据系统设计的安全访问控制平台，结合密码 + TOTP 多因素认证、RSA + AES 混合加密、RBAC 权限控制与 PMML 风险评分，实现安全高效的访问管理。",
          tags: ["MFA", "RSA", "AES", "RBAC", "PMML"],
        },
        {
          title: "AI产品原型实验",
          description: "利用 AI 辅助开发工具快速构建产品原型，通过 Prompt Engineering 驱动界面设计与功能迭代，探索 AI 在产品开发流程中的效率提升。",
          tags: ["AI", "Prompt", "产品设计", "原型开发"],
        },
      ],
    },
    experiments: {
      heading: "AI 实验",
      body: "AI 工具通过 Prompt 驱动的方式将想法快速转化为产品原型，从而加速产品开发。",
    },
    blog: {
      heading: "博客",
      items: ["AI 驱动的产品开发", "构建安全的 AI 系统", "使用 AI 工具快速原型"],
    },
    process: {
      heading: "产品开发流程",
      steps: [
        { title: "问题定义", description: "明确用户痛点、约束条件与成功指标。" },
        { title: "AI 辅助原型生成", description: "用 AI 快速生成流程、规格与初版实现。" },
        { title: "Prompt 驱动迭代", description: "通过结构化 Prompt 与反馈循环快速迭代。" },
        { title: "体验优化", description: "打磨可用性、可访问性与交互细节。" },
        { title: "上线部署", description: "发布、监控，并基于真实数据持续改进。" },
      ],
    },
    contact: {
      heading: "联系",
      email: "邮箱",
      github: "GitHub",
      linkedin: "微信",
    },
    footer: {
      copyright: "© {year} AI 产品经理。糖糖保留所有权利。",
    },
  },
} as const;

