import { useDispatch } from "react-redux";
import { Button, Paper, Table, TableBody } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useGetAllAmountCouponsQuery } from "../../store/amountCoupon/amountCoupon-actions";
import { amountCouponActions } from "../../store/amountCoupon/amountCoupon-slice";

const AmountCouponTable = ({ getData }) => {
  const dispatch = useDispatch();
  const { data: amountCouponData } = useGetAllAmountCouponsQuery();

  const tableAttributes = [
    "Eligibility Type",
    "Coupon Code",
    "Amount Min",
    "Amount Max",
    "Start Date",
    "Expire Date",
    "Status",
    "Action",
  ];

  return (
    <TableContainer component={Paper} elevation={5}>
      <Table sx={{ minWidth: 650 }} aria-label="amountCoupon table">
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
        {amountCouponData && (
          <TableBody>
            {amountCouponData.response.map((data) => (
              <TableRow
                key={data?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{data.eligibilityType}</TableCell>
                <TableCell align="center">{data?.couponCode}</TableCell>
                <TableCell align="center">{data?.amountMin}</TableCell>
                <TableCell align="center">{data?.amountMax}</TableCell>
                <TableCell align="center">
                  {new Date(data?.startDate).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  {new Date(data?.expireDate).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  {data?.status === 1 ? "Active" : "Inactive"}
                </TableCell>
                <TableCell align="center">
                  <Button
                    endIcon={<EditIcon sx={{ color: "#203ec7" }} />}
                    onClick={() => {
                      getData(data);
                      dispatch(amountCouponActions.showEditAmountCouponModal());
                    }}
                  />
                  <Button
                    endIcon={<DeleteIcon sx={{ color: "#dc143c" }} />}
                    onClick={() => {
                      getData(data);
                      dispatch(amountCouponActions.deleteAmountCouponModal());
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
export default AmountCouponTable;
