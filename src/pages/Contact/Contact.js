import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="car1">
                <div className="row border-line">
                  <img
                    src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-10032.jpg?w=2000"
                    alt="contact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-2">
                <div className="row">
                  <h6>
                    Contact With
                    {/* ye saree icons hai */}
                    <BsLinkedin color="blue" size={26} className="ms-2" />
                    <FaGithubSquare color="black" size={30} className="ms-2" />
                  </h6>
                </div>
                <div className="row px-3 mb-4">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>
                <div className="row px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Write your name"
                    className="mb-3"
                  />
                </div>
                <div className="row px-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="mb-3"
                  />
                </div>
                <div className="row px-3">
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Write your message"
                    className="mb-3"
                  />
                </div>
                <div className="row px-3">
                  <button className="button">SEND MESSAGE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
