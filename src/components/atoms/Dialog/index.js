import { Dialog } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import ButtonForm from "../Buttons/ButtonForm";

export const DialogWindow = ({ textContent }) => {
  return (
    <Dialog open={true} onClose={true}>
      <DialogContent>
        <DialogContentText>{textContent}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonForm onClick={true}>Tak</ButtonForm>
        <ButtonForm onClick={true} autoFocus>
          Anuluj
        </ButtonForm>
      </DialogActions>
    </Dialog>
  );
};
