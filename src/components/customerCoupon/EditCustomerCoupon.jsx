import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import { useEditCustomerCouponMutation } from "../../store/customerCoupon/customerCoupon-actions";
import { customerCouponActions } from "../../store/customerCoupon/customerCoupon-slice";

import CustomerCouponForm from "./CustomerCouponForm";

const EditCustomerCoupon = ({ customerCouponData }) => {
  const open = useSelector(
    (state) => state.customerCouponReducer.editCustomerCouponModal
  );
  const dispatch = useDispatch();

  const [editCustomerCoupon] = useEditCustomerCouponMutation();

  const submitForm = (data) => {
    editCustomerCoupon(data).then(() =>
      dispatch(customerCouponActions.showEditCustomerCouponModal())
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
        dispatch(customerCouponActions.showEditCustomerCouponModal())
      }
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Customer Coupon Edit
        </Typography>
        <CustomerCouponForm
          customerCouponData={customerCouponData}
          onClose={() =>
            dispatch(customerCouponActions.showEditCustomerCouponModal())
          }
          submitForm={submitForm}
        />
      </Box>
    </Modal>
  );
};
export default EditCustomerCoupon;
