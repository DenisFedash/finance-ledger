import { ArrowBack, BackLink, ModalTitle } from "./Modal.styled";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 310,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "12px",
  p: 4,
  "@media (min-width: 768px)": {
    width: 400,
  },
};

export const BasicModal = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalTitle>Thank you!</ModalTitle>
          <p>Your form submission has been received.</p>
          <BackLink offset="200" href="#home" onClick={handleClose}>
            <ArrowBack />
            Back to our site
          </BackLink>
        </Box>
      </Modal>
    </div>
  );
};
