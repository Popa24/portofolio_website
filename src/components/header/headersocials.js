import React from "react";
import {GrLinkedin} from 'react-icons/gr'
import {VscGithub} from 'react-icons/vsc'
import {FaInstagramSquare} from 'react-icons/fa'
function headersocials(){
    return(
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/alexandru-popa-236b241ab/" target="_blank"><GrLinkedin/></a>
            <a href="https://github.com/Popa24" target="_blank"><VscGithub/></a>
            <a href="https://www.instagram.com/alex.__popa/" target="_blank"><FaInstagramSquare/></a>

        </div>
    )
}
export default headersocials;