import { AlertTypes } from "constants/AlertTypes";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useAuth } from "context/getAuth";

export const Alert = ({ variant = AlertTypes.error, open }) => {
  const { alertText } = useAuth();

  return (
    <Snackbar open={open}>
      <MuiAlert severity={variant}>{alertText}</MuiAlert>
    </Snackbar>
  );
};
