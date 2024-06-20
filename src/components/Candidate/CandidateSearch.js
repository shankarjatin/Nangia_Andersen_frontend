import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCandidates } from '../../actions/candidateActions';
import CandidateCard from './CandidateCard';
import { Link } from 'react-router-dom';

const jobRoles = [
  'Backend Developer',
  'ML Developer',
  'Frontend Developer',
  'Full Stack Developer',
  'Data Scientist',
  'DevOps Engineer',
  'Mobile Developer',
  'AI Engineer',
  'Product Manager',
  'UI/UX Designer',
  'Software Engineer',
  'Cybersecurity Specialist',
  'QA Engineer',
];

const locations = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Surat',
  'Lucknow',
  'Nagpur',
  'Patna',
  'Indore',
  'Bhopal',
];

const CandidateSearch = () => {
  const [formData, setFormData] = useState({ location: '', jobRole: '' });
  const dispatch = useDispatch();
  const candidates = useSelector((state) => state.candidates.candidates);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCandidates(formData));
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen custom-background">
    <h4 className='text-center text-4xl text-black font-bold py-6'>Search Candidate</h4>
    <form onSubmit={onSubmit} className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mb-10 py-5 w-full max-w-4xl">
      <div className="flex-1">
        <select
          name="location"
          value={formData.location}
          onChange={onChange}
          className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-primary focus:ring-primary"
        >
          <option value="">Select Location</option>
          {locations.map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>
  
      <div className="flex-1">
        <select
          name="jobRole"
          value={formData.jobRole}
          onChange={onChange}
          className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-primary focus:ring-primary"
        >
          <option value="">Select Job Role</option>
          {jobRoles.map((jobRole) => (
            <option key={jobRole} value={jobRole}>{jobRole}</option>
          ))}
        </select>
      </div>
  
      <button
        type="submit"
        className="bg-gray-700 text-white px-4 py-2 rounded self-center sm:self-end"
      >
        Search
      </button>
    </form>
  
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
      {candidates.map((candidate) => (
        <CandidateCard key={candidate._id} candidate={candidate} />
      ))}
    </div>
  
    <button
      onClick={() => window.location.href = "/"}
      className="w-fit bg-gray-700 text-white mt-10 py-2 px-4 rounded-md hover:bg-gray-800"
    >
      Home
    </button>
  </div>
  
  );
};

export default CandidateSearch;
