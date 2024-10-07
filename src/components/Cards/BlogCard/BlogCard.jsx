import { Container } from '@mui/material';
import style from './BlogCard.module.css';
import Button from '../../Button/Button';

const BlogCard = (props) =>{
    return(
        <Container maxWidth='sm' className={style['card_line']} style={{display: 'flex', padding: '0'}}>
           <img src={`${props.image}`}/>
            <div className={style['card_text']}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <Button text={'Leia Mais'} width={'fit-content'} height={'fit-content'} padding={'2% 4%'} radius={'2px'} margin={'3% 0 0 0'} fontSize={'0.8rem'}/>
            </div>
        </Container>
    )
}

export default BlogCard;