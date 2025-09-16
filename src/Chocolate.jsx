// Chocolate.js
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./store"; 
import "./Chocolate.css";

// ✅ Import Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Chocolate() {
  const chocolateItems = useSelector((state) => state.product.chocolate || []);
  const dispatch = useDispatch();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate paginated items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = chocolateItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(chocolateItems.length / itemsPerPage);

  // ✅ Handle Add to Cart with Toast
  const handleAddToCart = (chocolate) => {
    dispatch(addToCart(chocolate));
    toast.success(`${chocolate.name} added to cart! 🍫`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <h1 className="text-center">Chocolates</h1>
      {/* Cards Grid */}
      <div className="chocolate-container">
        {currentItems.map((chocolate) => (
          <div key={chocolate.id} className="chocolate-card">
            <img src={chocolate.imageUrl} alt={chocolate.name} />
            <h3>{chocolate.name}</h3>
            <p>
              <b>Price:</b> ₹{chocolate.price}
            </p>
            

            <button
              className="btn btn-success"
              onClick={() => handleAddToCart(chocolate)}
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

export default Chocolate;
