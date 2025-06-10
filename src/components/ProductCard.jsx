import { useCart } from "../context/CartContext";
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart, getQuantity } = useCart();

  const handleAddToCart = () => {
    addToCart(product);

    // setTimeout(() => {
      const qty = getQuantity(product.id);
      toast.success(`${product.title} Qty: ${qty} added to cart`, {
        icon: '🛒',
        style: {
          borderRadius: '8px',
          background: '#333',
          color: '#fff',
          padding: '12px 16px',
        },
      });
    // }, 200);
  };

  return (
    <div className="group p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] bg-white transition-transform duration-300">
      <div className="w-full h-48 overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain scale-140 group-hover:scale-100 transition-transform duration-500 ease-in-out"
        />
      </div>

      <h3 className="text-lg font-semibold mt-3 text-gray-900">{product.title}</h3>
      <p className="text-indigo-600 font-semibold text-base mt-1">₹{product.price}</p>

      <button
        onClick={handleAddToCart}
        className="mt-3 px-5 py-2 rounded-lg font-medium bg-indigo-600 text-white transition-colors duration-300 hover:bg-indigo-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
