import React from 'react'
import TodoCard from './TodoCard' 

export default function TodoList(props) {
    {/* destructuring todos from props */}
    const {todos} = props

    return (
        <ul className='main'>
        {/* use map() to create <li> elements for each item in todos array */}
        from TodoList.jsx (unordered list)<br/>
        {/* this syntax below is used to pass every prop in (includes func) */}
        {todos.map((todo, todoIndex) => {
            return (
                <TodoCard {...props} key={todoIndex} index={todoIndex}>
                    {`${todoIndex} - ${todo}`}
                </TodoCard>
            )
        })}
        </ul>
    )
}
