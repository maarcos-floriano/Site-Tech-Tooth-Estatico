import Navbar from "../../components/NavBar";

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
    </>
  );
};

export default Home;
