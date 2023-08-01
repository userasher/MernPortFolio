import React from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <div className="sidebar-section">
        <div className="sidebar">
          <div className="sidebar-toggle-icons">
            <AiOutlineDoubleLeft size={30} />
          </div>
        </div>
      </div>
      <div className="container">
        <Home />
      </div>
    </>
  );
};

export default Layout;
