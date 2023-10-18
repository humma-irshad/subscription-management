import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import { useEditWalletMutation } from "../../store/wallet/wallet-actions";
import { walletActions } from "../../store/wallet/wallet-slice";

import WalletForm from "./WalletForm";

const EditWallet = ({ walletData }) => {
  const open = useSelector((state) => state.walletReducer.editWalletModal);
  const dispatch = useDispatch();

  const [editWallet] = useEditWalletMutation();

  const submitForm = (data) => {
    editWallet(data).then(() => dispatch(walletActions.showEditWalletModal()));
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
      onClose={() => dispatch(walletActions.showEditWalletModal())}
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Wallet Edit
        </Typography>
        <WalletForm
          walletData={walletData}
          onClose={() => dispatch(walletActions.showEditWalletModal())}
          submitForm={submitForm}
        />
      </Box>
    </Modal>
  );
};
export default EditWallet;
