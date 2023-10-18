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

const WalletForm = ({ walletData, submitForm, onClose: closeModal }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: walletData?.walletId,
      customerId: walletData?.customerId,
      walletName: walletData?.walletName,
      walletType: walletData?.walletType,
      walletAmount: walletData?.walletAmount,
      description: walletData?.description,
      status: walletData?.status,
    },
  });

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Grid container sx={{ height: 360 }}>
        <FormControl sx={{ flexDirection: "row", gap: 1 }}>
          <TextField
            label="Customer Id"
            type="text"
            required
            {...register("customerId")}
          />
          <TextField
            label="Wallet Name"
            type="text"
            required
            {...register("walletName")}
          />
        </FormControl>
        <FormControl fullWidth sx={{ flexDirection: "row", gap: 1 }}>
          <TextField
            label="Wallet Type"
            type="text"
            required
            {...register("walletType")}
          />
          <TextField
            label="Wallet Amount"
            type="number"
            required
            {...register("walletAmount")}
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
        {walletData && (
          <FormControl fullWidth>
            <InputLabel id="status">Status</InputLabel>
            <Select
              label="Status"
              defaultValue={walletData?.status}
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
              children={walletData ? "Update" : "Submit"}
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
export default WalletForm;
