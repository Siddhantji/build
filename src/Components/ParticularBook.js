import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../utile/globarVariable';

import { useParams, useNavigate } from 'react-router-dom';
const GetParticlarBook = () => {


  const { Id } = useParams();

  const navigator = useNavigate();

  const [formData, setFormData] = useState(
    {
      id: '',
      coursetype: '',
      specialization: '',
      title: '',
      url: ''
    }
  );
  const [course, setcourse] = useState([]);
  const [specializationList, setspecializationList] = useState([]);


  const getCourse = async (e) => {
    const r = await axios.get(`${url}/get-Course1`);
    setcourse(r.data);

  }
  const getSpecialization = async (Id) => {
    console.log(formData.coursetype);

    const r = await axios.post(`${url}/get-Specialization-Name`,
      {
        course: Id
      },
      {
        withCredentials: true
      }
    );

    setspecializationList(r.data);
    console.log(r.data);


  }


  useEffect(() => {
    getCourse();
    GetSingleBook();

  }, [specializationList], [Id]);
  const GetSingleBook = async (e) => {
    const r = await axios.get(`${url}/get-Particular-Book?Id=${Id}`);
    setFormData(
      {
        id: Id,
        coursetype: r.data[0].coursetype,
        specialization: r.data[0].specialization,
        title: r.data[0].title,
        url: r.data[0].url
      }
    );
    await getSpecialization(r.data[0].coursetype);

  }




  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);


    //   const data1 = formData;


    // const id = data1.id;
    // const coursetype = data1.coursetype.props.value; 
    // const specialization = data1.specialization.props.value; 
    // const title = data1.title;
    // const url = data.url;

    // console.log(id, coursetype, specialization, title, url);



    let r = await axios.post(`${url}/Update-Particular-Book`, formData);




    // console.log(r.data);


    if (r.data.Status == true) {
      alert("Book Successfully Updated");
      navigator("/Manage-Book");
    }
    else {
      alert("Book does not Added");

    }


  }
  return <>

    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Update Book</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="">Manage Book</a></li>
            <li className="breadcrumb-item active">Update</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <form onSubmit={handleSubmit}>
          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label for="inputEmail3" className="col-form-label">Select Course Type</label>


              <select name="coursetype" onBlur={getSpecialization} onChange={handleInputValue} value={formData.coursetype} className="form-control">

                {
                  course.map((en) => (
                    formData.coursetype == en.coursename ?
                      (
                        <option value={en.id}>{en.coursename}</option>
                      ) :
                      (<option value={en.id}>{en.coursename}</option>

                      )


                  )
                  )
                }


              </select>



            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label for="inputEmail3" className="col-form-label">Select Specialization</label>


              <select name="specialization" onChange={handleInputValue} value={formData.specialization} className="form-control" id="">
                {/* <option  value={formData.specialization}>Select Specialization</option> */}

                {
                  specializationList.map((en) => (
                    formData.specialization == en.specialization ?
                      (
                        <option selected value={en.id}>{en.specialization}</option>

                      ) : (
                        <option value={en.id}>{en.specialization}</option>

                      )

                  ))
                }


              </select>



            </div>



          </div>

          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label for="inputEmail3" className="col-form-label">Title</label>
              <input type="text" name='title' onChange={handleInputValue} value={formData.title} className="form-control" id="inputEmail" />
            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label for="inputEmail3" className="col-form-label">URL</label>
              <input type="text" name='url' onChange={handleInputValue} value={formData.url} className="form-control" />
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

  </>;
}



export default GetParticlarBook;