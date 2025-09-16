// Veg.js
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./store"; 
import "./Veg.css";

// ✅ Import Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Veg() {
  const vegetables = useSelector((state) => state.product.veg || []);
  const dispatch = useDispatch();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate paginated items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vegetables.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(vegetables.length / itemsPerPage);

  // ✅ Handle Add to Cart with Toast
  const handleAddToCart = (veg) => {
    dispatch(addToCart(veg));
    toast.success(`${veg.name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <h1 className="text-center">Veg Items</h1>
      {/* Cards Grid */}
      <div className="veg-container">
        {currentItems.map((veg) => (
          <div key={veg.id} className="veg-card">
            <img src={veg.imageUrl} alt={veg.name} />
            <h3>{veg.name}</h3>
            <p>
              <b>Price:</b> ₹{veg.price} / kg
            </p>

            <button
              className="btn btn-success"
              onClick={() => handleAddToCart(veg)}
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

export default Veg;
