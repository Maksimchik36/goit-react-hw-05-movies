import PropTypes from 'prop-types'; 
import { ErrorMessageSt } from "./ErrorMessage.styled";

const ErrorMessage = ({ text }) => {
    return <ErrorMessageSt>{text}</ErrorMessageSt>
}


ErrorMessage.propTypes = {
    text: PropTypes.string.isRequired,
}


export default ErrorMessage;