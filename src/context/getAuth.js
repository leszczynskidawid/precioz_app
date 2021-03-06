import { AlertTypes } from "constants/AlertTypes";
import { useLocation, useNavigate } from "react-router-dom";

const { createContext, useState, useContext } = require("react");

const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("2342f2f1d131rf12"), 2500);
  });

const authContext = createContext(null);

function ProviderAuthContext({ children }) {
  const [token, setToken] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertText, setAlertText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpenAndType, setIsModalOpenandType] = useState({
    open: false,
    type: AlertTypes.success,
  });

  const login = async () => {
    const token = await fakeAuth();
    setToken(token);
    const origin = location.state?.from?.pathname || "/dashboard";
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

  const handleModalOpen = (type) => {
    setIsModalOpenandType({ open: true, type });
  };

  const handleModalClose = () => {
    setIsModalOpenandType(false);
  };

  const value = {
    login,
    logout,
    token,
    alertText,
    isAlertOpen,
    toggleAlert,
    handleModalClose,
    handleModalOpen,
    isModalOpenAndType,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
export const useAuth = () => {
  return useContext(authContext);
};

export default ProviderAuthContext;
