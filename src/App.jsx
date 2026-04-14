import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useSelector, useDispatch } from "react-redux";
import { fetchShop } from "./slices/shopSlice";
import { useEffect } from "react";
import LeafLoader from "./components/LeafLoader";

export default function App() {
  const { loading } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShop());
  }, [dispatch]);

  if (loading) {
    return <LeafLoader />;
  }
  return <RouterProvider router={router} />;
}
