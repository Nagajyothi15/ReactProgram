import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addOrder,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "./store";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QRCode from "react-qr-code";
import confetti from "canvas-confetti";
import "./Cart.css";
import { getCouponDiscount } from "./DiscountUtils";

function Cart() {
  const cartItems = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [buttonDiscount, setButtonDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [couponResult, setCouponResult] = useState({
    isValid: false,
    discountPercent: 0,
    discountAmount: 0,
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  // ✅ Calculate totals
  const calculateTotals = () => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const buttonDiscountAmount = (totalPrice * buttonDiscount) / 100;
    const couponDiscountAmount = couponResult.discountAmount || 0;

    let finalPrice = totalPrice - buttonDiscountAmount - couponDiscountAmount;
    const taxAmount = finalPrice * 0.18;
    const shipping = 50;
    finalPrice += taxAmount + shipping;

    return {
      totalPrice,
      buttonDiscountAmount,
      couponDiscountAmount,
      taxAmount,
      shipping,
      finalPrice,
    };
  };

  const {
    totalPrice,
    buttonDiscountAmount,
    couponDiscountAmount,
    taxAmount,
    shipping,
    finalPrice,
  } = calculateTotals();

  // ✅ Apply Coupon
  const handleApplyCoupon = () => {
    const result = getCouponDiscount(coupon, totalPrice);
    setCouponResult(result);

    if (result.isValid) {
      confetti({ particleCount: 30, angle: 90, spread: 30, origin: { y: 0.6 } });
      toast.success(`🎉 Coupon Applied: ${result.discountPercent}% OFF`);
    } else {
      toast.error("❌ Invalid Coupon Code!");
    }
  };

  // ✅ Complete Purchase
  const handleCompletePurchase = () => {
    if (!customerEmail) {
      toast.warning("⚠️ Please enter your email");
      return;
    }

    if (!paymentMethod) {
      toast.warning("⚠️ Please select a payment method");
      return;
    }

    if (cartItems.length === 0) {
      toast.info("🛒 Cart is empty");
      return;
    }

    const orderDetails = {
      date: new Date().toLocaleString(),
      items: cartItems,
      total: totalPrice.toFixed(2),
      discount: buttonDiscountAmount.toFixed(2),
      coupon: couponDiscountAmount.toFixed(2),
      tax: taxAmount.toFixed(2),
      shipping,
      finalTotal: finalPrice.toFixed(2),
      paymentMethod,
      customerEmail,
    };

    dispatch(addOrder(orderDetails));
    dispatch(clearCart());
    toast.success("🎉 Purchase completed! Order added.");
    navigate("/orders");
  };

  return (
    <div className="cart-page">
      {/* ✅ Cart Items */}
      <div className="cart-items">
        <h2>🛒 Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty-msg">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.imageUrl} alt={item.name} className="item-img" />
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>
                  ₹{item.price} × {item.quantity} ={" "}
                  <strong>₹{item.price * item.quantity}</strong>
                </p>
                <div className="item-actions">
                  <button onClick={() => dispatch(decrementQuantity(item))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item))}>
                    +
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ✅ Summary */}
      <div className="cart-summary">
        <h2>💳 Order Summary</h2>
        <div className="summary-row">
          <span>Subtotal:</span> <span>₹{totalPrice}</span>
        </div>
        <div className="summary-row">
          <span>Discount:</span>{" "}
          <span>-₹{buttonDiscountAmount.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Coupon:</span>{" "}
          <span>
            -₹{couponDiscountAmount.toFixed(2)} ({couponResult.discountPercent}%)
          </span>
        </div>
        <div className="summary-row">
          <span>Tax (18%):</span> <span>₹{taxAmount.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping:</span> <span>₹{shipping}</span>
        </div>
        <hr />
        <div className="summary-row total">
          <span>Final Total:</span> <span>₹{finalPrice.toFixed(2)}</span>
        </div>

        <h4>🎁 Quick Discounts</h4>
        {[10, 20, 30].map((pct) => (
          <button
            key={pct}
            className="discount-btn-sm"
            onClick={() => setButtonDiscount(pct)}
          >
            {pct}% OFF
          </button>
        ))}
        <button
          className="discount-btn-sm"
          onClick={() => setButtonDiscount(0)}
        >
          Reset
        </button>

        <h3>🔑 Coupon</h3>
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon code"
        />
        <button onClick={handleApplyCoupon}>  Apply Coupon</button>

        <h3>💳 Payment Method</h3>
        <div className="payment-methods">
          <button onClick={() => setPaymentMethod("qr")}>QR Code</button>
          <button onClick={() => setPaymentMethod("card")}>Card</button>
          <button onClick={() => setPaymentMethod("cod")}>Cash on Delivery</button>
        </div>
       
        {paymentMethod === "qr" && (
          <div className="qr-section">
            <h4>Scan UPI QR to pay ₹{finalPrice.toFixed(2)}</h4>
            <QRCode
              value={`upi://pay?pa=7981678161@ybl&pn=JyothiStore&am=${finalPrice.toFixed(
                2
              )}&cu=INR`}
              size={180}
            />
            <p>
              UPI ID: <strong>7981678161@ybl</strong>
            </p>
          </div>
        )}
        {/* ✅ Card Payment */}
        {paymentMethod === "card" && (
          <div className="card-section">
            <h4>Enter Card Details</h4>
            <input type="text" placeholder="Cardholder Name" maxLength="50" />
            <input type="text" placeholder="Card Number (16 digits)" maxLength="16" />
            <div className="card-row">
              <input
                type="text"
                placeholder="MM/YY"
                maxLength="5"
                onInput={(e) => {
                  let value = e.target.value.replace(/[^0-9]/g, ""); // only digits

                  if (value.length >= 3) {
                    value = value.slice(0, 2) + "/" + value.slice(2, 4); // add slash after MM
                  }

                  e.target.value = value;
                }}
              />
              <input type="password" placeholder="CVV" maxLength="3" />
            </div>
            <button className="pay-btn">Pay ₹{finalPrice.toFixed(2)}</button>
          </div>
        )}
        {/* ✅ COD Payment */}

        {paymentMethod === "cod" && (
          <div className="cod-section">
            <p>Pay ₹{finalPrice.toFixed(2)} at delivery</p>
          </div>
        )}

        <h3>📧 Email</h3>
        <input
          type="email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <button className="complete-btn" onClick={handleCompletePurchase}>
          🎉 Complete Purchase
        </button>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Cart;
