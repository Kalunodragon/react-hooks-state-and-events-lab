import React, {useState} from "react";

function Item({ name, category }) {
  const [isListed, setIsListed] = useState(false)

function addToCart(){
  setIsListed(isListed => !isListed)
}

const added = isListed ? "in-cart" : ""

  return (
    <li className={added}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{added ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
