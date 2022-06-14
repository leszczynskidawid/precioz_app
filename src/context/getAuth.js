import {
  useLocation,
  useNavigate,
} from "react-router-dom";

const {
  createContext,
  useState,
  useContext,
} = require("react");

const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(
      () => resolve("2342f2f1d131rf12"),
      2500,
    );
  });

const authContext = createContext(null);

function ProviderAuthContext({ children }) {
  const [token, setToken] = useState(null);
  const [isAlertOpen, setIsAlertOpen] =
    useState(false);
  const [alertText, setAlertText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const login = async () => {
    const token = await fakeAuth();
    setToken(token);
    const origin =
      location.state?.from?.pathname ||
      "/dashboard";
    navigate(origin);
  };

  const logout = () => {
    setToken(null);
  };

  const toggleAlert = async (text) => {
    setIsAlertOpen(true);
    setAlertText(text);
    setTimeout(() => {
      setIsAlertOpen(false);
      setAlertText("");
    }, 2000);
  };

  const value = {
    login,
    logout,
    token,
    alertText,
    isAlertOpen,
    toggleAlert,
  };

  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  );
}
export const useAuth = () => {
  return useContext(authContext);
};

export default ProviderAuthContext;
