import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrder,
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "./store";
import {
  calculateButtonDiscount,
  calculateTotal,
  getcouponDiscount,
} from "./discountUtils";
import "./Cart.css";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import confetti from "canvas-confetti";
import QRCode from "react-qr-code";

function Cart() {
  const cartItems = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();

  const [buttonDiscount, setButtonDiscount] = useState(0);
  const totalPrice = calculateTotal(cartItems);
  const buttonDiscountAmount = calculateButtonDiscount(totalPrice, buttonDiscount);

  const [couponCode, setCouponCode] = useState("");
  const [couponResult, setCouponResult] = useState({
    isValid: false,
    discountPercent: 0,
    discountAmount: 0,
  });

  const handleApplyCoupon = () => {
    const result = getcouponDiscount(couponCode, totalPrice);
    setCouponResult(result);

    if (result.isValid) {
      toast.success(
        `🎉 Coupon "${couponCode}" applied! ${result.discountPercent}% off`
      );
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
      });
    } else {
      toast.error("❌ Invalid Coupon Code");
    }
  };

  let finalPrice = totalPrice - buttonDiscountAmount - couponResult.discountAmount;
  let taxAmount = finalPrice * 0.18;
  finalPrice += taxAmount + 50; // Shipping ₹50

  const [customerEmail, setCustomerEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const templateParams = {
    orders: cartItems.map((item) => ({
      name: item.name,
      price: (item.price * item.quantity).toFixed(2),
      units: item.quantity,
    })),
    cost: {
      shipping: 50,
      tax: taxAmount.toFixed(2),
      total: finalPrice.toFixed(2),
    },
    email: customerEmail,
  };

  const handleCheckout = () => {
    if (!customerEmail) {
      toast.warning("⚠️ Please enter your email");
      return;
    }
    emailjs
      .send(
        "service_o6rk94r",
        "template_13wjjav",
        templateParams,
        "ohjHip5DiZ9UO5uHy"
      )
      .then(() => toast.success("✅ Order placed successfully!"))
      .catch(() => toast.error("❌ Failed to process order"));
  };

  const handleCompletePurchase = () => {
    const purchaseDetails = {
      date: new Date().toLocaleString(),
      items: cartItems,
      total: finalPrice.toFixed(2),
      discount: buttonDiscountAmount.toFixed(2),
      coupon: couponResult.discountAmount.toFixed(2),
      tax: taxAmount.toFixed(2),
      shipping: 50,
      paymentMethod: paymentMethod || "Not selected",
    };
    dispatch(addOrder(purchaseDetails));
    dispatch(clearCart());
    
    toast.success("🎉 Purchase completed and added to orders!");
    navigate("/orders");
  };

  return (
    <div className="cart-page">
      {/* Left: Cart Items */}
      <div className="cart-items">
        <h2>🛒 Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty-msg">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.name} className="cart-card">
              <img src={item.imageUrl} alt={item.name} className="item-img" />
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>
                  ₹{item.price} × {item.quantity} ={" "}
                  <strong>₹{item.price * item.quantity}</strong>
                </p>
                <div className="item-actions">
                  <button
                    onClick={() => {
                      dispatch(decrementQuantity(item));
                      toast.info(`➖ 1 ${item.name} removed from cart`);
                    }}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => {
                      dispatch(incrementQuantity(item));
                      toast.success(`➕ 1 more ${item.name} added to cart`);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => {
                      dispatch(removeFromCart(item));
                      toast.error(`🗑️ ${item.name} removed from cart`);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Right: Summary */}
      <div className="cart-summary">
        <h2>💳 Order Summary</h2>
        <div className="summary-row">
          <h5><span>Subtotal:</span></h5> <span>₹{totalPrice}</span>
        </div>
        <div className="summary-row">
          <span>💸 Discount:</span> <span>-₹{buttonDiscountAmount}</span>
        </div>
        <div className="summary-row">
          <span>🏷️ Coupon:</span>{" "}
          <span>
            -₹{couponResult.discountAmount} ({couponResult.discountPercent}%)
          </span>
        </div>
        <div className="summary-row">
          <span>🧾 GST (18%):</span> <span>₹{taxAmount.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>📦 Shipping:</span> <span>₹50</span>
        </div>
        <hr />
        <div className="summary-row total">
          <span>💰 Final Total:</span> <span>₹{finalPrice.toFixed(2)}</span>
        </div>

        {/* Quick Discounts */}
        <h4>🎁 Quick Discounts</h4>
        <div className="discount-buttons">
          {[10, 20, 30].map((percent) => (
            <button
              key={percent}
              className="discount-btn-sm"
              onClick={() => setButtonDiscount(percent)}
            >
              {percent}% OFF 💸
            </button>
          ))}
          <button className="discount-btn-sm" onClick={() => setButtonDiscount(0)}>
            Reset
          </button>
        </div>

        {/* Coupon */}
        <h3>🔑 Coupon</h3>
        <div className="coupon-section">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter coupon code"
          />
          <button onClick={handleApplyCoupon}>Apply Coupon</button>
        </div>

        {/* Payment Method */}
        <h3>💳 Payment Mode</h3>
        <div className="payment-method">
          <button onClick={() => setPaymentMethod("qr")}>📱 QR Code</button>
          <button onClick={() => setPaymentMethod("card")}>💳 Card</button>
          <button onClick={() => setPaymentMethod("cod")}>💵 Cash on Delivery</button>
        </div>

        {/* QR Code Section */}
        {paymentMethod === "qr" && (
          <div className="qr-section">
            <h4>Scan UPI QR to pay ₹{finalPrice.toFixed(2)}</h4>
            <QRCode
              value={`upi://pay?pa=7981678161@ybl&pn=Jyothi Store&am=${finalPrice.toFixed(
                2
              )}&cu=INR`}
              size={180}
              fgColor="#000000"
            />
            <p>
              UPI ID: <strong>7981678161@ybl</strong>
            </p>
          </div>
        )}

        {/* Cash on Delivery Section */}
        {paymentMethod === "cod" && (
          <div className="cod-section">
            <h4>💵 Cash on Delivery</h4>
            <p>Please prepare ₹{finalPrice.toFixed(2)} to pay at delivery.</p>
          </div>
        )}

        {/* Customer Email */}
        <h3>📧 Email</h3>
        <div className="email-section">
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        {/* Checkout & Complete Buttons */}
        <button className="checkout-btn" onClick={handleCheckout}>
          ✅ Checkout & Place Order
        </button>
        <button className="complete-btn" onClick={handleCompletePurchase}>
          🎉 Complete Purchase
        </button>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Cart;
