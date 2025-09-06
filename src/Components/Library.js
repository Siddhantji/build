import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { url } from '../utile/globarVariable';

const Library = () => {

  const [booklist, setbooklist] = useState([]);

  const navigator = useNavigate();

  const getBookList = async (e) => {
    const r = await axios.get(`${url}/get-Books1`,
      {
        withCredentials: true
      }
    );

    setbooklist(r.data);

  }
  const CheckLogin = async (e) => {
    const p = await axios.get(`${url}/dashboard`, { withCredentials: true });




    if (p.data.Status == false) {
      navigator("/");
    }

  }

  useEffect(() => {
    getBookList();
    CheckLogin();


  }, [])

  const DeleteBook = async (Id) => {


    const d = {
      Id: Id
    };


    const r = await axios.get(`${url}/Delete-Book?Id=${Id}`)

    if (r.data.Status == true) {
      alert("Book Successfully Deleted");
      getBookList();

    }
    else {
      alert("Book does not  Deleted");
    }





  }

  return <>

    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Your Library</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a>Read Books</a></li>
            <li className="breadcrumb-item active">Book</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard" style={{ overflowX: 'scroll' }}>
        <div className="row" >
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-10 col-sm-12 col-xsm-12" style={{ overflowX: 'scroll' }}>
            <table className="table table-borderless" style={{ overflowX: 'scroll' }}>
              <thead>
                <tr>

                  <th>S.No</th>

                  <th>Subject.</th>
                  <th>Book.</th>


                  <th>Download</th>

                </tr>
              </thead>
              <tbody>
                {
                  booklist.map((en, index) => (
                    <tr>

                      <td>{index+1}</td>
                      <td>{en.subject}</td>
                      <td>{en.title}</td>


                      <td>


                        <Link to={en.url} className="btn btn-success">
                          <i ></i><span>Download</span>

                        </Link>

                      </td>


                    </tr>
                  ))
                }




              </tbody>
            </table>
          </div>
        </div>
      </section>

    </main>

  </>
}



export default Library;