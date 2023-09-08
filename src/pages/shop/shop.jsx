import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";

export default function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Random Tech Store</h1>
      </div>
      <div className="products">
        {" "}
        {PRODUCTS.map((product) => (<Product data={product}/>))}
      </div>
    </div>
  );
}
