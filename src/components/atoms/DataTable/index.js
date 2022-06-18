import { Paper } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import { StyledTable } from "./style";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

export const DataTable = ({ rows, object }) => {
  const handleonClick = (row) => {
    console.log(row);
  };
  return (
    <StyledTable component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.values(object)?.map(
              (value) => (
                <TableCell key={value}>
                  {value}
                </TableCell>
              ),
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row}
              onClick={() => handleonClick}
            >
              {Object.values(row)?.map(
                (value) => (
                  <TableCell key={value}>
                    {value}
                  </TableCell>
                ),
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTable>
  );
};
