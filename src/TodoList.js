import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider';
import TodoItem from './TodoItem'
import uuid from 'uuid/v1'

function TodoList({todos, deleteTodo, toggleTodo, editTodo }){
    if(todos.length)
    return(
        <Paper>
            <List> 
                { todos.map((todo, index) => (
                    <>
                    <TodoItem 
                        key={todo.id} 
                        id={todo.id} 
                        todoTask={todo.task} 
                        completed={todo.completed} 
                        deleteTodo={deleteTodo} 
                        toggleTodo={toggleTodo}
                        editTodo = {editTodo}
                    />
                    {index < todos.length - 1 && <Divider  key={uuid()} />}
                    
                    </>
                ))}
            </List>
        </Paper>
    );
    return null;
}

export default TodoList;