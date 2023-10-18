import { useDispatch } from "react-redux";
import { Button, Paper, Table, TableBody } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useGetAllSubscriptionAmountQuery } from "../../store/subscriptionAmount/subscriptionAmount-actions";
import { subscriptionAmountActions } from "../../store/subscriptionAmount/subscriptionAmount-slice";

const SubscriptionAmountTable = ({ getData }) => {
  const dispatch = useDispatch();
  const { data: subscriptionAmountData } = useGetAllSubscriptionAmountQuery();

  const tableAttributes = [
    "Eligibility Type",
    "Subscription Name",
    "Subscription Frequency",
    "Payment Terms",
    "Payment Type",
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
        {subscriptionAmountData && (
          <TableBody>
            {subscriptionAmountData.response.map((data) => (
              <TableRow
                key={data?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{data?.eligibilityType}</TableCell>
                <TableCell align="center">{data?.subscriptionName}</TableCell>
                <TableCell align="center">
                  {data?.subscriptionFrequency}
                </TableCell>
                <TableCell align="center">{data?.paymentTerms}</TableCell>
                <TableCell align="center">{data?.paymentType}</TableCell>
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
                        subscriptionAmountActions.showEditSubscriptionAmountModal()
                      );
                    }}
                  />
                  <Button
                    endIcon={<DeleteIcon sx={{ color: "#dc143c" }} />}
                    onClick={() => {
                      getData(data);
                      dispatch(
                        subscriptionAmountActions.deleteSubscriptionAmountModal()
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
export default SubscriptionAmountTable;
