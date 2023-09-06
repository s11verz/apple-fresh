"use client";

import { useState } from "react";

export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];
  let prices = [40, 30, 50];
  let [productCounts, setProductCounts] = useState([0, 0, 0]);

  const minutButtonClickHandler = (index) => {
    if (productCounts[index] === 0) {
      return;
    }

    setProductCounts((prev) => {
      let result = [...prev];
      result[index] -= 1;
      return result;
    });
  };

  const plusButtonClickHandler = (index) => {
    if (productCounts[index] === 10) {
      return;
    }

    setProductCounts((prev) => {
      let result = [...prev];
      result[index] += 1;
      return result;
    });
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="title">
            <h1>상품 목록</h1>
            {products.map((product, i) => {
              return (
                <div className="food" key={product}>
                  <img src={`/food${i}.png`} alt={product} />
                  <div className="food-content">
                    <h4>
                      {product} ${prices[i]}
                    </h4>
                    <button
                      className="minus-button"
                      onClick={() => minutButtonClickHandler(i)}
                    >
                      -
                    </button>
                    <span>{productCounts[i]}</span>
                    <button
                      className="plus-button"
                      onClick={() => plusButtonClickHandler(i)}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
