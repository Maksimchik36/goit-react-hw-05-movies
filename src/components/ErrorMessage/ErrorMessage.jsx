import { ErrorMessageSt } from "./ErrorMessage.styled";

const ErrorMessage = ({ text }) => {
    console.log("Error Message");
    return <ErrorMessageSt>{text}</ErrorMessageSt>
}

export default ErrorMessage;