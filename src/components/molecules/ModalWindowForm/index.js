import { StyledForm } from "components/organism/AddingOrderForm/styled";
import InputForm from "components/atoms/Inputs/InputForm";
import { useForm } from "react-hook-form";
import { StyledModal } from "./style";
import ButtonForm from "components/atoms/Buttons/ButtonForm";
import { StyledBox } from "./style";
import { useAuth } from "context/getAuth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDataTableOredersContext } from "context/dataTableOrdersContext";
import { useEffect } from "react";

const schema = yup

  .object()
  .shape({
    operationNumber: yup
      .string()
      .required()
      .min(5, "minimum 5 znakow")
      .max(5, "max 15 znakopw")
      .matches(
        /^[a-zA-Z0-9@]+$/,
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

export const ModalWindowForm = () => {
  const { isModalOpen, handleModalClose } = useAuth();
  const { addOperationOrder, dataRowformDataTable } =
    useDataTableOredersContext();
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      operationNumber: "",
      machineName: "",
      machineNumber: "",
      workTimeInMilliseconds: "",
      tpzTimeInMilliseconds: "",
    },
  });

  const onSubmit = (data) => {
    addOperationOrder(data);
    reset();
    handleModalClose();
  };

  useEffect(() => {
    let defaults = {
      operationNumber: dataRowformDataTable[0]?.operationNumber,
      machineName: dataRowformDataTable[0]?.machineName,
      machineNumber: dataRowformDataTable[0]?.machineNumber,
      workTimeInMilliseconds: dataRowformDataTable[0]?.workTimeInMilliseconds,
      tpzTimeInMilliseconds: dataRowformDataTable[0]?.tpzTimeInMilliseconds,
    };
    reset(defaults);
    console.log("render");
  }, [dataRowformDataTable, reset]);

  return (
    <StyledModal open={isModalOpen} onClose={handleModalClose}>
      <StyledBox>
        <div>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <h1>Dodaj operacje</h1>

            <InputForm
              name={"operationNumber"}
              control={control}
              label={"numer operacji"}
              error={errors}
              size="small"
              type="string"
            />
            <InputForm
              name={"machineName"}
              control={control}
              label={"nazwa maszyny"}
              error={errors}
              size="small"
              type="string"
            />
            <InputForm
              name={"machineNumber"}
              control={control}
              label={"numer maszyny "}
              error={errors}
              size="small"
              type="string"
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
              Dodaj
            </ButtonForm>
          </StyledForm>
        </div>
      </StyledBox>
    </StyledModal>
  );
};
