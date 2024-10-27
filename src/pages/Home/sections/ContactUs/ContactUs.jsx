import style from './ContactUs.module.css';
import fundo from "../../../../assets/ContactUs/ContactUs.png";
import Form from "../../../../components/Form/Form.jsx"


const ContactUs = ({ id }) =>{

    return(
        <div className={style['contactUs']} id={id} style={{backgroundImage: `url(${fundo})`}}>
            <h1>Fale Conosco</h1>
            <h2>Estamos aqui para ajudar. Entre em contato conosco</h2>
            <Form/>
        </div>
    )
} 

export default ContactUs;