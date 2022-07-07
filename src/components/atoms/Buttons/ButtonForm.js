import { StyledButton } from "./styledButton";

function ButtonForm({ type = "button", size = "small", disabled, ...props }) {
  return (
    <StyledButton {...props} type={type} size={size} disabled={disabled} />
  );
}
export default ButtonForm;
