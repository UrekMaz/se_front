import * as React from "react";
import OrderSection from "./OrderSection";
import "./css/Menu.css"

function PriceCard({ imageSrc, title, description, price }) {
    const[count,setCount]=React.useState(0);
    function increment()
    {
        setCount(count+1)
    }
    function decrement()
    {
        setCount(count-1)
    }
  return (
    <>
      <div className="price-card">
        <div className="card-content">
          <img loading="lazy" src={imageSrc} alt={title} className="card-image" />
          <div className="card-details">
            <div className="card-title">{title}</div>
            <div className="card-description">{description}</div>
          </div>
        </div>
        <div className="card-price">{price}</div>
        <div className="align">
        <button className="card-button" onClick={increment}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32cc2612e7adc6c66ba5a5e9d2c070a8e2dde5276b5648db249eb08fb01506ab?apiKey=e0ca87f5e1974e589ad51a28eed298e2&"
              alt=""
              className="card-icon"
            />
          </button>
          {count===0?null:<p >{count}</p>}
          {count===0?null:
            <button className="card-button" onClick={decrement}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-minus-square"
                style={{ color: "green", width: "24px", height: "24px" }}
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
          </button>}
          </div>
          </div>
      
      <div className="divider" />
    </>
  );
}
{/*need to pass starters and mains as a param on menus later and use the starter and mains instead of items here*/}
function Menu_Component() {
  const items = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fbc8e498715bef08d03f893cd28e60a541301a4cc96d487a84b6c1b306ccade?apiKey=e0ca87f5e1974e589ad51a28eed298e2&", title: "Pasta Aglio Olio", description: "iqwefncqiuwefnpiqw", price: "₹250" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fbc8e498715bef08d03f893cd28e60a541301a4cc96d487a84b6c1b306ccade?apiKey=e0ca87f5e1974e589ad51a28eed298e2&", title: "Pasta Aglio Olio", description: "iqwefncqiuwefnpiqw", price: "₹250" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fbc8e498715bef08d03f893cd28e60a541301a4cc96d487a84b6c1b306ccade?apiKey=e0ca87f5e1974e589ad51a28eed298e2&", title: "Pasta Aglio Olio", description: "iqwefncqiuwefnpiqw", price: "₹250" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fbc8e498715bef08d03f893cd28e60a541301a4cc96d487a84b6c1b306ccade?apiKey=e0ca87f5e1974e589ad51a28eed298e2&", title: "Pasta Aglio Olio", description: "iqwefncqiuwefnpiqw", price: "₹250" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fbc8e498715bef08d03f893cd28e60a541301a4cc96d487a84b6c1b306ccade?apiKey=e0ca87f5e1974e589ad51a28eed298e2&", title: "Pasta Aglio Olio", description: "iqwefncqiuwefnpiqw", price: "₹250" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fbc8e498715bef08d03f893cd28e60a541301a4cc96d487a84b6c1b306ccade?apiKey=e0ca87f5e1974e589ad51a28eed298e2&", title: "Pasta Aglio Olio", description: "iqwefncqiuwefnpiqw", price: "₹250" },
 ];
 return (
    <> <section className="menu-section">

    <h2 className="menu-heading">Starters</h2>
    {items.map((item, index) => (
      <PriceCard key={index} {...item} />
    ))}
    
  </section>

  <section className="menu-section">
    <h2 className="menu-heading">Mains</h2>
    {items.map((item, index) => (
      <PriceCard key={index} {...item} />
    ))}
  </section>
 
  <a href="/home">
 
  <div className="w"><OrderSection message="SAVE"/></div>
</a>
  <style jsx>{}
  </style>
</>
);
}

export default Menu_Component;