import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RHeader1 from "./R1header";
import OrderSection from "./OrderSection";
import "./css/OrderConfirmation.css";

function ConfirmationMessage() {
  return (
    <section className="confirmation-message">Your order has been placed!</section>
  );
}

const LineItem = ({ label, value }) => (
  <div className="line-item">
    <span className="line-item-label">{label}</span>
    <span className="line-item-value">{value}</span>
  </div>
);

function Subbill({ items }) {
  return (
    <section className="summary">
      {items.map((item, index) => (
        <LineItem key={index} label={item.label} value={item.value} />
      ))}
    </section>
  );
}

function ProductItem({ imageSrc, title, quantity, price }) {
  return (
    <article className="product-card">
      <img loading="lazy" src={imageSrc} alt={title} className="product-image" />
      <section className="product-info">
        <header className="product-details">
          <h2 className="product-title">{title}</h2>
          <p className="product-quantity">Quantity: {quantity}</p>
        </header>
        <p className="product-price">₹{price}</p>
      </section>
    </article>
  );
}

function OrderConfirmation() {
  const [confirm, setConfirm] = useState(false);
  const [menu, setMenu] = useState(null); // State to store fetched menu items
  const [subtotal, setSubtotal] = useState(0);
  const [gst, setGst] = useState(0);
  const [total, setTotal] = useState(0);
  const { hotelId, restoId, userId ,orderId } = useParams();

  useEffect(() => {
    async function fetchSelectedItems() {
      try {
        const response = await axios.get(`http://localhost:5000/user/orderconfirmation/${hotelId}/${restoId}/${userId}/${orderId}`);
        setMenu(response.data.menu); // Set menu state with fetched menu items
        calculateSubtotal(response.data.menu); // Calculate subtotal, GST, and total
      } catch (error) {
        console.error("Error fetching selected items:", error);
      }
    }

    fetchSelectedItems();
  }, [hotelId, restoId, userId, orderId]);

  const rendered = confirm ? (
    <a href="/user/dashboard">
      <div className="x">
        <OrderSection className="x" message="Done" />
      </div>
    </a>
  ) : (
    <OrderSection message="Confirm" />
  );

  async function confirmed() {
    try {
      console.log('Sending patch request...');
      const response = await axios.patch(`http://localhost:5000/user/orderconfirmation/${orderId}`, {
        confirmed: true
      });
      console.log('Patch request successful:', response.data);
      setConfirm(true); 
    } catch (error) {
      console.error('Error confirming order:', error);
    }
  }

  function calculateSubtotal(menu) {
    if (!menu) return;

    let sum = 0;
    // Calculate subtotal based on selected items
    if (menu.starters && menu.starters.length > 0) {
      menu.starters.forEach(item => {
        sum += item.quantity * item.price; // Calculate subtotal based on price per unit
      });
    }

    // Update subtotal state
    setSubtotal(sum);

    // Calculate GST (assume 10% of subtotal)
    const gstAmount = sum * 0.1; // 10% GST
    setGst(gstAmount);

    // Calculate total (subtotal + GST)
    const totalAmount = sum + gstAmount;
    setTotal(totalAmount);
  }

  // Display loading indicator while fetching data
  if (!menu) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {confirm ? <ConfirmationMessage /> : null}
      <a href={`/user/in-room-dining/${hotelId}/${restoId}/${userId}`}>
        <RHeader1 message="Order confirmation" />
      </a>
      {/* Display selected starters */}
      {menu.starters && menu.starters.length > 0 ? (
        menu.starters.map((item, index) => (
          <ProductItem
            key={index}
            imageSrc={item.image} // Assuming image field is present in the item object
            title={item.title} // Adjust according to your schema
            quantity={item.quantity}
            price={item.price} // Ensure this matches the field name containing the price
          />
        ))
      ) : (
        <p>No starters selected</p>
      )}
      {menu.main && menu.main.length > 0 ? (
        menu.main.map((item, index) => (
          <ProductItem
            key={index}
            imageSrc={item.image} // Assuming image field is present in the item object
            title={item.title} // Adjust according to your schema
            quantity={item.quantity}
            price={item.price} // Ensure this matches the field name containing the price
          />
        ))
      ) : (
        <p>No mains selected</p>
      )}
      {/* Display subtotal, GST, and total */}
      <Subbill
        items={[
          { label: "Subtotal", value: `₹${subtotal.toFixed(2)}` }, // Format subtotal with 2 decimal places
          { label: "GST (10%)", value: `₹${gst.toFixed(2)}` }, // Format GST with 2 decimal places
          { label: "Total", value: `₹${total.toFixed(2)}` }, // Format total with 2 decimal places
        ]}
      />
      <div className="space">
        <button className="b-style" onClick={confirmed}>
          {rendered}
        </button>
      </div>
      <style jsx>{`
        .space {
          margin-top: 305.63px;
          margin-right: 30px;
        }
        .x {
          position: absolute;
          top: 0;
          left: 0;
          width: 240px;
        }
      `}</style>
    </>
  );
}

export default OrderConfirmation;
