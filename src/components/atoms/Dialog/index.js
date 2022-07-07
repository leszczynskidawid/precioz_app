import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import ButtonForm from "../Buttons/ButtonForm";

export const DialogWindow = ({
  open,
  title,
  message,
  onConfirm,
  onDismiss,
}) => {
  return (
    <Dialog open={open} onClose={onDismiss}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonForm name="confirm" onClick={onConfirm}>
          Tak
        </ButtonForm>
        <ButtonForm name="anuluj" onClick={onDismiss} autoFocus>
          Anuluj
        </ButtonForm>
      </DialogActions>
    </Dialog>
  );
};
