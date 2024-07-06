"use client"

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IDashboard {
  children: React.ReactNode;
  isEnd: boolean;
  onClick: any;
}
const ModalComponent: React.FC<IDashboard> = ({ children, isEnd, onClick }) => {
  const style = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "end",
  };
  const style1 = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
  };
  const [modal, setModal] = React.useState<boolean>(true);

  return (
    <Modal
      open={true}
      onClose={onClick}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={isEnd ? style : style1}>
        <Box
          sx={{
            position: "relative",
            bgcolor: "#f7f8fa",
            // borderRadius: "12px",
            boxShadow: 24,
            p: 1,
            textAlign: "center",
            overflow: "auto",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={onClick}
            sx={{
              position: "absolute",
              left: 5,
              top: 5,
              zIndex: 1,
              backgroundColor: "#fff",
              border: "1px solid #fff",
              borderRadius: "50%",
              padding: "1px 2px",
            }}
          >
            <CloseIcon />
          </IconButton>

          {children}
        </Box>
      </Box>
    </Modal>
  );
};
export default ModalComponent;
