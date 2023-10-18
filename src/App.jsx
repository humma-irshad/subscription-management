import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "./store/index";

import CouponPage from "./pages/Coupon";
import CustomerCouponPage from "./pages/CustomerCoupon";
import CustomerPage from "./pages/Customer";
import HomePage from "./pages/Home";
import ProductCouponPage from "./pages/ProductCoupon";
import SubscriptionAmountPage from "./pages/SubscriptionAmount";
import AmountCouponPage from "./pages/AmountCoupon";
import AmountCouponTwoPage from "./pages/AmountCouponTwo";
import WalletPage from "./pages/Wallet";
import ChildWalletPage from "./pages/ChildWallet";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <CustomerPage />,
        },
        { path: "coupon", element: <CouponPage /> },
        { path: "customer-coupon", element: <CustomerCouponPage /> },
        { path: "product-coupon", element: <ProductCouponPage /> },
        {
          path: "subscription-amount-coupon",
          element: <SubscriptionAmountPage />,
        },
        { path: "amount-coupon-eligibility", element: <AmountCouponPage /> },
        {
          path: "amount-coupon-eligibility-two",
          element: <AmountCouponTwoPage />,
        },
        { path: "wallet", element: <WalletPage /> },
        { path: "child-wallet", element: <ChildWalletPage /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
