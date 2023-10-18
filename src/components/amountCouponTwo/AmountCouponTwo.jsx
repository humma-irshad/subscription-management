import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useDeleteAmountCouponTwoMutation } from "../../store/amountCpnTwo/amountCouponTwo-actions";
import { amountCouponTwoActions } from "../../store/amountCpnTwo/amountCouponTwo-slice";

import AmountCouponTwoTable from "./AmountCouponTwoTable";
import CreateAmountCouponTwo from "./CreateAmountCouponTwo";
import EditAmountCouponTwo from "./EditAmountCouponTwo";
import DeleteModal from "../UI/DeleteModal";

const AmountCouponTwo = () => {
  const [amountCouponTwoData, setAmountCouponTwoData] = useState();
  const open = useSelector(
    (state) => state.amountCouponTwoReducer.deleteAmountCouponTwoModal
  );
  const dispatch = useDispatch();
  const [deleteAmountCouponTwo] = useDeleteAmountCouponTwoMutation();

  const getData = (data) => {
    setAmountCouponTwoData(data);
  };

  const handleDeleteAmountCouponTwo = () => {
    deleteAmountCouponTwo(amountCouponTwoData?.id).then(() => {
      dispatch(amountCouponTwoActions.deleteAmountCouponTwoModal());
    });
  };

  return (
    <>
      <Stack direction="row" margin="1.2rem" justifyContent="space-between">
        <Typography variant="h5">Amount Coupon Eligibility Two</Typography>
        <Button
          endIcon={
            <AddIcon
              sx={{ color: "#808080" }}
              onClick={() =>
                dispatch(
                  amountCouponTwoActions.showCreateAmountCouponTwoModal()
                )
              }
            />
          }
        />
      </Stack>
      <AmountCouponTwoTable getData={getData} />
      <CreateAmountCouponTwo />
      <EditAmountCouponTwo amountCouponTwoData={amountCouponTwoData} />
      <DeleteModal
        openModal={open}
        handleDelete={handleDeleteAmountCouponTwo}
        onClose={() =>
          dispatch(amountCouponTwoActions.deleteAmountCouponTwoModal())
        }
      />
    </>
  );
};
export default AmountCouponTwo;
