import * as React from "react";
import "./RestaurantPending.css"
import TopNavBar from '../Components/TopNavBar';

function OrderCard({ orderNumber, imageSrc, items, totalCost, orderTime }) {
  return (
    <section className="order-card">
      <header className="order-header">
        <span className="order-number">{orderNumber}</span>
        <img loading="lazy" src={imageSrc} alt="" className="order-image" />
      </header>
  
  {items.map((i, index) => (
    <div className="order-items" key={index}>{`${i.qty}: ${i.item}`}</div>
  ))}


      <p className="order-cost">Total cost: ₹{totalCost}</p>
      <p className="order-time">
        Order placed: <time>{orderTime}</time>
      </p>
      <button className="print-button" type="button">
        Print
      </button>
    </section>
  );
}

export default function RestaurantPending() {
  const orders = [
    {
      orderNumber: "123",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0416a17cf491d00f21e7ef852cf5cdb580d92db75c4649be4ec0a2b3606d57fa?apiKey=e0ca87f5e1974e589ad51a28eed298e2&",
      items:[{qty:1,item:"Cheese Burger"},{qty:1,item:"Pasta Algio Olio"}],
      totalCost: 250,
      orderTime: "3:24 p.m.",
    },
    {
      orderNumber: "124",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0416a17cf491d00f21e7ef852cf5cdb580d92db75c4649be4ec0a2b3606d57fa?apiKey=e0ca87f5e1974e589ad51a28eed298e2&",
      items:[{qty:1,item:"Cheese Burger"},{qty:1,item:"Pasta Algio Olio"}],
      totalCost: 300,
      orderTime: "4:24 p.m.",
    },
    {
      orderNumber: "125",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0416a17cf491d00f21e7ef852cf5cdb580d92db75c4649be4ec0a2b3606d57fa?apiKey=e0ca87f5e1974e589ad51a28eed298e2&",
      items:[{qty:1,item:"Cheese Burger"},{qty:1,item:"Pasta Algio Olio"}],
      totalCost: 350,
      orderTime: "5:24 p.m.",
    },
  ];

  return (
    <>
    <TopNavBar name="Pending Orders" hamburger="restaurant" />
      <main className="orders-container">
        {orders.map((order, index) => (
          <OrderCard key={index} {...order} />
        ))}
      </main>
      <style jsx>{`
        
      `}</style>
    </>
  );
}