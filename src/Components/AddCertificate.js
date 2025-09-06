import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../utile/globarVariable';

const AddCertificate = () => {

    const navigator = useNavigate();

    const [formData, setFormData] = useState(
        {
            lastyear: '',
            year: '',
            serial: ''

        }
    );

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

    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        const r = await axios.post(`${url}/Add-Certificate`,
            formData
        );


        if (r.data.Status == true) {
            alert("Certificate Successfully Added");
            navigator("/Manage-Certificate");

        }
        else {
            alert("Certificate does not Added");

        }


    }
    const [selectedYear, setSelectedYear] = useState(0);

    // Current year plus 10
    const currentYear = new Date().getFullYear();
    const endYear = currentYear + 10;

    // Generate array of years from 1995 to current year + 10
    const years = [];
    for (let j = 1995; j <= endYear; j++) {
        years.push(j);
    }
    return <>

        <main id="main" className="main">

            <div className="pagetitle">
                <h1>Add Certificate</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a >Manage Certificate</a></li>
                        <li className="breadcrumb-item active">Certificate</li>
                    </ol>
                </nav>
            </div>

            <section className="section dashboard">
                <form onSubmit={handleSubmit}>
                    <div className="row">

                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                            <label for="inputEmail3" className="col-form-label">Last Year</label>
                            <select name="lastyear" onChange={handleInputValue} value={formData.lastyear} className="form-control" id="">

                                <option value="" disabled>Select Last Year</option>

                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}

                            </select>

                        </div>
                        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                            <label for="inputEmail3" className="col-form-label">Year</label>
                            <input type="text" name='year' onChange={handleInputValue} value={formData.year} className="form-control" id="inputEmail" />
                        </div>



                    </div>

                    <div className="row">

                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">
                            <label for="inputEmail3" className="col-form-label">Serial</label>
                            <input type="text" name='serial' onChange={handleInputValue} value={formData.serial} className="form-control" id="inputEmail" />
                        </div>
                        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xms-2">
                            <br />
                            <button className="btn btn-primary mt-3" type="submit">Add</button>
                        </div>



                    </div>











                </form>
            </section>

        </main>
    </>
}



export default AddCertificate;