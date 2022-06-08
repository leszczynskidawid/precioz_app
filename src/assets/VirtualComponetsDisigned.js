import { Controller, useForm } from "react-hook-form";
import { Checkbox, TextField } from "@mui/material";
import InputForm from "components/atoms/InputForm";
import { useState } from "react";
import MyButton, { Buttons, DeleteButton } from "components/atoms/MyButton";
import CheckBoxForm from "components/atoms/CheckBoxForm";

function VirtualComponentsDisigned() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm({ defaultValeus: { name: "" } });


  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "50px" }}>
      <TextField
        name="name"
        label="name"
        variant="outlined"
        size="small"
        {...register("name", { required: true })}
        error={Boolean(errors.name?.type)}
        helperText={errors.name?.type}
      />
{/* buttons */}
<h1>buttons</h1>
      <MyButton type="submit">Submit</MyButton>

    </form>
  );
}

export default VirtualComponentsDisigned;
