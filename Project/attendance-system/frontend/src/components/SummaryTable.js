import React from 'react';

function SummaryTable({ summary }) {
  return (
    <div style={{ marginBottom: '30px' }}>
      <h3>3. Employee Attendance Summary (SQL View)</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ background: '#007bff', color: '#fff' }}>
            <th style={{ padding: '10px' }}>Emp ID</th>
            <th style={{ padding: '10px' }}>Employee Name</th>
            <th style={{ padding: '10px' }}>Department</th>
            <th style={{ padding: '10px' }}>Days Present</th>
            <th style={{ padding: '10px' }}>Late Marks</th>
            <th style={{ padding: '10px' }}>Total Hours Worked</th>
          </tr>
        </thead>
        <tbody>
          {summary.map((row) => (
            <tr key={row.emp_id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{row.emp_id}</td>
              <td style={{ padding: '10px' }}>{row.employee_name}</td>
              <td style={{ padding: '10px' }}>{row.dept_name}</td>
              <td style={{ padding: '10px' }}>{row.days_present}</td>
              <td style={{ padding: '10px' }}>{row.late_marks}</td>
              <td style={{ padding: '10px' }}>{row.total_hours_worked || '0.00'} hrs</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SummaryTable;