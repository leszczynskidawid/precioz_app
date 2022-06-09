import { useForm } from "react-hook-form";
import MyButton from "components/atoms/Buttons/ButtonForm";
import CheckBoxForm from "components/atoms/CheckBoxs/CheckBoxForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputForm from "components/atoms/Inputs/InputForm";
import ButtonForm from "components/atoms/Buttons/ButtonForm";
import { red } from "@mui/material/colors";

const items = [
  {  value: "", label: "pusta" },
  {  value: 121, label: "121" },
  {  value: 32, label: "32" },
  {  value: 42, label: "42" },
];

const schema = yup
  .object({
    name: yup.string().required("name").trim(),
  

  })
  .required();

function VirtualComponentsDisigned() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValeus: { name: "asd" , select:"dasdasd"},
    resolver: yupResolver(schema),
  });

  const onSubmit = data =>     alert(JSON.stringify(data));;
  console.log(items)

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "50px" }}>
      <InputForm
        name="name"
        label="name"
        variant="outlined"
        size="small"
        error={errors}
        control={control}
      />

      {/* buttons */}
      <h2>buttons</h2>
      <ButtonForm type="submit">button</ButtonForm>

      <h2>Select</h2>
      <SelectInputForm control={control} name="select" items={items} />


      <h2>checkbox</h2>
    <CheckBoxForm control={control} name="askljh" label="alkshd"></CheckBoxForm>
  
  

    </form>
  );
}

export default VirtualComponentsDisigned;
