import { useState } from "react";
import { FormSt, FormButtonSt, FormInputSt } from "./Form.styled";
import { FcSearch } from 'react-icons/fc';


const Form = ({onSubmit}) => {
    const [query, setQuery] = useState('');

    // записывает введённое значение в query в Form
  const handleInput = (e) => {
    const {value} = e.currentTarget;
    setQuery(value.trim().toLowerCase())
  }

  // вызывается ф-я onSubmit из Movies и записывается значение из query (Form) - в query (Movies)
  const handleSubmit = (e) => {
    e.preventDefault();
        
    if(!query){
      alert("Введите Ваш запрос");
      return;
    }

    onSubmit(query); // вызов ф-и из Movies
    setQuery('');   
  }

    return (
        <FormSt onSubmit={handleSubmit}>
                    <FormButtonSt type="submit">
                      <FcSearch style={{height: "2em", width: "2em",}}/>
                    </FormButtonSt>

                    <FormInputSt
                      onChange = {handleInput}
                      value = {query}
                      type="text"
                      autoComplete="off"
                      autoFocus
                      placeholder="Search movie"
                    />
                 </FormSt>
    )
}

export default Form;