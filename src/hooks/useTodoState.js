import React, { useState } from 'react'
import useLocalStorageState from './useLocalStorageState'
import uuid from 'uuid/v1'

function useTodoState(initialTodos){


    // const [todoArry, setTodo] = useState(initialTodos)
    const [todoArry, setTodo] = useLocalStorageState("todos", initialTodos)
    const addTodo = newTodoText => {
        setTodo(
            [...todoArry, {id: uuid(), task: newTodoText, completed: false}]
        )
    }

    const deleteTodo = id => {
        const updatedTodo = todoArry.filter(todo => todo.id !== id);
        setTodo(updatedTodo)
    }

    const toggleTodo = id => {
        const updatedTodo = todoArry.map(todo => 
            todo.id === id ? {...todo, completed: !todo.completed } : todo
        )
        setTodo(updatedTodo);
    }

    const editTodo = (id, newTask) => {
        const updatedTodo = todoArry.map(todo =>
            todo.id === id ? {...todo, task: newTask } : todo
        )
        setTodo(updatedTodo)
    }
    return {
        todoArry,
        addTodo: addTodo,
        deleteTodo: deleteTodo,
        toggleTodo: toggleTodo,
        editTodo: editTodo
    }

}
export default useTodoState;