import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "./wishlistSlice";

function Wishlist() {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div className="product-grid">
          {wishlist.map(item => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <button onClick={() => dispatch(removeFromWishlist(item.id))}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
