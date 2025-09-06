import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {url} from '../utile/globarVariable';

const Feedback = () => {


  const navigator=useNavigate();

  
 
 
  const [username,setusername]=useState();

  const CheckLogin=async(e)=>
{
  const p=await axios.get(`${url}/dashboard`,{ withCredentials: true });
   

 

  if(p.data.Status==false)
  {
      navigator("/");
  }
  else
  {
   setusername(p.data.username);
   
  setFormData(
    {
      username:p.data.username

    }
  )
   
 
 
 
  
 
  
    

  }

}
 

  
  

  


  useEffect(()=>
  {
    
    CheckLogin();
   


  },[]);

 

  const [formData,setFormData]=useState(
    {
      username:'',
      ftype:'',
      message:'',
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
  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    console.log(formData);

    const r= await axios.post(`${url}/Add-Feedback`,
    formData
   );
 
 
    if(r.data.Status==true)
    {
     alert("Feedback Successfully Added");
   
    }
    else
    {
     alert("Feedback does not Added");
 
    }


  }
  
    return <>
    
    <main id="main" className="main">

    <div className="pagetitle">
      <h1>Feedback</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a >Send Feedback</a></li>
          <li className="breadcrumb-item active">Feedback</li>
        </ol>
      </nav>
    </div>

    <section className="section dashboard">
        <form onSubmit={handleSubmit}>
      <div className="row">

      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
        <label for="inputEmail3" className="col-form-label">Query Type</label>
    
        <select  name="ftype" onChange={handleInputValue} value={formData.ftype} className="form-control" id="">
 <option value="Feedback">
  Feedback
 </option>
 <option value="Query">
  Query
 </option>
 
 
</select>


       
    </div>
      <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
     

      
        
      </div>

      <div className="row">

        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
          <label for="inputEmail3" className="col-form-label">Title</label>
        
          <textarea name="message" id="" cols="30" value={formData.message} onChange={handleInputValue} rows="1" className="form-control">


</textarea>
<button className="btn btn-primary my-5" type="submit">Send</button>
        </div>
        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
     
        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xms-2">


</div>
  
        
          
    </div>




  
  



    </form>
    </section>

  </main>
  
    </>;
}



export default Feedback;