import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useDeleteCustomerMutation } from "../../store/customer/customer-actions";
import { customerActions } from "../../store/customer/customer-slice";

import CustomerTable from "./CustomerTable";
import CreateCustomer from "./CreateCustomer";
import EditCustomer from "./EditCustomer";
import DeleteModal from "../UI/DeleteModal";

const Customer = () => {
  const [customerData, setCustomerData] = useState();
  const open = useSelector(
    (state) => state.customerReducer.deleteCustomerModal
  );

  const dispatch = useDispatch();

  const [deleteCustomer] = useDeleteCustomerMutation();

  const getData = (data) => {
    setCustomerData(data);
  };

  const handleDeleteCustomer = () => {
    deleteCustomer(customerData?.id).then(() => {
      dispatch(customerActions.deleteCustomerModal());
    });
  };

  return (
    <>
      <Stack direction="row" margin="1.2rem" justifyContent="space-between">
        <Typography variant="h5">Customer</Typography>
        <Button
          endIcon={<AddIcon sx={{ color: "#808080" }} />}
          onClick={() => dispatch(customerActions.showCreateCustomerModal())}
        />
      </Stack>
      <CustomerTable getData={getData} />
      <CreateCustomer />
      <EditCustomer customerData={customerData} />
      <DeleteModal
        openModal={open}
        handleDelete={handleDeleteCustomer}
        onClose={() => dispatch(customerActions.deleteCustomerModal())}
      />
    </>
  );
};
export default Customer;
