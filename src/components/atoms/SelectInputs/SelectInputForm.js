import { FormControl, FormHelperText } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

function SelectInputForm({ label, items, name, control, error }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl error={error[name]?.message}>
          <Select label={label} {...field}>
            {items.map(item => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText>{error[name]?.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}

export default SelectInputForm;
