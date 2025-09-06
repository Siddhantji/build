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
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { url } from '../utile/globarVariable';

const columns = [
  { id: 'serial', label: 'S.No', minWidth: 50 },
  { id: 'university', label: 'University', minWidth: 150 },
  { id: 'course', label: 'Course', minWidth: 150 },
  { id: 'specialization', label: 'Specialization', minWidth: 400 },
  { id: 'code', label: 'Code', minWidth: 120 },
  { id: 'courseFee', label: 'Course Fee', minWidth: 150 },
  { id: 'registrationFee', label: 'Registration Fee', minWidth: 150 },
  { id: 'examFee', label: 'Exam Fee', minWidth: 150 },
  { id: 'action', label: 'Action', minWidth: 100 }
];

export default function ManageSpecialization() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [specializationList, setSpecializationList] = useState([]);
  const [totalSpecializations, setTotalSpecializations] = useState(0);
  const [tocChecked, setTocChecked] = useState(false);
  const [rollNumber, setRollNumber] = useState('');

  const handleRollChange = (event) => setRollNumber(event.target.value);

  const getSpecializationData = async () => {
    try {
      const response = await axios.get(`${url}/Get-Specialization-By-Name`, {
        params: {
          name: rollNumber,
          page: page + 1,
          limit: tocChecked ? 1000000 : rowsPerPage
        }
      });
      const specializationData = response.data.records || [];
      console.log(response.data);

      const mappedRows = specializationData.map((item, index) => ({
        serial: (page * rowsPerPage) + index + 1,
        university: item.university,
        course: item.course,
        specialization: item.specialization,
        code: item.specializationcode,
        courseFee: item.coursefee,
        registrationFee: item.registrationfee,
        examFee: item.examfee,
        id: item._id
      }));
      setSpecializationList(mappedRows);
      setTotalSpecializations(response.data.total);
    } catch (error) {
      console.error("Error fetching specialization data:", error);
    }
  };

  useEffect(() => {
    getSpecializationData();
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

  const handleDelete = async (id) => {
    try {
      const response = await axios.get(`${url}/Delete-Specialization?Id=${id}`);
      if (response.data.Status) {
        alert("Specialization Successfully Deleted");
        getSpecializationData();
      } else {
        alert("Specialization could not be deleted");
      }
    } catch (error) {
      console.error("Error deleting specialization:", error);
    }
  };

  const handleEdit = (id) => navigate(`/Get-Particular-Specialization/${id}`);

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>View Specialization</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a>Manage Specialization</a></li>
              <li className="breadcrumb-item active">Specialization</li>
            </ol>
          </nav>
        </div>

        <div className="row">
          <div className="col-lg-2">
            <Checkbox
              checked={tocChecked}
              onChange={(e) => setTocChecked(e.target.checked)}
              inputProps={{ 'aria-label': 'All Records' }}
            />
            <span>All Records</span>
          </div>
          <div className="col-lg-3">
            <input
              className='form-control'
              placeholder="Enter Specialization"
              variant="outlined"
              value={rollNumber}
              fullWidth
              onChange={handleRollChange}
              onKeyDown={(e) => { if (e.key === 'Enter') getSpecializationData(); }}
            />
          </div>
        </div>

        <section className="section my-2">
          <div className="row">
            <div className="col-xxl-12">
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
                      {specializationList.length > 0 ? (
                        specializationList.map((row) => (
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
                  rowsPerPageOptions={[10, 25, 50, 100, "All"]}
                  component="div"
                  count={totalSpecializations}
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
