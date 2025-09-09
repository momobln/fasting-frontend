import { createContext, useState } from 'react';
import { api } from '../api/axios';

export const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));

  async function signup(email, password) {
    const { data } = await api.post('/auth/signup', { email, password });
    localStorage.setItem('token', data.token);
    setToken(data.token);
  }

  async function login(email, password) {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    setToken(data.token);
  }

  function logout() {
    localStorage.removeItem('token');
    setToken(null);
  }

  return (
    <AuthCtx.Provider value={{ token, login, signup, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}
