import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../utile/globarVariable';

import { useNavigate, useParams } from 'react-router-dom';
const GetParticularSubject = () => {

  const { Id } = useParams();
  const navigator = useNavigate();


  const [cName, setcName] = useState([]);
  const [sName, setsName] = useState([]);

  const [formData, setFormData] = useState({
    id: '',
    coursetype: '',
    coursename: '',
    specialization: '',
    subject: '',
    subjectcode: '',
    duration: '',
    semester: '',
  });


  const getCourseType = async (Id) => {

    console.log(formData.coursename);


    const d = await axios.post(`${url}/get-Course-Name`,
      {
        university: Id
      },

    );


    setcName(d.data);









  }

  const getSpecializationName = async (Id) => {
    console.log(formData.coursetype);

    const r = await axios.post(`${url}/get-Specialization-Name`,
      {
        course: Id
      },
      {
        withCredentials: true
      }
    );

    setsName(r.data);
    console.log(r.data);


  }

  const getSubject = async () => {
    try {
      const response = await axios.get(`${url}/get-Particular-Subject?Id=${Id}`);
      const subjectData = response.data[0];

      setFormData({

        id: Id,
        coursetype: subjectData.coursetype,
        coursename: subjectData.coursename,
        specialization: subjectData.specialization,
        subject: subjectData.subject,
        subjectcode: subjectData.subjectcode, // Set the initial value for subjectcode
        duration: subjectData.duration,
        semester: subjectData.semester,
      });
      await getCourseType(subjectData.coursename);
      await getSpecializationName(subjectData.coursetype);

    } catch (error) {
      console.error('Error fetching subject:', error);

    }
  };
  const [UniversityName, setUniversityName] = useState([]);

  const getUniversityName = async (e) => {
    const r = await axios.get(`${url}/get-University1`);
    setUniversityName(r.data);
  };

  useEffect(() => {
    getSubject();
    getUniversityName();

  }, [Id], [sName], [cName]);

  const handleSubmit = async (e) => {
    e.preventDefault();


    console.log(formData);


    const r = await axios.post(`${url}/Update-Particular-Subject`, formData);
    if (r.data.Status === true) {
      alert("Subject Successfully Updated");
      navigator("/Manage-Subject");
    } else {
      alert("Subject does not Updated");
    }
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return <>

    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Update Subject</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a>Manage Subject</a></li>
            <li className="breadcrumb-item active">Subject</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <form onSubmit={handleSubmit}>
          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label for="inputEmail3" className="col-form-label">Select University </label>


              <select name="coursename" onChange={handleInputValue} onBlur={getCourseType} value={formData.coursename} className="form-control" id="">




                {
                  UniversityName.map((en) => (
                    formData.coursename == en.id ?
                      (
                        <option value={en.id}>{en.name}</option>
                      ) :
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


              <select name="coursetype" onBlur={getSpecializationName} onChange={handleInputValue} value={formData.coursetype} className="form-control" id="">
                <option value="" >Select Course</option>

                {

                  cName.length > 0 ?
                    (
                      cName.map((en) => (
                        formData.coursetype == en.id ?
                          (
                            <option value={en.id} >{en.coursename}</option>
                          ) :
                          (
                            <option value={en.id} >{en.coursename}</option>
                          )


                      ))

                    ) : ''
                }

              </select>


            </div>



          </div>

          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label for="inputEmail3" className="col-form-label">Select Specialization</label>
              <select name="specialization" onChange={handleInputValue} value={formData.specialization} className="form-control" id="">



                <option value="" >Select Specialization</option>



                {

                  sName.length > 0 ?
                    (
                      sName.map((en) => (
                        formData.specialization == en.id ?
                          (
                            <option value={en.id} >{en.specialization}</option>

                          ) :
                          (
                            <option value={en.id} >{en.specialization}</option>

                          )

                      ))

                    ) : ''
                }

              </select>


            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label for="inputEmail3" className="col-form-label">Select Duration</label>
              <select name="duration" onChange={handleInputValue} value={formData.duration} className="form-control" id="">
                <option value={formData.duration} selected>{formData.duration}</option>

              </select>

            </div>



          </div>


          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label for="inputEmail3" className="col-form-label">Select Semester</label>
              <select name="semester" value={formData.semester} onChange={handleInputValue} className="form-control" id="">
                <option value={formData.semester} selected>{formData.semester}</option>

              </select>


            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">


            </div>



          </div>


          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label for="inputEmail3" className="col-form-label">Subject</label>
              <input type="text" onChange={handleInputValue} value={formData.subject} className="form-control" name='subject' />

            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label for="inputEmail3" className="col-form-label">Subject Code</label>
              <input type="text" value={formData.subjectcode} onChange={handleInputValue} name='subjectcode' className="form-control" />


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



export default GetParticularSubject;