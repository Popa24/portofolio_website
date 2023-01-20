import React from "react";
import './App.css';
import about from "./components/about/About";

import experience from "./components/experience/experience";
import footer from "./components/footer/footer";
import header from "./components/header/header";
import nav from "./components/nav/nav";
import portofolio from "./components/portofolio/portofolio";
import services from "./components/services/services";
import testimonials from "./components/testimonials/testimonials";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/About";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Portofolio from "./components/portofolio/portofolio";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { useState, useEffect } from "react";
import RingLoader from 'react-spinners/RingLoader'


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
function App() {
  let [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
    setLoading(false);
    },3000)
  },[])
  return (

    <>
      {loading ?<div className="App"> <RingLoader
              color=" #4db5ff"
              align-items
              size={150}
              speedMultiplier={0.5}
          />  </div>
      : <div><Header/>
        <Nav/>
        <About/>
        <Experience/>
      {/*<Services/>*/}
        <Portofolio/>
      {/*<Testimonials/>*/}
        <Contact/>
        <Footer/></div>
      }

    </>
  );
}

export default App;
