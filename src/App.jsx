import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import AddProductPage from "./pages/AddProductPage";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/add-product',
        element: <AddProductPage />,
      },
    ],
  },
],
  {
    basename: "/gadgets-products-cart/",
  }
);

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
