import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMui } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiWebcomponentsdotorg } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";

export const cards = [
  {
    id: 1,
    heading: "Core Web Development Skills",
    title: "Core Front-End Technologies",
    technologies: [
      "HTML5: Semantic Web, Forms, and New Elements",
      "CSS3: Flexbox, Grid, Animations, and Responsive Design",
      "JavaScript (ES6+): Async/Await, Promises, Arrow Functions, Destructuring",
    ],
    skills: [
      "Implementing complex layouts with CSS Flexbox and Grid",
      "Creating responsive designs that work on various devices and screen sizes",
      "Building interactive user interfaces using vanilla JavaScript",
    ],
    icons: [FaHtml5, FaCss3Alt, IoLogoJavascript],
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
    icons: [FaReact, SiRedux, SiReactrouter],
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
    icons: [SiStyledcomponents, SiMui, SiChakraui],
  },
  {
    id: 4,
    heading: "Advanced Front-End Techniques",
    title: "Advanced Front-End Development",
    technologies: [
      "React Hooks & Custom Hooks: useState, useEffect, Custom Logic Reuse",
      "Axios: Promise based HTTP client",
      "Firebase & Firestore: Authentication, Database, Storage",
      "Web Components: Custom Elements, Shadow DOM",
    ],
    skills: [
      "Creating reusable logic with React Hooks and Custom Hooks",
      "Integrating RESTful services using Axios",
      "Implementing real-time databases, authentication, and storage solutions with Firebase and Firestore",
      "Developing encapsulated custom elements with Web Components for reusable UI widgets",
    ],
    icons: [SiAxios, SiFirebase, SiWebcomponentsdotorg],
  },
];
