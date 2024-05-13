import React, { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

const AllUsers = () => {
  const [filterRole, setFilterRole] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({});
  // Hardcoded user data for demonstration
  const users = [
    { id: 1, email: 'user1@example.com', firstName: 'John', lastName: 'Doe', role: 'Admin' },
    { id: 2, email: 'user2@example.com', firstName: 'Jane', lastName: 'Doe', role: 'Creator' },
    { id: 3, email: 'user3@example.com', firstName: 'Alice', lastName: 'Smith', role: 'Student' },
    { id: 4, email: 'user4@example.com', firstName: 'Bob', lastName: 'Johnson', role: 'Admin' },
    { id: 5, email: 'user5@example.com', firstName: 'Emily', lastName: 'Jones', role: 'Creator' },
    { id: 6, email: 'user6@example.com', firstName: 'David', lastName: 'Brown', role: 'Student' },
    { id: 7, email: 'user7@example.com', firstName: 'Sarah', lastName: 'Davis', role: 'Admin' },
    { id: 8, email: 'user8@example.com', firstName: 'Michael', lastName: 'Martinez', role: 'Creator' },
    { id: 9, email: 'user9@example.com', firstName: 'Michelle', lastName: 'Garcia', role: 'Student' },
    { id: 10, email: 'user10@example.com', firstName: 'Daniel', lastName: 'Rodriguez', role: 'Admin' },
    { id: 11, email: 'user11@example.com', firstName: 'Sophia', lastName: 'Wilson', role: 'Creator' },
    { id: 12, email: 'user12@example.com', firstName: 'Matthew', lastName: 'Taylor', role: 'Student' },
    { id: 13, email: 'user13@example.com', firstName: 'Olivia', lastName: 'Anderson', role: 'Admin' },
    { id: 14, email: 'user14@example.com', firstName: 'Ethan', lastName: 'Thomas', role: 'Creator' },
    { id: 15, email: 'user15@example.com', firstName: 'Ava', lastName: 'Jackson', role: 'Student' },
    { id: 16, email: 'user16@example.com', firstName: 'William', lastName: 'White', role: 'Admin' },
    { id: 17, email: 'user17@example.com', firstName: 'Isabella', lastName: 'Harris', role: 'Creator' },
    { id: 18, email: 'user18@example.com', firstName: 'James', lastName: 'Clark', role: 'Student' },
    { id: 19, email: 'user19@example.com', firstName: 'Mia', lastName: 'Lewis', role: 'Admin' },
    { id: 20, email: 'user20@example.com', firstName: 'Benjamin', lastName: 'Walker', role: 'Creator' },
  ];
  
  // Function to handle role filter
  const handleFilter = (role) => {
    setFilterRole(role);
  };

  // Filter users based on selected role
  const filteredUsers = filterRole ? users.filter(user => user.role === filterRole) : users;

  // Function to handle edit user
  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setEditedUser({ ...user });
  };

  // Function to handle delete user
  const handleDelete = (userId) => {
    // Perform delete operation
    console.log(`Deleting user with id ${userId}`);
  };

  // Function to handle save after editing
  const handleSaveEdit = () => {
    // Perform save operation with editedUser data
    console.log(`Saving edited user with id ${editedUser.id}`);
    setEditingUserId(null);
    setEditedUser({});
  };

  return (
    <div className="container mt-10 mx-auto">
      {/* Role filter buttons */}
      <div className="mb-4">
        <button onClick={() => handleFilter('Admin')} className="mr-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">Admin</button>
        <button onClick={() => handleFilter('Creator')} className="mr-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none">Creator</button>
        <button onClick={() => handleFilter('Student')} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none">Student</button>
      </div>

      {/* User table */}
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">First Name</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 bg-gray-50"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-no-wrap">{editingUserId === user.id ? <input type="text" value={editedUser.email} onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })} /> : user.email}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{editingUserId === user.id ? <input type="text" value={editedUser.firstName} onChange={(e) => setEditedUser({ ...editedUser, firstName: e.target.value })} /> : user.firstName}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{editingUserId === user.id ? <input type="text" value={editedUser.lastName} onChange={(e) => setEditedUser({ ...editedUser, lastName: e.target.value })} /> : user.lastName}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{editingUserId === user.id ? <input type="text" value={editedUser.role} onChange={(e) => setEditedUser({ ...editedUser, role: e.target.value })} /> : user.role}</td>
              <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                {editingUserId === user.id ? (
                  <>
                    <button className="mr-2 text-blue-500 hover:text-blue-700 focus:outline-none" onClick={handleSaveEdit}>Save</button>
                    <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={() => setEditingUserId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="mr-2 text-blue-500 hover:text-blue-700 focus:outline-none" onClick={() => handleEdit(user)}><MdEdit /></button>
                    <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={() => handleDelete(user.id)}><MdDelete /></button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;