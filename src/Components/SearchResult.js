import React, { useEffect, useState } from 'react';
import { url, rollNumber } from '../utile/globarVariable';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchResult = () => {


  const navigate = useNavigate();




  const [RollNo, setRoll] = useState(
    {
      rollno: ''
    }
  );


  const [No, setNo] = useState();







  const getStudent = async (e) => {

    const response = await axios.get(`${url}/Get-Student-By-Roll-Noa?rollno=${RollNo.rollno}`);


    if (response.data.length > 0) {
      if (RollNo.rollno == response.data[0].rollno) {


        let r = response.data[0].rollno.split('/')[0] + '.' + response.data[0].rollno.split('/')[1] + '.' + response.data[0].rollno.split('/')[2] + '.' + response.data[0].rollno.split('/')[3];






        navigate(`/Add-Result/${r}`);
      }
      else {
        alert("Student Not Found");

      }
    }


  }



  const [htmlElements, setHtmlElements] = useState([]);
  const HandleResultSearch = async (e) => {
    e.preventDefault();


    await getStudent()



  }





  const handleRollNoValue = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      setRoll((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setRoll((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };









  return <>

    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Search Student</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="">Manage Result</a></li>
            <li className="breadcrumb-item active">Result</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">

      </section>
      <div>


        {htmlElements.map((element, index) => (



          <div key={index}>{element}</div>
        ))}

        <form onSubmit={HandleResultSearch}>
          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label htmlFor="inputEmail3" className="col-form-label">Roll No</label>
              <input type="text" onChange={handleRollNoValue} value={RollNo.rollno} className="form-control" id="inputEmail" name='rollno' />
            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <br />
              <button className="btn btn-primary mt-3" type='submit'>Search</button>


            </div>



          </div>




        </form>

      </div>
    </main>
  </>
}



export default SearchResult;