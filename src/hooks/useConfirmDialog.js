const { useContext } = require("react");
import { confirmDialogContext } from "context/confirmDialogContext";

export const useConfirmationDialog = () => {
  const { openDialog } = useContext(confirmDialogContext);

  const getConfirmation = ({ ...options }) =>
    new Promise((res) => {
      openDialog({ actionCallback: res, ...options });
    });

  return { getConfirmation };
};
