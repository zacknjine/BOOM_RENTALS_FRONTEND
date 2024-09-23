import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminMaintenanceManagement = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/admin/maintenance")
      .then(response => setRequests(response.data))
      .catch(error => console.error(error));
  }, []);

  const updateRequestStatus = (id, status) => {
    axios.put(`http://localhost:8000/admin/maintenance/${id}, { status }`)
      .then(() => {
        setRequests(requests.map(req => req.id === id ? { ...req, status } : req));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Manage Maintenance Requests</h2>
      {requests.map(request => (
        <div key={request.id} className="border p-2 rounded mb-2">
          <p>Description: {request.description}</p>
          <p>Urgency: {request.urgency}</p>
          <p>Status: {request.status}</p>
          <div className="mt-2">
            <button
              onClick={() => updateRequestStatus(request.id, 'In Progress')}
              className="bg-yellow-500 text-white p-2 rounded mr-2"
            >
              Mark as In Progress
            </button>
            <button
              onClick={() => updateRequestStatus(request.id, 'Completed')}
              className="bg-green-500 text-white p-2 rounded"
            >
              Mark as Completed
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminMaintenanceManagement;