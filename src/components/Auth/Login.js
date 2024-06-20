import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../actions/authActions';
import { Link } from 'react-router-dom';

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
    <section className="min-h-screen flex items-center justify-center custom-background sm:pt-2 sm:py-5 lg:py-20 px-4 ">
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl'>
      <div className='sm:col-span-1'>
        <div className="mb-6">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="w-full h-auto"
            alt="Sample image"
          />
        </div>
      </div>
      <div className='sm:col-span-1'>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={onChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="sm:w-full lg:w-fit bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-primary hover:text-primary-hover">Get Started</Link>
        </p>
      </div>
    </div>
  </section>
  
  );
};

export default Login;
