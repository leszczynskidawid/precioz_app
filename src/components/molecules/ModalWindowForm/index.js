import { StyledModal } from "./style";
import { StyledBox } from "./style";
import { useAuth } from "context/getAuth";
import { AddOrderPage } from "page/AddOrderPage/AddOrderPage";
import { ModalWindowTypes } from "constants/ModalWidowTypes";
import { EditOrderPage } from "page/EditOrderPage/EditOrderPage";

export const ModalWindowForm = () => {
  const { isModalOpen, handleModalClose } = useAuth();

  const { open, type } = isModalOpen;

  return (
    <StyledModal open={open} onClose={handleModalClose}>
      <StyledBox>
        {type === ModalWindowTypes.add ? <AddOrderPage /> : <EditOrderPage />}
      </StyledBox>
    </StyledModal>
  );
};
