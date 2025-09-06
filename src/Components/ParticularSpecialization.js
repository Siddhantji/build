import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {url} from '../utile/globarVariable';

import { useParams,useNavigate } from 'react-router-dom';
const GetParticularSpecialization= () => {

    const Navigate = useNavigate();
    const { Id } = useParams();
  

    const [UniversityName,setUniversityName]=useState([]);

  const getUniversityName=async(e)=>
  {
    const r=await axios.get(`${url}/get-University1`);
    setUniversityName(r.data);
  }


    const [formData, setFormData] = useState({
      id: '',
      university: '',
      coursetype:'',
      specialization: '',
      specializationcode: '',
      coursefee: '',
      registrationfee: '',
      examfee: '',
    });
    const [cName,setcName]=useState([]);

    const getCourseType=async(e)=>
    {
     
      console.log(formData.university);
     
  
       const d=await axios.post(`${url}/get-Course-Name`,
       {
        university:formData.university
       },
       
       );
  
  
  setcName(d.data);
  
    
  
  
      
  
  
  
  
    }
  

  

  
    useEffect(() => {
     
      getSingleSpecialization();
      getUniversityName();

    }, [Id],[cName]);
  
    const handleInputValue = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const getSingleSpecialization = async () => {
      const response = await axios.get(`${url}/get-Particular-Specialization?Id=${Id}`);
      const data = response.data;


      setFormData({
        id: Id,
        university: data[0].university_id,
        coursetype:data[0].course_id,
        specialization: data[0].specialization,
        specializationcode: data[0].specialization_code,
        coursefee: data[0].course_fee,
        registrationfee: data[0].registration_fee,
        examfee: data[0].exam_fee,
      });
    };
  const HandleSubmit=async(e)=>
  {
    e.preventDefault();

    console.log(formData);
    const r= await axios.post(`${url}/Update-Particular-Specialization`,
    formData
   );
 
 
    if(r.data.Status==true)
    {
     alert("Specialization Successfully Updated");
     Navigate("/Manage-Specialization");


   
    }
    else
    {
     alert("Specialization does not Updated");
 
    }

  }
    return <>
    
    <main id="main" className="main">

    <div className="pagetitle">
      <h1> Specialization</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a >Manage Specialization</a></li>
          <li className="breadcrumb-item active">Specialization</li>
        </ol>
      </nav>
    </div>

    <section className="section dashboard">
        <form onSubmit={HandleSubmit}>
      <div className="row">

      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
        <label for="inputEmail3" className="col-form-label">Select University</label>
        <select name="university" onBlur={getCourseType} onChange={handleInputValue} value={formData.university} className="form-control" id="">
           
          
{
 UniversityName.map((en)=>(


   formData.university==en.id?(
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

<label for="inputEmail3" className="col-form-label">Course</label>

<select name="coursetype" onChange={handleInputValue} value={formData.coursetype} className="form-control" id="">

{

cName.length>0 ? 
(
cName.map((en)=>(

  formData.coursetype==en.id?
  (
<option value={en.id} >{en.coursename}</option>

  ):
  (
<option value={en.id} >{en.coursename}</option>

  )

))

):''
}

</select>
</div>
      
     

      
        
      </div>

      <div className="row">
      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

<label for="inputEmail3" className="col-form-label">Specialization</label>
<input type="text" name='specialization' onChange={handleInputValue} value={formData.specialization} className="form-control" id="inputEmail"/>

</div>
        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
        
        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
          <label for="inputEmail3" className="col-form-label">Specialization Code</label>
          <input type="text" name='specializationcode' onChange={handleInputValue} value={formData.specializationcode} className="form-control" id="inputEmail"/>
        </div>

        
  
        
          
    </div>


    <div className="row">
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
  
  <label for="inputEmail3" className="col-form-label">Course Fee</label>
  <input type="text" name='coursefee' onChange={handleInputValue} value={formData.coursefee} className="form-control" id="inputEmail"/>

</div>


        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
       
        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
          <label for="inputEmail3" className="col-form-label">Registration Fee</label>
          <input type="text" name='registrationfee' onChange={handleInputValue} value={formData.registrationfee} className="form-control" id="inputEmail"/>
        </div>

  
        
          
    </div>


  
    


<div className="row ">
<div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
  
  <label for="inputEmail3" className="col-form-label">Exam Fee</label>
  <input type="text" name='examfee' onChange={handleInputValue} value={formData.examfee} className="form-control" id="inputEmail"/>

</div>


<div className="col-xxl-5 mx-4 col-xl-5 col-lg-5 col-md-2 col-sm-2 col-xms-2">
<br/>
<button className="btn mx-5 my-3 btn-primary" type="submit">Update</button>
</div>


      
</div>

    </form>
    </section>

  </main>
    
    </>
}



export default GetParticularSpecialization;

