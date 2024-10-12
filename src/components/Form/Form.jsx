import style from './Form.module.css';
import Input from "../Input/InputForm.jsx";
import Button from '../Button/Button.jsx';
import { useState } from 'react';
import { useForm } from '@formspree/react';
import Alert from '../Alert/AlertSuccess/AlertSuccess.jsx';

function Form(){
    const [formData, setFormData] = useState();
    const [state, handleSubmit] = useForm("xlderwev");
    const [alertMessage, setAlertMessage] = useState(false);

    const form = [
        {
            'type': 'text',
            'label': 'Nome',
            'placeholder': 'Seu nome',
            'name': 'Nome',
            'value': 'nome'
        },
        {
            'type': 'email',
            'label': 'E-mail',
            'placeholder': 'seuemail@exemplo.com',
            'name': 'Email',
            'value': 'email'
        }
    ]

    const saveFields = (event) => {
        handleSubmit(event);
        message();
    }
    
    function message(){
        if(!alertMessage){
            setAlertMessage(true);
            setTimeout(() => {
                setAlertMessage(false); 
            }, 3000); 
        }
    }
    
    
    return(
        <form className={style['form']} onSubmit={saveFields}>
            {alertMessage && <Alert text="Formulário enviado com sucesso!!"/>
            }
           {
            form.map((input) =>(
                <Input label={input.label} nameForm={input.name} placeholder={input.placeholder} class={input.class} type={input.type} value={`${formData}.${input.value}`}/>
            ))
           }
           <label>Mensagem</label>
           <textarea placeholder='Sua Mensagem' name='Mensagem' required/>
           <Button text={'Enviar Mensagem'} width={'100%'} height={'fit-content'} padding={'2% 0'} radius={'10px'} fontSize={'1.1rem'} type="submit"/>
        </form>
    )
}

export default Form;