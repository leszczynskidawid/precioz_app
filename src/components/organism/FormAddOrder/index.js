import InputForm from "components/atoms/Inputs/InputForm";
import { useForm } from "react-hook-form";
import ButtonForm from "components/atoms/Buttons/ButtonForm";
import { useAuth } from "context/getAuth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledForm } from "../AddingOrderForm/styled";
import { RegexTypes } from "constants/RegexTypes";
const schema = yup

  .object()
  .shape({
    operationNumber: yup
      .string()
      .required()
      .min(5, "minimum 5 znakow")
      .max(5, "max 15 znakopw")
      .matches(
        RegexTypes.noSpecialCharactersAndWhiteSpace,
        "This field cannot contain white space and special character",
      ),
    machineName: yup
      .string()
      .required()
      .min(5, "minimum 5 znakow")
      .max(15, "max 15 znakopw"),
    machineNumber: yup
      .string()
      .required()
      .min(5, "minimum 5 znakow")
      .max(5, "max 5 znakow"),
    workTimeInMilliseconds: yup.number().required().min(2).max(5000),

    tpzTimeInMilliseconds: yup.number().required().min(2).max(5000),
  })
  .required();

export const FormAddOrder = ({ defaultValues, crudAction, buttonName }) => {
  const { handleModalClose } = useAuth();

  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => {
    crudAction(data);
    reset();
    handleModalClose();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        name={"operationNumber"}
        control={control}
        label={"numer operacji"}
        error={errors}
        size="small"
        type="text"
      />
      <InputForm
        name={"machineName"}
        control={control}
        label={"nazwa maszyny"}
        error={errors}
        size="small"
        type="text"
      />
      <InputForm
        name={"machineNumber"}
        control={control}
        label={"numer maszyny "}
        error={errors}
        size="small"
        type="text"
      />
      <InputForm
        name={"workTimeInMilliseconds"}
        control={control}
        label={"cza na sztukę "}
        error={errors}
        size="small"
        type="number"
      />
      <InputForm
        name={"tpzTimeInMilliseconds"}
        control={control}
        label={"tpz"}
        error={errors}
        size="small"
        type="number"
      />

      <ButtonForm type="submit" variant="contained">
        {buttonName}
      </ButtonForm>
    </StyledForm>
  );
};
