import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { url } from '../utile/globarVariable';

import axios from 'axios';

const AddStudent = () => {
  const [Categorie, setCategorie] = useState([]);
  const [sessiondata, setsessiondata] = useState([]);

  const [StudentSpecialization, setStudentSpecialization] = useState([]);

  const getCategorie = async (e) => {
    const response = await axios.get(`${url}/get-Courses1`);

    setCategorie(response.data);
    console.log(response.data);

  }


  const getSessionData = async (e) => {
    const response = await axios.get(`${url}/get-Session1`);

    setsessiondata(response.data);
    console.log(response.data);

  }


  const getSpecialization = async (e) => {

    console.log(formData.course);

    const response = await axios.post(`${url}/get-Specialization-Name`,
      {
        course: formData.course
      },
      {
        withCredentials: true
      }
    )

    setStudentSpecialization(response.data);

  }

  useEffect((e) => {
    getCategorie();

    getSessionData();


  }, [StudentSpecialization]);

  // const [course,setCourse]=useState([]);

  const navigator = useNavigate();



  const [formData, setFormData] = useState({
    rollno: '',
    Name: '',
    lastName: '',
    fathername: '',
    DOB: '',
    mobile: '',
    Email: '',
    course: '',
    specialization: '',
    exam: '',
    session: '',
    image: null, // Initialize with null for the file object
  });





  const handleInputValue = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    let u = '';
    let c = '';
    let n = '';



    let r = await axios.post(`${url}/get-Course-Detail`,
      {
        course: formData.course
      },


      {
        withCredentials: true
      });




    u = r.data[0].university;
    let n1 = '';
    let n2 = '';
    c = r.data[0].coursetype.split(' ').map(word => word.charAt(0));
    n1 = formData.Name != '' ? formData.Name.toString().toUpperCase().charAt(0) : '';
    n2 = formData.lastName != '' ? formData.lastName.toString().toUpperCase().charAt(0) : '';
    n = n1 + n2;



    const min = 1;
    const max = 100000;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    let roll = u + '/' + c + '/' + n + '/';

    // setFormData({
    //   ...prev,
    //   rollno: roll
    // })

    if (formData.image != null) {
      let b = await axios.post(`${url}/Save-Images`, {
        image: formData.image
      },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }

      );
    }









    // const formDataToSend = new FormData();
    // formDataToSend.append('rollno', roll);
    // formDataToSend.append('Name', formData.Name);
    // formDataToSend.append('fathername', formData.fathername);
    // formDataToSend.append('DOB', formData.DOB);
    // formDataToSend.append('mobile', formData.mobile);
    // formDataToSend.append('Email', formData.Email);
    // formDataToSend.append('course', formData.course);
    // formDataToSend.append('specialization', formData.specialization);
    // formDataToSend.append('exam', formData.exam);
    // formDataToSend.append('image', (formData.image == null || formData.image==undefined || formData.image=='')?'':formData.image.name);
    // formDataToSend.append('session', formData.session);


    formData.rollno = roll;
    formData.image = (formData.image == null || formData.image == undefined || formData.image == '') ? '' : formData.image.name;



    setFormData(
      (prev) => ({
        ...prev,
        rollno: roll,
        image: (prev.image == null || prev.image === undefined || prev.image === '') ? '' : prev.image.name

      })
    );


    try {

      const response = await axios.get(`${url}/Add-Student12`, {
        params: formData
      });
      console.log(formData);

      if (response.data.Status === true) {
        alert('Student Successfully Added');
        navigator("/Manage-Student");

      } else {
        alert('Student does not Added');
      }


    } catch (error) {
      console.error('Error adding student:', error);
    }


  };

  return <>

    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Add Student</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a >Manage Student</a></li>
            <li className="breadcrumb-item active">Student</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label htmlFor="inputEmail3" className="col-form-label">First Name</label>
              <input type="text" onChange={handleInputValue} value={formData.Name} className="form-control" id="inputEmail" name='Name' />

            </div>

            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>


            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label htmlFor="inputEmail3" className="col-form-label">Last Name</label>
              <input type="text" onChange={handleInputValue} value={formData.lastName} className="form-control" id="inputEmail" name='lastName' />
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
                <option value="" disabled>Select Course</option>
                {
                  Categorie.map((en) => (
                    <option value={en.id}>
                      {en.coursename}
                    </option>
                  ))
                }


              </select>

            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label htmlFor="inputEmail3" className="col-form-label">Select Specialization</label>
              <select name="specialization" onChange={handleInputValue} value={formData.specialization} className="form-control" id="">
                <option value="" disabled>Select Specialization</option>

                {
                  StudentSpecialization.map((en) => (
                    <option value={en.id}>{en.specialization}</option>
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
              <label for="inputEmail3" className="col-form-label">Select Picture</label>
              <input type="file" name="image" className="form-control" accept="image/*" onChange={handleInputValue} />

            </div>


          </div>


          <div className="row">
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
            <div className="col-xxl-1 my-3 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xms-1">


            </div>
            <div className="col-xxl-2 my-3 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xms-2">

              <button className="btn btn-primary my-4" type="submit">Add</button>
            </div>
          </div>

        </form>
      </section>

    </main>
  </>
}



export default AddStudent;



