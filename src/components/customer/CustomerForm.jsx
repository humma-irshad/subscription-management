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

const CustomerForm = ({ customerData, submitForm, onClose: closeModal }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: customerData?.id,
      firstName: customerData?.firstName,
      lastName: customerData?.lastName,
      email: customerData?.email,
      phone: customerData?.phone,
      customerType: customerData?.customerType,
      description: customerData?.description,
      status: customerData?.status,
    },
  });

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Grid container sx={{ height: 400, gap: 2 }}>
        <FormControl sx={{ flexDirection: "row", gap: 2 }}>
          <Grid item xs={8}>
            <TextField
              label="First Name"
              type="text"
              required
              {...register("firstName")}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Last Name"
              type="text"
              required
              {...register("lastName")}
            />
          </Grid>
        </FormControl>
        <FormControl fullWidth sx={{ flexDirection: "row", gap: 2 }}>
          <Grid item xs={8}>
            <TextField
              label="email"
              type="email"
              required
              {...register("email")}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Phone"
              type="tel"
              required
              {...register("phone")}
            />
          </Grid>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="customerType"
            type="tel"
            required
            {...register("customerType")}
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
        {customerData && (
          <FormControl fullWidth sx={{ flexDirection: "column", gap: 2 }}>
            <InputLabel id="status">Status</InputLabel>
            <Select
              label="Status"
              defaultValue={customerData?.status}
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
              children={customerData ? "Update" : "Submit"}
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
export default CustomerForm;
