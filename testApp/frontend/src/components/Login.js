import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestAuth } from '../redux/actions';
import styled from 'styled-components';

export const Login = (props) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: 'rsalamanca',
    password: 'salamanca-17',
  });

  const {isAuthenticated} = useSelector(state => ({
      isAuthenticated: state.isAuthenticated
  }))

  isAuthenticated && props.history.push('/')

  const handleChange = e =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    dispatch(requestAuth(user))
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <Input
            type='text'
            name='username'
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <Input
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <LoginButton onClick={submit}>Login</LoginButton>
      </form>
    </div>
  );
};

const Input = styled.input`
background-color: lightgray;
border: none; 
border-bottom: 1px solid black; 
margin-left: 5px; 
:focus {
  outline: 0;
}
`

const LoginButton = styled.button`
cursor: pointer;
  background-color: #009879;
  border: 2px solid #009879;
  border-radius: 4px;
  color: white;
  display: block;
  font-size: 16px;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
`