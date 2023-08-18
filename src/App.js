import { Route, Switch } from "react-router-dom";
import Layout from "./layout/layout";
import HomePage from "./pages/HomePage";
import Category from "./pages/category";
import Contact from "./pages/contactUs";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Product from "./pages/product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CartProvider from "./provider/cartProvider";
const App = () => {
  return (
    <CartProvider>
      <Layout>
        <ToastContainer rtl />
        <Switch>
          <Route path="/category" component={Category} />
          <Route path="/contactUs" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Layout>
    </CartProvider>
  );
};

export default App;
