import React,{useEffect,useRef,useState }from "react";
import "./header.css";
import { Container } from "reactstrap";
import logo from "../../assets/market-logo.png";
import { NavLink } from "react-router-dom";

import { RiShoppingBag4Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import userlogo from '../../assets/user.png';
import { IoBagOutline } from "react-icons/io5";
import {motion} from 'framer-motion'

const nav__links=[
  {
    path:'home',
    display:'Home'
  },
  {
    path:'shop',
    display:'Shop'

  },
  {
    path:'cart',
    display:'Cart'
  }
]



function Header() {

  const headerRef =useRef(null);

  const menuRef = useRef(null);

  const stickyHeaderFunc =()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.add('sticky__header')
      }
    })
  }

useEffect(()=>{
  stickyHeaderFunc();
  return()=> window.removeEventListener('scroll',stickyHeaderFunc);
});


const menuToggle =()=> menuRef.current.classList.toggle('active__menu');


  return (
    <header className="header">
      <Container className="nav_wrapper">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-image"></img>
          <div>
            <h1 style={{ marginTop: '5px', marginBottom: '0px'}}>Electro Market</h1>
            <p >Since 2023</p>
          </div>
        </div>

        <div className="navigation" ref={menuRef} onClick={menuToggle}>
          <ul className="menu">
            {
              nav__links.map((item,index)=>(
                <li className="nav__item" key={index}> 
              <NavLink to={item.path} className={(navClass)=>navClass.isActive ? 'nav__active' : ''} >{item.display} </NavLink>
            </li>
              ))
            }
          </ul>
        </div>

        <div className="nav__icons">
          <span className="fav__icon">
         <FaRegHeart/>
         <span className="badge">1</span>
          </span>
         
          <span className="cart__icon"> 
          <IoBagOutline />
          <span className="badge">2</span>
          </span>
          <span>
            <motion.img src={userlogo} whileTap={{scale:1.2}} alt="user logo"/>
          </span>
        </div>

        <div className="mobile__menu">
          <span onClick={menuToggle}>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </Container>
    </header>
  );
}

export default Header;
