import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import { useCreateAmountCouponTwoMutation } from "../../store/amountCpnTwo/amountCouponTwo-actions";
import { amountCouponTwoActions } from "../../store/amountCpnTwo/amountCouponTwo-slice";

import AmountCouponTwoForm from "./AmountCouponTwoForm";

const CreateAmountCouponTwo = () => {
  const open = useSelector(
    (state) => state.amountCouponTwoReducer.createAmountCouponTwoModal
  );
  const dispatch = useDispatch();

  const [createAmountCouponTwo] = useCreateAmountCouponTwoMutation();

  const submitForm = (data) => {
    createAmountCouponTwo(data).then(() =>
      dispatch(amountCouponTwoActions.showCreateAmountCouponTwoModal())
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
        dispatch(amountCouponTwoActions.showCreateAmountCouponTwoModal())
      }
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Amount Coupon Eligibility Two Create
        </Typography>
        <AmountCouponTwoForm
          submitForm={submitForm}
          onClose={() =>
            dispatch(amountCouponTwoActions.showCreateAmountCouponTwoModal())
          }
        />
      </Box>
    </Modal>
  );
};
export default CreateAmountCouponTwo;
