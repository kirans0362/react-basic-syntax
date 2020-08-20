import React from 'react';
import  './UserInput.css';

const userInput = (props) =>{
    return(
        <div className="inputClass">
            <label>UserName: </label>
            <input type ="text" onChange={props.change}></input>
        </div>
    );
}

export default userInput;