import React from "react";

import p1 from '../img/part1.png'
import p2 from '../img/part2.png'
import p3 from '../img/part3.png'
import p4 from '../img/part4.png'
import p5 from '../img/part5.png'

export const Partner: React.FC = () =>{
    return <>
        <div className="partner">
            <img src={p1} alt="" />
            <img src={p2} alt="" />
            <img src={p3} alt="" />
            <img src={p4} alt="" />
            <img src={p5} alt="" />
        </div>
    </>
}