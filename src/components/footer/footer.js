import React from "react";
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

function footer() {
    return (
      <footer>
            <a href="#" className="footer_logo">Popa</a>
        <ul className="permalinks">
        <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portofolio">Portofolio</a></li>
            <li><a href="#contact">Contact</a></li>
   </ul>
          <div className="footer_socials">
              <a href="https://www.facebook.com/alex.popa.90475/" target="_blank"><BsFacebook/></a>
              <a href="https://www.instagram.com/alex.__popa/" target="_blank"><AiFillInstagram/> </a>
              <a href="https://twitter.com/alex24popa" target="_blank"><AiFillTwitterCircle/></a>
          </div>
      </footer>

    );
}

export default footer;