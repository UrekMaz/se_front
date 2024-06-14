import * as React from "react";
import "./hist.css";
import TopNavBar from '../Components/TopNavBar';

function OrderItem({ orderName, cost, time }) {
  return (
    <div className="order-item">
      <div className="order-name" dangerouslySetInnerHTML={{ __html: orderName }}></div>
      <div className="order-cost">{cost}</div>
      <div className="order-time">{time}</div>
    </div>
  );
}

function RestoOrderHistory() {
  const orders = [
    { orderName: "1 cheese burger <br /> Pasta Aglio Olio", cost: "50", time: "3:40 pm" },
    { orderName: "1 cheese burger <br /> Pasta Aglio Olio", cost: "1234", time: "3:40 pm" },
    { orderName: "1 cheese burger <br /> Pasta Aglio Olio", cost: "68451", time: "3:40 pm" },
    { orderName: "1 cheese burger <br /> Pasta Aglio Olio", cost: "0", time: "3:40 pm" },
    { orderName: "1 cheese burger <br /> Pasta Aglio Olio", cost: "5125", time: "3:40 pm" },
    { orderName: "1 cheese burger <br /> Pasta Aglio Olio", cost: "0", time: "3:40 pm" },
    { orderName: "1 cheese burger <br /> Pasta Aglio Olio", cost: "1234", time: "3:40 pm" },
    { orderName: "1 cheese burger <br /> Pasta Aglio Olio", cost: "0", time: "3:40 pm" },
    { orderName: "1 cheese burger <br /> Pasta Aglio Olio", cost: "1234", time: "3:40 pm" },
    { orderName: "Header IA revision to support addition of blog page", cost: "1234", time: "3:40 pm" },
  ];

  return (
    <>
    <TopNavBar name="History" hamburger="restaurant" />
    <div className="container">
      <div className="search-section">
        <div className="search-bar">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c193da1201903f8e04b5129e99905ac2c6b3d2a5a84921094bcaf7282591cfc?apiKey=433434157f134a548d8a823886c69352&" alt="Search icon" className="search-icon" />
          <div className="search-text">Search</div>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8915c718d39b51b164a76de05b5d2f66cac10d610e3064c77fb988d1b077addd?apiKey=433434157f134a548d8a823886c69352&" alt="User icon" className="user-icon" />
      </div>
      <div className="orders-section">
        <div className="orders-header">
          <div className="header-item">Order</div>
          <div className="header-item">Cost</div>
          <div className="header-item">Time</div>
          <div className="header-item">Status</div>
        </div>
        <div className="orders-list">
          {orders.map((order, index) => (
            <OrderItem key={index} {...order} />
          ))}
        </div>
      </div>
    </div>
    </>
  
  );
}

export default RestoOrderHistory;
