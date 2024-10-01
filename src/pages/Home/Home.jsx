import Navbar from "../../components/NavBar";
import About from "./sections/About";
import Features from "./sections/Features";

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
    </>
  );
};

export default Home;
