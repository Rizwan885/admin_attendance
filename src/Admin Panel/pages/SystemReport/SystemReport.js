import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './systemreport.css';

const SystemReport = () => {
  // Note: This module has students record of all classes
  // Admin can either print individual class record or all classes record in one page in tabular form or extract it in Excel File
  const students = [
    {
      fname: 'Tiger',
      lname: 'Nixon',
      email: 't.nixon@datatables.net',
      phone: '88888888',
      class: '10',
      active: 'Yes',
    },
    {
      fname: 'Riyan',
      lname: 'alpha',
      email: 'riyan@gmail.com',
      phone: '88888888',
      class: '10',
      active: 'No',
    },
    {
      fname: 'Alex',
      lname: 'Bell',
      email: 'alexbell3@gmail.com',
      phone: '88888888',
      class: '10',
      active: 'Yes',
    },
    {
      fname: 'Max',
      lname: 'Austin',
      email: 'maxaustin@gmail.com',
      phone: '88888888',
      class: '10',
      active: 'Yes',
    },
    {
      fname: 'Pop',
      lname: 'Austin',
      email: 'popustin@gmail.com',
      phone: '88888888',
      class: '10',
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
      class: '10',
      active: 'No',
    },
    {
      fname: 'David',
      lname: 'Willium',
      email: 'david@gmail.com',
      phone: '88888888',
      class: '10',
      active: 'Yes',
    },
    {
      fname: 'Martin',
      lname: 'Jack',
      email: 'martinjackd@gmail.com',
      phone: '88888888',
      class: '10',
      active: 'Yes',
    },
    {
      fname: 'Zack',
      lname: 'Marvel',
      email: 'zack333@gmail.com',
      phone: '88888888',
      class: '10',
      active: 'No',
    },
    {
      fname: 'Brad',
      lname: 'Cowin',
      email: 'bradcowin@gmail.com',
      phone: '88888888',
      class: '10',
      active: 'Yes',
    },
    {
      fname: 'Brad',
      lname: 'Cowin',
      email: 'bradcowin@gmail.com',
      phone: '88888888',
      class: '10',
      active: 'Yes',
    },
  ];

  return (
    <>
      <div className='systemreport'>
        <div className='systemreport_cont'>
          <div className='sysinfo mb-5 d-flex flex-column flex-sm-row justify-content-evenly align-items-center'>
            <h1>Complete System Report</h1>
            <button id='btn_print' className='btn w-25'>
              Print
            </button>
          </div>

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
              <div className='date_cont'>
                <label htmlFor='to'>Class:</label>
                <select className='ms-3 mt-sm-0 mt-4 classes'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option selected>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
            </div>
          </form>
          <div className='mt-5'>
            <table
              id='systemreport_attend'
              className='display nowrap  systemreport_attend'
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
                  <th>Presents</th>
                  <th>Absents</th>
                  <th>Leaves</th>
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
                          className='btn btn-success btn-att'
                          data-bs-toggle='modal'
                          data-bs-target='#presentattend'
                        >
                          Presents
                        </button>

                        <div
                          className='modal fade'
                          id='presentattend'
                          aria-labelledby='exampleModalLabel'
                          aria-hidden='true'
                        >
                          <div className='modal-dialog'>
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
                                  02/04/2022{' '}
                                  <span className='ms-3'>Present</span>
                                </p>
                                <p>
                                  02/05/2022{' '}
                                  <span className='ms-3'>Present</span>
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
                                  02/12/2022{' '}
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
                                  02/19/2022{' '}
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
                                <h3>
                                  Total: <span className='ms-3'>19</span>
                                </h3>
                              </div>
                              <div className='modal-footer'>
                                <button
                                  type='button'
                                  className='btn btn-secondary btn-submit-close'
                                  data-bs-dismiss='modal'
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button
                          className='btn btn-success btn-att'
                          data-bs-toggle='modal'
                          data-bs-target='#absentattend'
                        >
                          Absents
                        </button>
                        <div
                          className='modal fade'
                          id='absentattend'
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
                                  (Student Name) Attendance
                                </h5>
                                <button
                                  type='button'
                                  className='btn-close'
                                  data-bs-dismiss='modal'
                                  aria-label='Close'
                                ></button>
                              </div>
                              <div
                                className='modal-body d-flex flex-column align-items-center'
                                style={{ height: '100vh', padding: '20px' }}
                              >
                                <p>
                                  02/03/2022{' '}
                                  <span className='ms-3'>Absent</span>
                                </p>
                                <p>
                                  03/08/2022{' '}
                                  <span className='ms-3'>Absent</span>
                                </p>

                                <h3>
                                  Total: <span className='ms-3'>02</span>
                                </h3>
                              </div>
                              <div className='modal-footer'>
                                <button
                                  type='button'
                                  className='btn btn-secondary btn-submit-close'
                                  data-bs-dismiss='modal'
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button
                          className='btn btn-success btn-att'
                          data-bs-toggle='modal'
                          data-bs-target='#leavesattend'
                        >
                          Leaves
                        </button>
                        <div
                          className='modal fade'
                          id='leavesattend'
                          aria-labelledby='exampleModalLabel'
                          aria-hidden='true'
                        >
                          <div className='modal-dialog'>
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
                              <div
                                className='modal-body d-flex flex-column align-items-center'
                                style={{ height: '100vh', padding: '20px' }}
                              >
                                <p>
                                  02/02/2022{' '}
                                  <span className='ms-3'>Approved Leave</span>
                                </p>
                                <p>
                                  02/08/2022{' '}
                                  <span className='ms-3'>Approved Leave</span>
                                </p>
                                <p>
                                  02/15/2022{' '}
                                  <span className='ms-3'>Approved Leave</span>
                                </p>
                                <p>
                                  02/25/2022{' '}
                                  <span className='ms-3'>Pending Leave</span>
                                </p>
                                <p>
                                  03/02/2022{' '}
                                  <span className='ms-3'>Pending Leave</span>
                                </p>
                                <h3>
                                  Total: <span className='ms-3'>05</span>
                                </h3>
                              </div>
                              <div className='modal-footer'>
                                <button
                                  type='button'
                                  className='btn btn-secondary btn-submit-close'
                                  data-bs-dismiss='modal'
                                >
                                  Close
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

export default SystemReport;
