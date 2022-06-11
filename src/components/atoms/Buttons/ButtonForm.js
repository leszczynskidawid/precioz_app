import { StyledButton } from "./styledButton";

function ButtonForm({ type = "button" , ...props }) {
  return <StyledButton {...props} type={type} />;
}
export default ButtonForm;
