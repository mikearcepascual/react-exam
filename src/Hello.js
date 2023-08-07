import './App.css'
import {useState, useReducer, useRef} from 'react'

function Hello(){
    const [name, setName] = useState('')

    function handleChange(e)
    {
        e.preventDefault()
        setName(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()
        setNameField()
    }

    const [nameField, setNameField] = useReducer((nameField) => {
        nameField = name;

        setName(nameField);
        return nameField;
    }, '')
    return(
        <div className='hello'>
           <form onSubmit>
            <label htmlFor='name'>Enter Your Name: {nameField}</label>
            <br/>
            <input id='name' type='text' onChange={handleChange} value={name}/>
            <button className='btn' onClick={onSubmit}>Submit</button>
           </form>
        </div>
    );
}
export default Hello;