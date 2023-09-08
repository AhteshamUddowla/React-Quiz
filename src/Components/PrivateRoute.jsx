import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

function PrivateRoute({ element: Element }) {
  const { currentUser } = useAuth();

  return currentUser ? Element : <Navigate to="/login" />;
}

export default PrivateRoute;
