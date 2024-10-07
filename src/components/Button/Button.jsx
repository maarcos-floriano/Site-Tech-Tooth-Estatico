import style from './Button.module.css';

const Button = (props) =>{
    return(
        <>
        <button className={style['button']} style={{width: `${props.width}`, height: `${props.height}`, margin: `${props.margin}`, padding: `${props.padding}`, borderRadius: `${props.radius}`, fontSize: `${props.fontSize}`}} type='submit'>
            {props.text}
        </button>
        </>
    )
}

export default Button;