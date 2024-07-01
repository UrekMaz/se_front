import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import RHeader1 from "./R1header";
import OrderSection from "./OrderSection";
import FloatingWidget from "./Floatingwidget";
import "./css/Menu.css";

function PriceCard({ imageSrc, title, description, price, category, onAddToOrder }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    onAddToOrder({ title, price, quantity: count + 1, image: imageSrc, description, category });
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onAddToOrder({ title, price, quantity: count - 1, image: imageSrc, description, category });
    }
  };

  return (
    <>
      <div className="price-card">
        <div className="card-content">
          <img loading="lazy" src={imageSrc} alt={title} className="card-image" />
          <div className="card-details">
            <div className="card-title">{title}</div>
            <div className="card-description">{description}</div>
          </div>
        </div>
        <div className="card-price">{price}</div>
        <div className="align">
          <button className="card-button" onClick={increment}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32cc2612e7adc6c66ba5a5e9d2c070a8e2dde5276b5648db249eb08fb01506ab?apiKey=e0ca87f5e1974e589ad51a28eed298e2&"
              alt=""
              className="card-icon"
            />
          </button>
          {count === 0 ? null : <p>{count}</p>}
          {count === 0 ? null : (
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
          )}
        </div>
      </div>

      <div className="divider" />
    </>
  );
}

function MenuSide() {
  const [restaurantName, setRestaurantName] = useState('');
  const [starters, setStarters] = useState([]);
  const [mains, setMains] = useState([]);
  const { hotelId, restoId ,userId} = useParams(); // Removed userId from here
// Defined userId here directly
  const navigate = useNavigate(); // Access the navigate function from React Router DOM

  const [selectedItems, setSelectedItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false); // Boolean state to track if order is placed
 const[orderId,setOrderId]=useState('');
 const [p, setP] = useState(false);
  useEffect(() => {
    async function fetchMenuData() {
      try {
        const response = await axios.get(`http://localhost:5000/user/in-room-dining/${hotelId}/${restoId}/${userId}`, {
          params: { hotelId: hotelId },
        });
        const { name, menu, description, rating } = response.data;
        setRestaurantName(name);
        setStarters(menu.starters);
        setMains(menu.main);
        // setDescription(description); // Consider how you want to use these
        // setRating(rating);         // values in your UI
      } catch (error) {
        console.error('Error fetching menu data:', error);
        // Optionally, handle error state or show user feedback
      }
    }

    fetchMenuData();
  }, [hotelId, restoId]);

  const handleAddToOrder = (item) => {
    const existingItemIndex = selectedItems.findIndex((i) => i.title === item.title);
    if (existingItemIndex !== -1) {
      // Update existing item's quantity
      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems[existingItemIndex].quantity = item.quantity;
      setSelectedItems(updatedSelectedItems);
      console.log("Item quantity updated successfully:", updatedSelectedItems);
    } else {
      // Add new item to selected items
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handlePlaceOrder = async () => {
    if(p){
    try {
      const response = await axios.post(
        `http://localhost:5000/user/in-room-dining/${hotelId}/${restoId}/${userId}`,
        { selectedItems }, { params: { hotelId: hotelId },}
      );
      console.log("Order placed successfully:", response.data);
      // Optionally, you can navigate to the confirmation page here
      if (response.status === 200) {
        setOrderPlaced(true); // Set orderPlaced to true upon successful order placement
       // Navigate to order confirmation page
       navigate(`/user/orderconfirmation/${hotelId}/${restoId}/${userId}/${response.data.orderId}`);
       setOrderId(response.data.orderId)
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      // Optionally, handle error state or show user feedback
    }}
  };

  const change = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setP(true);
    handlePlaceOrder();
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      // Perform the same action as handlePlaceOrder upon form submission
      await handlePlaceOrder();
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, handle error state or show user feedback
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <a href={`/user/in-room-dining/${hotelId}/${userId}`}>
        <div className="h"><RHeader1 message={restaurantName} /></div>
      </a>
      <section className="menu-section">
        <h2 className="menu-heading">Starters</h2>
        {starters.map((item, index) => (
          <PriceCard
            key={index}
            imageSrc={item.image}
            title={item.name}
            description={item.description}
            price={item.cost}
            category="starters"
            onAddToOrder={handleAddToOrder}
          />
        ))}
      </section>

      <section className="menu-section">
        <h2 className="menu-heading">Mains</h2>
        {mains.map((item, index) => (
          <PriceCard
            key={index}
            imageSrc={item.image}
            title={item.name}
            description={item.description}
            price={item.cost}
            category="main"
            onAddToOrder={handleAddToOrder}
          />
        ))}
      </section>
      <div className="s"><FloatingWidget /></div>
      <div className="w">
       <button className="order-section" onClick={change}>Place Order</button>
      </div>
    </form>
  );
}

export default MenuSide;
