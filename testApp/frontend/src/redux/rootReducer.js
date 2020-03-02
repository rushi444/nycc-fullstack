import {
  RECIEVE_AUTH,
  RECIEVE_OPEN_COMPLAINTS,
  RECIEVE_CLOSED_COMPLAINTS,
  RECIEVE_TOP_COMPLAINTS,
  RECIEVE_ALL_COMPLAINTS,
} from './actions';

const initialState = {
  isAuthenticated: false,
  openComplaints: null,
  closedComplaints: null,
  topComplaints: null,
  allComplaints: null,
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
      };
    default:
      return state;
  }
};
