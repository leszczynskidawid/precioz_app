import { AlertTypes } from "constants/AlertTypes";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useAuth } from "context/getAuth";

export const Alert = ({
  variant = AlertTypes.error,
}) => {
  const { isAlertOpen, alertText } = useAuth();

  return (
    <Snackbar open={isAlertOpen}>
      <MuiAlert severity={variant}>
        {alertText}
      </MuiAlert>
    </Snackbar>
  );
};
