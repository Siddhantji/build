import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from './Components/Layout';
import Dasboard from './Components/Dasboard';
import AddStudent from './Components/AddStudent';
import ManageStudent from './Components/ManageStudent';
import AddUniversity from './Components/AddUniversity';
import ManageUniversity from './Components/ManageUniversity';
import AddCourse from './Components/AddCourse';
import ManageCourse from './Components/ManageCourse';
import AddSpecialization from './Components/AddSpecialization';
import ManageSpecialization from './Components/ManageSpecialization';
import AddSubject from './Components/AddSubject';
import ManageSubject from './Components/ManageSubject';
import AddSession from './Components/AddSession';
import ManageSession from './Components/ManageSession';
import AddBook from './Components/AddBook';
import ManageBook from './Components/ManageBook';
import ChangePassword from './Components/ChangePassword';
import GetParticlarStudent from './Components/ParticularStudent';
import GetParticularCourse from './Components/ParticularCourse';
import GetParticularSpecialization from './Components/ParticularSpecialization';
import GetParticularUniversity from './Components/ParticularUniversity';
import GetParticularSession from './Components/ParticularSession';
import GetParticlarBook from './Components/ParticularBook';
import AddResult from './Components/AddResult';
import Login from './Components/Login';
import SearchResult from './Components/SearchResult';
import ManageResult from './Components/ManageResult';
import GetParticlarResult from './Components/ParticularResult';
import IdCard from './Components/IdCard';
import Library from './Components/Library';
import Feedback from './Components/Feedback';
import Examination from './Components/Examination';
import Profile from './Components/Profile';
import GetParticularSubject from './Components/ParticularSubject';
import PrintResult from './Components/PrintResult';
import AutoBackup from './Components/AutoBackup';
import viewcertificate from './Components/viewcertificate';
import Viewcertificate from './Components/viewcertificate';
import ManageCertificate from './Components/ManageCertificate';
import AddCertificate from './Components/AddCertificate';
import ContactUs from './Components/ContactUs';
import ChangePicture from './Components/ChangePicture';
function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route path='/' element={<Login />} ></Route>
          <Route path='/Dashboard' element={<Layout components={Dasboard} />} ></Route>
          <Route path='/Auto-Backup' element={<Layout components={AutoBackup} />} ></Route>
          <Route path='/Change-Picture' element={<Layout components={ChangePicture} />} ></Route>

          <Route path='Add-Student' element={<Layout components={AddStudent} />}></Route>

          <Route path='Add-Result/:Id' element={<Layout components={AddResult} />}></Route>
          <Route path='Search-Student' element={<Layout components={SearchResult} />}></Route>

          <Route path='View-Certificate/:Id' element={<Viewcertificate />}></Route>

          <Route path='Get-Particular-Student/:Id' element={<Layout components={GetParticlarStudent} />}></Route>
          <Route path='Get-Particular-Result/:Id' element={<Layout components={GetParticlarResult} />}></Route>

          <Route path='Get-Particular-Session/:Id' element={<Layout components={GetParticularSession} />}></Route>

          <Route path='Get-Particular-University/:Id' element={<Layout components={GetParticularUniversity} />}></Route>
          <Route path='Get-Particular-Course/:Id' element={<Layout components={GetParticularCourse} />}></Route>

          <Route path='Get-Particular-Specialization/:Id' element={<Layout components={GetParticularSpecialization} />}></Route>
          <Route path='Get-Particular-Book/:Id' element={<Layout components={GetParticlarBook} />}></Route>
          <Route path='Get-Particular-Subject/:Id' element={<Layout components={GetParticularSubject} />}></Route>

          <Route path='Manage-Student' element={<Layout components={ManageStudent} />}></Route>
          <Route path='Add-University' element={<Layout components={AddUniversity} />}></Route>
          <Route path='Manage-University' element={<Layout components={ManageUniversity} />} ></Route>
          <Route path='Manage-Result' element={<Layout components={ManageResult} />} ></Route>

          <Route path='Manage-Certificate' element={<Layout components={ManageCertificate} />}></Route>
          <Route path='Add-Certificate' element={<Layout components={AddCertificate} />}></Route>
          <Route path='Contact-Us' element={<Layout components={ContactUs} />}></Route>

          <Route path='Add-Course' element={<Layout components={AddCourse} />} ></Route>
          <Route path='Manage-Course' element={<Layout components={ManageCourse} />}></Route>
          <Route path='Add-Specialization' element={<Layout components={AddSpecialization} />}></Route>
          <Route path='Manage-Specialization' element={<Layout components={ManageSpecialization} />}></Route>
          <Route path='Add-Subject' element={<Layout components={AddSubject} />}></Route>
          <Route path='Manage-Subject' element={<Layout components={ManageSubject} />}></Route>
          <Route path='Add-Session' element={<Layout components={AddSession} />}></Route>
          <Route path='Manage-Session' element={<Layout components={ManageSession} />}></Route>

          <Route path='Add-Book' element={<Layout components={AddBook} />}></Route>
          <Route path='Manage-Book' element={<Layout components={ManageBook} />}></Route>
          <Route path='Print-Result/:Id' element={< PrintResult />}></Route>

          <Route path='Change-Password' element={<Layout components={ChangePassword} />}></Route>
          <Route path='Id-Card' element={<Layout components={IdCard} />}></Route>
          <Route path='Examination' element={<Layout components={Examination} />}></Route>

          <Route path='Library' element={<Layout components={Library} />}></Route>
          <Route path='Feedback' element={<Layout components={Feedback} />}></Route>

          <Route path='Profile' element={<Layout components={Profile} />}></Route>

        </Routes>

      </div>
    </Router>
  );
}

export default App;


