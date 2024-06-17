import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../actions/authActions';

const Register = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    password2: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { companyName, email, password, password2 } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.error('Passwords do not match');
    } else {
      await dispatch(register({ companyName, email, password }));
      navigate('/candidates');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          name="companyName"
          value={companyName}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={onChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
