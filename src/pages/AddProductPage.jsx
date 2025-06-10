import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({ title: "", price: "", image: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post("http://localhost:5000/products", product); // use this for localhost server
      await axios.post("https://json-server-products-tuej.onrender.com/products", product);
      setSuccess(true);
    } catch (err) {
      console.error("Error adding product", err);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={product.title}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          name="image"
          type="text"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Add Product
        </button>
      </form>

      {success && (
        <div className="mt-6 text-center">
          <p className="text-green-600 font-medium mb-2">Product added successfully!</p>
          <button
            onClick={() => navigate("/")}
            className="mt-2 inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-5 rounded-lg transition duration-200"
          >
            Go to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProduct;