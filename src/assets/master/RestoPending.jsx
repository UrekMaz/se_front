import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import "./RestoPending.css";
import TopNavBar from '../Components/TopNavBar';

function OrderCard({ order, onCheckboxChange }) {
  const { user_id, restro, time_of_order, date_of_order, completed } = order;

  const totalCost = restro.reduce((total, restroItem) => {
    const { menu: { starters = [], main = [], dessert = [] } = {} } = restroItem;
    return total + starters.concat(main, dessert).reduce((subTotal, item) => subTotal + (item.cost * item.quantity), 0);
  }, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="order-card">
      <header className="order-header">
        <span className="order-number">{user_id}</span>
        <input
          type="checkbox"
          className="order-checkbox"
          checked={completed}
          onChange={(e) => { e.stopPropagation(); onCheckboxChange(order); }}
          style={{ backgroundColor: completed ? 'green' : 'white' }} // Change checkmark color
        />
      </header>
      {restro.map((restroItem, index) => (
        <div key={index}>
          <div className="order-details">
            <div><strong></strong> {restroItem.name}</div>
            {/* <div><strong></strong> {restroItem.description}</div> */}
            {/* <div><strong>Rating:</strong> {restroItem.rating}</div> */}
          </div>
          <div className="order-items">
            {restroItem.menu.starters.map((item, idx) => (
              <div key={idx}>{`${item.quantity} : ${item.name}`}</div>
            ))}
            {restroItem.menu.main.map((item, idx) => (
              <div key={idx}>{`${item.quantity} : ${item.name}`}</div>
            ))}
            {restroItem.menu.dessert.map((item, idx) => (
              <div key={idx}>{`${item.quantity} : ${item.name}`}</div>
            ))}
          </div>
        </div>
      ))}
      <div className="order-details">
        <p className="order-cost">Total cost: ₹{totalCost}</p>
        <br />
        <p className="order-time">
          Order placed: <time>{new Date(date_of_order).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</time>
          
        </p>
      </div>
      <button className="print-button" type="button" onClick={handlePrint}>
        Print
      </button>
    </section>
  );
}

export default function RestaurantPending() {
  const [orders, setOrders] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchOrders = async () => {
      const params = new URLSearchParams(location.search);
      const hotelId = params.get("hotelId");

      try {
        const response = await axios.get(`http://localhost:5000/restaurant/pending-orders/${hotelId}`);
        const ordersWithValidDate = response.data.map(order => ({
          ...order,
          time_of_order: new Date(order.time_of_order)
        }));
        setOrders(ordersWithValidDate);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [location.search]);

  const handleCheckboxChange = async (order) => {
    const updatedOrder = { ...order, completed: !order.completed, time_of_completion: new Date().toISOString() };

    try {
      const response = await axios.put(`http://localhost:5000/restaurant/pending-orders/${order._id}/complete`, { completed: updatedOrder.completed, time_of_completion: updatedOrder.time_of_completion });
      setOrders(orders.map(o => o._id === order._id ? response.data : o));
    } catch (error) {
      console.error('Error updating order completion status:', error);
    }
  };

  return (
    <>
      <TopNavBar name="Pending Orders" hamburger="master" />
      <main className="orders-container">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            order={order}
            onCheckboxChange={handleCheckboxChange}
          />
        ))}
      </main>
    </>
  );
}
