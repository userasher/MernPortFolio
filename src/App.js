import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/Home/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Techstack />
        <Projects />
      </div>
    </>
  );
}

export default App;
