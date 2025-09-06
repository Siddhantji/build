import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { url } from '../utile/globarVariable';

const columns = [
  { id: 'serial', label: 'S.No', minWidth: 50 },
  { id: 'rollno', label: 'Roll No', minWidth: 100 },
  { id: 'name', label: 'Name', minWidth: 200 },
  { id: 'fathername', label: 'Father Name', minWidth: 300 },
  { id: 'dob', label: 'DOB', minWidth: 140 },
  { id: 'mobile', label: 'Mobile', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 150 },
  { id: 'course', label: 'Course', minWidth: 150 },
  { id: 'specialization', label: 'Specialization', minWidth: 320 },
  { id: 'exam', label: 'Exam', minWidth: 100 },
  { id: 'action', label: 'Action', minWidth: 100 }
];

export default function ManageStudent() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [tocChecked, setTocChecked] = useState(false);
  const [rollNumber, setRollNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

  const handleRollChange = (event) => setRollNumber(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleDobChange = (event) => setDob(event.target.value);

  const getStudentData = async () => {

    try {
      const response = await axios.get(`${url}/get-Student`, {
        params: {
          page: page + 1,
          size: rowsPerPage,
          rollno: rollNumber,
          email: email,
          dob: dob,
          allRecords: tocChecked
        }
      });
      const studentData = response.data.records || [];
      const mappedRows = studentData.map((item, index) => ({
        serial: (page * rowsPerPage) + index + 1,
        rollno: item.rollno,
        name: `${item.name} ${item.lastname == null ? '' : item.lastname}`,

        fathername: item.fathername,
        dob: item.dob,
        mobile: item.mobile,
        email: item.email,
        course: item.course,
        specialization: item.specialization,
        exam: item.exam,
        id: item._id
      }));
      setRows(mappedRows);
      setTotalRows(response.data.total);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    getStudentData();
  }, [page, rowsPerPage, tocChecked, rollNumber, email, dob]);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    if (event.target.value == "All") {
      setTocChecked(true);

    }
    else {
      setRowsPerPage(+event.target.value);
      setPage(0);
    }

  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.get(`${url}/Delete-Student?Id=${id}`);
      if (response.data.Status) {
        alert("Student Successfully Deleted");
        getStudentData();
      } else {
        alert("Student could not be deleted");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleEdit = (id) => navigate(`/Get-Particular-Student/${id}`);

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>View Student</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a>Manage Student</a></li>
              <li className="breadcrumb-item active">Students</li>
            </ol>
          </nav>
        </div>
        <div className="row" >
          <div className="col-lg-2">
            <Checkbox
              checked={tocChecked}
              onChange={(e) => setTocChecked(e.target.checked)}
              inputProps={{ 'aria-label': 'All Records' }}
            />
            <span>All Records</span>
          </div>
          <div className="col-lg-3" >
            <input
              style={{}}
              placeholder="Roll No"
              variant="outlined"
              value={rollNumber}
              className='form-control'
              onChange={handleRollChange}
              onKeyDown={(e) => { if (e.key === 'Enter') getStudentData(); }}
              onBlur={getStudentData}

            />
          </div>
          <div className="col-lg-3">
            <input
              placeholder="Email"
              variant="outlined"
              className='form-control'
              value={email}
              onChange={handleEmailChange}
              onKeyDown={(e) => { if (e.key === 'Enter') getStudentData(); }}
              onBlur={getStudentData}

            />
          </div>
          <div className="col-lg-3">

            <input
              placeholder="DOB"
              className='form-control'
              variant="outlined"
              value={dob}
              onChange={handleDobChange}
              onKeyDown={(e) => { if (e.key === 'Enter') getStudentData(); }}
              onBlur={getStudentData}

            />
          </div>
        </div>
        <section className="section my-2">
          <div className="row">
            <div className="col-xxl-12">
              <Paper style={{ width: '100%' }}>
                <TableContainer style={{ maxHeight: 520 }}>

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
                                          // onClick={() => handleDelete(row.id)}
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
                  rowsPerPageOptions={[10, 25, 50, 100, "All"]}
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
