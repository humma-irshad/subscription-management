import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import { useCreateSubscriptionAmountMutation } from "../../store//subscriptionAmount/subscriptionAmount-actions";
import { subscriptionAmountActions } from "../../store//subscriptionAmount/subscriptionAmount-slice";

import SubscriptionAmountForm from "./SubscriptionAmountForm";

const CreateSubscriptionAmount = () => {
  const open = useSelector(
    (state) => state.subscriptionAmountReducer.createSubscriptionAmountModal
  );
  const dispatch = useDispatch();

  const [createSubscriptionAmount] = useCreateSubscriptionAmountMutation();

  const submitForm = (data) => {
    createSubscriptionAmount(data).then(() =>
      dispatch(subscriptionAmountActions.showCreateSubscriptionAmountModal())
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
      onClose={() =>
        dispatch(subscriptionAmountActions.showCreateSubscriptionAmountModal())
      }
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Subscription Amount Coupon Create
        </Typography>
        <SubscriptionAmountForm
          onClose={() =>
            dispatch(
              subscriptionAmountActions.showCreateSubscriptionAmountModal()
            )
          }
          submitForm={submitForm}
        />
      </Box>
    </Modal>
  );
};
export default CreateSubscriptionAmount;
