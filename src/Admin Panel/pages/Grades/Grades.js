import React, { useState } from 'react';
import './grades.css';
const Grades = () => {
  const [grade, setGrade] = useState('');

  const handleSelect = (e) => {
    if (e.target.value >= 26 && e.target.value <= 30) {
      return setGrade('A');
    } else if (e.target.value > 15 && e.target.value < 26) {
      return setGrade('B');
    } else if (e.target.value > 10 && e.target.value <= 15) {
      return setGrade('C');
    } else if (e.target.value >= 1 && e.target.value <= 10) {
      return setGrade('D');
    } else {
      return setGrade('nill');
    }
  };
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const students = [
    {
      fname: 'Tiger',
      lname: 'Nixon',
      email: 't.nixon@datatables.net',
      phone: '88888888',
      class: '1',
      active: 'Yes',
      days: '26',
      grade: 'A',
    },
    {
      fname: 'Riyan',
      lname: 'alpha',
      email: 'riyan@gmail.com',
      phone: '88888888',
      class: '2',
      active: 'No',
      days: '23',
      grade: 'B',
    },
    {
      fname: 'Alex',
      lname: 'Bell',
      email: 'alexbell3@gmail.com',
      phone: '88888888',
      class: '7',
      active: 'Yes',
      days: '16',
      grade: 'C',
    },
    {
      fname: 'Max',
      lname: 'Austin',
      email: 'maxaustin@gmail.com',
      phone: '88888888',
      class: '2',
      active: 'Yes',
      days: '10',
      grade: 'D',
    },
    {
      fname: 'Pop',
      lname: 'Austin',
      email: 'popustin@gmail.com',
      phone: '88888888',
      class: '2',
      active: 'Yes',
      days: '10',
      grade: 'D',
    },
    {
      fname: 'Shane',
      lname: 'Watson',
      email: 'shane@gmail.com',
      phone: '88888888',
      class: '10',
      active: 'Yes',
      days: '30',
      grade: 'A',
    },
    {
      fname: 'Jannifier',
      lname: 'Davidson',
      email: 'Jannifier123@gmail.com',
      phone: '88888888',
      class: '12',
      active: 'No',
      days: '21',
      grade: 'B',
    },
    {
      fname: 'David',
      lname: 'Willium',
      email: 'david@gmail.com',
      phone: '88888888',
      class: '11',
      active: 'Yes',
      days: '24',
      grade: 'B',
    },
    {
      fname: 'Martin',
      lname: 'Jack',
      email: 'martinjackd@gmail.com',
      phone: '88888888',
      class: '12',
      active: 'Yes',
      days: '13',
      grade: 'C',
    },
    {
      fname: 'Zack',
      lname: 'Marvel',
      email: 'zack333@gmail.com',
      phone: '88888888',
      class: '11',
      active: 'No',
      days: '25',
      grade: 'B',
    },
    {
      fname: 'Brad',
      lname: 'Cowin',
      email: 'bradcowin@gmail.com',
      phone: '88888888',
      class: '5',
      active: 'Yes',
      days: '7',
      grade: 'D',
    },
    {
      fname: 'Brad',
      lname: 'Cowin',
      email: 'bradcowin@gmail.com',
      phone: '88888888',
      class: '5',
      active: 'Yes',
      days: '27',
      grade: 'A',
    },
  ];
  return (
    <>
      <div className='grades'>
        <div className='grades_cont'>
          <h1 className='text-center'>Records</h1>
          <table id='grades_table' className='display nowrap grades_table'>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>E-mail</th>
                <th>Phone</th>
                <th>Class</th>
                <th>Active</th>
                <th>Days</th>
                <th>Grade</th>
                <th>Edit</th>
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
                    <td>{e.days}</td>
                    <td>{e.grade}</td>
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
                                Edit Grades
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
                                  <p>
                                    10 days = <span className='ms-3'>D</span>
                                  </p>
                                  <p>
                                    15 days = <span className='ms-3'>C</span>
                                  </p>
                                  <p>
                                    25 days = <span className='ms-3'>B</span>
                                  </p>
                                  <p>
                                    30 days = <span className='ms-3'>A</span>
                                  </p>
                                </div>
                                <div className='mb-3 d-flex flex-column'>
                                  <select
                                    id='selectatt'
                                    onChange={handleSelect}
                                  >
                                    {days.map((e, index) => {
                                      return <option>{e}</option>;
                                    })}
                                  </select>
                                </div>
                                <div>
                                  <h1>Grade: {grade}</h1>
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

export default Grades;
