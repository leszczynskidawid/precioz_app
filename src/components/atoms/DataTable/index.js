import TableCell from "@mui/material/TableCell";
import { StyledTable } from "./style";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { Paper } from "@mui/material";
import { icon } from "assets/Icons/Icons";
import { ButtonIcon } from "components/ButtonIcon";
import { useAuth } from "context/getAuth";
import { ModalWindowTypes } from "constants/ModalWidowTypes";

export const DataTable = ({ data, heders, deleteRow, editRow }) => {
  const { handleModalOpen } = useAuth();

  const tableRows = data?.map((row) => (
    <TableRow key={row}>
      {Object.values(row)?.map((value) => (
        <TableCell key={value}>{value}</TableCell>
      ))}
      <TableCell>
        <ButtonIcon icon={icon.iconDelete} onClick={() => deleteRow(row)} />
        <ButtonIcon
          icon={icon.iconEdit}
          onClick={() => editRow(row, handleModalOpen(ModalWindowTypes.edit))}
        />
      </TableCell>
    </TableRow>
  ));

  return (
    <StyledTable component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.values(heders)?.map((value) => (
              <TableCell key={value}>{value}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{tableRows}</TableBody>
      </Table>
    </StyledTable>
  );
};
