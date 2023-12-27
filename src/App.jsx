import React, { useEffect } from 'react'

//komponente
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import CarList from './components/CarList/CarList';
import Testimonials  from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

//za animacije:
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {

  const [theme, setTheme] = React.useState(localStorage.getItem("theme") ?
  localStorage.getItem("theme") : "light");

  const element = document.documentElement;
  useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme])


  //inicijalizacija AOS-a:
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh();
  })



  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero  theme={theme}/>
      <Services />
      <About />
      <CarList />
      <Testimonials />
      <Footer />
      
    </div>
  )
}

export default App