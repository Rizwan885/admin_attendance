import React from 'react';
import './records.css';
const Records = () => {
  const students = [
    {
      fname: 'Tiger',
      lname: 'Nixon',
      email: 't.nixon@datatables.net',
      phone: '88888888',
      class: '1',
      active: 'Yes',
      attendance: 'Present',
    },
    {
      fname: 'Riyan',
      lname: 'alpha',
      email: 'riyan@gmail.com',
      phone: '88888888',
      class: '2',
      active: 'No',
      attendance: 'Present', //student logout after marking attendance
    },
    {
      fname: 'Alex',
      lname: 'Bell',
      email: 'alexbell3@gmail.com',
      phone: '88888888',
      class: '7',
      active: 'Yes',
      attendance: 'Absent',
    },
    {
      fname: 'Max',
      lname: 'Austin',
      email: 'maxaustin@gmail.com',
      phone: '88888888',
      class: '2',
      active: 'Yes',
      attendance: 'Present',
    },
    {
      fname: 'Pop',
      lname: 'Austin',
      email: 'popustin@gmail.com',
      phone: '88888888',
      class: '2',
      active: 'Yes',
      attendance: 'Present',
    },
    {
      fname: 'Shane',
      lname: 'Watson',
      email: 'shane@gmail.com',
      phone: '88888888',
      class: '10',
      active: 'Yes',
      attendance: 'Absent', // Student logged in but not noarked attendance
    },
    {
      fname: 'Jannifier',
      lname: 'Davidson',
      email: 'Jannifier123@gmail.com',
      phone: '88888888',
      class: '12',
      active: 'No',
      attendance: 'Leave',
    },
    {
      fname: 'David',
      lname: 'Willium',
      email: 'david@gmail.com',
      phone: '88888888',
      class: '11',
      active: 'Yes',
      attendance: 'Present',
    },
    {
      fname: 'Martin',
      lname: 'Jack',
      email: 'martinjackd@gmail.com',
      phone: '88888888',
      class: '12',
      active: 'Yes',
      attendance: 'Leave',
    },
    {
      fname: 'Zack',
      lname: 'Marvel',
      email: 'zack333@gmail.com',
      phone: '88888888',
      class: '11',
      active: 'No',
      attendance: 'Absent',
    },
    {
      fname: 'Brad',
      lname: 'Cowin',
      email: 'bradcowin@gmail.com',
      phone: '88888888',
      class: '5',
      active: 'Yes',
      attendance: 'Present',
    },
    {
      fname: 'Brad',
      lname: 'Cowin',
      email: 'bradcowin@gmail.com',
      phone: '88888888',
      class: '5',
      active: 'Yes',
      attendance: 'Leave',
    },
  ];
  return (
    <>
      <div className='records'>
        <div className='record_cont'>
          <h1 className='text-center'>Records</h1>

          <table id='records_table' className='display nowrap records_table'>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>E-mail</th>
                <th>Phone</th>
                <th>Class</th>
                <th>Active</th>
                <th>Attendance</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {students.map((e, index) => {
                return (
                  <tr>
                    <td>{e.fname}</td>
                    <td>{e.lname}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td>{e.class}</td>
                    <td>{e.active}</td>
                    <td>{e.attendance}</td>
                    <td>
                      <button
                        className='btn btn-success'
                        data-bs-toggle='modal'
                        data-bs-target='#edituser'
                      >
                        Edit
                      </button>

                      <div
                        className='modal'
                        id='edituser'
                        aria-labelledby='exampleModalLabel'
                        aria-hidden='true'
                      >
                        <div className='modal-dialog '>
                          <div className='modal-content'>
                            <div className='modal-header'>
                              <h5
                                className='modal-title'
                                id='exampleModalLabel'
                              >
                                Edit Record
                              </h5>
                              <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'
                              ></button>
                            </div>
                            <form>
                              <div
                                className='modal-body'
                                style={{ height: '60vh', padding: '20px' }}
                              >
                                <div className='mb-3'>
                                  <label for='fame' className='form-label'>
                                    First Name
                                  </label>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id='fname'
                                    aria-describedby='emailHelp'
                                  />
                                </div>
                                <div className='mb-3'>
                                  <label for='lname' className='form-label'>
                                    Last Name
                                  </label>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id='lname'
                                    aria-describedby='emailHelp'
                                  />
                                </div>
                                <div className='mb-3'>
                                  <label for='email' className='form-label'>
                                    Email address
                                  </label>
                                  <input
                                    type='email'
                                    className='form-control'
                                    id='email'
                                    aria-describedby='emailHelp'
                                  />
                                </div>
                                <div className='mb-3'>
                                  <label for='phone' className='form-label'>
                                    Phone
                                  </label>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id='phone'
                                    aria-describedby='emailHelp'
                                  />
                                </div>
                                <div className='mb-3'>
                                  <label for='class' className='form-label'>
                                    Class
                                  </label>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id='class'
                                    aria-describedby='emailHelp'
                                  />
                                </div>
                                <div className='mb-3 d-flex flex-column'>
                                  <label
                                    for='attendance'
                                    className='form-label mb-3'
                                  >
                                    Attendance
                                  </label>
                                  <select id='selectatt'>
                                    <option>Present</option>
                                    <option>Absent</option>
                                    <option>Leave</option>
                                  </select>
                                </div>
                              </div>
                              <div className='modal-footer'>
                                <button
                                  type='button'
                                  className='btn  btn-submit-close btn-secondary'
                                  data-bs-dismiss='modal'
                                >
                                  Close
                                </button>
                                <button
                                  type='submit'
                                  className='btn btn-primary btn-submit'
                                >
                                  Save changes
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Records;
