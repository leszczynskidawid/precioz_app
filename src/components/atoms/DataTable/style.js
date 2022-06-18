import { TableContainer } from "@mui/material";
import { Colors } from "constants/Colors";
import styled from "styled-components";
export const StyledTable = styled(TableContainer)`
  & .MuiTableRow-root:hover {
    background-color: ${Colors.whiteSmoke};
  }
`;
