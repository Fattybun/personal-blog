export const tools = {
  adobe: "AdobeXD",
  dingtalk: "DingTalk",
  figma: "Figma",
  github: "GitHub",
  gitlab: "GitLab",
  jira: "Jira",
  notion: "Notion",
  yesdev: "YesDev",
} as const;

export const languages = {
  english: "English",
  korean: "Korean",
  malay: "Malay",
  mandarin: "Mandarin",
} as const;

export const frameworks = {
  angular: "Angular",
  apolloclient: "Apollo Client",
  django: "Django",
  ionic: "Ionic",
  nextjs: "Next.js",
  react: "React",
  shadcnui: "ShadCN UI",
  styledcomponents: "Styled-components",
  tailwindcss: "Tailwind CSS",
  tanstackrouter: "TanStack Router",
} as const;

export const experiences = [
  {
    date: "Apr 2024 - current",
    title: "Executive Frontend Developer",
    company: "HiSEVEN Sdn Bhd",
    tasks: [
      "Engineered a headless CMS architecture using Next.js with Tailwind CSS for the frontend, leveraging GraphQL and RESTful APIs.",
      "Extended Ant Design to build a custom UI component library, ensuring design consistency.",
      "Implemented a monorepo development structure using Nx for efficient code sharing.",
      "Designed and developed a responsive, multilingual company website.",
    ],
  },
  {
    date: "Jul 2023 - Oct 2023",
    title: "Frontend Developer",
    company: "Avexis Solution Sdn Bhd",
    tasks: [
      "Migrated and improved a cryptocurrency system using Angular.",
      "Created reusable components using a divide-and-conquer approach.",
      "Prototyped mobile UI designs in Figma.",
      "Developed a mobile tracking app with Ionic Framework.",
    ],
  },
  {
    date: "Mar 2021 - Jun 2021",
    title: "Frontend Developer",
    company: "Integrated Carrier Express Sdn Bhd",
    tasks: [
      "Streamlined parcel tracking with VBA scripts.",
      "Created logistics interface mockups using Adobe XD.",
      "Liaised with technical partners for delivery integrations.",
      "Maintained web systems and Shopee storefronts.",
    ],
  },
];
