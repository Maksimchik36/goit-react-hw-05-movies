import { Link } from 'react-router-dom';
import { ButtonSt } from './Button.styled';

const Button = ({ text }) => {
    return <ButtonSt><Link to="/" style={{textDecoration: "none"}}>{ text }</Link></ButtonSt>
}

export default Button;