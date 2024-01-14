import {
  mobile,
  backend,
  creator,
  web,
  linkedin,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  samsung,
  tesla,
  shopify,
  travelapp,
  gccloud,
  jobit,
  tripguide,
  github,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Leetcode",
    icon: web,
    Deployedlink:"https://leetcode.com/sameerCR7/",
  },
  {
    title: "Github",
    icon: github,
    Deployedlink:"https://github.com/sameercr7?tab=repositories",
  },
  {
    title: "Porfolio",
    icon: mobile,
    Deployedlink:"https://leetcode.com/sameerCR7/",
  },
  {
    title: "Linkedin",
    icon: linkedin,
    Deployedlink:"https://www.linkedin.com/in/sameercr7/",
  },
  {
    title: "Behance",
    icon: creator,
    Deployedlink:"https://www.behance.net/sameerverma8",
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "GCCloud Info System Pvt Ltd",
    icon: gccloud,
    iconBg: "#FFFFFF",
    date: "Jan 2024 - Current",
    points: [
      "Developing and maintaining web applications using React.js,Html,Css,Javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implemented Learning Management System.",
      // "Tech Stack : React,Javascript,Java,SQL,SpringBoot"
      "Tech Stack:",
  "React",
  "Javascript",
  "Java",
  "SQL",
  "SpringBoot",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Samsung R&D",
    icon: samsung,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Jun 2023",
    points: [
      "Developed a tool for Samsung Cloud to identify missing data during backup and data restoration processes.",
      "Created a PO Portal to track employee work progress on a monthly, weekly, and yearly basis.",
      "Contributed to the development of an Sluggish Model which fill the Ram with random data that was used for testing and performance analysis.",
      // "Java SQL SpringBoot MongoDb React Javascript Html Css.",
      // "Contributed to the development of an Sluggish Model which fill the Ram with random data that was used for testing and performance analysis."
      "Tech Stack :",
      "Java",
      "SQL",
      "SpringBoot",
      "MongoDB",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Project Engineer",
    company_name: "Crio.Do",
    icon: meta,
    iconBg: "#2DF7C5",
    date: "Sept 2023 - Nov 2023",
    points: [
      "Providing mentorship and guidance to numerous students as a Teaching Assistant,taking QnA and assisting them in Frontend development and Data Structures and Algorithms.",
      "Apart from this also managed DSA Track portal and implemented responsive design to it.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Tech Stack : ",
      "C++",
      "Javascript",
      "React",
      "Html",
      "Css",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Travel App",
    DeployedLink:"https://travel-app-bwhc.vercel.app/",
    description:
      "Travel App fully responsive website using the latest Next.js 13 technology stack, integrating Next.js for optimized server-side rendering and routing, React for a component-based architecture, and Tailwind CSS for efficient styling and responsive design.",
    tags: [
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
     
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
     
    ],
    image: travelapp,
    source_code_link: "https://github.com/sameercr7/TravelApp",
  },
  {
    name: "3D Portfolio",
    DeployedLink:"https://travel-app-bwhc.vercel.app/",
    description:
      "– building the user interface and managing component-based architecture, while Three.js enables creating and rendering3D graphics and animations. JavaScript provides the necessary scripting and interactivity, allowing users to navigate and explore the portfolio. Tailwind CSS is utilized for efficient styling and responsive design.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/sameercr7/React_Portfolio",
  },
  {
    name: "Swiggy Clone",
    DeployedLink:"https://travel-app-bwhc.vercel.app/",
    description:
      " Integrated Swiggy API to dynamically fetch and display card details, replicating the original platform's functionality in a user-friendly interface. Before Deploying it install Allow cors in your browser.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Javascripts",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/sameercr7/MyFrontend",
  },
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: travelapp,
  //   source_code_link: "https://github.com/sameercr7",
  // }
];

export { services, technologies, experiences, testimonials, projects };
