import React from "react";
import "../styles/nav.css"

export default function Navbar() {
    return (
        <nav>
            <div className="logo-btn">
                <a href="#"><h1>Ixroy</h1></a>
            </div>
            <div className="menu-list">
                <ul className="main-menu">
                    <li>
                        <a href="#">Blockchain</a>
                    </li>
                    <li>
                        <a href="#">Tic Tac Toe</a>
                    </li>
                    <li>
                        <a href="#">Rock Paper Scissors</a>
                    </li>
                    <li>
                        <a href="#">Ecomerce</a>
                    </li>
                </ul>
            </div>
            <div className="nav-btns">
                <button title="Personal information" className="btn-deafult" href="#"><i className="far fa-user"></i><span className="sr-only">My personal information</span></button>
                <button className="btn-deafult">
                    <i className="fas fa-bars"></i>
                    <span className="sr-only">Menu toggle</span>
                </button>
            </div>
        </nav>
    )
}