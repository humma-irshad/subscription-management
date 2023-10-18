import { useDispatch } from "react-redux";
import {
  Button,
  Paper,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useGetAllCustomersQuery } from "../../store/customer/customer-actions";
import { customerActions } from "../../store/customer/customer-slice";

const CustomerTable = ({ getData }) => {
  const { data: customerData } = useGetAllCustomersQuery();
  const dispatch = useDispatch();

  const tableAttributes = [
    "First Name",
    "Last Name",
    "Description",
    "Email",
    "Phone",
    "Status",
    "Action",
  ];

  return (
    <>
      <TableContainer component={Paper} elevation={5}>
        <Table sx={{ minWidth: 650 }} aria-label="customer table">
          <TableHead>
            <TableRow>
              {tableAttributes.map((tableAttribute, index) => (
                <TableCell
                  key={`${tableAttribute + index}`}
                  sx={{ fontWeight: "bold" }}
                  align="center"
                  children={tableAttribute}
                />
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {customerData &&
              customerData.response.map((data) => (
                <TableRow
                  key={data?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{data?.firstName}</TableCell>
                  <TableCell align="center">{data?.lastName}</TableCell>
                  <TableCell align="center">{data?.description}</TableCell>
                  <TableCell align="center">{data?.email}</TableCell>
                  <TableCell align="center">{data?.phone}</TableCell>
                  <TableCell align="center">
                    {data?.status === 1 ? "Active" : "Inactive"}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      startIcon={
                        <EditIcon
                          sx={{ color: "#203ec7" }}
                          onClick={() => {
                            getData(data);
                            dispatch(customerActions.showEditCouponModal());
                          }}
                        />
                      }
                    />
                    <Button
                      startIcon={<DeleteIcon sx={{ color: "#dc143c" }} />}
                      onClick={() => {
                        getData(data);
                        dispatch(customerActions.deleteCustomerModal());
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default CustomerTable;
