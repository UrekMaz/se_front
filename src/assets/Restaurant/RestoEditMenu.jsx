import TopNavBar from '../Components/TopNavBar';
import * as React from "react";
import { useState } from "react";
import './menu.css';

function MenuItem({ image, title, description, price }) {
  return (
    <>
      <div className="menu-item">
        <div className="remove-item" role="button" tabIndex="0"> 
          - 
        </div>
        <div className="menu-item-details">
          <img loading="lazy" src={image} alt={title} className="menu-item-image" />
          <div className="menu-item-text">
            <div className="menu-item-title">{title}</div>
            <div className="menu-item-description">{description}</div>
          </div>
        </div>
        <div className="menu-item-price">{price}</div>
      </div>
      <div className="menu-item-divider"></div>
    </>
  );
}

function RestoEditMenu() {
  const starters = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/07fbf4d3647203c7c9ed5d1f6b08f0f2145578793fd8d67d253a6a64f3bc980f?apiKey=433434157f134a548d8a823886c69352&", title: "Pasta Aglio Olio", description: "iqwefncqiuwefnpiqw", price: "₹250", },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/07fbf4d3647203c7c9ed5d1f6b08f0f2145578793fd8d67d253a6a64f3bc980f?apiKey=433434157f134a548d8a823886c69352&", title: "Pasta Aglio Olio", description: "iqwefncqiuwefnpiqw", price: "₹250", },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/07fbf4d3647203c7c9ed5d1f6b08f0f2145578793fd8d67d253a6a64f3bc980f?apiKey=433434157f134a548d8a823886c69352&", title: "Pasta Aglio Olio", description: "iqwefncqiuwefnpiqw", price: "₹250", },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/07fbf4d3647203c7c9ed5d1f6b08f0f2145578793fd8d67d253a6a64f3bc980f?apiKey=433434157f134a548d8a823886c69352&", title: "Pasta Aglio Olio", description: "iqwefncqiuwefnpiqw", price: "₹250", },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/07fbf4d3647203c7c9ed5d1f6b08f0f2145578793fd8d67d253a6a64f3bc980f?apiKey=433434157f134a548d8a823886c69352&", title: "Pasta Aglio Olio", description: "iqwefncqiuwefnpiqw", price: "₹250", },
  ];

  const mains = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/07fbf4d3647203c7c9ed5d1f6b08f0f2145578793fd8d67d253a6a64f3bc980f?apiKey=433434157f134a548d8a823886c69352&", title: "Pasta Aglio Olio", description: "iqwefncqiuwefnpiqw", price: "₹250", },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/07fbf4d3647203c7c9ed5d1f6b08f0f2145578793fd8d67d253a6a64f3bc980f?apiKey=433434157f134a548d8a823886c69352&", title: "Pasta Aglio Olio", description: "iqwefncqiuwefnpiqw", price: "₹250", },
  ];

  const [dishList, setDishList] = useState([...starters, ...mains]);

  const addNewDish = () => {
    const newDish = {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/07fbf4d3647203c7c9ed5d1f6b08f0f2145578793fd8d67d253a6a64f3bc980f?apiKey=433434157f134a548d8a823886c69352&',
      title: 'New Dish',
      description: 'Description',
      price: '₹300'
    };
    setDishList([...dishList, newDish]);
  };

  return (
    <>
     <TopNavBar name="Edit Menu" hamburger="restaurant" />
      <section className="menu-container">
        <div className="add-dish" onClick={addNewDish}>
          + Add new dish
        </div>
        <section className="menu-section">
          <h2 className="menu-section-title">Starters</h2>
          {starters.map((item, index) => (
            <MenuItem key={index} image={item.image} title={item.title} description={item.description} price={item.price} />
          ))}
        </section>
        <section className="menu-section">
          <h2 className="menu-section-title">Mains</h2>
          {mains.map((item, index) => (
            <MenuItem key={index} image={item.image} title={item.title} description={item.description} price={item.price} />
          ))}
        </section>
        <section className="menu-section">
          <h2 className="menu-section-title">All Dishes</h2>
          {dishList.map((item, index) => (
            <MenuItem key={index} image={item.image} title={item.title} description={item.description} price={item.price} />
          ))}
        </section>
      </section>
    </>
  );
}

export default RestoEditMenu;

