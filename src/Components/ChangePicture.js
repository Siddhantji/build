import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../utile/globarVariable';

const ChangePicture = () => {

    const id = localStorage.getItem("user");
    const [values, setValues] = useState(
        {
            id: id,
            image: '',
        }
    );
    const handleInputChange = (e) => {
        if (e.target.name === "image") {
         

            const file = e.target.files[0];
            if (file) {
                setValues({ ...values, [e.target.name]: file });
                console.log("File uploaded:", file);
            }
        } else setValues({ ...values, [e.target.name]: e.target.value });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();


        console.log(values.image.name);

        const f=new FormData();
        f.append("image",values.image);

        let b = await axios.post(`${url}/Save-Images`, f,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

        );

        let c = await axios.post(`${url}/Update-Image`,
            {
                id: values.id,
                image: values.image.name
            }
        );
        alert("Your Profile Picture Successfully Updated")


    }










    return <>

        <main id="main" className="main">

            <div className="pagetitle">
                <h1>Change Picture</h1>
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
                            <label for="inputEmail3" className="col-form-label">Roll No</label>
                            <input type="text" name='oldpassword' disabled value={values.id} className="form-control" id="inputEmail" />
                        </div>
                        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 col-sm-0 col-xsm-0"></div>
                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xms-12">

                            <label for="inputEmail3" className="col-form-label">New Picture</label>
                            <input
                                type="file"
                                id="photo"
                                name="image"

                                accept="image/*"
                                className="form-control"
                                required
                                onChange={(e) => handleInputChange(e)}
                            />
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


export default ChangePicture;