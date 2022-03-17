import React from 'react';
import './login.css';
import { NavLink } from 'react-router-dom';
const Login = () => {
  return (
    <>
      <div className='login'>
        <div className='login__cont'>
          <h1 className='mb-5 text-center'>
            Admin Login <i class='fa-solid fa-user ms-4'></i>
          </h1>
          <form action='' className='form-login'>
            <div class='mb-5 form-input'>
              <input
                type='email'
                id='floatingInput'
                placeholder='name@example.com'
              />
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
              <a id='login-btn' href='/admin' className='btn px-5 py-2'>
                Login
              </a>
              <span
                style={{ cursor: 'pointer' }}
                data-bs-toggle='modal'
                data-bs-target='#recover'
                id='forget'
              >
                Forgot Password?
              </span>
              <div className='modal' id='recover'>
                <div class='modal-dialog modal-dialog-centered'>
                  <div class='modal-content'>
                    <div class='modal-header'>
                      <h5 class='modal-title' id='exampleModalLabel'>
                        Recover Password
                      </h5>
                      <button
                        type='button'
                        class='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                      ></button>
                    </div>
                    <div class='modal-body'>
                      <form>
                        <div class='mb-3'>
                          <label for='exampleInputEmail1' class='form-label'>
                            Email address
                          </label>
                          <input
                            type='email'
                            class='form-control'
                            id='exampleInputEmail1'
                            aria-describedby='emailHelp'
                          />
                          <div
                            id='emailHelp'
                            className='form-text text-success'
                          >
                            Password recovery link has been sent to your Email
                          </div>
                        </div>
                        <button
                          style={{
                            background:
                              'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                            fontSize: '1.3rem',
                          }}
                          type='submit'
                          class='w-100  btn btn-primary'
                        >
                          Recover
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NavLink to='/register' className='account btn'>
              Create Account
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
