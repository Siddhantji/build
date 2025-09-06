import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import {url} from '../utile/globarVariable';

const GetParticularCourse = () => {
 
    const {Id}=useParams();
const Navigate=useNavigate();

  const [formData,setFormData]=useState(
    {
        id:'',
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


  const getSingleCourse=async(e)=>
  {

    const r=await axios.get(`${url}/get-Particular-Course?Id=${Id}`)
  setFormData(
    {
        id:Id,
        university:r.data[0].university,
        coursetype:r.data[0].coursetype,
        coursename:r.data[0].coursename,
        coursedescription:r.data[0].coursedescription,
        coursecode:r.data[0].coursecode,
        sequence:r.data[0].sequence,
        duration:r.data[0].duration,
        semester:r.data[0].semester
    }
  );
 


   
}

 

  useEffect(()=>
  {
getSingleCourse();
getUniversityName();



  },[]);
  const handleSubmit=async(e)=>
  {
    e.preventDefault();

    console.log(formData);

    const r= await axios.post(`${url}/Update-Particular-Course`,
    formData
   );
 console.log(r.data.Status);

 
    if(r.data.Status==true)
    {
     alert("Course Successfully Updated");
     Navigate("/Manage-Course");
     
     
    }
    else
    {
     alert("Course does not Updated");
 
    }
 

  }
    return <>
    
    <main id="main" className="main">

<div className="pagetitle">
  <h1>Update Course</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a>Manage Course</a></li>
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
           
           
{
 UniversityName.map((en)=>(
  formData.university==en.id?
  (
    <option value={en.id}>{en.name}</option>
  ):
  (
    <option value={en.id}>{en.name}</option>
  )
  
 ))
}
         
         </select>
</div>
  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

    <label for="inputEmail3" className="col-form-label">Course Type</label>
    
    <select name="coursetype" onChange={handleInputValue} value={formData.coursetype} className="form-control" id="">
        
    <option value="" disabled>{formData.coursetype}</option>
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
     <input name="coursedescription" id=""     value={formData.coursedescription} onChange={handleInputValue}  className="form-control"/>


     

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
       
      <option value="" >{formData.duration}</option>
       
        <option value="1" >1 Year</option>
       
        <option value="2" >2 Year</option>
        </select>
    </div>
    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

        <label for="inputEmail3" className="col-form-label">Select Semester</label>
        <select name="semester" onChange={handleInputValue} value={formData.semester} className="form-control" id="">
          <option value="" >{formData.semester}</option>
          
        </select>

    </div>

    
      
</div>



<div className="row my-5">
<div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xms-10">
   
  </div>

  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xms-2">

    <button className="btn btn-primary" type="submit">Update</button>
  </div>
</div>

</form>
</section>

</main>
    </>
}



export default GetParticularCourse;