import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useDeleteSubscriptionAmountMutation } from "../../store/subscriptionAmount/subscriptionAmount-actions";
import { subscriptionAmountActions } from "../../store/subscriptionAmount/subscriptionAmount-slice";

import SubscriptionAmountTable from "./SubscriptionAmountTable";
import CreateSubscriptionAmount from "./CreateSubscriptionAmount";
import EditSubscriptionAmount from "./EditSubsciptionAmmount";
import DeleteModal from "../UI/DeleteModal";

const SubscriptionAmount = () => {
  const [subscriptionAmountData, setSubscriptionAmountData] = useState();
  const open = useSelector(
    (state) => state.subscriptionAmountReducer.deleteSubscriptionAmountModal
  );
  const dispatch = useDispatch();
  const [deleteSubscriptionAmount] = useDeleteSubscriptionAmountMutation();

  const getData = (data) => {
    setSubscriptionAmountData(data);
  };

  const handleDeleteSubscriptionAmount = () => {
    deleteSubscriptionAmount(subscriptionAmountData?.id).then(() => {
      dispatch(subscriptionAmountActions.deleteSubscriptionAmountModal());
    });
  };

  return (
    <>
      <Stack direction="row" margin="1.2rem" justifyContent="space-between">
        <Typography variant="h5">Subscription Amount Coupon</Typography>
        <Button
          endIcon={<AddIcon sx={{ color: "#808080" }} />}
          onClick={() =>
            dispatch(
              subscriptionAmountActions.showCreateSubscriptionAmountModal()
            )
          }
        />
      </Stack>
      <SubscriptionAmountTable getData={getData} />
      <CreateSubscriptionAmount />
      <EditSubscriptionAmount subscriptionAmountData={subscriptionAmountData} />
      <DeleteModal
        openModal={open}
        handleDelete={handleDeleteSubscriptionAmount}
        onClose={() =>
          dispatch(subscriptionAmountActions.deleteSubscriptionAmountModal())
        }
      />
    </>
  );
};
export default SubscriptionAmount;
