import React from 'react';
import './editinfo.css';
const EditInfo = () => {
  return (
    <>
      <div className='editinfo'>
        <div className='editinfo_cont'>
          <h1 className='text-center'>Edit Profile</h1>
          <form>
            <div className='form-div '>
              <div className='container form_cont '>
                {' '}
                <div class='mb-3'>
                  <label for='adminname' class='form-label'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='adminname'
                    required
                  />
                </div>
                <div class='mb-3'>
                  <label for='adminemail' class='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    class='form-control'
                    id='adminemail'
                    required
                  />
                </div>
                <div class='mb-3'>
                  <label for='adminpass' class='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    class='form-control'
                    id='adminpass'
                    required
                  />
                </div>
                <div class='mb-5'>
                  <label for='admincpass' class='form-label'>
                    Confirm Password
                  </label>
                  <input
                    type='password'
                    class='form-control'
                    id='admincpass'
                    required
                  />
                </div>
                <div className='mb-5'>
                  <input type='file' id='admincpic' />
                  <span className='ms-3'>(Optional)</span>
                </div>
                <div>
                  <button type='submit' className='btn form-btn'>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditInfo;
