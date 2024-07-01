import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddHotelRoom = () => {
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const [occupied, setOccupied] = useState(false);
  const [type, setType] = useState('');
  const [typeOfBeds, setTypeOfBeds] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get('http://localhost:5000/hoteldatabase/get');
      setHotels(response.data);
    } catch (error) {
      setError('Error fetching hotels');
    }
  };

  const handleAddRoom = async (e) => {
    e.preventDefault();
    if (!selectedHotelId || !roomNo || !type || !typeOfBeds) {
      setError('Please fill in all fields');
      return;
    }

    try {
        console.log("Hotel Id" + selectedHotelId);
      await axios.post('http://localhost:5000/hoteldatabase/hotelrooms/add', {
        hotelId: selectedHotelId,
        room_no: Number(roomNo),
        occupied,
        type,
        type_of_beds: typeOfBeds,
      });
      setSelectedHotelId('');
      setRoomNo('');
      setOccupied(false);
      setType('');
      setTypeOfBeds('');
      setError('');
    } catch (error) {
      setError('Error adding room');
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#333', color: '#fff', height: '100vh' }}>
      <h2 style={{ textAlign: 'center' }}>Add Hotel Room</h2>
      <form onSubmit={handleAddRoom} style={{ maxWidth: '600px', margin: 'auto' }}>
        <div className="form-group">
          <label htmlFor="selectedHotel">Select Hotel:</label>
          <select
            className="form-control"
            id="selectedHotel"
            value={selectedHotelId}
            onChange={(e) => setSelectedHotelId(e.target.value)}
            style={{ backgroundColor: '#444', color: '#fff', marginBottom: '15px' }}
          >
            <option value="">Select a hotel...</option>
            {hotels.map((hotel) => (
              <option key={hotel.hotelId} value={hotel.hotelId}>
                {hotel.hotelName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="roomNo">Room Number:</label>
          <input
            type="number"
            className="form-control"
            id="roomNo"
            value={roomNo}
            onChange={(e) => setRoomNo(e.target.value)}
            style={{ backgroundColor: '#444', color: '#fff', marginBottom: '15px' }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="occupied">Occupied:</label>
          <select
            className="form-control"
            id="occupied"
            value={occupied}
            onChange={(e) => setOccupied(e.target.value === 'true')}
            style={{ backgroundColor: '#444', color: '#fff', marginBottom: '15px' }}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            className="form-control"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{ backgroundColor: '#444', color: '#fff', marginBottom: '15px' }}
          >
            <option value="">Select type...</option>
            <option value="suite">Suite</option>
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="typeOfBeds">Type of Beds:</label>
          <select
            className="form-control"
            id="typeOfBeds"
            value={typeOfBeds}
            onChange={(e) => setTypeOfBeds(e.target.value)}
            style={{ backgroundColor: '#444', color: '#fff', marginBottom: '15px' }}
          >
            <option value="">Select type of beds...</option>
            <option value="king">King</option>
            <option value="queen">Queen</option>
            <option value="standard">Twin</option>
          </select>
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary mt-3" style={{ backgroundColor: '#555', color: '#fff', border: 'none' }}>
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddHotelRoom;
