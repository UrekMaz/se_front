import React from 'react';
import "./css/Dashboard.css"
import "./css/float.css"

function ImageComponent() {
    return (
      <>
        <figure className="image-container">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/106f0dd2a2a40eae1d369a6eea59a8ae334a6ead1304a87dc94edbabb5f03588?apiKey=e0ca87f5e1974e589ad51a28eed298e2&"
            alt=""
            className="styled-image"
          />
        </figure>
     
      </>
    );
  }


function FloatingWidget() {
  const handleClick = () => {
    
    alert('Widget clicked!');
  };

  return (
    <div className="floating-widget" onClick={handleClick}>
     <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/106f0dd2a2a40eae1d369a6eea59a8ae334a6ead1304a87dc94edbabb5f03588?apiKey=e0ca87f5e1974e589ad51a28eed298e2&"
            alt=""
            className="styled-image"
          />
    </div>
  );
}

export default FloatingWidget;
