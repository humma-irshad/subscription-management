import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import { useCreateWalletMutation } from "../../store/wallet/wallet-actions";
import { walletActions } from "../../store/wallet/wallet-slice";

import WalletForm from "./WalletForm";

const CreateWallet = () => {
  const open = useSelector((state) => state.walletReducer.createWalletModal);
  const dispatch = useDispatch();

  const [createWallet] = useCreateWalletMutation();

  const submitForm = (data) => {
    createWallet(data).then(() =>
      dispatch(walletActions.showCreateWalletModal())
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
      onClose={() => dispatch(walletActions.showCreateWalletModal())}
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Wallet Create
        </Typography>
        <WalletForm
          onClose={() => dispatch(walletActions.showCreateWalletModal())}
          submitForm={submitForm}
        />
      </Box>
    </Modal>
  );
};
export default CreateWallet;
