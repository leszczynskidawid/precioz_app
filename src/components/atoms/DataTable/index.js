import { Paper } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

export const DataTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row}
              onClick={(row) => console.log(row)}
            >
              <TableCell>
                {row.operationNumber}
              </TableCell>
              <TableCell>
                {row.machineName}
              </TableCell>
              <TableCell>
                {row.machineNumber}
              </TableCell>
              <TableCell>
                {row.workTimeInMilliseconds}
              </TableCell>
              <TableCell>
                {row.tpzTimeInMilliseconds}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
