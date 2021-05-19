import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav({ }) {
const [show, handleShow] = useState(false);

    return (
        <div className={`nav ${show && "nav__black"} `} >
        <div className="nav__contents">
        <img className="nav__logo" src="./logo.jpg" alt="Netfilex" />
        <img className="nav__avater" src="./1.png" alt="search" />
        </div>
    </div>
    );
}

export default Nav;
