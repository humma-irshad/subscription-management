import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useDeleteWalletMutation } from "../../store/wallet/wallet-actions";
import { walletActions } from "../../store/wallet/wallet-slice";

import WalletTable from "./WalletTable";
import CreateWallet from "./CreateWallet";
import EditWallet from "./EditWallet";
import DeleteModal from "../UI/DeleteModal";
// import DataGridDemo from "./WalletData";

const Wallet = () => {
  const [walletData, setWalletData] = useState();
  const open = useSelector((state) => state.walletReducer.deleteWalletModal);

  const dispatch = useDispatch();

  const [deleteWallet] = useDeleteWalletMutation();

  const getData = (data) => {
    setWalletData(data);
  };

  const handleDeleteWallet = () => {
    deleteWallet(walletData?.walletId).then(() => {
      dispatch(walletActions.deleteWalletModal());
    });
  };

  return (
    <>
      <Stack direction="row" margin="1.2rem" justifyContent="space-between">
        <Typography variant="h5">Wallet</Typography>
        <Button
          endIcon={<AddIcon sx={{ color: "#808080" }} />}
          onClick={() => dispatch(walletActions.showCreateWalletModal())}
        />
      </Stack>
      <WalletTable getData={getData} />
      {/* <DataGridDemo /> */}
      <CreateWallet />
      <EditWallet walletData={walletData} />
      <DeleteModal
        openModal={open}
        handleDelete={handleDeleteWallet}
        onClose={() => dispatch(walletActions.deleteWalletModal())}
      />
    </>
  );
};
export default Wallet;
