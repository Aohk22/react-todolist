{/* use useEffect is used for local storage */}
import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
    {/* a variable that a user will interact with is a stateful varible */}
    {/* a set function is provided to update that variable */}
    const [todos, setTodos] = useState([])
    const [todoValue, setTodoValue] = useState('');


    function persistData(newList) {
        localStorage.setItem('todos', JSON.stringify({ todos: newList }))
    }

    function handleAddTodos(newTodo) {
        const newTodoList = [...todos, newTodo];
        persistData(newTodoList);
        setTodos(newTodoList);
    }

    function handleDeleteTodo(index) {
        const newTodoList = todos.filter((_, todoIndex) => {
            return todoIndex !== index;
        })
        persistData(newTodoList);
        setTodos(newTodoList);
    }

    function handleEditTodo(index) {
        const valueToBeEdited = todos[index];
        setTodoValue(valueToBeEdited);
        handleDeleteTodo(index);
    }


    {/* this runs everytime page reloads because dependency array is empty */}
    useEffect(() => {
        if (!localStorage) {
            return
        }

        let localTodos = localStorage.getItem('todos');
        if (!localTodos) {
            return
        }

        localTodos = JSON.parse(localTodos).todos;
        setTodos(localTodos);
    }, [])


    return (
        <>
            {/* react state will be used to work with this */}
            <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}></TodoInput>

            {/* TodoCard will be rendered by TodoList */}
            {/* pass in the array as a html attribute */}
            <TodoList 
                handleDeleteTodo={handleDeleteTodo} 
                handleEditTodo={handleEditTodo}
                todos={todos}
            >
            </TodoList>
        </>
    )
}

export default App
