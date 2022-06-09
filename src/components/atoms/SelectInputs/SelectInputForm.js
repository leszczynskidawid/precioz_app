import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

function SelectInputForm({ label, items, name, control }) {

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select label={label} {...field} >
        {items.map(item=> (<MenuItem key = {item.value} value={item.value}>{item.label}</MenuItem>))}
        </Select>
      )}
    />
  );
}

export default SelectInputForm;
