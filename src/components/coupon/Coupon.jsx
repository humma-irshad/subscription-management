import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useDeleteCouponMutation } from "../../store/coupon/coupon-actions";
import { couponActions } from "../../store/coupon/coupon-slice";

import CreateCoupon from "./CreateCoupon";
import CouponTable from "./CouponTable";
import EditCoupon from "./EditCoupon";
import DeleteModal from "../UI/DeleteModal";

const Coupon = () => {
  const [couponData, setCouponData] = useState();
  const open = useSelector((state) => state.couponReducer.deleteCouponModal);
  const dispatch = useDispatch();
  const [deleteCoupon] = useDeleteCouponMutation();

  const getCoupon = (data) => {
    setCouponData(data);
  };

  const handleDeleteCoupon = () => {
    deleteCoupon(couponData?.couponCode).then(() => {
      dispatch(couponActions.deleteCouponModal());
    });
  };

  return (
    <>
      <Stack direction="row" margin="1.2rem" justifyContent="space-between">
        <Typography variant="h5">Coupon</Typography>
        <Button
          endIcon={
            <AddIcon
              sx={{ color: "#808080" }}
              onClick={() => dispatch(couponActions.showCreateCouponModal())}
            />
          }
        />
      </Stack>
      <CouponTable getCoupon={getCoupon} />
      <CreateCoupon />
      <EditCoupon couponData={couponData} />
      <DeleteModal
        openModal={open}
        handleDelete={handleDeleteCoupon}
        onClose={() => dispatch(couponActions.deleteCouponModal())}
      />
    </>
  );
};
export default Coupon;
