import React from "react";
import './nav.css'
import {VscHome} from 'react-icons/vsc'
import {FaUserAlt} from 'react-icons/fa'
import {BiBookOpen} from 'react-icons/bi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {MdContactMail} from 'react-icons/md'

function nav() {
    return (
        <nav>
            <a href="#" className="active"><VscHome/></a>
            <a href="#about"><FaUserAlt/></a>
            <a href="#experience"><BiBookOpen/></a>
            <a href="#portofolio"><MdMiscellaneousServices/></a>
            <a href="#contact"><MdContactMail/></a>
        </nav>
    );
}

export default nav;