import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../redux/actions/auth';
import '../CSS/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {

    if (username === 'admin' && password === 'admin123') {
      const user = { username: 'admin' };
      dispatch(loginSuccess(user));

    } else {
      const error = 'Tên đăng nhập hoặc mật khẩu không đúng';
      dispatch(loginFailure(error));
    }
  };

  return (
    <div className='containerLg'>
      <h2>AdminLTE</h2>
      <label className='label'>userName</label>

      <input
      className='input'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className='label'>password</label>
      <input
      className='input'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='btnLogin' onClick={handleLogin}>Sign In</button>
    </div>
  );
};

export default Login;