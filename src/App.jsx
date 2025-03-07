import { forwardRef } from "react";
import "./App.css";
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navbar";
import Resume from "./components/Resume/resume";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Freelance from "./components/Freelance/freelance";
import Footer from "./components/Footer/footer";
import ContactMe from "./components/Contact/contactme";

function App() {
  const refs = {
    home: forwardRef({}),
    about: forwardRef({}),
    resume: forwardRef({}),
    skills: forwardRef({}),
    projects: forwardRef({}),
    freelance: forwardRef({}),
    contactme: forwardRef({}),
  };
  return (
    <div className="app">
      <Navbar refs={refs} />
      <Home reference={refs.home} />
      <Resume reference={refs.resume} />
      <Skills reference={refs.skills} />
      <Projects reference={refs.projects} />
      <Freelance reference={refs.freelance} />
      <ContactMe reference={refs.contactme} />
      <Footer />
    </div>
  );
}

export default App;
