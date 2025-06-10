import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQty } = useCart();

  const incrementQty = (id, currentQty) => {
    updateQty(id, currentQty + 1);
  };

  const decrementQty = (id, currentQty) => {
    if (currentQty === 1) {
      removeFromCart(id);
    } else {
      updateQty(id, currentQty - 1);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow mb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
                <p className="text-indigo-600 font-semibold">₹{item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => decrementQty(item.id, item.quantity)}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold"
              >-</button>
              <span className="px-3 py-1 text-gray-700 font-medium">
                {item.quantity}
              </span>
              <button
                onClick={() => incrementQty(item.id, item.quantity)}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold"
              >+</button>
            </div>
            <button
              className="text-red-500 hover:underline font-medium ml-4"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
