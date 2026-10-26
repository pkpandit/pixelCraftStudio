export interface DigitalProduct {
  id: string;
  slug: string;
  title: string;
  productType: string;
  targetCustomer: string;
  mainBenefit: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: "Website Templates" | "React & Next.js Templates" | "Admin Dashboard Templates" | "Figma UI Kits" | "Graphic Design Templates";
  badge?: string;
  rating: number;
  reviewsCount: number;
  salesCount: number;
  features: string[];
  keyFeatures: { number: string; title: string; description: string }[];
  included: string[];
  notIncluded: string[];
  whoIsItFor: {
    freelancers: string;
    startups: string;
    smallBusinesses: string;
    agencies: string;
  };
  faqs: { question: string; answer: string }[];
  license: {
    permitted: string[];
    restrictions: string[];
    notes: string[];
  };
  techStack: string[];
  demoUrl?: string;
  thumbnail: string;
  highlights: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  shortDesc: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  deliverables: string[];
  timeline: string;
  popular?: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "Web App" | "E-Commerce" | "UI/UX Design" | "Website";
  year: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const PROFILE = {
  name: "pixelCraftStudio",
  title: "Digital Products & UI Design Studio",
  eyebrow: "DIGITAL PRODUCTS & UI DESIGN STUDIO",
  headline: "Beautiful Digital Products. Websites Built to Perform.",
  heroBio:
    "Welcome to pixelCraftStudio. We build modern websites, create ready-to-use digital products, and help businesses turn ideas into great digital experiences.",
  yearsExperience: "11+",
  aboutBio: [
    "We are a digital product and design studio passionate about building useful, beautiful, and reliable digital experiences.",
    "With over 11 years of experience, we help businesses, startups, and creators bring their ideas to life. We work with React, Next.js, Node.js, HTML, CSS, and JavaScript to build modern websites and web applications.",
    "We also create digital products that help developers and designers work smarter. From website templates and admin dashboards to Figma UI kits and graphic design templates, our goal is to make high-quality resources accessible and easy to use.",
    "Whether you need a ready-made template or a custom website built around your needs, pixelCraftStudio is here to help.",
  ],
  location: "Bangalore, India & Remote Worldwide",
  availability: "Available for freelance projects & contracts",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
    twitter: "https://twitter.com",
    email: "contact@pixelcraftstudio.com",
  },
  skills: {
    core: ["React", "Next.js", "Node.js", "HTML5", "CSS3", "JavaScript", "TypeScript"],
    design: ["Figma UI Kits", "UI/UX Design", "Design Systems", "Graphic Design Templates", "Wireframing"],
    styling: ["Tailwind CSS", "Modern Vanilla CSS", "Framer Motion", "Responsive Layouts"],
  },
};

