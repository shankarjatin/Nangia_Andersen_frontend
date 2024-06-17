import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCandidates } from '../../actions/candidateActions';
import CandidateCard from './CandidateCard';
import { Link } from 'react-router-dom';

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
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
    <form onSubmit={onSubmit} className="flex space-x-4 mb-4 mb-10">
      <div className="flex flex-row">
       
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={onChange}
          placeholder="Location"
          id="location"
          className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-primary focus:ring-primary"
        />
      </div>
  
      <div className="flex flex-row">
        
        <input
          type="text"
          name="jobRole"
          value={formData.jobRole}
          onChange={onChange}
          placeholder="Job Role"
          id="jobRole"
          className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-primary focus:ring-primary"
        />
      </div>
  
      <button
        type="submit"
        className="self-end bg-gray-700 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </form>
  
    <div className="w-full grid grid-cols-4 gap-10">
      {candidates.map((candidate) => (
        <CandidateCard key={candidate._id} candidate={candidate} />
      ))}
    </div>
  
    <button
    onClick={() => window.location.href = "/"}
    className=" w-fit bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 "
  >
    Home
  </button>
  </div>
  
  );
};

export default CandidateSearch;
