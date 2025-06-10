import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-600">🛍️ CartApp</Link>
      <Link to="/add-product" className="relative text-indigo-600 font-medium">
        Add Products
      </Link>
      <Link to="/cart" className="relative text-indigo-600 font-medium">
        Cart ({cart.length})
      </Link>
    </nav>
  );
};

export default Navbar;
