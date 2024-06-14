import RHeader1 from "./R1header";
import OrderSection from "./OrderSection";
import * as React from "react";
import "./css/HouseKeeper.css"


 function ServiceCard ( { imgSrc, altText, serviceName, price }) {
    
const [count,setCount]=React.useState(0);
function increment()
{
    setCount(count+1)
}
function decrement()
{
    setCount(count-1)
}
    return(
    <div className="service-card">
      <img loading="lazy" src={imgSrc} alt={altText} className="service-image" />
      <div className="service-details">
        <div className="service-info">
          <h2 className="service-name">{serviceName}</h2>
          <p className="service-price">{price}</p>
        </div>
        <div className="left">
         <button className="card-button" onClick={increment}>
         
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32cc2612e7adc6c66ba5a5e9d2c070a8e2dde5276b5648db249eb08fb01506ab?apiKey=e0ca87f5e1974e589ad51a28eed298e2&"
              alt="increment"
              className="card-icon"
            />
          </button>
          
          {count===0?null:<div className="up"><p>{count}</p></div>}
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
          </button>
          }
          </div>
      </div>
    </div>)
 }
  
  export default function Housekeeping() {
    const services = [
      { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e6cdfbf4b9522844197506e51c7c7aa6c4d948a5b2932ee1b366c1bf2d224ad4?apiKey=e0ca87f5e1974e589ad51a28eed298e2&', altText: '', serviceName: 'Extra towel', price: '₹0' },
      { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7ba8d1a78ff1eb6ae06d53ee649c3292d840d8a8843bb66a0767996b09b2c318?apiKey=e0ca87f5e1974e589ad51a28eed298e2&', altText: '', serviceName: 'Extra mattress', price: '₹0' },
      { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9f5053291734a3d8ce8e42941a00e20999bb2d3e6bac215d88fe0acad887be8a?apiKey=e0ca87f5e1974e589ad51a28eed298e2&', altText: '', serviceName: 'Clean room', price: '₹0' },
      { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9f5053291734a3d8ce8e42941a00e20999bb2d3e6bac215d88fe0acad887be8a?apiKey=e0ca87f5e1974e589ad51a28eed298e2&', altText: '', serviceName: 'Need help with the TV', price: '₹250' },
      { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9f5053291734a3d8ce8e42941a00e20999bb2d3e6bac215d88fe0acad887be8a?apiKey=e0ca87f5e1974e589ad51a28eed298e2&', altText: '', serviceName: 'Something broken?', price: '₹250' },
      { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9f5053291734a3d8ce8e42941a00e20999bb2d3e6bac215d88fe0acad887be8a?apiKey=e0ca87f5e1974e589ad51a28eed298e2&', altText: '', serviceName: 'Ac remote', price: '₹250' }
    ];
  
    return (
      <>
      <a href="/confirmation"><div className="h"><RHeader1 message={"Housekeeping"}/></div></a>
        <section className="services-1">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </section>
       <div className="y3">
       <OrderSection message="Confirm"/>
       </div>
        
      </>
    );
  }