import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

MySnackbar.propTypes = {
  openSnack: PropTypes.bool,
  mensaje: PropTypes.string,
  setOpenSnack: PropTypes.func,
};

export default function MySnackbar({ setOpenSnack, openSnack, mensaje }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };

  const action = (
    <>
      <Button color="primary" size="small" onClick={handleClose}>
        Cerrar
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <>
      <Snackbar
        sx={{ "& .MuiSnackbarContent-message": { fontWeight: "bolder" } }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleClose}
        message={mensaje}
        action={action}
      />
    </>
  );
}
