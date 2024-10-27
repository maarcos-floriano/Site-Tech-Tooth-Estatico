import { Button } from '@mui/material';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <h1 className='about-title'>Transforme a Gestão da Sua Clínica Odontológica</h1>
      <h2 className='about-text'>Automatize processos, otimize atendimentos e cresça com eficiência.</h2>
      <Button variant='outline' sx={{border: 1, padding: '2vh 2vw'}} onClick={() => { window.location.href = '#contato'; }}>Solicitar Demonstração</Button>
    </div>
  );
};

export default About;
