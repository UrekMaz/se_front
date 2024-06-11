import React from "react";
import './TopNavBar.css';
import Hamburger from "./Hamburger";
import Header from "./Header";


function TopNavBar(props) {

  return (
    <>
    <header className="header-container">
        <div className="header-content">
          <div>
          <Header name = {props.name}></Header>
          </div>
          <div>
          <Hamburger />
          </div>
          <hr />
        </div>
    </header>
    </>
  );
}

export default TopNavBar;
