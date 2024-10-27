import style from './Blog.module.css';
import BlogCard from '../../../../components/Cards/BlogCard/BlogCard';
import BlogImage01 from '../../../../assets/Blog/blog01.png';
import BlogImage02 from '../../../../assets/Blog/blog02.png';
import BlogImage03 from '../../../../assets/Blog/blog03.png';

const Blog = ({ id }) => {
    const listNews =[
        {
            'image': `${BlogImage01}`,
            'title': 'Como otimizar a gestão da sua clínica',
            'description': 'Descubra estratégias para melhorar a gestão do seu consultório odontológico e aumentar a eficiência.'
        },
        {
            'image': `${BlogImage02}`,
            'title': 'Inovações tecnológicas na odontologia',
            'description': 'Descubra estratégias para melhorar a gestão do seu consultório odontológico e aumentar a eficiência.'
        },
        {
            'image': `${BlogImage03}`,
            'title': 'A importância da gestão financeira na clínica',
            'description': 'Descubra estratégias para melhorar a gestão do seu consultório odontológico e aumentar a eficiência.'
        }
    ]
    return (
        <div className={style['blog']} id={id}>
            <div className={style['blog-title']}>
                <h1>Nosso Blog</h1>
                <h2>Dicas, novidades e muito mais para você se manter atualizado</h2>
            </div>
            <div className={style['blog-news-card']}>
                {
                    listNews.map((card,index) =>(
                        <BlogCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Blog;