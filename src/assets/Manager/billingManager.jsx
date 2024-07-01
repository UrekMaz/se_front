import TopNavBar from '../Components/TopNavBar';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./billing.css";

function BillingManager() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomNumber = queryParams.get('room'); // Get room number from URL query parameter

  const [billingData, setBillingData] = useState(null);
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    if (roomNumber) {
      // Fetch billing data for the specified room number
      fetch(`http://localhost:3000/billingManager/${roomNumber}`)
        .then((response) => {
          if (!response.ok) {
            return response.json().then(err => {
              throw new Error(`Error: ${response.status} - ${err.error}`);
            });
          }
          return response.json();
        })
        .then((data) => {
          console.log('Fetched billing data:', data); // Log fetched data for debugging
          setBillingData(data);
        })
        .catch((error) => {
          console.error('Error fetching billing data:', error);
          setError(error.message);
        });
    }
  }, [roomNumber]); // Trigger the fetch when roomNumber changes

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!billingData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <style jsx>{`
        /* Your styles here */
      `}</style>
      <section className="container">
        <TopNavBar name={`Billing for ${roomNumber}`} hamburger="manager" />
        <section className="content">
          <div className="total-section">
            <div className="total-label">Total outstanding</div>
            <div className="total-amount">₹{billingData.items.reduce((total, item) => total + (item.price * item.quantity), 0)}</div>
          </div>
          <div className="print-container">
            <button className="print-button">Print all</button>
          </div>
          <section className="billing-info">
            {billingData.items.map((item, index) => (
              <div key={index} className="billing-card">
                <div className="billing-item">
                  <div className="item-row">
                    <div className="item-name">{item.serviceName}</div>
                    <div className="item-price">₹{item.price * item.quantity}</div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </section>
    </>
  );
}

export default BillingManager;
