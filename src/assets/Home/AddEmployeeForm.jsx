import React, { useState } from 'react';
import axios from 'axios';

const AddEmployeeForm = ({ hotels, fetchHotels, setError }) => {
  const [selectedHotelId, setSelectedHotelId] = useState('');
  const [employeeType, setEmployeeType] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');

  // Function to handle form submit for adding an employee
  const handleAddEmployee = async (e) => {
    e.preventDefault();
    if (!selectedHotelId || !employeeType || !employeeName || !age || !sex) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/hoteldatabase/employees/add', {
        hotelId: selectedHotelId,
        employeeType,
        employeeDetails: {
          name: employeeName,
          age: Number(age),
          sex,
        },
      });
      setEmployeeType('');
      setEmployeeName('');
      setAge('');
      setSex('');
      fetchHotels(); // Refresh hotel list after adding new employee
    } catch (error) {
      setError('Error adding employee');
    }
  };

  return (
    <div className="card p-4 mb-4" style={{ backgroundColor: '#6C757D', color: '#FFFFFF' }}>
      <h2>Add an Employee to a Hotel</h2>
      <form onSubmit={handleAddEmployee}>
        <div className="form-group">
          <label htmlFor="selectedHotelId">Select Hotel:</label>
          <select
            className="form-control"
            id="selectedHotelId"
            value={selectedHotelId}
            onChange={(e) => setSelectedHotelId(e.target.value)}
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
          <label htmlFor="employeeType">Select Employee Type:</label>
          <select
            className="form-control"
            id="employeeType"
            value={employeeType}
            onChange={(e) => setEmployeeType(e.target.value)}
          >
            <option value="">Select employee type...</option>
            <option value="manager">Manager</option>
            <option value="housekeeper">Housekeeper</option>
            <option value="master">Master</option>
            <option value="restaurant">Restaurant</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="employeeName">Employee Name:</label>
          <input
            type="text"
            className="form-control"
            id="employeeName"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sex">Sex:</label>
          <select
            className="form-control"
            id="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="">Select sex...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
