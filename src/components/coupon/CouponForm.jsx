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

const CouponForm = ({ couponData, submitForm, onClose: closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      couponCode: couponData?.couponCode,
      name: couponData?.name,
      couponType: couponData?.couponType,
      value: couponData?.value,
      couponCalled: couponData?.couponCalled,
      validFrom: transformDate(couponData?.validFrom),
      validTo: transformDate(couponData?.validTo),
      expiredOn: transformDate(couponData?.expiredOn),
      description: couponData?.description,
      status: couponData?.status,
    },
  });

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Grid container sx={{ height: 400, gap: 2 }}>
        <FormControl sx={{ flexDirection: "row", gap: 2 }}>
          <Grid item xs={8}>
            <TextField
              label="Name"
              type="text"
              required
              {...register("name")}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Coupon Type"
              type="text"
              required
              {...register("couponType")}
            />
          </Grid>
        </FormControl>
        <FormControl fullWidth sx={{ flexDirection: "row", gap: 2 }}>
          <Grid item xs={8}>
            <TextField
              label="Value"
              type="number"
              required
              {...register("value")}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Coupon Called"
              type="text"
              required
              {...register("couponCalled")}
            />
          </Grid>
        </FormControl>
        <FormControl fullWidth sx={{ flexDirection: "row" }}>
          <Grid item xs={8}>
            <TextField
              label="Valid From"
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
              required
              {...register("validFrom")}
            />
          </Grid>
          <Grid>
            <TextField
              label="Valid To"
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
              required
              {...register("validTo")}
            />
          </Grid>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Expired On"
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
            required
            {...register("expiredOn")}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Description"
            type="text"
            required
            {...register("description")}
          />
        </FormControl>
        {couponData && (
          <FormControl fullWidth sx={{ flexDirection: "column", gap: 2 }}>
            <InputLabel id="status">Status</InputLabel>
            <Select
              label="Status"
              defaultValue={couponData?.status}
              required
              {...register("status")}
            >
              <MenuItem value={0}>Inactive</MenuItem>
              <MenuItem value={1}>Active</MenuItem>
            </Select>
          </FormControl>
        )}
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: "row-reverse", paddingBottom: 2 }}
        >
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              sx={{ color: "#fff" }}
              children={couponData ? "Update" : "Submit"}
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
export default CouponForm;
