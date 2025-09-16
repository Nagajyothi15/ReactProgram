import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "./wishlistSlice";
import { addToCart } from "./cartSlice";
import { viewProduct } from "./productsSlice";
import { toast } from "react-toastify";
import "./Products.css";

function Products() {
  const products = useSelector(state => state.products.all);
  const [filtered, setFiltered] = useState(products);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const result = products.filter(p =>
      (category === "all" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [category, search, products]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Added to cart!");
  };

  const handleWishlist = (product) => {
    dispatch(addToWishlist(product));
    toast.info("Added to wishlist!");
  };

  const handleView = (product) => dispatch(viewProduct(product));

  return (
    <div className="products-container">
      <div className="filters mb-3">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="veg">Veg</option>
          <option value="nonveg">NonVeg</option>
          <option value="milk">Milk</option>
          <option value="drinks">Drinks</option>
          <option value="chocolate">Chocolate</option>
        </select>
      </div>

      <div className="product-grid">
        {filtered.map(p => (
          <div key={p.id} className="product-card" onClick={() => handleView(p)}>
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < p.rating ? "⭐" : "☆"}</span>
              ))}
            </div>
            <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
            <button onClick={() => handleWishlist(p)}>💖 Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
