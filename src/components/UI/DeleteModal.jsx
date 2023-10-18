import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { Warning } from "@mui/icons-material";

const DeleteModal = ({ handleDelete, onClose, openModal }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 280,
    borderRadius: 2,
    bgcolor: "background.paper",
    p: 4,
  };

  return (
    <Modal open={openModal} onClose={onClose}>
      <Box sx={style} align="center">
        <Warning color="error" sx={{ p: 2 }} />
        <Typography variant="h6" children="Do you want to Delete?" />
        <Grid container sx={{ justifyContent: "center", gap: 1, marginTop: 2 }}>
          <Button variant="outlined" onClick={onClose} children="Cancel" />
          <Button
            variant="outlined"
            color="error"
            onClick={handleDelete}
            children="Delete"
          />
        </Grid>
      </Box>
    </Modal>
  );
};
export default DeleteModal;
