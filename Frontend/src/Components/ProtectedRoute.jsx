import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("token");
  
  if (!isLoggedIn) {
    // Redirect to home if not logged in
    return <Navigate to="/" replace />;
  }

  // If logged in, show the protected page
  return children;
};

export default ProtectedRoute;