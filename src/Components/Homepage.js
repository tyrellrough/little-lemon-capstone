import React, {Fragment} from "react";
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import MenuItemHighlights from './MenuItemHighlights';
import Testimonials from './Testimonials';
import About from './About';


const Homepage = () => {
    return (
        <Fragment className="h-[100%]">
            <Header />
            <Hero />
            <MenuItemHighlights />
            <Testimonials />
            <About />
            <Footer />
        </Fragment>

    );



}
export default Homepage;