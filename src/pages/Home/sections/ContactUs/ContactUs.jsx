import style from './ContactUs.module.css';
import fundo from "../../../../assets/contactUs.png";
import Form from "../../../../components/Form/Form.jsx"
import PropTypes from 'prop-types';


const ContactUs = ({ id }) =>{

    return(
        <div className={style['contactUs']} id={id} style={{backgroundImage: `url(${fundo})`}}>
            <h1>Fale Conosco</h1>
            <h2>Estamos aqui para ajudar. Entre em contato conosco</h2>
            <Form/>
        </div>
    )
} 
ContactUs.propTypes = {
    id: PropTypes.string.isRequired,
};

export default ContactUs;