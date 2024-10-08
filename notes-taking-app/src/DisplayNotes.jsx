import { useContext } from "react"
import { TaskContextApi } from "./TaskProvider"

const DisplayNotes = () => {
     let data = useContext(TaskContextApi)  
     console.log(data);
     let {task , selective , handleCategory,handleUpdate,handleDelete} = data 

     let {selectedCategory} = selective

  return (
    <main className="displaySection">
        <section className="selectedNotes">
            <div className="selectDisplayBlock" value={selectedCategory} onChange={handleCategory}>
                <label>Select the category</label>
                <input type="radio" name='selectedCategory' value="all"/>  <span>All</span>
                <input type="radio" name='selectedCategory' value="general"/>  <span>General</span> 
                <input type="radio" name='selectedCategory' value="official"/>  <span>Official</span>
                <input type="radio" name='selectedCategory' value="technical"/>  <span>Technical</span>
            </div>

            <main className="displayBlock">
              <div className="displayNote">
              {
                task.length == 0 ? "Loading....."  : task.map((value)=>{
                   return selectedCategory == "all" ? (
                    <div className="output" key={value.id}>
                        <h1>Title : {value.title}</h1>
                        <p>Description : {value.description.slice(0,10)}</p>
                        <p>Category : {value.category}</p>
                        <div className="btn">
                        <button onClick={()=>handleUpdate(value.id)} >Update</button>
                        <button onClick={()=>handleDelete(value.id)} >Delete</button>
                        </div>
                        
                    </div>
                   )  : (
                     selectedCategory == value.category && (
                        <div className="output" key={value.id}>
                        <h1>Title : {value.title}</h1>
                        <p>Description : {value.description.slice(0,10)}</p>
                        <p>Category : {value.category}</p>
                        <div className="btn">
                        <button onClick={handleUpdate(value.id)} >Update</button>
                        <button onClick={()=>handleDelete(value.id)} >Delete</button>
                        </div>
                    </div>
                     )
                   )
                })
            }



              </div>
            
            </main>
           


          
        </section>
</main>
  )
}

export default DisplayNotes