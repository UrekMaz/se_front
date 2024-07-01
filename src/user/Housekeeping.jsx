import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RHeader1 from './R1header';
import OrderSection from './OrderSection';
import './css/HouseKeeper.css';
import { useParams, useNavigate } from "react-router-dom";

// ServiceCard component
function ServiceCard({ id, imgSrc, altText, serviceName, price, onSelect }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onSelect({ id, imgSrc, altText, serviceName, price, quantity: newCount });
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onSelect({ id, imgSrc, altText, serviceName, price, quantity: newCount });
    }
  };

  return (
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
              alt=""
              className="card-icon"
            />
          </button>
          {count === 0 ? null : <div className="up"><p>{count}</p></div>}
          {count === 0 ? null :
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
    </div>
  );
}

// Housekeeping component
function Housekeeping() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const { hotelId, userId } = useParams();
  const [p, setP] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user/housekeeping/${hotelId}/${userId}`, {
          params:{hotelId : hotelId}
        });
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching housekeeping services:', error);
      }
    };

    fetchServices();
  }, [hotelId, userId]);

  const change = () => {
 
setP(true);
  };

  const handleSelectItem = (service) => {
    setSelectedItems(prevItems => {
      const updatedItems = [...prevItems];
      const selectedItemIndex = updatedItems.findIndex(item => item.serviceName === service.serviceName);

      if (selectedItemIndex !== -1) {
        if (service.quantity > 0) {
          updatedItems[selectedItemIndex] = service;
        } else {
          updatedItems.splice(selectedItemIndex, 1);
        }
      } else if (service.quantity > 0) {
        updatedItems.push(service);
      }

      console.log("Updated selected items:", updatedItems); // Debugging line
      return updatedItems;
    });
  };

  const handleSubmitOrder = async (event) => {
    event.preventDefault();
    if(p){
    try {
      console.log("Items being submitted:", selectedItems); // Debugging line to check items before submission
      const payload = { items: selectedItems };
      const response = await axios.post(`http://localhost:5000/user/housekeeping/${hotelId}/${userId}`, payload, {
        params:{hotelId : hotelId}
      });
      console.log('Order submitted successfully:', response.data);
      navigate("/user/dashboard")
     
    } catch (error) {
      console.error('Error submitting order:', error);
    }}
  };

  return (
    <>
      <a href="/user/dashboard"><div className="h"><RHeader1 message={"Housekeeping"} /></div></a>
      <form onSubmit={handleSubmitOrder}>
        <section className="services-1">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              id={service.id}
              imgSrc={service.imgSrc}
              altText={service.altText}
              serviceName={service.serviceName}
              price={service.price}
              onSelect={handleSelectItem}
            />
          ))}
        </section>
        <div className="y3">
          
          <button type="submit" className='order-section' onClick={change}>Submit Order</button>
        </div>
      </form>
    </>
  );
}

export default Housekeeping;
