import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox, FormControl } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormHelperText } from "@mui/material";

function CheckBoxForm({ control, name, label, error }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl error={error[name]?.message}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox {...field} />}
              label={label}
            ></FormControlLabel>
            {error && <FormHelperText>{error[name]?.message}</FormHelperText>}
          </FormGroup>
        </FormControl>
      )}
    />
  );
}

export default CheckBoxForm;
