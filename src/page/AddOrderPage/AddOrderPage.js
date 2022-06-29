import { FormAddOrder } from "components/organism/FormAddOrder";
import { useDataTableOredersContext } from "context/dataTableOrdersContext";

export const AddOrderPage = () => {
  const { addOperationOrder } = useDataTableOredersContext();

  return (
    <div>
      <h1>dodaj operacje</h1>
      <FormAddOrder action={addOperationOrder} buttonName="dodaj" />
    </div>
  );
};
