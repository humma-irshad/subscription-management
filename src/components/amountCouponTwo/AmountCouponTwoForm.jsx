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

const AmountCouponTwoForm = ({
  amountCouponTwoData,
  submitForm,
  onClose: closeModal,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: amountCouponTwoData?.id,
      eligibilityType: amountCouponTwoData?.eligibilityType,
      couponCode: amountCouponTwoData?.couponCode,
      eventName: amountCouponTwoData?.eventName,
      eventType: amountCouponTwoData?.eventType,
      eventDate: transformDate(amountCouponTwoData?.eventDate),
      startDate: transformDate(amountCouponTwoData?.startDate),
      endDate: transformDate(amountCouponTwoData?.endDate),
      status: amountCouponTwoData?.status,
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
            <TextField label="Event Type" required {...register("eventType")} />
          </Grid>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Event Name"
            type="text"
            required
            {...register("eventName")}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField label="Event Date" required {...register("eventDate")} />
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
        {amountCouponTwoData && (
          <FormControl fullWidth>
            <InputLabel id="status">Status</InputLabel>
            <Select
              label="Status"
              defaultValue={amountCouponTwoData?.status}
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
              children={amountCouponTwoData ? "Update" : "Submit"}
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
export default AmountCouponTwoForm;
