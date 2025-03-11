import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles.css"; // Styles personnalisés après

const InterfaceA = () => {
  return (
    <>
      {/* En-tête */}
      <header className="text-center">
        <h1 className="fw-bold">LOGO</h1>
        <nav className="d-flex flex-column flex-md-row align-items-center justify-content-center">
          <a href="#" className="mx-2 text-white">
            Accueil
          </a>
          <a href="#" className="mx-2 text-white">
            Blogue
          </a>
          <a href="#" className="mx-2 text-white">
            À propos
          </a>
          <a href="#" className="mx-2 text-white">
            Nous joindre
          </a>
        </nav>
      </header>

      {/* Contenu principal */}
      <Container fluid>
        <Row className="content-wrapper">
          {/* Articles */}
          <Col xs={12} md={8}>
            {[1, 2].map((_, index) => (
              <Card className="mb-4 shadow-sm article-card" key={index}>
                <Card.Body>
                  <Card.Title>Titre de l'article</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry...
                  </Card.Text>
                  <div className="article-footer d-flex justify-content-between">
                    <div>
                      <FontAwesomeIcon icon={faCalendarAlt} /> 01/12/2020
                      <span className="ms-3">
                        <FontAwesomeIcon icon={faUser} /> Nom de l'auteur
                      </span>
                    </div>
                    <Button variant="secondary" size="sm">
                      Lire la suite
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>

          {/* Barre latérale (Recherche + Catégories) */}
          <Col xs={12} md={4} className="sidebar">
            <Card className="search-card mb-3">
              <Card.Body>
                <h5>Recherche</h5>
                <Form>
                  <div className="d-flex">
                    <Form.Control type="text" placeholder="Rechercher..." />
                    <Button variant="secondary">
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>

            <Card className="category-card">
              <Card.Body>
                <h5>Catégories</h5>
                <ul className="list-unstyled">
                  {["A", "B", "C", "D", "E", "F"].map((cat) => (
                    <li key={cat}>
                      <a href="#">Lien vers catégorie {cat}</a>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Pied de page */}
      <footer className="text-center">
        <small>© Nom du blogue - Tous droits réservés.</small>
        <span className="mx-3">|</span>
        <small>Crédits agence web</small>
      </footer>
    </>
  );
};

export default InterfaceA;
