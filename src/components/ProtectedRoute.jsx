import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import PropTypes from 'prop-types';

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
