import { useContext } from "react";
import { TaskContextApi } from "./TaskProvider";

const Form = () => {
  let data = useContext(TaskContextApi);
  //  console.log(data);

  let { state, task, setState, addTask } = data;

  let { title, description, category } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });  
  };  

  let handleSubmit = (e)=>{
    e.preventDefault()
    addTask(title , description , category)
    setState({title : "", description: "", category: ""})
  }

  console.log(task);   

  return (
    <main className="formBlock">
      <form onSubmit={handleSubmit}>   
        <div className="form-content">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={handleChange}
          />
        </div>

        <div className="form-content">
          <label>Description</label>
          <textarea
            name="description"
            cols="60"
            rows="12"
            placeholder="Enter description"
            value={description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-content">
          <label>Category</label>
          <select name="category" value={category} onChange={handleChange}>
            <option value="">Select</option>
            <option value="general">General</option>
            <option value="official">Official</option>
            <option value="technical">Technical</option>
          </select>
        </div>

        <button>Submit</button>
      </form>
    </main>
  );
};

export default Form;
