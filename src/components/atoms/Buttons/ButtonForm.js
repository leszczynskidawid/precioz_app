import { StyledButton } from "./styledButton";

function ButtonForm({ type , ...props }) {
  return <StyledButton {...props} type={type} />;
}
export default ButtonForm;
