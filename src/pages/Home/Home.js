import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.txt";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import Flash from "react-reveal/Flash";

// ./ single matlb hu ek folder ke bahar aa jayenge
const Home = () => {
  const [theme, setTheme] = useTheme();

  //to handle theme when theme button is pressed
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={20} />
          ) : (
            <BsSunFill size={20} />
          )}
        </div>
        <div className="container home-content">
          <h2>Hi 🙋‍♂️ I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["FullStack Developer !", "MernStack Developer !"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          {/* buttons on home */}
          <Flash>
            <div className="home-buttons">
              <div>
                <div className="btn btn-hire">Hire Me</div>
              </div>
              <div>
                {/* due to this download fucntionality resume download takes place after resume button is pressed */}
                <a
                  className="btn btn-cv"
                  href={Resume}
                  download="Your Name.pdf"
                >
                  My Resume
                </a>
              </div>
            </div>
          </Flash>
        </div>
      </div>
    </>
  );
};

export default Home;
