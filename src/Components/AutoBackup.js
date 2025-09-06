import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { url } from '../utile/globarVariable';

const columns = [
    { id: 'serial', label: 'S.No', minWidth: 50 },
    { id: 'mode', label: 'Mode', minWidth: 150 },
    { id: 'added_date', label: 'Date', minWidth: 300 },
    { id: 'filepath', label: 'Media', minWidth: 200 },
    { id: 'restore', label: 'Restore', minWidth: 130 },

];

export default function AutoBackup() {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [courseList, setCourseList] = useState([]);
    const [totalCourses, setTotalCourses] = useState(0);
    const [tocChecked, setTocChecked] = useState(false);
    const [rollNumber, setRollNumber] = useState('');

    const handleDownload1 = (filename) => {
        const link = document.createElement('a');
        link.href = `${url}/Backup/${filename}`;
        link.target = '_blank';
        link.download = filename;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const RestoreDatabase = async (Id) => {
        let a = await axios.post(`${url}Recover-Database1`, {
            Id: Id
        });
        alert("Database Successfully Restore")


    }

    const handleRollChange = (event) => setRollNumber(event.target.value);

    const getResultData = async () => {
        try {
            const response = await axios.get(`${url}/get-Database`
            );
            const courseData = response.data || [];
            console.log(response.data);

            const mappedRows = courseData.map((item, index) => ({
                serial: (page * rowsPerPage) + index + 1,
                rollNo: item.rollno,
                mode: item.mode,
                filepath: item.filepath,
                added_date: item.added_date,

                id: item.id

            }));
            setCourseList(mappedRows);
            setTotalCourses(response.data.total);
        } catch (error) {
            console.error("Error fetching result data:", error);
        }
    };

    useEffect(() => {
        getResultData();
    }, [page, rowsPerPage, tocChecked, rollNumber]);

    const handleChangePage = (event, newPage) => setPage(newPage);

    const handleChangeRowsPerPage = (event) => {
        if (event.target.value === "All") {
            setTocChecked(true);
        } else {
            setRowsPerPage(+event.target.value);
            setPage(0);
        }
    };






    return (
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Database Backup</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a>Manage Backup</a></li>
                            <li className="breadcrumb-item active">Backup</li>
                        </ol>
                    </nav>
                </div>



                <section className="section my-2" >
                    <div className="row">
                        <div className="col-xl-12">
                            <Paper style={{ width: '100%' }}>
                                <TableContainer style={{ maxHeight: 340 }}>
                                    <Table stickyHeader>
                                        <TableHead>
                                            <TableRow>
                                                {columns.map((column) => (
                                                    <TableCell
                                                        key={column.id}
                                                        style={{
                                                            minWidth: column.minWidth,
                                                            backgroundColor: '#f5f5f5', // Light gray background for headers
                                                            fontWeight: 'bold',
                                                            borderBottom: '2px solid #ddd' // Bottom border for header cells
                                                        }}
                                                    >
                                                        {column.label}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {courseList.length > 0 ? (
                                                courseList.map((row) => (
                                                    <TableRow
                                                        hover
                                                        role="checkbox"
                                                        tabIndex={-1}
                                                        key={row.id}
                                                        style={{ cursor: 'pointer' }} // Pointer cursor on row hover
                                                    >
                                                        {columns.map((column) => {


                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell
                                                                    key={column.id}
                                                                    style={{
                                                                        borderBottom: '1px solid #ddd', // Bottom border for body cells
                                                                        padding: '8px', // Add padding inside cells
                                                                    }}
                                                                >

                                                                    {column.id === 'added_date' ? (
                                                                        <>
                                                                            {new Date(value).toLocaleString('en-IN', {
                                                                                year: 'numeric',
                                                                                month: 'long',
                                                                                day: 'numeric',
                                                                                hour: 'numeric',
                                                                                minute: 'numeric',
                                                                                second: 'numeric',
                                                                                timeZoneName: 'short'
                                                                            }).split('at')[0]
                                                                            }
                                                                        </>
                                                                    ) : column.id === 'filepath' ? (
                                                                        <button className="btn btn-danger">
                                                                            <i onClick={() => handleDownload1(value)} className="fa fa-download" />
                                                                        </button>
                                                                    ) : column.id === 'restore' ? (
                                                                        <>
                                                                            <i
                                                                                // onClick={() => RestoreDatabase(row.id)}
                                                                                className='fas fa-trash-restore'
                                                                                style={{ color: 'red', opacity: '0.8', cursor: 'pointer', marginRight: '8px' }}
                                                                            />
                                                                        </>
                                                                    ) : value}
                                                                </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                ))
                                            ) : (
                                                <TableRow>
                                                    <TableCell colSpan={columns.length} align="center">
                                                        No data available
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[10, 25, 50, 100, "All"]}
                                    component="div"
                                    count={totalCourses}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </Paper>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
