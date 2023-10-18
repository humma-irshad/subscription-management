import { useDispatch } from "react-redux";
import { Button, Paper, Table, TableBody } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useGetAllProductCouponsQuery } from "../../store/productCoupon/productCoupon-actions";
import { productCouponActions } from "../../store/productCoupon/productCoupon-slice";

const ProductTable = ({ getData }) => {
  const dispatch = useDispatch();
  const { data: productCouponData } = useGetAllProductCouponsQuery();

  const tableAttributes = [
    "Product Name",
    "Product Type",
    "Package Name",
    "Package Type",
    "Eligibility Type",
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
        {productCouponData && (
          <TableBody>
            {productCouponData.response.map((data) => (
              <TableRow
                key={data?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{data?.productName}</TableCell>
                <TableCell align="center">{data?.productType}</TableCell>
                <TableCell align="center">{data?.packageName}</TableCell>
                <TableCell align="center">{data?.packageType}</TableCell>
                <TableCell align="center">{data?.eligibilityType}</TableCell>
                <TableCell align="center">
                  {new Date(data.startDate).toLocaleDateString()}
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
                      dispatch(
                        productCouponActions.showEditProductCouponModal()
                      );
                      getData(data);
                    }}
                  />
                  <Button
                    endIcon={<DeleteIcon sx={{ color: "#dc143c" }} />}
                    onClick={() => {
                      dispatch(productCouponActions.deleteProductCouponModal());
                      getData(data);
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
export default ProductTable;
