import React from "react";
import "./Menus.css";
import { FcHome } from "react-icons/fc";
import { SiAboutdotme } from "react-icons/si";
import { FcGraduationCap } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import { FcBiomass } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";

import { BsPersonWorkspace } from "react-icons/bs";
const Menus = ({ toggle }) => {
  return (
    // this empty brackets are called as syntactical sugar form of react
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src="client\src\components\Menus\ash_new.jpeg"
              alt="profile-pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
              <div className="nav-link">
                <SiAboutdotme />
                About
              </div>
              <div className="nav-link">
                <FcGraduationCap />
                Education Details
              </div>
              <div className="nav-link">
                <FcSupport />
                Tech Stack
              </div>
              <div className="nav-link">
                <FcBiomass />
                Projects
              </div>
              <div className="nav-link">
                <BsPersonWorkspace />
                Work Experience
              </div>

              <div className="nav-link">
                <FcContacts />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
              <div className="nav-link">
                <SiAboutdotme title="About" />
              </div>
              <div className="nav-link">
                <BsPersonWorkspace title="Work" />
              </div>
              <div className="nav-link">
                <FcSupport title="Tech" />
              </div>
              <div className="nav-link">
                <FcGraduationCap title="Education" />
              </div>
              <div className="nav-link">
                <FcBiomass title="Projects" />
              </div>

              <div className="nav-link">
                <FcContacts title="Contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
