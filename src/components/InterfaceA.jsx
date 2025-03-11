import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Card, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles.css";

const InterfaceA = () => {
  return (
    <>
      {/* En-tête */}
      <header>
        <h1 className="fw-bold">LOGO</h1>
        <nav>
          <a href="#" className="mx-3 text-white">
            Accueil
          </a>
          <a href="#" className="mx-3 text-white">
            Blogue
          </a>
          <a href="#" className="mx-3 text-white">
            À propos
          </a>
          <a href="#" className="mx-3 text-white">
            Nous joindre
          </a>
        </nav>
      </header>

      {/* Contenu principal */}
      <Container fluid>
        <div className="content-wrapper">
          {/* Articles */}
          <Col md={8}>
            {[1, 2].map((_, index) => (
              <Card className="mb-4 shadow-sm article-card" key={index}>
                <Card.Body>
                  <Card.Title>Titre de l'article</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s...
                  </Card.Text>
                  <div className="article-footer">
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

          {/* Barre latérale */}
          <Col className="sidebar">
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
        </div>
      </Container>

      {/* Pied de page */}
      <footer>
        <small>© Nom du blogue - Tous droits réservés.</small>
        <span className="mx-3">|</span>
        <small>Crédits agence web</small>
      </footer>
    </>
  );
};

export default InterfaceA;
