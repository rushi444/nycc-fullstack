import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestOpenComplaints,
  requestClosedComplaints,
  requestTopComplaints,
  requestAllComplaints,
  requestAllComplaintsByConstituents,
  requestUserProfile,
} from '../redux/actions';
import styled from 'styled-components';

export const Dashboard = props => {
  const dispatch = useDispatch();

  const {
    openComplaints,
    closedComplaints,
    topComplaints,
    allComplaints,
    allComplaintsMode,
    userProfile,
  } = useSelector(state => ({
    openComplaints: state.openComplaints,
    closedComplaints: state.closedComplaints,
    topComplaints: state.topComplaints,
    allComplaints: state.allComplaints,
    allComplaintsMode: state.allComplaintsMode,
    userProfile: state.userProfile,
  }));

  useEffect(() => {
    dispatch(requestOpenComplaints());
    dispatch(requestClosedComplaints());
    dispatch(requestTopComplaints());
    dispatch(requestAllComplaints());
    dispatch(requestUserProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tableTitle = () => {
    if (allComplaintsMode) {
      return (
        <TableTitleContainer>
          <h2>All Complaints</h2>
          <button
            onClick={() => dispatch(requestAllComplaintsByConstituents())}>
            Complaints By My Constituents
          </button>
        </TableTitleContainer>
      );
    } else {
      return (
        <TableTitleContainer>
          <h2>Complaints By My Constituents</h2>
          <button onClick={() => dispatch(requestAllComplaints())}>
            All Complaints
          </button>
        </TableTitleContainer>
      );
    }
  };

  const tableheader = () => {
    return (
      <TableHeader>
        <th>Account</th>
        <th>Council Dist</th>
        <th>Complaint Type</th>
        <th>Description</th>
        <th>City</th>
        <th>Opened On</th>
        <th>Closed On</th>
      </TableHeader>
    );
  };

  const logout = () => {
    localStorage.clear();
    props.history.push('/');
  };

  return (
    <div>
      <AppTitleContainer>
        <h1 style={{ margin: '3% 0', fontSize: '3em' }}>
          {userProfile &&
            `Hello ${userProfile.full_name}, District ${userProfile.district}`}
        </h1>
        <button onClick={logout}>Logout</button>
      </AppTitleContainer>
      <ComplaintsContainer>
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
      </ComplaintsContainer>
      <div className='all-complaints'>
        {tableTitle()}
        <ComplaintTable>
          <tbody>
            {tableheader()}
            {allComplaints &&
              allComplaints.map(complaint => (
                <TableRows key={complaint.unique_key}>
                  <td>{complaint.account}</td>
                  <td>{complaint.council_dist}</td>
                  <td>{complaint.complaint_type}</td>
                  <td>{complaint.descriptor}</td>
                  <td>{complaint.city}</td>
                  <td>{complaint.opendate}</td>
                  <td>{complaint.closedate}</td>
                </TableRows>
              ))}
          </tbody>
        </ComplaintTable>
      </div>
    </div>
  );
};

const ComplaintsContainer = styled.div`
  margin: 1%;
  display: flex;
  justify-content: space-between;
  div {
    padding: 10px;
    border: 1px solid #009879;
    background-color: white;
    border-radius: 5px;
    p {
      text-align: center;
    }
    :nth-child(1) {
      p {
        font-size: 3em;
      }
    }
    :nth-child(2) {
      p {
        font-size: 3em;
      }
    }
    :nth-child(3) {
      p {
        font-size: 1.5em;
      }
    }
  }
`;

const ComplaintTable = styled.table`
  border-collapse: collapse;
  margin: 1%;
  font-size: 1.2em;
  width: 95%;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

const TableHeader = styled.tr`
  background-color: #009879;
  color: white;
  text-align: left;
  font-weight: bold;
  th {
    padding: 5px;
  }
`;

const TableRows = styled.tr`
border-bottom: 1px solid gray; 
td {
  padding 5px; 
}
:nth-of-type(even) {
  background-color: #f3f3f3; 
}
:last-of-type {
  border-bottom: 2px solid #009879; 
}
`;

const TableTitleContainer = styled.div`
display: flex; 
justify-content: space-between; 
padding 0 2%; 
align-items: center; 
h2 {
  font-size: 2em
}
button {
  height: 50px; 
  background-color: #009879;
  color: white;
  font-size: 1em; 
  border: none; 
  border-radius: 5px; 
  :focus {
    outline: none; 
  }
}
`;

const AppTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 50px;
    background-color: #009879;
    color: white;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    :focus {
      outline: none;
    }
  }
`;
