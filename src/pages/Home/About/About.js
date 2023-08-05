import React from "react";
import "./About.css";
import image1 from "../../../images/ash.jpg.jpeg";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={image1} alt="profile-pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              Ambitious and hardworking individual, seeking to work as Software
              Developer who is Proficient in Data structures, Algorithms and
              Full Stack Web Development. Aiming to work at a place with
              challenging environment providing good work-life balance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
