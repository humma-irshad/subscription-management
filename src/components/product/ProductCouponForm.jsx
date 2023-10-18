import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import format from "date-fns/format";

const transformDate = (date) =>
  date ? format(new Date(date), "yyyy-MM-dd") : null;

const ProductCouponForm = ({
  productCouponData,
  submitForm,
  onClose: closeModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: productCouponData?.id,
      productName: productCouponData?.productName,
      productType: productCouponData?.productType,
      packageName: productCouponData?.packageName,
      packageType: productCouponData?.packageType,
      eligibilityType: productCouponData?.eligibilityType,
      startDate: transformDate(productCouponData?.startDate),
      endDate: transformDate(productCouponData?.endDate),
      status: productCouponData?.status,
    },
  });

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Grid container sx={{ height: 425 }}>
        <FormControl sx={{ flexDirection: "row", gap: 1 }}>
          <Grid item xs={8}>
            <TextField
              label="Product Name"
              type="text"
              required
              {...register("productName")}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Product Type"
              type="text"
              required
              {...register("productType")}
            />
          </Grid>
        </FormControl>
        <FormControl fullWidth sx={{ flexDirection: "row", gap: 1 }}>
          <Grid item xs={8}>
            <TextField
              label="Package Name"
              type="text"
              required
              {...register("packageName")}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Package Type"
              type="text"
              required
              {...register("packageType")}
            />
          </Grid>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Eligibility Type"
            type="text"
            required
            {...register("eligibilityType")}
          />
        </FormControl>
        <FormControl fullWidth sx={{ flexDirection: "column", gap: 2 }}>
          <TextField
            label="Start Date"
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
            required
            {...register("startDate")}
          />
          <TextField
            label="End Date"
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
            required
            {...register("endDate")}
          />
        </FormControl>
        {productCouponData && (
          <FormControl fullWidth>
            <InputLabel id="status">Status</InputLabel>
            <Select
              label="Status"
              defaultValue={productCouponData?.status}
              {...register("status")}
            >
              <MenuItem value={0}>Inactive</MenuItem>
              <MenuItem value={1}>Active</MenuItem>
            </Select>
          </FormControl>
        )}
        <Grid container spacing={2} sx={{ flexDirection: "row-reverse" }}>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              sx={{ color: "#fff" }}
              children={productCouponData ? "Update" : "Submit"}
            />
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              sx={{ color: "primaryblue" }}
              onClick={closeModal}
              children="Cancel"
            />
          </Grid>
        </Grid>
      </Grid>
    </Form>
  );
};
export default ProductCouponForm;
