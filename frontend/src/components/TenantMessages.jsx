// frontend/src/components/TenantMessages.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TenantMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/tenant/messages") // Adjust the API endpoint as needed
      .then(response => setMessages(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Messages</h2>
      <ul>
        {messages.map(message => (
          <li key={message.id} className="border p-2 rounded mb-2">
            <p><strong>From:</strong> {message.sender}</p>
            <p>{message.content}</p>
            <p><small>{new Date(message.timestamp).toLocaleString()}</small></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TenantMessages;