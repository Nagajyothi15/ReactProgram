import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from './store'; // Make sure slice path is correct

import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg';
import Milk from './Milk';
import Chocolate from './Chocolate';
import Drinks from './Drinks';
import SignUp from './SignUp';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Orders from './Orders';
import Cart from './Cart';
import NotFound from './NotFound';
import Login from './Login';

import './App.css';

function App() {
  const cartItems = useSelector((state) => state.cart || []);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const { currentUser: user } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        {/* Top Row: Logo + Search Bar */}
        <div className="top-row d-flex justify-content-between align-items-center px-4 py-2 shadow sticky-top bg-white">
          <div className="logo fw-bold fs-4">
            <NavLink to="/" className="navbar-brand">Sizzle&Spice</NavLink>
          </div>

          <form className="d-flex search-bar">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>

        {/* Navigation */}
        <nav className="second-row navbar navbar-expand-lg shadow-sm">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><NavLink className="nav-link" to="/">🏠 Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/veg">🥦 Veg</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/nonveg">🍗 NonVeg</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/milk">🥛 Milk</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/drinks">🥤 Drinks</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/chocolate">🍫 Chocolate</NavLink></li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    🛒 Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                  </NavLink>
                </li>
                <li className="nav-item"><NavLink className="nav-link" to="/orders">📦 Orders</NavLink></li>
                

                <li className="nav-item"><NavLink className="nav-link" to="/aboutus">ℹ️ About Us</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/contactus">☎️ Contact Us</NavLink></li>
                {/* Account Dropdown */}
                <li className="nav-item dropdown">
                  <button
                    className="btn nav-link dropdown-toggle"
                    id="accountDropdown"
                    data-bs-toggle="dropdown"
                  >
                    {user ? `Hi, ${user.username} 👋` : "Account"}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="accountDropdown">
                    {user ? (
                      <>
                        <li><NavLink className="dropdown-item" to="/orders">📦 My Orders</NavLink></li>
                        <li>
                          <button
                            className="dropdown-item text-danger"
                            onClick={() => dispatch(logoutUser())}
                          >🚪 Logout</button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li><NavLink className="dropdown-item" to="/login">🔑 Login</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/signup">✍️ Sign Up</NavLink></li>
                      </>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veg" element={<Veg />} />
            <Route path="/nonveg" element={<NonVeg />} />
            <Route path="/milk" element={<Milk />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/chocolate" element={<Chocolate />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
