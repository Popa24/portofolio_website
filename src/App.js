import React from "react";
import './App.css';

import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/About";
import Experience from "./components/experience/experience";
import Portofolio from "./components/portofolio/portofolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { useState, useEffect } from "react";
import RingLoader from 'react-spinners/RingLoader'
function App() {
  let [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
    setLoading(false);
    },1500)
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
        <Portofolio/>
        <Contact />
        <Footer/></div>
      }

    </>
  );
}

export default App;
