import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useDeleteAmountCouponMutation } from "../../store/amountCoupon/amountCoupon-actions";
import { amountCouponActions } from "../../store/amountCoupon/amountCoupon-slice";

import AmountCouponTable from "./AmountCouponTable";
import CreateAmountCoupon from "./CreateAmountCoupon";
import EditAmountCoupon from "./EditAmountCoupon";
import DeleteModal from "../UI/DeleteModal";

const AmountCoupon = () => {
  const [amountCouponData, setAmountCouponData] = useState();
  const open = useSelector(
    (state) => state.amountCouponReducer.deleteAmountCouponModal
  );
  const dispatch = useDispatch();
  const [deleteAmountCoupon] = useDeleteAmountCouponMutation();

  const getData = (data) => {
    setAmountCouponData(data);
  };

  const handleDeleteAmountCoupon = () => {
    deleteAmountCoupon(amountCouponData?.id).then(() => {
      dispatch(amountCouponActions.deleteAmountCouponModal());
    });
  };

  return (
    <>
      <Stack direction="row" margin="1.2rem" justifyContent="space-between">
        <Typography variant="h5">Amount Coupon Eligibility</Typography>
        <Button
          endIcon={
            <AddIcon
              sx={{ color: "#808080" }}
              onClick={() =>
                dispatch(amountCouponActions.showCreateAmountCouponModal())
              }
            />
          }
        />
      </Stack>
      <AmountCouponTable getData={getData} />
      <CreateAmountCoupon />
      <EditAmountCoupon amountCouponData={amountCouponData} />
      <DeleteModal
        openModal={open}
        handleDelete={handleDeleteAmountCoupon}
        onClose={() => dispatch(amountCouponActions.deleteAmountCouponModal())}
      />
    </>
  );
};
export default AmountCoupon;
