import { useForm } from "react-hook-form";
import MyButton from "components/atoms/MyButton";
import CheckBoxForm from "components/atoms/CheckBoxForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputForm from "components/atoms/InputForm";

const schema = yup
  .object({
    name: yup.string().required("name").trim(),
    lastname: yup.string().required("lastname").trim(),
  })
  .required();

function VirtualComponentsDisigned() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValeus: { name: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

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
      <MyButton type="submit">Submit</MyButton>

      {/* checkbox */}
      <h2>checkbox</h2>
      <CheckBoxForm label="checkbox" />
    </form>
  );
}

export default VirtualComponentsDisigned;
