import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import { useCreateAmountCouponMutation } from "../../store/amountCoupon/amountCoupon-actions";
import { amountCouponActions } from "../../store/amountCoupon/amountCoupon-slice";

import AmountCouponForm from "./AmountCouponForm";

const CreateAmountCoupon = () => {
  const open = useSelector(
    (state) => state.amountCouponReducer.createAmountCouponModal
  );
  const dispatch = useDispatch();

  const [createAmountCoupon] = useCreateAmountCouponMutation();

  const submitForm = (data) => {
    createAmountCoupon(data).then(() =>
      dispatch(amountCouponActions.showCreateAmountCouponModal())
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
        dispatch(amountCouponActions.showCreateAmountCouponModal())
      }
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Amount Coupon Eligibility Create
        </Typography>
        <AmountCouponForm
          submitForm={submitForm}
          onClose={() =>
            dispatch(amountCouponActions.showCreateAmountCouponModal())
          }
        />
      </Box>
    </Modal>
  );
};
export default CreateAmountCoupon;
