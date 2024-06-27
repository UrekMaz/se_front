import React, { useEffect, useState } from "react";
import RHeader1 from "./R1header";
import "./css/OrderHistory.css";
import { useParams, useNavigate } from "react-router-dom";

function Bill({ orders, time, date }) {
  const gstRate = 0.05; // Assuming 5% GST

  // Calculate total cost for this order
  const totalCost = orders.reduce((total, order) => total + order.cost * order.quantity, 0);
  const gstAmount = totalCost * gstRate;
  const grandTotal = totalCost + gstAmount;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="container3">
      <header className="header3">
        <p className="status">Order delivered</p>
      </header>
      <main className="content">
        {orders.map((order, index) => (
          <div key={index} className="item">
            <div className="item-name">{order.name}</div>
            <div className="item-price">₹{order.cost * order.quantity}</div>
          </div>
        ))}
        <div className="order-summary">
          <p className="summary-label">GST</p>
          <p className="summary-value">₹{gstAmount.toFixed(2)}</p>
        </div>
        <hr className="divider" />
        <div className="total">
          <p className="total-label">Total</p>
          <p className="total-value">₹{grandTotal.toFixed(2)}</p>
        </div>
      </main>
      <section className="info">
        <div className="info-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/351c79ac73a2ca739399c5634e60df39346ebf309d7d392dfeb61cdd818d8c32?apiKey=e0ca87f5e1974e589ad51a28eed298e2&"
            alt="Clock icon"
            className="img"
          />
          <time className="time">{time}</time>
        </div>
        <div className="info-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9869fccb3c5fbec8821fe920c50a03fe37ea90d0ba1ff8908120c709f170f6?apiKey=e0ca87f5e1974e589ad51a28eed298e2&"
            alt="Calendar icon"
            className="img"
          />
          <time className="date-value">{date}</time>
        </div>
      </section>
      <footer className="footer">
        <button className="feedback-button" aria-label="Provide feedback">Provide feedback</button>
        <button className="reorder-button" aria-label="Reorder" onClick={handlePrint}>Print</button>
      </footer>
    </section>
  );
}

function OutstandingAmount({ orders }) {
  // Calculate total outstanding amount as sum of total costs of all orders
  const totalOutstanding = orders.reduce((total, order) => {
    const totalCost = order.restro[0].menu.starters.concat(order.restro[0].menu.main, order.restro[0].menu.dessert)
      .reduce((subtotal, item) => subtotal + item.cost * item.quantity, 0);
    return total + totalCost;
  }, 0);

  return (
    <section className="outstanding-amount">
      <p className="description">Total outstanding</p>
      <p className="amount">₹{totalOutstanding.toFixed(2)}</p>
    </section>
  );
}

function OrderHistory() {
  const [orders, setOrders] = useState([]);
 
  const { userId } = useParams();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user/orderhistory/${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched orders:', data);
        setOrders(data);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchOrders();
  }, [userId]);

  // Filter orders where confirmed is true
  const confirmedOrders = orders.filter(order => order.confirmed);

  return (
    <>
      <a href="/user/dashboard"><RHeader1 message="Order History" /></a>
      <OutstandingAmount orders={confirmedOrders} />
      {confirmedOrders.map((order, index) => (
        <Bill
          key={index}
          orders={order.restro[0].menu.starters.concat(order.restro[0].menu.main, order.restro[0].menu.dessert)}
          time={order.time_of_order}
          date={new Date(order.date_of_order).toLocaleDateString()}
        />
      ))}
    </>
  );
}

export default OrderHistory;
