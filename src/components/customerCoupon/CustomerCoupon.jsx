import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useDeleteCustomerCouponMutation } from "../../store//customerCoupon/customerCoupon-actions";
import { customerCouponActions } from "../../store//customerCoupon/customerCoupon-slice";

import CustomerCouponTable from "./CustomerCouponTable";
import CreateCustomerCoupon from "./CreateCustomerCoupon";
import DeleteModal from "../UI/DeleteModal";
import EditCustomerCoupon from "./EditCustomerCoupon";

const CustomerCoupon = () => {
  const [customerCouponData, setCustomerCouponData] = useState();
  const open = useSelector(
    (state) => state.customerCouponReducer.deleteCustomerCouponModal
  );
  const dispatch = useDispatch();
  const [deleteCustomerCoupon] = useDeleteCustomerCouponMutation();

  const getData = (data) => {
    setCustomerCouponData(data);
  };

  const handleDeleteCustomerCoupon = () => {
    deleteCustomerCoupon(customerCouponData?.id).then(() => {
      dispatch(customerCouponActions.deleteCustomerCouponModal());
    });
  };

  return (
    <>
      <Stack direction="row" margin="1.2rem" justifyContent="space-between">
        <Typography variant="h5">Customer Coupon</Typography>
        <Button
          endIcon={<AddIcon sx={{ color: "#808080" }} />}
          onClick={() =>
            dispatch(customerCouponActions.showCreateCustomerModal())
          }
        />
      </Stack>
      <CustomerCouponTable getData={getData} />
      <CreateCustomerCoupon />
      <EditCustomerCoupon customerCouponData={customerCouponData} />
      <DeleteModal
        openModal={open}
        handleDelete={handleDeleteCustomerCoupon}
        onClose={() =>
          dispatch(customerCouponActions.deleteCustomerCouponModal())
        }
      />
    </>
  );
};
export default CustomerCoupon;
