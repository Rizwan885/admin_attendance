import React from 'react';
import './dashboard.css';
import presents from '../../assets/images/presents.png';
import pending from '../../assets/images/pending.png';
import approved from '../../assets/images/approved.png';
import absent from '../../assets/images/absent.png';
import { Routes, Route } from 'react-router-dom';
const Dashboard = () => {
  return (
    <>
      <div className='dashboard'>
        <div className='dashboard_cont '>
          <h1 className='text-center mb-5'>Dashboard</h1>
          <div className='mt-5   row g-3  dash'>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4  '>
              <div className='box' id='absent'>
                <img
                  src={absent}
                  className='img-fluid'
                  style={{
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    width: '70px',
                    height: '80px',
                    zIndex: '1',
                  }}
                />

                <div className='centered'>
                  <p className='pcount ms-4'>24</p>
                  <h1 className='ms-4'>Absents</h1>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
              <div className='box' id='pbox' style={{ position: 'relative' }}>
                {/* consider 50 students in 12 ckasses
                
                50*12= 600,
                Pending leaves+ Approved leaves + Absents=18+27+24= 69,
                Total Presents: 600-57= 531
                 from classes */}
                <img
                  src={presents}
                  className='img-fluid'
                  style={{
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    width: '70px',
                    height: '80px',
                    zIndex: '1',
                  }}
                />
                <div className='centered'>
                  <p className='ms-4'>531</p>
                  <h1 className='ms-4'>Presents</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-1 mt-sm-0 g-3 dash'>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4 '>
              <div className='box' id='pendingleave'>
                {/* 18 studetns from classes */}

                <img
                  src={pending}
                  className='img-fluid'
                  style={{
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    width: '70px',
                    height: '80px',
                    zIndex: '1',
                  }}
                />
                <div className='centered'>
                  <p className='ms-4'>18</p>
                  <h1 className='ms-4'>Pending Leaves</h1>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
              <div className='box' id='approved'>
                {/* studetns leave from classes */}
                <img
                  src={approved}
                  className='img-fluid'
                  style={{
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    width: '70px',
                    height: '80px',
                    zIndex: '1',
                  }}
                />
                <div className='centered'>
                  <p className='ms-4'>27</p>
                  <h1 className='ms-4'>Approved Leaves</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
