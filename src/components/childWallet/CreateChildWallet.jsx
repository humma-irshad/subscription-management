import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import { useCreateChildWalletMutation } from "../../store/childWallet/childWallet-actions";
import { childWalletActions } from "../../store/childWallet/childWallet-slice";

import ChildWalletForm from "./ChildWalletForm";

const CreateChildWallet = () => {
  const open = useSelector(
    (state) => state.childWalletReducer.createChildWalletModal
  );
  const dispatch = useDispatch();

  const [createChildWallet] = useCreateChildWalletMutation();

  const submitForm = (data) => {
    createChildWallet(data).then(() =>
      dispatch(childWalletActions.showCreateChildWalletModal())
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
      onClose={() => dispatch(childWalletActions.showCreateChildWalletModal())}
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Child Wallet Create
        </Typography>
        <ChildWalletForm
          onClose={() =>
            dispatch(childWalletActions.showCreateChildWalletModal())
          }
          submitForm={submitForm}
        />
      </Box>
    </Modal>
  );
};
export default CreateChildWallet;
