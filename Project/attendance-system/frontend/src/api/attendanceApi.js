import axios from 'axios';

const API = 'http://localhost:5000/api';

export const getEmployees = () => axios.get(`${API}/employees`);
export const addEmployee = (data) => axios.post(`${API}/employees`, data);
export const getTodayLogs = () => axios.get(`${API}/attendance/today`);
export const getMonthlySummary = () => axios.get(`${API}/attendance/summary`);
export const checkInEmployee = (emp_id) => axios.post(`${API}/attendance/checkin`, { emp_id });
export const checkOutEmployee = (emp_id) => axios.put(`${API}/attendance/checkout`, { emp_id });