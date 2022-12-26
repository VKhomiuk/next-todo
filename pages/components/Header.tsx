import React, {useContext, useState} from "react";
import {TodoContext} from "../../context/todoContext";
import {TodoItemTypes} from "../../core/types/TodoItem-types";

export default () => {

    const {todoArray, setTodoArray} = useContext(TodoContext)
    const [todoItem, setTodoitem] = useState<TodoItemTypes>({title: '', description: '', done: false, index: todoArray.length + 1})

    const handleNewTodo = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if(e.target.id === 'title'){
            setTodoitem({...todoItem, title: e.target.value})
        }else if(e.target.id === 'description'){
            setTodoitem({...todoItem, description: e.target.value})
        }
    }

    const addNewTodo = () => {
        setTodoArray([...todoArray, todoItem])
        setTodoitem({title: '', description: '', done: false, index: todoArray.length + 1})
    }

    return (
        <div className='header'>
            <table>
                <tbody>
                    <tr>

                        <td>Title</td>
                        <td>Description</td>
                    </tr>
                    <tr>
                        <td><input value={todoItem.title} onChange={e => handleNewTodo(e)} id='title' type="text"/></td>
                        <td><input value={todoItem.description} onChange={e => handleNewTodo(e)} id='description' type="text"/></td>
                        <td>
                            <button onClick={addNewTodo}>Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}
