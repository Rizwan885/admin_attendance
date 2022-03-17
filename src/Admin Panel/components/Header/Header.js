import React, { useState } from 'react';
import profilepic from '../../assets/images/rm.png'; //Rounded Image
import svg from '../../assets/images/svg.png'; //Rounded Image
// import profilepic from '../../assets/images/rmr.png'; // normal Image
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <>
      <header className='adminheader '>
        <div className='container '>
          <nav className='nav d-flex  justify-content-between align-items-center'>
            <button className='hamburger' id='admin-btn-show'>
              <i className='btn-icon fa-solid fa-bars'></i>
            </button>

            <h1 className='ms-5 ' id='nav-heading'>
              Admin Panel
            </h1>
            <ul>
              <li>
                <NavLink className={'adminNavLink'} to='/login'>
                  Logout
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id='admin_sidebar' className='hide'>
        <div>
          <button className='hamburger' id='admin-btn-close'>
            <i className='btn-icon  fa-solid fa-xmark'></i>
          </button>
          <div className='admin_sidebar__cont'>
            <div className='admin_sidebar__info pt-5 '>
              <div className='info_box'>
                <img className='img-fluid ' src={profilepic} />
                <h1>Rizwan Minhas</h1>
                <a className='edit btn ' href='/editadmin'>
                  <i class='fa-solid fa-pen-to-square'></i>
                </a>
              </div>
            </div>
            <img className='img-fluid' src={svg} />
            <div className='admin_sidebar__content'>
              <ul className='  admin_sidebar__content-list'>
                <li className='mb-5'>
                  <a className='NavLink' href='/'>
                    Dashboard
                  </a>
                </li>
                <li className='mb-5'>
                  <a className='NavLink' href='/viewrecords'>
                    View
                  </a>
                </li>
                <li className='mb-5'>
                  <a className='NavLink' href='/report'>
                    Report
                  </a>
                </li>
                <li className='mb-5'>
                  <a className='NavLink' href='/systemreport'>
                    System Report
                  </a>
                </li>
                <li className='mb-5'>
                  <a className='NavLink' href='/grades'>
                    Grades
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
