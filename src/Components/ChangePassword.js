import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../utile/globarVariable';

const ChangePassword = () => {

  const [formData, setFormData] = useState(
    {
      oldpassword: '',
      newpassword: '',
      againpassword: ''
    }
  );


  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setFormData(
      {
        ...formData, [name]: value
      }
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    let a = await axios.post(`${url}/Update-Password`, formData,
      {
        withCredentials: true
      }
    );
    alert("Password Successfully Updated");



  }


  const getPreviousPassword = async () => {
    let a = await axios.get(`${url}/get-Old-Password`,
      {
        withCredentials: true
      }
    );
    console.log(a.data);

    if (a.data.length > 0) {
      setFormData((prev) => ({
        ...prev,
        oldpassword: a.data[0].pass,
      }));

    }
  }




  useEffect(() => {
    const fetchData = async () => {
      await getPreviousPassword();
    }
    fetchData();
  }, []);


  return <>

    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Change Password</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="">Change Pasword</a></li>
            <li className="breadcrumb-item active">Pasword</li>
          </ol>
        </nav>
      </div>
      <section className="section dashboard">
        <form onSubmit={handleSubmit}>

          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label for="inputEmail3" className="col-form-label">Old Password</label>
              <input type="text" name='oldpassword' disabled onChange={handleInputValue} value={formData.oldpassword} className="form-control" id="inputEmail" />
            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

              <label for="inputEmail3" className="col-form-label">New Password</label>
              <input type="text" className="form-control" name='newpassword' onChange={handleInputValue} value={formData.newpassword} />

            </div>



          </div>


          <div className="row">

            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
              <label for="inputEmail3" className="col-form-label">New Password Again</label>
              <input type="text" className="form-control" name='againpassword' onChange={handleInputValue} value={formData.againpassword} id="inputEmail" />
            </div>




          </div>





          <div className="row my-5">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xms-10">

            </div>

            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xms-2">

              <button className="btn btn-primary" type="submit">Save</button>
            </div>
          </div>

        </form>
      </section>

    </main>

  </>;
}


export default ChangePassword;