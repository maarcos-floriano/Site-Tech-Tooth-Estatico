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
    { title: 'Home', href: '/' },
    { title: 'Funcionalidades', href: '/funcionalidades' },
    { title: 'Preços', href: '/precos' },
    { title: 'Depoimentos', href: '/depoimento' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contato', href: '/contato' }
  ];

  return (
    <>
        <Navbar items={urls}/>
        <About/>
        <Features/>
        <Plans/>
        <Testimonials/>
        <Blog/>
        <ContactUs/>
        <Footer/>
    </>
  );
};

export default Home;
