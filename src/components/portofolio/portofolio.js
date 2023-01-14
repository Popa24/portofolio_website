import React from "react";
import './portofolio.css'
import IMG1 from '../../assets/Baze_de_date.png'
import IMG2 from '../../assets/OnlyBuilds.png'
import IMG3 from '../../assets/Etracker.png'
import IMG4 from '../../assets/Portofolio Website.png'
function portofolio() {
    return (
     <section id="portofolio">
         <h5>My Recent Work</h5>
         <h2>Portofolio</h2>
         <div className="container portofolio_container">
            <article className="portofolio_item">
                <div className="portofolio_item-image">
                    <img src={IMG1} alt="DataBase Project"/>
                </div>
                <h3>DataBase Project</h3>
               <div className="portofolio_item-cta"> <a href="https://github.com/Popa24/Baze-de-date" target="_blank" className="btn">Source code</a></div>
            </article>

             <article className="portofolio_item">
                 <div className="portofolio_item-image">
                     <img src={IMG2} alt="Hackthon Project"/>
                 </div>
                 <h3>Hackthon project</h3>
                 <div className="portofolio_item-cta">  <a href="https://github.com/AndreiZ0R/OnlyBuilds-Web" target="_blank" className="btn">Source code</a></div>
             </article>
             <article className="portofolio_item">
                 <div className="portofolio_item-image">
                     <img src={IMG3} alt="Hackthon Project"/>
                 </div>
                 <h3>Hackthon Project</h3>
                 <div className="portofolio_item-cta"> <a href="https://github.com/Popa24/web-eTracker" target="_blank" className="btn">Source code</a></div>
             </article>
             <article className="portofolio_item">
                 <div className="portofolio_item-image">
                     <img src={IMG4} alt="Portofolio Project"/>
                 </div>
                 <h3>Portofolio Project</h3>
                 <div className="portofolio_item-cta"> <a href="https://github.com/Popa24/portofolio_website" target="_blank" className="btn">Source code</a></div>
             </article>
         </div>
     </section>
    );
}

export default portofolio;