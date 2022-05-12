import "7.css/dist/7.css";
import MinimizeIcon from "../images/minimize.png";
import MaximizeIcon from "../images/maximize.png";
import CloseIcon from "../images/close.png";
import React from "react";

const zeroPad = (num, places) => String(num).padStart(places, "0");

export default function TallyCounter() {
  const [count, setCount] = React.useState("000000");

  const increment = () => {
    setCount((count) => ("000000" + (parseInt(count) + 1)).slice(-6));
  };

  const decrement = () => {
    setCount((count) => ("000000" + (parseInt(count) - 1)).slice(-6));
  };

  const reset = () => {
    setCount("000000");
  };

  const about = () => {
    alert("Created by Colin LeMesurier");
  };

  return (
    <div className="window" style={{ maxWidth: "250px" }}>
      <div className="title-bar">
        <div className="title-bar-text">My Tally Counter</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize">
            <img src={MinimizeIcon} alt="&#x1F5D5;" />
          </button>
          <button aria-label="Maximize">
            <img src={MaximizeIcon} alt="&#x1F5D6;" />
          </button>
          <button aria-label="Close">
            <img src={CloseIcon} alt="&#10006;" />
          </button>
        </div>
      </div>
      <div className="window-body" style={{ padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <button onClick={reset}>Reset</button>
          <button onClick={about}>About</button>
        </div>
        <div>
          <div>
            <pre
              style={{
                background: "#333",
                color: "white",
                border: "none",
                padding: "5px 10px",
                fontFamily: "monospace",
                margin: "5px 0 10px 0",
                fontSize: "40px",
                textAlign: "center",
                letterSpacing: "0.1em"
              }}
            >
              {count}
            </pre>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <button
            style={{
              padding: 0,
              fontSize: "40px",
              width: "50%",
              marginRight: "10px"
            }}
            disabled={parseInt(count) <= 0}
            onClick={decrement}
          >
            &minus;
          </button>
          <button
            style={{
              lineHeight: 0,
              alignItems: "center",
              fontSize: "40px",
              width: "50%",
              marginLeft: "10px"
            }}
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
