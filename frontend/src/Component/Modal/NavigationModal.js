import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import "./NavigationModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "0px",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

function NavigationModal({ response, valuetype }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        className="NavigationMainModal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="NavigationModalBox" sx={style}>
          <div className="ModalCloseButton" onClick={handleClose}>
            <CloseIcon />
          </div>
          <div className="modalHead">
            <h4>Your {valuetype} has been created!</h4>
          </div>
          <div className="modalLinkDiv">
            <a href={`http://localhost:3000/Data/` + response} target="_blank">
              //localhost:3000/Data/{response}
            </a>
          </div>
          <div className="modalHead">
            <p> Click the link for more details</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default NavigationModal;
