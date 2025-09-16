import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./store"; 
import "./Drinks.css";

// ✅ Toast imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Drinks() {
  const drinks = useSelector((state) => state.product.drink || []);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = drinks.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(drinks.length / itemsPerPage);

  const handleAddToCart = (drink) => {
    dispatch(addToCart(drink));
    toast.success(`${drink.name} added to cart! 🥤`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <h1 className="text-center">Drinks</h1>

      <div className="drinks-container">
        {currentItems.map((drink) => (
          <div key={drink.id} className="drinks-card">
            <img src={drink.imageUrl} alt={drink.name} />
            <h4>{drink.name}</h4>
            <p><b>Price:</b> ₹{drink.price}</p>
            <button
              className="btn-brown"
              onClick={() => handleAddToCart(drink)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

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

      <footer className="home-footer">
        <p>© 2025 YourProjectName. All rights reserved.</p>
        <p>📞 +91 12345 67890 | ✉️ contact@yourproject.com</p>
        <p>🌐 Facebook | 📸 Instagram | 🐦 Twitter</p>
      </footer>

      <ToastContainer />
    </>
  );
}

export default Drinks;
