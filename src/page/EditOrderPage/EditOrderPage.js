import { FormAddOrder } from "components/organism/FormAddOrder";
import { useDataTableOredersContext } from "context/dataTableOrdersContext";

export const EditOrderPage = () => {
  const { handleEditRowWithOrderfromTableOrders, dataRowformDataTable } =
    useDataTableOredersContext();
  const {
    operationNumber,
    machineName,
    machineNumber,
    workTimeInMilliseconds,
    tpzTimeInMilliseconds,
  } = dataRowformDataTable;

  let defaultValueInput = {
    operationNumber: operationNumber,
    machineName: machineName,
    machineNumber: machineNumber,
    workTimeInMilliseconds: workTimeInMilliseconds,
    tpzTimeInMilliseconds: tpzTimeInMilliseconds,
  };

  return (
    <div>
      <h1>edytuj operacje</h1>
      <FormAddOrder
        crudAction={handleEditRowWithOrderfromTableOrders}
        defaultValues={defaultValueInput}
        buttonName={"edytuj"}
      />
      ;
    </div>
  );
};
