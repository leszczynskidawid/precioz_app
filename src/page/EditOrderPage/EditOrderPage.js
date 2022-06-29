import { FormAddOrder } from "components/organism/FormAddOrder";
import { useDataTableOredersContext } from "context/dataTableOrdersContext";

export const EditOrderPage = () => {
  const { handleEditRowWithOrderfromTableOrders, dataRowformDataTable } =
    useDataTableOredersContext();
  let defaults = {
    operationNumber: dataRowformDataTable?.operationNumber,
    machineName: dataRowformDataTable?.machineName,
    machineNumber: dataRowformDataTable?.machineNumber,
    workTimeInMilliseconds: dataRowformDataTable?.workTimeInMilliseconds,
    tpzTimeInMilliseconds: dataRowformDataTable?.tpzTimeInMilliseconds,
  };

  return (
    <div>
      <h1>edytuj operacje</h1>
      <FormAddOrder
        action={handleEditRowWithOrderfromTableOrders}
        defaultValues={defaults}
        buttonName={"edytuj"}
      />
      ;
    </div>
  );
};
