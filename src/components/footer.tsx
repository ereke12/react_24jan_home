import React from "react";

import f1 from '../img/form.png';
import i from '../img/icon.png';
import f2 from '../img/form1.png';
import fb from '../img/footer-bottom.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import insta from '../img/instagram.png';
import vector from '../img/vector.png';

export const Footer: React.FC = () =>{
    return <>
        <div className="footer">
            <div className="footer-top">
                <img className="footer-img1" src={f1} alt="" />
                <p>Subscribe to get information, latest news and other interesting offers about </p>
                <div className="footer-icon">
                <img src={i} alt="" />
                <p>markethink</p>
                </div>
                <form action="">
                    <input type="email" value="Your email" />
                    <button className="footer-btn">Subscribe</button>
                </form>
                <img className="footer-img2" src={f2} alt="" />
            </div>
            <div className="footer-center">
                <div className="footer-item">
                <div className="footer-center-icon">
                    <img src={fb} alt="" />
                    <h1>markethink</h1>
                </div>
                <p>Marketing is a company that focus on developing company’s strategy for increase digital marketing</p>
                <div className="social-network">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={insta} alt="" />
                </div>
                </div>
                <div className="footer-item">
                    <h1>Menu</h1>
                    <p>Home</p>
                    <p>Features</p>
                    <p>Pricing About</p>
                    <p>Contact Us</p>
                </div>
                <div className="footer-item">
                    <h1>Services</h1>
                    <p>Content Strategy</p>
                    <p>Content Development</p>
                    <p>Content Creation</p>
                    <p>Content Optimazion</p>
                </div>
                <div className="footer-item">
                    <h1>Company</h1>
                    <p>Site Map</p>
                    <p>Terms of Use</p>
                    <p>Privacy Notice</p>
                    <p>Cookies</p>
                    <p>Modern Slavery</p>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <img src={vector} alt="" />
                <p>Copyright Markethink. All right reserved</p>
            </div>
        </div>
    </>
}