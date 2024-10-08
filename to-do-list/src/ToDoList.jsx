import React, { Fragment } from 'react'

const ToDoList = (props) => {
  console.log(props);

let {items,handleDelete,handleUpdate}=props

  return (
    <>
    <section className='todo'>
    <h2>Courses</h2>
    <table>
      <thead>
        <th>ID</th>
        <th>Course</th>
        <th>Trainer</th>
        <th>Actions</th>
      </thead>
      <tbody>
        {
          items.length>0 && items.map((value)=>{
          return (
            <Fragment key={value.id}>
             <tr>
              <td>{value.id}</td>
              <td>{value.course}</td>
              <td>{value.trainer}</td>
              <td>
                <button onClick={()=>handleDelete(value.id)}>Delete</button>
                <button onClick={()=>handleUpdate(value.id)}>Update</button>
              </td>
             </tr>
            </Fragment>
          )
          })
        }
      </tbody>
    </table>
    </section>
    </>
  )
}

export default ToDoList