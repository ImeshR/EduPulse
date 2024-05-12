import React, { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setUserData = (userData) => {
    setUser(userData);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      // Decode the token to get user data
      const decoded = jwt_decode(token);
      // Set user data to state
      setUser(decoded);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
