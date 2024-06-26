import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RHeader1 from './R1header';
import { useParams, useNavigate } from "react-router-dom";
import './css/RestaurantSelect.css';

function RHeader({ name }) {
  return (
    <section className="intro-section">
      <h1 className="greeting-title r-header">Hi {name}, pick your restaurant</h1>
    </section>
  );
}

const RestaurantCard = ({ name, imgSrc, description, rating, price }) => (
  <article className="restaurant-card">
    <header className="restaurant-header">{name}</header>
    <section className="restaurant-content">
      <img loading="lazy" src={imgSrc} alt={`Image of ${name}`} className="restaurant-image" />
      <div className="restaurant-info">
        <h2 className="restaurant-description-title">Description</h2>
        <p className="restaurant-description">{description}</p>
        <div className="restaurant-details">
          <span className="restaurant-rating">{rating}</span>
          <span className="restaurant-price">{price}</span>
        </div>
      </div>
    </section>
  </article>
);

function RestaurantSelect() {
  const [restaurants, setRestaurants] = useState([]);
  const { hotelId, userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRestaurantData() {
      try {
        const response = await axios.get(`http://localhost:5000/user/in-room-dining/${hotelId}/${userId}`);
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    }

    fetchRestaurantData();
  }, [hotelId, userId]);

  return (
    <>
      <a href="/user/dashboard"><RHeader1 message="Restaurant 1" /></a>
      <RHeader name="user" />
      {restaurants.map((restaurant, index) => (
        <Link key={index} to={`/user/in-room-dining/${hotelId}/${restaurant.restro_id}/${userId}`}>
          <RestaurantCard 
            name={restaurant.name}
            imgSrc={restaurant.imgSrc}
            description={restaurant.description}
            rating={restaurant.rating}
            price={restaurant.price}
          />
        </Link>
      ))}
    </>
  );
}

export default RestaurantSelect;
