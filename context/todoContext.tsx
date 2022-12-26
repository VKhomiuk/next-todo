import {createContext} from "react";
import {TodoItemTypes} from "../core/types/TodoItem-types";

function noop([]){}

export const TodoContext = createContext({
    todoArray: [] as TodoItemTypes[],
    setTodoArray: noop
})
