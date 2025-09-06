import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import Profile from './Profile';
import { url } from '../utile/globarVariable';
Chart.register(
  Tooltip, Title, ArcElement, Legend
);

const Dasboard = () => {


  const [d, setD] = useState(
    {
      datasets: [{
        data: [10, 20, 30],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'

        ],



      }],

      labels: [
        'Red',
        'Yellow',
        'Blue'
      ]
    }
  )


  const [total, settotal] = useState('');
  const [totalBBA, settotalBBA] = useState('');
  const [totalAdvacneCertificate, setTotalAdvanceCertificate] = useState();
  const [totalDBA, setTotalDBA] = useState('');
  const [totalMBA, setTotalMBA] = useState('');
  const [totalDualMBA, setTotalDualMBA] = useState('');
  const [totalCourse, settotalCourse] = useState('');



  const [username, setusername] = useState();
  const [username1, setusername1] = useState('admin');

  const navigator = useNavigate();




  const totalStudent = async (e) => {
    const q = await axios.get(`${url}/get-Total-Student`,
      {
        withCredentials: true
      }
    );


    settotal(q.data.total);

  }
  const getUsername = async (e) => {
    const r = await axios.get(`${url}/get-Admin-Username`,
      {
        withCredentials: true
      });



    setusername(r.data.username);


  }

  const getAllRecord = async () => {
    try {
      const a = await axios.get(`${url}/get-BBA-Student`,
        {
          withCredentials: true
        });
      console.log(a.data);

      settotalBBA(a.data.Total);
      console.log("THis is total BBA ")

      const b = await axios.get(`${url}/get-Advance-Certificate-Student`,
        {
          withCredentials: true
        });
      setTotalAdvanceCertificate(b.data.Total);
      console.log("This is Advance")
      const c = await axios.get(`${url}/get-DBA-Student`,
        {
          withCredentials: true
        });
      setTotalDBA(c.data.Total);
      console.log(c.data);
      console.log("THis is total DBA")

      const d = await axios.get(`${url}/get-MBA-Student`,
        {
          withCredentials: true
        });
      setTotalMBA(d.data.Total);

      const e = await axios.get(`${url}/get-Dual-MBA-Student`,
        {
          withCredentials: true
        });
      setTotalDualMBA(e.data.Total);


      const f = await axios.get(`${url}/get-Total-Course`,
        {
          withCredentials: true
        });
      settotalCourse(f.data.total);
      console.log(totalDBA);

      setD(
        {
          datasets: [{
            data: [totalBBA, totalMBA, totalDualMBA, totalDBA, totalAdvacneCertificate],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(215, 206, 86, 0.2)',
              'rgba(235, 185, 126, 0.2)'

            ],



          }],

          labels: [
            'BBA',

            'MBA',
            'Dual-MBA', 'DBA',
            'Advance Certificate'
          ]
        }
      )




    }
    catch (err) {
      console.log(`This is error ${err}`);
    }



  }
  useEffect(() => {
    const fetchData = async () => {
      await getUsername();
      await totalStudent();


    }
    fetchData();

  }, [])
  useEffect(() => {
    const fetchData = async () => {

      await getAllRecord();

    }
    fetchData();


    console.log(d);

  }, [d])

  return <>

    {
      username == "admin" ?


        (<main id="main" className="main">

          <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a >Home</a></li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </nav>
          </div>

          <section className="section dashboard">
            <div className="row">
              <div className="col-lg-4">
                <div className="card info-card customers-card">
                  <div className="card-body">
                    <h5 className="card-title">Total Course <span>| This Year</span></h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{totalCourse}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card info-card customers-card">
                  <div className="card-body">
                    <h5 className="card-title">Total Student <span>| This Year</span></h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{total}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title">Welcome to IMTS INSTITUTE </h1>
                    <div className="activity">
                      <Pie data={d} style={{ width: '260px', height: '260px' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>) : (
          <Profile />
        )
    }

  </>
}




export default Dasboard;