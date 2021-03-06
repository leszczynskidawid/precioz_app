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
import { ModalWindowTypes } from "constants/ModalWidowTypes";
import { Alert } from "components/atoms/Alert";
import { AlertTypes } from "constants/AlertTypes";
import { StyledHeaderTableContainer, StyledContainer } from "./styled";
import { RegexTypes } from "constants/RegexTypes";

const digitsOnly = (value) => RegexTypes.dignitsOnly.test(value);

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
        RegexTypes.onlyCharacterisCorrrect,
        "podaj prwidłowa nazwe detalu, nazwa nie może zawierać znaków specjanych oraz cyfr",
      )
      .min(3)
      .max(15),
    metalQuantity: yup.number().max(1200).min(1).required(),
  })
  .required();

export const AddingOrderForm = () => {
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const naviagte = useNavigate();

  const { handleModalOpen, isModalOpen, isAlertOpen, toggleAlert } = useAuth();
  const { operationsOrder, handleDeleteRowfromDataTable } =
    useDataTableOredersContext();

  const onSubmit = () => {
    if (errors !== null && operationsOrder.length > 0) {
      toggleAlert("dodano");
      reset(), naviagte(RouterPathTypes.home);
    }
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>DODAJ ZlECENIE</h1>

        <StyledContainer>
          <InputForm
            name={"serialId"}
            control={control}
            label={"numer zlecenia"}
            error={errors}
            size="small"
            type="text"
          />{" "}
          <InputForm
            name={"metalName"}
            control={control}
            label={"Nazwa detalu"}
            error={errors}
            size="small"
            type="text"
          />
          <InputForm
            name={"metalQuantity"}
            control={control}
            label={"liczba sztuk"}
            error={errors}
            size="small"
            type="number"
          />
        </StyledContainer>
        <StyledHeaderTableContainer>
          <h3>operacje</h3>
          <ButtonForm
            size="small"
            onClick={() => handleModalOpen(ModalWindowTypes.add)}
          >
            dodaj operacje
          </ButtonForm>
        </StyledHeaderTableContainer>
        <DataTable
          heders={titleCellDataTableOperations}
          data={operationsOrder}
          deleteRow={handleDeleteRowfromDataTable}
          editRow={handleModalOpen}
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
      <Alert variant={AlertTypes.success} open={isAlertOpen} />

      <ModalWindowForm open={isModalOpen}></ModalWindowForm>
    </div>
  );
};
