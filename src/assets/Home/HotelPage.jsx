import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HotelPage = () => {
  const navigate = useNavigate();
  const [hotelName, setHotelName] = useState('');
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState('');
  const [employeeType, setEmployeeType] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [error, setError] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(true);

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

  const handleAddHotel = async (e) => {
    e.preventDefault();
    if (!hotelName) {
      setError('Please enter a hotel name');
      return;
    }

    try {
      await axios.post('http://localhost:5000/hoteldatabase/add', { hotelName });
      setHotelName('');
      fetchHotels();
    } catch (error) {
      setError('Error adding hotel');
    }
  };

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    if (!selectedHotelId || !employeeType || !employeeName || !age || !sex) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await axios.post('http://localhost:5000/hoteldatabase/employees/add', {
        hotelId: selectedHotelId,
        employeeType,
        employeeDetails: {
          name: employeeName,
          age: Number(age),
          sex,
          password: "sample",
        },
      });
      setEmployeeType('');
      setEmployeeName('');
      setAge('');
      setSex('');
      fetchHotels();
    } catch (error) {
      setError('Error adding employee');
    }
  };

  const generateLinks = () => {
    if (!selectedHotelId) {
      return [];
    }

    return [
      `http://localhost:5173/manager/login?hotelId=${selectedHotelId}`,
      `http://localhost:5173/master/login?hotelId=${selectedHotelId}`,
      `http://localhost:5173/housekeeper/login?hotelId=${selectedHotelId}`,
      `http://localhost:5173/restaurant/login?hotelId=${selectedHotelId}`,
    ];
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

  const redirectToViewEmployees = () => {
    navigate('/view-employees');
  };

  const redirectToAddRooms = () => {
    navigate('/add-rooms');
  };
  
  const redirectToAddHousekeeping = () => {
    navigate('/add-housekeeping');
  };


  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: themeStyles.backgroundColor, color: themeStyles.color }}>
      <h1 className="my-4 text-center text-uppercase">ROOMER</h1>
      <button onClick={toggleTheme} style={{ marginBottom: '20px', backgroundColor: themeStyles.buttonBackgroundColor, color: themeStyles.buttonTextColor, padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
        Toggle Theme
      </button>

      <button onClick={redirectToViewEmployees} className="btn btn-secondary mt-3" style={{ marginBottom: '20px' }}>
        View Employees
      </button>

      <button onClick={redirectToAddRooms} className="btn btn-secondary mt-3" style={{ marginBottom: '20px' }}>
        Add Room
      </button>

      <button onClick={redirectToAddHousekeeping} className="btn btn-secondary mt-3" style={{ marginBottom: '20px' }}>
        Add Housekeeping
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', maxWidth: '1200px' }}>
        <div className="card p-4 mb-4" style={{ backgroundColor: themeStyles.cardBackgroundColor, color: themeStyles.color, width: '100%', maxWidth: '600px' }}>
          <h2>Add a New Hotel</h2>
          <form onSubmit={handleAddHotel}>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="hotelName">Hotel Name:</label>
              <input
                type="text"
                className="form-control"
                id="hotelName"
                value={hotelName}
                onChange={(e) => setHotelName(e.target.value)}
                style={{ backgroundColor: themeStyles.inputBackgroundColor, color: themeStyles.inputColor, border: 'none', borderRadius: '4px', padding: '10px' }}
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-primary mt-3" style={{ backgroundColor: themeStyles.buttonBackgroundColor, color: themeStyles.buttonTextColor, border: 'none' }}>
              Add Hotel
            </button>
          </form>
        </div>

        <div className="card p-4 mb-4" style={{ backgroundColor: themeStyles.cardBackgroundColor, color: themeStyles.color, width: '100%', maxWidth: '600px' }}>
          <h2>Add an Employee to a Hotel</h2>
          <form onSubmit={handleAddEmployee}>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="selectedHotelId">Select Hotel:</label>
              <select
                className="form-control"
                id="selectedHotelId"
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
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="employeeType">Select Employee Type:</label>
              <select
                className="form-control"
                id="employeeType"
                value={employeeType}
                onChange={(e) => setEmployeeType(e.target.value)}
                style={{ backgroundColor: themeStyles.inputBackgroundColor, color: themeStyles.inputColor, border: 'none', borderRadius: '4px', padding: '10px' }}
              >
                <option value="">Select employee type...</option>
                <option value="manager">Manager</option>
                <option value="housekeeper">Housekeeper</option>
                <option value="master">Master</option>
                <option value="restaurant">Restaurant</option>
              </select>
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="employeeName">Employee Name:</label>
              <input
                type="text"
                className="form-control"
                id="employeeName"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                style={{ backgroundColor: themeStyles.inputBackgroundColor, color: themeStyles.inputColor, border: 'none', borderRadius: '4px', padding: '10px' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                className="form-control"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                style={{ backgroundColor: themeStyles.inputBackgroundColor, color: themeStyles.inputColor, border: 'none', borderRadius: '4px', padding: '10px' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="sex">Sex:</label>
              <select
                className="form-control"
                id="sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                style={{ backgroundColor: themeStyles.inputBackgroundColor, color: themeStyles.inputColor, border: 'none', borderRadius: '4px', padding: '10px' }}
              >
                <option value="">Select sex...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-primary mt-3" style={{ backgroundColor: themeStyles.buttonBackgroundColor, color: themeStyles.buttonTextColor, border: 'none' }}>
              Add Employee
            </button>
          </form>
        </div>
      </div>

      {selectedHotelId && (
        <div className="card p-4 mb-4" style={{ backgroundColor: themeStyles.cardBackgroundColor, color: themeStyles.color, width: '100%', maxWidth: '600px' }}>
          <h2>Generated Links</h2>
          <ul>
            {generateLinks().map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#FFD700' }}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="card p-4" style={{ backgroundColor: themeStyles.cardBackgroundColor, color: themeStyles.color, width: '100%', maxWidth: '600px' }}>
        <h2>List of Hotels</h2>
        <ul className="list-group">
          {hotels.map((hotel) => (
            <li key={hotel.hotelId} className="list-group-item" style={{ backgroundColor: themeStyles.inputBackgroundColor, color: themeStyles.inputColor, borderRadius: '4px', padding: '10px' }}>
              {hotel.hotelName}
            </li>
          ))}
        </ul>
        {hotels.length === 0 && <p>No hotels found</p>}
      </div>
    </div>
  );
};

export default HotelPage;
