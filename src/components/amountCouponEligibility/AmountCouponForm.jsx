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

const AmountCouponForm = ({
  amountCouponData,
  submitForm,
  onClose: closeModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: amountCouponData?.id,
      eligibilityType: amountCouponData?.eligibilityType,
      couponCode: amountCouponData?.couponCode,
      amountMin: amountCouponData?.amountMin,
      amountMax: amountCouponData?.amountMax,
      startDate: transformDate(amountCouponData?.startDate),
      expireDate: transformDate(amountCouponData?.expireDate),
      status: amountCouponData?.status,
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
              label="Coupon Code"
              required
              {...register("couponCode")}
            />
          </Grid>
        </FormControl>
        <FormControl fullWidth sx={{ flexDirection: "row", gap: 1 }}>
          <Grid item xs={8}>
            <TextField
              label="Amount Min"
              type="number"
              required
              {...register("amountMin")}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Amount Max"
              type="number"
              required
              {...register("amountMax")}
            />
          </Grid>
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
            label="Expire Date"
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
            required
            {...register("expireDate")}
          />
        </FormControl>
        {amountCouponData && (
          <FormControl fullWidth>
            <InputLabel id="status">Status</InputLabel>
            <Select
              label="Status"
              defaultValue={amountCouponData?.status}
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
              children={amountCouponData ? "Update" : "Submit"}
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
export default AmountCouponForm;
