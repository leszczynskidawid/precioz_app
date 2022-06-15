import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
 


color:black; 
 text-decoration: none;
 text-transform:uppercase;
 letter-spacing:2px;
 margin: 40px;
&:hover,
&:focus{
    color: blue;
    font-weight:700; 
}
;

`