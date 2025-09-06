import React, { useEffect, useState } from 'react';


import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { url } from '../utile/globarVariable';

const AddResult = () => {


  const [d, setd] = useState('');
  const [t, sett] = useState('');






  let { Id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    {
      id: '',
      rollno: '',
      Name: '',
      course: '',

      YearFirstPer: '',
      SessionFirstYear: '',
      YearFirstYear: '',

      YearSecondPer: '',
      SessionSecondYear: '',
      YearSecondYear: '',

      YearThirdPer: '',
      SessionThirdYear: '',
      YearThirdYear: '',

      YearFourthPer: '',
      SessionFourthYear: '',
      YearFourthYear: '',

      FirstSemesterPer: '',
      FirstSemesterSession: '',
      FirstSemesterMonth: '',

      SecondSemesterPer: '',
      SecondSemesterSession: '',
      SecondSemesterMonth: '',


      ThirdSemesterPer: '',
      ThirdSemesterSession: '',
      ThirdSemesterMonth: '',


      FourthSemesterPer: '',
      FourthSemesterSession: '',
      FourthSemesterMonth: '',


      FivethSemesterPer: '',
      FivethSemesterSession: '',
      FivethSemesterMonth: '',


      SixSemesterPer: '',
      SixSemesterSession: '',
      SixSemesterMonth: '',



      SeventhSemesterPer: '',
      SeventhSemesterSession: '',
      SeventhSemesterMonth: '',


      EightSemesterPer: '',
      EightSemesterSession: '',
      EightSemesterMonth: '',
      duration: '',
      semester: '',
    }
  )






  const [std, setStd] = useState([]);

  const getStudent = async (e) => {
    Id = Id.split('.')[0] + '/' + Id.split('.')[1] + '/' + Id.split('.')[2] + '/' + Id.split('.')[3];
    const r = await axios.get(`${url}/Get-Student-By-Roll-Noa?rollno=${Id}`);

    formData.id = Id;
    formData.rollno = r.data[0].rollno;
    formData.Name = r.data[0].name;
    formData.course = r.data[0].course;


    setStd(r.data);

    let b = await axios.get(`${url}/get-Particular-Course?Id=${r.data[0].course}`);

    setd(b.data[0].duration);
    sett(b.data[0].semester);

    formData.duration = b.data[0].duration;
    formData.semester = b.data[0].semester;


    if (b.data[0].duration == "1" && b.data[0].semester == "Semester") {

      formData.YearFirstPer = '0';
      formData.SessionFirstYear = '0';
      formData.YearFirstYear = '0';


      formData.YearSecondPer = '0';
      formData.SessionSecondYear = '0';
      formData.YearSecondYear = '0';

      formData.YearThirdPer = '0';
      formData.SessionThirdYear = '0';
      formData.YearThirdYear = '0';

      formData.YearFourthPer = '0';
      formData.SessionFourthYear = '0';
      formData.YearFourthYear = '0';

      formData.SecondSemesterPer = '0';
      formData.SecondSemesterSession = '0';
      formData.SecondSemesterMonth = '0';


      formData.ThirdSemesterPer = '0';
      formData.ThirdSemesterSession = '0';
      formData.ThirdSemesterMonth = '0';


      formData.FourthSemesterPer = '0';
      formData.FourthSemesterSession = '0';
      formData.FourthSemesterMonth = '0';


      formData.FivethSemesterPer = '0';
      formData.FivethSemesterSession = '0';
      formData.FivethSemesterMonth = '0';


      formData.SixSemesterPer = '0';
      formData.SixSemesterSession = '0';
      formData.SixSemesterMonth = '0';



      formData.SeventhSemesterPer = '0';
      formData.SeventhSemesterSession = '0';
      formData.SeventhSemesterMonth = '0';

      formData.EightSemesterPer = '0';
      formData.EightSemesterSession = '0';
      formData.EightSemesterMonth = '0';
    }
    else if (b.data[0].duration == "2" && b.data[0].semester == "Semester") {
      formData.YearFirstPer = '0';
      formData.SessionFirstYear = '0';
      formData.YearFirstYear = '0';


      formData.YearSecondPer = '0';
      formData.SessionSecondYear = '0';
      formData.YearSecondYear = '0';

      formData.YearThirdPer = '0';
      formData.SessionThirdYear = '0';
      formData.YearThirdYear = '0';

      formData.YearFourthPer = '0';
      formData.SessionFourthYear = '0';
      formData.YearFourthYear = '0';




      formData.ThirdSemesterPer = '0';
      formData.ThirdSemesterSession = '0';
      formData.ThirdSemesterMonth = '0';


      formData.FourthSemesterPer = '0';
      formData.FourthSemesterSession = '0';
      formData.FourthSemesterMonth = '0';


      formData.FivethSemesterPer = '0';
      formData.FivethSemesterSession = '0';
      formData.FivethSemesterMonth = '0';


      formData.SixSemesterPer = '0';
      formData.SixSemesterSession = '0';
      formData.SixSemesterMonth = '0';



      formData.SeventhSemesterPer = '0';
      formData.SeventhSemesterSession = '0';
      formData.SeventhSemesterMonth = '0';

      formData.EightSemesterPer = '0';
      formData.EightSemesterSession = '0';
      formData.EightSemesterMonth = '0';
    }
    else if (b.data[0].duration == "3" && b.data[0].semester == "Semester") {
      formData.YearFirstPer = '0';
      formData.SessionFirstYear = '0';
      formData.YearFirstYear = '0';


      formData.YearSecondPer = '0';
      formData.SessionSecondYear = '0';
      formData.YearSecondYear = '0';

      formData.YearThirdPer = '0';
      formData.SessionThirdYear = '0';
      formData.YearThirdYear = '0';

      formData.YearFourthPer = '0';
      formData.SessionFourthYear = '0';
      formData.YearFourthYear = '0';




      formData.FourthSemesterPer = '0';
      formData.FourthSemesterSession = '0';
      formData.FourthSemesterMonth = '0';


      formData.FivethSemesterPer = '0';
      formData.FivethSemesterSession = '0';
      formData.FivethSemesterMonth = '0';


      formData.SixSemesterPer = '0';
      formData.SixSemesterSession = '0';
      formData.SixSemesterMonth = '0';



      formData.SeventhSemesterPer = '0';
      formData.SeventhSemesterSession = '0';
      formData.SeventhSemesterMonth = '0';

      formData.EightSemesterPer = '0';
      formData.EightSemesterSession = '0';
      formData.EightSemesterMonth = '0';
    }

    else if (b.data[0].duration == "4" && b.data[0].semester == "Semester") {
      formData.YearFirstPer = '0';
      formData.SessionFirstYear = '0';
      formData.YearFirstYear = '0';


      formData.YearSecondPer = '0';
      formData.SessionSecondYear = '0';
      formData.YearSecondYear = '0';

      formData.YearThirdPer = '0';
      formData.SessionThirdYear = '0';
      formData.YearThirdYear = '0';

      formData.YearFourthPer = '0';
      formData.SessionFourthYear = '0';
      formData.YearFourthYear = '0';




      formData.FivethSemesterPer = '0';
      formData.FivethSemesterSession = '0';
      formData.FivethSemesterMonth = '0';


      formData.SixSemesterPer = '0';
      formData.SixSemesterSession = '0';
      formData.SixSemesterMonth = '0';



      formData.SeventhSemesterPer = '0';
      formData.SeventhSemesterSession = '0';
      formData.SeventhSemesterMonth = '0';

      formData.EightSemesterPer = '0';
      formData.EightSemesterSession = '0';
      formData.EightSemesterMonth = '0';
    }

    else if (b.data[0].duration == "5" && b.data[0].semester == "Semester") {
      formData.YearFirstPer = '0';
      formData.SessionFirstYear = '0';
      formData.YearFirstYear = '0';


      formData.YearSecondPer = '0';
      formData.SessionSecondYear = '0';
      formData.YearSecondYear = '0';

      formData.YearThirdPer = '0';
      formData.SessionThirdYear = '0';
      formData.YearThirdYear = '0';

      formData.YearFourthPer = '0';
      formData.SessionFourthYear = '0';
      formData.YearFourthYear = '0';



      formData.SixSemesterPer = '0';
      formData.SixSemesterSession = '0';
      formData.SixSemesterMonth = '0';



      formData.SeventhSemesterPer = '0';
      formData.SeventhSemesterSession = '0';
      formData.SeventhSemesterMonth = '0';

      formData.EightSemesterPer = '0';
      formData.EightSemesterSession = '0';
      formData.EightSemesterMonth = '0';
    }

    else if (b.data[0].duration == "6" && b.data[0].semester == "Semester") {
      formData.YearFirstPer = '0';
      formData.SessionFirstYear = '0';
      formData.YearFirstYear = '0';


      formData.YearSecondPer = '0';
      formData.SessionSecondYear = '0';
      formData.YearSecondYear = '0';

      formData.YearThirdPer = '0';
      formData.SessionThirdYear = '0';
      formData.YearThirdYear = '0';

      formData.YearFourthPer = '0';
      formData.SessionFourthYear = '0';
      formData.YearFourthYear = '0';





      formData.SeventhSemesterPer = '0';
      formData.SeventhSemesterSession = '0';
      formData.SeventhSemesterMonth = '0';

      formData.EightSemesterPer = '0';
      formData.EightSemesterSession = '0';
      formData.EightSemesterMonth = '0';
    }

    else if (b.data[0].duration == "7" && b.data[0].semester == "Semester") {
      formData.YearFirstPer = '0';
      formData.SessionFirstYear = '0';
      formData.YearFirstYear = '0';


      formData.YearSecondPer = '0';
      formData.SessionSecondYear = '0';
      formData.YearSecondYear = '0';

      formData.YearThirdPer = '0';
      formData.SessionThirdYear = '0';
      formData.YearThirdYear = '0';

      formData.YearFourthPer = '0';
      formData.SessionFourthYear = '0';
      formData.YearFourthYear = '0';



      formData.EightSemesterPer = '0';
      formData.EightSemesterSession = '0';
      formData.EightSemesterMonth = '0';
    }

    else if (b.data[0].duration == "8" && b.data[0].semester == "Semester") {
      formData.YearFirstPer = '0';
      formData.SessionFirstYear = '0';
      formData.YearFirstYear = '0';


      formData.YearSecondPer = '0';
      formData.SessionSecondYear = '0';
      formData.YearSecondYear = '0';

      formData.YearThirdPer = '0';
      formData.SessionThirdYear = '0';
      formData.YearThirdYear = '0';

      formData.YearFourthPer = '0';
      formData.SessionFourthYear = '0';
      formData.YearFourthYear = '0';


    }

    else if (b.data[0].duration == "1" && b.data[0].semester == "Year") {


      formData.YearSecondPer = '0';
      formData.SessionSecondYear = '0';
      formData.YearSecondYear = '0';

      formData.YearThirdPer = '0';
      formData.SessionThirdYear = '0';
      formData.YearThirdYear = '0';

      formData.YearFourthPer = '0';
      formData.SessionFourthYear = '0';
      formData.YearFourthYear = '0';



      formData.FirstSemesterPer = '0';
      formData.FirstSemesterSession = '0';
      formData.FirstSemesterMonth = '0';


      formData.SecondSemesterPer = '0';
      formData.SecondSemesterSession = '0';
      formData.SecondSemesterMonth = '0';


      formData.ThirdSemesterPer = '0';
      formData.ThirdSemesterSession = '0';
      formData.ThirdSemesterMonth = '0';


      formData.FourthSemesterPer = '0';
      formData.FourthSemesterSession = '0';
      formData.FourthSemesterMonth = '0';


      formData.FivethSemesterPer = '0';
      formData.FivethSemesterSession = '0';
      formData.FivethSemesterMonth = '0';


      formData.SixSemesterPer = '0';
      formData.SixSemesterSession = '0';
      formData.SixSemesterMonth = '0';



      formData.SeventhSemesterPer = '0';
      formData.SeventhSemesterSession = '0';
      formData.SeventhSemesterMonth = '0';

      formData.EightSemesterPer = '0';
      formData.EightSemesterSession = '0';
      formData.EightSemesterMonth = '0';
    }

    else if (b.data[0].duration == "2" && b.data[0].semester == "Year") {


      formData.YearThirdPer = '0';
      formData.SessionThirdYear = '0';
      formData.YearThirdYear = '0';

      formData.YearFourthPer = '0';
      formData.SessionFourthYear = '0';
      formData.YearFourthYear = '0';



      formData.FirstSemesterPer = '0';
      formData.FirstSemesterSession = '0';
      formData.FirstSemesterMonth = '0';


      formData.SecondSemesterPer = '0';
      formData.SecondSemesterSession = '0';
      formData.SecondSemesterMonth = '0';


      formData.ThirdSemesterPer = '0';
      formData.ThirdSemesterSession = '0';
      formData.ThirdSemesterMonth = '0';


      formData.FourthSemesterPer = '0';
      formData.FourthSemesterSession = '0';
      formData.FourthSemesterMonth = '0';


      formData.FivethSemesterPer = '0';
      formData.FivethSemesterSession = '0';
      formData.FivethSemesterMonth = '0';


      formData.SixSemesterPer = '0';
      formData.SixSemesterSession = '0';
      formData.SixSemesterMonth = '0';



      formData.SeventhSemesterPer = '0';
      formData.SeventhSemesterSession = '0';
      formData.SeventhSemesterMonth = '0';

      formData.EightSemesterPer = '0';
      formData.EightSemesterSession = '0';
      formData.EightSemesterMonth = '0';
    }

    else if (b.data[0].duration == "3" && b.data[0].semester == "Year") {


      formData.YearFourthPer = '0';
      formData.SessionFourthYear = '0';
      formData.YearFourthYear = '0';



      formData.FirstSemesterPer = '0';
      formData.FirstSemesterSession = '0';
      formData.FirstSemesterMonth = '0';


      formData.SecondSemesterPer = '0';
      formData.SecondSemesterSession = '0';
      formData.SecondSemesterMonth = '0';


      formData.ThirdSemesterPer = '0';
      formData.ThirdSemesterSession = '0';
      formData.ThirdSemesterMonth = '0';


      formData.FourthSemesterPer = '0';
      formData.FourthSemesterSession = '0';
      formData.FourthSemesterMonth = '0';


      formData.FivethSemesterPer = '0';
      formData.FivethSemesterSession = '0';
      formData.FivethSemesterMonth = '0';


      formData.SixSemesterPer = '0';
      formData.SixSemesterSession = '0';
      formData.SixSemesterMonth = '0';



      formData.SeventhSemesterPer = '0';
      formData.SeventhSemesterSession = '0';
      formData.SeventhSemesterMonth = '0';

      formData.EightSemesterPer = '0';
      formData.EightSemesterSession = '0';
      formData.EightSemesterMonth = '0';
    }

    else if (b.data[0].duration == "4" && b.data[0].semester == "Year") {



      formData.FirstSemesterPer = '0';
      formData.FirstSemesterSession = '0';
      formData.FirstSemesterMonth = '0';


      formData.SecondSemesterPer = '0';
      formData.SecondSemesterSession = '0';
      formData.SecondSemesterMonth = '0';


      formData.ThirdSemesterPer = '0';
      formData.ThirdSemesterSession = '0';
      formData.ThirdSemesterMonth = '0';


      formData.FourthSemesterPer = '0';
      formData.FourthSemesterSession = '0';
      formData.FourthSemesterMonth = '0';


      formData.FivethSemesterPer = '0';
      formData.FivethSemesterSession = '0';
      formData.FivethSemesterMonth = '0';


      formData.SixSemesterPer = '0';
      formData.SixSemesterSession = '0';
      formData.SixSemesterMonth = '0';



      formData.SeventhSemesterPer = '0';
      formData.SeventhSemesterSession = '0';
      formData.SeventhSemesterMonth = '0';

      formData.EightSemesterPer = '0';
      formData.EightSemesterSession = '0';
      formData.EightSemesterMonth = '0';
    }
















  }



  const [course, setcourse] = useState([]);
  const getCourse = async (e) => {

    let a = await axios.get(`${url}/get-Courses1`);
    setcourse(a.data);



  }

  useEffect(() => {



    const fetchData = async () => {
      await getStudent();
      await getCourse();

    };



    fetchData();
    console.log(formData);






  }, [Id]);





  const handleInputValue = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData, [name]: value
    });
  }






  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // console.log(formData);



    const r = await axios.post(`${url}/Add-Result`,
      formData,
      {
        withCredentials: true
      }
    );

    console.log(r.data.Status);




    if (r.data.Status == true) {

      alert("Result Successfully Added");
      navigate("/Search-Student");

    }
    else {
      console.log("Response", r.data.Status);


      alert("Result does not Added");

    }






  }
  return <>

    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Add Result</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a >Manage Result</a></li>
            <li className="breadcrumb-item active">Result</li>
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

          <div className="row my-1">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label htmlFor="inputEmail3" className="col-form-label">Course</label>
              <select disabled name="course" onChange={handleInputValue} value={formData.course} className="form-control" id="" >

                {
                  course.map((e) =>
                  (
                    formData.course == e.id ? (
                      <option value={formData.course} selected>{e.coursename}</option>

                    ) : ''

                  ))
                }


              </select>
            </div>

            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xms-2">


            </div>

          </div>
          {
            (formData.duration == "1" && formData.semester == "Semester") ?
              (
                <>
                  <div className="row">
                    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                      <label htmlFor="inputEmail3" className="col-form-label">Percentage Of First Semester</label>
                      <input type="text" onChange={handleInputValue} value={formData.FirstSemesterPer} className="form-control" id="inputEmail" name='FirstSemesterPer' />

                    </div>
                    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                      <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                      <select name="FirstSemesterSession" onChange={handleInputValue} value={formData.FirstSemesterSession} className="form-control" id="" >
                        <option value=''>Select The Value</option>
                        <option selected value="Jan" >Jan</option>
                        <option value="Apr">Apr</option>
                        <option value="Jul">Jul</option>
                        <option value="Oct">Oct</option>
                      </select>
                    </div>


                  </div>
                  <div className="row">

                    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                      <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                      <select name="FirstSemesterMonth" onChange={handleInputValue} value={formData.FirstSemesterMonth} className="form-control" id="" >

                        <option value=''>Select The Value</option>
                        <option selected value='1997'>1997</option>

                        <option value='1998'>1998</option>
                        <option value='1999'>1999</option>
                        <option value='2000'>2000</option>
                        <option value='2001'>2001</option>
                        <option value='2002'>2002</option>
                        <option value='2003'>2003</option>
                        <option value='2004'>2004</option>
                        <option value='2005'>2005</option>
                        <option value='2006'>2006</option>
                        <option value='2007'>2007</option>
                        <option value='2008'>2008</option>
                        <option value='2009'>2009</option>
                        <option value='2010' > 2010</option>




                        <option value='2011'>2011</option>
                        <option value='2012'>2012</option>
                        <option value='2013'>2013</option>
                        <option value='2014'> 2014</option>
                        <option value='2015'>2015</option>
                        <option value='2016'>2016</option>
                        <option value='2017' >2017</option>
                        <option value='2018' >2018</option>
                        <option value='2019'>2019</option>
                        <option value='2020'>2020</option>
                        <option value='2021' >2021</option>

                        <option value='2022'>2022</option>
                        <option value='2023'>2023</option>
                        <option value='2024' >2024</option>

                        <option value='2025'>2025</option>
                        <option value='2026' >2026</option>

                        <option value='2027'>2027</option>
                        <option value='2028'>2028</option>
                        <option value='2029' >2029</option>
                      </select>
                    </div>





                  </div>

                </>
              ) :
              (formData.duration == "2" && formData.semester == "Semester") ?
                (
                  <>
                    <div className="row">
                      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                        <label htmlFor="inputEmail3" className="col-form-label">Percentage Of First Semester</label>
                        <input type="text" onChange={handleInputValue} value={formData.FirstSemesterPer} className="form-control" id="inputEmail" name='FirstSemesterPer' />

                      </div>
                      <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                        <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                        <select name="FirstSemesterSession" onChange={handleInputValue} value={formData.FirstSemesterSession} className="form-control" id="" >
                          <option value=''>Select The Value</option>
                          <option selected value="Jan" >Jan</option>
                          <option value="Apr">Apr</option>
                          <option value="Jul">Jul</option>
                          <option value="Oct">Oct</option>
                        </select>
                      </div>


                    </div>
                    <div className="row">

                      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                        <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                        <select name="FirstSemesterMonth" onChange={handleInputValue} value={formData.FirstSemesterMonth} className="form-control" id="" >

                          <option value=''>Select The Value</option>
                          <option selected value='1997'>1997</option>

                          <option value='1998'>1998</option>
                          <option value='1999'>1999</option>
                          <option value='2000'>2000</option>
                          <option value='2001'>2001</option>
                          <option value='2002'>2002</option>
                          <option value='2003'>2003</option>
                          <option value='2004'>2004</option>
                          <option value='2005'>2005</option>
                          <option value='2006'>2006</option>
                          <option value='2007'>2007</option>
                          <option value='2008'>2008</option>
                          <option value='2009'>2009</option>
                          <option value='2010' > 2010</option>




                          <option value='2011'>2011</option>
                          <option value='2012'>2012</option>
                          <option value='2013'>2013</option>
                          <option value='2014'> 2014</option>
                          <option value='2015'>2015</option>
                          <option value='2016'>2016</option>
                          <option value='2017' >2017</option>
                          <option value='2018' >2018</option>
                          <option value='2019'>2019</option>
                          <option value='2020'>2020</option>
                          <option value='2021' >2021</option>

                          <option value='2022'>2022</option>
                          <option value='2023'>2023</option>
                          <option value='2024' >2024</option>

                          <option value='2025'>2025</option>
                          <option value='2026' >2026</option>

                          <option value='2027'>2027</option>
                          <option value='2028'>2028</option>
                          <option value='2029' >2029</option>
                        </select>
                      </div>





                    </div>


                    <div className="row">
                      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                        <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Second Semester</label>
                        <input type="text" onChange={handleInputValue} value={formData.SecondSemesterPer} className="form-control" id="inputEmail" name='SecondSemesterPer' />

                      </div>
                      <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                        <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                        <select name="SecondSemesterSession" onChange={handleInputValue} value={formData.SecondSemesterSession} className="form-control" id="" >
                          <option value=''>Select The Value</option>
                          <option selected value="Jan" >Jan</option>
                          <option value="Apr">Apr</option>
                          <option value="Jul">Jul</option>
                          <option value="Oct">Oct</option>
                        </select>
                      </div>


                    </div>
                    <div className="row">

                      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                        <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                        <select name="SecondSemesterMonth" onChange={handleInputValue} value={formData.SecondSemesterMonth} className="form-control" id="" >

                          <option value=''>Select The Value</option>
                          <option selected value='1997'>1997</option>

                          <option value='1998'>1998</option>
                          <option value='1999'>1999</option>
                          <option value='2000'>2000</option>
                          <option value='2001'>2001</option>
                          <option value='2002'>2002</option>
                          <option value='2003'>2003</option>
                          <option value='2004'>2004</option>
                          <option value='2005'>2005</option>
                          <option value='2006'>2006</option>
                          <option value='2007'>2007</option>
                          <option value='2008'>2008</option>
                          <option value='2009'>2009</option>
                          <option value='2010' > 2010</option>




                          <option value='2011'>2011</option>
                          <option value='2012'>2012</option>
                          <option value='2013'>2013</option>
                          <option value='2014'> 2014</option>
                          <option value='2015'>2015</option>
                          <option value='2016'>2016</option>
                          <option value='2017' >2017</option>
                          <option value='2018' >2018</option>
                          <option value='2019'>2019</option>
                          <option value='2020'>2020</option>
                          <option value='2021' >2021</option>

                          <option value='2022'>2022</option>
                          <option value='2023'>2023</option>
                          <option value='2024' >2024</option>

                          <option value='2025'>2025</option>
                          <option value='2026' >2026</option>

                          <option value='2027'>2027</option>
                          <option value='2028'>2028</option>
                          <option value='2029' >2029</option>
                        </select>
                      </div>





                    </div>




                  </>
                ) : (formData.duration == "3" && formData.semester == "Semester") ?
                  (
                    <>
                      <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                          <label htmlFor="inputEmail3" className="col-form-label">Percentage Of First Semester</label>
                          <input type="text" onChange={handleInputValue} value={formData.FirstSemesterPer} className="form-control" id="inputEmail" name='FirstSemesterPer' />

                        </div>
                        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                          <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                          <select name="FirstSemesterSession" onChange={handleInputValue} value={formData.FirstSemesterSession} className="form-control" id="" >
                            <option value=''>Select The Value</option>
                            <option selected value="Jan" >Jan</option>
                            <option value="Apr">Apr</option>
                            <option value="Jul">Jul</option>
                            <option value="Oct">Oct</option>
                          </select>
                        </div>


                      </div>
                      <div className="row">

                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                          <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                          <select name="FirstSemesterMonth" onChange={handleInputValue} value={formData.FirstSemesterMonth} className="form-control" id="" >

                            <option value=''>Select The Value</option>
                            <option selected value='1997'>1997</option>

                            <option value='1998'>1998</option>
                            <option value='1999'>1999</option>
                            <option value='2000'>2000</option>
                            <option value='2001'>2001</option>
                            <option value='2002'>2002</option>
                            <option value='2003'>2003</option>
                            <option value='2004'>2004</option>
                            <option value='2005'>2005</option>
                            <option value='2006'>2006</option>
                            <option value='2007'>2007</option>
                            <option value='2008'>2008</option>
                            <option value='2009'>2009</option>
                            <option value='2010' > 2010</option>




                            <option value='2011'>2011</option>
                            <option value='2012'>2012</option>
                            <option value='2013'>2013</option>
                            <option value='2014'> 2014</option>
                            <option value='2015'>2015</option>
                            <option value='2016'>2016</option>
                            <option value='2017' >2017</option>
                            <option value='2018' >2018</option>
                            <option value='2019'>2019</option>
                            <option value='2020'>2020</option>
                            <option value='2021' >2021</option>

                            <option value='2022'>2022</option>
                            <option value='2023'>2023</option>
                            <option value='2024' >2024</option>

                            <option value='2025'>2025</option>
                            <option value='2026' >2026</option>

                            <option value='2027'>2027</option>
                            <option value='2028'>2028</option>
                            <option value='2029' >2029</option>
                          </select>
                        </div>





                      </div>


                      <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                          <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Second Semester</label>
                          <input type="text" onChange={handleInputValue} value={formData.SecondSemesterPer} className="form-control" id="inputEmail" name='SecondSemesterPer' />

                        </div>
                        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                          <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                          <select name="SecondSemesterSession" onChange={handleInputValue} value={formData.SecondSemesterSession} className="form-control" id="" >
                            <option value=''>Select The Value</option>
                            <option selected value="Jan" >Jan</option>
                            <option value="Apr">Apr</option>
                            <option value="Jul">Jul</option>
                            <option value="Oct">Oct</option>
                          </select>
                        </div>


                      </div>
                      <div className="row">

                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                          <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                          <select name="SecondSemesterMonth" onChange={handleInputValue} value={formData.SecondSemesterMonth} className="form-control" id="" >
                            <option value=''>Select The Value</option>
                            <option selected value='1997'>1997</option>

                            <option value='1998'>1998</option>
                            <option value='1999'>1999</option>
                            <option value='2000'>2000</option>
                            <option value='2001'>2001</option>
                            <option value='2002'>2002</option>
                            <option value='2003'>2003</option>
                            <option value='2004'>2004</option>
                            <option value='2005'>2005</option>
                            <option value='2006'>2006</option>
                            <option value='2007'>2007</option>
                            <option value='2008'>2008</option>
                            <option value='2009'>2009</option>
                            <option value='2010' > 2010</option>




                            <option value='2011'>2011</option>
                            <option value='2012'>2012</option>
                            <option value='2013'>2013</option>
                            <option value='2014'> 2014</option>
                            <option value='2015'>2015</option>
                            <option value='2016'>2016</option>
                            <option value='2017' >2017</option>
                            <option value='2018' >2018</option>
                            <option value='2019'>2019</option>
                            <option value='2020'>2020</option>
                            <option value='2021' >2021</option>

                            <option value='2022'>2022</option>
                            <option value='2023'>2023</option>
                            <option value='2024' >2024</option>

                            <option value='2025'>2025</option>
                            <option value='2026' >2026</option>

                            <option value='2027'>2027</option>
                            <option value='2028'>2028</option>
                            <option value='2029' >2029</option>
                          </select>
                        </div>





                      </div>



                      <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                          <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Third Semester</label>
                          <input type="text" onChange={handleInputValue} value={formData.ThirdSemesterPer} className="form-control" id="inputEmail" name='ThirdSemesterPer' />

                        </div>
                        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                          <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                          <select name="ThirdSemesterSession" onChange={handleInputValue} value={formData.ThirdSemesterSession} className="form-control" id="" >
                            <option value=''>Select The Value</option>
                            <option selected value="Jan" >Jan</option>
                            <option value="Apr">Apr</option>
                            <option value="Jul">Jul</option>
                            <option value="Oct">Oct</option>
                          </select>
                        </div>


                      </div>
                      <div className="row">

                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                          <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                          <select name="ThirdSemesterMonth" onChange={handleInputValue} value={formData.ThirdSemesterMonth} className="form-control" id="" >

                            <option value=''>Select The Value</option>
                            <option selected value='1997'>1997</option>

                            <option value='1998'>1998</option>
                            <option value='1999'>1999</option>
                            <option value='2000'>2000</option>
                            <option value='2001'>2001</option>
                            <option value='2002'>2002</option>
                            <option value='2003'>2003</option>
                            <option value='2004'>2004</option>
                            <option value='2005'>2005</option>
                            <option value='2006'>2006</option>
                            <option value='2007'>2007</option>
                            <option value='2008'>2008</option>
                            <option value='2009'>2009</option>
                            <option value='2010' > 2010</option>




                            <option value='2011'>2011</option>
                            <option value='2012'>2012</option>
                            <option value='2013'>2013</option>
                            <option value='2014'> 2014</option>
                            <option value='2015'>2015</option>
                            <option value='2016'>2016</option>
                            <option value='2017' >2017</option>
                            <option value='2018' >2018</option>
                            <option value='2019'>2019</option>
                            <option value='2020'>2020</option>
                            <option value='2021' >2021</option>

                            <option value='2022'>2022</option>
                            <option value='2023'>2023</option>
                            <option value='2024' >2024</option>

                            <option value='2025'>2025</option>
                            <option value='2026' >2026</option>

                            <option value='2027'>2027</option>
                            <option value='2028'>2028</option>
                            <option value='2029' >2029</option>
                          </select>
                        </div>





                      </div>





                    </>
                  ) : (formData.duration == "4" && formData.semester == "Semester") ?
                    (
                      <>
                        <div className="row">
                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                            <label htmlFor="inputEmail3" className="col-form-label">Percentage Of First Semester</label>
                            <input type="text" onChange={handleInputValue} value={formData.FirstSemesterPer} className="form-control" id="inputEmail" name='FirstSemesterPer' />

                          </div>
                          <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                            <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                            <select name="FirstSemesterSession" onChange={handleInputValue} value={formData.FirstSemesterSession} className="form-control" id="" >
                              <option value=''>Select The Value</option>
                              <option selected value="Jan" >Jan</option>
                              <option value="Apr">Apr</option>
                              <option value="Jul">Jul</option>
                              <option value="Oct">Oct</option>
                            </select>
                          </div>


                        </div>
                        <div className="row">

                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                            <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                            <select name="FirstSemesterMonth" onChange={handleInputValue} value={formData.FirstSemesterMonth} className="form-control" id="" >

                              <option value=''>Select The Value</option>
                              <option selected value='1997'>1997</option>

                              <option value='1998'>1998</option>
                              <option value='1999'>1999</option>
                              <option value='2000'>2000</option>
                              <option value='2001'>2001</option>
                              <option value='2002'>2002</option>
                              <option value='2003'>2003</option>
                              <option value='2004'>2004</option>
                              <option value='2005'>2005</option>
                              <option value='2006'>2006</option>
                              <option value='2007'>2007</option>
                              <option value='2008'>2008</option>
                              <option value='2009'>2009</option>
                              <option value='2010' > 2010</option>




                              <option value='2011'>2011</option>
                              <option value='2012'>2012</option>
                              <option value='2013'>2013</option>
                              <option value='2014'> 2014</option>
                              <option value='2015'>2015</option>
                              <option value='2016'>2016</option>
                              <option value='2017' >2017</option>
                              <option value='2018' >2018</option>
                              <option value='2019'>2019</option>
                              <option value='2020'>2020</option>
                              <option value='2021' >2021</option>

                              <option value='2022'>2022</option>
                              <option value='2023'>2023</option>
                              <option value='2024' >2024</option>

                              <option value='2025'>2025</option>
                              <option value='2026' >2026</option>

                              <option value='2027'>2027</option>
                              <option value='2028'>2028</option>
                              <option value='2029' >2029</option>
                            </select>
                          </div>





                        </div>


                        <div className="row">
                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                            <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Second Semester</label>
                            <input type="text" onChange={handleInputValue} value={formData.SecondSemesterPer} className="form-control" id="inputEmail" name='SecondSemesterPer' />

                          </div>
                          <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                            <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                            <select name="SecondSemesterSession" onChange={handleInputValue} value={formData.SecondSemesterSession} className="form-control" id="" >
                              <option value=''>Select The Value</option>
                              <option selected value="Jan" >Jan</option>
                              <option value="Apr">Apr</option>
                              <option value="Jul">Jul</option>
                              <option value="Oct">Oct</option>
                            </select>
                          </div>


                        </div>
                        <div className="row">

                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                            <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                            <select name="SecondSemesterMonth" onChange={handleInputValue} value={formData.SecondSemesterMonth} className="form-control" id="" >

                              <option value=''>Select The Value</option>
                              <option selected value='1997'>1997</option>

                              <option value='1998'>1998</option>
                              <option value='1999'>1999</option>
                              <option value='2000'>2000</option>
                              <option value='2001'>2001</option>
                              <option value='2002'>2002</option>
                              <option value='2003'>2003</option>
                              <option value='2004'>2004</option>
                              <option value='2005'>2005</option>
                              <option value='2006'>2006</option>
                              <option value='2007'>2007</option>
                              <option value='2008'>2008</option>
                              <option value='2009'>2009</option>
                              <option value='2010' > 2010</option>




                              <option value='2011'>2011</option>
                              <option value='2012'>2012</option>
                              <option value='2013'>2013</option>
                              <option value='2014'> 2014</option>
                              <option value='2015'>2015</option>
                              <option value='2016'>2016</option>
                              <option value='2017' >2017</option>
                              <option value='2018' >2018</option>
                              <option value='2019'>2019</option>
                              <option value='2020'>2020</option>
                              <option value='2021' >2021</option>

                              <option value='2022'>2022</option>
                              <option value='2023'>2023</option>
                              <option value='2024' >2024</option>

                              <option value='2025'>2025</option>
                              <option value='2026' >2026</option>

                              <option value='2027'>2027</option>
                              <option value='2028'>2028</option>
                              <option value='2029' >2029</option>
                            </select>
                          </div>





                        </div>



                        <div className="row">
                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                            <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Third Semester</label>
                            <input type="text" onChange={handleInputValue} value={formData.ThirdSemesterPer} className="form-control" id="inputEmail" name='ThirdSemesterPer' />

                          </div>
                          <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                            <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                            <select name="ThirdSemesterSession" onChange={handleInputValue} value={formData.ThirdSemesterSession} className="form-control" id="" >
                              <option value=''>Select The Value</option>
                              <option selected value="Jan" >Jan</option>
                              <option value="Apr">Apr</option>
                              <option value="Jul">Jul</option>
                              <option value="Oct">Oct</option>
                            </select>
                          </div>


                        </div>


                        <div className="row">

                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                            <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                            <select name="ThirdSemesterMonth" onChange={handleInputValue} value={formData.ThirdSemesterMonth} className="form-control" id="" >

                              <option value=''>Select The Value</option>
                              <option selected value='1997'>1997</option>

                              <option value='1998'>1998</option>
                              <option value='1999'>1999</option>
                              <option value='2000'>2000</option>
                              <option value='2001'>2001</option>
                              <option value='2002'>2002</option>
                              <option value='2003'>2003</option>
                              <option value='2004'>2004</option>
                              <option value='2005'>2005</option>
                              <option value='2006'>2006</option>
                              <option value='2007'>2007</option>
                              <option value='2008'>2008</option>
                              <option value='2009'>2009</option>
                              <option value='2010' > 2010</option>




                              <option value='2011'>2011</option>
                              <option value='2012'>2012</option>
                              <option value='2013'>2013</option>
                              <option value='2014'> 2014</option>
                              <option value='2015'>2015</option>
                              <option value='2016'>2016</option>
                              <option value='2017' >2017</option>
                              <option value='2018' >2018</option>
                              <option value='2019'>2019</option>
                              <option value='2020'>2020</option>
                              <option value='2021' >2021</option>

                              <option value='2022'>2022</option>
                              <option value='2023'>2023</option>
                              <option value='2024' >2024</option>

                              <option value='2025'>2025</option>
                              <option value='2026' >2026</option>

                              <option value='2027'>2027</option>
                              <option value='2028'>2028</option>
                              <option value='2029' >2029</option>
                            </select>
                          </div>





                        </div>


                        <div className="row">
                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                            <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Fourth Semester</label>
                            <input type="text" onChange={handleInputValue} value={formData.FourthSemesterPer} className="form-control" id="inputEmail" name='FourthSemesterPer' />

                          </div>
                          <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                            <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                            <select name="FourthSemesterSession" onChange={handleInputValue} value={formData.FourthSemesterSession} className="form-control" id="" >
                              <option value=''>Select The Value</option>
                              <option selected value="Jan" >Jan</option>
                              <option value="Apr">Apr</option>
                              <option value="Jul">Jul</option>
                              <option value="Oct">Oct</option>
                            </select>
                          </div>


                        </div>
                        <div className="row">

                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                            <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                            <select name="FourthSemesterMonth" onChange={handleInputValue} value={formData.FourthSemesterMonth} className="form-control" id="" >

                              <option value=''>Select The Value</option>
                              <option selected value='1997'>1997</option>

                              <option value='1998'>1998</option>
                              <option value='1999'>1999</option>
                              <option value='2000'>2000</option>
                              <option value='2001'>2001</option>
                              <option value='2002'>2002</option>
                              <option value='2003'>2003</option>
                              <option value='2004'>2004</option>
                              <option value='2005'>2005</option>
                              <option value='2006'>2006</option>
                              <option value='2007'>2007</option>
                              <option value='2008'>2008</option>
                              <option value='2009'>2009</option>
                              <option value='2010' > 2010</option>




                              <option value='2011'>2011</option>
                              <option value='2012'>2012</option>
                              <option value='2013'>2013</option>
                              <option value='2014'> 2014</option>
                              <option value='2015'>2015</option>
                              <option value='2016'>2016</option>
                              <option value='2017' >2017</option>
                              <option value='2018' >2018</option>
                              <option value='2019'>2019</option>
                              <option value='2020'>2020</option>
                              <option value='2021' >2021</option>

                              <option value='2022'>2022</option>
                              <option value='2023'>2023</option>
                              <option value='2024' >2024</option>

                              <option value='2025'>2025</option>
                              <option value='2026' >2026</option>

                              <option value='2027'>2027</option>
                              <option value='2028'>2028</option>
                              <option value='2029' >2029</option>
                            </select>
                          </div>





                        </div>






                      </>
                    ) : (formData.duration == "5" && formData.semester == "Semester") ?
                      (
                        <>
                          <div className="row">
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                              <label htmlFor="inputEmail3" className="col-form-label">Percentage Of First Semester</label>
                              <input type="text" onChange={handleInputValue} value={formData.FirstSemesterPer} className="form-control" id="inputEmail" name='FirstSemesterPer' />

                            </div>
                            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                              <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                              <select name="FirstSemesterSession" onChange={handleInputValue} value={formData.FirstSemesterSession} className="form-control" id="" >


                                <option value=''>Select The Value</option>
                                <option selected value="Jan" >Jan</option>
                                <option value="Apr">Apr</option>
                                <option value="Jul">Jul</option>
                                <option value="Oct">Oct</option>
                              </select>
                            </div>


                          </div>
                          <div className="row">

                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                              <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                              <select name="FirstSemesterMonth" onChange={handleInputValue} value={formData.FirstSemesterMonth} className="form-control" id="" >
                                <option value=''>Select The Value</option>

                                <option selected value='1997'>1997</option>

                                <option value='1998'>1998</option>
                                <option value='1999'>1999</option>
                                <option value='2000'>2000</option>
                                <option value='2001'>2001</option>
                                <option value='2002'>2002</option>
                                <option value='2003'>2003</option>
                                <option value='2004'>2004</option>
                                <option value='2005'>2005</option>
                                <option value='2006'>2006</option>
                                <option value='2007'>2007</option>
                                <option value='2008'>2008</option>
                                <option value='2009'>2009</option>
                                <option value='2010' > 2010</option>




                                <option value='2011'>2011</option>
                                <option value='2012'>2012</option>
                                <option value='2013'>2013</option>
                                <option value='2014'> 2014</option>
                                <option value='2015'>2015</option>
                                <option value='2016'>2016</option>
                                <option value='2017' >2017</option>
                                <option value='2018' >2018</option>
                                <option value='2019'>2019</option>
                                <option value='2020'>2020</option>
                                <option value='2021' >2021</option>

                                <option value='2022'>2022</option>
                                <option value='2023'>2023</option>
                                <option value='2024' >2024</option>

                                <option value='2025'>2025</option>
                                <option value='2026' >2026</option>

                                <option value='2027'>2027</option>
                                <option value='2028'>2028</option>
                                <option value='2029' >2029</option>
                              </select>
                            </div>





                          </div>


                          <div className="row">
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                              <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Second Semester</label>
                              <input type="text" onChange={handleInputValue} value={formData.SecondSemesterPer} className="form-control" id="inputEmail" name='SecondSemesterPer' />

                            </div>
                            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                              <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                              <select name="SecondSemesterSession" onChange={handleInputValue} value={formData.SecondSemesterSession} className="form-control" id="" >

                                <option value=''>Select The Value</option>
                                <option selected value="Jan" >Jan</option>
                                <option value="Apr">Apr</option>
                                <option value="Jul">Jul</option>
                                <option value="Oct">Oct</option>
                              </select>
                            </div>


                          </div>
                          <div className="row">

                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                              <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                              <select name="SecondSemesterMonth" onChange={handleInputValue} value={formData.SecondSemesterMonth} className="form-control" id="" >

                                <option value=''>Select The Value</option>
                                <option selected value='1997'>1997</option>

                                <option value='1998'>1998</option>
                                <option value='1999'>1999</option>
                                <option value='2000'>2000</option>
                                <option value='2001'>2001</option>
                                <option value='2002'>2002</option>
                                <option value='2003'>2003</option>
                                <option value='2004'>2004</option>
                                <option value='2005'>2005</option>
                                <option value='2006'>2006</option>
                                <option value='2007'>2007</option>
                                <option value='2008'>2008</option>
                                <option value='2009'>2009</option>
                                <option value='2010' > 2010</option>




                                <option value='2011'>2011</option>
                                <option value='2012'>2012</option>
                                <option value='2013'>2013</option>
                                <option value='2014'> 2014</option>
                                <option value='2015'>2015</option>
                                <option value='2016'>2016</option>
                                <option value='2017' >2017</option>
                                <option value='2018' >2018</option>
                                <option value='2019'>2019</option>
                                <option value='2020'>2020</option>
                                <option value='2021' >2021</option>

                                <option value='2022'>2022</option>
                                <option value='2023'>2023</option>
                                <option value='2024' >2024</option>

                                <option value='2025'>2025</option>
                                <option value='2026' >2026</option>

                                <option value='2027'>2027</option>
                                <option value='2028'>2028</option>
                                <option value='2029' >2029</option>
                              </select>
                            </div>





                          </div>



                          <div className="row">
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                              <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Third Semester</label>
                              <input type="text" onChange={handleInputValue} value={formData.ThirdSemesterPer} className="form-control" id="inputEmail" name='ThirdSemesterPer' />

                            </div>
                            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                              <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                              <select name="ThirdSemesterSession" onChange={handleInputValue} value={formData.ThirdSemesterSession} className="form-control" id="" >
                                <option value=''>Select The Value</option>
                                <option selected value="Jan" >Jan</option>
                                <option value="Apr">Apr</option>
                                <option value="Jul">Jul</option>
                                <option value="Oct">Oct</option>
                              </select>
                            </div>


                          </div>


                          <div className="row">

                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                              <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                              <select name="ThirdSemesterMonth" onChange={handleInputValue} value={formData.ThirdSemesterMonth} className="form-control" id="" >

                                <option value=''>Select The Value</option>
                                <option selected value='1997'>1997</option>

                                <option value='1998'>1998</option>
                                <option value='1999'>1999</option>
                                <option value='2000'>2000</option>
                                <option value='2001'>2001</option>
                                <option value='2002'>2002</option>
                                <option value='2003'>2003</option>
                                <option value='2004'>2004</option>
                                <option value='2005'>2005</option>
                                <option value='2006'>2006</option>
                                <option value='2007'>2007</option>
                                <option value='2008'>2008</option>
                                <option value='2009'>2009</option>
                                <option value='2010' > 2010</option>




                                <option value='2011'>2011</option>
                                <option value='2012'>2012</option>
                                <option value='2013'>2013</option>
                                <option value='2014'> 2014</option>
                                <option value='2015'>2015</option>
                                <option value='2016'>2016</option>
                                <option value='2017' >2017</option>
                                <option value='2018' >2018</option>
                                <option value='2019'>2019</option>
                                <option value='2020'>2020</option>
                                <option value='2021' >2021</option>

                                <option value='2022'>2022</option>
                                <option value='2023'>2023</option>
                                <option value='2024' >2024</option>

                                <option value='2025'>2025</option>
                                <option value='2026' >2026</option>

                                <option value='2027'>2027</option>
                                <option value='2028'>2028</option>
                                <option value='2029' >2029</option>
                              </select>
                            </div>





                          </div>


                          <div className="row">
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                              <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Fourth Semester</label>
                              <input type="text" onChange={handleInputValue} value={formData.FourthSemesterPer} className="form-control" id="inputEmail" name='FourthSemesterPer' />

                            </div>
                            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                              <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                              <select name="FourthSemesterSession" onChange={handleInputValue} value={formData.FourthSemesterSession} className="form-control" id="" >
                                <option value=''>Select The Value</option>
                                <option selected value="Jan" >Jan</option>
                                <option value="Apr">Apr</option>
                                <option value="Jul">Jul</option>
                                <option value="Oct">Oct</option>
                              </select>
                            </div>


                          </div>
                          <div className="row">

                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                              <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                              <select name="FourthSemesterMonth" onChange={handleInputValue} value={formData.FourthSemesterMonth} className="form-control" id="" >

                                <option value=''>Select The Value</option>
                                <option selected value='1997'>1997</option>

                                <option value='1998'>1998</option>
                                <option value='1999'>1999</option>
                                <option value='2000'>2000</option>
                                <option value='2001'>2001</option>
                                <option value='2002'>2002</option>
                                <option value='2003'>2003</option>
                                <option value='2004'>2004</option>
                                <option value='2005'>2005</option>
                                <option value='2006'>2006</option>
                                <option value='2007'>2007</option>
                                <option value='2008'>2008</option>
                                <option value='2009'>2009</option>
                                <option value='2010' > 2010</option>




                                <option value='2011'>2011</option>
                                <option value='2012'>2012</option>
                                <option value='2013'>2013</option>
                                <option value='2014'> 2014</option>
                                <option value='2015'>2015</option>
                                <option value='2016'>2016</option>
                                <option value='2017' >2017</option>
                                <option value='2018' >2018</option>
                                <option value='2019'>2019</option>
                                <option value='2020'>2020</option>
                                <option value='2021' >2021</option>

                                <option value='2022'>2022</option>
                                <option value='2023'>2023</option>
                                <option value='2024' >2024</option>

                                <option value='2025'>2025</option>
                                <option value='2026' >2026</option>

                                <option value='2027'>2027</option>
                                <option value='2028'>2028</option>
                                <option value='2029' >2029</option>
                              </select>
                            </div>





                          </div>


                          <div className="row">
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                              <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Fivth Semester</label>
                              <input type="text" onChange={handleInputValue} value={formData.FivethSemesterPer} className="form-control" id="inputEmail" name='FivethSemesterPer' />

                            </div>
                            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                              <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                              <select name="FivethSemesterSession" onChange={handleInputValue} value={formData.FivethSemesterSession} className="form-control" id="" >
                                <option value=''>Select The Value</option>
                                <option selected value="Jan" >Jan</option>
                                <option value="Apr">Apr</option>
                                <option value="Jul">Jul</option>
                                <option value="Oct">Oct</option>
                              </select>
                            </div>


                          </div>
                          <div className="row">

                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                              <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                              <select name="FivethSemesterMonth" onChange={handleInputValue} value={formData.FivethSemesterMonth} className="form-control" id="" >

                                <option value=''>Select The Value</option>
                                <option selected value='1997'>1997</option>

                                <option value='1998'>1998</option>
                                <option value='1999'>1999</option>
                                <option value='2000'>2000</option>
                                <option value='2001'>2001</option>
                                <option value='2002'>2002</option>
                                <option value='2003'>2003</option>
                                <option value='2004'>2004</option>
                                <option value='2005'>2005</option>
                                <option value='2006'>2006</option>
                                <option value='2007'>2007</option>
                                <option value='2008'>2008</option>
                                <option value='2009'>2009</option>
                                <option value='2010' > 2010</option>




                                <option value='2011'>2011</option>
                                <option value='2012'>2012</option>
                                <option value='2013'>2013</option>
                                <option value='2014'> 2014</option>
                                <option value='2015'>2015</option>
                                <option value='2016'>2016</option>
                                <option value='2017' >2017</option>
                                <option value='2018' >2018</option>
                                <option value='2019'>2019</option>
                                <option value='2020'>2020</option>
                                <option value='2021' >2021</option>

                                <option value='2022'>2022</option>
                                <option value='2023'>2023</option>
                                <option value='2024' >2024</option>

                                <option value='2025'>2025</option>
                                <option value='2026' >2026</option>

                                <option value='2027'>2027</option>
                                <option value='2028'>2028</option>
                                <option value='2029' >2029</option>
                              </select>
                            </div>





                          </div>











                        </>
                      ) : (formData.duration == "6" && formData.semester == "Semester") ?
                        (
                          <>
                            <div className="row">
                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                <label htmlFor="inputEmail3" className="col-form-label">Percentage Of First Semester</label>
                                <input type="text" onChange={handleInputValue} value={formData.FirstSemesterPer} className="form-control" id="inputEmail" name='FirstSemesterPer' />

                              </div>
                              <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                <select name="FirstSemesterSession" onChange={handleInputValue} value={formData.FirstSemesterSession} className="form-control" id="" >
                                  <option value=''>Select The Value</option>
                                  <option selected value="Jan" >Jan</option>
                                  <option value="Apr">Apr</option>
                                  <option value="Jul">Jul</option>
                                  <option value="Oct">Oct</option>
                                </select>
                              </div>


                            </div>
                            <div className="row">

                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                <select name="FirstSemesterMonth" onChange={handleInputValue} value={formData.FirstSemesterMonth} className="form-control" id="" >

                                  <option value=''>Select The Value</option>
                                  <option selected value='1997'>1997</option>

                                  <option value='1998'>1998</option>
                                  <option value='1999'>1999</option>
                                  <option value='2000'>2000</option>
                                  <option value='2001'>2001</option>
                                  <option value='2002'>2002</option>
                                  <option value='2003'>2003</option>
                                  <option value='2004'>2004</option>
                                  <option value='2005'>2005</option>
                                  <option value='2006'>2006</option>
                                  <option value='2007'>2007</option>
                                  <option value='2008'>2008</option>
                                  <option value='2009'>2009</option>
                                  <option value='2010' > 2010</option>




                                  <option value='2011'>2011</option>
                                  <option value='2012'>2012</option>
                                  <option value='2013'>2013</option>
                                  <option value='2014'> 2014</option>
                                  <option value='2015'>2015</option>
                                  <option value='2016'>2016</option>
                                  <option value='2017' >2017</option>
                                  <option value='2018' >2018</option>
                                  <option value='2019'>2019</option>
                                  <option value='2020'>2020</option>
                                  <option value='2021' >2021</option>

                                  <option value='2022'>2022</option>
                                  <option value='2023'>2023</option>
                                  <option value='2024' >2024</option>

                                  <option value='2025'>2025</option>
                                  <option value='2026' >2026</option>

                                  <option value='2027'>2027</option>
                                  <option value='2028'>2028</option>
                                  <option value='2029' >2029</option>
                                </select>
                              </div>





                            </div>


                            <div className="row">
                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Second Semester</label>
                                <input type="text" onChange={handleInputValue} value={formData.SecondSemesterPer} className="form-control" id="inputEmail" name='SecondSemesterPer' />

                              </div>
                              <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                <select name="SecondSemesterSession" onChange={handleInputValue} value={formData.SecondSemesterSession} className="form-control" id="" >
                                  <option value=''>Select The Value</option>
                                  <option selected value="Jan" >Jan</option>
                                  <option value="Apr">Apr</option>
                                  <option value="Jul">Jul</option>
                                  <option value="Oct">Oct</option>
                                </select>
                              </div>


                            </div>
                            <div className="row">

                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                <select name="SecondSemesterMonth" onChange={handleInputValue} value={formData.SecondSemesterMonth} className="form-control" id="" >

                                  <option value=''>Select The Value</option>
                                  <option selected value='1997'>1997</option>

                                  <option value='1998'>1998</option>
                                  <option value='1999'>1999</option>
                                  <option value='2000'>2000</option>
                                  <option value='2001'>2001</option>
                                  <option value='2002'>2002</option>
                                  <option value='2003'>2003</option>
                                  <option value='2004'>2004</option>
                                  <option value='2005'>2005</option>
                                  <option value='2006'>2006</option>
                                  <option value='2007'>2007</option>
                                  <option value='2008'>2008</option>
                                  <option value='2009'>2009</option>
                                  <option value='2010' > 2010</option>




                                  <option value='2011'>2011</option>
                                  <option value='2012'>2012</option>
                                  <option value='2013'>2013</option>
                                  <option value='2014'> 2014</option>
                                  <option value='2015'>2015</option>
                                  <option value='2016'>2016</option>
                                  <option value='2017' >2017</option>
                                  <option value='2018' >2018</option>
                                  <option value='2019'>2019</option>
                                  <option value='2020'>2020</option>
                                  <option value='2021' >2021</option>

                                  <option value='2022'>2022</option>
                                  <option value='2023'>2023</option>
                                  <option value='2024' >2024</option>

                                  <option value='2025'>2025</option>
                                  <option value='2026' >2026</option>

                                  <option value='2027'>2027</option>
                                  <option value='2028'>2028</option>
                                  <option value='2029' >2029</option>
                                </select>
                              </div>





                            </div>



                            <div className="row">
                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Third Semester</label>
                                <input type="text" onChange={handleInputValue} value={formData.ThirdSemesterPer} className="form-control" id="inputEmail" name='ThirdSemesterPer' />

                              </div>
                              <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                <select name="ThirdSemesterSession" onChange={handleInputValue} value={formData.ThirdSemesterSession} className="form-control" id="" >
                                  <option value=''>Select The Value</option>
                                  <option selected value="Jan" >Jan</option>
                                  <option value="Apr">Apr</option>
                                  <option value="Jul">Jul</option>
                                  <option value="Oct">Oct</option>
                                </select>
                              </div>


                            </div>


                            <div className="row">

                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                <select name="ThirdSemesterMonth" onChange={handleInputValue} value={formData.ThirdSemesterMonth} className="form-control" id="" >

                                  <option value=''>Select The Value</option>
                                  <option selected value='1997'>1997</option>

                                  <option value='1998'>1998</option>
                                  <option value='1999'>1999</option>
                                  <option value='2000'>2000</option>
                                  <option value='2001'>2001</option>
                                  <option value='2002'>2002</option>
                                  <option value='2003'>2003</option>
                                  <option value='2004'>2004</option>
                                  <option value='2005'>2005</option>
                                  <option value='2006'>2006</option>
                                  <option value='2007'>2007</option>
                                  <option value='2008'>2008</option>
                                  <option value='2009'>2009</option>
                                  <option value='2010' > 2010</option>




                                  <option value='2011'>2011</option>
                                  <option value='2012'>2012</option>
                                  <option value='2013'>2013</option>
                                  <option value='2014'> 2014</option>
                                  <option value='2015'>2015</option>
                                  <option value='2016'>2016</option>
                                  <option value='2017' >2017</option>
                                  <option value='2018' >2018</option>
                                  <option value='2019'>2019</option>
                                  <option value='2020'>2020</option>
                                  <option value='2021' >2021</option>

                                  <option value='2022'>2022</option>
                                  <option value='2023'>2023</option>
                                  <option value='2024' >2024</option>

                                  <option value='2025'>2025</option>
                                  <option value='2026' >2026</option>

                                  <option value='2027'>2027</option>
                                  <option value='2028'>2028</option>
                                  <option value='2029' >2029</option>
                                </select>
                              </div>





                            </div>


                            <div className="row">
                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Fourth Semester</label>
                                <input type="text" onChange={handleInputValue} value={formData.FourthSemesterPer} className="form-control" id="inputEmail" name='FourthSemesterPer' />

                              </div>
                              <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                <select name="FourthSemesterSession" onChange={handleInputValue} value={formData.FourthSemesterSession} className="form-control" id="" >
                                  <option value=''>Select The Value</option>
                                  <option selected value="Jan" >Jan</option>
                                  <option value="Apr">Apr</option>
                                  <option value="Jul">Jul</option>
                                  <option value="Oct">Oct</option>
                                </select>
                              </div>


                            </div>
                            <div className="row">

                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                <select name="FourthSemesterMonth" onChange={handleInputValue} value={formData.FourthSemesterMonth} className="form-control" id="" >

                                  <option value=''>Select The Value</option>
                                  <option selected value='1997'>1997</option>

                                  <option value='1998'>1998</option>
                                  <option value='1999'>1999</option>
                                  <option value='2000'>2000</option>
                                  <option value='2001'>2001</option>
                                  <option value='2002'>2002</option>
                                  <option value='2003'>2003</option>
                                  <option value='2004'>2004</option>
                                  <option value='2005'>2005</option>
                                  <option value='2006'>2006</option>
                                  <option value='2007'>2007</option>
                                  <option value='2008'>2008</option>
                                  <option value='2009'>2009</option>
                                  <option value='2010' > 2010</option>




                                  <option value='2011'>2011</option>
                                  <option value='2012'>2012</option>
                                  <option value='2013'>2013</option>
                                  <option value='2014'> 2014</option>
                                  <option value='2015'>2015</option>
                                  <option value='2016'>2016</option>
                                  <option value='2017' >2017</option>
                                  <option value='2018' >2018</option>
                                  <option value='2019'>2019</option>
                                  <option value='2020'>2020</option>
                                  <option value='2021' >2021</option>

                                  <option value='2022'>2022</option>
                                  <option value='2023'>2023</option>
                                  <option value='2024' >2024</option>

                                  <option value='2025'>2025</option>
                                  <option value='2026' >2026</option>

                                  <option value='2027'>2027</option>
                                  <option value='2028'>2028</option>
                                  <option value='2029' >2029</option>
                                </select>
                              </div>





                            </div>


                            <div className="row">
                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Fivth Semester</label>
                                <input type="text" onChange={handleInputValue} value={formData.FivethSemesterPer} className="form-control" id="inputEmail" name='FivethSemesterPer' />

                              </div>
                              <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                <select name="FivethSemesterSession" onChange={handleInputValue} value={formData.FivethSemesterSession} className="form-control" id="" >
                                  <option value=''>Select The Value</option>
                                  <option selected value="Jan" >Jan</option>
                                  <option value="Apr">Apr</option>
                                  <option value="Jul">Jul</option>
                                  <option value="Oct">Oct</option>
                                </select>
                              </div>


                            </div>
                            <div className="row">

                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                <select name="FivethSemesterMonth" onChange={handleInputValue} value={formData.FivethSemesterMonth} className="form-control" id="" >

                                  <option value=''>Select The Value</option>
                                  <option selected value='1997'>1997</option>

                                  <option value='1998'>1998</option>
                                  <option value='1999'>1999</option>
                                  <option value='2000'>2000</option>
                                  <option value='2001'>2001</option>
                                  <option value='2002'>2002</option>
                                  <option value='2003'>2003</option>
                                  <option value='2004'>2004</option>
                                  <option value='2005'>2005</option>
                                  <option value='2006'>2006</option>
                                  <option value='2007'>2007</option>
                                  <option value='2008'>2008</option>
                                  <option value='2009'>2009</option>
                                  <option value='2010' > 2010</option>




                                  <option value='2011'>2011</option>
                                  <option value='2012'>2012</option>
                                  <option value='2013'>2013</option>
                                  <option value='2014'> 2014</option>
                                  <option value='2015'>2015</option>
                                  <option value='2016'>2016</option>
                                  <option value='2017' >2017</option>
                                  <option value='2018' >2018</option>
                                  <option value='2019'>2019</option>
                                  <option value='2020'>2020</option>
                                  <option value='2021' >2021</option>

                                  <option value='2022'>2022</option>
                                  <option value='2023'>2023</option>
                                  <option value='2024' >2024</option>

                                  <option value='2025'>2025</option>
                                  <option value='2026' >2026</option>

                                  <option value='2027'>2027</option>
                                  <option value='2028'>2028</option>
                                  <option value='2029' >2029</option>
                                </select>
                              </div>





                            </div>

                            <div className="row">
                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Six Semester</label>
                                <input type="text" onChange={handleInputValue} value={formData.SixSemesterPer} className="form-control" id="inputEmail" name='SixSemesterPer' />

                              </div>
                              <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                <select name="SixSemesterSession" onChange={handleInputValue} value={formData.SixSemesterSession} className="form-control" id="" >
                                  <option value=''>Select The Value</option>
                                  <option selected value="Jan" >Jan</option>
                                  <option value="Apr">Apr</option>
                                  <option value="Jul">Jul</option>
                                  <option value="Oct">Oct</option>
                                </select>
                              </div>


                            </div>
                            <div className="row">

                              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                <select name="SixSemesterMonth" onChange={handleInputValue} value={formData.SixSemesterMonth} className="form-control" id="" >

                                  <option value=''>Select The Value</option>
                                  <option selected value='1997'>1997</option>

                                  <option value='1998'>1998</option>
                                  <option value='1999'>1999</option>
                                  <option value='2000'>2000</option>
                                  <option value='2001'>2001</option>
                                  <option value='2002'>2002</option>
                                  <option value='2003'>2003</option>
                                  <option value='2004'>2004</option>
                                  <option value='2005'>2005</option>
                                  <option value='2006'>2006</option>
                                  <option value='2007'>2007</option>
                                  <option value='2008'>2008</option>
                                  <option value='2009'>2009</option>
                                  <option value='2010' > 2010</option>




                                  <option value='2011'>2011</option>
                                  <option value='2012'>2012</option>
                                  <option value='2013'>2013</option>
                                  <option value='2014'> 2014</option>
                                  <option value='2015'>2015</option>
                                  <option value='2016'>2016</option>
                                  <option value='2017' >2017</option>
                                  <option value='2018' >2018</option>
                                  <option value='2019'>2019</option>
                                  <option value='2020'>2020</option>
                                  <option value='2021' >2021</option>

                                  <option value='2022'>2022</option>
                                  <option value='2023'>2023</option>
                                  <option value='2024' >2024</option>

                                  <option value='2025'>2025</option>
                                  <option value='2026' >2026</option>

                                  <option value='2027'>2027</option>
                                  <option value='2028'>2028</option>
                                  <option value='2029' >2029</option>
                                </select>
                              </div>





                            </div>










                          </>
                        ) : (formData.duration == "7" && formData.semester == "Semester") ?
                          (
                            <>
                              <div className="row">
                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                  <label htmlFor="inputEmail3" className="col-form-label">Percentage Of First Semester</label>
                                  <input type="text" onChange={handleInputValue} value={formData.FirstSemesterPer} className="form-control" id="inputEmail" name='FirstSemesterPer' />

                                </div>
                                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                  <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                  <select name="FirstSemesterSession" onChange={handleInputValue} value={formData.FirstSemesterSession} className="form-control" id="" >
                                    <option value=''>Select The Value</option>
                                    <option selected value="Jan" >Jan</option>
                                    <option value="Apr">Apr</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Oct">Oct</option>
                                  </select>
                                </div>


                              </div>
                              <div className="row">

                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                  <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                  <select name="FirstSemesterMonth" onChange={handleInputValue} value={formData.FirstSemesterMonth} className="form-control" id="" >

                                    <option value=''>Select The Value</option>
                                    <option selected value='1997'>1997</option>

                                    <option value='1998'>1998</option>
                                    <option value='1999'>1999</option>
                                    <option value='2000'>2000</option>
                                    <option value='2001'>2001</option>
                                    <option value='2002'>2002</option>
                                    <option value='2003'>2003</option>
                                    <option value='2004'>2004</option>
                                    <option value='2005'>2005</option>
                                    <option value='2006'>2006</option>
                                    <option value='2007'>2007</option>
                                    <option value='2008'>2008</option>
                                    <option value='2009'>2009</option>
                                    <option value='2010' > 2010</option>




                                    <option value='2011'>2011</option>
                                    <option value='2012'>2012</option>
                                    <option value='2013'>2013</option>
                                    <option value='2014'> 2014</option>
                                    <option value='2015'>2015</option>
                                    <option value='2016'>2016</option>
                                    <option value='2017' >2017</option>
                                    <option value='2018' >2018</option>
                                    <option value='2019'>2019</option>
                                    <option value='2020'>2020</option>
                                    <option value='2021' >2021</option>

                                    <option value='2022'>2022</option>
                                    <option value='2023'>2023</option>
                                    <option value='2024' >2024</option>

                                    <option value='2025'>2025</option>
                                    <option value='2026' >2026</option>

                                    <option value='2027'>2027</option>
                                    <option value='2028'>2028</option>
                                    <option value='2029' >2029</option>
                                  </select>
                                </div>





                              </div>


                              <div className="row">
                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                  <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Second Semester</label>
                                  <input type="text" onChange={handleInputValue} value={formData.SecondSemesterPer} className="form-control" id="inputEmail" name='SecondSemesterPer' />

                                </div>
                                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                  <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                  <select name="SecondSemesterSession" onChange={handleInputValue} value={formData.SecondSemesterSession} className="form-control" id="" >
                                    <option value=''>Select The Value</option>
                                    <option selected value="Jan" >Jan</option>
                                    <option value="Apr">Apr</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Oct">Oct</option>
                                  </select>
                                </div>


                              </div>
                              <div className="row">

                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                  <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                  <select name="SecondSemesterMonth" onChange={handleInputValue} value={formData.SecondSemesterMonth} className="form-control" id="" >

                                    <option value=''>Select The Value</option>
                                    <option selected value='1997'>1997</option>

                                    <option value='1998'>1998</option>
                                    <option value='1999'>1999</option>
                                    <option value='2000'>2000</option>
                                    <option value='2001'>2001</option>
                                    <option value='2002'>2002</option>
                                    <option value='2003'>2003</option>
                                    <option value='2004'>2004</option>
                                    <option value='2005'>2005</option>
                                    <option value='2006'>2006</option>
                                    <option value='2007'>2007</option>
                                    <option value='2008'>2008</option>
                                    <option value='2009'>2009</option>
                                    <option value='2010' > 2010</option>




                                    <option value='2011'>2011</option>
                                    <option value='2012'>2012</option>
                                    <option value='2013'>2013</option>
                                    <option value='2014'> 2014</option>
                                    <option value='2015'>2015</option>
                                    <option value='2016'>2016</option>
                                    <option value='2017' >2017</option>
                                    <option value='2018' >2018</option>
                                    <option value='2019'>2019</option>
                                    <option value='2020'>2020</option>
                                    <option value='2021' >2021</option>

                                    <option value='2022'>2022</option>
                                    <option value='2023'>2023</option>
                                    <option value='2024' >2024</option>

                                    <option value='2025'>2025</option>
                                    <option value='2026' >2026</option>

                                    <option value='2027'>2027</option>
                                    <option value='2028'>2028</option>
                                    <option value='2029' >2029</option>
                                  </select>
                                </div>





                              </div>



                              <div className="row">
                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                  <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Third Semester</label>
                                  <input type="text" onChange={handleInputValue} value={formData.ThirdSemesterPer} className="form-control" id="inputEmail" name='ThirdSemesterPer' />

                                </div>
                                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                  <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                  <select name="ThirdSemesterSession" onChange={handleInputValue} value={formData.ThirdSemesterSession} className="form-control" id="" >
                                    <option value=''>Select The Value</option>
                                    <option selected value="Jan" >Jan</option>
                                    <option value="Apr">Apr</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Oct">Oct</option>
                                  </select>
                                </div>


                              </div>


                              <div className="row">

                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                  <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                  <select name="ThirdSemesterMonth" onChange={handleInputValue} value={formData.ThirdSemesterMonth} className="form-control" id="" >

                                    <option value=''>Select The Value</option>
                                    <option selected value='1997'>1997</option>

                                    <option value='1998'>1998</option>
                                    <option value='1999'>1999</option>
                                    <option value='2000'>2000</option>
                                    <option value='2001'>2001</option>
                                    <option value='2002'>2002</option>
                                    <option value='2003'>2003</option>
                                    <option value='2004'>2004</option>
                                    <option value='2005'>2005</option>
                                    <option value='2006'>2006</option>
                                    <option value='2007'>2007</option>
                                    <option value='2008'>2008</option>
                                    <option value='2009'>2009</option>
                                    <option value='2010' > 2010</option>




                                    <option value='2011'>2011</option>
                                    <option value='2012'>2012</option>
                                    <option value='2013'>2013</option>
                                    <option value='2014'> 2014</option>
                                    <option value='2015'>2015</option>
                                    <option value='2016'>2016</option>
                                    <option value='2017' >2017</option>
                                    <option value='2018' >2018</option>
                                    <option value='2019'>2019</option>
                                    <option value='2020'>2020</option>
                                    <option value='2021' >2021</option>

                                    <option value='2022'>2022</option>
                                    <option value='2023'>2023</option>
                                    <option value='2024' >2024</option>

                                    <option value='2025'>2025</option>
                                    <option value='2026' >2026</option>

                                    <option value='2027'>2027</option>
                                    <option value='2028'>2028</option>
                                    <option value='2029' >2029</option>
                                  </select>
                                </div>





                              </div>


                              <div className="row">
                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                  <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Fourth Semester</label>
                                  <input type="text" onChange={handleInputValue} value={formData.FourthSemesterPer} className="form-control" id="inputEmail" name='FourthSemesterPer' />

                                </div>
                                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                  <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                  <select name="FourthSemesterSession" onChange={handleInputValue} value={formData.FourthSemesterSession} className="form-control" id="" >
                                    <option value=''>Select The Value</option>
                                    <option selected value="Jan" >Jan</option>
                                    <option value="Apr">Apr</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Oct">Oct</option>
                                  </select>
                                </div>


                              </div>
                              <div className="row">

                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                  <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                  <select name="FourthSemesterMonth" onChange={handleInputValue} value={formData.FourthSemesterMonth} className="form-control" id="" >

                                    <option value=''>Select The Value</option>
                                    <option selected value='1997'>1997</option>

                                    <option value='1998'>1998</option>
                                    <option value='1999'>1999</option>
                                    <option value='2000'>2000</option>
                                    <option value='2001'>2001</option>
                                    <option value='2002'>2002</option>
                                    <option value='2003'>2003</option>
                                    <option value='2004'>2004</option>
                                    <option value='2005'>2005</option>
                                    <option value='2006'>2006</option>
                                    <option value='2007'>2007</option>
                                    <option value='2008'>2008</option>
                                    <option value='2009'>2009</option>
                                    <option value='2010' > 2010</option>




                                    <option value='2011'>2011</option>
                                    <option value='2012'>2012</option>
                                    <option value='2013'>2013</option>
                                    <option value='2014'> 2014</option>
                                    <option value='2015'>2015</option>
                                    <option value='2016'>2016</option>
                                    <option value='2017' >2017</option>
                                    <option value='2018' >2018</option>
                                    <option value='2019'>2019</option>
                                    <option value='2020'>2020</option>
                                    <option value='2021' >2021</option>

                                    <option value='2022'>2022</option>
                                    <option value='2023'>2023</option>
                                    <option value='2024' >2024</option>

                                    <option value='2025'>2025</option>
                                    <option value='2026' >2026</option>

                                    <option value='2027'>2027</option>
                                    <option value='2028'>2028</option>
                                    <option value='2029' >2029</option>
                                  </select>
                                </div>





                              </div>


                              <div className="row">
                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                  <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Fivth Semester</label>
                                  <input type="text" onChange={handleInputValue} value={formData.FivethSemesterPer} className="form-control" id="inputEmail" name='FivethSemesterPer' />

                                </div>
                                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                  <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                  <select name="FivethSemesterSession" onChange={handleInputValue} value={formData.FivethSemesterSession} className="form-control" id="" >
                                    <option value=''>Select The Value</option>
                                    <option selected value="Jan" >Jan</option>
                                    <option value="Apr">Apr</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Oct">Oct</option>
                                  </select>
                                </div>


                              </div>
                              <div className="row">

                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                  <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                  <select name="FivethSemesterMonth" onChange={handleInputValue} value={formData.FivethSemesterMonth} className="form-control" id="" >

                                    <option value=''>Select The Value</option>
                                    <option selected value='1997'>1997</option>

                                    <option value='1998'>1998</option>
                                    <option value='1999'>1999</option>
                                    <option value='2000'>2000</option>
                                    <option value='2001'>2001</option>
                                    <option value='2002'>2002</option>
                                    <option value='2003'>2003</option>
                                    <option value='2004'>2004</option>
                                    <option value='2005'>2005</option>
                                    <option value='2006'>2006</option>
                                    <option value='2007'>2007</option>
                                    <option value='2008'>2008</option>
                                    <option value='2009'>2009</option>
                                    <option value='2010' > 2010</option>




                                    <option value='2011'>2011</option>
                                    <option value='2012'>2012</option>
                                    <option value='2013'>2013</option>
                                    <option value='2014'> 2014</option>
                                    <option value='2015'>2015</option>
                                    <option value='2016'>2016</option>
                                    <option value='2017' >2017</option>
                                    <option value='2018' >2018</option>
                                    <option value='2019'>2019</option>
                                    <option value='2020'>2020</option>
                                    <option value='2021' >2021</option>

                                    <option value='2022'>2022</option>
                                    <option value='2023'>2023</option>
                                    <option value='2024' >2024</option>

                                    <option value='2025'>2025</option>
                                    <option value='2026' >2026</option>

                                    <option value='2027'>2027</option>
                                    <option value='2028'>2028</option>
                                    <option value='2029' >2029</option>
                                  </select>
                                </div>





                              </div>

                              <div className="row">
                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                  <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Six Semester</label>
                                  <input type="text" onChange={handleInputValue} value={formData.SixSemesterPer} className="form-control" id="inputEmail" name='SixSemesterPer' />

                                </div>
                                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                  <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                  <select name="SixSemesterSession" onChange={handleInputValue} value={formData.SixSemesterSession} className="form-control" id="" >
                                    <option value=''>Select The Value</option>
                                    <option selected value="Jan" >Jan</option>
                                    <option value="Apr">Apr</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Oct">Oct</option>
                                  </select>
                                </div>


                              </div>
                              <div className="row">

                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                  <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                  <select name="SixSemesterMonth" onChange={handleInputValue} value={formData.SixSemesterMonth} className="form-control" id="" >

                                    <option value=''>Select The Value</option>
                                    <option selected value='1997'>1997</option>

                                    <option value='1998'>1998</option>
                                    <option value='1999'>1999</option>
                                    <option value='2000'>2000</option>
                                    <option value='2001'>2001</option>
                                    <option value='2002'>2002</option>
                                    <option value='2003'>2003</option>
                                    <option value='2004'>2004</option>
                                    <option value='2005'>2005</option>
                                    <option value='2006'>2006</option>
                                    <option value='2007'>2007</option>
                                    <option value='2008'>2008</option>
                                    <option value='2009'>2009</option>
                                    <option value='2010' > 2010</option>




                                    <option value='2011'>2011</option>
                                    <option value='2012'>2012</option>
                                    <option value='2013'>2013</option>
                                    <option value='2014'> 2014</option>
                                    <option value='2015'>2015</option>
                                    <option value='2016'>2016</option>
                                    <option value='2017' >2017</option>
                                    <option value='2018' >2018</option>
                                    <option value='2019'>2019</option>
                                    <option value='2020'>2020</option>
                                    <option value='2021' >2021</option>

                                    <option value='2022'>2022</option>
                                    <option value='2023'>2023</option>
                                    <option value='2024' >2024</option>

                                    <option value='2025'>2025</option>
                                    <option value='2026' >2026</option>

                                    <option value='2027'>2027</option>
                                    <option value='2028'>2028</option>
                                    <option value='2029' >2029</option>
                                  </select>
                                </div>





                              </div>




                              <div className="row">
                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                  <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Seventh Semester</label>
                                  <input type="text" onChange={handleInputValue} value={formData.SeventhSemesterPer} className="form-control" id="inputEmail" name='SeventhSemesterPer' />

                                </div>
                                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                  <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                  <select name="SeventhSemesterSession" onChange={handleInputValue} value={formData.SeventhSemesterSession} className="form-control" id="" >
                                    <option value=''>Select The Value</option>
                                    <option selected value="Jan" >Jan</option>
                                    <option value="Apr">Apr</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Oct">Oct</option>
                                  </select>
                                </div>


                              </div>
                              <div className="row">

                                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                  <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                  <select name="SeventhSemesterMonth" onChange={handleInputValue} value={formData.SeventhSemesterMonth} className="form-control" id="" >

                                    <option value=''>Select The Value</option>
                                    <option selected value='1997'>1997</option>

                                    <option value='1998'>1998</option>
                                    <option value='1999'>1999</option>
                                    <option value='2000'>2000</option>
                                    <option value='2001'>2001</option>
                                    <option value='2002'>2002</option>
                                    <option value='2003'>2003</option>
                                    <option value='2004'>2004</option>
                                    <option value='2005'>2005</option>
                                    <option value='2006'>2006</option>
                                    <option value='2007'>2007</option>
                                    <option value='2008'>2008</option>
                                    <option value='2009'>2009</option>
                                    <option value='2010' > 2010</option>




                                    <option value='2011'>2011</option>
                                    <option value='2012'>2012</option>
                                    <option value='2013'>2013</option>
                                    <option value='2014'> 2014</option>
                                    <option value='2015'>2015</option>
                                    <option value='2016'>2016</option>
                                    <option value='2017' >2017</option>
                                    <option value='2018' >2018</option>
                                    <option value='2019'>2019</option>
                                    <option value='2020'>2020</option>
                                    <option value='2021' >2021</option>

                                    <option value='2022'>2022</option>
                                    <option value='2023'>2023</option>
                                    <option value='2024' >2024</option>

                                    <option value='2025'>2025</option>
                                    <option value='2026' >2026</option>

                                    <option value='2027'>2027</option>
                                    <option value='2028'>2028</option>
                                    <option value='2029' >2029</option>
                                  </select>
                                </div>





                              </div>







                            </>
                          ) : (formData.duration == "8" && formData.semester == "Semester") ?
                            (
                              <>
                                <div className="row">
                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                    <label htmlFor="inputEmail3" className="col-form-label">Percentage Of First Semester</label>
                                    <input type="text" onChange={handleInputValue} value={formData.FirstSemesterPer} className="form-control" id="inputEmail" name='FirstSemesterPer' />

                                  </div>
                                  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                    <select name="FirstSemesterSession" onChange={handleInputValue} value={formData.FirstSemesterSession} className="form-control" id="" >
                                      <option value=''>Select The Value</option>
                                      <option selected value="Jan" >Jan</option>
                                      <option value="Apr">Apr</option>
                                      <option value="Jul">Jul</option>
                                      <option value="Oct">Oct</option>
                                    </select>
                                  </div>


                                </div>
                                <div className="row">

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                    <select name="FirstSemesterMonth" onChange={handleInputValue} value={formData.FirstSemesterMonth} className="form-control" id="" >

                                      <option value=''>Select The Value</option>
                                      <option selected value='1997'>1997</option>

                                      <option value='1998'>1998</option>
                                      <option value='1999'>1999</option>
                                      <option value='2000'>2000</option>
                                      <option value='2001'>2001</option>
                                      <option value='2002'>2002</option>
                                      <option value='2003'>2003</option>
                                      <option value='2004'>2004</option>
                                      <option value='2005'>2005</option>
                                      <option value='2006'>2006</option>
                                      <option value='2007'>2007</option>
                                      <option value='2008'>2008</option>
                                      <option value='2009'>2009</option>
                                      <option value='2010' > 2010</option>




                                      <option value='2011'>2011</option>
                                      <option value='2012'>2012</option>
                                      <option value='2013'>2013</option>
                                      <option value='2014'> 2014</option>
                                      <option value='2015'>2015</option>
                                      <option value='2016'>2016</option>
                                      <option value='2017' >2017</option>
                                      <option value='2018' >2018</option>
                                      <option value='2019'>2019</option>
                                      <option value='2020'>2020</option>
                                      <option value='2021' >2021</option>

                                      <option value='2022'>2022</option>
                                      <option value='2023'>2023</option>
                                      <option value='2024' >2024</option>

                                      <option value='2025'>2025</option>
                                      <option value='2026' >2026</option>

                                      <option value='2027'>2027</option>
                                      <option value='2028'>2028</option>
                                      <option value='2029' >2029</option>
                                    </select>
                                  </div>





                                </div>


                                <div className="row">
                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                    <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Second Semester</label>
                                    <input type="text" onChange={handleInputValue} value={formData.SecondSemesterPer} className="form-control" id="inputEmail" name='SecondSemesterPer' />

                                  </div>
                                  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                    <select name="SecondSemesterSession" onChange={handleInputValue} value={formData.SecondSemesterSession} className="form-control" id="" >
                                      <option value=''>Select The Value</option>
                                      <option selected value="Jan" >Jan</option>
                                      <option value="Apr">Apr</option>
                                      <option value="Jul">Jul</option>
                                      <option value="Oct">Oct</option>
                                    </select>
                                  </div>


                                </div>
                                <div className="row">

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                    <select name="SecondSemesterMonth" onChange={handleInputValue} value={formData.SecondSemesterMonth} className="form-control" id="" >

                                      <option value=''>Select The Value</option>
                                      <option selected value='1997'>1997</option>

                                      <option value='1998'>1998</option>
                                      <option value='1999'>1999</option>
                                      <option value='2000'>2000</option>
                                      <option value='2001'>2001</option>
                                      <option value='2002'>2002</option>
                                      <option value='2003'>2003</option>
                                      <option value='2004'>2004</option>
                                      <option value='2005'>2005</option>
                                      <option value='2006'>2006</option>
                                      <option value='2007'>2007</option>
                                      <option value='2008'>2008</option>
                                      <option value='2009'>2009</option>
                                      <option value='2010' > 2010</option>




                                      <option value='2011'>2011</option>
                                      <option value='2012'>2012</option>
                                      <option value='2013'>2013</option>
                                      <option value='2014'> 2014</option>
                                      <option value='2015'>2015</option>
                                      <option value='2016'>2016</option>
                                      <option value='2017' >2017</option>
                                      <option value='2018' >2018</option>
                                      <option value='2019'>2019</option>
                                      <option value='2020'>2020</option>
                                      <option value='2021' >2021</option>

                                      <option value='2022'>2022</option>
                                      <option value='2023'>2023</option>
                                      <option value='2024' >2024</option>

                                      <option value='2025'>2025</option>
                                      <option value='2026' >2026</option>

                                      <option value='2027'>2027</option>
                                      <option value='2028'>2028</option>
                                      <option value='2029' >2029</option>
                                    </select>
                                  </div>





                                </div>



                                <div className="row">
                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                    <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Third Semester</label>
                                    <input type="text" onChange={handleInputValue} value={formData.ThirdSemesterPer} className="form-control" id="inputEmail" name='ThirdSemesterPer' />

                                  </div>
                                  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                    <select name="ThirdSemesterSession" onChange={handleInputValue} value={formData.ThirdSemesterSession} className="form-control" id="" >
                                      <option value=''>Select The Value</option>
                                      <option selected value="Jan" >Jan</option>
                                      <option value="Apr">Apr</option>
                                      <option value="Jul">Jul</option>
                                      <option value="Oct">Oct</option>
                                    </select>
                                  </div>


                                </div>


                                <div className="row">

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                    <select name="ThirdSemesterMonth" onChange={handleInputValue} value={formData.ThirdSemesterMonth} className="form-control" id="" >

                                      <option value=''>Select The Value</option>
                                      <option selected value='1997'>1997</option>

                                      <option value='1998'>1998</option>
                                      <option value='1999'>1999</option>
                                      <option value='2000'>2000</option>
                                      <option value='2001'>2001</option>
                                      <option value='2002'>2002</option>
                                      <option value='2003'>2003</option>
                                      <option value='2004'>2004</option>
                                      <option value='2005'>2005</option>
                                      <option value='2006'>2006</option>
                                      <option value='2007'>2007</option>
                                      <option value='2008'>2008</option>
                                      <option value='2009'>2009</option>
                                      <option value='2010' > 2010</option>




                                      <option value='2011'>2011</option>
                                      <option value='2012'>2012</option>
                                      <option value='2013'>2013</option>
                                      <option value='2014'> 2014</option>
                                      <option value='2015'>2015</option>
                                      <option value='2016'>2016</option>
                                      <option value='2017' >2017</option>
                                      <option value='2018' >2018</option>
                                      <option value='2019'>2019</option>
                                      <option value='2020'>2020</option>
                                      <option value='2021' >2021</option>

                                      <option value='2022'>2022</option>
                                      <option value='2023'>2023</option>
                                      <option value='2024' >2024</option>

                                      <option value='2025'>2025</option>
                                      <option value='2026' >2026</option>

                                      <option value='2027'>2027</option>
                                      <option value='2028'>2028</option>
                                      <option value='2029' >2029</option>
                                    </select>
                                  </div>





                                </div>


                                <div className="row">
                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                    <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Fourth Semester</label>
                                    <input type="text" onChange={handleInputValue} value={formData.FourthSemesterPer} className="form-control" id="inputEmail" name='FourthSemesterPer' />

                                  </div>
                                  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                    <select name="FourthSemesterSession" onChange={handleInputValue} value={formData.FourthSemesterSession} className="form-control" id="" >
                                      <option value=''>Select The Value</option>
                                      <option selected value="Jan" >Jan</option>
                                      <option value="Apr">Apr</option>
                                      <option value="Jul">Jul</option>
                                      <option value="Oct">Oct</option>
                                    </select>
                                  </div>


                                </div>
                                <div className="row">

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                    <select name="FourthSemesterMonth" onChange={handleInputValue} value={formData.FourthSemesterMonth} className="form-control" id="" >

                                      <option value=''>Select The Value</option>
                                      <option selected value='1997'>1997</option>

                                      <option value='1998'>1998</option>
                                      <option value='1999'>1999</option>
                                      <option value='2000'>2000</option>
                                      <option value='2001'>2001</option>
                                      <option value='2002'>2002</option>
                                      <option value='2003'>2003</option>
                                      <option value='2004'>2004</option>
                                      <option value='2005'>2005</option>
                                      <option value='2006'>2006</option>
                                      <option value='2007'>2007</option>
                                      <option value='2008'>2008</option>
                                      <option value='2009'>2009</option>
                                      <option value='2010' > 2010</option>




                                      <option value='2011'>2011</option>
                                      <option value='2012'>2012</option>
                                      <option value='2013'>2013</option>
                                      <option value='2014'> 2014</option>
                                      <option value='2015'>2015</option>
                                      <option value='2016'>2016</option>
                                      <option value='2017' >2017</option>
                                      <option value='2018' >2018</option>
                                      <option value='2019'>2019</option>
                                      <option value='2020'>2020</option>
                                      <option value='2021' >2021</option>

                                      <option value='2022'>2022</option>
                                      <option value='2023'>2023</option>
                                      <option value='2024' >2024</option>

                                      <option value='2025'>2025</option>
                                      <option value='2026' >2026</option>

                                      <option value='2027'>2027</option>
                                      <option value='2028'>2028</option>
                                      <option value='2029' >2029</option>
                                    </select>
                                  </div>





                                </div>


                                <div className="row">
                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                    <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Fivth Semester</label>
                                    <input type="text" onChange={handleInputValue} value={formData.FivethSemesterPer} className="form-control" id="inputEmail" name='FivethSemesterPer' />

                                  </div>
                                  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                    <select name="FivethSemesterSession" onChange={handleInputValue} value={formData.FivethSemesterSession} className="form-control" id="" >
                                      <option value=''>Select The Value</option>
                                      <option selected value="Jan" >Jan</option>
                                      <option value="Apr">Apr</option>
                                      <option value="Jul">Jul</option>
                                      <option value="Oct">Oct</option>
                                    </select>
                                  </div>


                                </div>
                                <div className="row">

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                    <select name="FivethSemesterMonth" onChange={handleInputValue} value={formData.FivethSemesterMonth} className="form-control" id="" >

                                      <option value=''>Select The Value</option>
                                      <option selected value='1997'>1997</option>

                                      <option value='1998'>1998</option>
                                      <option value='1999'>1999</option>
                                      <option value='2000'>2000</option>
                                      <option value='2001'>2001</option>
                                      <option value='2002'>2002</option>
                                      <option value='2003'>2003</option>
                                      <option value='2004'>2004</option>
                                      <option value='2005'>2005</option>
                                      <option value='2006'>2006</option>
                                      <option value='2007'>2007</option>
                                      <option value='2008'>2008</option>
                                      <option value='2009'>2009</option>
                                      <option value='2010' > 2010</option>




                                      <option value='2011'>2011</option>
                                      <option value='2012'>2012</option>
                                      <option value='2013'>2013</option>
                                      <option value='2014'> 2014</option>
                                      <option value='2015'>2015</option>
                                      <option value='2016'>2016</option>
                                      <option value='2017' >2017</option>
                                      <option value='2018' >2018</option>
                                      <option value='2019'>2019</option>
                                      <option value='2020'>2020</option>
                                      <option value='2021' >2021</option>

                                      <option value='2022'>2022</option>
                                      <option value='2023'>2023</option>
                                      <option value='2024' >2024</option>

                                      <option value='2025'>2025</option>
                                      <option value='2026' >2026</option>

                                      <option value='2027'>2027</option>
                                      <option value='2028'>2028</option>
                                      <option value='2029' >2029</option>
                                    </select>
                                  </div>





                                </div>

                                <div className="row">
                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                    <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Six Semester</label>
                                    <input type="text" onChange={handleInputValue} value={formData.SixSemesterPer} className="form-control" id="inputEmail" name='SixSemesterPer' />

                                  </div>
                                  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                    <select name="SixSemesterSession" onChange={handleInputValue} value={formData.SixSemesterSession} className="form-control" id="" >
                                      <option value=''>Select The Value</option>
                                      <option selected value="Jan" >Jan</option>
                                      <option value="Apr">Apr</option>
                                      <option value="Jul">Jul</option>
                                      <option value="Oct">Oct</option>
                                    </select>
                                  </div>


                                </div>
                                <div className="row">

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                    <select name="SixSemesterMonth" onChange={handleInputValue} value={formData.SixSemesterMonth} className="form-control" id="" >

                                      <option value=''>Select The Value</option>
                                      <option selected value='1997'>1997</option>

                                      <option value='1998'>1998</option>
                                      <option value='1999'>1999</option>
                                      <option value='2000'>2000</option>
                                      <option value='2001'>2001</option>
                                      <option value='2002'>2002</option>
                                      <option value='2003'>2003</option>
                                      <option value='2004'>2004</option>
                                      <option value='2005'>2005</option>
                                      <option value='2006'>2006</option>
                                      <option value='2007'>2007</option>
                                      <option value='2008'>2008</option>
                                      <option value='2009'>2009</option>
                                      <option value='2010' > 2010</option>




                                      <option value='2011'>2011</option>
                                      <option value='2012'>2012</option>
                                      <option value='2013'>2013</option>
                                      <option value='2014'> 2014</option>
                                      <option value='2015'>2015</option>
                                      <option value='2016'>2016</option>
                                      <option value='2017' >2017</option>
                                      <option value='2018' >2018</option>
                                      <option value='2019'>2019</option>
                                      <option value='2020'>2020</option>
                                      <option value='2021' >2021</option>

                                      <option value='2022'>2022</option>
                                      <option value='2023'>2023</option>
                                      <option value='2024' >2024</option>

                                      <option value='2025'>2025</option>
                                      <option value='2026' >2026</option>

                                      <option value='2027'>2027</option>
                                      <option value='2028'>2028</option>
                                      <option value='2029' >2029</option>
                                    </select>
                                  </div>





                                </div>




                                <div className="row">
                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                    <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Seventh Semester</label>
                                    <input type="text" onChange={handleInputValue} value={formData.SeventhSemesterPer} className="form-control" id="inputEmail" name='SeventhSemesterPer' />

                                  </div>
                                  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                    <select name="SeventhSemesterSession" onChange={handleInputValue} value={formData.SeventhSemesterSession} className="form-control" id="" >
                                      <option value=''>Select The Value</option>
                                      <option selected value="Jan" >Jan</option>
                                      <option value="Apr">Apr</option>
                                      <option value="Jul">Jul</option>
                                      <option value="Oct">Oct</option>
                                    </select>
                                  </div>


                                </div>
                                <div className="row">

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                    <select name="SeventhSemesterMonth" onChange={handleInputValue} value={formData.SeventhSemesterMonth} className="form-control" id="" >

                                      <option value=''>Select The Value</option>
                                      <option selected value='1997'>1997</option>

                                      <option value='1998'>1998</option>
                                      <option value='1999'>1999</option>
                                      <option value='2000'>2000</option>
                                      <option value='2001'>2001</option>
                                      <option value='2002'>2002</option>
                                      <option value='2003'>2003</option>
                                      <option value='2004'>2004</option>
                                      <option value='2005'>2005</option>
                                      <option value='2006'>2006</option>
                                      <option value='2007'>2007</option>
                                      <option value='2008'>2008</option>
                                      <option value='2009'>2009</option>
                                      <option value='2010' > 2010</option>




                                      <option value='2011'>2011</option>
                                      <option value='2012'>2012</option>
                                      <option value='2013'>2013</option>
                                      <option value='2014'> 2014</option>
                                      <option value='2015'>2015</option>
                                      <option value='2016'>2016</option>
                                      <option value='2017' >2017</option>
                                      <option value='2018' >2018</option>
                                      <option value='2019'>2019</option>
                                      <option value='2020'>2020</option>
                                      <option value='2021' >2021</option>

                                      <option value='2022'>2022</option>
                                      <option value='2023'>2023</option>
                                      <option value='2024' >2024</option>

                                      <option value='2025'>2025</option>
                                      <option value='2026' >2026</option>

                                      <option value='2027'>2027</option>
                                      <option value='2028'>2028</option>
                                      <option value='2029' >2029</option>
                                    </select>
                                  </div>





                                </div>



                                <div className="row">
                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                    <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Eight Semester</label>
                                    <input type="text" onChange={handleInputValue} value={formData.EightSemesterPer} className="form-control" id="inputEmail" name='EightSemesterPer' />

                                  </div>
                                  <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                    <select name="EightSemesterSession" onChange={handleInputValue} value={formData.EightSemesterSession} className="form-control" id="" >
                                      <option value=''>Select The Value</option>
                                      <option selected value="Jan" >Jan</option>
                                      <option value="Apr">Apr</option>
                                      <option value="Jul">Jul</option>
                                      <option value="Oct">Oct</option>
                                    </select>
                                  </div>


                                </div>
                                <div className="row">

                                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                    <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                    <select name="EightSemesterMonth" onChange={handleInputValue} value={formData.EightSemesterMonth} className="form-control" id="" >

                                      <option value=''>Select The Value</option>
                                      <option selected value='1997'>1997</option>

                                      <option value='1998'>1998</option>
                                      <option value='1999'>1999</option>
                                      <option value='2000'>2000</option>
                                      <option value='2001'>2001</option>
                                      <option value='2002'>2002</option>
                                      <option value='2003'>2003</option>
                                      <option value='2004'>2004</option>
                                      <option value='2005'>2005</option>
                                      <option value='2006'>2006</option>
                                      <option value='2007'>2007</option>
                                      <option value='2008'>2008</option>
                                      <option value='2009'>2009</option>
                                      <option value='2010' > 2010</option>




                                      <option value='2011'>2011</option>
                                      <option value='2012'>2012</option>
                                      <option value='2013'>2013</option>
                                      <option value='2014'> 2014</option>
                                      <option value='2015'>2015</option>
                                      <option value='2016'>2016</option>
                                      <option value='2017' >2017</option>
                                      <option value='2018' >2018</option>
                                      <option value='2019'>2019</option>
                                      <option value='2020'>2020</option>
                                      <option value='2021' >2021</option>

                                      <option value='2022'>2022</option>
                                      <option value='2023'>2023</option>
                                      <option value='2024' >2024</option>

                                      <option value='2025'>2025</option>
                                      <option value='2026' >2026</option>

                                      <option value='2027'>2027</option>
                                      <option value='2028'>2028</option>
                                      <option value='2029' >2029</option>
                                    </select>
                                  </div>





                                </div>



                              </>
                            ) : (formData.duration == "1" && formData.semester == "Year") ?
                              (
                                <>
                                  <div className="row">
                                    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                      <label htmlFor="inputEmail3" className="col-form-label">Percentage Of First Year</label>
                                      <input type="text" onChange={handleInputValue} value={formData.YearFirstPer} className="form-control" id="inputEmail" name='YearFirstPer' />

                                    </div>
                                    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                      <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                      <select name="SessionFirstYear" onChange={handleInputValue} value={formData.SessionFirstYear} className="form-control" id="" >
                                        <option value=''>Select The Value</option>
                                        <option selected value="Jan" >Jan</option>
                                        <option value="Apr">Apr</option>
                                        <option value="Jul">Jul</option>
                                        <option value="Oct">Oct</option>
                                      </select>
                                    </div>


                                  </div>
                                  <div className="row">

                                    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                      <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                      <select name="YearFirstYear" onChange={handleInputValue} value={formData.YearFirstYear} className="form-control" id="" >

                                        <option value=''>Select The Value</option>
                                        <option selected value='1997'>1997</option>

                                        <option value='1998'>1998</option>
                                        <option value='1999'>1999</option>
                                        <option value='2000'>2000</option>
                                        <option value='2001'>2001</option>
                                        <option value='2002'>2002</option>
                                        <option value='2003'>2003</option>
                                        <option value='2004'>2004</option>
                                        <option value='2005'>2005</option>
                                        <option value='2006'>2006</option>
                                        <option value='2007'>2007</option>
                                        <option value='2008'>2008</option>
                                        <option value='2009'>2009</option>
                                        <option value='2010' > 2010</option>




                                        <option value='2011'>2011</option>
                                        <option value='2012'>2012</option>
                                        <option value='2013'>2013</option>
                                        <option value='2014'> 2014</option>
                                        <option value='2015'>2015</option>
                                        <option value='2016'>2016</option>
                                        <option value='2017' >2017</option>
                                        <option value='2018' >2018</option>
                                        <option value='2019'>2019</option>
                                        <option value='2020'>2020</option>
                                        <option value='2021' >2021</option>

                                        <option value='2022'>2022</option>
                                        <option value='2023'>2023</option>
                                        <option value='2024' >2024</option>

                                        <option value='2025'>2025</option>
                                        <option value='2026' >2026</option>

                                        <option value='2027'>2027</option>
                                        <option value='2028'>2028</option>
                                        <option value='2029' >2029</option>
                                      </select>
                                    </div>





                                  </div>

                                </>
                              ) : (formData.duration == "2" && formData.semester == "Year") ?
                                (
                                  <>
                                    <div className="row">
                                      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                        <label htmlFor="inputEmail3" className="col-form-label">Percentage Of First Year</label>
                                        <input type="text" onChange={handleInputValue} value={formData.YearFirstPer} className="form-control" id="inputEmail" name='YearFirstPer' />

                                      </div>
                                      <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                        <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                        <select name="SessionFirstYear" onChange={handleInputValue} value={formData.SessionFirstYear} className="form-control" id="" >
                                          <option value=''>Select The Value</option>
                                          <option selected value="Jan" >Jan</option>
                                          <option value="Apr">Apr</option>
                                          <option value="Jul">Jul</option>
                                          <option value="Oct">Oct</option>
                                        </select>
                                      </div>


                                    </div>
                                    <div className="row">

                                      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                        <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                        <select name="YearFirstYear" onChange={handleInputValue} value={formData.YearFirstYear} className="form-control" id="" >

                                          <option value=''>Select The Value</option>
                                          <option selected value='1997'>1997</option>

                                          <option value='1998'>1998</option>
                                          <option value='1999'>1999</option>
                                          <option value='2000'>2000</option>
                                          <option value='2001'>2001</option>
                                          <option value='2002'>2002</option>
                                          <option value='2003'>2003</option>
                                          <option value='2004'>2004</option>
                                          <option value='2005'>2005</option>
                                          <option value='2006'>2006</option>
                                          <option value='2007'>2007</option>
                                          <option value='2008'>2008</option>
                                          <option value='2009'>2009</option>
                                          <option value='2010' > 2010</option>




                                          <option value='2011'>2011</option>
                                          <option value='2012'>2012</option>
                                          <option value='2013'>2013</option>
                                          <option value='2014'> 2014</option>
                                          <option value='2015'>2015</option>
                                          <option value='2016'>2016</option>
                                          <option value='2017' >2017</option>
                                          <option value='2018' >2018</option>
                                          <option value='2019'>2019</option>
                                          <option value='2020'>2020</option>
                                          <option value='2021' >2021</option>

                                          <option value='2022'>2022</option>
                                          <option value='2023'>2023</option>
                                          <option value='2024' >2024</option>

                                          <option value='2025'>2025</option>
                                          <option value='2026' >2026</option>

                                          <option value='2027'>2027</option>
                                          <option value='2028'>2028</option>
                                          <option value='2029' >2029</option>
                                        </select>
                                      </div>





                                    </div>


                                    <div className="row">
                                      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                        <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Second Year</label>
                                        <input type="text" onChange={handleInputValue} value={formData.YearSecondPer} className="form-control" id="inputEmail" name='YearSecondPer' />

                                      </div>
                                      <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                        <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                        <select name="SessionSecondYear" onChange={handleInputValue} value={formData.SessionSecondYear} className="form-control" id="" >
                                          <option value=''>Select The Value</option>
                                          <option selected value="Jan" >Jan</option>
                                          <option value="Apr">Apr</option>
                                          <option value="Jul">Jul</option>
                                          <option value="Oct">Oct</option>
                                        </select>
                                      </div>


                                    </div>
                                    <div className="row">

                                      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                        <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                        <select name="YearSecondYear" onChange={handleInputValue} value={formData.YearSecondYear} className="form-control" id="" >

                                          <option value=''>Select The Value</option>
                                          <option selected value='1997'>1997</option>

                                          <option value='1998'>1998</option>
                                          <option value='1999'>1999</option>
                                          <option value='2000'>2000</option>
                                          <option value='2001'>2001</option>
                                          <option value='2002'>2002</option>
                                          <option value='2003'>2003</option>
                                          <option value='2004'>2004</option>
                                          <option value='2005'>2005</option>
                                          <option value='2006'>2006</option>
                                          <option value='2007'>2007</option>
                                          <option value='2008'>2008</option>
                                          <option value='2009'>2009</option>
                                          <option value='2010' > 2010</option>




                                          <option value='2011'>2011</option>
                                          <option value='2012'>2012</option>
                                          <option value='2013'>2013</option>
                                          <option value='2014'> 2014</option>
                                          <option value='2015'>2015</option>
                                          <option value='2016'>2016</option>
                                          <option value='2017' >2017</option>
                                          <option value='2018' >2018</option>
                                          <option value='2019'>2019</option>
                                          <option value='2020'>2020</option>
                                          <option value='2021' >2021</option>

                                          <option value='2022'>2022</option>
                                          <option value='2023'>2023</option>
                                          <option value='2024' >2024</option>

                                          <option value='2025'>2025</option>
                                          <option value='2026' >2026</option>

                                          <option value='2027'>2027</option>
                                          <option value='2028'>2028</option>
                                          <option value='2029' >2029</option>
                                        </select>
                                      </div>





                                    </div>




                                  </>
                                ) : (formData.duration == "3" && formData.semester == "Year") ?
                                  (
                                    <>
                                      <div className="row">
                                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                          <label htmlFor="inputEmail3" className="col-form-label">Percentage Of First Year</label>
                                          <input type="text" onChange={handleInputValue} value={formData.YearFirstPer} className="form-control" id="inputEmail" name='YearFirstPer' />

                                        </div>
                                        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                          <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                          <select name="SessionFirstYear" onChange={handleInputValue} value={formData.SessionFirstYear} className="form-control" id="" >
                                            <option value=''>Select The Value</option>
                                            <option selected value="Jan" >Jan</option>
                                            <option value="Apr">Apr</option>
                                            <option value="Jul">Jul</option>
                                            <option value="Oct">Oct</option>
                                          </select>
                                        </div>


                                      </div>
                                      <div className="row">

                                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                          <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                          <select name="YearFirstYear" onChange={handleInputValue} value={formData.YearFirstYear} className="form-control" id="" >

                                            <option value=''>Select The Value</option>
                                            <option selected value='1997'>1997</option>

                                            <option value='1998'>1998</option>
                                            <option value='1999'>1999</option>
                                            <option value='2000'>2000</option>
                                            <option value='2001'>2001</option>
                                            <option value='2002'>2002</option>
                                            <option value='2003'>2003</option>
                                            <option value='2004'>2004</option>
                                            <option value='2005'>2005</option>
                                            <option value='2006'>2006</option>
                                            <option value='2007'>2007</option>
                                            <option value='2008'>2008</option>
                                            <option value='2009'>2009</option>
                                            <option value='2010' > 2010</option>




                                            <option value='2011'>2011</option>
                                            <option value='2012'>2012</option>
                                            <option value='2013'>2013</option>
                                            <option value='2014'> 2014</option>
                                            <option value='2015'>2015</option>
                                            <option value='2016'>2016</option>
                                            <option value='2017' >2017</option>
                                            <option value='2018' >2018</option>
                                            <option value='2019'>2019</option>
                                            <option value='2020'>2020</option>
                                            <option value='2021' >2021</option>

                                            <option value='2022'>2022</option>
                                            <option value='2023'>2023</option>
                                            <option value='2024' >2024</option>

                                            <option value='2025'>2025</option>
                                            <option value='2026' >2026</option>

                                            <option value='2027'>2027</option>
                                            <option value='2028'>2028</option>
                                            <option value='2029' >2029</option>
                                          </select>
                                        </div>





                                      </div>


                                      <div className="row">
                                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                          <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Second Year</label>
                                          <input type="text" onChange={handleInputValue} value={formData.YearSecondPer} className="form-control" id="inputEmail" name='YearSecondPer' />

                                        </div>
                                        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                          <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                          <select name="SessionSecondYear" onChange={handleInputValue} value={formData.SessionSecondYear} className="form-control" id="" >
                                            <option value=''>Select The Value</option>
                                            <option selected value="Jan" >Jan</option>
                                            <option value="Apr">Apr</option>
                                            <option value="Jul">Jul</option>
                                            <option value="Oct">Oct</option>
                                          </select>
                                        </div>


                                      </div>
                                      <div className="row">

                                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                          <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                          <select name="YearSecondYear" onChange={handleInputValue} value={formData.YearSecondYear} className="form-control" id="" >

                                            <option value=''>Select The Value</option>
                                            <option selected value='1997'>1997</option>

                                            <option value='1998'>1998</option>
                                            <option value='1999'>1999</option>
                                            <option value='2000'>2000</option>
                                            <option value='2001'>2001</option>
                                            <option value='2002'>2002</option>
                                            <option value='2003'>2003</option>
                                            <option value='2004'>2004</option>
                                            <option value='2005'>2005</option>
                                            <option value='2006'>2006</option>
                                            <option value='2007'>2007</option>
                                            <option value='2008'>2008</option>
                                            <option value='2009'>2009</option>
                                            <option value='2010' > 2010</option>




                                            <option value='2011'>2011</option>
                                            <option value='2012'>2012</option>
                                            <option value='2013'>2013</option>
                                            <option value='2014'> 2014</option>
                                            <option value='2015'>2015</option>
                                            <option value='2016'>2016</option>
                                            <option value='2017' >2017</option>
                                            <option value='2018' >2018</option>
                                            <option value='2019'>2019</option>
                                            <option value='2020'>2020</option>
                                            <option value='2021' >2021</option>

                                            <option value='2022'>2022</option>
                                            <option value='2023'>2023</option>
                                            <option value='2024' >2024</option>

                                            <option value='2025'>2025</option>
                                            <option value='2026' >2026</option>

                                            <option value='2027'>2027</option>
                                            <option value='2028'>2028</option>
                                            <option value='2029' >2029</option>
                                          </select>
                                        </div>





                                      </div>




                                      <div className="row">
                                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                          <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Third Year</label>
                                          <input type="text" onChange={handleInputValue} value={formData.YearThirdPer} className="form-control" id="inputEmail" name='YearThirdPer' />

                                        </div>
                                        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                          <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                          <select name="SessionThirdYear" onChange={handleInputValue} value={formData.SessionThirdYear} className="form-control" id="" >
                                            <option value=''>Select The Value</option>
                                            <option selected value="Jan" >Jan</option>
                                            <option value="Apr">Apr</option>
                                            <option value="Jul">Jul</option>
                                            <option value="Oct">Oct</option>
                                          </select>
                                        </div>


                                      </div>
                                      <div className="row">

                                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                          <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                          <select name="YearThirdYear" onChange={handleInputValue} value={formData.YearThirdYear} className="form-control" id="" >

                                            <option value=''>Select The Value</option>
                                            <option selected value='1997'>1997</option>

                                            <option value='1998'>1998</option>
                                            <option value='1999'>1999</option>
                                            <option value='2000'>2000</option>
                                            <option value='2001'>2001</option>
                                            <option value='2002'>2002</option>
                                            <option value='2003'>2003</option>
                                            <option value='2004'>2004</option>
                                            <option value='2005'>2005</option>
                                            <option value='2006'>2006</option>
                                            <option value='2007'>2007</option>
                                            <option value='2008'>2008</option>
                                            <option value='2009'>2009</option>
                                            <option value='2010' > 2010</option>




                                            <option value='2011'>2011</option>
                                            <option value='2012'>2012</option>
                                            <option value='2013'>2013</option>
                                            <option value='2014'> 2014</option>
                                            <option value='2015'>2015</option>
                                            <option value='2016'>2016</option>
                                            <option value='2017' >2017</option>
                                            <option value='2018' >2018</option>
                                            <option value='2019'>2019</option>
                                            <option value='2020'>2020</option>
                                            <option value='2021' >2021</option>

                                            <option value='2022'>2022</option>
                                            <option value='2023'>2023</option>
                                            <option value='2024' >2024</option>

                                            <option value='2025'>2025</option>
                                            <option value='2026' >2026</option>

                                            <option value='2027'>2027</option>
                                            <option value='2028'>2028</option>
                                            <option value='2029' >2029</option>
                                          </select>
                                        </div>





                                      </div>




                                    </>
                                  ) : (formData.duration == "4" && formData.semester == "Year") ?
                                    (
                                      <>
                                        <div className="row">
                                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                            <label htmlFor="inputEmail3" className="col-form-label">Percentage Of First Year</label>
                                            <input type="text" onChange={handleInputValue} value={formData.YearSecondPer} className="form-control" id="inputEmail" name='YearSecondPer' />

                                          </div>
                                          <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                            <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                            <select name="SessionFirstYear" onChange={handleInputValue} value={formData.SessionFirstYear} className="form-control" id="" >
                                              <option value=''>Select The Value</option>
                                              <option selected value="Jan" >Jan</option>
                                              <option value="Apr">Apr</option>
                                              <option value="Jul">Jul</option>
                                              <option value="Oct">Oct</option>
                                            </select>
                                          </div>


                                        </div>
                                        <div className="row">

                                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                            <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                            <select name="YearFirstYear" onChange={handleInputValue} value={formData.YearFirstYear} className="form-control" id="" >

                                              <option value=''>Select The Value</option>
                                              <option selected value='1997'>1997</option>

                                              <option value='1998'>1998</option>
                                              <option value='1999'>1999</option>
                                              <option value='2000'>2000</option>
                                              <option value='2001'>2001</option>
                                              <option value='2002'>2002</option>
                                              <option value='2003'>2003</option>
                                              <option value='2004'>2004</option>
                                              <option value='2005'>2005</option>
                                              <option value='2006'>2006</option>
                                              <option value='2007'>2007</option>
                                              <option value='2008'>2008</option>
                                              <option value='2009'>2009</option>
                                              <option value='2010' > 2010</option>




                                              <option value='2011'>2011</option>
                                              <option value='2012'>2012</option>
                                              <option value='2013'>2013</option>
                                              <option value='2014'> 2014</option>
                                              <option value='2015'>2015</option>
                                              <option value='2016'>2016</option>
                                              <option value='2017' >2017</option>
                                              <option value='2018' >2018</option>
                                              <option value='2019'>2019</option>
                                              <option value='2020'>2020</option>
                                              <option value='2021' >2021</option>

                                              <option value='2022'>2022</option>
                                              <option value='2023'>2023</option>
                                              <option value='2024' >2024</option>

                                              <option value='2025'>2025</option>
                                              <option value='2026' >2026</option>

                                              <option value='2027'>2027</option>
                                              <option value='2028'>2028</option>
                                              <option value='2029' >2029</option>
                                            </select>
                                          </div>





                                        </div>


                                        <div className="row">
                                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                            <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Second Year</label>
                                            <input type="text" onChange={handleInputValue} value={formData.YearSecondPer} className="form-control" id="inputEmail" name='YearSecondPer' />

                                          </div>
                                          <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                            <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                            <select name="SessionSecondYear" onChange={handleInputValue} value={formData.SessionSecondYear} className="form-control" id="" >
                                              <option value=''>Select The Value</option>
                                              <option selected value="Jan" >Jan</option>
                                              <option value="Apr">Apr</option>
                                              <option value="Jul">Jul</option>
                                              <option value="Oct">Oct</option>
                                            </select>
                                          </div>


                                        </div>
                                        <div className="row">

                                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                            <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                            <select name="YearSecondYear" onChange={handleInputValue} value={formData.YearSecondYear} className="form-control" id="" >

                                              <option value=''>Select The Value</option>
                                              <option selected value='1997'>1997</option>

                                              <option value='1998'>1998</option>
                                              <option value='1999'>1999</option>
                                              <option value='2000'>2000</option>
                                              <option value='2001'>2001</option>
                                              <option value='2002'>2002</option>
                                              <option value='2003'>2003</option>
                                              <option value='2004'>2004</option>
                                              <option value='2005'>2005</option>
                                              <option value='2006'>2006</option>
                                              <option value='2007'>2007</option>
                                              <option value='2008'>2008</option>
                                              <option value='2009'>2009</option>
                                              <option value='2010' > 2010</option>




                                              <option value='2011'>2011</option>
                                              <option value='2012'>2012</option>
                                              <option value='2013'>2013</option>
                                              <option value='2014'> 2014</option>
                                              <option value='2015'>2015</option>
                                              <option value='2016'>2016</option>
                                              <option value='2017' >2017</option>
                                              <option value='2018' >2018</option>
                                              <option value='2019'>2019</option>
                                              <option value='2020'>2020</option>
                                              <option value='2021' >2021</option>

                                              <option value='2022'>2022</option>
                                              <option value='2023'>2023</option>
                                              <option value='2024' >2024</option>

                                              <option value='2025'>2025</option>
                                              <option value='2026' >2026</option>

                                              <option value='2027'>2027</option>
                                              <option value='2028'>2028</option>
                                              <option value='2029' >2029</option>
                                            </select>
                                          </div>





                                        </div>




                                        <div className="row">
                                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                            <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Third Year</label>
                                            <input type="text" onChange={handleInputValue} value={formData.YearThirdPer} className="form-control" id="inputEmail" name='YearThirdPer' />

                                          </div>
                                          <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                            <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                            <select name="SessionThirdYear" onChange={handleInputValue} value={formData.SessionThirdYear} className="form-control" id="" >
                                              <option value=''>Select The Value</option>
                                              <option selected value="Jan" >Jan</option>
                                              <option value="Apr">Apr</option>
                                              <option value="Jul">Jul</option>
                                              <option value="Oct">Oct</option>
                                            </select>
                                          </div>


                                        </div>
                                        <div className="row">

                                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                            <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                            <select name="YearThirdYear" onChange={handleInputValue} value={formData.YearThirdYear} className="form-control" id="" >

                                            </select>
                                          </div>





                                        </div>



                                        <div className="row">
                                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                                            <label htmlFor="inputEmail3" className="col-form-label">Percentage Of Fourth Year</label>
                                            <input type="text" onChange={handleInputValue} value={formData.YearFourthPer} className="form-control" id="inputEmail" name='YearFourthPer' />

                                          </div>
                                          <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>

                                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                            <label htmlFor="inputEmail3" className="col-form-label">Select Session</label>
                                            <select name="SessionThirdYear" onChange={handleInputValue} value={formData.SessionFourthYear} className="form-control" id="" >
                                              <option value=''>Select The Value</option>
                                              <option selected value="Jan" >Jan</option>
                                              <option value="Apr">Apr</option>
                                              <option value="Jul">Jul</option>
                                              <option value="Oct">Oct</option>
                                            </select>
                                          </div>


                                        </div>
                                        <div className="row">

                                          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                                            <label htmlFor="inputEmail3" className="col-form-label">Select Year </label>
                                            <select name="YearThirdYear" onChange={handleInputValue} value={formData.YearFourthYear} className="form-control" id="" >

                                              <option value=''>Select The Value</option>
                                              <option selected value='1997'>1997</option>

                                              <option value='1998'>1998</option>
                                              <option value='1999'>1999</option>
                                              <option value='2000'>2000</option>
                                              <option value='2001'>2001</option>
                                              <option value='2002'>2002</option>
                                              <option value='2003'>2003</option>
                                              <option value='2004'>2004</option>
                                              <option value='2005'>2005</option>
                                              <option value='2006'>2006</option>
                                              <option value='2007'>2007</option>
                                              <option value='2008'>2008</option>
                                              <option value='2009'>2009</option>
                                              <option value='2010' > 2010</option>




                                              <option value='2011'>2011</option>
                                              <option value='2012'>2012</option>
                                              <option value='2013'>2013</option>
                                              <option value='2014'> 2014</option>
                                              <option value='2015'>2015</option>
                                              <option value='2016'>2016</option>
                                              <option value='2017' >2017</option>
                                              <option value='2018' >2018</option>
                                              <option value='2019'>2019</option>
                                              <option value='2020'>2020</option>
                                              <option value='2021' >2021</option>

                                              <option value='2022'>2022</option>
                                              <option value='2023'>2023</option>
                                              <option value='2024' >2024</option>

                                              <option value='2025'>2025</option>
                                              <option value='2026' >2026</option>

                                              <option value='2027'>2027</option>
                                              <option value='2028'>2028</option>
                                              <option value='2029' >2029</option>
                                            </select>
                                          </div>





                                        </div>



                                      </>
                                    ) : ''


          }







          <div className="row my-1">

            <div className="col-xxl-2 my-5 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xms-2">

              <button className="btn btn-primary" type="submit">Add</button>
            </div>
          </div>

        </form>
      </section>

    </main>
  </>
}



export default AddResult;