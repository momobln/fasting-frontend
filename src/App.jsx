import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Sessions from './pages/Sessions';
import Goals from './pages/Goals';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sessions"
        element={
          <ProtectedRoute>
            <Sessions />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/goals"                          
        element={
          <ProtectedRoute>
            <Goals />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}
