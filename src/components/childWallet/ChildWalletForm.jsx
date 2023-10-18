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

const ChildWalletForm = ({
  childWalletData,
  submitForm,
  onClose: closeModal,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: childWalletData?.walletId,
      customerId: childWalletData?.customerId,
      subChildId: childWalletData?.subChildId,
      name: childWalletData?.name,
      walletType: childWalletData?.walletType,
      description: childWalletData?.description,
      status: childWalletData?.status,
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
            label="Sub-Child Id"
            type="text"
            required
            {...register("subChildId")}
          />
        </FormControl>
        <FormControl fullWidth sx={{ flexDirection: "row", gap: 1 }}>
          <TextField label="Name" type="text" required {...register("name")} />
          <TextField
            label="Wallet Type"
            required
            {...register("walletType")}
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
        {childWalletData && (
          <FormControl fullWidth>
            <InputLabel id="status">Status</InputLabel>
            <Select
              label="Status"
              defaultValue={childWalletData?.status}
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
              children={childWalletData ? "Update" : "Submit"}
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
export default ChildWalletForm;
