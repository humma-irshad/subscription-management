import { Outlet } from "react-router-dom";

import MainNavigation from "../components/navigation/MainNavigation";

const HomePage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default HomePage;
