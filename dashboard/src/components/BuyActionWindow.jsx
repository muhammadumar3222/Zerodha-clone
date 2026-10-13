import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./BuyActionWindow.css";

import axios from "axios";

import GeneralContext from "./GeneralContext.jsx";


const BuyActionWindow = ({uid}) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const navigate = useNavigate();

  const HandleBuyClick = () => {
    axios.post("http://localhost:5000/orders/new", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: " BUY",
    });

    GeneralContext.closeBuyWindow();
    navigate("/");

  }

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              defaultValue="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              defaultValue="0.00"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>

        <div>
          <Link className="btn btn-blue" onClick={HandleBuyClick}>Buy</Link>
          <Link className="btn btn-grey" onClick={handleCancelClick}>Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;