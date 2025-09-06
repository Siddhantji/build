import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { url } from '../utile/globarVariable';



const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    {
      username: '',
      password: ''
    }
  );
  const HandleSubmit = async (e) => {
    e.preventDefault();








    if (formData.username == "admin" && formData.password == "New$$IMTS@@$%%") {

      
      const r = await axios.post(`${url}/Admin-Login`, formData,
        {
          withCredentials: true
        });


      console.log(r.data.Status);




      const p = await axios.get(`${url}/dashboard`,
        {
          withCredentials: true
        }


      );






      if (p.data.Status == true) {

        navigate("/Dashboard");



      }
      else {

        alert("Internal Session ");

      }




    }
    else if (formData.username != "admin") {

      const p = await axios.get(`${url}/Student-Login`, {
        params: formData
      }, { withCredentials: true });









      if (p.data.Status == true) {

        localStorage.setItem("user",formData.username);
        
        navigate("/Dashboard");
      }
      else {
        alert("Entered Credentail is Incorrect");

      }



    }
    else {
      alert("Entered Credentail is Incorrect");

    }

  }

  const handleInputValue = (e) => {
    const { name, value } = e.target;

    setFormData(
      {
        ...formData, [name]: value
      }
    );
  }
  return <div>
    <main>
      <div class="container">

        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">



                <div class="card mb-3">

                  <div class="card-body">
                    <div class="d-flex justify-content-center py-4">
                      <a class="logo d-flex align-items-center w-auto">
                        <img src="assets/img/IMTS.png" alt="" />

                        <span class="d-none d-lg-block">IMTS</span>
                      </a>
                    </div>
                    <div class="pt-0 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p class="text-center small">Enter your username & password to login</p>
                    </div>

                    <form onSubmit={HandleSubmit} class="row g-3 needs-validation" novalidate>

                      <div class="col-12">
                        <label for="yourUsername" class="form-label">Username</label>
                        <div class="input-group has-validation">
                          <span class="input-group-text" id="inputGroupPrepend">@</span>
                          <input type="text" name="username" onChange={handleInputValue} value={formData.username} class="form-control" id="yourUsername" required />
                          <div class="invalid-feedback">Please enter your username.</div>
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="yourPassword" class="form-label">Password</label>
                        <input type="password" name="password" class="form-control" onChange={handleInputValue} value={formData.password} id="yourPassword" required />
                        <div class="invalid-feedback">Please enter your password!</div>
                      </div>


                      <div class="col-12">
                        <button class="btn btn-primary w-100" type="submit">Login</button>
                      </div>

                    </form>

                  </div>
                </div>


              </div>
            </div>
          </div>

        </section>

      </div>
    </main>

  </div>;
}


export default Login;

