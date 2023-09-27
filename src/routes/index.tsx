import { Route, Routes as RouteLib } from "react-router-dom";
import { Home } from "../pages/Home";
import { Checkout } from "../pages/Checkout";
import { Success } from "../pages/Success";

export const Routes = () => {
  return (
    <RouteLib>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
    </RouteLib>
  );
};
