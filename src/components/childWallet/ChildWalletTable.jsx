import { useDispatch } from "react-redux";
import { Button, Paper, Table, TableBody } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useGetChildWalletsQuery } from "../../store/childWallet/childWallet-actions";
import { childWalletActions } from "../../store/childWallet/childWallet-slice";

const ChildWalletTable = ({ getData }) => {
  const dispatch = useDispatch();
  const { data: chidlWalletData } = useGetChildWalletsQuery();

  const tableAttributes = [
    "Customer Id",
    "Sub-Child Id",
    "Name",
    "Wallet Type",
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
        {chidlWalletData && (
          <TableBody>
            {chidlWalletData.response.map((data) => (
              <TableRow
                key={data?.walletId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{data?.customerId}</TableCell>
                <TableCell align="center">{data?.subChildId}</TableCell>
                <TableCell align="center">{data?.name}</TableCell>
                <TableCell align="center">{data?.walletType}</TableCell>
                <TableCell align="center">{data?.description}</TableCell>
                <TableCell align="center">
                  {data?.status === 1 ? "Active" : "Inactive"}
                </TableCell>
                <TableCell align="center">
                  <Button
                    endIcon={<EditIcon sx={{ color: "#203ec7" }} />}
                    onClick={() => {
                      dispatch(childWalletActions.showEditChildWalletModal());
                      getData(data);
                    }}
                  />
                  <Button
                    endIcon={<DeleteIcon sx={{ color: "#dc143c" }} />}
                    onClick={() => {
                      dispatch(childWalletActions.deleteChildWalletModal());
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
export default ChildWalletTable;
