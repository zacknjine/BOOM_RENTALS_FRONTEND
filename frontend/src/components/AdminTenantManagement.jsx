import React, { useState, useEffect } from 'react';

const AdminTenantManagement = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('tenant'); // Default role
  const [users, setUsers] = useState([]);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [userIdToUpdate, setUserIdToUpdate] = useState(null);
  const [updatedUsername, setUpdatedUsername] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedRole, setUpdatedRole] = useState('tenant'); // Added for updating role

  const token = localStorage.getItem('token'); // Assuming you store JWT in local storage

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8000/admin/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error('Failed to fetch users');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleRegisterUser = async () => {
    try {
      const response = await fetch('http://localhost:8000/admin/register-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username, email, password, role }),
      });

      if (response.ok) {
        alert('User registered successfully');
        fetchUsers(); // Refresh user list
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(`http://localhost:8000/admin/delete-user/${userIdToDelete}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        alert('User deleted successfully');
        fetchUsers(); // Refresh user list
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleUpdateUser = async () => {
    try {
      const response = await fetch(`http://localhost:8000/admin/update-user/${userIdToUpdate}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: updatedUsername,
          email: updatedEmail,
          password: '', // Leave blank if not updating
          role: updatedRole || '', // Include selected role or leave blank
        }),
      });

      if (response.ok) {
        alert('User updated successfully');
        fetchUsers(); // Refresh user list
      } else {
        console.error('Failed to update user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Tenant Management</h1>

      {/* Register User Form */}
      <div>
        <h2 className="text-xl mb-2">Register User</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-2"
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-2 mb-2">
          <option value="tenant">Tenant</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleRegisterUser} className="bg-blue-500 text-white p-2">
          Register User
        </button>
      </div>

      {/* List Users */}
      <div className="mt-6">
        <h2 className="text-xl mb-2">Users List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="flex justify-between items-center border-b py-2">
              {user.username} ({user.email}) - Role: {user.role}
              <div>
                <button
                  onClick={() => {
                    setUserIdToDelete(user.id);
                    handleDeleteUser();
                  }}
                  className="bg-red-500 text-white p-2 mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setUserIdToUpdate(user.id);
                    setUpdatedUsername(user.username);
                    setUpdatedEmail(user.email);
                    setUpdatedRole(user.role); // Set current role for updating
                  }}
                  className="bg-green-500 text-white p-2"
                >
                  Update
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Update User Form */}
      {userIdToUpdate !== null && (
        <div className="mt-6">
          <h2 className="text-xl mb-2">Update User</h2>
          <input
            type="text"
            placeholder="Username"
            value={updatedUsername}
            onChange={(e) => setUpdatedUsername(e.target.value)}
            className="border p-2 mb-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
            className="border p-2 mb-2"
          />
          <select value={updatedRole} onChange={(e) => setUpdatedRole(e.target.value)} className="border p-2 mb-2">
            <option value="tenant">Tenant</option>
            <option value="admin">Admin</option>
          </select>
          <button onClick={handleUpdateUser} className="bg-green-500 text-white p-2">
            Update User
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminTenantManagement;