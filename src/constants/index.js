import {
  mysql,
  clang,
  python,
  spring,
  mobile,
  creator,
  web,
  linkedin,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  java,
  meta,
  samsung,
  travelapp,
  gccloud,
  jobit,
  tripguide,
  github,

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
    Deployedlink:"https://sameerportfolio-rho.vercel.app/",
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
  {
    name: "java",
    icon: java,
  },
  {
    name: "clang",
    icon: clang,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "mysql",
    icon: mysql,
  },

];

const experiences = [
  {
    title: "Software Developer",
    company_name: "GCCloud Info System Pvt Ltd",
    icon: gccloud,
    iconBg: "#FFFFFF",
    date: "Sep 2023 - Current",
    points: [
    
        "NOC Portal for Irrigation Department",
        "Technologies: Java 20, Spring Boot, OCR, iText, Java NIO, Executor Service, Adobe Document Cloud SDK, MySQL",
        "Developed backend for NOC application, tracking, and multi-level review with status updates and rejection handling.",
        "Integrated OCR for automatic PDF data extraction and iText for file merging and management.",
        "Optimized file processing and performance with Java NIO and multithreaded operations using Executor Service.",
        "Embedded PDF viewer using Adobe Document Cloud SDK for in-browser document viewing.",
        "Designed the database schema to support the NOC process.",
        "Developed backend services to integrate live Irrigation Department data with GIS and Google Maps for real-time satellite views and enhanced data visualization.",
        "Deployed on GCP using Cloud SQL, Kubernetes, and Docker for scalability and containerization.",
        "Implemented Google Drive API for automated backup management with a 7-day retention policy.",
        "Utilized Java Streams for efficient data processing and CI/CD with GitHub Actions for deployment.",
        "Managed data processing and container orchestration with Docker and GCP Bucket System. Techstack involves Java 20, Spring Boot, GCP, Docker, GCP Bucket System, Rest API.",
        "Developed scalable backend delivering real-time insights and reports for water management departments.",
        "Implemented level-wise target assignment to improve accountability across key sectors.",
        "Optimized large-scale Excel processing with Apache POI, ensuring efficient memory usage for reading, writing and locking XLS/XLSX files.",
        "Used Java Streams for efficient data processing, improving performance in handling high-volume datasets.",
        "Enhanced system performance to handle high data volumes and complex department interactions. Techstack involves Java 17, Spring Boot, Apache POI, Java NIO, Executor Service, Java Streams, MySQL."
      
      
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
    DeployedLink:"https://sameerportfolio-rho.vercel.app/",
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
