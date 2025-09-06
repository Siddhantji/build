import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Style } from './Style.css';
import { url } from '../utile/globarVariable';

const IdCard = () => {


  const navigator = useNavigate();

  const [formData, setFormData] = useState();

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setFormData(
      {
        ...formData, [name]: value
      }
    );
  }


  const [IdCardData, setIdCardData] = useState([]);


  const [username, setusername] = useState();
  const [name, setname] = useState();
  const [father, setfathername] = useState();
  const [course, setcourse] = useState();
  const [specialization, setspecialization] = useState();
  const [year, setYear] = useState();
  const [enrollment, setEnrollment] = useState();

  const [ImgUrl, setImgUrl] = useState();





  useEffect(() => {
    CheckLogin();

    getDetail();



  }, [username, ImgUrl])


  useEffect(() => {
    getDetail();

  }, [])

  const CheckLogin = async (e) => {
    const p = await axios.get(`${url}/dashboard`, { withCredentials: true });






    if (p.data.Status == false) {
      navigator("/");
    }
    else {
      setusername(p.data.username);

    }

  }



  const getDetail = async (e) => {

    const d = await axios.post(`${url}/Get-Student-By-Roll-No1`,
      {
        rollno: localStorage.getItem("user")
      },
      {
        withCredentials: true
      }
    );

    console.log("This is data");
    console.log(d.data);


    setname(d.data.name);
    setfathername(d.data.fathername);
    setcourse(d.data.course);
    setspecialization(d.data.specialization);
    setYear(d.data.exam);
    setEnrollment(d.data.rollno);
    const d1 = url + `/Students/` + (d.data.image);

    console.log(d.data);

    setImgUrl(d1);


  }
  const sectionRef = useRef(null);
  const Print = (e) => {
    var print_content = sectionRef.current.innerHTML;

    var print_window = window.open('', '', 'width=900,height=500');
    var is_chrome = Boolean(print_window.chrome);

    print_window.document.write(`
  <html>
    <head>
   
    <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
    }
    .container {
      display: grid;
      grid-auto-columns: repeat(3, 1fr);
    }
    .row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
   
      
    }
    .row1 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-top:-35px;
        
      }
    .col {
    
      margin: 0;
    }
    img {
        margin-top:10px;
      max-width: 60%;
      height: 18vh;
      width:60%;

      display: block;
    }
  </style>
    </head>
    <body>
      <div class="container">
      <div class="row ">

      <div class="col col-xxl-8 col-xl-8 col-lg-9 col-md-6 col-sm-12 col-xms-12">
      <div class="row " style="margin-top:-12px;">
  
  <div class="col col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-12 col-xms-12">
  <h5 style={{color:'black'}}>Name</h5>
  
  
  </div>
  
  <div class="col col-xxl-4 col-xl-4 col-lg-8 col-md-6 col-sm-12 col-xms-12">
  <h6 style={{color:'black'}}>${name}</h6>
  
  
  </div>
  
  
  </div>
  <div class="row1 ">
  
  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xms-12">
  <h5 style={{color:'black'}}>Fathers Name</h5>
  
  
  </div>
  
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xms-12">
  <h6 style={{color:'black'}}>${father}</h6>
  
  
  </div>
  
  
  </div>
  <div class="row1 ">
  
  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xms-12">
  <h5 style={{color:'black'}}>Enrollment Number</h5>
  
  
  </div>
  
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xms-12">
  <h6 style={{color:'black'}}>${enrollment}</h6>


  </div>
  
  
  </div>
  <div class="row1 ">
  
  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xms-12">
  <h5 style={{color:'black'}}>Program</h5>
  
  
  </div>
  
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xms-12">
  <h6 style={{color:'black'}}>${course}</h6>
  
  
  </div>
  
  
  </div>
  <div class="row1 ">
  
  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xms-12">
  <h5 style={{color:'black'}}>Specialization</h5>
  
  
  </div>
  
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xms-12">
  <h6 style={{color:'black'}}>${specialization}</h6>
  
  
  </div>
  
  
  </div>
  <div class="row1 ">
  
  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xms-12">
  <h5 style={{color:'black'}}>Session</h5>
  
  
  </div>
  
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xms-12">
  <h6 style={{color:'black'}}>${year}</h6>
  
  
  </div>
  
  
  </div>
  <div class="row1 ">
  
  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xms-12">
  <h5 style={{color:'black'}}>Center</h5>
  
  
  </div>
  
  <div class="col col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xms-12">
  <h6 style={{color:'black'}}>Noida</h6>
  
  
  </div>
  
  
  </div>
  
   
  </div>
  
  <div class="col  col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xms-12">
   
  <img src='${ImgUrl}' />
   
  </div>
  
    
  </div>
  
      </div>
     
    </body>
  </html>
`);

    // if (is_chrome) {
    //   setTimeout(function () {
    //     print_window.document.close();
    //     print_window.focus();
    //     print_window.print();
    //     print_window.close();
    //   }, 250);
    // } else {
    //   print_window.document.close();
    //   print_window.focus();
    //   print_window.print();
    //   print_window.close();
    // }
    print_window.print();

  }


  return <>

    <main id="main" className="main">

      <div className="pagetitle">
        <h1 className='mx-3'>Id Card </h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="" className='mx-3'>Manage Id Card</a></li>

          </ol>
        </nav>
      </div>

      <section className="section dashboard" ref={sectionRef}>
        <div className='container my-4'>



          <div className="row ">

            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xms-12">
              <div className="row ">

                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xms-12">
                  <h6 style={{ color: 'black' }}>Name</h6>


                </div>

                <div className="col-xxl-7 col-xlg-7 col-lg-7 col-md-6 col-sm-12 col-xms-12">
                  <h6 style={{ color: 'black' }}>{name}</h6>


                </div>


              </div>




              <div className="row ">

                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xms-12">
                  <h6 style={{ color: 'black' }}>Fathers Name</h6>


                </div>

                <div className="col-xxl-7 col-xlg-7 col-lg-7 col-md-6 col-sm-12 col-xms-12">
                  <h6 style={{ color: 'black' }}>{father}</h6>


                </div>


              </div>


              <div className="row ">

                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xms-12">
                  <h6 style={{ color: 'black' }}>Enrollment Number</h6>


                </div>

                <div className="col-xxl-7 col-xlg-7 col-lg-7 col-md-6 col-sm-12 col-xms-12">
                  <h6 style={{ color: 'black' }}>{enrollment}</h6>


                </div>


              </div>


              <div className="row ">

                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xms-12">
                  <h6 style={{ color: 'black' }}>Program </h6>


                </div>

                <div className="col-xxl-7 col-xlg-7 col-lg-7 col-md-6 col-sm-12 col-xms-12">
                  <h6 style={{ color: 'black' }}>{course}</h6>


                </div>


              </div>



              <div className="row ">

                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xms-12">
                  <h6 style={{ color: 'black' }}>Specialization</h6>


                </div>

                <div className="col-xxl-7 col-xlg-7 col-lg-7 col-md-6 col-sm-12 col-xms-12">
                  <h6 style={{ color: 'black' }}>
                    {specialization && specialization.split(' ').map((word, index) => (
                      <h6 key={index}>
                        {(word.length > 2 && index != 0 && index % 2 == 0) ? <>{word}<br /></> : word}{' '}
                      </h6>
                    ))}
                  </h6>

                </div>


              </div>
              <div className="row ">

                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xms-12">
                  <h6 style={{ color: 'black' }}>Session</h6>


                </div>

                <div className="col-xxl-7 col-xlg-7 col-lg-7 col-md-6 col-sm-12 col-xms-12">
                  <h6 style={{ color: 'black' }}>{year}</h6>


                </div>


              </div>


              <div className="row ">

                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xms-12">
                  <h6 style={{ color: 'black' }}>Center</h6>


                </div>

                <div className="col-xxl-7 col-xlg-7 col-lg-7 col-md-6 col-sm-12 col-xms-12">
                  <h6 style={{ color: 'black' }}>Noida</h6>


                </div>


              </div>

            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xms-12">

              <img className='Image' src={ImgUrl} />


            </div>


          </div>




          <div className="row my-5">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xms-10">

            </div>

            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xms-2">

              <button className="btn btn-primary" onClick={Print}>Print</button>
            </div>
          </div>
        </div>



      </section>

    </main>
  </>
}



export default IdCard;