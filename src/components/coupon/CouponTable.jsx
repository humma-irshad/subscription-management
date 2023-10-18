import { useDispatch } from "react-redux";
import { Button, Paper, Table, TableBody } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useGetAllCouponsQuery } from "../../store/coupon/coupon-actions";
import { couponActions } from "../../store/coupon/coupon-slice";

const CouponTable = ({ getCoupon }) => {
  const dispatch = useDispatch();
  const { data: couponData } = useGetAllCouponsQuery();

  const tableAttributes = [
    "Name",
    "Description",
    "Coupon Type",
    "Value",
    "Discount Image URL",
    "Coupon Called",
    "Valid From",
    "Valid To",
    "Created On",
    "Expired On",
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
        {couponData && (
          <TableBody>
            {couponData.response.map((data) => (
              <TableRow
                key={data?.couponCode}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{data.name}</TableCell>
                <TableCell align="center">{data?.description}</TableCell>
                <TableCell align="center">{data?.couponType}</TableCell>
                <TableCell align="center">{data?.value}</TableCell>
                <TableCell align="center">{data?.discountImageUrl}</TableCell>
                <TableCell align="center">{data?.couponCalled}</TableCell>
                <TableCell align="center">
                  {new Date(data?.validFrom).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  {new Date(data?.validTo).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  {new Date(data?.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  {new Date(data?.expiredOn).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  {data?.status === 1 ? "Active" : "Inactive"}
                </TableCell>
                <TableCell align="center">
                  <Button
                    endIcon={<EditIcon sx={{ color: "#203ec7" }} />}
                    onClick={() => {
                      getCoupon(data);
                      dispatch(couponActions.showEditCouponModal());
                    }}
                  />
                  <Button
                    endIcon={<DeleteIcon sx={{ color: "#dc143c" }} />}
                    onClick={() => {
                      getCoupon(data);
                      dispatch(couponActions.deleteCouponModal());
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
export default CouponTable;
