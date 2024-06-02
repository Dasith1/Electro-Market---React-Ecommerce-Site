import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { MdDeliveryDining } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdLocalOffer } from "react-icons/md";

import "./services.css";

function Services() {
  return (
    <section className="services">
      <Container>
        <Row>
        <Col lg="3" md="3">
            <div className="service__item">
              <span> <MdDeliveryDining /></span>
              <div>
                <h3>Free Shipping</h3>
              
              </div>
            </div>
          </Col>
          <Col lg="3" md="3">
            <div className="service__item">
            <span> <MdSecurity /></span>
              <div>
                <h3>Secure Shopping</h3>
                 
              </div>
            </div>
          </Col>
          <Col lg="3" md="3">
            <div className="service__item">
           <span>  <RiCustomerService2Fill /></span> 
              <div>
                <h3>Exceptional Customer Service</h3>
             
              </div>
            </div>
          </Col>
          <Col lg="3" md="3">
            <div className="service__item">
             <span> <MdLocalOffer /></span>
              <div>
                <h3>Exclusive Deals and Offers</h3>
                
              </div>
            </div>
          </Col>
            
            
             
           
        </Row>
      </Container>
    </section>
  );
}

export default Services;
