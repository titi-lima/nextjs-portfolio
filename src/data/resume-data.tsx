import { ParabolLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tiago Lima",
  initials: "TL",
  location: "Recife, Brazil",
  locationLink: "https://www.google.com/maps/place/Recife",
  about: "Tech Lead | Full-stack Developer",
  summary:
    "Passionate about people and the way we can change the world through technology combined with diversity. An explorer of life escaping his comfort zone with the purpose of acquiring knowledge and improve the daily lives of people around me.",
  avatarUrl: "https://avatars.githubusercontent.com/u/97147969?v=4",
  personalWebsiteUrl: "https://dev.to/titilima",
  contact: {
    email: "titisau@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/titi-lima",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tiago-lima-3a7b75230/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidade Federal de Pernambuco",
      degree: "Bachelor in Computer Engineering",
      start: "2021",
      end: "(ongoing)",
    },
  ],
  work: [
    {
      company: "CITi",
      link: "https://citi.org.br",
      badges: ["Hybrid"],
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "07/2022",
      end: "06/2023",
      description:
        "Developed end-to-end mobile and web systems on projects of varying complexity, focused on delivering value to the client's vision and developing great UX. Led a DevOps shift by providing testing guidances and automated deployments and led a company-wide back-end boilerplate shift from TypeORM to Prisma with Zod. Technologies: Typescript, React, Next.js, Node.js, React Native, Github Actions, Docker",
    },
    {
      company: "CITi",
      link: "https://citi.org.br",
      badges: ["Hybrid"],
      title: "Tech Lead",
      logo: ParabolLogo,
      start: "07/2023",
      end: "01/2024",
      description:
        "Led a team of 6 dev squads by providing technical guidance, mentoring and strategic planning. Worked closely with the CTO to ensure the technical vision was aligned with the company's goals. Led a company-wide effort to shift to work with Agile and OKRs on a decentralized manner. Skills: Leadership, Team Management, Strategic Planning",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "React Native",
    "Expo",
    "Prisma",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "Github Actions",
    "Jest",
  ],
  projects: [
    {
      title: "Nomos",
      techStack: [
        "Full-stack Developer",
        "React",
        "Material-UI",
        "TypeScript",
        "Node.js",
        "MongoDB",
      ],
      description:
        "Award-winning platform to bring automation to legal services in Brazil",
      link: {
        label: "nomos.citistaging.com",
        href: "http://nomos.citistaging.com/",
      },
    },
    {
      title: "Y",
      techStack: [
        "University Project",
        "React",
        "TypeScript",
        "Next.js",
        "Prisma",
        "SQLite",
        "Jest",
        "Cucumber",
        "Playwright",
      ],
      description:
        "University project centered around a social network, with a focus on testing and BDD",
      link: {
        label: "github.com",
        href: "https://github.com/titi-lima/Y",
      },
    },
    {
      title: "NLW",
      techStack: [
        "Side Project",
        "React",
        "TypeScript",
        "Next.js",
        "Drizzle ORM",
        "Bun",
        "SQLite",
        "Web Assembly (WASM)",
        "OpenAI",
      ],
      description:
        "Side project from Rocketseat's Next Level Week to transcript video to text using AI",
      link: {
        label: "github.com",
        href: "https://github.com/titi-lima/nlw-back",
      },
    },
    {
      title: "Bits Battle",
      techStack: ["University Project", "Python", "Pygame", "C/C++", "Verilog"],
      description:
        "University project centered around a bits-based fight game by interacting with an external de2i-150 driver",
      link: {
        label: "github.com",
        href: "https://github.com/titi-lima/ihs-project",
      },
    },
    {
      title: "Inova",
      techStack: [
        "University Project",
        "Next.js",
        "OpenAI",
        "TypeScript",
        "Replicate",
      ],
      description:
        "AI-based logo generator that uses OpenAI's GPT-3 to generate logos based on user startup idea",
      link: {
        label: "github.com",
        href: "https://github.com/titi-lima/inova",
      },
    },
    {
      title: "Enumordenador",
      techStack: ["Side Project", "C", "Linked Lists", "Quick Sort"],
      description:
        "Side project to sort a list of numbers using linked lists and quick sort",
      link: {
        label: "github.com",
        href: "https://github.com/titi-lima/enumordenador_2",
      },
    },
    {
      title: "Extended Eucledian Algorithm",
      techStack: ["Side Project", "C", "Discrete Mathematics"],
      description:
        "My first side project to implement a step by step extended eucledian algorithm in C.",
      link: {
        label: "github.com",
        href: "https://github.com/titi-lima/algoritmo-de-euclides-estendido",
      },
    },
    {
      title: "CITi+",
      techStack: [
        "Lead full-stack Developer",
        "React",
        "Next.js",
        "Material-UI",
        "TypeScript",
        "Node.js",
        "TypeORM",
      ],
      description: "Internal platform to manage CITi's training programs",
    },
    {
      title: "SGMV Consultoria",
      techStack: ["DevOps", "Dokku", "Django", "SQLite"],
      description: "Consulting company landing page",
    },
    {
      title: "Untitled Medical App",
      techStack: [
        "Software Manager",
        "React Native",
        "Expo",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
      ],
      description: "Medical app that connects patients to doctors",
    },
    {
      title: "Untitled Psychology Web App",
      techStack: [
        "Full-stack Developer",
        "TypeScript",
        "React",
        "Next.js",
        "Prisma",
        "T3 Stack",
        "TRPC",
      ],
      description: "",
    },
  ],
} as const;
