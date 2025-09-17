import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Orders.css";

function Orders() {
  const [darkMode, setDarkMode] = useState(true);

  // orders slice must be state.orders (check store.js)
  let orders = useSelector((state) => state.orders || []);

  return (
    <div className={`orders-container container my-4 ${darkMode ? "dark-theme" : "light-theme"}`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">{darkMode ? "🌙" : "☀️"} Order History</h1>
        <button
          className={`btn btn-sm ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`}
          onClick={() => setDarkMode(!darkMode)}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-5">
          <div className="alert alert-info d-inline-block px-4 py-3 shadow-sm rounded">
            No orders placed yet.
          </div>
        </div>
      ) : (
        <div className="row">
          {orders.map((purchase, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className={`card shadow-sm border-0 h-100 rounded-3 ${darkMode ? "bg-dark text-light" : "bg-white text-dark"}`}>
                <div className="card-body">
                  <h5 className="card-title text-warning fw-bold">Order #{index + 1}</h5>
                  <p className="mb-1"><strong>Date:</strong> {purchase.date}</p>
                  <p className="mb-1"><span className="badge bg-success">Total ₹{purchase.total}</span></p>
                  <p className="mb-1">Discount: ₹{purchase.discount}</p>
                  <p className="mb-1">Coupon: ₹{purchase.coupon || "N/A"}</p>
                  <p className="mb-1">Tax: ₹{purchase.tax}</p>
                  <p className="mb-3">Shipping: ₹{purchase.shipping}</p>
                  <p className="mb-3"><strong>Payment:</strong> {purchase.paymentMethod}</p>

                  <h6 className="fw-semibold">Items:</h6>
                  <ul className="list-group list-group-flush">
                    {purchase.items.map((item, idx) => (
                      <li
                        key={idx}
                        className={`list-group-item d-flex justify-content-between align-items-center ${darkMode ? "bg-secondary text-light" : "bg-light text-dark"}`}
                      >
                        <span>{item.name} × {item.quantity}</span>
                        <span className="fw-bold">₹{(Number(item.price) || 0) * (Number(item.quantity) || 0)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`card-footer text-end fw-bold ${darkMode ? "bg-secondary text-warning" : "bg-light text-dark"}`}>
                  Final Amount: ₹{purchase.finalPrice}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
