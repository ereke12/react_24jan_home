import React from "react";
import h from '../img/help.png';
import l1 from '../img/line1.png';
import l2 from '../img/line2.png';
import l3 from '../img/line3.png';

export const Help: React.FC = () =>{
    return <>
        <div className="help">
            <div className="help-top">
                <h1>How Can We Help You?</h1>
                <p>Let's do great work together</p>
            </div>
            <div className="help-center">
                <div className="help-center-top">
                <div className="help-center-img">
                    <img src={h} alt="" />
                </div>
                <img src={l1} alt="" />
                <div className="help-center-circle">
                    <div className="circle"></div>
                </div>
                <img src={l2} alt="" />
                <div className="help-center-circle">
                    <div className="circle"></div>
                </div>
                <img src={l3} alt="" />
                <div className="help-center-circle">
                    <div className="circle"></div>
                </div>
                </div>
                <div className="help-center-bottom">
                <p>Update content on my Website</p>
                <p>Improve User Experience</p>
                <p>Request Free Website Review</p>
                <p>Improve your SEO Rankings</p>
                </div>
            </div>
            <div className="shop-link help-link ">
                <a href="">See More
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </>
}