import React from 'react'

const List = (props) => {
    console.log(props);
    let {item,price}=props
  return (
    <>
    <h1 className={price>250 && price<500 && price<300 ? "white":"black"} >{item}</h1>
    <p>{price}</p>
    </>
  )
}

export default List