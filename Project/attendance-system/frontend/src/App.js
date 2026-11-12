import React, { useState, useEffect } from 'react';
import './App.css';
import {
  getEmployees,
  addEmployee,
  getTodayLogs,
  getMonthlySummary,
  checkInEmployee,
  checkOutEmployee
} from './api/attendanceApi';

import MarkAttendance from './components/MarkAttendance';
import TodayLogsTable from './components/TodayLogsTable';
import SummaryTable from './components/SummaryTable';
import AddEmployeeForm from './components/AddEmployeeForm';

function App() {
  const [employees, setEmployees] = useState([]);
  const [logs, setLogs] = useState([]);
  const [summary, setSummary] = useState([]);
  const [selectedEmp, setSelectedEmp] = useState('');
  const [statusMsg, setStatusMsg] = useState({ text: '', type: '' });

  const showNotification = (text, type = 'success') => {
    setStatusMsg({ text, type });
    setTimeout(() => setStatusMsg({ text: '', type: '' }), 4000);
  };

  const fetchAllData = async () => {
    try {
      const [empRes, logRes, sumRes] = await Promise.all([
        getEmployees(),
        getTodayLogs(),
        getMonthlySummary()
      ]);

      setEmployees(empRes.data);
      setLogs(logRes.data);
      setSummary(sumRes.data);

      if (empRes.data.length > 0 && !selectedEmp) {
        setSelectedEmp(empRes.data[0].emp_id);
      }
    } catch (err) {
      showNotification('Failed to connect to backend server.', 'error');
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleCheckIn = async () => {
    try {
      const res = await checkInEmployee(selectedEmp);
      showNotification(res.data.message, 'success');
      fetchAllData();
    } catch (err) {
      showNotification(err.response?.data?.error || 'Check-in failed', 'error');
    }
  };

  const handleCheckOut = async () => {
    try {
      const res = await checkOutEmployee(selectedEmp);
      showNotification(res.data.message, 'success');
      fetchAllData();
    } catch (err) {
      showNotification(err.response?.data?.error || 'Check-out failed', 'error');
    }
  };

  const handleAddEmployee = async (newEmpData, resetForm) => {
    try {
      const res = await addEmployee(newEmpData);
      resetForm();
      showNotification(res.data.message, 'success');
      fetchAllData();
    } catch (err) {
      showNotification(err.response?.data?.error || 'Error adding employee', 'error');
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div>
          <h1>Employee Attendance Management System</h1>
          <p>Automated Shift Tracking, Trigger-Based Status &amp; Monthly Reporting</p>
        </div>
        <span className="header-badge">MySQL + Express + React</span>
      </header>

      {statusMsg.text && (
        <div className={`alert ${statusMsg.type === 'error' ? 'alert-error' : 'alert-success'}`}>
          {statusMsg.text}
        </div>
      )}

      <MarkAttendance
        employees={employees}
        selectedEmp={selectedEmp}
        setSelectedEmp={setSelectedEmp}
        onCheckIn={handleCheckIn}
        onCheckOut={handleCheckOut}
      />

      <TodayLogsTable logs={logs} />

      <SummaryTable summary={summary} />

      <AddEmployeeForm onAddEmployee={handleAddEmployee} />
    </div>
  );
}

export default App;