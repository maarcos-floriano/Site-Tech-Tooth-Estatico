import style from './Plans.module.css'
import PlansCard from '../../../../components/Cards/PlansCard/PlansCard'

const Plans = () => {

    const listCard = [
        {
            'title': 'Básico',
            'price': '99',
            'description': 'Gestão de Pacientes \n Agendamentos \nSuporte Básico'
        },
        {
            'title': 'Profissional',
            'price': '199',
            'description': 'Gestão Completa \nAgendamentos e Finanças \nSuporte Prioritário'
        },
        {
            'title': 'Prime',
            'price': '299',
            'description': 'Todos os Recursos \nSuporte Dedicado \n Integrações Avançadas'
        }
    ]

    return (
        <div className={style['plans']}>
            <div className={style['plans_title']}>
                <h1>Planos e Preços</h1>
                <h2>Escolha o plano que melhor atende às suas necessidades</h2>
            </div>
            <div className={style['card_line']}>
                {
                    listCard.map((card, index) => (
                        <PlansCard 
                            key={index} 
                            title={card.title} 
                            price={card.price} 
                            description={card.description.split('\n').map((line, i) => (
                                <span key={i}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Plans;