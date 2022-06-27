import { Controller } from "react-hook-form";
import { StyledInput } from "./style";
function InputForm({ name, label, variant, size, error, control, type }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <StyledInput
          {...field}
          variant={variant}
          label={label}
          size={size}
          type={type}
          helperText={error[name]?.message}
          error={error[name]?.message}
        />
      )}
    />
  );
}

export default InputForm;
