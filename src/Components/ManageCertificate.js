import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { url } from '../utile/globarVariable';

const columns = [
    { id: 'Id', label: 'S.No', minWidth: 70 },
    { id: 'sess_name', label: 'Last Year', minWidth: 70 },
    { id: 'year', label: 'Year', minWidth: 50 },
    { id: 'serial', label: 'Serial', minWidth: 50, align: 'right' },
    { id: 'action', label: 'Action', minWidth: 50, align: 'right' }
];

export default function ManageCertificate() {
    const navigate = useNavigate();
    const [page, setPage] = useState(0); // For pagination control
    const [rowsPerPage, setRowsPerPage] = useState(10); // Rows per page
    const [rows, setRows] = useState([]); // Fetched session data
    const [totalRows, setTotalRows] = useState(0); // Total number of rows for pagination
    const [tocChecked, setTocChecked] = useState(false);
    const [rollNumber, setRollNumber] = useState(''); // Filter input value

    const handleRollChange = (event) => {
        setRollNumber(event.target.value);
    };

    const getSessionData = async () => {
        try {
            const response = await axios.get(`${url}/get-Certificates`);

            const sessionData = response.data || []; // Assuming 'records' key holds the data
            const mappedRows = sessionData.map((item, index) => ({
                Id: (page * rowsPerPage) + index + 1,
                sess_name: item.sess_name,
                year: item.year,
                serial: item.serial,
                id: item.id // Assuming each item has an 'id'
            }));

            setRows(mappedRows); // Set fetched data into state
            setTotalRows(response.data.total); // Set total rows count for pagination
        } catch (error) {
            console.error("Error fetching session data:", error);
        }
    };

    useEffect(() => {
        getSessionData();
    }, [page, rowsPerPage, tocChecked, rollNumber]); // Added rollNumber as a dependency

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0); // Reset to first page on rows per page change
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.get(`${url}/delete-Certificates?Id=${id}`);
            alert("Certificate Successfully Deleted");
            getSessionData();

        } catch (error) {
            console.error("Error deleting session:", error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/Get-Particular-Session/${id}`);
    };

    return (
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>View Certificate</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a>Manage Certificate</a></li>
                            <li className="breadcrumb-item active">Certificate</li>
                        </ol>
                    </nav>
                </div>

                <section className="section my-3" >

                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-10 col-sm-12 col-xsm-12">

                            <Paper style={{ width: '100%' }}>
                                <TableContainer style={{ maxHeight: 500 }}>

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
                                            {rows.length > 0 ? (
                                                rows.map((row) => (
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
                                                                    {
                                                                        column.id === 'action' ? (
                                                                            <>
                                                                                <i
                                                                                    onClick={() => handleDelete(row.id)}
                                                                                    className='fa fa-trash'
                                                                                    style={{ color: 'red', opacity: '0.8', cursor: 'pointer', marginRight: '8px' }}
                                                                                />
                                                                                <i
                                                                                    onClick={() => handleEdit(row.id)}
                                                                                    className='fa fa-edit'
                                                                                    style={{ color: 'blue', opacity: '0.8', cursor: 'pointer', marginRight: '8px' }}
                                                                                />

                                                                            </>
                                                                        ) : value
                                                                    }
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
                                    rowsPerPageOptions={[10, 25, 100]}
                                    component="div"
                                    count={totalRows}
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
