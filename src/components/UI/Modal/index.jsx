import { useState } from "react";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import CustomButton from "../CustomButton";
import FilterListIcon from "../../../assets/icons/FilterListIcon.svg";

const CustomModal = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 270,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    borderRadius: "4px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <CustomButton
        buttonText="ADVANCED FILTERS"
        clickAction={handleOpen}
        width="312px"
        height="56px"
        image={FilterListIcon}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
