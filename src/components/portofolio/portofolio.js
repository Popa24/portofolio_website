import React from "react";
import './portofolio.css'
import IMG1 from '../../assets/Baze_de_date.png'
import IMG2 from '../../assets/OnlyBuilds.png'
import IMG3 from '../../assets/Etracker.png'
import IMG4 from '../../assets/Portofolio Website.png'
import IMG5 from '../../assets/Chat_gpt.png'
function portofolio() {
    return (
     <section id="portofolio">
         <h5>My Recent Work</h5>
         <h2>Portofolio</h2>
         <div className="container portofolio_container">
             <article className="portofolio_item">
                 <div className="portofolio_item-image">
                     <img src={IMG5} alt="Ui after figma design"/>
                 </div>
                 <h3>UI after Figma Design</h3>
                <div className="portofolio_item-two_buttons"> <div className="portofolio_item-cta"> <a  rel="noreferrer" href="https://github.com/Popa24/gpt3_ui_after_tutorial" target="_blank" className="btn">Source code</a></div>
                 <div className="portofolio_item-cta"> <a rel="noreferrer"  href="https://gpt3-ui-figma-design.netlify.app" target="_blank" className="btn btn-primary">Live Demo</a></div></div>
             </article>
            <article className="portofolio_item">
                <div className="portofolio_item-image">
                    <img src={IMG1} alt="DataBase Project"/>
                </div>
                <h3>DataBase Project</h3>
                <div className="portofolio_item-two_buttons"> <div className="portofolio_item-cta"> <a rel="noreferrer"  href="https://github.com/Popa24/Baze-de-date" target="_blank" className="btn">Source code</a></div></div>
            </article>

             <article className="portofolio_item">
                 <div className="portofolio_item-image">
                     <img src={IMG2} alt="Hackthon Project"/>
                 </div>
                 <h3>Hackthon project</h3>
                 <div className="portofolio_item-two_buttons"> <div className="portofolio_item-cta">  <a  rel="noreferrer" href="https://github.com/AndreiZ0R/OnlyBuilds-Web" target="_blank" className="btn">Source code</a></div></div>
             </article>
             <article className="portofolio_item">
                 <div className="portofolio_item-image">
                     <img src={IMG3} alt="Hackthon Project"/>
                 </div>
                 <h3>Hackthon Project</h3>
                 <div className="portofolio_item-two_buttons"> <div className="portofolio_item-cta"> <a href="https://github.com/Popa24/web-eTracker"  rel="noreferrer"  target="_blank" className="btn">Source code</a></div></div>
             </article>
             <article className="portofolio_item">
                 <div className="portofolio_item-image">
                     <img src={IMG4} alt="Portofolio Project"/>
                 </div>
                 <h3>Portofolio Project</h3>
                 <div className="portofolio_item-two_buttons"> <div className="portofolio_item-cta" > <a href="https://github.com/Popa24/portofolio_website" target="_blank" className="btn"  rel="noreferrer" >Source code</a></div></div>
             </article>
         </div>
     </section>
    );
}

export default portofolio;