import React from "react"
import './App.css';
// import Sidenav from "./Components/Sidenav/Sidenav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
    
    {/* <Sidenav /> */}
    <Home />
    <About/>
    <Services/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
