import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import Loader from "../ui/Loader";

import { Outlet, useNavigation } from "react-router-dom";
export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      {isLoading && <Loader />}

      <Header />

      <main>
        <h1>Content</h1>
        <Outlet />
      </main>
      <CartOverView />
    </div>
  );
}
