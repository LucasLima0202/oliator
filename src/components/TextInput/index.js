import { useState } from 'react'
import './TextInput.css'




const TextInput = (props) => {

   
    const typing = (event) => {
        props.onChanging(event.target.value)
    }

    return (
        <div className="font-text">
            <label >
                {props.label}
                <input value={props.value} onChange={typing} required={props.required} placeholder={props.placeholder} />
            </label>
        </div>
    )


}
//most commun
export default TextInput