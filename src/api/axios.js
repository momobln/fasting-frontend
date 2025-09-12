import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5005';
export const api = axios.create({ baseURL });
// set once from context
export function setAuthToken(token) {
  if (token) api.defaults.headers.common.Authorization = `Bearer ${token}`;
  else delete api.defaults.headers.common.Authorization;
}

// always attach latest token
api.interceptors.request.use((cfg) => {
  const t = localStorage.getItem('token');
  if (t) cfg.headers.Authorization = `Bearer ${t}`;
  return cfg;
});
// auto logout on 401
api.interceptors.response.use(
  r => r,
  err => {
    if (err?.response?.status === 401) {
      localStorage.removeItem('token');
      // hard redirect keeps it simple
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);