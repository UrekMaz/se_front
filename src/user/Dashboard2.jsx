import React from 'react';
import { Link } from 'react-router-dom';
import "./css/Dashboard.css";
import FloatingWidget from "./Floatingwidget";

function ServiceButton({ text }) {
  return (
    <button className="service-button" tabIndex="0">
      {text}
    </button>
  );
}

function ImageComponent() {
  return (
    <>
      <figure className="image-container">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/106f0dd2a2a40eae1d369a6eea59a8ae334a6ead1304a87dc94edbabb5f03588?apiKey=e0ca87f5e1974e589ad51a28eed298e2&"
          alt=""
          className="styled-image"
        />
      </figure>
    </>
  );
}

function Header() {
  return (
    <header className="header1">
      <h1 id="appName">App name</h1>
    </header>
  );
}

function ServiceLink({ text, hotelId, userId }) {
  let link = text.toLowerCase().replace(/\s+/g, '-');
  if (link === 'in-room-dining') {
    link = `in-room-dining/${hotelId}/${userId}`;
  } else if (link === 'order-history') {
    link = `orderhistory/${hotelId}/${userId}`;
  } else if (link === 'housekeeping') {
    link = `housekeeping/${hotelId}/${userId}`; // Adjusted for housekeeping
  }
  return (
    <Link to={`/user/${link}`} className="service-link">
      {text}
    </Link>
  );
}

export default function Dashboard() {
  const hotelId = "7we8c02wo"; 
  const userId = "1234";
  const services = ["Housekeeping", "In-room dining", "Order history"];
  return (
    <>
      <Header />
      <section className="container">
        <header className="title">Welcome</header>
        <p className="subtitle">How can we help you?</p>
        <nav>
          {services.map((service) => (
            <ServiceLink key={service} text={service} hotelId={hotelId} userId={userId} />
          ))}
        </nav>
      </section>
      <div className="l">
        <FloatingWidget />
      </div>
    </>
  );
}
