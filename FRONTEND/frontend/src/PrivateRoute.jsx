import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = true; // Simulated authentication check
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
