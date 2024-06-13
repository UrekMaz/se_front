import * as React from "react";
import { Link } from 'react-router-dom';
import RHeader1 from "./R1header";
import OrderSection from "./OrderSection";
import "./css/RestaurantSelect.css"
function RHeader({name}) {
  return (
    <>
      <section className="intro-section">
        <h1 className="greeting-title r-header">Hi {name}, pick your restaurant</h1>
      </section>
      <style jsx>{`
      
      `}</style>
    </>
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
  const restaurants = [
    {
      name: "Restaurant1",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/83c18b6d711e2bb98ffd61f309875a0a91359da41c6b554a943207226c891bbb?apiKey=e0ca87f5e1974e589ad51a28eed298e2&",
      description: "lakjc aleskcj aweskjc",
      rating: "Rating?",
      price: "Price for 2?",
    },
    {
      name: "Restaurant2",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/83c18b6d711e2bb98ffd61f309875a0a91359da41c6b554a943207226c891bbb?apiKey=e0ca87f5e1974e589ad51a28eed298e2&",
      description: "lakjc aleskcj aweskjc",
      rating: "Rating?",
      price: "Price for 2?",
    },
    {
      name: "Restaurant3",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/83c18b6d711e2bb98ffd61f309875a0a91359da41c6b554a943207226c891bbb?apiKey=e0ca87f5e1974e589ad51a28eed298e2&",
      description: "lakjc aleskcj aweskjc",
      rating: "Rating?",
      price: "Price for 2?",
    }
  ];
  return (
    <>
      <a href="/confirmation"><RHeader1 message="Restaurant 1" /></a>
      <RHeader name="user" />
      {restaurants.map((restaurant, index) => (
        <Link key={index} to={`/${restaurant.name}`}>
          <RestaurantCard {...restaurant} />
        </Link>
      ))}
      
      <style jsx>{`
        
      `}</style>
    </>
  );
}

export default RestaurantSelect;