export const SERVICES: Service[] = [
  {
    id: "srv-1",
    slug: "custom-website-design",
    title: "Custom Website Design",
    iconName: "Palette",
    shortDesc: "Beautiful, user-friendly website designs that reflect your brand and help you connect with your audience.",
    description: "Every brand has a unique story. I design bespoke web interfaces that establish credibility, captivate visitors, and convert them into loyal clients.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact?service=custom-website-design",
    deliverables: [
      "Custom responsive layouts for desktop, tablet, and mobile",
      "Brand identity alignment & typography selection",
      "Figma design files and interactive design prototypes",
      "Design system components and asset handoff",
    ],
    timeline: "1 - 2 Weeks",
    popular: true,
  },
  {
    id: "srv-2",
    slug: "website-development",
    title: "Website Development",
    iconName: "Code",
    shortDesc: "Modern, responsive websites built with React, Next.js, HTML, CSS, and JavaScript. I focus on clean code, performance, and usability.",
    description: "I translate designs into fast, accessible, and SEO-optimized code. From landing pages to multi-page corporate portals, your website will be lightning-fast and easy to maintain.",
    ctaText: "Build My Website",
    ctaHref: "/contact?service=website-development",
    deliverables: [
      "Next.js App Router or modern React architecture",
      "Semantic HTML5, CSS3, and Tailwind CSS styling",
      "100/100 Core Web Vitals performance benchmarks",
      "Cross-browser testing & mobile responsiveness",
    ],
    timeline: "2 - 4 Weeks",
    popular: true,
  },
  {
    id: "srv-3",
    slug: "web-application-development",
    title: "Web Application Development",
    iconName: "LayoutDashboard",
    shortDesc: "Custom web applications and interactive dashboards designed to support your business needs and simplify everyday tasks.",
    description: "Need more than a brochure site? I build full-stack web applications with authentication, databases, third-party API integrations, and intuitive dashboard interfaces.",
    ctaText: "Explore Development Services",
    ctaHref: "/services",
    deliverables: [
      "Full-stack architecture with React, Next.js, and Node.js",
      "Database schema modeling, REST/GraphQL APIs",
      "Secure user authentication & role-based permissions",
      "Interactive analytics charts and dashboard widgets",
    ],
    timeline: "3 - 6 Weeks",
  },
  {
    id: "srv-4",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    iconName: "Layers",
    shortDesc: "Thoughtful interfaces and user experiences that make digital products easier to understand and use.",
    description: "Great design isn't just how it looks—it's how it works. I eliminate user friction through detailed wireframing, user journey mapping, and usability testing.",
    ctaText: "Discuss Your Design",
    ctaHref: "/contact?service=ui-ux-design",
    deliverables: [
      "Information architecture & wireframes",
      "User testing and heuristic evaluation",
      "Atomic design system with reusable components",
      "WCAG accessibility guidelines compliance",
    ],
    timeline: "1 - 3 Weeks",
  },
  {
    id: "srv-5",
    slug: "website-redesign",
    title: "Website Redesign",
    iconName: "RefreshCw",
    shortDesc: "Give your existing website a fresh look with improved layouts, better usability, and a modern design.",
    description: "Is your website feeling outdated or underperforming? I revamp legacy sites with modern aesthetics, updated technology stacks, and improved conversion funnels.",
    ctaText: "Improve My Website",
    ctaHref: "/contact?service=website-redesign",
    deliverables: [
      "Comprehensive UX & performance audit of current site",
      "Modernized visual design and refreshed typography",
      "Faster load speeds and mobile-optimized layouts",
      "Zero-downtime migration and launch support",
    ],
    timeline: "2 - 3 Weeks",
  },
];

export const PRODUCT_CATEGORIES = [
  {
    id: "website-templates",
    title: "Website Templates",
    category: "Website Templates" as const,
    description: "Modern, responsive website templates that help you launch professional websites faster.",
    ctaText: "Explore Website Templates",
    iconName: "Globe",
    count: 8,
  },
  {
    id: "nextjs-templates",
    title: "React & Next.js Templates",
    category: "React & Next.js Templates" as const,
    description: "Reusable website templates and starter projects built for modern web development.",
    ctaText: "Explore React & Next.js Templates",
    iconName: "Atom",
    count: 12,
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboard Templates",
    category: "Admin Dashboard Templates" as const,
    description: "Clean, organized dashboard interfaces for SaaS products, business tools, and web applications.",
    ctaText: "Explore Dashboard Templates",
    iconName: "BarChart3",
    count: 6,
  },
  {
    id: "figma-ui-kits",
    title: "Figma UI Kits",
    category: "Figma UI Kits" as const,
    description: "Reusable UI components and design resources that help you design interfaces more efficiently.",
    ctaText: "Explore Figma UI Kits",
    iconName: "Figma",
    count: 10,
  },
  {
    id: "graphic-design",
    title: "Graphic Design Templates",
    category: "Graphic Design Templates" as const,
    description: "Ready-to-customize design resources for presentations, social media, marketing, and creative projects.",
    ctaText: "Explore Design Templates",
    iconName: "Sparkles",
    count: 15,
  },
];

