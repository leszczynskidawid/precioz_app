import InputForm from "components/atoms/Inputs/InputForm";
import { useForm } from "react-hook-form";
import { StyledForm } from "./styled";
import ButtonForm from "components/atoms/Buttons/ButtonForm";
import { ModalWindowForm } from "components/molecules/ModalWindowForm";
import { DataTable } from "components/atoms/DataTable";
import { titleCellDataTableOperations } from "constants/TitleCellDataTableColumnTyps";

// function createData(
//   operationNumber,
//   machineName,
//   machineNumber,
//   workTimeInMilliseconds,
//   tpzTimeInMilliseconds,
// ) {
//   return {
//     operationNumber,
//     machineName,
//     machineNumber,
//     workTimeInMilliseconds,
//     tpzTimeInMilliseconds,
//   };
// }

// const rows = [
//   createData(
//     "0010",
//     "Hyundai400",
//     "00325",
//     200,
//     40,
//   ),
//   createData("0020", 237, 9.0, 37, 4.3),
//   createData("0030", 262, 16.0, 24, 6.0),
//   createData("0040", 305, 3.7, 67, 4.3),
//   createData("0050", 356, 16.0, 49, 3.9),
// ];

const data = [
  {
    operationNumber: "00020",
    machineName: "Hyundai400Mc",
    machineNumber: "00232",
    workTimeInMilliseconds: 1200,
    tpzTimeInMilliseconds: 3122,
  },
  {
    operationNumber: "00020",
    machineName: "Hyundai400Mc",
    machineNumber: "00232",
    workTimeInMilliseconds: 1200,
    tpzTimeInMilliseconds: 3122,
  },
  {
    operationNumber: "00020",
    machineName: "Hyundai400Mc",
    machineNumber: "00232",
    workTimeInMilliseconds: 1200,
    tpzTimeInMilliseconds: 3122,
  },
];

export const AddingOrderForm = () => {
  const {
    onSubmit,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  console.log(data["operationNumber"]);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Dodaj zlecenie</h1>
      <InputForm
        name={"serialId"}
        control={control}
        label={"numer zlecenia"}
        error={errors}
        size="small"
        type="sting"
      />
      <InputForm
        name={"metalQuantity"}
        control={control}
        label={"liczba sztuk"}
        error={errors}
        size="small"
        type="number"
      />
      <div
        style={{
          display: "flex",
          padding: "20px 0",
          justifyContent: "space-between",
        }}
      >
        <h3>operacje</h3>
        <ButtonForm
          size="small"
          variant="contained"
          onClick={() => (
            <ModalWindowForm open={true} />
          )}
        >
          {" "}
          dodaj operacje
        </ButtonForm>
      </div>

      <DataTable
        rows={data}
        object={titleCellDataTableOperations}
      ></DataTable>
    </StyledForm>
  );
};
