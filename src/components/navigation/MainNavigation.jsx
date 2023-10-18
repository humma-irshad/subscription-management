import { useState } from "react";
import {
  AppBar,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const MainNavigation = () => {
  const [value, setValue] = useState("customer");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#203ec7" }} position="static">
        <Typography
          variant="h5"
          noWrap
          sx={{
            flexGrow: 1,
            display: { xs: "block", sm: "block" },
            padding: 2,
          }}
        >
          My App
        </Typography>
      </AppBar>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          borderBottom: "1.5px inset",
          textAlign: "center",
          minWidth: 400,
        }}
      >
        <BottomNavigationAction
          sx={{
            "& .Mui-selected": {
              paddingInline: 2.5,
              paddingY: 2.5,
              borderBottom: "1.5px solid #203ec7",
            },
          }}
          LinkComponent={Link}
          to="/"
          label="Customer"
          value="customer"
        />
        <BottomNavigationAction
          sx={{
            "& .Mui-selected": {
              addingInline: 2.5,
              paddingY: 2.5,
              borderBottom: "1.5px solid #203ec7",
            },
          }}
          LinkComponent={Link}
          to="/coupon"
          label="Coupon"
          value="coupon"
        />
        <BottomNavigationAction
          sx={{
            "& .Mui-selected": {
              addingInline: 2.5,
              paddingY: 2.5,
              borderBottom: "1.5px solid #203ec7",
            },
          }}
          LinkComponent={Link}
          to="/customer-coupon"
          label="Customer Coupon"
          value="customer coupon"
        />
        <BottomNavigationAction
          sx={{
            "& .Mui-selected": {
              addingInline: 2.5,
              paddingY: 2.5,
              borderBottom: "1.5px solid #203ec7",
            },
          }}
          label="Product Coupon"
          value="product coupon"
          LinkComponent={Link}
          to="/product-coupon"
        />
        <BottomNavigationAction
          sx={{
            "& .Mui-selected": {
              addingInline: 2.5,
              paddingY: 1.7,
              borderBottom: "1.5px solid #203ec7",
            },
          }}
          label="Subscription Amount Coupon"
          value="subscription amount coupon"
          LinkComponent={Link}
          to="/subscription-amount-coupon"
        />
        <BottomNavigationAction
          sx={{
            "& .Mui-selected": {
              addingInline: 2.5,
              paddingY: 1.7,
              borderBottom: "1.5px solid #203ec7",
            },
          }}
          label="Amount Coupon Eligibility"
          value="amount coupon eligibility"
          LinkComponent={Link}
          to="/amount-coupon-eligibility"
        />
        <BottomNavigationAction
          sx={{
            "& .Mui-selected": {
              addingInline: 2.5,
              paddingY: 1.7,
              borderBottom: "1.5px solid #203ec7",
            },
          }}
          label="Amount Coupon Eligibility Two"
          value="amount coupon eligibility two"
          LinkComponent={Link}
          to="/amount-coupon-eligibility-two"
        />
        <BottomNavigationAction
          sx={{
            "& .Mui-selected": {
              addingInline: 2.5,
              paddingY: 2.5,
              borderBottom: "1.5px solid #203ec7",
            },
          }}
          label="Wallet"
          value="wallet"
          LinkComponent={Link}
          to="/wallet"
        />
        <BottomNavigationAction
          sx={{
            "& .Mui-selected": {
              addingInline: 2.5,
              paddingY: 2.5,
              borderBottom: "1.5px solid #203ec7",
            },
          }}
          label="Child Wallet"
          value="child wallet"
          LinkComponent={Link}
          to="/child-wallet"
        />
      </BottomNavigation>
    </Box>
  );
};
export default MainNavigation;
