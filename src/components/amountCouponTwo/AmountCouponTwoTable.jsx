import { useDispatch } from "react-redux";
import { Button, Paper, Table, TableBody } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useGetAllAmountCouponsTwoQuery } from "../../store/amountCpnTwo/amountCouponTwo-actions";
import { amountCouponTwoActions } from "../../store/amountCpnTwo/amountCouponTwo-slice";

const AmountCouponTwoTable = ({ getData }) => {
  const dispatch = useDispatch();
  const { data: amountCouponTwoData } = useGetAllAmountCouponsTwoQuery();

  const tableAttributes = [
    "Eligibility Type",
    "Coupon Code",
    "Event Name",
    "Event Type",
    "Event Date",
    "Start Date",
    "End Date",
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
        {amountCouponTwoData && (
          <TableBody>
            {amountCouponTwoData.response.map((data) => (
              <TableRow
                key={data?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{data.eligibilityType}</TableCell>
                <TableCell align="center">{data?.couponCode}</TableCell>
                <TableCell align="center">{data?.eventName}</TableCell>
                <TableCell align="center">{data?.eventType}</TableCell>
                <TableCell align="center">
                  {new Date(data?.eventDate).toLocaleDateString()}
                </TableCell>
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
                        amountCouponTwoActions.showEditAmountCouponTwoModal()
                      );
                    }}
                  />
                  <Button
                    endIcon={<DeleteIcon sx={{ color: "#dc143c" }} />}
                    onClick={() => {
                      getData(data);
                      dispatch(
                        amountCouponTwoActions.deleteAmountCouponTwoModal()
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
export default AmountCouponTwoTable;
