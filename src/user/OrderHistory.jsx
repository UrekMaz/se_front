import * as React from "react";
import RHeader1 from "./R1header";
import "./css/OrderHistory.css"
function Bill() {
  const orders = [
    { name: "1 Pasta Aglio Olio", price: "₹120" },
    { name: "1 Cheese Burger", price: "₹120" },
  ];

  return (
    <>
      <style jsx>{`
       
      `}</style>
      <section className="container3">
        <header className="header3">
          <p className="status">Order delivered</p>
        </header>
        <main className="content">
          {orders.map((order, index) => (
            <div key={index} className="item">
              <div className="item-name">{order.name}</div>
              <div className="item-price">{order.price}</div>
            </div>
          ))}
          <div className="order-summary">
            <p className="summary-label">GST</p>
            <p className="summary-value">₹10</p>
          </div>
          <hr className="divider" />
          <div className="total">
            <p className="total-label">Total</p>
            <p className="total-value">₹250</p>
          </div>
        </main>
        <section className="info">
          <div className="info-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/351c79ac73a2ca739399c5634e60df39346ebf309d7d392dfeb61cdd818d8c32?apiKey=e0ca87f5e1974e589ad51a28eed298e2&" alt="Clock icon" className="img" />
            <time className="time">3:24 <span>p.m.</span></time>
          </div>
          <div className="info-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9869fccb3c5fbec8821fe920c50a03fe37ea90d0ba1ff8908120c709f170f6?apiKey=e0ca87f5e1974e589ad51a28eed298e2&" alt="Calendar icon" className="img" />
            <time className="date-value">7 June, 2024</time>
          </div>
        </section>
        <footer className="footer">
          <button className="feedback-button" aria-label="Provide feedback">Provide feedback</button>
          <button className="reorder-button" aria-label="Reorder">Reorder</button>
        </footer>
      </section>
    </>
  );
}
function OutstandingAmount() {
    return (
      <>
        <section className="outstanding-amount">
          <p className="description">Total outstanding</p>
          <p className="amount">₹2050</p>
        </section>
  
        <style jsx>{`
         
        `}</style>
      </>
    );
  }
  

function OrderHistory()
{
    return (
        <>
        <a href="/confirmation"><RHeader1 message="Order History"/></a>
        <OutstandingAmount/>
        <Bill/>
        <Bill/>
        </>
    )
}
export default OrderHistory;
