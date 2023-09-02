import React from "react";
import MarioA from '../images/ma1.png';
import MarioB from '../images/ma2.png';

const About = () => {
    return (
        <div className='segment three-nine '>
            <div className="flex justify-between ">
                <div className="text-left w-[100%]">
                    <h1 className="heading">Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>

                <img src={MarioA} className="w-[200%] p-[3%]"/>

            </div>
        </div>
    );
};
export default About;
