import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import ProductCouponForm from "./ProductCouponForm";
import { productCouponActions } from "../../store/productCoupon/productCoupon-slice";
import { useCreateProductCouponMutation } from "../../store/productCoupon/productCoupon-actions";

const CreateProductCoupon = () => {
  const open = useSelector(
    (state) => state.productCouponReducer.createProductCouponModal
  );
  const dispatch = useDispatch();

  const [createProductCoupon] = useCreateProductCouponMutation();

  const submitForm = (data) => {
    createProductCoupon(data).then(() =>
      dispatch(productCouponActions.showCreateProductCouponModal())
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
        dispatch(productCouponActions.showCreateProductCouponModal())
      }
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Product Coupon Create
        </Typography>
        <ProductCouponForm
          onClose={() =>
            dispatch(productCouponActions.showCreateProductCouponModal())
          }
          submitForm={submitForm}
        />
      </Box>
    </Modal>
  );
};
export default CreateProductCoupon;
