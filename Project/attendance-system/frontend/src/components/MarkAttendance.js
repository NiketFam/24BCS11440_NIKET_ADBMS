import React from 'react';

function MarkAttendance({ employees, selectedEmp, setSelectedEmp, onCheckIn, onCheckOut }) {
  return (
    <div style={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', marginBottom: '25px' }}>
      <h3 style={{ marginTop: 0 }}>1. Mark Daily Attendance</h3>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <select
          value={selectedEmp}
          onChange={(e) => setSelectedEmp(e.target.value)}
          style={{ padding: '10px', fontSize: '15px', minWidth: '260px', borderRadius: '4px' }}
        >
          {employees.map((emp) => (
            <option key={emp.emp_id} value={emp.emp_id}>
              ID: {emp.emp_id} — {emp.first_name} {emp.last_name} ({emp.dept_name})
            </option>
          ))}
        </select>

        <button
          onClick={onCheckIn}
          style={{ padding: '10px 20px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Check In
        </button>

        <button
          onClick={onCheckOut}
          style={{ padding: '10px 20px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}

export default MarkAttendance;