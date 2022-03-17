import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './report.css';

const Report = () => {
  const students = [
    {
      fname: 'Tiger',
      lname: 'Nixon',
      email: 't.nixon@datatables.net',
      phone: '88888888',
      class: '1',
      active: 'Yes',
    },
    {
      fname: 'Riyan',
      lname: 'alpha',
      email: 'riyan@gmail.com',
      phone: '88888888',
      class: '2',
      active: 'No',
    },
    {
      fname: 'Alex',
      lname: 'Bell',
      email: 'alexbell3@gmail.com',
      phone: '88888888',
      class: '7',
      active: 'Yes',
    },
    {
      fname: 'Max',
      lname: 'Austin',
      email: 'maxaustin@gmail.com',
      phone: '88888888',
      class: '2',
      active: 'Yes',
    },
    {
      fname: 'Pop',
      lname: 'Austin',
      email: 'popustin@gmail.com',
      phone: '88888888',
      class: '2',
      active: 'Yes',
    },
    {
      fname: 'Shane',
      lname: 'Watson',
      email: 'shane@gmail.com',
      phone: '88888888',
      class: '10',
      active: 'Yes',
    },
    {
      fname: 'Jannifier',
      lname: 'Davidson',
      email: 'Jannifier123@gmail.com',
      phone: '88888888',
      class: '12',
      active: 'No',
    },
    {
      fname: 'David',
      lname: 'Willium',
      email: 'david@gmail.com',
      phone: '88888888',
      class: '11',
      active: 'Yes',
    },
    {
      fname: 'Martin',
      lname: 'Jack',
      email: 'martinjackd@gmail.com',
      phone: '88888888',
      class: '12',
      active: 'Yes',
    },
    {
      fname: 'Zack',
      lname: 'Marvel',
      email: 'zack333@gmail.com',
      phone: '88888888',
      class: '11',
      active: 'No',
    },
    {
      fname: 'Brad',
      lname: 'Cowin',
      email: 'bradcowin@gmail.com',
      phone: '88888888',
      class: '5',
      active: 'Yes',
    },
    {
      fname: 'Brad',
      lname: 'Cowin',
      email: 'bradcowin@gmail.com',
      phone: '88888888',
      class: '5',
      active: 'Yes',
    },
  ];

  return (
    <>
      <div className='report'>
        <div className='report_cont'>
          <h1 className='mb-5 text-center'>Report</h1>
          <form>
            <div className='d-flex mt-3 flex-column flex-sm-row   justify-content-evenly align-items-center'>
              <div className='date_cont mb-3 mb-sm-0 '>
                <label htmlFor='from'>From:</label>
                <input className='ms-3' id='from' type='date' />
              </div>
              <div className='date_cont'>
                <label htmlFor='to'>To:</label>
                <input className='ms-3' id='to' type='date' />
              </div>
            </div>
          </form>
          <div className='mt-5'>
            <table
              id='records_attend'
              className='display nowrap records_table records_attend'
              style={{ width: '90%' }}
            >
              <thead>
                <tr>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>E-mail</th>
                  <th>Phone</th>
                  <th>Class</th>
                  <th>Active</th>
                  <th>Attendance</th>
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

                      <td>
                        <button
                          className='btn btn-success'
                          data-bs-toggle='modal'
                          data-bs-target='#userattend'
                        >
                          Show Attendance
                        </button>

                        <div
                          className='modal fade'
                          id='userattend'
                          aria-labelledby='exampleModalLabel'
                          aria-hidden='true'
                        >
                          <div className='modal-dialog modal-dialog-scrollable'>
                            <div className='modal-content'>
                              <div className='modal-header'>
                                <h5
                                  className='modal-title'
                                  id='exampleModalLabel'
                                >
                                  (Student Name) Attendance
                                </h5>
                                <button
                                  type='button'
                                  className='btn-close'
                                  data-bs-dismiss='modal'
                                  aria-label='Close'
                                ></button>
                              </div>
                              <div className='modal-body d-flex flex-column align-items-center'>
                                <p>
                                  02/01/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/02/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/03/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/05/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/07/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/08/2022{' '}
                                  <span className='ms-3'>Absent</span>
                                </p>
                                <p>
                                  02/09/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/10/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/11/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/14/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/15/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/16/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/17/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/18/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/21/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/22/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/23/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/24/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/25/2022 <span className='ms-3'>Leave</span>
                                </p>
                              </div>
                              <div className='modal-footer'>
                                <button
                                  type='button'
                                  className='btn btn-secondary btn-submit-close'
                                  data-bs-dismiss='modal'
                                >
                                  Close
                                </button>
                                <button
                                  type='button'
                                  className='btn btn-primary btn-submit'
                                >
                                  Generate Report
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
