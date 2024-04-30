import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
export const HERO_CONTENT = `Hello and Namaste! I'm Himanshi, a passionate Frontend/Fullstack Developer and proud graduate of UNC-Charlotte.As I actively seek new opportunities in web development and frontend/full stack roles, I'm eager to bring my expertise and passion for innovation to a dynamic team. If you have any questions or know of job roles that align with my skill set, please don't hesitate to reach out to me at himanshikhatri1371999@gmail.com. I'm excited for the opportunity to collaborate and contribute to impactful projects in the ever-evolving realm of web development.`;

export const ABOUT_TEXT = `I have a solid foundation in technologies like React.js, Redux, and TypeScript, I specialize in crafting responsive, user-friendly websites. I'm committed to staying ahead of the curve and continuously honing my skills. Following are the skills i have honed over the years at industry/education
- REST APIs, GraphQL, and Websockets, Jenkins, Jest, Docker, AWS , GitHub, HTML, CSS, Tailwind CSS, Material-UI, Node.js, Express, and Ruby on Rails.`;

export const EXPERIENCES = [
  {
    year: "Oct 2023 - May 2024",
    role: "Graduate Assistant, Office of International Programs",
    company: "University of North Carolina at Charlotte",
    description: `Utilized Python within Google Colab to streamline data management processes, particularly in tasks involving Microsoft Excel, thus significantly reducing manual entry workloads.Empowered UNC Charlotte's online presence by skillfully managing and updating the university website using WordPress.
    `,
    technologies: ["Python", "Wordpress", "Microsoft Excel", "Selenium"],
  },
  {
    year: "July 2021 - July 2022",
    role: "Software Engineer, Full Stack",
    company: "Oracle Cerner ( previously Cerner Corporation)",
    description: `Led the development of a web-based solution utilizing React, Docker, AWS, JavaScript, Microservices, and Ruby on Rails, driving a 50% increase in patient engagement for healthcare organizations.Designed a portal for clinicians to access patient health data efficiently, integrating React with Rails and MySQL via RESTful APIs, resulting in streamlined information access.Implemented Redux for React state management and optimized Rails database transactions with ActiveRecord, enhancing application performance by 25%.Revolutionized testing with automation frameworks (Jest, RSpec, Eggplant, Playwright) in the CI/CD pipeline, boosting testing efficiency by 70% and ensuring codebase stability.`,
    technologies: ["Playwright", "Github", "Node.js", "Javascript", "AWS", "Jenkins", "React.js", "Redux.js", "Sourcetree", "RoR", "Typescript", "Eggplant", "Microservices" ],
  },
  {
    year: "Jan 2021 - Jul 2021",
    role: "Software Engineer Intern",
    company: "Oracle Cerner (previously Cerner Corporation)",
    description: `Designed a fully functional CRUD application called ”Feature Tracking” to assist the Women’s Health team.Utilized React on Rails framework to develop the application, enabling efficient tracking of open and closed GitHub repositories within Agile sprints and corresponding JIRAs.Implemented rigorous ES6 lint checks to enforce coding standards and best practices, resulting in a 90% reduction in code violations and improved code quality.Enforced a minimum unit test percentage coverage, ensuring code robustness and achieving a 75% increase in overall test coverage.
    `,
    technologies: ["React.js", "MySQL", "Rails", "Jenkins", "Postman", "GitHub"],
  },
  {
    year: "Feb 2020 - Jan 2021",
    role: "Student Intern",
    company: "Acceleron Labs",
    description: `Spearheaded a web scraping project using Python and Selenium to monitor product prices on Amazon, resulting in a 15% increase in timely notifications to customers when target product prices fell, leading to a 25% increase in customer satisfaction and repeat purchases.Implemented a stock scraper tool leveraging Python and Beautiful Soup, identifying target stocks with decreased value and providing timely alerts to customers, resulting in a 20% increase in customer engagement and investment opportunities.Facilitated Python and NLP tutorials for team members through regular knowledge-sharing sessions over scrum calls, resulting in a 40% improvement in team members' proficiency and application of these technologies, leading to enhanced productivity and project outcomes.
    `,
    technologies: ["Python", "Selenium", "Web Scraping", "Beautiful Soup"],
  },
];

export const PROJECTS = [
  {
    title: "Whiteboard Sharing App",
    image: project1,
    description:
      "A fully functional whiteboard app with features like create room, join room, text chat, and shared canvas.",
    technologies: ["Node.js", "React.js", "CSS", "Socket.io", "Express"],
  },
  {
    title: "Kanban Board",
    image: project2,
    description:
      "An application for managing active projects and finished projects, with features such as project creation, drag and drop, and progress tracking.",
    technologies: ["HTML", "CSS", "TypeScript", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "GitHub Pages", "React.js", "TailwindCSS"],
  },
  {
    title: "Chat App",
    image: project4,
    description:
      "A platform for sending messages simultaneously, with features like sending emohjis, reacting on messages, instant message receiving, and user login.",
    technologies: ["HTML", "CSS", "React.js", "Node.js", "GraphQL"],
  },
  {
    title: "Sudoku App",
    image: project5,
    description:
      "A website for playing single player sudoku online",
    technologies: ["Redux", "Typescript", "React.js", "CSS"],
  }
];

export const CONTACT = {
  address: "11018 Graduate Ln, Charlotte, NC",
  phoneNo: "+1 980-371-8545 ",
  email: "himanshikhatri1371999@gmail.com",
};
