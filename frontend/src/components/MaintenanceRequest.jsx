import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MaintenanceRequestList = () => {
  const url = 'http://localhost:8000/messages';  // Update this URL if necessary
  const [requests, setRequests] = useState([]);
  const [formData, setFormData] = useState({ content: '', urgency: 'low' });
  const [token, setToken] = useState(localStorage.getItem('token') || ''); // Get token from localStorage

  // Fetch all maintenance requests on component mount
  useEffect(() => {
    fetchRequests();
  }, [token]);

  const fetchRequests = async () => {
    try {
      const response = await axios.get(url, {
        headers: { Authorization: Bearer ${token} }
      });
      setRequests(response.data);
    } catch (error) {
      console.error('Error fetching maintenance requests:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createRequest = async () => {
    try {
      const response = await axios.post(url, formData, {
        headers: { Authorization: Bearer ${token} }
      });
      setRequests([...requests, response.data]);
      setFormData({ content: '', urgency: 'low' });
    } catch (error) {
      console.error('Error creating maintenance request:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createRequest();
  };

  return (
    <div>
      <h1>Maintenance Request Management</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          placeholder="Enter the description"
          className="border p-2 w-full rounded-md"
          required
        />
        <select
          name="urgency"
          value={formData.urgency}
          onChange={handleInputChange}
          className="border p-2 w-full mt-2 rounded-md"
          required
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
          Create Request
        </button>
      </form>

      <h2>Your Maintenance Requests</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id} className="p-4 mb-4 border rounded">
            <h3>{request.content} (Urgency: {request.urgency})</h3>
            {request.reply && <p><strong>Admin Reply:</strong> {request.reply}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaintenanceRequestList;