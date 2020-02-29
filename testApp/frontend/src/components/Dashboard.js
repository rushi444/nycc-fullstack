import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestOpenComplaints,
  requestClosedComplaints,
  requestTopComplaints,
  requestAllComplaints,
} from '../redux/actions';

export const Dashboard = () => {
  const dispatch = useDispatch();

  const {
    openComplaints,
    closedComplaints,
    topComplaints,
    allComplaints,
  } = useSelector(state => ({
    openComplaints: state.openComplaints,
    closedComplaints: state.closedComplaints,
    topComplaints: state.topComplaints,
    allComplaints: state.allComplaints,
  }));

  useEffect(() => {
    dispatch(requestOpenComplaints());
    dispatch(requestClosedComplaints());
    dispatch(requestTopComplaints());
    dispatch(requestAllComplaints());
  }, []);

  const tableheader = () => {
    return (
      <tr>
        <th>Account</th>
        <th>Complaint Type</th>
        <th>Description</th>
        <th>City</th>
        <th>Opened On</th>
        <th>Closed On</th>
      </tr>
    );
  };

  allComplaints && console.log('yo', allComplaints);

  return (
    <div>
      <h1>hi</h1>
      <div className='complaints-container'>
        <div className='open-complaints'>
          <h3>Open Complaints No.</h3>
          <p>{openComplaints && openComplaints.length}</p>
        </div>
        <div className='closed-complaints'>
          <h3>Closed Complaints No.</h3>
          <p>{closedComplaints && closedComplaints.length}</p>
        </div>
        <div className='top-complaint'>
          <h3>Top Complaint</h3>
          <p>{topComplaints && topComplaints[0].complaint_type}</p>
        </div>
      </div>
      <div className='all-complaints'>
        <h2>All Complaints</h2>
        <table>
          <tbody>
            {tableheader()}
            {allComplaints &&
              allComplaints.map(complaint => (
                <tr key={complaint.unique_key}>
                  <td>{complaint.account}</td>
                  <td>{complaint.complaint_type}</td>
                  <td>{complaint.descriptor}</td>
                  <td>{complaint.city}</td>
                  <td>{complaint.opendate}</td>
                  <td>{complaint.closedate}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
