import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminRecords from './pages/Records/AdminRecords';
import AdminReport from './pages/Report/AdminReport';
import AdminSystemReport from './pages/SystemReport/AdminSystemReport';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Grades from './pages/Grades/Grades';
import AdminGrade from './pages/Grades/AdminGrade';
import Admininfo from './pages/EditInfo/Admininfo';
const Admin = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<AdminDashboard />} />
        <Route exact path='/viewrecords' element={<AdminRecords />} />
        <Route exact path='/report' element={<AdminReport />} />
        <Route exact path='/grades' element={<AdminGrade />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/editadmin' element={<Admininfo />} />
        <Route exact path='/systemreport' element={<AdminSystemReport />} />
      </Routes>
    </>
  );
};

export default Admin;
