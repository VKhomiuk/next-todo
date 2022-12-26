import React, {useState} from "react";

import Todo from "./components/Todo"
import Header from "./components/Header";
import {TodoContext} from "../context/todoContext";
import {TodoItemTypes} from "../core/types/TodoItem-types";

export default function Home() {

    const [todoArray, setTodoArray] = useState<TodoItemTypes[]>([])

  return (
      <TodoContext.Provider value={{todoArray, setTodoArray}}>
          <div className='app'>
              <div className='wrapper'>
                  <Header />
                  <Todo/>
              </div>
          </div>
      // </TodoContext.Provider>
  )
}
