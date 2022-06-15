import { RouterPathTypes } from "constants/RouterPathTypes";
import { useAuth } from "context/getAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";


function ProtectedRoute() {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to={RouterPathTypes.home} replace state={{ from: location }} />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
