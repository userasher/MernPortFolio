import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/Home/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Educations/Education";
import WorkExp from "./pages/workExp/WorkExp";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <WorkExp />
        <Contact />
      </div>
      <div className="footer" mb-3 ms-3>
        <h4 className="text-center">Made with ❣️ By Ashwath &copy; 2023</h4>
      </div>
    </>
  );
}

export default App;
