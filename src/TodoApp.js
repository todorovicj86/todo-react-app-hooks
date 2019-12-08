import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import useTodoState from './hooks/useTodoState'
import useLocalStorageState from './hooks/useLocalStorageState'
import uuid from 'uuid/v1'


function TodoApp() {
    const seedTodos = [
        {id: uuid(), task: "Buy bread", completed: false, isEditing: true},
        {id: uuid(), task: "Fix car key", completed: true, isEditing: false},
        {id: uuid(), task: "Meditate", completed: false, isEditing: false},
    ]
    // const [initialTodos, setTodo] = useLocalStorageState("todos", seedTodos)
    
    const {todoArry, addTodo, deleteTodo, toggleTodo, editTodo} = useTodoState(seedTodos);
    // const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
    // const [todoArry, setTodo] = useState(initialTodos)

    // useEffect(()=>{
    //     window.localStorage.setItem("todos", JSON.stringify(todoArry))
    // },[todoArry])

    // const addTodo = newTodoText => {
    //     setTodo(
    //         [...todoArry, {id: uuid(), task: newTodoText, completed: false}]
    //     )
    // }

    // const deleteTodo = id => {
    //     const updatedTodo = todoArry.filter(todo => todo.id !== id);
    //     setTodo(updatedTodo)
    // }

    // const toggleTodo = id => {
    //    const updatedTodo = todoArry.map(todo => 
    //         todo.id === id ? {...todo, completed: !todo.completed } : todo
    //    )
    //    setTodo(updatedTodo);
    // }

    // const editTodo = (id, newTask) => {
    //     const updatedTodo = todoArry.map(todo =>
    //         todo.id === id ? {...todo, task: newTask } : todo
    //     )
    //     setTodo(updatedTodo)
    // }
    
    return(
        <Paper 
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            // for box-shadow
            elevation={0}
        >
            <AppBar color="primary" position="static" style={{height: "64px"}}>
                <Toolbar>
                    <Typography>
                    TODO APP WITH HOOKS
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{marginTop: "1em"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo = {addTodo} />
                    <TodoList 
                        todos={todoArry} 
                        deleteTodo={deleteTodo} 
                        toggleTodo = {toggleTodo}
                        editTodo = {editTodo}
                    />

                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;

