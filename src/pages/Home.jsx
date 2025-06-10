import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:5000/products").then((res) => setProducts(res.data)); //use this for localhost server
    axios.get("https://json-server-products-tuej.onrender.com/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <motion.div
      className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {products.map((p) => (
        <motion.div
          key={p.id}
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
        >
          <ProductCard product={p} />
        </motion.div>

      ))}
    </motion.div>
  );
};

export default Home;
