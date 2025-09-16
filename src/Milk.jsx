// Milk.js
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./store"; 
import "./Milk.css";

// ✅ Import Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Milk() {
  const milkItems = useSelector((state) => state.product.milk || []);
  const dispatch = useDispatch();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate paginated items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = milkItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(milkItems.length / itemsPerPage);

  // ✅ Handle Add to Cart with Toast
  const handleAddToCart = (milk) => {
    dispatch(addToCart(milk));
    toast.success(`${milk.name} added to cart! 🥛`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <h1 className="text-center">Milk Items</h1>
      {/* Cards Grid */}
      <div className="milk-container">
        {currentItems.map((milk) => (
          <div key={milk.id} className="milk-card">
            <img src={milk.imageUrl} alt={milk.name} />
            <h3>{milk.name}</h3>
            <p>
              <b>Price:</b> ₹{milk.price}
            </p>
            

            <button
              className="btn btn-success"
              onClick={() => handleAddToCart(milk)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ⬅ Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => setCurrentPage(index + 1)} 
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next ➡
        </button>
      </div>
      {/* Footer */}
      <footer className="home-footer">
        <p>© 2025 MyStore. All rights reserved.</p>
        <p>📞 +91 79816 78161 | ✉️ support@sizzlespice.com</p>
        <p>🌐 Facebook | 📸 Instagram | 🐦 Twitter</p>
      </footer>

      {/* ✅ Toast Container */}
      <ToastContainer />
    </>
  );
}

export default Milk;
