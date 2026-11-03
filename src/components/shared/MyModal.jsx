import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";

MyModal.propTypes = {
  componente: PropTypes.element,
  handleClose: PropTypes.func,
  status: PropTypes.bool,
};

const style = {
  color: "black",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -40%)",
  width: "35%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MyModal({ componente, handleClose, status }) {
  return (
    <>
      <Modal
        open={status}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          overflowY: "scroll",
          "& .MuiBackdrop-root": {
            backdropFilter: "blur(20px)",
            backgroundColor: "#000000a0",
          },
        }}
      >
        {componente ? (
          <Box sx={style}>{componente}</Box>
        ) : (
          <Box sx={style}>nada</Box>
        )}
      </Modal>
    </>
  );
}
