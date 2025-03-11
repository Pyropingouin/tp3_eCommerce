import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InterfaceA from "./components/InterfaceA";
import InterfaceB from "./components/InterfaceB";

const App = () => {
  const [selectedInterface, setSelectedInterface] = useState("A");

  return (
    <div>
      <nav className="p-3 bg-dark text-center">
        <button
          className={`btn mx-2 ${
            selectedInterface === "A" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setSelectedInterface("A")}
        >
          Interface A
        </button>
        <button
          className={`btn mx-2 ${
            selectedInterface === "B" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setSelectedInterface("B")}
        >
          Interface B
        </button>
      </nav>

      {selectedInterface === "A" ? <InterfaceA /> : <InterfaceB />}
    </div>
  );
};

export default App;
