import React, { useState } from 'react'
import './global.css'
import Form from './Form'
import ToDoList from './ToDoList'
import { v4 as uuidv4 } from 'uuid';

const App = () => {

let [state,setState]=useState({
  items: [],
  course: "",
  trainer: "",
  id: uuidv4()
})

let handleChange=(e)=> {
  let {name,value}=e.target
  setState({...state, [name]: value})
}

let handleSubmit=(e)=> {
e.preventDefault()
let newItem={
  id: state.id,
  course: state.course,
  trainer: state.trainer
}
let finalItems= [...state.items, newItem]

setState({
items: finalItems,
id: uuidv4(),
course: "",
trainer: ""
})

}

console.log(state);

let handleDelete=(x)=> {
  let filteredItem=state.items.filter((item)=>item.id !=x)
  setState({...state, items: filteredItem})
}

let handleUpdate=(y)=> {
let restItem = state.items.filter((value)=>value.id != y)
let selectedItem = state.items.find((value)=>value.id == y)
setState({...state, 
  items: restItem, 
  course: selectedItem.course, 
  trainer: selectedItem.trainer})
}

  return (
    <>
    <article>
        <h1>ToDoList</h1>
        <main>
        <Form course={state.course}
         trainer={state.trainer} 
         handleChange={handleChange} 
         handleSubmit={handleSubmit}/>
        <ToDoList items={state.items} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        </main>
    </article>

    </>
  )
}

export default App