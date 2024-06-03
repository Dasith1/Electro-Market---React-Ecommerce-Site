import React from "react";
import {
  Col,
  Container,
  Row,
  List,
  ListGroupItem,
  ListGroup,
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/market-logo.png";
import "./footer.css";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="4">
              <div className="footer__text">
                <h1>Electro Market</h1>
              </div>
              <p className="footer__text ml-4">
                Discover the latest in electronics at unbeatable prices with
                Electro Market, your ultimate destination since 2023. Enjoy
                secure shopping, fast delivery, and exceptional customer
                service, all while exploring a vast range of top-quality
                products tailored just for you.
              </p>
            </Col>
            <Col lg="3">
              <div className="footer__quick-link">
                <h4 className="quick__link-title">Top Categories</h4>
                <ListGroup className="TopCategories">
                  <ListGroupItem className="ps-0 border-0 d-flex">
                    <Link to="#">Mobile Phone</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Fans</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Blender</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Washing Machine</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="2">
              <div className="footer__quick-link">
                <h4 className="quick__link-title">Links</h4>
                <ListGroup>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/shop">Shop</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/cart">Cart</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/login">Login</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="3">
              <div className="footer__quick-link">
                <h4 className="quick__link-title">Contact</h4>
                <ListGroup>
                  <ListGroupItem className="ps-0 border-0">
                    <span>
                      <i class="ri-map-pin-user-line"></i>
                      <p>Colombo</p> 
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <span>
                      <i class="ri-phone-line"></i>
                      <p>+94 756889623231</p>{" "}
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <span>
                      <i class="ri-mail-line"></i>elec@mart.com
                    </span>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="12">
              <p className="footer__copyright">
                Copyright {year} developed by Dasith Dilshan.All rights
                reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
