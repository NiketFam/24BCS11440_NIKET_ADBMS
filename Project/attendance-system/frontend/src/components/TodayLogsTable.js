import React from 'react';

function TodayLogsTable({ logs }) {
  return (
    <div style={{ marginBottom: '30px' }}>
      <h3>2. Today's Live Attendance Logs</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ background: '#343a40', color: '#fff' }}>
            <th style={{ padding: '10px' }}>Emp ID</th>
            <th style={{ padding: '10px' }}>Name</th>
            <th style={{ padding: '10px' }}>Department</th>
            <th style={{ padding: '10px' }}>Check-In</th>
            <th style={{ padding: '10px' }}>Check-Out</th>
            <th style={{ padding: '10px' }}>Status (Trigger)</th>
            <th style={{ padding: '10px' }}>Work Hours</th>
          </tr>
        </thead>
        <tbody>
          {logs.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>
                No attendance marked today.
              </td>
            </tr>
          ) : (
            logs.map((log) => (
              <tr key={log.attendance_id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px' }}>{log.emp_id}</td>
                <td style={{ padding: '10px' }}>{log.name}</td>
                <td style={{ padding: '10px' }}>{log.dept_name}</td>
                <td style={{ padding: '10px' }}>{log.check_in_time}</td>
                <td style={{ padding: '10px' }}>{log.check_out_time || 'Active'}</td>
                <td style={{ padding: '10px', fontWeight: 'bold', color: log.status === 'Late' ? '#d9534f' : '#28a745' }}>
                  {log.status}
                </td>
                <td style={{ padding: '10px' }}>{log.work_hours} hrs</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TodayLogsTable;