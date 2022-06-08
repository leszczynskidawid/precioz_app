import { dividerClasses, TextField } from "@mui/material";
import { getThemeProps } from "@mui/system";

import {
  Controller,
  useController,
  useFieldArray,
  useFormState,
} from "react-hook-form";

function InputForm({ name, label,  variant, size , ...restProps}) {
 
 


  return (
    <>
      <Controller
        name={name}
        render={({ field: { onChange, onBlur, value, ref },
        fieldState:{errors} }) => (
          <TextField
            onBlur={onBlur}
            variant={variant}
            label={label}
            size={size}
            onChange={onChange}
            value={value}
            inputRef={ref}
            error={Boolean(errors.errors?.name)} // nie rozumiem czemu nie działa validacja w tym miescu 
            helperText={errors.errors.name.type}
            {...restProps}
          />
        )}
       
      />

    </>
  );
}

export default InputForm;
