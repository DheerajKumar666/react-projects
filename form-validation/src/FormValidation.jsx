import React, { useState } from 'react'

const FormValidation = () => {

let [formData,setFormData]=useState({
  requiredField: "",
  email: "",
  password: "",
  confirmpass: "",
  digits: "",
  number: "",
  alphanum: "",
  textarea: ""
})

let {requiredField,email,password,confirmpass,url,digits,number,alphanum,
  textarea,}=formData;


let handleChange=(e)=>{
  let {name,value}=e.target 
  setFormData({...formData, [name]: value})
}

let [errors, setErrors]=useState({})

let handleSubmit=(e)=>{
  e.preventDefault()

let validationErrors={}

//requiredfield
if(requiredField==""){
  validationErrors.requiredField="This field is required"
}

//email
let regexEmail= /\S+@\S+\.\S+/
if(email==="") { validationErrors.email=="This field is required" }
else if ( !regexEmail.test(email)) {validationErrors.email="This should be a valid email"}

//password
if(password==""){validationErrors.password="This field is required"}

//confirmpass
if(confirmpass==""){validationErrors.confirmpass="This field is required"}
else if(confirmpass!=password){validationErrors.confirmpass="The password is not matching"}

//url
let regexUrl=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
if(url==""){validationErrors.url="This field is required"}
else if(!regexUrl.test(url)) { validationErrors.url="This should be a valid url" }

//digits
let regexDigits= /^[0-9]+$/
if(digits==""){validationErrors.digits="This field is required"}
else if(!regexDigits.test(digits)) { validationErrors.digits="This value should not be a decimal" }

//number
let regexNumber=/^-?\d+(?:\.\d+)?$/
if(number==""){validationErrors.number="This field is required"}
else if(!regexNumber.test(number)) { validationErrors.number=" This value should be a number " }

//alphanum
let regexAlpha=/^[a-zA-Z0-9\s]+$/
if(alphanum==""){validationErrors.alphanum="This field is required"}
else if(!regexAlpha.test(alphanum)) { validationErrors.alphanum="This value should be alphanumerical" }

//textarea
if(textarea=="") { validationErrors.textarea=" This field is required" }

setErrors(validationErrors)

}

let handleReset=(e)=> {
e.preventDefault()
setFormData({requiredField:"",
  email: "",
  password: "",
  confirmpass:"",
  url: "",
  digits:"",
  number:"",
  alphanum:"",
  textarea:""
})
setErrors("")
}
  return (
   <form className='w-1/3 ml-3'>
  <legend className='text-2xl font-bold text-red-800 border-b-[3px]' >Form Validation</legend>

{/*Required Field*/}
   <div className="form-group p-[1.5px] my-3">
    <label>Required Filed</label>

    <div className="inp mt-2" >
    <input type="text" placeholder='required field' name='requiredField'
    className='border bg-gray-50 p-2 w-full'
    value={requiredField} onChange={handleChange}
    />
    <div className="form-errors text-red-600" >
      { errors.requiredField && <span>{errors.requiredField}</span> }
    </div>
    </div> 
   
   </div> 

 {/*Email*/}
 
 <div className="form-group p-[1.5px] my-3">
<label >Email</label>
<div className="inp mt-2">
<input onChange={handleChange} value={email} type="text" placeholder='Enter email' name="email" className='border bg-gray-50 p-2 w-full'/>
<div className="form-errors text-red-600" >
      { errors.email && <span>{errors.email}</span> }
    </div>
</div> 
</div> 
{/*password*/}

<div className="form-group p-[1.5px] my-3">
<label >Password</label>
<div className="inp mt-2">
    <input onChange={handleChange} value={password} type="password" placeholder='enter passowrd' name="password" className='border bg-gray-50 p-2 w-full'/>
    <div className="form-errors text-red-600" >
      { errors.password && <span>{errors.password}</span> }
    </div>

</div> 

<div className="inp mt-2">
    <input onChange={handleChange} value={confirmpass} type="password" placeholder='confirm password' name='confirmpass' className='border bg-gray-50 p-2 w-full'/>
    <div className="form-errors text-red-600" >
      { errors.confirmpass && <span>{errors.confirmpass}</span> }
    </div>

</div> 
</div> 

{/*URL*/}

<div className="form-group p-[1.5px] my-3">
    <label>URL</label>
    <div className="inp mt-2">
      <input onChange={handleChange} value={url} type="text" placeholder='enter url' name="url" className='border bg-gray-50 p-2 w-full' />  
      <div className="form-errors text-red-600" >
      { errors.url && <span>{errors.url}</span> }
    </div>
    
    </div> 
  
  </div> 

{/*digits*/}
  <div className="form-group p-[1.5px] my-3">
    <label>digits</label>
    <div className="inp mt-2">
      <input onChange={handleChange} value={digits} type="text" placeholder='enter digits' name="digits" className='border bg-gray-50 p-2 w-full' />  
      <div className="form-errors text-red-600" >
      { errors.digits && <span>{errors.digits}</span> }
    </div>
    
    </div> 
  </div> 

{/*number*/}
<div className="form-group p-[1.5px] my-3">
    <label>number</label>
    <div className="inp mt-2">
      <input onChange={handleChange} value={number} type="text" placeholder='enter number' name="number" className='border bg-gray-50 p-2 w-full'/>  
      <div className="form-errors text-red-600" >
      { errors.number && <span>{errors.number}</span> }
    </div>
    
    </div> 
  
  </div> 

{/* Alphanumberic */}

<div className="form-group p-[1.5px] my-3">
    <label>Alphanumeric</label>
    <div className="inp mt-2">
      <input onChange={handleChange} value={alphanum} type="text" placeholder='enter Alphanumeric' name="alphanum" className='border bg-gray-50 p-2 w-full' />  
      <div className="form-errors text-red-600" >
      { errors.alphanum && <span>{errors.alphanum}</span> }
    </div>
    </div> 
  
  </div> 

{/* textarea */}
  <div className="form-group p-[1.5px] my-3">
    <label>Textarea</label>
    <div className="inp mt-2">
<textarea onChange={handleChange} value={textarea} className='border bg-gray-50 p-2 w-full' name="textarea" rows={4} cols={20}></textarea> 
   </div> 
  </div> 

 {/* button */}

<div className="form-group p-[1.5px] my-3">
    <div className="buttonContainer">
        <button className='bg-red-800' onClick={handleSubmit}>Submit</button>
        <button className='bg-red-800' onClick={handleReset} >Reset</button>
    </div>
</div>

   </form>
  )
}

export default FormValidation