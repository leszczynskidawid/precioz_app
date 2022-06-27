import InputForm from "components/atoms/Inputs/InputForm";
import { useForm } from "react-hook-form";
import { StyledForm } from "./styled";
import ButtonForm from "components/atoms/Buttons/ButtonForm";
import { ModalWindowForm } from "components/molecules/ModalWindowForm";
import { DataTable } from "components/atoms/DataTable";
import { titleCellDataTableOperations } from "constants/TitleCellDataTableColumnTyps";
import { useAuth } from "context/getAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDataTableOredersContext } from "context/dataTableOrdersContext";

import { useNavigate } from "react-router-dom";
import { RouterPathTypes } from "constants/RouterPathTypes";
import { Container } from "@mui/system";

const digitsOnly = (value) => /^\d+$/.test(value);

const schema = yup
  .object({
    serialId: yup
      .string()
      .test(
        "dignitsOnly",
        "numer zlecenia przyjmuje wyłącznie ciag liczbowy ",
        digitsOnly,
      ),
    metalName: yup
      .string()
      .required()
      .matches(
        /^[A-Z]+[a-z]+/,
        "podaj prwidłowa nazwe detalu, nazwa nie może zawierać znaków specjanych oraz cyfr",
      )
      .min(3)
      .max(15),
    metalQuantity: yup.number().max(1200).min(1).required(),
  })
  .required();

export const AddingOrderForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const naviagte = useNavigate();

  const { handleModalOpen, isModalOpen } = useAuth();
  const { operationsOrder, handleDeleteRowfromDataTable } =
    useDataTableOredersContext();

  const onSubmit = () => {
    if (errors !== null && operationsOrder.length > 0) {
      alert("dodano");
      naviagte(RouterPathTypes.home);
    }
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>DODAJ ZlECENIE</h1>

        <Container style={{ display: "flex", flexDirection: "column" }}>
          <InputForm
            name={"serialId"}
            control={control}
            label={"numer zlecenia"}
            error={errors}
            size="small"
            type="string"
          />{" "}
          <InputForm
            name={"metalName"}
            control={control}
            label={"Nazwa detalu"}
            error={errors}
            size="small"
            type="string"
          />
          <InputForm
            name={"metalQuantity"}
            control={control}
            label={"liczba sztuk"}
            error={errors}
            size="small"
            type="number"
          />
        </Container>
        <div
          style={{
            display: "flex",
            padding: "20px 0",
            justifyContent: "space-between",
          }}
        >
          <h3>operacje</h3>
          <ButtonForm size="small" onClick={() => handleModalOpen()}>
            dodaj operacje
          </ButtonForm>
        </div>
        <DataTable
          heders={titleCellDataTableOperations}
          data={operationsOrder}
          deleteRow={handleDeleteRowfromDataTable}
        />
        <ButtonForm
          type="submit"
          variant="contained"
          size="large"
          disabled={operationsOrder.length !== 0 ? false : true}
        >
          Dodaj zlecenie
        </ButtonForm>
      </StyledForm>
      <ModalWindowForm open={isModalOpen}></ModalWindowForm>
    </div>
  );
};
