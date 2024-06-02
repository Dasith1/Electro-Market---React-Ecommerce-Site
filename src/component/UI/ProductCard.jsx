import React from "react";
import { motion } from "framer-motion";
import "../../style/product-card.css";
import { Col } from "reactstrap";
import { RiAddFill } from "react-icons/ri";


import productfrig from "../../assets/frig/frig1.png";
import productfan1 from "../../assets/fans/fan1.png"
import productwmachin from  "../../assets/washingmachine/machine2.png"
import orangemachine from '../../assets/orangemachinne/mc7.png'

import {Link} from "react-router-dom"

function ProductCard() {
  return (
    <>
    <Col lg="3" md="4">
      <div className="product__item">
        <div className="product__img">
          <img src={productfrig} alt="product1" />
        </div>
        <div className="p-2 product__info" >
        <h3 className="product__name"> <Link to= '/shop/id'> Double Door Refrigerator </Link></h3>
        <span>Spacious and energy-efficient with advanced cooling technology</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">RS 150000</span>
          <span>
          <RiAddFill />
          </span>
        </div>
      </div>
    </Col>
    <Col lg="3" md="4">
      <div className="product__item">
        <div className="product__img">
          <img src={productfan1} alt="product1" />
        </div>
        <div className="p-2 product__info" >
        <h3 className="product__name"><Link to= '/shop/id'> Stand Fan </Link> </h3> 
        <span>Powerful and quiet cooling with adjustable height and oscillation</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">RS 5000</span>
          <span>
          <RiAddFill />
          </span>
        </div>
      </div>
    </Col>
    <Col lg="3" md="4">
      <div className="product__item">
        <div className="product__img">
          <img src={productwmachin} alt="product1" />
        </div>
        <div className="p-2 product__info" >
        <h3 className="product__name"> <Link to= '/shop/id'>  Washing Machine </Link> </h3>
        <span>Advanced technology for superior cleaning performance</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">RS 80000</span>
          <span>
          <RiAddFill />
          </span>
        </div>
      </div>
    </Col>
    <Col lg="3" md="4">
      <div className="product__item">
        <div className="product__img">
          <img src={orangemachine} alt="product1" />
        </div>
        <div className="p-2 product__info" >
        <h3 className="product__name"> <Link to= '/shop/id'>  Blender </Link> </h3>
        <span>Perfect for smoothies, soups, and more with precision blending</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">RS 8000</span>
          <span>
          <RiAddFill />
          </span>
        </div>
      </div>
    </Col>
    </>
  );
}

export default ProductCard;
