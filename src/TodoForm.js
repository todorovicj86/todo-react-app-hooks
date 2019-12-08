import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import useInputState from '././hooks/useInputState'

function TodoForm(props){
    const [todo, setTodo, reset] = useInputState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.addTodo(todo);
        reset("Add New Todo");
    }
    return(
        <Paper style={{margin:" 1rem 0", padding: "0 1rem"}}>
            <form onSubmit ={handleSubmit}>
                 <TextField
                    id="standard-name"
                    label="Add New Todo"
                    // className={classes.textField}
                    value={todo}
                    onChange={setTodo}
                    margin="normal"
                    fullWidth
                />
            </form>
        </Paper>
    )
}

export default TodoForm;