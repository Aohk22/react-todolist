import React, { useState } from "react"

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props;

    return (
        <header>

            from todoinput.jsx (header)<br/>

            <input 
                value={todoValue} onChange={(e) => {setTodoValue(e.target.value);}} 
                placeholder="enter todo">
            </input>

            <button 
                onClick={() => { 
                    handleAddTodos(todoValue); 
                    setTodoValue('');}}
                >
                submit
            </button>

        </header>
    )
}
