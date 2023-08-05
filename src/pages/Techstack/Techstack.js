import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utilities/TechstackList";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        {/* pura 12 col lelega*/}
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technology Stack
          </h2>
        </RubberBand>

        <hr />
        <p className="pb-3">
          My tech stack consists of the front-end (client/user side) and backend
          (server-side). Frontend technologies include JavaScript, CSS,
          Tailwind, Bootstrap, HTML, UI libraries, and frameworks like Nextjs,
          ReactJS while backend technologies include Php, Express, Node. I have
          experience in creating fully functional validated websites using
          HTML,javascript and Php. I am comfortable with Mysql and MongoDB
          database.I have been extensively using react components in all my
          projects and I believe I have good command over them.
        </p>

        {/* technology stack vale boxs */}

        <div className="row">
          {TechstackList.map((tech) => (
            // aise tech.name likhne se we can get the name id and whatever is written in another file
            <Fade left>
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h4>{tech.name}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
