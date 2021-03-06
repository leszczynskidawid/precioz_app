const { createContext, useState, useContext } = require("react");
const DataTableOrdersContext = createContext(null);

function ProviderDataTableOrdersContext({ children }) {
  const [operationsOrder, setOperationsOrder] = useState([]);
  const [dataRowformDataTable, setDataRowformDataTable] = useState({});
  const [errors, setErros] = useState(false);

  const addOperationOrder = async (operation) => {
    const newOrders = [...operationsOrder, operation];
    const validation = operationsOrder.findIndex(
      (item) => item.operationNumber === operation.operationNumber,
    );
    if (validation === -1) {
      setOperationsOrder(newOrders);
    } else {
      setErros(true);
    }
  };

  const handleEditRowWithOrderfromTableOrders = (row) => {
    const editRows = [...operationsOrder];
    const index = operationsOrder.findIndex(
      (operation) => operation.operationNumber === row.operationNumber,
    );
    editRows[index] = row;
    setDataRowformDataTable(editRows[index]);
    setOperationsOrder(editRows);
  };

  const handleDeleteRowfromDataTable = (row) => {
    if (confirm("czy napeno checsz usunać ")) {
      setOperationsOrder((operation) =>
        operation.filter((item) => {
          return item.operationNumber !== row.operationNumber;
        }),
      );
    }
  };

  const value = {
    handleEditRowWithOrderfromTableOrders,
    dataRowformDataTable,
    operationsOrder,
    addOperationOrder,
    handleDeleteRowfromDataTable,
    setErros,
    errors,
  };

  return (
    <DataTableOrdersContext.Provider value={value}>
      {children}
    </DataTableOrdersContext.Provider>
  );
}
export const useDataTableOredersContext = () => {
  return useContext(DataTableOrdersContext);
};

export default ProviderDataTableOrdersContext;
