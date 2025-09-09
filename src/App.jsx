import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Sessions from './pages/Sessions';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Goals from './pages/Goals';
<Route path="/goals" element={<ProtectedRoute><Goals/></ProtectedRoute>} />


const qc = new QueryClient();

export default function App(){
  return (
    <QueryClientProvider client={qc}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
            <Route path="/sessions" element={<ProtectedRoute><Sessions/></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}
