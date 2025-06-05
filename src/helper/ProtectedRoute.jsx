import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const admin = JSON.parse(localStorage.getItem('admin'));
  const token = localStorage.getItem('token');

  if (!admin || !token) {
    return <Navigate to="/admin/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(admin.role)) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default ProtectedRoute;
