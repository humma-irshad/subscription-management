import { useDispatch } from "react-redux";
import { Button, Paper, Table, TableBody } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useGetAllCustomerCouponsQuery } from "../../store//customerCoupon/customerCoupon-actions";
import { customerCouponActions } from "../../store//customerCoupon/customerCoupon-slice";

const CustomerCouponTable = ({ getData }) => {
  const dispatch = useDispatch();
  const { data: customerCouponData } = useGetAllCustomerCouponsQuery();

  const tableAttributes = [
    "Eligibility Type",
    "Customer Type",
    "Customer Number",
    "Customer Range",
    "Coupon Code",
    "Start Date",
    "End Date",
    "Status",
    "Action",
  ];

  return (
    <TableContainer component={Paper} elevation={5}>
      <Table sx={{ minWidth: 650 }} aria-label="coupon table">
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
        {customerCouponData && (
          <TableBody>
            {customerCouponData.response.map((data) => (
              <TableRow
                key={data?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{data?.eligibilityType}</TableCell>
                <TableCell align="center">{data?.customerType}</TableCell>
                <TableCell align="center">{data?.customerNumber}</TableCell>
                <TableCell align="center">{data?.customerRange}</TableCell>
                <TableCell align="center">{data?.couponCode}</TableCell>
                <TableCell align="center">
                  {new Date(data?.startDate).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  {new Date(data?.endDate).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  {data?.status === 1 ? "Active" : "Inactive"}
                </TableCell>
                <TableCell align="center">
                  <Button
                    endIcon={<EditIcon sx={{ color: "#203ec7" }} />}
                    onClick={() => {
                      getData(data);
                      dispatch(
                        customerCouponActions.showEditCustomerCouponModal()
                      );
                    }}
                  />
                  <Button
                    endIcon={<DeleteIcon sx={{ color: "#dc143c" }} />}
                    onClick={() => {
                      getData(data);
                      dispatch(
                        customerCouponActions.deleteCustomerCouponModal()
                      );
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};
export default CustomerCouponTable;
