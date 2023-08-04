import React from "react";
import "./Projects.css";
import Roll from "react-reveal/Roll";
const Projects = () => {
  return (
    <>
      {/* project is the name of class defined by us and container is predefined bootstrap class */}
      <div className=" project" id="project">
        <h2 className=" container col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
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
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
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
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    // yaha pe project ka image dalna
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
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
