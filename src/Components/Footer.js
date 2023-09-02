
import React, { Fragment } from "react";

import LittleLemonLogo from '../images/Logo.svg';

const Footer = () => {
    return (
        <Fragment>
            <div className="zero-three bg-[#495E57]"></div>
            <div className="segment three-nine w-full bg-[#495E57]">
                <footer className="w-full">
                    <div className="w-full flex justify-between">
                        <img src={LittleLemonLogo} />
                        <div className="flex w-2/4 justify-evenly">
                            <div>
                                <h3>Contact</h3>
                                <p>12 Street Chicago, CFA 123</p>
                                <p>0144 1293938483</p>
                                <p>littlelemon@email.com</p>
                            </div>
                            <div>
                                <h3>Social Media Links</h3>
                                <p>Twitter</p>
                                <p>Facebook</p>
                                <p>Instagram</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <div className="eleven-twelve bg-[#495E57]"></div>
        </Fragment>
    );
};
export default Footer;
