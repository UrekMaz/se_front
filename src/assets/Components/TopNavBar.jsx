import React from "react";
import PropTypes from 'prop-types';
import './TopNavBar.css';
import { Hamburger, HamburgerMaster, HamburgerRestaurant, HamburgerHousekeeper } from "./TopNavBarComponents/Hamburger";
// import { useHistory } from 'react-router-dom';
import Header from "./TopNavBarComponents/Header";
// import BackButton from './BackButton';
import BackButton from "./TopNavBarComponents/Backbutton";

function TopNavBar(props) {
  const renderHamburger = () => {
    switch (props.hamburger) {
      case "manager":
        return <Hamburger />;
      case "master":
        return <HamburgerMaster />;
      case "restaurant":
        return <HamburgerRestaurant />;
      case "housekeeper":
        return <HamburgerHousekeeper />;
      default:
        return <HamburgerRestaurant />; // default to HamburgerRestaurant
    }
  };

  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <div className="left">
            <BackButton/>
          </div>
          <div className="center">
            <Header name={props.name} />
          </div>
          <div className="right">
            {renderHamburger()}
          </div>
          <hr />
        </div>
      </header>
    </>
  );
}

TopNavBar.propTypes = {
  name: PropTypes.string,
  hamburger: PropTypes.string
};

TopNavBar.defaultProps = {
  name: 'Header',
  hamburger: 'manager'
};

export default TopNavBar;
