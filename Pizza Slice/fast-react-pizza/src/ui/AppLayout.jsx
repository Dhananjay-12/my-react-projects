import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import Loader from "../ui/Loader";

import { Outlet, useNavigation } from "react-router-dom";
export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <div className="scrollbar-hide overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverView />
    </div>
  );
}
