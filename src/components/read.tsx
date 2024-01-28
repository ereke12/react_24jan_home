import React from "react";

import r1 from '../img/read1.png';
import r2 from '../img/read2.png';
import r3 from '../img/read3.png';

export const Read: React.FC = () =>{
    return <>
        <div className="read">
            <div className="read-left">
                <h1>Read More Articles From Our Blog</h1>
                <img src={r1} alt="" />
                <p>AUGUST 17, 2021</p>
                <h2>10 Reasons to invest in SEO copywriting services</h2>
                <button>Read More</button>
            </div>
            <div className="read-right">
                <div className="read-right-1">
                <h1>Content Writing</h1>
                <img src={r2} alt="" />
                <p>AUGUST 17, 2021</p>
                <h2>How to get hired at a top Digital Marketing</h2>
                <h3>Agency life. We’ve all seen the photos posted on social media – the cool...</h3>
                <div className="read-right-1-img">
                    <i className="fa-regular fa-eye"></i>
                </div>
                </div>
                <div className="read-right-2">
                <h1>Content Marketing</h1>
                <img src={r3} alt="" />
                <p>AUGUST 17, 2021</p>
                <h2>How to get hired at a top Digital Marketing</h2>
                <h3>Agency life. We’ve all seen the photos posted on social media – the cool...</h3>
                <div className="read-right-2-img">
                    <i className="fa-regular fa-eye"></i>
                </div>
                </div>
            </div>
        </div>
    </>
}