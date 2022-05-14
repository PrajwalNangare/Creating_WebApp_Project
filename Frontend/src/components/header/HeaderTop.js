import React from "react";
import logo from '../assets/logo.svg';
import logo2 from '../assets/logo2.svg'
import './header.css';

function HeaderTop() {
    return(
    <div class="container">
      <div class="mainlogo"><img src={logo} alt="logo" /></div>
      <div class="secondlogo"><img src={logo2} alt="logo2"/></div>
      <div class="h1"><h1>Invoice List</h1></div>
    </div>
    );
}
export default HeaderTop;