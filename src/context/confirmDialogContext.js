import { DialogWindow } from "components/atoms/Dialog";
import { createContext, useState } from "react";

export const confirmDialogContext = createContext({});

const ConfirmationDialogProvider = ({ children }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogConfig, setDialogConfig] = useState([]);

  const openDialog = ({ message, title, actionCallback }) => {
    setDialogOpen(true);
    setDialogConfig({ message, title, actionCallback });
  };
  const resetDialog = () => {
    setDialogOpen(false);
    setDialogConfig([]);
  };

  const onConfirm = () => {
    resetDialog();
    dialogConfig.actionCallback(true);
  };

  const onDismiss = () => {
    resetDialog();
    dialogConfig.actionCallback(false);
  };

  return (
    <confirmDialogContext.Provider value={{ openDialog }}>
      <DialogWindow
        open={dialogOpen}
        title={dialogConfig.title}
        message={dialogConfig.message}
        onConfirm={onConfirm}
        onDismiss={onDismiss}
      />
      {children}
    </confirmDialogContext.Provider>
  );
};

export default ConfirmationDialogProvider;
