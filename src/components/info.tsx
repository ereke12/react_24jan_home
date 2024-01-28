import React from "react";

import i1 from '../img/info1.png'
import i2 from '../img/info2.png'
import i3 from '../img/info3.png'
import i4 from '../img/info4.png'
import ib from '../img/info-bottom.png'

export const Info: React.FC = () =>{
    return <>
        <div className="info">
            <div className="info-top">
                <div className="info-top-left">
                <h2>We’re Strategic Digital
                    Marketing Agency</h2>
                    <p>We’ve created a full-stack structure for our working workflow processe, were from the funny the century initial all made, have spare to negatives</p>
                    <div className="shop-link">
                    <a href="">See More
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
                </div>
                <div className="info-top-right">
                <div className="info-item">
                    <img src={i1} alt="" />
                    <h3>Content Strategy</h3>
                    <p>All our content marketing service packages include a custom content strategy</p>
                </div>
                <div className="info-item">
                    <img src={i2} alt="" />
                    <h3>Content Development</h3>
                    <p>We create some content calendar for your company's must-share content</p>
                </div>
                <div className="info-item">
                    <img src={i3} alt="" />
                    <h3>Content Creation</h3>
                    <p>Experienced in copywriting and marketing team begins creating content</p>
                </div>
                <div className="info-item">
                    <img src={i4} alt="" />
                    <h3>Content Optimization</h3>
                    <p>Your content marketing management services also include SEO</p>
                </div>
                </div>
            </div>
            <div className="info-bottom">
                <div className="info-bottom-left">
                <img src={ib} alt="" />
                </div>
                <div className="info-bottom-right">
                <h2>Increase Business on Social Media Reach</h2>
                <p>Using our network of industry influencers, we help promote your content</p>
                <button className="btn-info">Get Started</button>
                </div>
            </div>
        </div>
    </>
}