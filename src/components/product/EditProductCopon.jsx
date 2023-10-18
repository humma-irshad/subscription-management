import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";

import ProductCouponForm from "./ProductCouponForm";
import { productCouponActions } from "../../store/productCoupon/productCoupon-slice";
import { useEditProductCouponMutation } from "../../store/productCoupon/productCoupon-actions";

const EditProductCoupon = ({ productCouponData }) => {
  const open = useSelector(
    (state) => state.productCouponReducer.editProductCouponModal
  );
  const dispatch = useDispatch();

  const [editProductCoupon] = useEditProductCouponMutation();

  const submitForm = (productCouponData) => {
    editProductCoupon(productCouponData).then(() =>
      dispatch(productCouponActions.showEditProductCouponModal())
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
        dispatch(productCouponActions.showEditProductCouponModal())
      }
    >
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" marginBottom={3}>
          Product Coupon Edit
        </Typography>
        <ProductCouponForm
          productCouponData={productCouponData}
          submitForm={submitForm}
          onClose={() =>
            dispatch(productCouponActions.showEditProductCouponModal())
          }
        />
      </Box>
    </Modal>
  );
};
export default EditProductCoupon;
