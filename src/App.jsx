import React from "react";
import './app.css';
import About from "./Components/About Section/About";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home Section/Home";
import Skills from "./Components/Skills Section/Skills";
import Projects from "./Components/Projects Section/Projects";
import Contact from "./Components/Contact Section/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default App;