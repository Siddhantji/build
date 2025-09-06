import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import { Style } from './Style.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../utile/globarVariable';

const Profile = () => {

    const [course, setcourse] = useState('');
    const [specialization, setspecialization] = useState('');
    const [session, setsession] = useState('');

    const [username, setusername] = useState();
    const [ImgUrl, setImgUrl] = useState(null);

    const [std, setstd] = useState([]);



    const navigator = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            await CheckLogin();
            await getProfile();

        }
        fetchData();




    }, [std, ImgUrl])



    const CheckLogin = async (e) => {
        const p = await axios.get(`${url}/dashboard`, { withCredentials: true });




        if (p.data.Status == false) {
            navigator("/");
        }
        else {
            setusername(p.data.username);

        }

    }

    const getProfile = async (e) => {
        const d = await axios.post(`${url}/Get-Student-By-Roll-No2`,
            {
                rollno: username
            },
            {
                withCredentials: true
            }
        );
        console.log(d.data);

        const d1 = url + `/Students/` + (d.data.image);
        setcourse(d.data.course);
        setspecialization(d.data.specialization);
        setsession(d.data.session);
        setImgUrl(d1);

        if (d.data.length > 0) {


        }






        const q = await axios.post(`${url}/User-Login`,
            {
                username: username
            }, { withCredentials: true });


        setstd(q.data.Status);








    }
    const sectionRef = useRef(null);
    const PrintApplication = (e) => {
        var print_content = sectionRef.current.innerHTML;

        var print_window = window.open('', '', 'width=1000,height=600');
        var is_chrome = Boolean(print_window.chrome);

        print_window.document.write(`
        <div class="application">
            <div style="display: flex; flex-direction: row;">
                <div>
                    <span>To</span>
                    <br>
                    <span>'${username}' </span>
                    <br>
                    <span>Ph:</span>
                    <br>
                    <span>Dear '${username}' </span>
                    <br>
                    <span>Session : ${session}</span>
                </div>
                
                <div>
                    <img style="width: 33%; margin-left: 350px;"  src='${ImgUrl}' />
   
   
                </div>
            </div>
    
            <div>
                <p>Congratulations on your successful enrollment for the ${course}, in (${specialization}) course at Institute of Management & Technical Studies (Regd. by Govt. of NCT of Delhi, Reg. No: S - 62768)!!! Your Enrollment Number for the course is ${username}</p>
            </div>
           
            <div>
                <p>It gives us immense pleasure to welcome you to be a part of the IMTS family. IMTS has been a pioneer in imparting distance learning Management Technology Education in India. It has been our endeavor to provide quality education at a nominal fee.</p>
            </div>
           
            <div>
                <p>We assure you that we would strive to ensure that your association with IMTS will be a pleasant experience altogether. Please feel free to contact us for any assistance that may be required during the course duration at the below-mentioned numbers:</p>
            </div>
           
            <div>
                <p>Fees Enquiry & Online Support:  <span style="margin-left: 120px;">+91-999955435</span></p>
            </div>
            <div>
                <p>General Information: <span style="margin-left: 190px;">+0120-4207610</span></p>
            </div>
            <div>
                <p>Complaints, Grievances & Exam Related Enquiry: admin@imtsinstitute.com</p>
            </div>
            <div>
                <p>Address: <span style="margin-left: 270px;">G-38, 2nd floor, sector 3, Noida 201301 (U.P)</span></p>
            </div>
            <div>
                <p>Alternatively you can write us at service@imtsinstitute.com It is being further requested to quote your enrollment number in any of the communication that is sent to us.update Exam Related Enquiry details</p>
            </div>

            <div>
                <p>service@imtsinstitute.com</p>
            </div>
            <div>
                <p>Kindly acknowledge the receipt of this letter by signing the second copy of the same and will be reverted back to the given Address (corporate office) for the records of the institute.</p>
            </div>

            <div>
            <b>Wishing you success in all your career endeavors.</b>
            </div>

            <div>
                <p>Thanking you,</p>
            </div>

            <div>
                <p>Yours truly</p>
            </div>
            <div>
                <p>Authorized Signatory</p>
            </div>
        </div>
        `);

        print_window.print();
        // if (is_chrome) {
        //     setTimeout(function () {
        //         print_window.document.close();
        //         print_window.focus();
        //         print_window.print();
        //         print_window.close();
        //     }, 250);
        // } else {
        //     print_window.document.close();
        //     print_window.focus();
        //     print_window.print();
        //     print_window.close();
        // }
    }

    return <main id="main" className="main">

        <div className="pagetitle">
            <h1>Profile</h1>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="">Manage Profile</a></li>
                    <li className="breadcrumb-item active">Profile</li>
                </ol>
            </nav>
        </div>
        <button className="btn btn-success" onClick={PrintApplication}>Print</button>
        <section className="section dashboard">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xsm-12" ref={sectionRef}>
                        <table className="application" >
                            <tr>
                                <td>
                                    <tr>
                                        <span>To</span>
                                    </tr>

                                    <tr>
                                        <span>{username}</span>
                                    </tr>
                                    <tr>
                                        <span>Ph:</span>
                                    </tr>

                                    <tr>
                                        <span>Dear {username}</span>
                                    </tr>
                                    <tr>
                                        <span>Session :{session}</span>
                                    </tr>
                                </td>

                                <td>
                                    <img className="Profilees" src={ImgUrl} />

                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    <span>
                                        Congratulations on your successful enrollment for the {course}, in ( {specialization} ) course at Institute of Management & Technical Studies (Regd. by Govt. of NCT of Delhi, Reg. No:  S - 62768)!!! Your Enrollment Number for the course is {username}
                                    </span>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    <span>
                                        It gives us immense pleasure to welcome you to be a part of the IMTS family. IMTS has been pioneer in imparting distance learning Management Technology Education in India. It has been our endeavor to quality education at nominal fee.

                                    </span>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    <span>
                                        We assure you that we would strive to ensure that your association with IMTS will be a pleasant experience altogether. Please feel free to contact us for any assistance that may be required during the course duration at the below mentioned numbers:
                                    </span>
                                </td>
                            </tr>
                            <br />

                            <tr>
                                <td>
                                    <span>

                                        Fees Enquiry & Online Support
                                    </span>
                                    <span className="mx-5">


                                    </span>
                                    <span className="mx-1">


                                    </span>
                                    <span className="mx-5">

                                    +91-8800000504
                                    </span>
                                </td>


                            </tr>



                            <tr>
                                <td>
                                    <span >

                                        General Information
                                    </span>
                                    <span className="mx-5">


                                    </span>
                                    <span className="mx-5">


                                    </span>
                                    <span className="mx-3">

                                    +91-8800000504
                                    </span>
                                </td>


                            </tr>
                            <tr>
                                <td>
                                    <span>

                                        Complaints, Grievances & Exam Related Enquiry
                                    </span>

                                    <span className="mx-5">

                                        +91-8800000504
                                    </span>
                                </td>


                            </tr>

                            <tr>
                                <td>
                                    <span>

                                        Address
                                    </span>
                                    <span className="mx-5">


                                    </span>
                                    <span className="mx-5">


                                    </span>
                                    <span className="mx-3">


                                    </span>
                                    <span className="mx-5">

                                        G-38, 2nd floor, sector 3, Noida 201301 (U.P)
                                    </span>
                                </td>


                            </tr>


                            <tr>
                                <td>
                                    <span>
                                        Alternatively you can write us at service@imtsinstitute.com It is being further requested to quote your enrollment
                                    </span>
                                </td>
                            </tr>


                            <tr>
                                <td>
                                    <span>
                                        number in any of the communication that is sent to us.update Exam Related Enquiry details
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span>
                                        service@imtsinstitute.com
                                    </span>
                                </td>
                            </tr>
                            <br />

                            <tr>
                                <td>
                                    <span>
                                        Kindly acknowledge the receipt of this letter by signing the second copy of the same and will be reverted back to the
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span>
                                        given Address (corporate office) for the records of the institute.
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span>
                                        <b>
                                            Wishing you success in all your career endeavors
                                        </b>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>
                                        Thanking you,
                                    </span>
                                </td>
                            </tr>


                            <tr>
                                <td>
                                    <span>
                                        Yours truly
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>
                                        Authorized Signatory
                                    </span>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </section>

    </main>
}


export default Profile;