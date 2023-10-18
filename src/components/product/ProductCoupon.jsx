import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useDeleteProductCouponMutation } from "../../store/productCoupon/productCoupon-actions";
import { productCouponActions } from "../../store/productCoupon/productCoupon-slice";

import CreateProductCoupon from "./CreateProductCoupon";
import ProductTable from "./ProductTable";
import EditProductCoupon from "./EditProductCopon";
import DeleteModal from "../UI/DeleteModal";

const ProductCoupon = () => {
  const [productCouponData, setProductCouponData] = useState();
  const open = useSelector(
    (state) => state.productCouponReducer.deleteProductCouponModal
  );
  const dispatch = useDispatch();
  const [deleteProductCoupon] = useDeleteProductCouponMutation();

  const getData = (data) => {
    setProductCouponData(data);
  };

  const handleDeleteProductCoupon = () => {
    deleteProductCoupon(productCouponData?.id).then(() => {
      dispatch(productCouponActions.deleteProductCouponModal());
    });
  };

  return (
    <>
      <Stack direction="row" margin="1.2rem" justifyContent="space-between">
        <Typography variant="h5">Product Coupon</Typography>
        <Button
          endIcon={
            <AddIcon
              sx={{ color: "#808080" }}
              onClick={() => {
                dispatch(productCouponActions.showCreateProductCouponModal());
              }}
            />
          }
        />
      </Stack>
      <ProductTable getData={getData} />
      <CreateProductCoupon />
      <EditProductCoupon productCouponData={productCouponData} />
      <DeleteModal
        openModal={open}
        handleDelete={handleDeleteProductCoupon}
        onClose={() => {
          dispatch(productCouponActions.deleteProductCouponModal());
        }}
      />
    </>
  );
};
export default ProductCoupon;
