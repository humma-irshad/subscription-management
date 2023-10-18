import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import { couponActions } from "../../store/coupon/coupon-slice";
import { useCreateCouponMutation } from "../../store/coupon/coupon-actions";

import CouponForm from "./CouponForm";

const CreateCoupon = () => {
  const open = useSelector((state) => state.couponReducer.createCouponModal);
  const dispatch = useDispatch();

  const [createCoupon] = useCreateCouponMutation();

  const submitForm = (data) => {
    createCoupon(data).then(() =>
      dispatch(couponActions.showCreateCouponModal())
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
      onClose={() => dispatch(couponActions.showCreateCouponModal())}
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Coupon Create
        </Typography>
        <CouponForm
          submitForm={submitForm}
          onClose={() => dispatch(couponActions.showCreateCouponModal())}
          method="post"
        />
      </Box>
    </Modal>
  );
};
export default CreateCoupon;
