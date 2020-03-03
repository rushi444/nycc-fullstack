import axios from 'axios';

export const postLogin = async credentials => {
  const res = await axios.post('http://127.0.0.1:8000/login/', {
    username: credentials.username,
    password: credentials.password,
  });
  return res;
};

export const getOpenComplaintsData = async () => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  try {
    const res = await axios.get(
      'http://127.0.0.1:8000/api/complaints/openCases/',
      config,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getClosedComplaintsData = async () => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  try {
    const res = await axios.get(
      'http://127.0.0.1:8000/api/complaints/closedCases/',
      config,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getTopComplaintsData = async () => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  try {
    const res = await axios.get(
      'http://127.0.0.1:8000/api/complaints/topComplaints/',
      config,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getAllComplaintsData = async () => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  try {
    const res = await axios.get(
      'http://127.0.0.1:8000/api/complaints/',
      config,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getAllComplaintsByConstituentsData = async () => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  try {
    const res = await axios.get(
      'http://127.0.0.1:8000/api/complaints/complaintsByConstituents/',
      config,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getUserProfileData = async () => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  try {
    const res = await axios.get(
      'http://127.0.0.1:8000/api/complaints/userProfile/',
      config,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
