import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { url } from '../utile/globarVariable';


const Viewcertificate = ({ certificateno, studentname, fathername, course, specialization, grade, sessionName, issueDate, examMonth, year, certificateIssue }) => {
    const [semyear4, setSemyear4] = useState('');
    const { Id } = useParams();
    let enroll = Id.split('.')[0] + '/' + Id.split('.')[1] + '/' + Id.split('.')[2] + '/' + Id.split('.')[3];

    const [semesterCount, setSemesterCount] = useState(0);
    const [yearCount, setYearCount] = useState(0);


    const [userdata, setuserdata] = useState(
        {
            rollno: '',
            lname: '',
            certificateno: '',
            grade:'',
            name: '',
            fname: '',
            years: '',
            course: '',
            specializations: '',
            grade: '',
            session: '',
            issueDate: '',

        }
    )
    const getData = async () => {
        let a = await axios.get(`${url}/Get-Student-By-Roll-Noa?rollno=${enroll}`);

        let courseid = '';
        let specializationid = '';
        let sessionid = '';
        let lname = '';
        let grade='';


        let newUserData = {};

        for (let i = 0; i < a.data.length; i++) {
            courseid = a.data[i].course;
            specializationid = a.data[i].specialization;
            sessionid = a.data[i].session;
            lname = a.data[i].lastname;
            grade=a.data[i].Grade;






            let b = await axios.get(`${url}/get-Particular-Course?Id=${courseid}`);

            for (let j = 0; j < b.data.length; j++) {
                newUserData = {
                    ...newUserData,
                    course: b.data[j].coursedescription
                };
            }


            newUserData = {
                ...newUserData,
                rollno: enroll,
                grade:grade,
                lname: lname,
                certificateno: a.data[i].certificate,
                certificateIssue: a.data[i].certificate_issue,
                name: a.data[i].name,
                fname: a.data[i].fathername
            };
        }


        let c = await axios.get(`${url}/get-Particular-Specialization?Id=${specializationid}`);

        for (let k = 0; k < c.data.length; k++) {
            newUserData = {
                ...newUserData,
                specializations: c.data[k].specialization
            };
        }

        let d = await axios.get(`${url}/get-Particular-Session?Id=${sessionid}`);


        for (let k = 0; k < d.data.length; k++) {
            newUserData = {
                ...newUserData,
                session: d.data[k].session
            };
        }


        setuserdata(newUserData);
    }

    useEffect(() => {
        const fetchData = async () => {
            await getData();
        }
        fetchData();
    }, [Id]);

    const handlePrint = () => {
        window.print();
    };
    const numberToWord = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight"
    };
    const convertNumberToWord = (num) => {
        return numberToWord[num] || num;
    }
    return (
        <div
            className="print-background PrintBg"
            style={{
                width: '100%',
                height: '2750px'
            }}
        >

            <table
                border="0"
                cellpadding="2"
                cellspacing="2"
                align="center"
                style={{
                    fontSize: '38px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontFamily: 'Cambria',
                    backgroundRepeat: 'no-repeat',
                    width: '1300px',
                    marginLeft: '20%'

                }}
            >
                <tbody>
                    <tr height="630">
                        <td colSpan="0">&nbsp;</td>
                    </tr>

                    <tr align="left">
                        <td width="60%" style={{ paddingLeft: '210px', paddingTop: '180px' }}>{userdata.rollno}</td>
                        <td width="40%" style={{ paddingLeft: '210px', paddingTop: '165px' }}>{userdata.certificateno}</td>
                    </tr>
                    <tr height="300">
                        <td colSpan="2">&nbsp;</td>
                    </tr>


                    <tr align="">
                        <td colSpan="2" style={{ paddingLeft: '440px' }}>{userdata.name} {userdata.lname}</td>
                    </tr>
                    <tr height="60">
                        <td colSpan="2">&nbsp;</td>
                    </tr>
                    <tr height="110">
                        <td colSpan="2" style={{ paddingLeft: '440px' }}>{userdata.fname}</td>
                    </tr>
                    <tr height="50">
                        <td colSpan="2">&nbsp;</td>
                    </tr>
                    <tr height="50">




                        <td colSpan="2" style={{ paddingLeft: '430px' }}>
                            {convertNumberToWord(parseInt(userdata.session.split('-')[1] - userdata.session.split('-')[0]))}
                        </td>
                    </tr>
                    <br />
                    <br />
                    <br />




                    <tr height="100" align="left">
                        <td colSpan="2" style={{ paddingTop: '67px' }}>{userdata.course}</td>
                    </tr>
                    <tr height="30">
                        <td colSpan="1">&nbsp;</td>
                    </tr>
                    <tr height="63">
                        <td colSpan="2" style={{ paddingLeft: '470px', paddingTop: '7px' }}>{userdata.specializations}</td>
                    </tr>
                    <tr height="75">
                        <td colSpan="1" >&nbsp;</td>
                    </tr>
                    <tr height="60">
                        <td colSpan="1" style={{ paddingLeft: '10px', fontSize: '44px' }}>{userdata.grade}</td>
                    </tr>
                    <tr height="100">
                        <td colSpan="2" style={{ paddingLeft: '400px' }}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: '170px', paddingTop: '100px' }} height="100" valign="bottom">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>SESSION : </td>
                                        <td>{userdata.session}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    {/* <tr height="160">
                        <td colSpan="1" >&nbsp;</td>
                    </tr> */}
                    {userdata.certificateIssue === '' || userdata.certificateIssue === ' Apr 1970' ? (
                        <tr height="35">
                            <td style={{ paddingLeft: '300px', paddingTop: '30px' }} valign="bottom">
                                {issueDate} {examMonth} {year}
                            </td>
                        </tr>
                    ) : (
                        <tr height="35">
                            <td style={{ paddingLeft: '350px', paddingTop: '30px' }} valign="bottom">
                                {userdata.certificateIssue}
                            </td>
                        </tr>
                    )}
                    <tr height="150">
                        <td colSpan="2" style={{ paddingLeft: '400px' }}>&nbsp;</td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};

export default Viewcertificate;
