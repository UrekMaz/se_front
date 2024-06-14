import * as React from 'react';
import "./InRoomDining.css"
import TopNavBar from '../Manager/TopNavBar';
const OrderRow = ({ order, cost, time }) => (
  <div className="order-row">
    <div className="order-info">{order}</div>
    <div className="order-cost">{cost}</div>
    <div className="order-time">{time}</div>
  </div>
);

export default function MyComponent() {
  const orders = [
    { order: '1 cheese burger Pasta Aglio Olio', cost: 50, time: '3:40 pm' },
    { order: '1 cheese burger Pasta Aglio Olio', cost: 1234, time: '3:40 pm' },
    { order: '1 cheese burger Pasta Aglio Olio', cost: 68451, time: '3:40 pm' },
    { order: '1 cheese burger Pasta Aglio Olio', cost: 0, time: '3:40 pm' },
    { order: '1 cheese burger Pasta Aglio Olio', cost: 5125, time: '3:40 pm' },
    { order: '1 cheese burger Pasta Aglio Olio', cost: 0, time: '3:40 pm' },
    { order: '1 cheese burger Pasta Aglio Olio', cost: 1234, time: '3:40 pm' },
    { order: '1 cheese burger Pasta Aglio Olio', cost: 0, time: '3:40 pm' },
    { order: '1 cheese burger Pasta Aglio Olio', cost: 1234, time: '3:40 pm' },
    { order: 'Header IA revision to support addition of blog page', cost: 1234, time: '3:40 pm' },
  ];

  return (
    <>
       <TopNavBar name = "Task History" hamburger="master"/>
       <div className="search-container">
        <div className="search-bar">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c193da1201903f8e04b5129e99905ac2c6b3d2a5a84921094bcaf7282591cfc?apiKey=433434157f134a548d8a823886c69352&" className="search-icon" alt="" />
          <input type="text" className="search-input" aria-label="Search" placeholder="Search" />
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6dfd6b3dc146101e488c2b57af1c4665f83952f51ddd3ed045e67a7ceabfb56?apiKey=433434157f134a548d8a823886c69352&" className="add-icon" alt="Add Task" />
      </div>
      <section className="orders-section">
        <header className="orders-header">
          <div className="header-title">Order</div>
          <div className="header-cost">Cost</div>
          <div className="header-time">Time</div>
        </header>
        {orders.map((item, index) => (
          <OrderRow key={index} order={item.order} cost={item.cost} time={item.time} />
        ))}
      </section>
      <style jsx>{`
       
      `}</style>
    </>
  );
}
