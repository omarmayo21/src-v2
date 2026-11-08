import type { Dict } from "./types";

/**
 * English dictionary. Must match the shape of ar.ts.
 * Organized by shared layout + per-page sections.
 */
export const en: Dict = {
  meta: {
    title: "SRFEC Stones & Granite | Natural Stone, Timeless Spaces",
    description:
      "SRFEC Stones & Granite: precision-manufactured stone and granite for architectural and construction projects, backed by more than 40 years of experience.",
    pages: {
      home: {
        title: "SRFEC Stones & Granite | Natural Stone, Timeless Spaces",
        description:
          "SRFEC Stones & Granite: precision-manufactured stone and granite for architectural and construction projects, backed by more than 40 years of experience.",
      },
      about: {
        title: "About SRFEC | SRFEC Stones & Granite",
        description:
          "Discover the story of SRFEC Stone Factory, backed by more than 40 years of contracting and stonework experience, alongside our vision, mission, and values.",
      },
      factory: {
        title: "Our Factory | SRFEC Stones & Granite",
        description:
          "Manufacturing capabilities built on precision and craftsmanship: specialized stone cutting and processing equipment alongside a dedicated carving and shaping department.",
      },
      whySrfec: {
        title: "Why SRFEC | SRFEC Stones & Granite",
        description:
          "What sets SRFEC apart: over 40 years of experience, advanced stone manufacturing capabilities, and skilled technical craftsmanship.",
      },
      projects: {
        title: "Our Projects | SRFEC Stones & Granite",
        description:
          "Explore SRFEC Stones & Granite projects: extended experience and professional execution across more than 1,000 architectural and construction projects.",
      },
      clients: {
        title: "Our Clients | SRFEC Stones & Granite",
        description:
          "Valued clients and long-term partners of SRFEC Stones & Granite across architectural, urban, and engineering projects.",
      },
      contact: {
        title: "Contact Us | SRFEC Stones & Granite",
        description:
          "Get in touch with SRFEC Stones & Granite to discuss natural stone and granite manufacturing for your architectural or construction project.",
      },
      stones: {
        title: "Our Stones | SRFEC Stones & Granite",
        description:
          "Natural stone selection at SRFEC: Marble, Granite, Travertine, Onyx, and Limestone.",
      },
      notFound: {
        title: "Page Not Found | SRFEC Stones & Granite",
        description: "The page you are looking for could not be found or has been moved.",
      },
    },
  },
  brand: {
    name: "SRFEC",
    nameLocal: "سيرفك",
    tagline: "Stones & Granite",
    company: "SRFEC Stones & Granite",
    line: "Every stone tells a story.",
    logoAlt: "SRFEC Stones & Granite logo",
  },
  a11y: {
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    subNav: "Page section navigation",
    breadcrumb: "Breadcrumb",
    language: "Language",
    switchToArabic: "Switch to Arabic",
    switchToEnglish: "Switch to English",
  },
  breadcrumb: {
    home: "Home",
  },
  nav: {
    items: [
      { id: "home", href: "", label: "Home" },
      { id: "about", href: "/about", label: "About" },
      { id: "factory", href: "/factory", label: "Factory" },
      { id: "why-srfec", href: "/why-srfec", label: "Why SRFEC" },
      { id: "projects", href: "/projects", label: "Projects" },
      { id: "clients", href: "/clients", label: "Clients" },
      { id: "contact", href: "/contact", label: "Contact" },
    ],
    cta: "Contact Us",
  },
  ctaBand: {
    eyebrow: "Every stone tells a story",
    title: "Planning a project that requires precision stone & granite manufacturing?",
    subtitle:
      "Get in touch with our team to discuss your architectural and construction requirements and explore tailored stone manufacturing solutions.",
    button: "Contact Us",
  },
  home: {
    storyTeaser: {
      eyebrow: "About SRFEC",
      readMore: "Read more",
    },
    whyTeaser: {
      eyebrow: "Why SRFEC",
      moreCta: "Explore All Advantages",
    },
    factoryTeaser: {
      eyebrow: "Our Factory",
      moreCta: "Explore Our Factory",
    },
    projectsTeaser: {
      eyebrow: "Featured Work",
      moreCta: "View All Projects",
    },
    clientsTeaser: {
      eyebrow: "Trusted Partners",
      moreCta: "View All Clients",
    },
  },
  hero: {
    eyebrow: "Every stone tells a story",
    title: "Natural Stone, Timeless Spaces",
    subtitle: "Precision-manufactured stone and granite for architectural and construction projects.",
    ctaPrimary: "Explore Our Work",
    ctaSecondary: "Contact Us",
    imageAlt: "Architectural facade clad in natural stone panels",
    stats: [
      { prefix: "+", value: 40, label: "years of experience" },
      { prefix: "+", value: 1000, label: "projects" },
    ],
  },
  aboutPage: {
    title: "About SRFEC",
    subNav: [
      { id: "story", label: "Story" },
      { id: "ceo", label: "CEO" },
      { id: "vision", label: "Vision" },
      { id: "mission", label: "Mission" },
      { id: "values", label: "Values" },
    ],
  },
  story: {
    title: "Our Story",
    steps: [
      {
        n: "01",
        title: "Beginning & Experience",
        text: "The history of SRFEC Stone Factory spans more than 40 years of experience in the contracting sector, beginning with Saud Rashid Al-Faqih Contracting Establishment. The journey developed under the name SRFEC and has contributed to the delivery of more than 1,000 projects across a range of fields.",
      },
      {
        n: "02",
        title: "Quality as a Pillar",
        text: "Throughout this journey, quality has been a core foundation of all our work. It begins with precision in execution and the selection of materials, and extends to the quality of the final product, in line with our clients' expectations and their project requirements.",
      },
      {
        n: "03",
        title: "Specialization & Founding",
        text: "Building on our accumulated experience and deep knowledge of stone materials, their properties and the methods of shaping them, SRFEC Stone Factory was founded as a strategic step toward specializing in manufacturing and strengthening product quality.",
      },
      {
        n: "04",
        title: "Our Vision Today",
        text: "We continue the journey with advanced equipment and facilities, and qualified technical and administrative teams. We offer stone products that combine manufacturing quality, precision of detail and full commitment to the requirements of each project.",
      },
    ],
  },
  ceo: {
    title: "Message from the CEO",
    name: "[CEO name]",
    role: "[CEO title]",
    message: "[CEO message - to be provided by client]",
    imageAlt: "[CEO portrait - to be added]",
  },
  vision: {
    title: "Our Vision",
    statement:
      "To be among the leading factories in the stone and granite industry, by developing our manufacturing capabilities, adopting the latest technologies, and raising the standards of quality and precision in production; so that we offer products that combine manufacturing excellence and mastery of detail, meet our clients' expectations and keep pace with the development of urban and engineering projects.",
    pillars: [
      {
        n: "01",
        title: "Development & Technology",
        text: "Developing our manufacturing capabilities and adopting the latest advanced technologies in the stone and granite industry.",
      },
      {
        n: "02",
        title: "Quality & Precision",
        text: "Continuously raising the standards of quality and precision across every stage and procedure of production.",
      },
      {
        n: "03",
        title: "Excellence & Integration",
        text: "Delivering products of refined craftsmanship that meet clients' expectations and keep pace with urban projects.",
      },
    ],
  },
  mission: {
    title: "Our Mission",
    cards: [
      {
        n: "01",
        title: "Manufacturing, Excellence & Quality",
        text: "Our mission is to deliver high-quality stone products by applying our technical expertise, investing in advanced equipment and technologies, and developing our people; to ensure manufacturing precision, mastery of detail, and adherence to specifications and project requirements.",
      },
      {
        n: "02",
        title: "Sustainable Partnership & Commitment",
        text: "We aim to build long-term relationships with our clients, grounded in trust, credibility and commitment, by providing manufacturing solutions that meet their needs and add real value to their projects.",
      },
    ],
  },
  values: {
    title: "Our Values",
    items: [
      {
        n: "01",
        icon: "quality",
        title: "Quality",
        altTitle: "الجودة",
        text: "We apply quality standards at every stage of manufacturing, from the selection of materials to the inspection of the final product.",
      },
      {
        n: "02",
        icon: "precision",
        title: "Precision",
        altTitle: "الدقة",
        text: "We take care over cutting and shaping, and keep to the dimensions and specifications each project requires.",
      },
      {
        n: "03",
        icon: "commitment",
        title: "Commitment",
        altTitle: "الالتزام",
        text: "We honor our clients' requirements and project specifications, and work responsibly to deliver the work as agreed.",
      },
      {
        n: "04",
        icon: "trust",
        title: "Trust",
        altTitle: "الثقة",
        text: "We build our relationships with clients on credibility, transparency and keeping our commitments, since trust is the basis of lasting partnerships.",
      },
    ],
  },
  factory: {
    title: "Our Factory",
    heading: "Manufacturing capabilities, built on precision and craftsmanship",
    paragraphs: [
      "SRFEC Stone Factory is an extension of our experience in the contracting and stonework sector. We set out to establish an integrated production environment that brings together advanced equipment and qualified technical expertise, ensuring efficient manufacturing and accurate execution of a wide range of project requirements.",
      "The factory relies on saws and equipment specialized in cutting and preparing stone, alongside a dedicated carving and shaping department with a team of experienced and skilled carvers and technicians.",
      "Through the integration of technical capability and human expertise, we aim to deliver products that combine manufacturing quality and precision of detail, and that meet our clients' expectations.",
    ],
    chips: [
      { icon: "cutting", label: "Cutting & Processing" },
      { icon: "carving", label: "Carving & Shaping" },
    ],
    capabilitiesTitle: "Manufacturing Departments & Capabilities",
    capabilities: [
      {
        n: "01",
        icon: "cutting",
        title: "Cutting & Processing",
        altTitle: "القص والتجهيز",
        text: "The factory relies on specialized saws and machinery for cutting and preparing stone with high accuracy, enabling execution of exact dimensions and technical specifications across facades, flooring, and architectural elements.",
        image: "/images/factory/placeholder-factory-cnc-cutting.webp",
        imageAlt: "Cutting machine working on a granite slab inside the factory",
      },
      {
        n: "02",
        icon: "carving",
        title: "Carving & Shaping",
        altTitle: "النحت والتشكيل",
        text: "Our dedicated carving and shaping department brings together experienced carvers and skilled technicians to craft bespoke architectural profiles and ornamental stonework tailored to each project.",
        image: "/images/factory/placeholder-factory-carving-shaping.webp",
        imageAlt: "A carver's hands shaping an ornamental detail in stone",
      },
    ],
    galleryTitle: "Factory Gallery",
    gallery: {
      cutting: "Cutting machine working on a granite slab inside the factory",
      carving: "A carver's hands shaping an ornamental detail in stone",
      slabs: "Polished stone slabs lined up in the factory",
    },
  },
  why: {
    bannerTitle: "Why SRFEC",
    title: "Why SRFEC",
    intro:
      "At SRFEC, we bring together long experience in the contracting sector, specialized manufacturing capabilities and qualified technical teams, to offer stone products built on clear standards of quality, precision and professionalism.",
    items: [
      {
        n: "01",
        icon: "history",
        title: "Extensive Experience",
        altTitle: "خبرة ممتدة",
        text: "More than 40 years of experience in the contracting sector, and more than 1,000 projects that have built our knowledge and our understanding of project requirements.",
      },
      {
        n: "02",
        icon: "machine",
        title: "Advanced Manufacturing",
        altTitle: "إمكانات تصنيعية متطورة",
        text: "We rely on specialized saws and equipment that allow cutting and processing to be carried out accurately and efficiently.",
      },
      {
        n: "03",
        icon: "carving",
        title: "Skilled Craftsmanship",
        altTitle: "خبرات فنية متخصصة",
        text: "We have qualified technical staff and specialized experience in stonework, carving and shaping.",
      },
      {
        n: "04",
        icon: "target",
        title: "Precision & Accuracy",
        altTitle: "دقة في التنفيذ",
        text: "We pay close attention to details, dimensions and technical specifications so that products match the requirements of each project.",
      },
      {
        n: "05",
        icon: "check",
        title: "Quality Assurance",
        altTitle: "جودة في كل مرحلة",
        text: "We make quality the basis of our practice, from the manufacturing process through to the review of the final product.",
      },
      {
        n: "06",
        icon: "layers",
        title: "Project-Based Solutions",
        altTitle: "حلول وفق متطلبات المشاريع",
        text: "We apply our capabilities and experience to meet the needs of different projects, taking into account the nature and specifications of each design.",
      },
    ],
  },
  stats: {
    label: "SRFEC in numbers",
    items: [
      { prefix: "+", value: 40, label: "Years of Experience", altLabel: "سنة خبرة" },
      { prefix: "+", value: 1000, label: "Projects Delivered", altLabel: "مشروع" },
    ],
  },
  stones: {
    title: "Our Stones",
    intro:
      "A carefully selected range of natural stones prepared to meet the demands of architectural facades, flooring, and bespoke structural details.",
    items: [
      { id: "marble", name: "Marble", altName: "الرخام" },
      { id: "granite", name: "Granite", altName: "الجرانيت" },
      { id: "travertine", name: "Travertine", altName: "الترافرتين" },
      { id: "onyx", name: "Onyx", altName: "الأونيكس" },
      { id: "limestone", name: "Limestone", altName: "الحجر الجيري" },
    ],
  },
  projects: {
    title: "Our Projects",
    heading: "Extended experience, professional execution",
    text: "Over more than 40 years, our experience in the contracting sector and stonework has contributed to the delivery of more than 1,000 projects across a range of fields. Our projects reflect the practical experience and understanding of execution requirements we have gained, and our care to deliver work that combines quality of materials, precision of detail and adherence to specifications. Through SRFEC Stone Factory, we continue to apply this experience and these manufacturing capabilities to contribute to distinctive projects, and to supply stone products that meet the requirements of architectural and construction work in all its designs.",
    allCategories: "All",
    filterLabel: "Filter projects by category",
    view: "View project",
    close: "Close",
    next: "Next",
    prev: "Previous",
    lightbox: "Project gallery",
    detail: {
      infoTitle: "Project Details",
      type: "Project Type",
      location: "Location",
      year: "Year",
      stoneType: "Stone Type",
      descriptionTitle: "Project Overview",
      galleryTitle: "Project Gallery",
      openImage: "Enlarge photo",
      prevProject: "Previous Project",
      nextProject: "Next Project",
      backToProjects: "Back to Projects",
      placeholderNotice: "All project details and images on this page are placeholders to be replaced with actual project records.",
    },
  },
  clients: {
    title: "Our Clients",
    intro:
      "We value the trust of our clients and partners across the public and private sectors, building lasting relationships grounded in credibility, precision, and commitment to specifications.",
    logoPlaceholder: "[Client logo]",
  },
  contact: {
    title: "Contact Us",
    info: {
      title: "Contact details",
      address: "Address",
      phone: "Phone",
      email: "Email",
      whatsapp: "WhatsApp",
      hours: "Working hours",
      website: "Website",
      social: "Follow us",
    },
    form: {
      title: "Send us a message",
      name: "Name",
      phone: "Phone",
      email: "Email",
      subject: "Subject / Project type",
      message: "Message",
      required: "Required",
      optional: "Optional",
      submit: "Send message",
      sending: "Sending",
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        phone: "Please enter a valid phone number.",
        message: "Please write a message of at least 10 characters.",
      },
      success: {
        title: "Thank you for getting in touch",
        text: "Your message has been prepared. We will get back to you as soon as we can.",
        again: "Send another message",
      },
    },
    map: {
      title: "Our location",
      placeholder: "[Map - to be added]",
    },
  },
  notFound: {
    code: "404",
    title: "Page Not Found",
    description: "The page you are looking for is unavailable or has been moved to another address.",
    backHome: "Back to Home",
  },
  footer: {
    quickLinks: "Quick links",
    contact: "Contact",
    follow: "Follow us",
    copyright: "© 2026 SRFEC Stones & Granite",
    rights: "All rights reserved.",
  },
};
