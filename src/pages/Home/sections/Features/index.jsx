import FeatureCard from './FeatureCard';
import style from './Features.module.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

const Features = () => {

    let cards1 = [
        {
            'title': 'Gestão Completa de Pacientes',
            'description': 'Gerencie facilmente o cadastro, histórico e evolução dos tratamentos de seus pacientes, tudo em um só lugar.',
            'icon': <PermIdentityIcon style={{'color': '#0B5ED7'}}/>
        },
        {
            'title': 'Agendamento Online',
            'description': 'Ofereça aos seus pacientes a comodidade de  agendar consultas online, com confirmação automática e lembretes via WhatsApp.',
            'icon': <CalendarMonthOutlinedIcon style={{'color': '#0B5ED7'}}/>
        },
        {
            'title': 'Controle Financeiro',
            'description': 'Mantenha suas finanças sob controle, com relatórios  detalhados de faturamento, despesas e fluxo de caixa.',
            'icon': <CreditScoreOutlinedIcon style={{'color': '#0B5ED7'}}/>
        } 
    ]

    let cards2 = [
        {
            'title': 'Relatórios Avançados',
            'description': 'Obtenha insights sobre o desempenho da sua clínica,  com relatórios personalizados e gráficos intuitivos.',
            'icon': <ShowChartOutlinedIcon style={{'color': '#0B5ED7'}}/>
        },
        {
            'title': 'Gestão de Estoque',
            'description': 'Controle o estoque de materiais e medicamentos,  evitando desperdícios e garantindo a disponibilidade de insumos.',
            'icon': <AllInboxOutlinedIcon style={{'color': '#0B5ED7'}}/>
        },
        {
            'title': 'Atendimento Personalizado',
            'description': 'Ofereça um atendimento diferenciado com histórico completo do paciente e suporte via WhatsApp integrado.',
            'icon': <ChatOutlinedIcon style={{'color': '#0B5ED7'}}/>
        }
    ]

  return (
    <div className={style['features']}>
        <div className={style['features__title']}>
            <h1>Funcionalidades Principais</h1>
            <h2>Descubra o que Tech Tootch pode fazer por sua clínica</h2>
        </div>
        <div className={style['features__cards']}>
            {
                cards1.map((card, index) => (
                    <FeatureCard key={index} title={card.title} description={card.description} icon={card.icon}/>
                ))
            }
        </div>
        <div className={style['features__cards']}>
        {
                cards2.map((card, index) => (
                    <FeatureCard key={index} title={card.title} description={card.description} icon={card.icon}/>
                ))
            }
        </div>
    </div>
  );
};

export default Features;
