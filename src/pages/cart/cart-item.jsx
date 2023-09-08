/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";

export default function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const { CartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>

        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={CartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />

          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}
