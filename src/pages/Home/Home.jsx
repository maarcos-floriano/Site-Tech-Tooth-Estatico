import React from 'react';
import Navbar from "../../components/NavBar/Navbar";
import About from "./sections/About/About";
import Features from "./sections/Features/Features";
import Plans from "./sections/Plans/Plans";
import Testimonials from "./sections/Testimonials/Testimonials";
import Blog from "./sections/Blog/Blog.jsx";
import ContactUs from "./sections/ContactUs/ContactUs.jsx";
import Footer from "./sections/Footer/Footer.jsx";

const Home = () => {

  const urls = [
    { title: 'Home', href: '#home'},
    { title: 'Funcionalidades', href: '#funcionalidades' },
    { title: 'Preços', href: '#precos' },
    { title: 'Depoimentos', href: '#depoimentos' },
    { title: 'Blog', href: '#blog' },
    { title: 'Contato', href: '#contato' }
  ];

  return (
    <>
      <div id="home">
      <Navbar items={urls} />
      </div>
        <About />
      <div id="funcionalidades">
        <Features />
      </div>
      <div id="precos">
        <Plans />
      </div>
      <div id="depoimentos">
        <Testimonials />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contato">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};

export default Home;
