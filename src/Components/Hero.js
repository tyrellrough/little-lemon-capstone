import React, { Fragment } from "react";
import HeroImage from '../images/restaurant.jpg'

function navigateBooking() {
    window.location.href='/booking';
}

const Hero = () => {
    return (
        <Fragment>
            <div className="zero-three bg-[#495E57]"></div>
            <div className="segment three-nine pt-[3%] pb-[3%] bg-[#495E57] ">
                <div className="flex justify-between">
                    <div className=" w-full flex flex-col justify-between items-start">
                        <div className="text-left">
                            <h1 className="heading">Little Lemon</h1>
                            <h2 className="sub-heading">Chicago</h2>
                            <p className="regular-text">Place Holder Text</p>
                        </div>

                        <input type="button" value="Reserve a table" onClick={navigateBooking}/>
                    </div>

                    <img src={HeroImage} alt="Restaurant Image" className="w-[200%] p-[3%]" />

                </div>
            </div>
            <div className="bg-[#495E57] eleven-twelve "></div>
        </Fragment>
    );



}
export default Hero;