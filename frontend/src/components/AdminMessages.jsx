import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminMessageList = () => {
  const url = "http://localhost:8000/admin/messages";
  const [messages, setMessages] = useState([]);
  const [replyData, setReplyData] = useState({ reply: "" });
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    fetchMessages();
  }, [token]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleInputChange = (e) => {
    setReplyData({ ...replyData, [e.target.name]: e.target.value });
  };

  const replyToMessage = async (id) => {
    try {
      const response = await axios.put(`${url}/${id}/reply`, replyData, {
        headers: { Authorization: `Bearer ${token} ` },
      });
      setMessages(
        messages.map((message) => (message.id === id ? response.data : message))
      );
      setReplyData({ reply: "" });
      setSelectedMessageId(null);
    } catch (error) {
      console.error("Error replying to message:", error);
    }
  };

  return (
    <div>
      <h1>Admin Message Management</h1>

      <h2>Received Maintenance Requests</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id} className="p-4 mb-4 border rounded">
            <h3>
              {message.content} (Urgency: {message.urgency})
            </h3>
            {message.reply && (
              <p>
                <strong>Admin Reply:</strong> {message.reply}
              </p>
            )}
            <button
              onClick={() => {
                setSelectedMessageId(message.id);
              }}
              className="bg-yellow-500 text-white p-2 rounded mr-2"
            >
              Reply
            </button>
            {selectedMessageId === message.id && (
              <div>
                <textarea
                  name="reply"
                  value={replyData.reply}
                  onChange={handleInputChange}
                  placeholder="Enter your reply"
                  className="border p-2 w-full rounded-md mt-2"
                  required
                />
                <button
                  onClick={() => replyToMessage(message.id)}
                  className="bg-blue-500 text-white p-2 rounded mt-2"
                >
                  Send Reply
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminMessageList;
