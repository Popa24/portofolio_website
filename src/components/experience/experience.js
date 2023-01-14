import React from "react";
import './experience.css'
import {DiHtml5} from 'react-icons/di'
import {DiCss3Full} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'
import {SiTailwindcss} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {SiSpring} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {FaPython} from 'react-icons/fa'
function experience() {
    return (
      <section id="experience">
          <h5>What Skills I have</h5>
          <h2>My Experience</h2>
          <div className="container experience_container">
              <div className="experience_frontend">
                <h3>Frontend Development</h3>
                  <div className="experience_content">
                        <article className="experience_details">
                            <DiHtml5 className="experience_details-icon"/>
                           <div> <h4>HTML</h4>
                            <small className="text-light">Intermediate</small></div>
                        </article>
                      <article className="experience_details">
                          <DiCss3Full className="experience_details-icon"/>
                          <div> <h4>CSS</h4>
                          <small className="text-light">Medium</small></div>
                      </article>
                      <article className="experience_details">
                          <DiJavascript className="experience_details-icon"/>
                          <div>  <h4>JavaScript</h4>
                          <small className="text-light">Medium</small></div>
                      </article>
                      <article className="experience_details">
                          <SiTailwindcss className="experience_details-icon"/>
                          <div> <h4>Tailwind</h4>
                          <small className="text-light">Begginer</small></div>
                      </article>
                      <article className="experience_details">
                          <FaReact className="experience_details-icon"/>
                          <div> <h4>React JS</h4>
                          <small className="text-light">Intermediate</small></div>
                      </article>
                  </div>
              </div>
              {/*START OF BACKEND*/}
              <div className="experience_backend">
                  <h3>Backend Development</h3>
                  <div className="experience_content">
                      <article className="experience_details">
                          <SiSpring className="experience_details-icon"/>
                          <div> <h4>Java Spring</h4>
                          <small className="text-light">Medium</small></div>
                      </article>
                      <article className="experience_details">
                          <SiPostgresql className="experience_details-icon"/>
                          <div> <h4>PostgresSQL</h4>
                          <small className="text-light">Medium</small></div>
                      </article>
                      <article className="experience_details">
                          <GrMysql className="experience_details-icon"/>
                          <div> <h4>MySql</h4>
                          <small className="text-light">Begginer-Medium</small></div>
                      </article>
                      <article className="experience_details">
                          <FaPython className="experience_details-icon"/>
                          <div> <h4>Python</h4>
                          <small className="text-light">Begginer</small></div>
                      </article>
                  </div>
              </div>
          </div>
      </section>
    );
}

export default experience;