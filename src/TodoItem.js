import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggle from './hooks/useToggle'
import TodoEditForm from './TodoEditForm'
import uuid from 'uuid/v1'

function TodoItem({todoTask, completed, id, deleteTodo, toggleTodo, editTodo}){
    const [isEditing, setEditing] = useToggle(false)
   
    return(
        <>
            <ListItem key={uuid()} style={{height: "64px"}}>
                {isEditing ?
                    <TodoEditForm 
                        todoTask={todoTask}
                        id={id}
                        setEditing = {setEditing}
                        editTodo = {editTodo}
                    />
                :
                <>
                    <Checkbox onClick={() => toggleTodo(id)} checked = {completed} tabIndex ={-1} />
                    <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                        {todoTask}
                    </ListItemText>
                    <IconButton aria-label="Delete" onClick={() => deleteTodo(id)} id={id}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick = {setEditing}>
                        <EditIcon />
                    </IconButton>
                </>
                
            }
            </ListItem>
        </>
    )
}

export default TodoItem;