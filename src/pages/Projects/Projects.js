import React from "react";
import "./Projects.css";
import Roll from "react-reveal/Roll";
import img1 from "../../images/portfolio.jpg";
import img2 from "../../images/rail.jpeg";
const Projects = () => {
  return (
    <>
      {/* project is the name of class defined by us and container is predefined bootstrap class */}
      <div className="project" id="project">
        <h2 className=" container col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-4">
          <p className="p1">
            Project 1: PortFolio Website
            <br />
            Created a Portfolio website using Nodejs, Reactjs, Javascript, HTML
            and CSS.I have also used react packages liks Vertical timeline
            events, React-scroll, React-scroll-to-top, Nodemailer and custom
            hooks to achieve the light-dark theme in my website.For animation I
            have react-reveal package and made my website more user attentive.I
            have made use of ExpressJS to create rest APIs.
            <br />
            For sending mails when user fills up the form I have made use of a
            third party application sendgrid and to connect node server and
            sendgrid I have used Nodejs.
          </p>
        </p>
        {/* card design for project */}
        <Roll left>
          <div className="row" id="ads">
            {/* first project card start */}
            <div className="col-md-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    // yaha pe real project ka image dalna
                    src={img2}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="span card-detail-badge">MongoDB</span>
                  <span className="span card-detail-badge">Express</span>
                  <span className="span card-detail-badge">React</span>
                  <span className="span card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase ">
                      Railyway Concession Project
                    </h5>
                  </div>
                  {/* href me live project link add karna */}
                  <a className="ad-btn " href="#">
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* 2nd project card start */}
            <div className="col-md-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front End</span>
                  <img
                    // yaha pe project ka image dalna
                    src={img1}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  {/* <span className="span card-detail-badge">MongoDB</span> */}
                  <span className="span card-detail-badge">Express</span>
                  <span className="span card-detail-badge">React</span>
                  <span className="span card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase ">Mern Portfolio Website</h5>
                  </div>
                  <a className="ad-btn " href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Roll>
      </div>
    </>
  );
};

export default Projects;
