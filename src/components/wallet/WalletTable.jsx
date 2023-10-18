import { useDispatch } from "react-redux";
import { Button, Paper, Table, TableBody } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useGetWalletsQuery } from "../../store/wallet/wallet-actions";
import { walletActions } from "../../store/wallet/wallet-slice"

const WalletTable = ({ getData }) => {
  const dispatch = useDispatch();
  const { data: walletData } = useGetWalletsQuery();

  const tableAttributes = [
    "Customer Id",
    "Wallet Name",
    "Wallet Type",
    "Wallet Amount",
    "Description",
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
        {walletData && (
          <TableBody>
            {walletData.response.map((data) => (
              <TableRow
                key={data?.walletId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{data?.customerId}</TableCell>
                <TableCell align="center">{data?.walletName}</TableCell>
                <TableCell align="center">{data?.walletType}</TableCell>
                <TableCell align="center">{data?.walletAmount}</TableCell>
                <TableCell align="center">{data?.description}</TableCell>
                <TableCell align="center">
                  {data?.status === 1 ? "Active" : "Inactive"}
                </TableCell>
                <TableCell align="center">
                  <Button
                    endIcon={<EditIcon sx={{ color: "#203ec7" }} />}
                    onClick={() => {
                      dispatch(
                        walletActions.showEditWalletModal()
                      );
                      getData(data);
                    }}
                  />
                  <Button
                    endIcon={<DeleteIcon sx={{ color: "#dc143c" }} />}
                    onClick={() => {
                      dispatch(walletActions.deleteWalletModal());
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
export default WalletTable;
