import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewEmployees = () => {
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState('');
  const [employees, setEmployees] = useState({
    managers: [],
    housekeepers: [],
    masters: [],
    restaurant: [],
  });
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

  const fetchEmployees = async () => {
    if (!selectedHotelId) {
      setError('Please select a hotel');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/hoteldatabase/employees/${selectedHotelId}`, {
        params: { hotelId: selectedHotelId },
      });
      setEmployees(response.data);
      setError('');
    } catch (error) {
      setError('Error fetching employees');
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#333', color: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>View Employees</h2>
      <div className="form-group" style={{ textAlign: 'center' }}>
        <label htmlFor="selectedHotel">Select Hotel:</label>
        <select
          className="form-control"
          id="selectedHotel"
          value={selectedHotelId}
          onChange={(e) => setSelectedHotelId(e.target.value)}
          style={{ backgroundColor: '#444', color: '#fff', display: 'inline-block', margin: '10px' }}
        >
          <option value="">Select a hotel...</option>
          {hotels.map((hotel) => (
            <option key={hotel.hotelId} value={hotel.hotelId}>
              {hotel.hotelName}
            </option>
          ))}
        </select>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={fetchEmployees} className="btn btn-primary mt-3">
          View Employees
        </button>
      </div>

      {error && <p className="text-danger" style={{ textAlign: 'center' }}>{error}</p>}

      <div style={{ marginTop: '20px' }}>
        {employees && (
          <div>
            <h3 style={{ textAlign: 'center' }}>Managers</h3>
            <table className="table table-dark" style={{ margin: 'auto', border: '1px solid white' }}>
              <thead>
                <tr>
                  <th style={{ padding: '10px', border: '1px solid white' }}>Name</th>
                  <th style={{ padding: '10px', border: '1px solid white' }}>User ID</th>
                  <th style={{ padding: '10px', border: '1px solid white' }}>Password</th>
                </tr>
              </thead>
              <tbody>
                {employees.managers.map((manager) => (
                  <tr key={manager.user_id}>
                    <td style={{ padding: '10px', border: '1px solid white' }}>{manager.name}</td>
                    <td style={{ padding: '10px', border: '1px solid white' }}>{manager.user_id}</td>
                    <td style={{ padding: '10px', border: '1px solid white' }}>{manager.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ textAlign: 'center' }}>Housekeepers</h3>
            <table className="table table-dark" style={{ margin: 'auto', border: '1px solid white' }}>
              <thead>
                <tr>
                  <th style={{ padding: '10px', border: '1px solid white' }}>Name</th>
                  <th style={{ padding: '10px', border: '1px solid white' }}>User ID</th>
                  <th style={{ padding: '10px', border: '1px solid white' }}>Password</th>
                </tr>
              </thead>
              <tbody>
                {employees.housekeepers.map((housekeeper) => (
                  <tr key={housekeeper.user_id}>
                    <td style={{ padding: '10px', border: '1px solid white' }}>{housekeeper.name}</td>
                    <td style={{ padding: '10px', border: '1px solid white' }}>{housekeeper.user_id}</td>
                    <td style={{ padding: '10px', border: '1px solid white' }}>{housekeeper.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ textAlign: 'center' }}>Masters</h3>
            <table className="table table-dark" style={{ margin: 'auto', border: '1px solid white' }}>
              <thead>
                <tr>
                  <th style={{ padding: '10px', border: '1px solid white' }}>Name</th>
                  <th style={{ padding: '10px', border: '1px solid white' }}>User ID</th>
                  <th style={{ padding: '10px', border: '1px solid white' }}>Password</th>
                </tr>
              </thead>
              <tbody>
                {employees.masters.map((master) => (
                  <tr key={master.user_id}>
                    <td style={{ padding: '10px', border: '1px solid white' }}>{master.name}</td>
                    <td style={{ padding: '10px', border: '1px solid white' }}>{master.user_id}</td>
                    <td style={{ padding: '10px', border: '1px solid white' }}>{master.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ textAlign: 'center' }}>Restaurant</h3>
            <table className="table table-dark" style={{ margin: 'auto', border: '1px solid white' }}>
              <thead>
                <tr>
                  <th style={{ padding: '10px', border: '1px solid white' }}>Name</th>
                  <th style={{ padding: '10px', border: '1px solid white' }}>User ID</th>
                  <th style={{ padding: '10px', border: '1px solid white' }}>Password</th>
                </tr>
              </thead>
              <tbody>
                {employees.restaurant.map((restaurant) => (
                  <tr key={restaurant.user_id}>
                    <td style={{ padding: '10px', border: '1px solid white' }}>{restaurant.name}</td>
                    <td style={{ padding: '10px', border: '1px solid white' }}>{restaurant.user_id}</td>
                    <td style={{ padding: '10px', border: '1px solid white' }}>{restaurant.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewEmployees;
