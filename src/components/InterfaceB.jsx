import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css"; // Réutilisation des styles

const InterfaceB = () => {
  return (
    <>
      {/* Grand conteneur gris en haut */}
      <section className="hero-container">
        <div className="hero-content">
          <h1 className="fw-bold">Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Petits rectangles blancs */}
        <div className="card-container">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="small-card">
              <h3>Lorem ipsum</h3>
              <p>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Premier conteneur texte + carré gris */}
      <section className="text-image-container">
        <div className="text-content">
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="image-placeholder"></div>
      </section>

      {/* Second conteneur inversé (carré à gauche, texte à droite) */}
      <section className="text-image-container reverse">
        <div className="image-placeholder"></div>
        <div className="text-content">
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </>
  );
};

export default InterfaceB;
