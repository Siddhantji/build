import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {url} from '../utile/globarVariable';

const GetParticularUniversity = () => {
  const {Id}=useParams();

 
  const Navigate = useNavigate();
  const [formData,setFormData]=useState(
    {
      id:'',
      Name:'',
      Code:'',
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
  const getSingleUniversity=async(e)=>
  {
    

   const r= await axios.get(`${url}/get-Particular-University?Id=${Id}`);
   setFormData({
    Code:r.data[0].code,
    Name:r.data[0].name,
    id:Id

  });



  }
  
  
  useEffect(()=>
  {
  

    getSingleUniversity();
    
  },[Id]);
  const HandleSubmit=async(e)=>
  {
    e.preventDefault();

   const r= await axios.post(`${url}/Update-Particular-University`,
   formData
  );
console.log(r.data.Status);


   if(r.data.Status==true)
   {
    alert("University  Successfully Updated");
    Navigate("/Manage-University");

   }
   else
   {
    alert("University does not Updated");

   }

    ;

  }

    return <>
    
    <main id="main" className="main">

    <div className="pagetitle">
      <h1>Update Univsersity</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a >Manage University</a></li>
          <li className="breadcrumb-item active">University</li>
        </ol>
      </nav>
    </div>

    <section className="section dashboard">
        <form onSubmit={HandleSubmit}>
      <div className="row">

      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
        <label for="inputEmail3" className="col-form-label">University Name</label>
        <input type="text" name='Name' onChange={handleInputValue} value={formData.Name} className="form-control" id="inputEmail"/>
      </div>
      <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

        <label for="inputEmail3" className="col-form-label">University Code</label>
        <input type="text"  name='Code' onChange={handleInputValue} value={formData.Code} className="form-control" id="inputEmail"/>

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



export default GetParticularUniversity;