import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import AmountCouponForm from "./AmountCouponForm";

import { useEditAmountCouponMutation } from "../../store/amountCoupon/amountCoupon-actions";
import { amountCouponActions } from "../../store/amountCoupon/amountCoupon-slice";

const EditAmountCoupon = ({ amountCouponData }) => {
  const open = useSelector(
    (state) => state.amountCouponReducer.editAmountCouponModal
  );
  const dispatch = useDispatch();

  const [editAmountCoupon] = useEditAmountCouponMutation();

  const submitForm = (data) => {
    editAmountCoupon(data).then(() =>
      dispatch(amountCouponActions.showEditAmountCouponModal())
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
      onClose={() => dispatch(amountCouponActions.showEditAmountCouponModal())}
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Amount Coupon Eligibility Edit
        </Typography>
        <AmountCouponForm
          amountCouponData={amountCouponData}
          submitForm={submitForm}
          onClose={() =>
            dispatch(amountCouponActions.showEditAmountCouponModal())
          }
        />
      </Box>
    </Modal>
  );
};
export default EditAmountCoupon;
