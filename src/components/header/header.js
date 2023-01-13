import React from "react";
import './header.css'
import CTA from "./CTA";
import ME from "../../assets//WhatsApp_Image_2023-01-13_at_22.03.39-removebg.png"
import headersocials from "./headersocials";
import Headersocials from "./headersocials";

function header() {
    return (
        <header>
            <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Popa Alexandru</h1>
            <h5 className="text-light">Aspiring full stack developer</h5>
            <CTA/>
                <Headersocials/>
            <div className="me">
                <img src={ME} alt="me"/>
            </div>
                <a href="#contact" className="scroll_down">Scroll Down</a>

            </div>

        </header>
    );
}

export default header;