import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import useInputState from '././hooks/useInputState'

function TodoEditForm({id, todoTask, setEditing, editTodo}){
    const [todo, setTodo, reset] = useInputState(todoTask)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        editTodo(id, todo );
        reset();
        setEditing();
    }
    return(
     <form style={{width: "100%"}} onSubmit = {handleSubmit}>
        <TextField
           id="standard-name"
           label="Edit Todo"
           // className={classes.textField}
           value={todo}
           onChange={setTodo}
           margin="normal"
           fullWidth
           autoFocus
       />
       <Button color="primary" variant="contained" onClick={handleSubmit}>Save</Button>

       </form>
    )
}

export default TodoEditForm;