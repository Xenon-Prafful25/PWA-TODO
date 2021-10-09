import React from 'react';
import deleteIcon from './delete-svgrepo-com.svg';
import checked from './check-svgrepo-com.svg';
import unchecked from './icons8-cancel.svg';

const Todo=({todo,completeTodo,removeTodo})=>{
    
    const HandleComplete=()=>{
        completeTodo(todo.id);
    }
    const HandleDelete=()=>{
        removeTodo(todo.id);
    }

    return(
        <div>
            <div className="todo">
            <p className={todo.completed?"checked":""}>
                {todo.text}
            </p>
            <div>
            <div onClick={HandleComplete} className="check-btn common-button">{todo.completed?<img src={unchecked} />:<img src={checked} />}</div>
            <div className="delete-btn common-button" onClick={HandleDelete}><img src={deleteIcon}/></div>
            </div>
            </div>
        </div>
    );
}

export default Todo;    