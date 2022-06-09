import { TextField } from "@mui/material";

import { Controller } from "react-hook-form";

function InputForm({ name, label, variant, size, error, control }) {


  return (
    
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            {...field}
            variant={variant}
            label={label}
            size={size}
            helperText={error[name]?.message}
            error={error[name]?.message}
          />
        )}
      />
    </>
  );
}

export default InputForm;
