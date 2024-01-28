import React from "react";


import icon from '../img/icon.png';
import bImage from '../img/bottom.png';
import lImage from '../img/left.png';
import rImage from '../img/right.png';
import eImage from '../img/Ellipse.png';


export const Hero: React.FC = () =>{
    return <>
        <div className="hero">
            <header className="hero-header">
                <div className="icon-header">
                    <img src={icon} alt="" />
                    <p>markethink</p>
                </div>
                <div className="menu-header">
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="btn-header">
                    <button>Free Trial</button>
                </div>
                <div className="burger-menu">
                    {/* <i className="fa-solid fa-bars" id="b1menu" onClick="changeBurgerMenu()"></i> */}
                    <div className="burger-list" id="b2menu">
                        {/* <i className="fa-solid fa-x" onClick="changeBurgerMenu()"></i> */}
                        <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <main className="main">
                <h3>The Best</h3>
                <h1>Digital Marketing</h1>
                <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer</p>
                <button className="btn">Get Started</button>
                <div className="img">
                    <img src={bImage} alt="" />
                    <img src={lImage} alt="" />
                    <img src={rImage} alt="" />
                </div>
                <img className="ellipse" src={eImage} alt="" />
            </main>
        </div>
    </>
}



