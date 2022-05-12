import React from "react";
import "../styles/counter.css";

/**
 * A tally counter component.
 *
 * @param {Object} obj - An object.
 * @param {string} obj.className - The css className property.
 * @param {Object} obj.style - An object containing css style data.
 * @param {string} obj.size - The size of the counter.
 * @param {...object} obj.other - Other component properties.
 */
export default function Counter({
  className = "",
  style,
  size = "large",
  ...other
}) {
  const [count, setCount] = React.useState(0);

  const sizeClassName = size ? `counter--${size}` : "";

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <div
      className={`counter__container ${className} ${sizeClassName}`}
      style={{ ...style }}
      {...other}
    >
      <button className="button" onClick={decrement}>
        &minus;
      </button>
      <span className="number">{count}</span>
      <button className="button" onClick={increment}>
        +
      </button>
    </div>
  );
}
