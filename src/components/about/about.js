import React from "react";
import './about.css'
import ME from '../../assets/IMG_20210416_201400_340.jpg'
import {FaUniversity} from 'react-icons/fa'
import {BsFolderCheck} from 'react-icons/bs'
function about() {
    return (
       <section id="about">
           <h5>Get to know</h5>
           <h2>About me.</h2>
           <div className="container about_container">
               <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="about image"/>
                    </div>
               </div>
               <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaUniversity className="about_icon"/>
                            <h5>University major</h5>
                            <small>Computer Science</small>
                        </article>
                        <article className="about_card">
                            <BsFolderCheck className="about_icon"/>
                            <h5>Projects</h5>
                            <small>5+</small>
                        </article>
                    </div>
                   <p>
                       I am an extroverted, sociable and communicative person. I like to learn new things and am passionate about sports and anything related to technology and photography. I am constantly seeking to learn new things and have not yet found
                       an environment in which I cannot adapt.
                   </p>
                   <a href="#contact" className="btn btn-primary">Let's talk!</a>
               </div>
           </div>
       </section>
    );
}

export default about;