import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utilities/TechstackList";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        {/* pura 12 col lelega*/}
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technology Stack
        </h2>
        <hr />
        <p className="pb-3">
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
        <div className="row">
          {TechstackList.map((tech) => (
            // aise tech.name likhne se we can get the name id and whatever is written in another file
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
