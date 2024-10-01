import FeatureCard from './FeatureCard';
import './Features.css';

const Features = () => {

    let cards = [
        {
            'title': 'Gestão Completa de Pacientes',
            'description': 'Gerencie facilmente o cadastro, histórico e evolução dos tratamentos de seus pacientes, tudo em um só lugar.',
            'icon': <i className="fas fa-calendar-alt"></i>
        },
        {
            'title': 'Prontuário Eletrônico',
            'description': 'Tenha acesso ao histórico de seus pacientes de forma prática e segura.',
            'icon': <i className="fas fa-file-medical-alt"></i>
        },
        {
            'title': 'Teleconsulta',
            'description': 'Realize consultas online com seus pacientes de forma segura e prática.',
            'icon': <i className="fas fa-video"></i>
        } 
    ]

  return (
    <div className='features'>
        <div>
            <h1>Funcionalidades Principais</h1>
            <h2>Descubra o que Tech Tootch pode fazer por sua clínica</h2>
        </div>
        <div>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
        </div>
        <div>
            {
                cards.map((card, index) => (
                    <FeatureCard key={index} title={card.title} description={card.description} icon={card.icon}/>
                ))
            }
        </div>
    </div>
  );
};

export default Features;
