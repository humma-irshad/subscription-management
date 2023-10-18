import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import { useEditCustomerMutation } from "../../store/customer/customer-actions";
import { customerActions } from "../../store/customer/customer-slice";

import CustomerForm from "./CustomerForm";

const EditCustomer = ({ customerData }) => {
  const open = useSelector((state) => state.customerReducer.editCustomerModal);
  const dispatch = useDispatch();

  const [editCustomer] = useEditCustomerMutation();

  const submitForm = (data) => {
    editCustomer(data).then(() =>
      dispatch(customerActions.showEditCouponModal())
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
      onClose={() => dispatch(customerActions.showEditCouponModal())}
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Customer Edit
        </Typography>
        <CustomerForm customerData={customerData} submitForm={submitForm} />
      </Box>
    </Modal>
  );
};
export default EditCustomer;
