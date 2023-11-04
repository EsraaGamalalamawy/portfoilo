import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Main from "./component/main";
import Header from "./component/header";
import Skills from "./component/skills";
import About from "./component/about";
import Contact from "./component/contact";
import Proj from "./component/proj";


const App=()=>{
  return(
    <BrowserRouter>
      <Header/>
      <Main/>
      <About/>
      <Skills/>
      <h1 className='title' id="project">Projects</h1>
      <Proj/>
      <Contact/>
    </BrowserRouter>
  )
}
export default App