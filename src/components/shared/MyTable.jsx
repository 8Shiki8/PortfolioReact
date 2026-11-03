import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import PropTypes from "prop-types";
import { badgeSetter } from "../../scripts/ScriptStore";
import Box from "@mui/material/Box";
//import { pink } from "@mui/material/colors";

MyTable.propTypes = {
  arrayColumns: PropTypes.array,
  arrayObjectsRows: PropTypes.array,
  setRow: PropTypes.func,
  setBadge: PropTypes.func,
};
MyTable.defaultProps = {
  arrayColumns: [], // Valor por defecto para arrayColumns
  arrayObjectsRows: [], // Valor por defecto para arrayObjectsRows
};
export default function MyTable({
  arrayColumns,
  arrayObjectsRows,
  setRow,
  setBadge,
}) {
  const handlerDelete = (e) => {
    const nuevasFilas = arrayObjectsRows.filter(
      (_, i) => i !== parseInt(e.currentTarget.getAttribute("data-id"))
    );
    console.log(e.currentTarget.getAttribute("data-id"));
    setRow(nuevasFilas);
    badgeSetter(nuevasFilas, setBadge);
    console.log(nuevasFilas);
  };
  const columns = arrayColumns.map((column, i) => {
    return <TableCell key={i + "c"}>{column}</TableCell>;
  });

  const rows = arrayObjectsRows.map((fila, rowIndex) => {
    return (
      <TableRow
        key={rowIndex}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        {Object.values(fila).map((valor, colIndex) => {
          return (
            <TableCell key={colIndex}>
              {Object.values(fila).length - 1 === colIndex ? (
                <IconButton
                  data-id={rowIndex}
                  aria-label="delete"
                  onClick={handlerDelete}
                >
                  <DeleteIcon sx={{ color: "#e91e63" }} />
                </IconButton>
              ) : (
                valor
              )}
            </TableCell>
          );
        })}
      </TableRow>
    );
  });

  return (
    <>
      {arrayObjectsRows.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>{columns}</TableRow>
            </TableHead>
            <TableBody>{rows}</TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box>No Agregaste Nada al Carrito Todavia</Box>
      )}
    </>
  );
}
