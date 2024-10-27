import PlansCard from '../../../../components/Cards/PlansCard/PlansCard';
import TestimonialsCard from '../../../../components/Cards/TestimonialsCard/TestimonialsCard';
import style from './Testimonials.module.css';
import testimony01 from '../../../../assets/Testimony/testimony01.png';
import testimony02 from '../../../../assets/Testimony/testimony02.png';
import testimony03 from '../../../../assets/Testimony/testimony03.png';

const Testimonials = ({ id }) =>{

    const listTestimonials = [
        {
            'image': `${testimony01}`,
            'testimony': '"O sistema da Tech Tooth revolucionou a maneira como gerimos nossa clínica. A interface é intuitiva e o suporte é excelente!"',
            'author': 'Dr. João Silva'
        },
        {
            'image': `${testimony02}`,
            'testimony': '"Desde que começamos a usar o sistema da Tech Tooth, nosso fluxo de trabalho ficou muito mais eficiente e organizado."',
            'author': 'Dra. Maria Oliveira'
        },
        {
            'image': `${testimony03}`,
            'testimony': '"Recomendo a Tech Tooth para qualquer clínica que queira otimizar seus processos e crescer com sustentabilidade."',
            'author': 'Dr. Carlos Pereira'
        }
    ]
    
    return(
        <div className={style['testimonials']} id={id}>
            <div className={style['testimonials-title']}>
                <h1>Depoimentos</h1>
                <h2>Veja o que nossos clientes estão dizendo</h2>
            </div>
            <div className={style['card_line']}>
                { 
                    listTestimonials.map((card, index) =>(
                        <TestimonialsCard
                        key={index}
                        image={card.image}
                        testimony={card.testimony}
                        author={card.author}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials;