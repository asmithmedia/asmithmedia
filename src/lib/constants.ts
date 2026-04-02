export const SITE_CONFIG = {
  name: "A. Smith Media",
  tagline: "Diversified Investment & Media Company",
  description:
    "Digital consulting, AI business solutions, branding, and media services based in Frisco, Texas.",
  url: "https://asmith.media",
  email: "adam@asmith.media",
  phone: "(469) 294-2834",
  address: "3245 Main St Ste #235-110, Frisco, TX 75034",
  hours: "Monday - Friday, 7:00 AM - 7:00 PM",
} as const;

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/asmithmedia",
  twitter: "https://x.com/ADAMSMITHMEDIA",
  linkedin: "https://www.linkedin.com/company/adam-smith-media",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "digital-consulting",
    title: "Digital Consulting & Marketing",
    description:
      "Strategic digital transformation and marketing solutions that drive measurable growth for your business.",
    icon: "Monitor",
    features: [
      "Digital strategy development",
      "Marketing automation",
      "Analytics & reporting",
      "Conversion optimization",
    ],
  },
  {
    slug: "ai-consulting",
    title: "AI Business Consulting",
    description:
      "Leverage artificial intelligence to streamline operations, enhance decision-making, and unlock new revenue streams.",
    icon: "Brain",
    features: [
      "AI readiness assessment",
      "Custom AI solutions",
      "Process automation",
      "Machine learning integration",
    ],
  },
  {
    slug: "branding",
    title: "Branding Services",
    description:
      "Build a powerful, memorable brand identity that resonates with your audience and stands apart from competition.",
    icon: "Palette",
    features: [
      "Brand strategy",
      "Visual identity design",
      "Brand guidelines",
      "Brand messaging",
    ],
  },
  {
    slug: "book-publishing",
    title: "Book Publishing",
    description:
      "End-to-end publishing support from manuscript to market, helping authors bring their vision to life.",
    icon: "BookOpen",
    features: [
      "Manuscript editing",
      "Cover design",
      "Publishing strategy",
      "Distribution setup",
    ],
  },
  {
    slug: "ai-education",
    title: "AI Educational Consulting",
    description:
      "Transforming education through intelligent technology solutions that enhance learning outcomes.",
    icon: "GraduationCap",
    features: [
      "EdTech strategy",
      "AI-powered learning tools",
      "Curriculum integration",
      "Platform development",
    ],
  },
  {
    slug: "google-business",
    title: "Google Business Services",
    description:
      "Maximize your visibility on Google with optimized business profiles, ads, and local SEO strategies.",
    icon: "Search",
    features: [
      "Google Business Profile",
      "Google Ads management",
      "Local SEO",
      "Review management",
    ],
  },
  {
    slug: "ai-chat-engine",
    title: "AI Chat Engine",
    description:
      "Deploy intelligent conversational AI that engages customers 24/7 and scales your support operations.",
    icon: "MessageSquare",
    features: [
      "Custom chatbot development",
      "Natural language processing",
      "Multi-channel deployment",
      "Analytics dashboard",
    ],
  },
  {
    slug: "digital-ads",
    title: "Digital Ad Management",
    description:
      "Data-driven advertising campaigns across platforms that maximize ROI and reach your ideal audience.",
    icon: "BarChart3",
    features: [
      "Campaign strategy",
      "A/B testing",
      "Budget optimization",
      "Performance reporting",
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    company: "TechVentures Inc.",
    quote:
      "A. Smith Media transformed our digital presence completely. Their AI consulting helped us automate processes we didn't even know could be automated.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    company: "Lone Star Brands",
    quote:
      "The branding work was exceptional. They captured our vision perfectly and delivered assets that elevated our entire market position.",
    rating: 5,
  },
  {
    name: "Dr. Emily Chen",
    company: "EduForward Academy",
    quote:
      "Their AI educational consulting was a game-changer for our institution. Student engagement increased dramatically after implementation.",
    rating: 5,
  },
] as const;

export const STATS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Active Clients" },
  { value: "99%", label: "Client Satisfaction" },
] as const;
