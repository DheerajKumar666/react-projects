import React from "react";

const Form = (props) => {
// console.log(props);
let {course,trainer,handleChange,handleSubmit}=props

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Courses</label>
          <input name="course" value={course} type="text" placeholder="Enter Course" onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label>Trainer</label>
          <input name="trainer" value={trainer} type="text" placeholder="Enter Trainer" onChange={handleChange}/>
        </div>

        <div className="form-group">
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
