import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { url } from '../utile/globarVariable';
import './PrintResult.css';

const PrintResult = () => {

    const { Id } = useParams();

    const { Ids, duration } = Id.split('_');


    const [en, setEn] = useState();

    const [singleData, setSingleData] = useState([]);
    const [firstYearData, setfirstYearData] = useState([]);
    const [secondYearData, setsecondYearData] = useState([]);
    let obtainmark = 0;
    let minmark = 0;
    let maxmark = 0;
    let [grade, setgrade] = useState('');
    const gradeGenerator = ($grade) => {

        $grade = $grade * 100;





        if ($grade >= 45 && $grade <= 54.99) { grade = "C"; }
        else if ($grade >= 55 && $grade <= 64.99) { grade = "B"; }
        else if ($grade >= 65 && $grade <= 74.99) { grade = "A"; }
        else if ($grade >= 75) { grade = "A+"; }
        return grade;


    }

    const ObtainMarks = (value) => {
        obtainmark += value;
    }
    const MinMarks = (value) => {
        minmark += value;
    }
    const MaxMarks = (value) => {
        maxmark += value;
    }

    const handleChange = (event) => {
        setEn(event.target.value);
    };

    const getResult = async () => {


        let i = Id.split('_')[0];
        let d = Id.split('_')[1];
        let s = Id.split('_')[2];










        const r = await axios.post(`${url}/get-Result-By-Roll-No`,
            {
                Id: i,
                duration: d,
                s: s

            }
        );
        console.log(r.data);



        setfirstYearData(r.data);




    }
    useEffect(() => {
        getResult();
    }, [Id]);
    const printPage = () => {
        const printContent = document.getElementById('printArea1').innerHTML;
        const printWindow = window.open('', '', 'width=1024,height=1330');
        printWindow.document.open("text/html");
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.print();
    };
    useEffect(() => {
        if (firstYearData.length > 0 || secondYearData.length > 0) {

        }
    }, [firstYearData, secondYearData]);
    return (
        <>

            {
                firstYearData.length > 0 || secondYearData.length > 0 ?
                    (
                        <>
                            {
                                firstYearData.map((en) => (
                                    <>
                                        <div id="printArea1" style={{
                                            backgroundColor: 'white'

                                        }}>
                                            <table >
                                                <tbody>
                                                    <tr>
                                                        <td align="center">
                                                            <style type='text/css' media='print'>
                                                                {`#prnBtn { display: none }`}
                                                            </style>
                                                            <form>
                                                                <input
                                                                    type="button"
                                                                    id='prnBtn'
                                                                    value="Print"
                                                                    title="print"
                                                                    onClick={() => window.print()}
                                                                />
                                                            </form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table
                                                border="0"
                                                className="print-background1 "

                                                style={{

                                                    fontFamily: 'Cambria', fontSize: '45px', fontWeight: 'bold', height: '3260px', width: '2520px',
                                                    marginLeft: '0%',
                                                    marginTop: '0.17%',
                                                    marginRight: '0.17%',


                                                    marginBottom: '0%'
                                                }}

                                            >
                                                <tbody>
                                                    <tr height="740">
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td valign="top">
                                                            <table border="0" width="100%" cellPadding="2" cellSpacing="2">
                                                                <tbody>
                                                                    <tr>
                                                                        <td colSpan="2" align="center" style={{ fontSize: '54px' }}>
                                                                            {en.Student.coursedescription ? en.Student.coursedescription.toString().toUpperCase() : en.Student.coursedescription}
                                                                            <br />
                                                                            ({en.Student.specialization ? en.Student.specialization.toString().toUpperCase() : en.Student.specialization})
                                                                        </td>
                                                                    </tr>
                                                                    <tr height="10">
                                                                        <td width="70%" style={{ paddingLeft: '530px', textTransform: 'uppercase' }}>
                                                                            {en.Student.name} {en.Student.lastname}
                                                                        </td>
                                                                        <td style={{ paddingLeft: '150px', fontSize: '45px', textTransform: 'uppercase' }}>
                                                                            {en.Student.rollno}
                                                                        </td>
                                                                    </tr>




                                                                    <tr  >
                                                                        <td style={{ paddingTop: '10px' }} >&nbsp;</td>
                                                                    </tr>







                                                                    <tr >

                                                                        <td width="70%" style={{ paddingLeft: '670px', paddingTop: '35px', textTransform: 'uppercase' }}>
                                                                            {en.Student.fathername}
                                                                            {/* {Id.split('_')[1]}
                                                                            {en.Student.semester} */}
                                                                        </td>
                                                                        <td width="30%" style={{ paddingLeft: '150px', paddingTop: '35px' }}>
                                                                            {/* {Id.split('_')[1]} - {en.Student.semester} (Batch) */}
                                                                            {
                                                                                (Id.split('_')[1] === "1" && Id.split('_')[2] === "Year") ?
                                                                                    `(${en.Student.yr_month1}-${en.Student.yr_yr1.length > 3 ? en.Student.yr_yr1.slice(-2) : en.Student.yr_yr1}) ${Id.split('_')[1]}ST ${Id.split('_')[2]}` :
                                                                                    (Id.split('_')[1] === "2" && Id.split('_')[2] === "Year") ?
                                                                                        `(${en.Student.yr_month2}-${en.Student.yr_yr2.length > 3 ? en.Student.yr_yr2.slice(-2) : en.Student.yr_yr2}) ${Id.split('_')[1]}ND ${Id.split('_')[2]}` :
                                                                                        (Id.split('_')[1] === "3" && Id.split('_')[2] === "Year") ?
                                                                                            `(${en.Student.yr_month3}-${en.Student.yr_yr3.length > 3 ? en.Student.yr_yr3.slice(-2) : en.Student.yr_yr3}) ${Id.split('_')[1]}RD ${Id.split('_')[2]}` :
                                                                                            (Id.split('_')[1] === "4" && Id.split('_')[2] === "Year") ?
                                                                                                `(${en.Student.yr_month4}-${en.Student.yr_yr4.length > 3 ? en.Student.yr_yr4.slice(-2) : en.Student.yr_yr4}) ${Id.split('_')[1]}TH ${Id.split('_')[2]}` :

                                                                                                (Id.split('_')[1] === "1" && Id.split('_')[2] === "Semester") ?
                                                                                                    `(${en.Student.semester_month1}-${en.Student.semester_yr1.length > 3 ? en.Student.semester_yr1.slice(-2) : en.Student.semester_yr1}) ${Id.split('_')[1]}ST ${Id.split('_')[2]}` :
                                                                                                    (Id.split('_')[1] === "2" && Id.split('_')[2] === "Semester") ?
                                                                                                        `(${en.Student.semester_month2}-${en.Student.semester_yr2.length > 3 ? en.Student.semester_yr2.slice(-2) : en.Student.semester_yr2}) ${Id.split('_')[1]}ND ${Id.split('_')[2]}` :
                                                                                                        (Id.split('_')[1] === "3" && Id.split('_')[2] === "Semester") ?
                                                                                                            `(${en.Student.semester_month3}-${en.Student.semester_yr3.length > 3 ? en.Student.semester_yr3.slice(-2) : en.Student.semester_yr3}) ${Id.split('_')[1]}RD ${Id.split('_')[2]}` :
                                                                                                            (Id.split('_')[1] === "4" && Id.split('_')[2] === "Semester") ?
                                                                                                                `(${en.Student.semester_month4}-${en.Student.semester_yr4.length > 3 ? en.Student.semester_yr4.slice(-2) : en.Student.semester_yr4}) ${Id.split('_')[1]}TH ${Id.split('_')[2]}` :
                                                                                                                (Id.split('_')[1] === "5" && Id.split('_')[2] === "Semester") ?
                                                                                                                    `(${en.Student.semester_month5}-${en.Student.semester_yr5.length > 3 ? en.Student.semester_yr5.slice(-2) : en.Student.semester_yr5}) ${Id.split('_')[1]}TH ${Id.split('_')[2]}` :
                                                                                                                    (Id.split('_')[1] === "6" && Id.split('_')[2] === "Semester") ?
                                                                                                                        `(${en.Student.semester_month6}-${en.Student.semester_yr6.length > 3 ? en.Student.semester_yr6.slice(-2) : en.Student.semester_yr6}) ${Id.split('_')[1]}TH ${Id.split('_')[2]}` :
                                                                                                                        (Id.split('_')[1] === "7" && Id.split('_')[2] === "Semester") ?
                                                                                                                            `(${en.Student.semester_month7}-${en.Student.semester_yr7.length > 3 ? en.Student.semester_yr7.slice(-2) : en.Student.semester_yr7}) ${Id.split('_')[1]}TH ${Id.split('_')[2]}` :
                                                                                                                            (Id.split('_')[1] === "8" && Id.split('_')[2] === "Semester") ?
                                                                                                                                `(${en.Student.semester_month8}-${en.Student.semester_yr8.length > 3 ? en.Student.semester_yr8.slice(-2) : en.Student.semester_yr8}) ${Id.split('_')[1]}TH ${Id.split('_')[2]}` :
                                                                                                                                ''

                                                                            }

                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr><td style={{ paddingTop: '0px' }}></td></tr>
                                                    <tr height="1200" >
                                                        <td colSpan="3" valign="top" style={{ border: '1px solid transparent', paddingTop: '100px', paddingLeft: '60px' }}>
                                                            <table width="97%" align="center" cellPadding="1" cellSpacing="7" border="0">
                                                                <tbody>


                                                                    {en.Result.map((n, index) => (





                                                                        <tr >
                                                                            <td style={{ fontSize: '42px' }} width="5%" align="center">&nbsp;</td>
                                                                            <td style={{ fontSize: '42px' }} width="9%" align="center">{index + 1}</td>

                                                                            <td style={{ fontSize: '42px', paddingLeft: '2%' }} width="32%"  >{n.subject}</td>
                                                                            <td style={{ fontSize: '42px', paddingLeft: '8%' }} width="15%" align="left">100 {MaxMarks(100)}</td>
                                                                            <td style={{ fontSize: '42px', paddingLeft: '5%' }} width="15%" align="left">40 {MinMarks(40)}</td>
                                                                            <td style={{ fontSize: '42px', paddingLeft: '3%' }} width="15%" align="left">{n.subject_no} {ObtainMarks(n.subject_no)}</td>
                                                                            <td style={{ fontSize: '42px' }} width="6%" align="left"> </td>


                                                                        </tr>
                                                                    ))}

                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>









                                                    <tr><td style={{ paddingTop: '30px' }}></td></tr>

                                                    <tr style={{ paddingLeft: '40px' }}>
                                                        <td colSpan="3" valign="top" >
                                                            <table width="97%" align="top" cellPadding="1" cellSpacing="7" border="0">
                                                                <tbody>









                                                                    <tr>
                                                                        <td style={{ fontSize: '47px' }} width="5%" align="center">&nbsp;</td>
                                                                        <td style={{ fontSize: '47px' }} width="21%" align="right">&nbsp;</td>

                                                                        <td style={{ fontSize: '47px' }} width="25%" >&nbsp;</td>
                                                                        <td style={{ fontSize: '47px', paddingLeft: '6%' }} width="15%" align="left">{maxmark}</td>
                                                                        <td style={{ fontSize: '47px', paddingLeft: '3%' }} width="15%" align="left">{minmark}</td>
                                                                        <td style={{ fontSize: '47px' }} width="18%" align="left">{obtainmark}</td>
                                                                        <td style={{ fontSize: '47px' }} width="5%" align="center"></td>

                                                                    </tr>


                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>

                                                    <tr >
                                                        <td colSpan="3" valign="center" >
                                                            <table width="97%" align="center" cellPadding="1" cellSpacing="7" border="0">
                                                                <tbody>







                                                                    <tr>
                                                                        <td style={{ fontSize: '42px' }} width="5%" align="center">&nbsp;</td>
                                                                        <td style={{ fontSize: '42px' }} width="21%" align="right">{gradeGenerator((obtainmark / maxmark))}</td>

                                                                        <td style={{ fontSize: '42px' }} width="28%" >&nbsp;</td>
                                                                        <td style={{ fontSize: '42px' }} width="15%" align="center">&nbsp;</td>
                                                                        <td style={{ fontSize: '42px' }} width="12%" align="center">&nbsp;</td>
                                                                        <td style={{ fontSize: '42px' }} width="12%" align="center">&nbsp;</td>
                                                                        <td style={{ fontSize: '42px' }} width="6%" align="center"></td>

                                                                    </tr>


                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    {/* <tr><td style={{ paddingTop: '30px' }}></td></tr> */}

                                                    <tr  >
                                                        <td colSpan="3" valign="top" align="top">
                                                            <table width="90%" border="0">
                                                                <tbody>
                                                                    {/* <tr style={{ marginTop: '7px' }}></tr> */}
                                                                    <tr>
                                                                        <td width="30%" align="left">&nbsp;</td>

                                                                        <td colSpan="5" align="left" valign="top" style={{ paddingLeft: '300px', fontSize: '60px' }}>
                                                                            &nbsp;

                                                                        </td>
                                                                    </tr>

                                                                    <tr >
                                                                        {/* <td align="center" width="10%">&nbsp;</td> */}


                                                                        <td colSpan="3" width="90%" align="right" valign="top">
                                                                            <img src={`${url}/Students/new_sign.png`} height="150" alt="signature" />



                                                                        </td>
                                                                        <td width="40%">
                                                                            &nbsp;
                                                                        </td>


                                                                    </tr>


                                                                    <tr style={{ paddingLeft: '300px' }} >

                                                                        <td width="68%" align="center" valign="bottom">



                                                                            {
                                                                                (Id.split('_')[1] == "1" && Id.split('_')[2] == "Year") ?
                                                                                    (
                                                                                        `${en.Student.yr1}`
                                                                                    ) :
                                                                                    (Id.split('_')[1] == "2" && Id.split('_')[2] == "Year") ?
                                                                                        (
                                                                                            `${en.Student.yr2}`
                                                                                        )
                                                                                        :
                                                                                        (Id.split('_')[1] == "3" && Id.split('_')[2] == "Year") ?
                                                                                            (
                                                                                                `${en.Student.yr3}`
                                                                                            )
                                                                                            :
                                                                                            (Id.split('_')[1] == "4" && Id.split('_')[2] == "Year") ?
                                                                                                (
                                                                                                    `${en.Student.yr4}`
                                                                                                ) :
                                                                                                (Id.split('_')[1] == "1" && Id.split('_')[2] == "Semester") ?
                                                                                                    (
                                                                                                        `${en.Student.sem1}`
                                                                                                    ) :
                                                                                                    (Id.split('_')[1] == "2" && Id.split('_')[2] == "Semester") ?
                                                                                                        (
                                                                                                            `${en.Student.sem2}`
                                                                                                        ) :
                                                                                                        (Id.split('_')[1] == "3" && Id.split('_')[2] == "Semester") ?
                                                                                                            (
                                                                                                                `${en.Student.sem3}`
                                                                                                            ) :
                                                                                                            (Id.split('_')[1] == "4" && Id.split('_')[2] == "Semester") ?
                                                                                                                (
                                                                                                                    `${en.Student.sem4}`
                                                                                                                ) :
                                                                                                                (Id.split('_')[1] == "5" && Id.split('_')[2] == "Semester") ?
                                                                                                                    (
                                                                                                                        `${en.Student.sem5}`
                                                                                                                    ) :
                                                                                                                    (Id.split('_')[1] == "6" && Id.split('_')[2] == "Semester") ?
                                                                                                                        (
                                                                                                                            `${en.Student.sem6}`
                                                                                                                        ) :
                                                                                                                        (Id.split('_')[1] == "7" && Id.split('_')[2] == "Semester") ?
                                                                                                                            (
                                                                                                                                `${en.Student.sem7}`
                                                                                                                            ) :
                                                                                                                            (Id.split('_')[1] == "8" && Id.split('_')[2] == "Semester") ?
                                                                                                                                (
                                                                                                                                    `${en.Student.sem8}`
                                                                                                                                ) : ''
                                                                            }
                                                                        </td>

                                                                        <td align="left" width="20%">&nbsp;</td>
                                                                        <td width="20%" align="left" valign="top">&nbsp;</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div >
                                        {/* <div class="container  my-4">

                                            <div class="row my-4 mx-1">
                                                <div class="col-lg-1 ">

                                                </div>
                                                <div class="col-lg-3">
                                                    <h6>Enrollment Number</h6>
                                                </div>
                                                <div class="col-lg-4">
                                                    <h6>{en.Student.rollno}</h6>
                                                </div>




                                            </div>
                                            <div class="row my-4 mx-1">
                                                <div class="col-lg-1 ">

                                                </div>
                                                <div class="col-lg-3">
                                                    <h6>Student Name</h6>
                                                </div>
                                                <div class="col-lg-4">
                                                    <h6>{en.Student.name}</h6>
                                                </div>




                                            </div>
                                            <div class="row my-4 mx-1">
                                                <div class="col-lg-1 ">

                                                </div>
                                                <div class="col-lg-3">
                                                    <h6>Course</h6>
                                                </div>
                                                <div class="col-lg-4">
                                                    <h6>{en.Student.coursename}</h6>
                                                </div>




                                            </div>
                                            <div class="row my-4 mx-1">
                                                <div class="col-lg-2 ">

                                                </div>
                                                <div class="col-lg-3">
                                                    <h6>Specialization</h6>
                                                </div>
                                                <div class="col-lg-4">
                                                    <h6>{en.Student.specialization}</h6>
                                                </div>




                                            </div>

                                            <div class="row my-4 mx-1">
                                                <div class="col-lg-1 ">

                                                </div>
                                                <div class="col-lg-3">
                                                    <h6>{en.Student.semester}</h6>
                                                </div>
                                                <div class="col-lg-4">
                                                    <h6>{Id.split('_')[1]} - {en.Student.semester}</h6>
                                                </div>




                                            </div>



                                            <div class="row my-4 mx-1">
                                                <div class="col-lg-1 ">

                                                </div>
                                                <div class="col-lg-1">
                                                    <h5>S.No</h5>
                                                </div>
                                                <div class="col-lg-4">
                                                    <h5>Subject</h5>
                                                </div>
                                                <div class="col-lg-2">
                                                    <h5>Max. Marks</h5>
                                                </div>
                                                <div class="col-lg-2">
                                                    <h5>Min. Marks</h5>
                                                </div>
                                                <div class="col-lg-2">
                                                    <h5>
                                                        Marks Obtained
                                                    </h5>
                                                </div>



                                            </div>



                                            {en.Result.map((n, index) => (
                                                <div className="row my-2 mx-1">
                                                    <div className="col-lg-1 "></div>
                                                    <div className="col-lg-1"><h6>{index + 1}</h6></div>
                                                    <div className="col-lg-4"><h6>{n.subject}</h6></div>

                                                    <div className="col-lg-2"><h6>100 {MaxMarks(100)} </h6></div>
                                                    <div className="col-lg-2"><h6>40 {MinMarks(40)} </h6></div>
                                                    <div className="col-lg-2"><h6>{n.subject_no} {ObtainMarks(n.subject_no)} </h6></div>
                                                </div>
                                            ))}

                                            <div className="row my-2 mx-1">
                                                <div className="col-lg-1 "></div>
                                                <div className="col-lg-1"><h6></h6></div>
                                                <div className="col-lg-3"><h6></h6></div>
                                                <div className="col-lg-1"><h6>Total</h6></div>

                                                <div className="col-lg-2"><h6>{maxmark}</h6></div>
                                                <div className="col-lg-2"><h6>{minmark}</h6></div>
                                                <div className="col-lg-2"><h6>{obtainmark} Grade:{gradeGenerator((obtainmark / maxmark))} {grade} </h6></div>

                                            </div>


                                        </div> */}


                                    </>


                                ))
                            }


                        </>

                    ) : ''
            }
        </>
    )








        ;
}



export default PrintResult;