const COMMON_PRODUCT_FAQS = [
  {
    question: "Q1. How do I receive my purchase?",
    answer: "After your payment is confirmed, you will receive immediate access to your digital files via a secure download link delivered to your email and order confirmation screen. No physical item will be shipped.",
  },
  {
    question: "Q2. Can I customize the product?",
    answer: "Yes, you can fully customize the elements permitted by the product and its license, including colors, typography, components, layouts, and supported features to match your exact brand.",
  },
  {
    question: "Q3. Do I need coding or design experience?",
    answer: "That depends on the product. React and Next.js templates require familiarity with JavaScript, React, and npm. Figma UI kits require basic knowledge of Figma. Check the stated requirements before purchasing.",
  },
  {
    question: "Q4. Can I use this product for client or commercial projects?",
    answer: "Yes, commercial use is fully permitted under our standard commercial license. You can use this product to build client websites, SaaS applications, or commercial platforms.",
  },
  {
    question: "Q5. Will I receive future updates?",
    answer: "Yes! All digital product purchases include lifetime access to minor version updates, bug fixes, and library dependency upgrades at no additional cost.",
  },
  {
    question: "Q6. Can I request a refund?",
    answer: "Digital products can be subject to different refund conditions. Because files are delivered immediately upon checkout, refund requests are evaluated according to our published Refund Policy and consumer protection standards.",
  },
  {
    question: "Q7. Can I get help if I have a problem?",
    answer: "Yes! We provide direct email support for setup assistance, bug reports, and setup clarification. Feel free to reach out to contact@pixelcraftstudio.com with your order details.",
  },
];

const COMMON_LICENSE = {
  permitted: [
    "Use the product for personal or commercial projects permitted by your license.",
    "Customize included elements, colors, code, and layouts to suit your requirements.",
    "Incorporate the product into eligible client deliverables and commercial applications.",
  ],
  restrictions: [
    "Resell, redistribute, or share the original product files as a standalone product.",
    "Make the original source files publicly available for others to download.",
    "Claim ownership of original assets or components you did not create.",
    "Use third-party assets in ways that violate their individual licenses.",
  ],
  notes: [
    "Your purchase grants a license of use, not a copyright transfer of the underlying code.",
    "Third-party assets (such as Google Fonts or Unsplash photos) carry their own licenses.",
    "Redistribution as a competing template or kit is strictly prohibited.",
  ],
};

