import axios from 'axios';

const token = localStorage.getItem('token');
const config = {
  headers: {
    Authorization: `Token ${token}`,
  },
};

export const postLogin = async credentials => {
  const res = await axios.post('http://127.0.0.1:8000/login/', {
    username: credentials.username,
    password: credentials.password,
  });
  return res;
};

export const getOpenComplaintsData = async () => {
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
  