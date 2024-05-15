import React, { useState, useEffect } from "react";
import axios from "axios";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  // Get all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:7073/api/userManagement/getAll", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Remove user by ID
  const removeUser = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:7073/api/userManagement/remove/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log(response.data);
      // Update users state after deletion
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  return (
    <div className="container mt-10 mx-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">userID</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">First Name</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 bg-gray-50"></th> {/* Empty header for delete button */}
            <th className="px-6 py-3 bg-gray-50"></th> {/* Empty header for edit button */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user._id}>
              <td className="px-6 py-4 whitespace-no-wrap">{user._id}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{user.firstName}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{user.lastName}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{user.role}</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <button
                  onClick={() => removeUser(user._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <button
                  // Add onClick handler for edit functionality
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
