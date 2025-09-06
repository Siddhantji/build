import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {url} from '../utile/globarVariable';

const AddCourse = () => {

  const navigator=useNavigate();
  
  const [formData,setFormData]=useState(
    {
      university:'',
      coursetype:'',
      coursename:'',
      coursedescription:'',
      coursecode:'',
      sequence:'',
      duration:'',
      semester:'',
    }
  );

  const handleInputValue=(e)=>
  {
    const {name,value}=e.target;
    setFormData(
      {
        ...formData,[name]:value
      }
    );
  }

  const [UniversityName,setUniversityName]=useState([]);

  const getUniversityName=async(e)=>
  {
    const r=await axios.get(`${url}/get-University1`);
    setUniversityName(r.data);
  }
useEffect(()=>
{
  getUniversityName();

})

  const handleSubmit=async(e)=>
  {
    e.preventDefault();

    console.log(formData);

    const r= await axios.post(`${url}/Add-Course`,
    formData
   );
 
 
    if(r.data.Status==true)
    {
     alert("Course Successfully Added");
     navigator("/Manage-Course");

    }
    else
    {
     alert("Course does not Added");
 
    }
 

  }
    return <>
    
    <main id="main" className="main">

<div className="pagetitle">
  <h1>Add Course</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a >Manage Course</a></li>
      <li className="breadcrumb-item active">Course</li>
    </ol>
  </nav>
</div>

<section className="section dashboard">
    <form onSubmit={handleSubmit}>
  <div className="row">

  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
    <label for="inputEmail3" className="col-form-label">Select University</label>
<select name="university" onChange={handleInputValue} value={formData.university} className="form-control" id="">
           
            <option value="" disabled>Select University</option>

{
  UniversityName.map((en)=>(
    <option value={en.id}>{en.name}</option>
  ))
}
          
          </select>
   
</div>
  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

    <label for="inputEmail3" className="col-form-label">Course Type</label>
    
    <select name="coursetype" onChange={handleInputValue} value={formData.coursetype} className="form-control" id="">
        
    <option value="" disabled>Select Course Type</option>
        <option value="Management" >Management</option>
        <option value="Technical" >Technical</option>
        <option value="Computer" >Computer</option>
        <option value="Academic" >Academic</option>
      </select>
  </div>

  
    
  </div>

  <div className="row">

    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
      <label for="inputEmail3" className="col-form-label">Course Name</label>
      <input type="text" name='coursename' onChange={handleInputValue} value={formData.coursename} className="form-control" id="inputEmail"/>
    </div>
    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

      <label for="inputEmail3" className="col-form-label">Course Description</label>
     <textarea name="coursedescription" id="" cols="30" onChange={handleInputValue} rows="1" className="form-control">

      {formData.coursedescription}
     </textarea>

    </div>

    
      
</div>


<div className="row">

    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
      <label for="inputEmail3" className="col-form-label">Course Code</label>
      <input type="text" name='coursecode' onChange={handleInputValue} value={formData.coursecode} className="form-control" id="inputEmail"/>
    </div>
    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

      <label for="inputEmail3" className="col-form-label">Sequence</label>
      <input type="text" name='sequence' onChange={handleInputValue} value={formData.sequence} className="form-control" id="inputEmail"/>

    </div>

    
      
</div>


<div className="row">

    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
      <label for="inputEmail3" className="col-form-label">Select Duration</label>
      <select name="duration" onChange={handleInputValue} value={formData.duration} className="form-control" id="">
      <option value="" disabled>Select Duration </option>
        <option value="1">1 </option>
        <option value="2">2</option>
        <option value="3" >3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6" >6</option>
        <option value="7">7</option>
        <option value="8">8</option>
 
      </select>
    </div>
    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

        <label for="inputEmail3" className="col-form-label">Select Semester</label>
        <select name="semester" onChange={handleInputValue} value={formData.semester} className="form-control" id="">
         
        <option value="" disabled>Select Semester or Year </option>
 
          <option value="Semester">Semester</option>
          <option value="Year" >Year</option>
   
        </select>

    </div>

    
      
</div>



<div className="row my-5">
<div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xms-10">
   
  </div>

  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xms-2">

    <button className="btn btn-primary" type="submit">Add</button>
  </div>
</div>

</form>
</section>

</main>
    </>
}



export default AddCourse;