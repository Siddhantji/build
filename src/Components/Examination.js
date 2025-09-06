import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../utile/globarVariable';

const Examination = () => {

  const [coursename, setcoursename] = useState();

  const [formData, setFormData] = useState(
    {
      rollno: '',
      coursetype: '',
      studentname: '',
      title: '',

    }
  );
  const navigator = useNavigate();
  const [username, setusername] = useState();

  const CheckLogin = async (e) => {
    const p = await axios.get(`${url}/dashboard`, { withCredentials: true });




    if (p.data.Status == false) {
      navigator("/");
    }
    else {
      setusername(p.data.username);

      const rp = await axios.get(`${url}/Get-Student-By-Roll-No7`);








      setFormData(
        {
          rollno: username,
          coursetype: rp.data.coursetype,
          studentname: rp.data.name
        }
      );
      setcoursename(rp.data.course);



    }

  }








  useEffect(() => {

    CheckLogin();



  }, []);



  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setFormData(
      {
        ...formData, [name]: value
      }
    );
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const r = await axios.post(`${url}/Add-Examination`,
      formData
    );

    console.log(formData);



    if (r.data.Status == true) {
      alert("Your Request Successfully Added");

    }
    else {
      alert("Your Request Does Not Added");
    }


  }


  return <>

    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Examination</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a>Request Exam</a></li>
            <li className="breadcrumb-item active">Exam</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <form onSubmit={handleSubmit}>
          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label for="inputEmail3" className="col-form-label">Select Course Type</label>

              <select disabled name="coursetype" onChange={handleInputValue} value={formData.coursetype} className="form-control" id="">


                <option value={formData.coursetype}>{coursename}</option>




              </select>



            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label for="inputEmail3" className="col-form-label">Student Name</label>

              <input type="text" disabled name='studentname' onChange={handleInputValue} value={formData.studentname} className="form-control" id="inputEmail" />



            </div>



          </div>

          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label for="inputEmail3" className="col-form-label">Comments</label>

              <textarea name="title" id="" cols="30" onChange={handleInputValue} rows="1" className="form-control">


              </textarea>
            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xms-2">

              <button className="btn btn-primary my-5" type="submit">Send</button>
            </div>



          </div>








          <div className="row my-5">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xms-10">

            </div>


          </div>

        </form>
      </section>

    </main>

  </>;
}



export default Examination;