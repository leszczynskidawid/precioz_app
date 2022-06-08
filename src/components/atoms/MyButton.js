import styled from "styled-components";
import { Button } from "@mui/material";

const StyledButton = styled(Button)`


    box-shadow:1px 2px black;
    


`
export const Buttons = styled.button`
	/* background-color is value of props.color */
	background-color: ${props => props.color};
`


function MyButton({...props}) {
    return ( 
        <>
        <StyledButton {...props}  />
      

        </>

     );
}

export default MyButton;