export const DIGITAL_PRODUCTS: DigitalProduct[] = [
  {
    id: "prod-1",
    slug: "saas-launchpad-pro",
    title: "SaaS Launchpad Pro",
    productType: "Next.js 14 Template",
    targetCustomer: "Developers & Startup Founders",
    mainBenefit: "launch production-ready SaaS applications in days instead of months",
    tagline: "Production-ready Next.js 14 boilerplate with authentication, Stripe subscriptions, and dark mode.",
    description: "Build better digital experiences with SaaS Launchpad Pro, a professionally designed Next.js 14 boilerplate created to help developers and founders launch profitable SaaS applications in days instead of months.",
    price: 79,
    originalPrice: 129,
    category: "React & Next.js Templates",
    badge: "Best Seller",
    rating: 4.9,
    reviewsCount: 142,
    salesCount: 680,
    features: [
      "Next.js 14 App Router + Server Actions",
      "Stripe Customer Portal & Webhook Handlers",
      "Supabase / PostgreSQL Auth & Database",
      "Pre-built Dashboard, Settings, & Analytics UI",
      "Dark & Light mode with Tailwind CSS",
      "Lifetime updates and private GitHub access",
    ],
    keyFeatures: [
      {
        number: "01",
        title: "Full Stack Next.js 14 Architecture",
        description: "Built on the latest Next.js App Router with Server Actions, TypeScript type-safety, and streamlined data fetching for optimal performance.",
      },
      {
        number: "02",
        title: "Complete Stripe Subscription Billing",
        description: "Pre-configured pricing tables, checkout sessions, customer portal, and secure webhook event handlers for recurring SaaS revenue.",
      },
      {
        number: "03",
        title: "Authentication & User Management",
        description: "Ready-to-use email/password, magic links, and OAuth logins with Supabase Auth and role-based route protection.",
      },
      {
        number: "04",
        title: "Easy Customization",
        description: "Customize supported elements to match your project's design, branding, color tokens, and business logic effortlessly.",
      },
      {
        number: "05",
        title: "Organized Files",
        description: "Find relevant files and components quickly with our clean, modular directory structure and comprehensive README setup guide.",
      },
    ],
    included: [
      "Complete Next.js 14 source code with TypeScript",
      "Stripe checkout, customer portal & webhook handlers",
      "Supabase database schemas, migrations & auth setup",
      "Reusable UI components styled with Tailwind CSS",
      "Full documentation and local environment setup guide",
      "Lifetime updates and access to GitHub repository",
    ],
    notIncluded: [
      "Stripe transaction fees or account verification",
      "Third-party paid hosting or domain registration",
      "Custom bespoke feature development beyond standard template",
    ],
    whoIsItFor: {
      freelancers: "Deliver high-converting SaaS projects for clients in a fraction of the time.",
      startups: "Launch your MVP quickly without reinventing auth, billing, and database plumbing.",
      smallBusinesses: "Automate subscriptions and customer portal workflows with zero hassle.",
      agencies: "Scale your development team's throughput with a proven, standardized boilerplate.",
    },
    faqs: COMMON_PRODUCT_FAQS,
    license: COMMON_LICENSE,
    techStack: ["Next.js 14", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "Prisma"],
    demoUrl: "https://example.com/demo/saas-launchpad",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    highlights: [
      { label: "Architecture", value: "Next.js 14 App Router" },
      { label: "Auth Ready", value: "Supabase + OAuth" },
      { label: "Payments", value: "Stripe Subscriptions" },
      { label: "License", value: "Commercial Use Included" },
    ],
  },
  {
    id: "prod-2",
    slug: "apex-design-system-figma",
    title: "Apex UI Design System",
    productType: "Figma UI Kit",
    targetCustomer: "Designers & Product Teams",
    mainBenefit: "design consistent, modern interfaces in minutes with tokenized components",
    tagline: "Comprehensive Figma UI kit with 800+ components, auto-layout 5.0, and tokenized styles.",
    description: "Build better digital experiences with Apex UI Design System, a professionally designed Figma UI kit created to help designers and product teams design modern interfaces with speed and precision.",
    price: 49,
    originalPrice: 89,
    category: "Figma UI Kits",
    badge: "Staff Pick",
    rating: 5.0,
    reviewsCount: 98,
    salesCount: 420,
    features: [
      "800+ customizable Figma components with Auto-Layout",
      "Design token architecture synced for Tailwind CSS",
      "Light and Dark mode variables included",
      "25+ pre-designed responsive page templates",
      "Custom icon library with 200+ vector icons",
      "Regular updates with new components",
    ],
    keyFeatures: [
      {
        number: "01",
        title: "800+ Auto-Layout 5.0 Components",
        description: "Pixel-perfect buttons, inputs, modals, navigation bars, and cards built with Figma's latest variant properties and responsive constraints.",
      },
      {
        number: "02",
        title: "Design Tokens & Variable Modes",
        description: "Seamlessly switch between Light and Dark modes with native Figma Variables mapped directly to Tailwind CSS class names.",
      },
      {
        number: "03",
        title: "25+ Ready Application Screens",
        description: "Pre-assembled landing pages, SaaS dashboards, authentication flows, and settings views ready for immediate adaptation.",
      },
      {
        number: "04",
        title: "Easy Customization",
        description: "Adjust global color palettes, typography scales, border radii, and component states with a single click in Figma.",
      },
      {
        number: "05",
        title: "Organized Files",
        description: "Strict atomic design hierarchy (Atoms, Molecules, Organisms, Templates) clearly labeled on organized Figma pages.",
      },
    ],
    included: [
      "Complete .FIG file with 800+ components and variants",
      "Figma Variables for color, spacing, and typography",
      "25+ full desktop and mobile responsive templates",
      "Custom vector icon set in stroke and duotone styles",
      "Component documentation and design guideline sheet",
    ],
    notIncluded: [
      "Figma software subscription (works with free Figma accounts)",
      "HTML or React code (design asset only)",
    ],
    whoIsItFor: {
      freelancers: "Design high-end client mockups in hours instead of days.",
      startups: "Establish a cohesive visual brand and design system before writing code.",
      smallBusinesses: "Create professional marketing assets and mockups for digital products.",
      agencies: "Standardize client design workflows across junior and senior designers.",
    },
    faqs: COMMON_PRODUCT_FAQS,
    license: COMMON_LICENSE,
    techStack: ["Figma", "Auto-Layout 5.0", "Design Tokens", "WCAG 2.1"],
    demoUrl: "https://example.com/demo/apex-figma",
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    highlights: [
      { label: "Components", value: "800+ Variants" },
      { label: "Tokens", value: "Figma Variables Ready" },
      { label: "Accessibility", value: "WCAG AA Checked" },
      { label: "Templates", value: "25+ Full Pages" },
    ],
  },
  {
    id: "prod-3",
    slug: "nexus-admin-dashboard",
    title: "Nexus Admin Dashboard",
    productType: "Admin Dashboard Template",
    targetCustomer: "SaaS Creators & Enterprises",
    mainBenefit: "build scalable, organized business tools and analytics platforms",
    tagline: "Clean, organized dashboard interface for SaaS products, business tools, and web applications.",
    description: "Build better digital experiences with Nexus Admin Dashboard, a professionally designed dashboard template created to help SaaS creators build scalable analytics platforms with clean code.",
    price: 59,
    originalPrice: 99,
    category: "Admin Dashboard Templates",
    badge: "Trending",
    rating: 4.8,
    reviewsCount: 64,
    salesCount: 290,
    features: [
      "10+ dashboard variations for Finance, CRM, and Analytics",
      "Sortable, filterable datatables with pagination",
      "Dark and light theme toggles",
      "Reusable form components with validation",
      "Modular grid system with drag-and-drop layout support",
    ],
    keyFeatures: [
      {
        number: "01",
        title: "Modular Analytics & Charts",
        description: "Interactive line charts, bar charts, revenue breakdowns, and KPI summary cards powered by Recharts.",
      },
      {
        number: "02",
        title: "Data-Dense Tables & Filters",
        description: "Sortable, searchable, and paginated datatables engineered for handling large datasets with smooth performance.",
      },
      {
        number: "03",
        title: "Role-Based Layouts",
        description: "Includes admin management, billing history, team invitations, and audit log screens out of the box.",
      },
      {
        number: "04",
        title: "Easy Customization",
        description: "Customize navigation links, metrics widgets, brand colors, and chart themes with simple configuration objects.",
      },
      {
        number: "05",
        title: "Organized Files",
        description: "Separated into clean component folders with TypeScript interfaces for mock API integration.",
      },
    ],
    included: [
      "Complete Next.js & React source code",
      "35+ pre-built dashboard and sub-navigation screens",
      "Interactive charts and data table components",
      "Mock data generators and TypeScript type definitions",
      "Setup guide and documentation",
    ],
    notIncluded: [
      "Production backend database connection",
      "Paid third-party analytics API subscriptions",
    ],
    whoIsItFor: {
      freelancers: "Build internal tools and custom portals for enterprise clients.",
      startups: "Deliver an executive-level dashboard to early users without delay.",
      smallBusinesses: "Monitor sales, inventory, and customer activity in one dashboard.",
      agencies: "Accelerate custom web application projects with pre-tested layouts.",
    },
    faqs: COMMON_PRODUCT_FAQS,
    license: COMMON_LICENSE,
    techStack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Recharts"],
    demoUrl: "https://example.com/demo/nexus-dashboard",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    highlights: [
      { label: "Screens", value: "35+ Pages" },
      { label: "Charts", value: "Recharts Integrated" },
      { label: "Theme", value: "Light & Dark Mode" },
      { label: "Responsive", value: "100% Mobile Ready" },
    ],
  },
  {
    id: "prod-4",
    slug: "foliocraft-website-template",
    title: "FolioCraft Website Template",
    productType: "Website Template",
    targetCustomer: "Freelancers & Creators",
    mainBenefit: "launch a high-converting, blazing-fast personal brand website",
    tagline: "Modern, responsive website template that helps you launch professional websites faster.",
    description: "Build better digital experiences with FolioCraft Website Template, a professionally designed website template created to help freelancers and creators launch high-converting portfolios effortlessly.",
    price: 39,
    originalPrice: 69,
    category: "Website Templates",
    rating: 4.9,
    reviewsCount: 82,
    salesCount: 340,
    features: [
      "Zero-config deployment on Vercel or Netlify",
      "MDX powered blog and dynamic case study pages",
      "Framer Motion micro-interactions and transitions",
      "100/100 Lighthouse performance score",
      "Responsive contact modal with Formspree integration",
      "Clean semantic code structure",
    ],
    keyFeatures: [
      {
        number: "01",
        title: "100/100 Google PageSpeed Performance",
        description: "Zero cumulative layout shift, instant page transitions, and modern image optimization for maximum SEO ranking.",
      },
      {
        number: "02",
        title: "Dynamic Case Studies & Portfolio Grid",
        description: "Showcase client projects with interactive carousels, challenge/solution writeups, and metrics badges.",
      },
      {
        number: "03",
        title: "MDX Blog & Article Publishing",
        description: "Write articles in Markdown with syntax-highlighted code blocks, callouts, and social sharing links.",
      },
      {
        number: "04",
        title: "Easy Customization",
        description: "Update personal bio, portfolio projects, and skills through a single centralized configuration file.",
      },
      {
        number: "05",
        title: "Organized Files",
        description: "Clean component architecture with Tailwind utility classes and accessible semantic HTML.",
      },
    ],
    included: [
      "Full Next.js / HTML template source code",
      "Responsive navigation, hero, portfolio, and contact sections",
      "MDX blog setup with sample markdown posts",
      "SEO metadata templates and OpenGraph image generator",
      "One-click Vercel deploy configuration",
    ],
    notIncluded: [
      "Domain registration or paid hosting fees",
      "Custom copywriting for your personal bio",
    ],
    whoIsItFor: {
      freelancers: "Showcase work and attract higher-paying clients with a premium portfolio.",
      startups: "Deploy a fast, sleek landing page to validate early traction.",
      smallBusinesses: "Establish a credible web presence with testimonials and services.",
      agencies: "Use as a foundation for lightweight client marketing sites.",
    },
    faqs: COMMON_PRODUCT_FAQS,
    license: COMMON_LICENSE,
    techStack: ["Next.js 14", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    demoUrl: "https://example.com/demo/foliocraft",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    highlights: [
      { label: "Performance", value: "100 Lighthouse" },
      { label: "Blog", value: "MDX Powered" },
      { label: "Animations", value: "Framer Motion" },
      { label: "Responsive", value: "Mobile First" },
    ],
  },
  {
    id: "prod-5",
    slug: "brand-marketing-graphics",
    title: "Brand & Marketing Graphics Pack",
    productType: "Graphic Design Templates",
    targetCustomer: "Startups & Marketers",
    mainBenefit: "create professional social media, pitch decks, and marketing visuals",
    tagline: "Ready-to-customize design resources for presentations, social media, marketing, and creative projects.",
    description: "Build better digital experiences with Brand & Marketing Graphics Pack, a professionally designed graphic template collection created to help startups create polished marketing visuals in minutes.",
    price: 29,
    originalPrice: 49,
    category: "Graphic Design Templates",
    rating: 4.8,
    reviewsCount: 51,
    salesCount: 210,
    features: [
      "50+ Social media post & story templates",
      "15-slide investor pitch deck in Figma & Canva",
      "Device mockup templates with smart layouts",
      "Vector branding assets and geometric shapes",
      "High-resolution vector exports",
    ],
    keyFeatures: [
      {
        number: "01",
        title: "15-Slide Investor Pitch Deck",
        description: "Proven pitch structure covering problem, solution, market size, business model, and financial projections.",
      },
      {
        number: "02",
        title: "50+ Social Media Ad & Post Templates",
        description: "Optimized aspect ratios for Twitter, LinkedIn, Instagram, and Product Hunt launch announcements.",
      },
      {
        number: "03",
        title: "Device Mockup Scenes",
        description: "Showcase your web app inside modern MacBook, iPhone, and iPad frames with editable screen placeholders.",
      },
      {
        number: "04",
        title: "Easy Customization",
        description: "Replace text, swap brand logos, and change primary color schemes with ease in both Figma and Canva.",
      },
      {
        number: "05",
        title: "Organized Files",
        description: "Categorized by platform and format with high-resolution export presets ready to use.",
      },
    ],
    included: [
      "Figma (.FIG) master file with components and styles",
      "Canva template share links for instant browser editing",
      "Exported high-res SVG and PNG vector shapes",
      "Guide for customizing fonts and brand colors",
    ],
    notIncluded: [
      "Canva Pro subscription (works on Canva Free tier)",
      "Custom copywriting for your specific company pitch",
    ],
    whoIsItFor: {
      freelancers: "Deliver branded social graphics and presentation decks to clients.",
      startups: "Pitch investors with confidence using proven presentation formats.",
      smallBusinesses: "Maintain a consistent, professional social media feed effortlessly.",
      agencies: "Speed up marketing asset generation for multiple brand accounts.",
    },
    faqs: COMMON_PRODUCT_FAQS,
    license: COMMON_LICENSE,
    techStack: ["Figma", "Canva", "SVG", "Vector Assets"],
    demoUrl: "https://example.com/demo/brand-graphics",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    highlights: [
      { label: "Assets", value: "150+ Templates" },
      { label: "Platforms", value: "Figma & Canva" },
      { label: "Resolution", value: "High-Res Vector" },
      { label: "License", value: "Commercial Allowed" },
    ],
  },
];

export const WHY_CHOOSE_ME = [
  {
    title: "11+ Years of Experience",
    description: "Years of hands-on experience in web development and UI design help me understand both technical requirements and user needs.",
    iconName: "Award",
  },
  {
    title: "Design Meets Development",
    description: "I bring design and development together to create digital experiences that look polished and work well.",
    iconName: "Palette",
  },
  {
    title: "Modern Technologies",
    description: "I use React, Next.js, Node.js, HTML, CSS, and JavaScript to build modern websites and web applications.",
    iconName: "Cpu",
  },
  {
    title: "Clean and Maintainable Code",
    description: "I aim to write organized code that is easier to understand, update, and extend.",
    iconName: "Code2",
  },
  {
    title: "Practical Digital Products",
    description: "My templates and UI resources are designed to give you a useful starting point for your next project.",
    iconName: "Box",
  },
  {
    title: "Clear Communication",
    description: "I value honest communication, realistic expectations, and a clear understanding of project goals from start to finish.",
    iconName: "MessageSquare",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "FinFlow Treasury",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    content: "pixelCraftStudio is an exceptional digital development and UI design studio. The quality of their code, clear communication, and dedication to delivering a polished product made our project a complete success.",
    rating: 5,
    projectType: "Full Stack Web Application",
  },
  {
    id: "test-2",
    name: "Elena Rostova",
    role: "Head of Product",
    company: "NeoCommerce",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    content: "Working with pixelCraftStudio on our website redesign completely transformed our business. The layout is beautiful, page speeds are blazing fast, and our customer engagement skyrocketed.",
    rating: 5,
    projectType: "Website Redesign & Development",
  },
  {
    id: "test-3",
    name: "David Chen",
    role: "Lead Engineer",
    company: "Echo Labs AI",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content: "I purchased pixelCraftStudio's SaaS template and it saved our team months of development. The architecture is clean, the documentation is great, and their customer support is top tier.",
    rating: 5,
    projectType: "SaaS Launchpad Pro Template",
  },
  {
    id: "test-4",
    name: "Sophia Reynolds",
    role: "Design Director",
    company: "Aura Creative Agency",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    content: "The Apex Design System Figma UI Kit is hands down the best investment our studio made this year. Every token is auto-layout ready, structured cleanly, and shaved weeks off our client deliverables.",
    rating: 5,
    projectType: "Apex Figma UI Kit",
  },
  {
    id: "test-5",
    name: "Alex Thorne",
    role: "VP of Engineering",
    company: "PulseHealth Technologies",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    content: "pixelCraftStudio delivered our real-time telemetry dashboard with phenomenal speed and architecture. Page loads are under 400ms, charts are silky smooth, and the TypeScript structure is a joy to extend.",
    rating: 5,
    projectType: "Custom SaaS Dashboard",
  },
  {
    id: "test-6",
    name: "Amara Patel",
    role: "Co-Founder & CMO",
    company: "Nexus Growth Lab",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80",
    content: "From the initial wireframes to production release, the dedication to visual polish and conversion optimization was remarkable. Our website conversion rate surged by 42% in our very first launch month.",
    rating: 5,
    projectType: "Brand & Web Redesign",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "1. What services do you offer?",
    answer: "I offer custom website design, website development, web application development, UI/UX design, and website redesign services. I also create and sell digital products, including website templates, Next.js templates, admin dashboard templates, Figma UI kits, and graphic design templates.",
    category: "Services",
  },
  {
    question: "2. What technologies do you use?",
    answer: "I work with React, Next.js, Node.js, HTML, CSS, and JavaScript. I choose the right tools based on the needs and goals of each project.",
    category: "Technology",
  },
  {
    question: "3. Can I customize the digital products I purchase?",
    answer: "Yes, customization depends on the product and its license. Product pages will explain what is included, how the files can be used, and which changes you can make. Please review the license before purchasing.",
    category: "Products",
  },
  {
    question: "4. How do I purchase and receive a digital product?",
    answer: "Choose a product, review its details, and complete the checkout process. After successful payment, you’ll receive access to your purchased files through the delivery method described on the product page.",
    category: "Products",
  },
  {
    question: "5. How much does a custom website cost?",
    answer: "The cost depends on the project’s size, design requirements, features, and complexity. Contact me with your goals and requirements, and I’ll discuss the scope, timeline, and pricing with you before work begins.",
    category: "Pricing",
  },
  {
    question: "6. How can I start a project with you?",
    answer: "Simply contact me through the contact page and share a few details about your project, goals, and expected timeline. I’ll review your requirements and get back to you to discuss the next steps.",
    category: "Process",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    slug: "finflow-analytics",
    title: "FinFlow - AI Wealth & Treasury Dashboard",
    client: "FinFlow Treasury Inc.",
    category: "Web App",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    summary: "Real-time financial intelligence dashboard empowering corporate treasury teams to monitor multi-currency payouts, assets, and cash flow in real time.",
    challenge: "The client suffered from fragmented spreadsheets and legacy banking APIs with 4+ hour sync delays, causing poor liquidity visibility for treasury directors.",
    solution: "Engineered a Next.js App Router platform powered by WebSockets, Tailwind CSS, and Recharts. Built automated alerts, optimistic data updates, and predictive cash flow charts.",
    results: [
      "Reduced treasury report generation time from 4 hours to instant real-time sync",
      "Over $14M monthly volume processed with zero downtime",
      "Sub-second page loads across high-density analytics tables",
    ],
    techStack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Node.js", "Recharts"],
    liveUrl: "https://example.com/demo/finflow",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "proj-2",
    slug: "neocommerce-storefront",
    title: "NeoCommerce - High-Speed Headless Storefront",
    client: "Neo Brands Ltd.",
    category: "E-Commerce",
    year: "2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    summary: "Next-generation luxury streetwear e-commerce platform delivering instant page loads and seamless mobile-first checkout.",
    challenge: "The previous monolithic CMS suffered from slow mobile speeds (>4.2s), resulting in a cart abandonment rate exceeding 72% on smartphone traffic.",
    solution: "Rebuilt the storefront using Next.js App Router, Tailwind CSS, and Shopify Storefront GraphQL API with edge caching and instant cart interactions.",
    results: [
      "48% decrease in mobile bounce rate within 30 days of launch",
      "34% increase in completed checkout conversions",
      "Google Mobile Lighthouse score surged from 42 to 98",
    ],
    techStack: ["Next.js 14", "React", "Tailwind CSS", "Shopify API", "Zustand", "Stripe"],
    liveUrl: "https://example.com/demo/neocommerce",
    featured: true,
  },
  {
    id: "proj-3",
    slug: "echoai-prompt-studio",
    title: "EchoAI - Collaborative Prompt Studio",
    client: "Echo Labs AI",
    category: "Web App",
    year: "2023",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    summary: "A sleek developer workspace for writing, versioning, evaluating, and deploying LLM prompts across multiple model providers.",
    challenge: "Prompt engineers struggled with version drift, latency comparisons, and unorganized experimentation across OpenAI and Anthropic endpoints.",
    solution: "Designed and built an interactive multi-column collaborative IDE interface with real-time token count, latency benchmarking, and team workspace sharing.",
    results: [
      "12,000+ active developers onboarded within 60 days of launch",
      "Featured on Product Hunt Top 5 Products of the Day",
      "65% reduction in testing loops for prompt engineering teams",
    ],
    techStack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Supabase", "OpenAI API"],
    liveUrl: "https://example.com/demo/echoai",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "proj-4",
    slug: "pulsehealth-telemedicine",
    title: "PulseHealth - Patient Care & Telehealth Portal",
    client: "Pulse Health Network",
    category: "UI/UX Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    summary: "HIPAA-compliant telehealth platform connecting patients with specialized clinicians for virtual consultations and digital prescriptions.",
    challenge: "Patients faced significant usability hurdles with confusing video interfaces and prescription management flows, especially on mobile devices.",
    solution: "Conducted 30+ patient user interviews and designed accessible, high-contrast UI flows in Figma with step-by-step video check-in and large readable typography.",
    results: [
      "94% patient satisfaction rating post-launch",
      "92% reduction in customer support tickets related to scheduling",
      "Full WCAG AAA accessibility compliance across all patient journeys",
    ],
    techStack: ["Figma", "UI/UX Design", "Design Systems", "User Research", "Tailwind CSS"],
    liveUrl: "https://example.com/demo/pulsehealth",
    featured: false,
  },
];
