import React from 'react';
import './Navbar.scss';
import {FaHome, VscGraphLine, FaWallet, FaRegNewspaper, FaChartBar} from 'react-icons/all';

export default function Navbar(){
    return(
        <nav className='lateral-navbar'>
            <span className="menu-item">
                <FaHome />
                <span className='menu-item-title'>Home</span>
            </span>
            <span className="menu-item">
                <VscGraphLine />
                <span className='menu-item-title'>Mercado</span>
            </span>
            <span className="menu-item active">
                <FaWallet />
                <span className='menu-item-title'>Carteira</span>
            </span>
            <span className="menu-item">
                <FaRegNewspaper />
                <span className='menu-item-title'>Notícias</span>
            </span>
            <span className="menu-item">
                <FaChartBar />
                <span className='menu-item-title'>Análises</span>
            </span>
        </nav>
    )
}