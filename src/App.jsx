import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InterfaceA from "./components/InterfaceA";
import InterfaceB from "./components/InterfaceB";

const App = () => {
  // État pour suivre l'interface active
  const [selectedInterface, setSelectedInterface] = useState("A");

  return (
    <div>
      {/* Barre de navigation pour choisir l'interface */}
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

      {/* Affichage de l'interface choisie */}
      {selectedInterface === "A" ? <InterfaceA /> : <InterfaceB />}
    </div>
  );
};

export default App;
