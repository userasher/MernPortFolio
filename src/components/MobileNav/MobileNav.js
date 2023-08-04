import React, { useState } from "react";
import "./MobileNav.css";
import { TbMenu2 } from "react-icons/tb";
import { FcHome } from "react-icons/fc";
import { SiAboutdotme } from "react-icons/si";
import { FcGraduationCap } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import { FcBiomass } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Link } from "react-scroll";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  //handle navigation open in mobile view
  const handleOpen = () => {
    setOpen(!open);
  };

  //handle menu clicks(when any of the menu item is clicked entire menu sh0uld disappear)
  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <MdOutlineMenuOpen
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <TbMenu2
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title">My Portfolio App</span>
        </div>

        {/* agr open true hua toh hi ye menu dikhega... && checks if open is true */}
        {open && (
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
                  >
                    <FcContacts />
                    Contacts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
