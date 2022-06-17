import { StyledButton } from "./styledButton";

function ButtonForm({
  type = "button",
  size = "small",
  ...props
}) {
  return (
    <StyledButton
      {...props}
      type={type}
      size={size}
    />
  );
}
export default ButtonForm;
