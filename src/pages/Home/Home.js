import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.txt";
// ./ single matlb hu ek folder ke bahar aa jayenge
const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
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
          <div className="home-buttons">
            <div>
              <div className="btn btn-hire">Hire Me</div>
            </div>
            <div>
              {/* due to this download fucntionality resume download takes place after resume button is pressed */}
              <a className="btn btn-cv" href={Resume} download="Your Name.pdf">
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
