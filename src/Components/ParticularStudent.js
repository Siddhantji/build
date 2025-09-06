import React, { useEffect, useState } from 'react';
import { url } from '../utile/globarVariable';


import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const GetParticlarStudent = () => {
  const { Id } = useParams();
  const navigator = new useNavigate();
  const [Categorie, setCategorie] = useState([]);
  const [StudentSpecialization, setStudentSpecialization] = useState([]);
  const [sessiondata, setsessiondata] = useState([]);


  const getSessionData = async (e) => {
    const response = await axios.get(`${url}/get-Session1`);

    setsessiondata(response.data);
    console.log(response.data);

  }

  const getCategorie = async (e) => {
    const response = await axios.get(`${url}/get-Courses1`);

    setCategorie(response.data);
    console.log(response.data);

  }

  const getSpecialization = async (Id) => {

    console.log(formData.course);

    const response = await axios.post(`${url}/get-Specialization-Name`,
      {
        course: Id
      }

    )

    setStudentSpecialization(response.data);

  }
  const [formData, setFormData] = useState({
    id: '',
    rollno: '',
    Name: '',
    lname: '',
    fathername: '',
    DOB: '',
    mobile: '',
    session: '',
    Email: '',
    course: '',
    specialization: '',
    exam: ''

  });

  const getStudent = async (e) => {

    const r = await axios.get(`${url}/get-Particular-Student?Id=${Id}`);
    setFormData({
      id: Id,
      rollno: r.data[0].rollno,
      Name: r.data[0].name,
      fathername: r.data[0].fathername,
      DOB: r.data[0].dob,
      mobile: r.data[0].mobile,
      Email: r.data[0].email,
      course: r.data[0].course,
      specialization: r.data[0].specialization,
      session: r.data[0].session,

      exam: r.data[0].exam,
      lname: r.data[0].lastname
    });
    await getSpecialization(r.data[0].course);
  }

  useEffect(() => {


    const fetchData = async () => {
      await getStudent();
      await getCategorie();
      await getSessionData();
    }
    fetchData();



  }, [Id], [Categorie])
  const handleInputValue = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData, [name]: value
    });
  }
  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);



    const r = await axios.post(`${url}/Update-Particular-Student`,
      formData
    );



    if (r.data.Status == true) {
      alert("Student Successfully Updated");
      navigator("/Manage-Student");

    }
    else {
      alert("Student does not Updated");

    }




    ;

  }
  return <>

    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Update Student</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a >Manage Student</a></li>
            <li className="breadcrumb-item active">Student</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <form onSubmit={HandleSubmit}>
          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label htmlFor="inputEmail3" className="col-form-label">Roll No</label>
              <input type="text" disabled onChange={handleInputValue} value={formData.rollno} className="form-control" id="inputEmail" name='rollno' />
            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label htmlFor="inputEmail3" className="col-form-label">Name</label>
              <input type="text" onChange={handleInputValue} value={formData.Name} className="form-control" id="inputEmail" name='Name' />

            </div>



          </div>

          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label htmlFor="inputEmail3" className="col-form-label">Father Name</label>
              <input type="text" onChange={handleInputValue} value={formData.fathername} className="form-control" id="inputEmail" name='fathername' />
            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label htmlFor="inputEmail3" className="col-form-label">DOB</label>
              <input type="date" onChange={handleInputValue} value={formData.DOB} className="form-control" id="inputEmail" name='DOB' />

            </div>



          </div>


          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label htmlFor="inputEmail3" className="col-form-label">Mobile</label>
              <input type="text" onChange={handleInputValue} value={formData.mobile} className="form-control" id="inputEmail" name='mobile' />
            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label htmlFor="inputEmail3" className="col-form-label">Email</label>
              <input type="email" onChange={handleInputValue} value={formData.Email} className="form-control" id="inputEmail" name='Email' />

            </div>



          </div>


          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label htmlFor="inputEmail3" className="col-form-label">Select Course</label>


              <select name="course" onChange={handleInputValue} onBlur={getSpecialization} value={formData.course} className="form-control" id="">

                {
                  Categorie.map((en) => (

                    formData.coursename == en.id ?
                      (
                        <option value={en.id}>
                          {en.coursename}
                        </option>
                      ) :
                      (
                        <option value={en.id}>
                          {en.coursename}
                        </option>
                      )
                  )

                  )
                }


              </select>
            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label htmlFor="inputEmail3" className="col-form-label">Select Specialization</label>
              <select name="specialization" onChange={handleInputValue} value={formData.specialization} className="form-control" id="">
                <option value="">Select Specialization</option>

                {
                  StudentSpecialization.map((en) => (
                    formData.specialization == en.id ?
                      (
                        <option value={en.id}>{en.specialization}</option>

                      ) :
                      (
                        <option value={en.id}>{en.specialization}</option>

                      )
                  ))
                }


              </select>

            </div>



          </div>

          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label htmlFor="inputEmail3" className="col-form-label">Select Exam</label>
              <select name="exam" onChange={handleInputValue} value={formData.exam} className="form-control" id="">
                <option value="Exam" selected>Select</option>
                <option value="Jan" >Jan</option>
                <option value="April" >April</option>
                <option value="July" >July</option>
                <option value="Oct">Oct</option>

              </select>
            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>

              <select name="session" onChange={handleInputValue} value={formData.session} className="form-control" id="">
                <option value="" disabled>Select Session</option>
                {
                  sessiondata.map((en) => (
                    <option value={en.id}>
                      {en.session}
                    </option>
                  ))
                }


              </select>

            </div>


          </div>


          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label htmlFor="inputEmail3" className="col-form-label">Last Name</label>
              <input type="text" onChange={handleInputValue} value={formData.lname} className="form-control" id="inputEmail" name='lname' />

            </div>

            <div className="col-xxl-1 my-3 col-xl-1 col-lg-1 col-md-2 col-sm-2 col-xms-2">

              <button className="btn btn-primary my-4" type="submit">Update</button>
            </div>
          </div>



        </form>
      </section>

    </main>
  </>
}



export default GetParticlarStudent;