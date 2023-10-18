import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import CustomerCouponForm from "./CustomerCouponForm";
import { customerCouponActions } from "../../store//customerCoupon/customerCoupon-slice";
import { useCreateCustomerCouponMutation } from "../../store//customerCoupon/customerCoupon-actions";

const CreateCustomerCoupon = () => {
  const open = useSelector(
    (state) => state.customerCouponReducer.createCustomerCouponModal
  );
  const dispatch = useDispatch();

  const [createCustomerCoupon] = useCreateCustomerCouponMutation();

  const submitForm = (data) => {
    createCustomerCoupon(data).then(() =>
      dispatch(customerCouponActions.showCreateCustomerModal())
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
      onClose={() => dispatch(customerCouponActions.showCreateCustomerModal())}
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Customer Coupon Create
        </Typography>
        <CustomerCouponForm
          onClose={() =>
            dispatch(customerCouponActions.showCreateCustomerModal())
          }
          submitForm={submitForm}
        />
      </Box>
    </Modal>
  );
};
export default CreateCustomerCoupon;
