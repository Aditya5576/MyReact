import { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'

let count = 0;
const Todo = () => {

    const [todos, setTodos] = useState([])          //useState property

    const inputRef =  useRef(null)                  //useRef property

    const add = ()=>{           
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
        inputRef.current.value = ""

    }

    useEffect(()=>{
        console.log(todos)          ///to print it on console
    },[todos])


  return (
    <div className='todo'>
        <div className='todo-header'>To-Do List</div>
        <div className="todo-add">
            <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input'/>
        </div>
        <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>

        <div className="todolist">

        </div>
      
    </div>
  )
}

export default Todo
