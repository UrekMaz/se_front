import React, { useState } from 'react';
import axios from 'axios';

const AddHotelForm = ({ fetchHotels, setError }) => {
  const [hotelName, setHotelName] = useState('');

  // Function to handle form submit for adding a new hotel
  const handleAddHotel = async (e) => {
    e.preventDefault();
    if (!hotelName) {
      setError('Please enter a hotel name');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/hoteldatabase/add', {
        hotelName,
      });
      setHotelName('');
      fetchHotels(); // Refresh hotel list after adding new hotel
    } catch (error) {
      setError('Error adding hotel');
    }
  };

  return (
    <div className="card p-4 mb-4" style={{ backgroundColor: '#6C757D', color: '#FFFFFF' }}>
      <h2>Add a New Hotel</h2>
      <form onSubmit={handleAddHotel}>
        <div className="form-group">
          <label htmlFor="hotelName">Hotel Name:</label>
          <input
            type="text"
            className="form-control"
            id="hotelName"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
          />
        </div>
        {error && <p className="text-danger">{error}</p>} {/* Ensure error is properly used */}
        <button type="submit" className="btn btn-primary">
          Add Hotel
        </button>
      </form>
    </div>
  );
};

export default AddHotelForm;
