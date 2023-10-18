import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import { useEditChildWalletMutation } from "../../store/childWallet/childWallet-actions";
import { childWalletActions } from "../../store/childWallet/childWallet-slice";

import ChildWalletForm from "./ChildWalletForm";

const EditChildWallet = ({ childWalletData }) => {
  const open = useSelector(
    (state) => state.childWalletReducer.editChildWalletModal
  );
  const dispatch = useDispatch();

  const [editChildWallet] = useEditChildWalletMutation();

  const submitForm = (data) => {
    editChildWallet(data).then(() =>
      dispatch(childWalletActions.showEditChildWalletModal())
    );
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    borderRadius: 2,
    bgcolor: "background.paper",
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={() => dispatch(childWalletActions.showEditChildWalletModal())}
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Child Wallet Edit
        </Typography>
        <ChildWalletForm
          childWalletData={childWalletData}
          onClose={() =>
            dispatch(childWalletActions.showEditChildWalletModal())
          }
          submitForm={submitForm}
        />
      </Box>
    </Modal>
  );
};
export default EditChildWallet;
