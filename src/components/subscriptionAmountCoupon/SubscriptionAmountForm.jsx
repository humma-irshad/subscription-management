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

const SubscriptionAmountForm = ({
  subscriptionAmountData,
  submitForm,
  onClose: closeModal,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: subscriptionAmountData?.id,
      eligibilityType: subscriptionAmountData?.eligibilityType,
      subscriptionName: subscriptionAmountData?.subscriptionName,
      subscriptionFrequency: subscriptionAmountData?.subscriptionFrequency,
      paymentTerms: subscriptionAmountData?.paymentTerms,
      paymentType: subscriptionAmountData?.paymentType,
      couponCode: subscriptionAmountData?.couponCode,
      startDate: transformDate(subscriptionAmountData?.startDate),
      endDate: transformDate(subscriptionAmountData?.endDate),
      status: subscriptionAmountData?.status,
    },
  });

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Grid container sx={{ height: 425 }}>
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
              label="Subscription Name"
              type="text"
              required
              {...register("subscriptionName")}
            />
          </Grid>
        </FormControl>
        <FormControl fullWidth sx={{ flexDirection: "row", gap: 1 }}>
          <Grid item xs={8}>
            <TextField
              label="Subscription Frequency"
              type="number"
              required
              {...register("subscriptionFrequency")}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Payment Terms"
              type="text"
              required
              {...register("paymentTerms")}
            />
          </Grid>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Payment Type"
            type="text"
            required
            {...register("paymentType")}
          />
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
        {subscriptionAmountData && (
          <FormControl fullWidth>
            <InputLabel id="status">Status</InputLabel>
            <Select
              label="Status"
              defaultValue={subscriptionAmountData?.status}
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
              children={subscriptionAmountData ? "Update" : "Submit"}
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
export default SubscriptionAmountForm;
