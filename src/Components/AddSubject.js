import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { url } from '../utile/globarVariable';

const AddSubject = () => {


  const [courseType, setcourseType] = useState('');


  const [cName, setcName] = useState([]);
  const [sName, setsName] = useState([]);


  const navigator = useNavigate();

  const [formData, setFormData] = useState(
    {

      coursetype: '',
      coursename: '',
      specialization: '',
      subject: [],
      subjectcode: [],

      duration: '',
      semester: '',
    }
  );

  const getCourseType = async (e) => {

    console.log(formData.coursename);


    const d = await axios.post(`${url}/get-Course-Name`,
      {
        university: formData.coursename
      },

    );


    setcName(d.data);









  }

  const getSpecializationName = async (e) => {
    console.log(formData.coursetype);

    const r = await axios.post(`${url}/get-Specialization-Name`,
      {
        course: formData.coursetype
      },
      {
        withCredentials: true
      }
    );

    setsName(r.data);
    console.log(r.data);


  }

  const [formData1, setFormData1] = useState({

    subject: [],
    subjectcode: []
  });




  const handleInputChange1 = (e, index) => {
    const { name, value } = e.target;

    setFormData1((prevData) => {
      const updatedQuestions = [...prevData.subject];
      const updatedAnswers = [...prevData.subjectcode];

      if (name === 'subject') {
        updatedQuestions[index] = value;
      } else if (name === 'subjectcode') {
        updatedAnswers[index] = value;
      }

      return {
        ...prevData,
        subject: updatedQuestions,
        subjectcode: updatedAnswers
      };
    });
  };

  const handleAddFAQ = () => {
    setFormData1((prevData) => ({
      ...prevData,
      subject: [...prevData.subject, ''],
      subjectcode: [...prevData.subjectcode, '']
    }));
  };
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setFormData(
      {
        ...formData, [name]: value
      }
    );




  }

  const [UniversityName, setUniversityName] = useState([]);

  const getUniversityName = async (e) => {
    const r = await axios.get(`${url}/get-University1`);
    setUniversityName(r.data);
  }
  useEffect(() => {
    getUniversityName();


  }, [sName], [cName])

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    formData1.subject.forEach((e, i) => {
      formData.subject[`${i}`] = e;
    })
    formData1.subjectcode.forEach((e,i)=>
    {
      formData.subjectcode[`${i}`]=e;
    })

    console.log(formData1);
    
    console.log(formData);
    const r = await axios.post(`${url}/Add-Subject`,
      formData
    );


    if (r.data.Status == true) {
      alert("Subject Successfully Added");
      navigator("/Manage-Subject");

    }
    else {
      alert("Subject does not Added");

    }


  }


  return <>

    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Add Subject</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="">Manage Subject</a></li>
            <li className="breadcrumb-item active">Course</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <form onSubmit={handleSubmit}>
          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label for="inputEmail3" className="col-form-label"> University </label>
              <select name="coursename" onChange={handleInputValue} onBlur={getCourseType} value={formData.coursename} className="form-control" id="">

                <option value="" disabled>Select University</option>

                {
                  UniversityName.map((en) => (
                    <option value={en.id}>{en.name}</option>
                  ))
                }

              </select>

            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label for="inputEmail3" className="col-form-label">Course</label>

              <select name="coursetype" onBlur={getSpecializationName} onChange={handleInputValue} value={formData.coursetype} className="form-control" id="">
                <option value="" disabled>Select Course</option>
                {

                  cName.length > 0 ?
                    (
                      cName.map((en) => (
                        <option value={en.id} >{en.coursename}</option>

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
                <option value="" disabled>Select Specialization</option>


                {

                  sName.length > 0 ?
                    (
                      sName.map((en) => (
                        <option value={en.id} >{en.specialization}</option>

                      ))

                    ) : ''
                }

              </select>
            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label for="inputEmail3" className="col-form-label">Select Duration</label>
              <select name="duration" onChange={handleInputValue} value={formData.duration} className="form-control" id="">
                <option value="" >Duration</option>
                <option value="1" >1 </option>
                <option value="2">2</option>
                <option value="3" >3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6" >6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>

            </div>



          </div>


          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label for="inputEmail3" className="col-form-label">Select Year/Semester</label>
              <select name="semester" onChange={handleInputValue} value={formData.semester} className="form-control" id="">

                <option value="" >Not Selected Yet</option>
                <option value="Semester" selected>Semester</option>
                <option value="Year" >Year</option>

              </select>


            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">


            </div>



          </div>

          {formData1.subject.map((question, index) => (
            <div key={index} className="row my-2">
              <div className='col-xl-5 col-sm-12'>
                <label>Subject </label>
                <input
                  name={`subject`}
                  value={formData1.subject[index]}
                  onChange={(e) => handleInputChange1(e, index)}
                  className='form-control '
                  placeholder='Enter Subject'
                />

              </div>
              <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
          
              <div className='col-xl-5 col-sm-12'>
                <label>Suject Code</label>
                <input
                  name={`subjectcode`}
                  value={formData1.subjectcode[index]}
                  onChange={(e) => handleInputChange1(e, index)}
                  className='form-control'
                  placeholder='Enter Subject Code'
                />

              </div>
            </div>
          ))}



          <div className="row my-4">



            <div className='col-xl-6 col-lg-6 col-sm-12'>
              <button type="button" onClick={handleAddFAQ} className="btn btn-success mx-1 my-4">Add More</button>
              <button className="btn btn-primary mx-4">Add</button>
            </div>



          </div>
          {/* <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label for="inputEmail3" className="col-form-label">Subject</label>
              <input type="text" name='subject' onChange={handleInputValue} value={formData.subject} className="form-control" id="inputEmail" />

            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label for="inputEmail3" className="col-form-label">Subject Code</label>
              <input type="text" name='subjectcode' onChange={handleInputValue} value={formData.subjectcode} className="form-control" id="inputEmail" />


            </div>



          </div>



          <div className="row my-5">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xms-10">

            </div>

            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xms-2">

              <button className="btn btn-primary" type="submit">Add</button>
            </div>
          </div> */}

        </form>
      </section>

    </main>
  </>
}



export default AddSubject;