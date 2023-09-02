import TestimonialCard from '../Components/TestimonialCard';
import React, { Fragment } from "react";

const t = [
    {
        name: "Catrina",
        rating: "5",
        review: "It was good",
        getImageSrc: () => require("../images/woman-4525646_640.jpg"),
    },
    {
        name: "Phillip",
        rating: "5",
        review: "It was good",
        getImageSrc: () => require("../images/woman-4525646_640.jpg"),
    },
    {
        name: "Amanda",
        rating: "5",
        review: "It was good",
        getImageSrc: () => require("../images/woman-4525646_640.jpg"),
    },
    {
        name: "Amanda",
        rating: "5",
        review: "It was good",
        getImageSrc: () => require("../images/woman-4525646_640.jpg"),
    },



]

const Testimonials = () => {
    return (
        <Fragment>
            <div className="zero-three bg-[#495E57]"></div>
            <div className="segment three-nine pt-[3%] pb-[3%] bg-[#495E57] ">
                <div className="w-full">
                    <h1>Testimonials</h1>
                    <div className="w- flex justify-between pt-[3%] pb-[3%]">
                        {
                            t.map((testimonial) => {
                                return (
                                    <TestimonialCard
                                        rating={testimonial.rating}
                                        name={testimonial.name}
                                        review={testimonial.review}
                                        image={testimonial.getImageSrc()}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="eleven-twelve bg-[#495E57]"></div>
        </Fragment>
    );
}

export default Testimonials;