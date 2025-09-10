import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { setAuthToken, api } from '../api/axios';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');

  useEffect(() => {
    setAuthToken(token);
    if (token) localStorage.setItem('token', token);
    else localStorage.removeItem('token');
  }, [token]);

  const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password });
    setToken(data.token);
  };

  const signup = async (email, password) => {
    const { data } = await api.post('/auth/signup', { email, password });
    setToken(data.token);
  };

  const logout = () => setToken('');

  return (
    <AuthContext.Provider value={{ token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
