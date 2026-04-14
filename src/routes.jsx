import { createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";

export const router = createHashRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/service/:serviceId",
    Component: Service,
  },
]);
