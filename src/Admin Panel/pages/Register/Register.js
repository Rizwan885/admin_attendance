import React from 'react';
import { NavLink } from 'react-router-dom';
import './register.css';
const Register = () => {
  return (
    <>
      <div className='reg'>
        <div className='reg__cont'>
          <h1 className='mb-5 text-center'>
            Admin Register <i class='fa-solid fa-user ms-4'></i>
          </h1>
          <form action='' className='form-reg'>
            <div class='mb-5 form-input'>
              <input type='text' id='floatingInput' placeholder='Full Name' />
            </div>
            <div class='mb-5 form-input'>
              <input type='email' id='floatingInput' placeholder='Email' />
            </div>
            <div class='form-input'>
              <input
                type='password'
                class='  mb-5'
                id='floatingPassword'
                placeholder='Password'
              />
            </div>
            <div className='mb-5 d-flex justify-content-around align-items-center'>
              <button id='reg-btn' className='btn px-5 py-2'>
                Register
              </button>
              <NavLink to='/login' id='forget'>
                Already have account?
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
