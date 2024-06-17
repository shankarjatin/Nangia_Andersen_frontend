import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../actions/authActions';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(formData));
    navigate('/candidates');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
