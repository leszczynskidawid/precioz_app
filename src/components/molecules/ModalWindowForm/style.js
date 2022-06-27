import styled from "styled-components";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Colors } from "constants/Colors";

export const StyledModal = styled(Modal)`
  border: 2px solid #000;
  margin-top: 5%;
`;
export const StyledBox = styled(Box)`
  background-color: ${Colors.whiteSmoke};
`;
