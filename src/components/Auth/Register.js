import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate , Link } from 'react-router-dom';
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
    <section className="h-screen items-center justify-center bg-gray-100">
    <div className='grid grid-cols-2 mt-40 gap-10'>
  
      <div className='col-span-1'>
        <div className="mb-6">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="w-full"
            alt="Sample image"
          />
        </div>
      </div>
  
      <div className='col-span-1'>
        <form onSubmit={onSubmit}>
  
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={onChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your company name"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your password"
              required
            />
          </div>
  
          <div className="mb-6">
            <label htmlFor="password2" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="password2"
              name="password2"
              value={password2}
              onChange={onChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Confirm your password"
              required
            />
          </div>
  
          <button
            type="submit"
            className="w-fit bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 "
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary hover:text-primary-hover">Login</Link>
        </p>
      </div>
    </div>
  </section>
  
  );
};

export default Register;
