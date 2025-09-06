import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import {url} from '../utile/globarVariable';

const GetParticularSession = () => {
  
 
    const Navigate=useNavigate();
    const {Id}=useParams();
    const [formData,setFormData]=useState(
        {
            id:'',
        session:'',
        year:'',
        serial:''
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
    
    const GetParticularSessionses=async(e)=>
     {
        const response = await axios.get(`${url}/get-Particular-Session?Id=${Id}`);
        const data = response.data[0];

        setFormData(
            {
                id:Id,
                session:data.session,
                year:data.year,
                serial:data.serial
            }
        );


     }
     

    useEffect(() => {
     
      
        GetParticularSessionses();
      }, [Id]);


  
    
   const handleSubmit=async(e)=>
   {
    e.preventDefault();

    console.log(formData);
    const r= await axios.post(`${url}/Update-Particular-Session`,
    formData
   );
 
 
    if(r.data.Status==true)
    {
     alert("Session Successfully Updated");
     Navigate("/Manage-Session");
     
    }
    else
    {
     alert("Session does not Updated");
 
    }

   }
    return <>
    
    <main id="main" className="main">

    <div className="pagetitle">
      <h1>Update Session</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a >Manage Session</a></li>
          <li className="breadcrumb-item active">Session</li>
        </ol>
      </nav>
    </div>

    <section className="section dashboard">
        <form onSubmit={handleSubmit}>
      <div className="row">

      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
        <label for="inputEmail3" className="col-form-label">Session</label>
        <input type="text" name='session' onChange={handleInputValue} value={formData.session} className="form-control" id="inputEmail"/>
      </div>
      <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

        <label for="inputEmail3" className="col-form-label">Year</label>
        <input type="text" className="form-control" name='year' onChange={handleInputValue} value={formData.year} id="inputEmail"/>

      </div>

      
        
      </div>

    

    


    
    

<div className="row my-3">
    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-7 col-sm-10 col-xms-10">
        <label for="inputEmail3" className="col-form-label">Serial</label>
        <input type="text" name='serial' onChange={handleInputValue} value={formData.serial} className="form-control" id="inputEmail"/>
      </div>
<div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xms-1">

</div>
      <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xms-2">

        <button className="btn btn-primary my-4" type="submit">Update</button>
      </div>
</div>

    </form>
    </section>

  </main>
 
    </>
}


export default GetParticularSession;