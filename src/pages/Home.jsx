import React from "react";
import { Container ,Row,Col } from "reactstrap";
import banner from '../assets/banner.png'
import '../style/home.css'
import Services from "../services/Services";
import ProductList from "../component/UI/ProductList";

function Home() {
  const year = new Date().getFullYear();

  return (
    <>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="hero__subtitle">Trending product in {year}</p>
              <h2>
                Make Your Shopping Experience Electrifying with Electro Market
              </h2>
              <p className="banner1-para">
                Discover the latest in electronics at unbeatable prices with
                Electro Market, your ultimate destination since 2023. Enjoy
                secure shopping, fast delivery, and exceptional customer
                service,all while exploring a vast range of top-quality
                products tailored just for you.
              </p>
              <br/>
              <button className="buy__btn">Shop Now</button>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src= {banner} alt="banner"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Services/>
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className="text-center">
            <h2 className="section__titile">Trending Products</h2>
          </Col>
          <ProductList/>
        </Row>
      </Container>
    </section>
     
     </>

  );
}

export default Home;
