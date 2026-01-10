import React from 'react'
import { Navbar } from './layouts/Navbar';
import { About } from "./sections/About"
import {Contact} from "./sections/Contact"
import {Experience} from "./sections/Experience"
import {Hero} from "./sections/Hero"
import {Projects} from "./sections/Projects"
import { Footer } from './layouts/Footer';


function App(){
  return (
    <div className="min-h-screen overflow-x-hidden">
      
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
       
        <Contact/>

      </main>
      <Footer/>
    </div>
  )
}

export default App;
