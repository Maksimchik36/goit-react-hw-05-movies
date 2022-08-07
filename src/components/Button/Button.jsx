import PropTypes from 'prop-types'; 
import { ButtonSt } from './Button.styled';

const Button = ({ text, onClick }) => {
    return <ButtonSt onClick={onClick}>{ text }</ButtonSt>
}


Button.propTypes = {
    text: PropTypes.string.isRequired,
}


export default Button;