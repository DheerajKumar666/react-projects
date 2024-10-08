import React from 'react'
import List from './List'

const Grocery = () => {

let obj=[
{
    item: "Milk",
    price: 100,
    id: 1
},
{
    item: "sugar",
    price: 400,
    id: 2
},
{
    item: "flour",
    price: 250,
    id: 3
},
{
    item: "rice",
    price: 550,
    id: 4
},
{
    item: "juice",
    price: 300,
    id: 5
},
{
    item: "bread",
    price: 200,
    id: 6
},
{
    item: "dryfruits",
    price: 600,
    id: 7
},
{
    item: "Maggie",
    price: 450,
    id: 8
}

]

  return (
    <>
    {
     obj.map((value)=>{
     return <List key={value.id} {...value} />
     })   
    }
    </>
    
  )
}

export default Grocery