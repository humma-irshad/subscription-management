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

const CustomerCouponForm = ({
  customerCouponData,
  submitForm,
  onClose: closeModal,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: customerCouponData?.id,
      eligibilityType: customerCouponData?.eligibilityType,
      customerType: customerCouponData?.customerType,
      customerNumber: customerCouponData?.customerNumber,
      customerRange: customerCouponData?.customerRange,
      couponCode: customerCouponData?.couponCode,
      startDate: transformDate(customerCouponData?.startDate),
      endDate: transformDate(customerCouponData?.endDate),
      status: customerCouponData?.status,
    },
  });

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Grid container sx={{ height: 400 }}>
        <FormControl sx={{ flexDirection: "row", gap: 1 }}>
          <Grid item xs={8}>
            <TextField
              label="Eligibility Type"
              type="text"
              required
              {...register("eligibilityType")}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Customer Type"
              type="text"
              required
              {...register("customerType")}
            />
          </Grid>
        </FormControl>
        <FormControl fullWidth sx={{ flexDirection: "row", gap: 1 }}>
          <Grid item xs={8}>
            <TextField
              label="Customer Number"
              type="number"
              required
              {...register("customerNumber")}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Customer Range"
              type="number"
              required
              {...register("customerRange")}
            />
          </Grid>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Coupon Code"
            required
            {...register("couponCode")}
          />
        </FormControl>
        <FormControl fullWidth sx={{ flexDirection: "row" }}>
          <Grid item xs={8}>
            <TextField
              label="Start Date"
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
              required
              {...register("startDate")}
            />
          </Grid>
          <Grid item>
            <TextField
              label="End Date"
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
              required
              {...register("endDate")}
            />
          </Grid>
        </FormControl>
        {customerCouponData && (
          <FormControl fullWidth>
            <InputLabel id="status">Status</InputLabel>
            <Select
              label="Status"
              defaultValue={customerCouponData?.status}
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
              children={customerCouponData ? "Update" : "Submit"}
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
export default CustomerCouponForm;
