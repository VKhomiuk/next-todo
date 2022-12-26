import React, {FunctionComponent, useContext, useState} from "react";
import {TodoItemTypes} from "../../core/types/TodoItem-types";
import {TodoContext} from "../../context/todoContext";

const Todo = () => {

    const {todoArray, setTodoArray} = useContext(TodoContext)

    const setDoneTodo = (index: number, isDone: boolean) => {
        setTodoArray(todoArray.map(el => el.index === index ? {...el, done: !el.done} : el ))
    }

    const setEditTodo = (todo: TodoItemTypes) => {
        setTodoArray(todoArray.map(el => el.index === todo.index ? todo : el))
    }

    const deleteTodo = (index: number) => {
        setTodoArray(todoArray.filter(el => el.index !== index))
    }

    return (
        <div className='todo'>
            {todoArray.map((el: TodoItemTypes, index: number) => {
                return <TodoItem
                            title={el.title}
                            description={el.description}
                            done={el.done}
                            index={el.index}
                            setDoneTodo={setDoneTodo}
                            setEditTodo={setEditTodo}
                            deleteTodo={deleteTodo}
                        />
            } )}
        </div>
    )
}
const TodoItem:FunctionComponent<TodoItemTypes> = ({title, description, done, index, setDoneTodo, setEditTodo, deleteTodo}) => {
    const [isEdit, setIsEdit] = useState<boolean>(false)

    const [newTodo, setNewTodo] = useState({title, description, done, index})

    const handleEditTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo({...newTodo, title: e.target.value})
    }

    const handleEditTodoDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewTodo({...newTodo, description: e.currentTarget.value})
    }

    return (
        <div onDoubleClick={() => {
            setIsEdit(!isEdit)

        }} className='todo__item'>
            <div className="todo__item-header">
                <h1 data-is-edit={isEdit}>{title}</h1>
                <input
                    onChange={e => handleEditTodoTitle(e)}
                    id={'title'}
                    placeholder={'Title'}
                    data-is-edit={isEdit}
                    type="text"
                    value={newTodo.title}
                />
                <input onClick={() => setDoneTodo(index,done)} data-is-edit={isEdit} checked={done} type="checkbox" name="" id=""/>
                <span onClick={() => deleteTodo(index)} data-is-edit={!isEdit}>X</span>
            </div>
            <p data-is-edit={isEdit}>{description}</p>
            <textarea
                onChange={e => handleEditTodoDescription(e)}
                id={'description'}
                placeholder={'Description'}
                data-is-edit={isEdit}
                value={newTodo.description}

            />
            <button onClick={() => {
                setEditTodo(newTodo)
                setIsEdit(false)
            }} data-is-edit={isEdit} >Confirm</button>
        </div>
    )
}

export default Todo
