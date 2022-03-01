import React from "react";
import { GiHamburgerMenu, IoIosNotifications, AiFillHome } from 'react-icons/all';
import { Link } from "react-router-dom";
import './Header.scss';
const logo = './src/app/assets/img/logo.png';

export default function Header() {
    return (
        <>
            <header className="header-container">
                <div></div>
                <img src={logo} className="menu-logo" />
                <button className="menu-button">
                    <IoIosNotifications />
                </button>
            </header>
        </>
    );
}