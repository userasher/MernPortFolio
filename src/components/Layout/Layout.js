import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";
import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        {/* yaha pe conditionally render kiya hai uske liye {} use kiya hai */}
        {/* sidebar-toggle aur sidebar check karo layout.js me */}
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            {/* yaha pe menu component me toggle ko as a prop pass kiya hai */}
            {/* This is a way to pass data from the parent component (Layout) to its child component (Menus). */}

            <p onClick={handleToggle}>
              {/* agar toggle true hai to left vala nhi toh right vala 
              yaha pe hamne ternary operator in recat ka use kiya hai */}
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
