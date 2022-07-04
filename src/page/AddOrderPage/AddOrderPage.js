import { FormAddOrder } from "components/organism/FormAddOrder";
import { useDataTableOredersContext } from "context/dataTableOrdersContext";

export const AddOrderPage = () => {
  const { addOperationOrder } = useDataTableOredersContext();

  return (
    <div>
      <h1>dodaj operacje</h1>
      <FormAddOrder crudAction={addOperationOrder} buttonName="dodaj" />
    </div>
  );
};
