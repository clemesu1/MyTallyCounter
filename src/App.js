import React from "react";
import Counter from "./components/Counter";
import TallyCounter from "./components/TallyCounter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <TallyCounter />
    </div>
  );
}
