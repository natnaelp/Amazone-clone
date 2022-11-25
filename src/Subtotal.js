import React from "react";
import "./Subtotal.css";
import { Link, useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button
        onClick={user ? (e) => navigate("/payment") : (e) => navigate("/login")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
