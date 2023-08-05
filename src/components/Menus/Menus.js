import React from "react";
import "./Menus.css";
import { FcHome } from "react-icons/fc";
import { SiAboutdotme } from "react-icons/si";
import { FcGraduationCap } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import { FcBiomass } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { Link } from "react-scroll";
import Pulse from "react-reveal/Pulse";
import HeadShake from "react-reveal/HeadShake";
import image2 from "../../images/ash.jpg.jpeg";

import { BsPersonWorkspace } from "react-icons/bs";
const Menus = ({ toggle }) => {
  return (
    // this empty brackets are called as syntactical sugar form of react
    <>
      {toggle ? (
        <>
          <Pulse>
            <div className="navbar-profile-pic">
              <img src={image2} alt="profile-pic" />
            </div>
          </Pulse>

          {/* nav items me hamare sare menu itmes hai */}
          <HeadShake>
            <div className="mobile-nav-menu">
              <div className="nav-items">
                <div className="nav-item">
                  <div className="nav-link">
                    {/* home */}
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                    >
                      <FcHome />
                      Home
                    </Link>
                  </div>

                  {/* about me */}
                  <div className="nav-link">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                    >
                      <SiAboutdotme />
                      About
                    </Link>
                  </div>

                  {/* education detials */}
                  <div className="nav-link">
                    <Link
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                    >
                      <FcGraduationCap />
                      Education Details
                    </Link>
                  </div>

                  {/* techstack */}
                  <div className="nav-link">
                    <Link
                      to="techstack"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                    >
                      <FcSupport />
                      Tech Stack
                    </Link>
                  </div>

                  {/* project */}
                  <div className="nav-link">
                    <Link
                      to="project"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                    >
                      <FcBiomass />
                      Projects
                    </Link>
                  </div>

                  {/* Internship */}
                  <div className="nav-link">
                    <Link
                      to="work"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                    >
                      <BsPersonWorkspace />
                      Internship
                    </Link>
                  </div>

                  {/* contacts */}
                  <div className="nav-link">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                    >
                      <FcContacts />
                      Contacts
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </HeadShake>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                {/* when navbar is shrinked these icons will be showed */}

                {/* home */}
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                </Link>
              </div>

              {/* about */}
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <SiAboutdotme />
                </Link>
              </div>

              {/* education */}
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcGraduationCap />
                </Link>
              </div>

              {/* techstack */}
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcSupport />
                </Link>
              </div>

              {/* project */}
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiomass />
                </Link>
              </div>

              {/* work */}
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <BsPersonWorkspace />
                </Link>
              </div>

              {/* contact */}
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcContacts />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
