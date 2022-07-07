import { IconButton } from "@mui/material";

export const ButtonIcon = ({ icon, ...props }) => {
  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      {...props}
    >
      {icon}
    </IconButton>
  );
};
