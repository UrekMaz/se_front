import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../Restaurant/hist.css";
import TopNavBar from "../Components/TopNavBar";

function OrderItem({ room_id, items, cost, time_of_completion }) {
  const formattedDate = new Date(time_of_completion).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const formattedTime = new Date(time_of_completion).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <div className="order-item">
      <div className="order-room">{room_id}</div>
      <div className="order-name">
        {items.map((item, index) => (
          <div key={index}>{`${item.quantity} ${item.name}`}</div>
        ))}
      </div>
      <div className="order-cost">{cost}</div>
      <div className="order-time">{`${formattedDate} ${formattedTime}`}</div>
    </div>
  );
}

export default function MyComponent() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const params = new URLSearchParams(window.location.search);
      const hotelId = params.get("hotelId");

      try {
        const response = await axios.get(`http://localhost:5000/restaurant/completed-orders/${hotelId}`,{
          params:{hotelId : hotelId}
        });
        const fetchedOrders = response.data.map(order => {
          const restroItems = order.restro.map(restroItem => {
            const itemsList = restroItem.menu.starters.concat(restroItem.menu.main, restroItem.menu.dessert);
            const totalCost = itemsList.reduce((total, item) => total + (item.cost * item.quantity), 0);

            return {
              room_id: order.user_id,
              items: itemsList,
              cost: `₹${totalCost.toFixed(2)}`,
              time_of_completion: order.time_of_completion
            };
          });
          return restroItems;
        }).flat();

        setOrders(fetchedOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <TopNavBar name="Task History" hamburger="master" />
      <div className="search-container">
        <div className="search-bar">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c193da1201903f8e04b5129e99905ac2c6b3d2a5a84921094bcaf7282591cfc?apiKey=433434157f134a548d8a823886c69352&" className="search-icon" alt="Search icon" />
          <input type="text" className="search-input" aria-label="Search" placeholder="Search" />
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6dfd6b3dc146101e488c2b57af1c4665f83952f51ddd3ed045e67a7ceabfb56?apiKey=433434157f134a548d8a823886c69352&" className="add-icon" alt="Add Task" />
      </div>
      <section className="orders-section">
        <header className="orders-header">
          <div className="header-room">Room ID</div>
          <div className="header-title">Order</div>
          <div className="header-cost">Cost</div>
          <div className="header-time">Time</div>
        </header>
        <div className="orders-list">
          {orders.map((order, index) => (
            <OrderItem key={index} {...order} />
          ))}
        </div>
      </section>
    </>
  );
}
