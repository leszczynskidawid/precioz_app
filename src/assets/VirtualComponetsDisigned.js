import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputForm from "components/atoms/Inputs/InputForm";
import ButtonForm from "components/atoms/Buttons/ButtonForm";
import SelectInputForm from "components/atoms/SelectInputs/SelectInputForm";
import CheckBoxForm from "components/atoms/CheckBoxs/CheckBoxForm";
import Nav from "components/atoms/Nav/Nav";

import { ButtonIcon } from "components/ButtonIcon";
import { icon } from "./Icons/Icons";

import { Alert } from "@mui/material";

const items = [
  { value: 121, label: "121" },
  { value: 32, label: "32" },
  { value: 42, label: "42" },
];

const schema = yup
  .object({
    firstName: yup.string().required("wymagany").trim(),
    select: yup.string().required("wymagany").trim(),
    checkbox: yup.string().required("wymagany").trim(),
  })
  .required();

function VirtualComponentsDisigned() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValeus: { firstName: "asd" },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "50px" }}>
        <InputForm
          name="firstName"
          label="name"
          variant="outlined"
          size="small"
          error={errors}
          control={control}
        />

        {/* buttons */}
        <h2>buttons</h2>
        <ButtonForm type="error">button</ButtonForm>

        <h2>Select</h2>
        <SelectInputForm
          control={control}
          name="select"
          items={items}
          error={errors}
        />

        <h2>checkbox</h2>
        <CheckBoxForm
          control={control}
          name="checkbox"
          label="alkshd"
          error={errors}
        ></CheckBoxForm>

        <ButtonIcon icon={icon.iconClose}></ButtonIcon>

        <Alert open={true} security="succes">
          as
        </Alert>
      </form>
    </>
  );
}

export default VirtualComponentsDisigned;
