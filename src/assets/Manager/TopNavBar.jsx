import React from "react";
import PropTypes from 'prop-types';
import './TopNavBar.css';
import { Hamburger, HamburgerMaster, HamburgerRestaurant } from "./Hamburger";
// import { useHistory } from 'react-router-dom';
import Header from "./Header";
// import BackButton from './BackButton';

function TopNavBar(props) {
  const renderHamburger = () => {
    switch (props.hamburger) {
      case "manager":
        return <Hamburger />;
      case "master":
        return <HamburgerMaster />;
      case "restaurant":
        return <HamburgerRestaurant />;
      default:
        return <HamburgerRestaurant />; // default to HamburgerRestaurant
    }
  };

  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <div>
            {/* <BackButton/> */}
          </div>
          <div className="header-content">
            <Header name={props.name} />
          </div>
          <div>
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
