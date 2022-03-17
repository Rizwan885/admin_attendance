import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './Admin Panel/pages/Dashboard/AdminDashboard';
import AdminRecords from './Admin Panel/pages/Records/AdminRecords';
import AdminReport from './Admin Panel/pages/Report/AdminReport';
import AdminGrade from './Admin Panel/pages/Grades/AdminGrade';
import Login from './Admin Panel/pages/Login/Login';
import Register from './Admin Panel/pages/Register/Register';
import Admininfo from './Admin Panel/pages/EditInfo/Admininfo';
import AdminSystemReport from './Admin Panel/pages/SystemReport/AdminSystemReport';
import './App.css';
import Dashboard from './Admin Panel/pages/Dashboard/Dashboard';
import Header from './Admin Panel/components/Header/Header';
import Records from './Admin Panel/pages/Records/Records';
import Report from './Admin Panel/pages/Report/Report';
import Grades from './Admin Panel/pages/Grades/Grades';
import EditInfo from './Admin Panel/pages/EditInfo/EditInfo';
import SystemReport from './Admin Panel/pages/SystemReport/SystemReport';
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/viewrecords' element={<Records />} />
        <Route exact path='/report' element={<Report />} />
        <Route exact path='/grades' element={<Grades />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/editadmin' element={<EditInfo />} />
        <Route exact path='/systemreport' element={<SystemReport />} />
      </Routes>
    </>
  );
};

export default App;
