export const REQUEST_AUTH = 'REQUEST_AUTH';
export const RECIEVE_AUTH = 'RECIEVE_AUTH';

export const requestAuth = credentials => ({
  type: REQUEST_AUTH,
  credentials,
});

export const recieveAuth = data => ({
  type: RECIEVE_AUTH,
  data,
});

export const REQUEST_OPEN_COMPLAINTS = 'REQUEST_OPEN_COMPLAINTS';
export const RECIEVE_OPEN_COMPLAINTS = 'RECIEVE_OPEN_COMPLAINTS';

export const requestOpenComplaints = () => ({
  type: REQUEST_OPEN_COMPLAINTS,
});

export const recieveOpenComplaints = data => ({
  type: RECIEVE_OPEN_COMPLAINTS,
  data,
});

export const REQUEST_CLOSED_COMPLAINTS = 'REQUEST_CLOSED_COMPLAINTS';
export const RECIEVE_CLOSED_COMPLAINTS = 'RECIEVE_CLOSED_COMPLAINTS';

export const requestClosedComplaints = () => ({
  type: REQUEST_CLOSED_COMPLAINTS,
});

export const recieveClosedComplaints = data => ({
  type: RECIEVE_CLOSED_COMPLAINTS,
  data,
});

export const REQUEST_TOP_COMPLAINTS = 'REQUEST_TOP_COMPLAINTS';
export const RECIEVE_TOP_COMPLAINTS = 'RECIEVE_TOP_COMPLAINTS';

export const requestTopComplaints = () => ({
  type: REQUEST_TOP_COMPLAINTS,
});

export const recieveTopComplaints = data => ({
  type: RECIEVE_TOP_COMPLAINTS,
  data,
});

export const REQUEST_ALL_COMPLAINTS = 'REQUEST_ALL_COMPLAINTS';
export const RECIEVE_ALL_COMPLAINTS = 'RECIEVE_ALL_COMPLAINTS';

export const requestAllComplaints = () => ({
  type: REQUEST_ALL_COMPLAINTS,
});

export const recieveAllComplaints = data => ({
  type: RECIEVE_ALL_COMPLAINTS,
  data,
});

export const REQUEST_ALL_COMPLAINTS_BY_CONSTITUENTS = 'REQUEST_ALL_COMPLAINTS_BY_CONSTITUENTS';
export const RECIEVE_ALL_COMPLAINTS_BY_CONSTITUENTS = 'RECIEVE_ALL_COMPLAINTS_BY_CONSTITUENTS';

export const requestAllComplaintsByConstituents = () => ({
  type: REQUEST_ALL_COMPLAINTS_BY_CONSTITUENTS,
});

export const recieveAllComplaintsByConstituents = data => ({
  type: RECIEVE_ALL_COMPLAINTS_BY_CONSTITUENTS,
  data,
});

export const REQUEST_USER_PROFILE= 'REQUEST_USER_PROFILE';
export const RECIEVE_USER_PROFILE = 'RECIEVE_USER_PROFILE';

export const requestUserProfile = () => ({
  type: REQUEST_USER_PROFILE,
});

export const recieveUserProfile = data => ({
  type: RECIEVE_USER_PROFILE,
  data,
});

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const RECIEVE_LOGOUT = 'RECIEVE_LOGOUT'

export const requestLogout = () => ({
  type: REQUEST_LOGOUT
})

export const recieveLogout = () => ({
  type: RECIEVE_LOGOUT
})