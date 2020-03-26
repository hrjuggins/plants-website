import React from "react";
import ReactDOM from "react-dom";

import Plant1 from "./assets/leafs/1.png";
import Plant2 from "./assets/leafs/2.png";
import Plant3 from "./assets/leafs/3.png";
import Plant4 from "./assets/leafs/4.png";

const RenderLeafs = () => {
  let top = "-200px";
  let left = "-200px";
  let coords = "(-200px, -200px)";
  for (let index = 0; index < 10; index++) {
    return (
      <img
        src={Plant1}
        style={{
          position: "absolute",
          width: "800px",
          transformOrigin: "center",
          transform: `translate${coords}`
        }}
      />
    );
  }
};

const EntryScreen = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h1>HOUSE OF PLANTS</h1>
      <button>OPEN THE DOORS</button>
      <div
        id="leafs"
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
          top: 0,
          left: 0
        }}
      >
        <RenderLeafs />
        {numbers.map(() => {
          return (
            <img
              src={Plant1}
              style={{
                position: "absolute",
                width: "800px",
                transformOrigin: "center",
                transform: `translate(${Math.random() *
                  400}px, ${Math.random() * 400}px)`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EntryScreen;
