import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import { useEditCouponMutation } from "../../store/coupon/coupon-actions";
import { couponActions } from "../../store/coupon/coupon-slice";

import CouponForm from "./CouponForm";

const EditCoupon = ({ couponData }) => {
  const open = useSelector((state) => state.couponReducer.editCouponModal);
  const dispatch = useDispatch();

  const [editCoupon] = useEditCouponMutation();
  const submitForm = (couponData) => {
    editCoupon(couponData).then(() =>
      dispatch(couponActions.showEditCouponModal())
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
      onClose={() => dispatch(couponActions.showEditCouponModal())}
    >
      <Box sx={{ ...style, overflowY: "scroll" }}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Coupon Edit
        </Typography>
        <CouponForm
          couponData={couponData}
          submitForm={submitForm}
          onClose={() => dispatch(couponActions.showEditCouponModal())}
        />
      </Box>
    </Modal>
  );
};
export default EditCoupon;
