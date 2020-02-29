import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestAuth } from '../redux/actions';

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
    dispatch(requestAuth(user));
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={submit}>Login</button>
      </form>
    </div>
  );
};
