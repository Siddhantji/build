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
import { TextField } from '@mui/material';
import { url } from '../utile/globarVariable';

const columns = [
  { id: 'serial', label: 'S.No', minWidth: 50 },
  { id: 'subject', label: 'Subject', minWidth: 450 },
  { id: 'course', label: 'Course Name', minWidth: 150 },
  { id: 'specialization', label: 'Specialization', minWidth: 400 },
  { id: 'duration', label: 'Duration', minWidth: 130 },

  { id: 'action', label: 'Action', minWidth: 100 }
];

export default function ManageSubject() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [subjectList, setSubjectList] = useState([]);
  const [totalSubjects, setTotalSubjects] = useState(0);
  const [tocChecked, setTocChecked] = useState(false);
  const [rollNumber, setRollNumber] = useState('');

  const handleRollChange = (event) => setRollNumber(event.target.value);

  const getSubjectData = async () => {
    try {
      const response = await axios.get(`${url}/Get-Subject-By-Name`, {
        params: {
          name: rollNumber,
          page: page + 1,
          limit: tocChecked ? 1000000 : rowsPerPage
        }
      });
      const subjectData = response.data.records || [];

      const mappedRows = subjectData.map((item, index) => ({
        serial: (page * rowsPerPage) + index + 1,
        subject: item.subject,
        course: item.coursetype,
        specialization: item.specialization,
        duration: `${item.duration} ${item.semester}`,

        id: item._id
      }));
      setSubjectList(mappedRows);
      setTotalSubjects(response.data.total);
    } catch (error) {
      console.error("Error fetching subject data:", error);
    }
  };

  useEffect(() => {
    getSubjectData();
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
      const response = await axios.get(`${url}/Delete-Subject?Id=${id}`);
      if (response.data.Status) {
        alert("Subject Successfully Deleted");
        getSubjectData();
      } else {
        alert("Subject could not be deleted");
      }
    } catch (error) {
      console.error("Error deleting subject:", error);
    }
  };

  const handleEdit = (id) => navigate(`/Get-Particular-Subject/${id}`);

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>View Subject</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a>Manage Subject</a></li>
              <li className="breadcrumb-item active">Subject</li>
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
              placeholder="Enter Subject"
              variant="outlined"
              value={rollNumber}

              onChange={handleRollChange}
              onKeyDown={(e) => { if (e.key === 'Enter') getSubjectData(); }}
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
                      {subjectList.length > 0 ? (
                        subjectList.map((row) => (
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
                {!tocChecked && (
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100, { label: 'All', value: 'All' }]}
                    component="div"
                    count={totalSubjects}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                )}
              </Paper>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
