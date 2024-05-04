import { type IconType } from "react-icons";
import { FaCss3Alt, FaDatabase, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiAxios,
  SiChakraui,
  SiFirebase,
  SiMui,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
} from "react-icons/si";
import { v4 as uuidv4 } from "uuid";

interface Icon {
  icon: IconType;
  id: string;
}
interface Card {
  id: number;
  heading: string;
  title: string;
  technologies: string[];
  skills: string[];
  icons: Icon[];
}

export const cards: Card[] = [
  {
    id: 1,
    heading: "Core Web Development Skills",
    title: "Core Front-End Technologies",
    technologies: [
      "HTML5: Semantic Web, Forms, and New Elements",
      "CSS3/SCSS: Flexbox, Grid, Animations, and Responsive Design",
      "JavaScript (ES6+) & Web Components: Async/Await, Promises, Arrow Functions, Destructuring, Custom Elements, Shadow DOM",
    ],
    skills: [
      "Implementing complex layouts with CSS Flexbox and Grid",
      "Creating responsive designs that work on various devices and screen sizes",
      "Building interactive user interfaces using vanilla JavaScript and Web Components",
    ],
    icons: [
      { icon: FaHtml5, id: uuidv4() },
      { icon: FaCss3Alt, id: uuidv4() },
      { icon: IoLogoJavascript, id: uuidv4() },
    ],
  },
  {
    id: 2,
    heading: "React Ecosystem",
    title: "Modern JS Frameworks & Libraries",
    technologies: [
      "React: Components, JSX, State Management, Context API",
      "Redux & Redux Toolkit: State Management, Middleware, Redux DevTools",
      "React Router: Single Page Application (SPA) Routing",
    ],
    skills: [
      "Developing SPA with React and managing application state with Redux",
      "Utilizing React Router for navigation within an application",
      "Building scalable and maintainable applications by leveraging the React ecosystem",
    ],
    icons: [
      { icon: FaReact, id: uuidv4() },
      { icon: SiRedux, id: uuidv4() },
      { icon: SiReactrouter, id: uuidv4() },
    ],
  },
  {
    id: 3,
    heading: "UI Libraries & Styling",
    title: "Styling and UI Frameworks",
    technologies: [
      "Styled Components: CSS-in-JS",
      "Material-UI (MUI): Comprehensive UI toolkit for React",
      "Chakra UI: Simple, Modular and Accessible UI Components",
    ],
    skills: [
      "Crafting custom themes and styles with Styled Components",
      "Rapidly developing user interfaces using Material-UI and Chakra UI components",
      "Ensuring accessibility and responsiveness across all UI components",
    ],
    icons: [
      { icon: SiStyledcomponents, id: uuidv4() },
      { icon: SiMui, id: uuidv4() },
      { icon: SiChakraui, id: uuidv4() },
    ],
  },
  {
    id: 4,
    heading: "Advanced Front-End Techniques",
    title: "Advanced Front-End Development",
    technologies: [
      "React Hooks & Custom Hooks: useState, useEffect, Custom Logic Reuse",
      "Axios: Promise based HTTP client",
      "Firebase & Firestore: Authentication, Database, Storage",
    ],
    skills: [
      "Creating reusable logic with React Hooks and Custom Hooks",
      "Integrating RESTful services using Axios",
      "Implementing real-time databases, authentication, and storage solutions with Firebase and Firestore",
    ],
    icons: [
      { icon: SiAxios, id: uuidv4() },
      { icon: SiFirebase, id: uuidv4() },
      { icon: FaDatabase, id: uuidv4() },
    ],
  },
];
