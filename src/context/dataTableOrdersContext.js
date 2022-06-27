const { createContext, useState, useContext } = require("react");

const DataTableOrdersContext = createContext(null);

function ProviderDataTableOrdersContext({ children }) {
  const [operationsOrder, setOperationsOrder] = useState([]);
  const [dataRowformDataTable, setDataRowformDataTable] = useState({});

  const addOperationOrder = (operation) => {
    let array = [];
    array.push(operation);
    setOperationsOrder((prevState) => [...prevState, operation]);
  };

  const handleRowfromDataTable = (row) => {
    setDataRowformDataTable(row);
  };

  const handleDeleteRowfromDataTable = (row) => {
    if (confirm("czy napeno chzioc")) {
      setOperationsOrder((operation) =>
        operation.filter((item) => {
          return item.operationNumber !== row.operationNumber;
        }),
      );
    }
  };
  const handleEditRowInModal = (row, callback) => {
    const data = operationsOrder.filter(
      (operation) => operation.operationNumber === row.operationNumber,
    );
    setDataRowformDataTable(data);

    callback();
  };

  const value = {
    handleRowfromDataTable,
    dataRowformDataTable,
    operationsOrder,
    addOperationOrder,
    handleDeleteRowfromDataTable,
    handleEditRowInModal,
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
