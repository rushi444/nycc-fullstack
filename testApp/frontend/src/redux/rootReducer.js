import {
  RECIEVE_AUTH,
  RECIEVE_OPEN_COMPLAINTS,
  RECIEVE_CLOSED_COMPLAINTS,
  RECIEVE_TOP_COMPLAINTS,
  RECIEVE_ALL_COMPLAINTS,
  RECIEVE_ALL_COMPLAINTS_BY_CONSTITUENTS,
  RECIEVE_USER_PROFILE,
} from './actions';

const initialState = {
  isAuthenticated: false,
  openComplaints: null,
  closedComplaints: null,
  topComplaints: null,
  allComplaints: null,
  allComplaintsMode: true,
  userProfile: null
};

export const rootReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case RECIEVE_AUTH:
      localStorage.setItem('token', data.data.token);
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
      };
    case RECIEVE_OPEN_COMPLAINTS:
      return {
        ...state,
        openComplaints: data.data,
      };
    case RECIEVE_CLOSED_COMPLAINTS:
      return {
        ...state,
        closedComplaints: data.data,
      };
    case RECIEVE_TOP_COMPLAINTS:
      return {
        ...state,
        topComplaints: data.data,
      };
    case RECIEVE_ALL_COMPLAINTS:
      return {
        ...state,
        allComplaints: data.data,
        allComplaintsMode: true
      };
    case RECIEVE_ALL_COMPLAINTS_BY_CONSTITUENTS:
      return {
        ...state,
        allComplaints: data.data,
        allComplaintsMode: false
      };
    case RECIEVE_USER_PROFILE:
      return {
        ...state, 
        userProfile: data.data
      }
    default:
      return state;
  }
};
