import { useEffect, useCallback } from "react";
import {
  BackLink,
  ModalContent,
  ModalTitle,
  ModalWindow,
} from "./Modal.styled";
import angleRight from "../../images/angle-right.svg";

export const Modal = ({ open, handleClose }) => {
  return (
    <div>
      <ModalWindow
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <ModalTitle>Thank you!</ModalTitle>
          <p>Your form submission has been received.</p>
          <BackLink offset="200" href="#home" onClick={handleClose}>
            <svg width="10" height="10" fill="#28a745">
              <use href={angleRight}></use>
            </svg>
            Back to our site
          </BackLink>
        </ModalContent>
      </ModalWindow>
    </div>
  );
};
