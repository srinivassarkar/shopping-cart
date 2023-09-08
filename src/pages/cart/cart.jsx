import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { CartItems, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {Object.keys(CartItems).map((itemId) => {
          if (CartItems[itemId] !== 0) {
            return <CartItem key={itemId} data={PRODUCTS.find((product) => product.id === parseInt(itemId))} />;
          }
        })}
        <div className="checkout">
          {totalAmount === 0 ? (
            <p>Your cart is empty. Start shopping now!</p>
          ) : (
            <>
              <p>
                <strong>Subtotal: $ {totalAmount}</strong>
              </p>
              <button onClick={() => navigate("/")}>Continue Shopping</button>
              <button>Checkout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
