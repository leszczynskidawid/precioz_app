import { useAuth } from "context/getAuth";
import { Navigate,useLocation } from "react-router-dom";

function ProtectedRoute({children}) {

    const {token} = useAuth(); 
    const location = useLocation();
    
    if(!token )
    {
        return (
            <Navigate to ="/" replace state={{from:location}}/>
        )
        
    }
    return children; 
}
    

export default ProtectedRoute;