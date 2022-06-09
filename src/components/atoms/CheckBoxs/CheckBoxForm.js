import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import { Controller } from "react-hook-form";

function CheckBoxForm({ control, name, label }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked {...field} />}
            label={label}
          />
        </FormGroup>
      )}
    />
  );
}

export default CheckBoxForm;
