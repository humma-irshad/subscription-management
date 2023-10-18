import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import { useEditAmountCouponTwoMutation } from "../../store/amountCpnTwo/amountCouponTwo-actions";
import { amountCouponTwoActions } from "../../store/amountCpnTwo/amountCouponTwo-slice";

import AmountCouponTwoForm from "./AmountCouponTwoForm";

const EditAmountCouponTwo = ({ amountCouponTwoData }) => {
  const open = useSelector(
    (state) => state.amountCouponTwoReducer.editAmountCouponTwoModal
  );
  const dispatch = useDispatch();

  const [editAmountCouponTwo] = useEditAmountCouponTwoMutation();

  const submitForm = (data) => {
    editAmountCouponTwo(data).then(() =>
      dispatch(amountCouponTwoActions.showEditAmountCouponTwoModal())
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
        dispatch(amountCouponTwoActions.showEditAmountCouponTwoModal())
      }
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Amount Coupon Eligibility Two Edit
        </Typography>
        <AmountCouponTwoForm
          amountCouponTwoData={amountCouponTwoData}
          submitForm={submitForm}
          onClose={() =>
            dispatch(amountCouponTwoActions.showEditAmountCouponTwoModal())
          }
        />
      </Box>
    </Modal>
  );
};
export default EditAmountCouponTwo;
