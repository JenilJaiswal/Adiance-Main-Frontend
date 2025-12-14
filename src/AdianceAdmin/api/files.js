import axios from 'axios';

// process.env.REACT_APP_API_URL ||
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const withAuth = () => {
	const token = typeof window !== 'undefined' ? localStorage.getItem('jwtToken') : null;
	return token ? { Authorization: `Bearer ${token}` } : {};
};

export const uploadFile = async (file) => {
	const formData = new FormData();
	formData.append('file', file);
	const res = await axios.post(`${API_URL}/files/upload`, formData, { headers: { 'Content-Type': 'multipart/form-data', ...withAuth() } });
	return res.data;
};

export const deleteFile = async (filename) => {
	const res = await axios.delete(`${API_URL}/files/${encodeURIComponent(filename)}`, { headers: { ...withAuth() } });
	return res.data;
};


