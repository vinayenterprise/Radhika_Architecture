import React from "react"
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfollio from "./sections/Portfollio";
import Working from "./sections/Working";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Quality from "./sections/Quality";


export default function App() {
  return(
  <>
  <Header/>
  <Hero/>
  <About/>
  <Quality/>
  <Portfollio/>
  <Working/>
  <Contact/>
  <Footer/>
  </>
  )
}