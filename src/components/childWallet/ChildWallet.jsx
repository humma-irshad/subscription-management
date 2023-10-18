import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useDeleteChildWalletMutation } from "../../store/childWallet/childWallet-actions";
import { childWalletActions } from "../../store/childWallet/childWallet-slice";

import ChildWalletTable from "./ChildWalletTable";
import CreateChildWallet from "./CreateChildWallet";
import EditChildWallet from "./EditChildWallet";
import DeleteModal from "../UI/DeleteModal";

const ChildWallet = () => {
  const [childWalletData, setChildWalletData] = useState();
  const open = useSelector(
    (state) => state.childWalletReducer.deleteChildWalletModal
  );

  const dispatch = useDispatch();

  const [deleteChildWallet] = useDeleteChildWalletMutation();

  const getData = (data) => {
    setChildWalletData(data);
  };

  const handleDeleteChildWallet = () => {
    deleteChildWallet(childWalletData?.walletId).then(() => {
      dispatch(childWalletActions.deleteChildWalletModal());
    });
  };

  return (
    <>
      <Stack direction="row" margin="1.2rem" justifyContent="space-between">
        <Typography variant="h5">Child Wallet</Typography>
        <Button
          endIcon={<AddIcon sx={{ color: "#808080" }} />}
          onClick={() =>
            dispatch(childWalletActions.showCreateChildWalletModal())
          }
        />
      </Stack>
      <ChildWalletTable getData={getData} />
      <CreateChildWallet />
      <EditChildWallet childWalletData={childWalletData} />
      <DeleteModal
        openModal={open}
        handleDelete={handleDeleteChildWallet}
        onClick={() => dispatch(childWalletActions.deleteChildWalletModal)}
      />
    </>
  );
};
export default ChildWallet;
