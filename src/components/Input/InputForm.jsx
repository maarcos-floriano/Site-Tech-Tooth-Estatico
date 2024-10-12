import style from './Input.module.css';

const Input = (props) => {
    return(
        <>
        <label className={style['label']}>{props.label}</label>
        <input type={props.type} name={props.nameForm} placeholder={props.placeholder} required/>
        </>
    )
}

export default Input;