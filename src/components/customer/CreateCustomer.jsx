import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import { useCreateCustomerMutation } from "../../store/customer/customer-actions";
import { customerActions } from "../../store/customer/customer-slice";

import CustomerForm from "./CustomerForm";

const CreateCustomer = () => {
  const open = useSelector(
    (state) => state.customerReducer.createCustomerModal
  );
  const dispatch = useDispatch();

  const [createCustomer] = useCreateCustomerMutation();

  const submitForm = (data) => {
    createCustomer(data).then(() =>
      dispatch(customerActions.showCreateCustomerModal())
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
      onClose={() => dispatch(customerActions.showCreateCustomerModal())}
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Customer Create
        </Typography>
        <CustomerForm submitForm={submitForm} />
      </Box>
    </Modal>
  );
};
export default CreateCustomer;
