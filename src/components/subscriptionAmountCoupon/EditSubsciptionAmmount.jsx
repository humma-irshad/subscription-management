import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import { useEditSubscriptionAmountMutation } from "../../store/subscriptionAmount/subscriptionAmount-actions"
import { subscriptionAmountActions } from "../../store/subscriptionAmount/subscriptionAmount-slice";

import SubscriptionAmountForm from "./SubscriptionAmountForm";

const EditSubscriptionAmount = ({ subscriptionAmountData }) => {
  const open = useSelector(
    (state) => state.subscriptionAmountReducer.editSubscriptionAmountModal
  );
  const dispatch = useDispatch();

  const [editSubscriptionAmount] = useEditSubscriptionAmountMutation();

  const submitForm = (data) => {
    editSubscriptionAmount(data).then(() =>
      dispatch(subscriptionAmountActions.showEditSubscriptionAmountModal())
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
        dispatch(subscriptionAmountActions.showEditSubscriptionAmountModal())
      }
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Subscription Amount Coupon Edit
        </Typography>
        <SubscriptionAmountForm
          subscriptionAmountData={subscriptionAmountData}
          onClose={() =>
            dispatch(
              subscriptionAmountActions.showEditSubscriptionAmountModal()
            )
          }
          submitForm={submitForm}
        />
      </Box>
    </Modal>
  );
};
export default EditSubscriptionAmount;
