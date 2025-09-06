import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { url } from '../utile/globarVariable';

const Header_Sidebar = () => {
  const [username, setUsername] = useState();
  const [username1, setUsername1] = useState('admin');

  const navigate = useNavigate();

  const Logout = async (e) => {
    const r = await axios.post(`${url}/logout`, {},
      {
        withCredentials: true
      }
    );


    alert(r.data);
    navigate("/");


  }

  const CheckLogin = async (e) => {


    const p = await axios.get(`${url}/dashboard`, { withCredentials: true });




    if (p.data.Status == false) {
      navigate("/");
    }


  }
  const getUsername = async (e) => {
    const r = await axios.get(`${url}/get-Admin-Username`,
      {
        withCredentials: true
      });


    setUsername(r.data.username);


  }

  useEffect(() => {
    getUsername();
    CheckLogin();


  }, [])

  return <>
    <header id="header" className="header fixed-top d-flex align-items-center">

      <div style={{ width: '70%' }} className="d-flex align-items-center justify-content-between">
        <Link style={{ width: '100%' }} to="/Dashboard" className="logo d-flex align-items-center">
          <img style={{ width: '3%' }} src="assets/img/IMTS.png" alt="" />
          {/* <span className="d-none mx-2 d-lg-block">INSTITITUTE OF MANAGEMENT AND TECHNICAL STUDIES</span> */}
          <div className="marquee-container my-3">
            <div className="marquee">
              <span className="d-none mx-2 d-lg-block">INSTITUTE OF MANAGEMENT AND TECHNICAL STUDIES</span>
            </div>
          </div>
        </Link>

      </div>



      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">





          <li className="nav-item dropdown pe-3">

            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">

              <span className="d-none d-md-block dropdown-toggle ps-2">{username}</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>Admin</h6>
                <span>IMTS</span>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>










              <li>
                <a className="dropdown-item d-flex align-items-center" onClick={Logout} >
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </a>
              </li>

            </ul>
          </li>

        </ul>
      </nav>

    </header>


    <aside id="sidebar" className="sidebar">

      <ul className="sidebar-nav" id="sidebar-nav">

        {username == "admin" ?

          (
            <>
              <li className="nav-item">
                <a
                  className="nav-link collapsed"
                  data-bs-target="#components-nav"
                  data-bs-toggle="collapse"
                >
                  <i className="bi bi-menu-button-wide"></i>
                  <span>Student</span>
                  <i className="bi bi-chevron-down ms-auto"></i>
                </a>

                <ul
                  id="components-nav"
                  className="nav-content collapse "
                  data-bs-parent="#sidebar-nav"
                >
                  <li>
                    <Link to={"/Add-Student"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i>
                      <span>Add</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Manage-Student"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i>
                      <span>View</span>
                    </Link>
                  </li>
                </ul>
              </li>




              <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#tabnav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-layout-text-window-reverse"></i><span>Result</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="tabnav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <Link to={"/Search-Student"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>Add</span>

                    </Link>

                  </li>
                  <li>
                    <Link to={"/Manage-Result"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>View</span>

                    </Link>

                  </li>
                </ul>
              </li>



              <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-layout-text-window-reverse"></i><span>University</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <Link to={"/Add-University"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>Add</span>

                    </Link>

                  </li>
                  <li>
                    <Link to={"/Manage-University"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>View</span>

                    </Link>

                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-bar-chart"></i><span>Course</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>

                    <Link to={"/Add-Course"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>Add</span>

                    </Link>

                  </li>
                  <li>
                    <Link to={"/Manage-Course"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>View</span>

                    </Link>
                  </li>

                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#specialization-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-gem"></i><span>Specialization</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="specialization-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <Link to={"/Add-Specialization"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>Add</span>

                    </Link>

                  </li>
                  <li>
                    <Link to={"/Manage-Specialization"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>View</span>

                    </Link>

                  </li>

                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#subject-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-gem"></i><span>Subject</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="subject-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <Link to={"/Add-Subject"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>Add</span>

                    </Link>
                  </li>
                  <li>
                    <Link to={"/Manage-Subject"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>View</span>

                    </Link>
                  </li>

                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#session-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-gem"></i><span>Session</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="session-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <Link to={"/Add-Session"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>Add</span>

                    </Link>

                  </li>
                  <li>
                    <Link to={"/Manage-Session"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>View</span>

                    </Link>

                  </li>

                </ul>
              </li>


              <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#certifcate-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-gem"></i><span>Certificate</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="certifcate-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <Link to={"/Add-Certificate"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>Add</span>

                    </Link>

                  </li>
                  <li>
                    <Link to={"/Manage-Certificate"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>View</span>

                    </Link>

                  </li>

                </ul>
              </li>


              <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#book-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-gem"></i><span>Books</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="book-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <Link to={"/Add-Book"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>Add</span>

                    </Link>

                  </li>
                  <li>
                    <Link to={"/Manage-Book"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>View</span>

                    </Link>

                  </li>

                </ul>
              </li>


              <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#timetable-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-gem"></i><span>TimeTable</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="timetable-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <Link to={""} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>Add</span>

                    </Link>

                  </li>


                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#databasebackup-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-gem"></i><span>Database Backup</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="databasebackup-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <Link to={"/Auto-Backup"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>View</span>

                    </Link>

                  </li>


                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#profile-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-gem"></i><span>Profile</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="profile-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <Link to={"/Change-Password"} className="nav-link menu-title">
                      <i className="bi bi-circle"></i><span>Change Password</span>

                    </Link>

                  </li>
                  <li>
                    <a onClick={Logout}>
                      <i className="bi bi-circle"></i><span>Logout</span>
                    </a>
                  </li>

                </ul>
              </li>
            </>
          ) : (


            <>
              <li className="nav-item">

                <Link to={"/Profile"} className="nav-link">
                  <i className="bi bi-menu-button-wide"></i><span>Profile</span>

                </Link>



              </li>

              <li className="nav-item">


<Link to={"/Change-Picture"} className="nav-link">
  <i className="bi bi-menu-button-wide"></i><span>Change Picture</span>

</Link>
</li>
            <li className="nav-item">


                <Link to={"/Id-Card"} className="nav-link">
                  <i className="bi bi-menu-button-wide"></i><span>ID Card</span>

                </Link>
              </li>
              <li className="nav-item">


                <Link to={"/Library"} className="nav-link">
                  <i className="bi bi-menu-button-wide"></i><span>Library</span>

                </Link>
              </li>


              <li className="nav-item">


                <Link to={"/Examination"} className="nav-link">
                  <i className="bi bi-menu-button-wide"></i><span>Examination</span>

                </Link>
              </li>

              <li className="nav-item">


                <Link className="nav-link">
                  <i className="bi bi-menu-button-wide"></i><span>TimeTable</span>

                </Link>
              </li>

              <li className="nav-item">


                <Link to={"/Feedback"} className="nav-link">
                  <i className="bi bi-menu-button-wide"></i><span>Feedback</span>

                </Link>
              </li>

              <li className="nav-item">


                <Link className="nav-link">
                  <i className="bi bi-menu-button-wide"></i><span>News Update</span>

                </Link>
              </li>

              <li className="nav-item">


                <Link to={"/Contact-Us"} className="nav-link">
                  <i className="bi bi-menu-button-wide"></i><span>Contact Us</span>

                </Link>
              </li>

              <li className="nav-item">


                <Link to={"/Change-Password"} className="nav-link">
                  <i className="bi bi-menu-button-wide"></i><span>Change Password</span>

                </Link>
              </li>

              <li className="nav-item">


                <Link to={"/"} className="nav-link" onClick={Logout} ><i className="bi bi-menu-button-wide"></i><span>Logout</span>

                </Link>
              </li>












            </>
          )}











      </ul>

    </aside>

  </>
}


export default Header_Sidebar;