import React from "react";
import './FloorOptions.css';

function StatusButton({ status, isActive, onClick, children, altText }) {
  return (
    <button
      className={`status-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {children && <span>{children}</span>}
      {/* {status === 'Occupied' && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/75e058813a2e08726846101582d1da752d11515dae15be04bec176f9f1f79f89?apiKey=9edc371155984293ae45d68abbd13e7d&"
          alt={altText}
        />
      )} */}
    </button>
  );
}

function FloorOptions() {
  const [activeButtons, setActiveButtons] = React.useState(['Occupied']);

  const handleButtonClick = (status) => {
    setActiveButtons((prevActiveButtons) => {
      if (prevActiveButtons.includes(status)) {
        return prevActiveButtons.filter((button) => button !== status);
      } else {
        return [...prevActiveButtons, status];
      }
    });
  };

  return (
    <>
      <section className="status-container">
        <StatusButton
          status="Vacant"
          isActive={activeButtons.includes('Vacant')}
          onClick={() => handleButtonClick('Vacant')}
        >
          Vacant
        </StatusButton>
        <StatusButton
          status="Occupied"
          isActive={activeButtons.includes('Occupied')}
          onClick={() => handleButtonClick('Occupied')}
          altText="Status image"
        >
          Occupied
        </StatusButton>
        <StatusButton
          status="Suite"
          isActive={activeButtons.includes('Suite')}
          onClick={() => handleButtonClick('Suite')}
        >
          Suite
        </StatusButton>
        <StatusButton
          status="Hotel units"
          isActive={activeButtons.includes('Hotel units')}
          onClick={() => handleButtonClick('Hotel units')}
        >
          Hotel units
        </StatusButton>
        <StatusButton
          status="2 Bed rooms"
          isActive={activeButtons.includes('2 Bed rooms')}
          onClick={() => handleButtonClick('2 Bed rooms')}
        >
          2 Bed rooms
        </StatusButton>
      </section>
    </>
  );
}

export default FloorOptions;