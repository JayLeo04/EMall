import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
// import LoginPage from "./pages/login";
// import ItemPage from "./pages/item";
// import CartPage from "./pages/cart";
// import OrderPage from "./pages/order";
// import RankPage from "./pages/rank";

export default function BasicRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        {/*<Route path="/login" element={<LoginPage />} />*/}
        {/*<Route path="/item/:id" element={<ItemPage />} />*/}
        {/*<Route path="/cart" element={<CartPage />} />*/}
        {/*<Route path="/order" element={<OrderPage />} />*/}
        {/*<Route path="/rank" element={<RankPage />} />*/}
      </Routes>
    </BrowserRouter>
  );
}
