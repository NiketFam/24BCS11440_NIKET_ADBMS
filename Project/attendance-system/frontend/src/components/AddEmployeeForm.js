import React, { useState } from 'react';

function AddEmployeeForm({ onAddEmployee }) {
  const [newEmp, setNewEmp] = useState({
    first_name: '',
    last_name: '',
    email: '',
    designation: '',
    dept_id: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee(newEmp, () => {
      setNewEmp({ first_name: '', last_name: '', email: '', designation: '', dept_id: 1 });
    });
  };

  return (
    <div style={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
      <h3 style={{ marginTop: 0 }}>4. Register New Employee</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <input
          placeholder="First Name"
          value={newEmp.first_name}
          onChange={(e) => setNewEmp({ ...newEmp, first_name: e.target.value })}
          required
          style={{ padding: '8px' }}
        />
        <input
          placeholder="Last Name"
          value={newEmp.last_name}
          onChange={(e) => setNewEmp({ ...newEmp, last_name: e.target.value })}
          required
          style={{ padding: '8px' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={newEmp.email}
          onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })}
          required
          style={{ padding: '8px' }}
        />
        <input
          placeholder="Designation"
          value={newEmp.designation}
          onChange={(e) => setNewEmp({ ...newEmp, designation: e.target.value })}
          required
          style={{ padding: '8px' }}
        />
        <select
          value={newEmp.dept_id}
          onChange={(e) => setNewEmp({ ...newEmp, dept_id: e.target.value })}
          style={{ padding: '8px' }}
        >
          <option value={1}>Engineering</option>
          <option value={2}>Human Resources</option>
          <option value={3}>Operations</option>
        </select>
        <button
          type="submit"
          style={{ padding: '8px 18px', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployeeForm;