import style from './Form.module.css';
import Input from "../Input/InputForm.jsx";
import Button from '../Button/Button.jsx';

const Form = () =>{

    const form = [
        {
            'type': 'text',
            'label': 'Nome',
            'placeholder': 'Seu nome',
            'name': 'Nome'
        },
        {
            'type': 'email',
            'label': 'E-mail',
            'placeholder': 'seuemail@exemplo.com',
            'name': 'Email'
        }
    ]

    const saveFields = (event) => {
        debugger
        event.preventDefault(); 
        const formData = event.target; 
        console.log(formData);
    }
    
    return(
        <form action="https://formspree.io/f/xlderwev" method="POST" >
           {
            form.map((input) =>(
                <Input label={input.label} nameForm={input.name} placeholder={input.placeholder} class={input.class} type={input.type} required/>
            ))
           }
           <label>Mensagem</label>
           <textarea placeholder='Sua Mensagem' name='Mensagem' required/>
           <Button text={'Enviar Mensagem'} width={'100%'} height={'fit-content'} padding={'2% 0'} radius={'10px'} fontSize={'1.1rem'}/>
        </form>
    )
}

export default Form;