import { Container } from "@mui/system";
import { Colors } from "constants/Colors";
import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: ${Colors.whiteSmoke};
  display: flex;
  flex-direction: column;
  padding: 40px;
  text-align: center;
`;
export const StyledHeaderTableContainer = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
`;
export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;
