import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddHousekeepingService = () => {
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [altText, setAltText] = useState('');
  const [error, setError] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get('http://localhost:3000/hoteldatabase/get');
      setHotels(response.data);
    } catch (error) {
      setError('Error fetching hotels');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedHotelId || !serviceName || !price || !image) {
      setError('Please fill in all required fields');
      return;
    }

    const formData = new FormData();
    formData.append('hotelId', selectedHotelId);
    formData.append('serviceName', serviceName);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);
    formData.append('altText', altText);
    console.log(formData);
    try {
      await axios.post('http://localhost:3000/hoteldatabase/housekeeping-services/add',{
        params : {hotelId : selectedHotelId}
      }, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    //   navigate('/'); // Redirect to another page if needed
    } catch (error) {
      setError('Error adding housekeeping service');
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeStyles = {
    backgroundColor: isDarkTheme ? '#121212' : '#FFFFFF',
    color: isDarkTheme ? '#FFFFFF' : '#000000',
    inputBackgroundColor: isDarkTheme ? '#2C2C2C' : '#F0F0F0',
    inputColor: isDarkTheme ? '#FFFFFF' : '#000000',
    cardBackgroundColor: isDarkTheme ? '#1F1F1F' : '#F8F8F8',
    buttonBackgroundColor: isDarkTheme ? '#1F1F1F' : '#FFFFFF',
    buttonTextColor: isDarkTheme ? '#FFFFFF' : '#000000',
  };

  return (
    <div className="container" style={{ backgroundColor: themeStyles.backgroundColor, color: themeStyles.color, padding: '20px', borderRadius: '8px' }}>
      <h2>Add Housekeeping Service</h2>
      <button onClick={toggleTheme} style={{ marginBottom: '20px', backgroundColor: themeStyles.buttonBackgroundColor, color: themeStyles.buttonTextColor, padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
        Toggle Theme
      </button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Hotel</label>
          <select
            className="form-control"
            value={selectedHotelId}
            onChange={(e) => setSelectedHotelId(e.target.value)}
            style={{ backgroundColor: themeStyles.inputBackgroundColor, color: themeStyles.inputColor, border: 'none', borderRadius: '4px', padding: '10px' }}
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
          <label>Service Name</label>
          <input
            type="text"
            className="form-control"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            style={{ backgroundColor: themeStyles.inputBackgroundColor, color: themeStyles.inputColor, border: 'none', borderRadius: '4px', padding: '10px' }}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ backgroundColor: themeStyles.inputBackgroundColor, color: themeStyles.inputColor, border: 'none', borderRadius: '4px', padding: '10px' }}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ backgroundColor: themeStyles.inputBackgroundColor, color: themeStyles.inputColor, border: 'none', borderRadius: '4px', padding: '10px' }}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
            style={{ backgroundColor: themeStyles.inputBackgroundColor, color: themeStyles.inputColor, border: 'none', borderRadius: '4px', padding: '10px' }}
          />
        </div>
        <div className="form-group">
          <label>Alt Text</label>
          <input
            type="text"
            className="form-control"
            value={altText}
            onChange={(e) => setAltText(e.target.value)}
            style={{ backgroundColor: themeStyles.inputBackgroundColor, color: themeStyles.inputColor, border: 'none', borderRadius: '4px', padding: '10px' }}
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: themeStyles.buttonBackgroundColor, color: themeStyles.buttonTextColor, border: 'none' }}>Add Service</button>
      </form>
    </div>
  );
};

export default AddHousekeepingService;
