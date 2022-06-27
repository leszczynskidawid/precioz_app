export const handleDeleteRow = (data, row) => {
  const selecterRow = data.findIndex(
    (operation) => operation.operationNumber === row.operation,
  );

  data.splice(selecterRow, 1);
};
