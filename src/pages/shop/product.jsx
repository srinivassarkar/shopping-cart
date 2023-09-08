/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";

export default function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, CartItems } = useContext(ShopContext);

  // Retrieve the cartItemCount for the current product
  const cartItemCount = CartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <>({cartItemCount})</>}
      </button>
    </div>
  );
}
