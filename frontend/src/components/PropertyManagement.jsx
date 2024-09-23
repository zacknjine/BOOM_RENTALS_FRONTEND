import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyManagement = () => {
  const url = 'http://localhost:8000/admin/properties/';
  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    number_of_houses: 1,
    description: ''
  });

  // Fetch all properties on component mount
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    const token = localStorage.getItem('token'); // Get the token from localStorage
    try {
      const response = await axios.get(url, {
        headers: { Authorization:` Bearer ${token}` }
      });
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addProperty = async () => {
    const token = localStorage.getItem('token'); // Get the token from localStorage
    try {
      const response = await axios.post(url, formData, {
        headers: { Authorization: `Bearer ${token} `}
      });
      setProperties([...properties, response.data]);
      setFormData({
        name: '',
        location: '',
        number_of_houses: 1,
        description: ''
      });
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProperty();
  };

  return (
    <div>
      <h1>Property Management</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Property Name"
          required
          className="border p-2 w-full rounded-md"
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="Location"
          required
          className="border p-2 w-full mt-2 rounded-md"
        />
        <p> number of houses</p>
        <input
          type="number"
          name="number_of_houses"
          value={formData.number_of_houses}
          onChange={handleInputChange}
          min="1"
          required
          className="border p-2 w-full mt-2 rounded-md"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description"
          required
          className="border p-2 w-full mt-2 rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
          Add Property
        </button>
      </form>

      <h2>Existing Properties</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id} className="p-4 mb-4 border rounded">
            <h3>{property.name} ({property.location})</h3>
            <p>Number of Houses: {property.number_of_houses}</p>
            <p>Description: {property.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyManagement;