import { call, put, takeLatest } from 'redux-saga/effects';

import {
  REQUEST_AUTH,
  recieveAuth,
  recieveOpenComplaints,
  REQUEST_OPEN_COMPLAINTS,
  REQUEST_CLOSED_COMPLAINTS,
  recieveClosedComplaints,
  recieveTopComplaints,
  REQUEST_TOP_COMPLAINTS,
  REQUEST_ALL_COMPLAINTS,
  recieveAllComplaints,
  recieveAllComplaintsByConstituents,
  REQUEST_ALL_COMPLAINTS_BY_CONSTITUENTS,
  recieveUserProfile,
  REQUEST_USER_PROFILE,
} from './actions';
import {
  postLogin,
  getOpenComplaintsData,
  getClosedComplaintsData,
  getTopComplaintsData,
  getAllComplaintsData,
  getAllComplaintsByConstituentsData,
  getUserProfileData,
} from './apis';

function* getAuthToken(action) {
  try {
    const data = yield call(postLogin, action.credentials);
    yield put(recieveAuth(data));
  } catch (err) {
    console.log(err);
  }
}

function* getOpenComplaints() {
  try {
    const data = yield call(getOpenComplaintsData);
    yield put(recieveOpenComplaints(data));
  } catch (err) {
    console.log(err);
  }
}

function* getClosedComplaints() {
  try {
    const data = yield call(getClosedComplaintsData);
    yield put(recieveClosedComplaints(data));
  } catch (err) {
    console.log(err);
  }
}

function* getTopComplaints() {
  try {
    const data = yield call(getTopComplaintsData);
    yield put(recieveTopComplaints(data));
  } catch (err) {
    console.log(err);
  }
}

function* getAllComplaints() {
  try {
    const data = yield call(getAllComplaintsData);
    yield put(recieveAllComplaints(data));
  } catch (err) {
    console.log(err);
  }
}

function* getAllComplaintsByConstituents() {
  try {
    const data = yield call(getAllComplaintsByConstituentsData);
    yield put(recieveAllComplaintsByConstituents(data));
  } catch (err) {
    console.log(err);
  }
}

function* getUserData() {
  try {
    const data = yield call(getUserProfileData);
    yield put(recieveUserProfile(data));
  } catch (err) {
    console.log(err);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_AUTH, getAuthToken);
  yield takeLatest(REQUEST_OPEN_COMPLAINTS, getOpenComplaints);
  yield takeLatest(REQUEST_CLOSED_COMPLAINTS, getClosedComplaints);
  yield takeLatest(REQUEST_TOP_COMPLAINTS, getTopComplaints);
  yield takeLatest(REQUEST_ALL_COMPLAINTS, getAllComplaints);
  yield takeLatest(
    REQUEST_ALL_COMPLAINTS_BY_CONSTITUENTS,
    getAllComplaintsByConstituents,
  );
  yield takeLatest(REQUEST_USER_PROFILE, getUserData);
}
