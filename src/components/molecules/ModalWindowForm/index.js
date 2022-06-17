import { Modal } from "@mui/material";
import { Box } from "@mui/system";

export const ModalWindowForm = ({ open }) => {
  return (
    <Modal open={open}>
      <Box>
        <h1>siemneczko tu openm modal</h1>
      </Box>
    </Modal>
  );
};
