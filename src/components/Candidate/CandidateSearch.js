import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCandidates } from '../../actions/candidateActions';
import CandidateCard from './CandidateCard';

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
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={onChange}
            placeholder="Location"
          />
        </div>
        <div>
          <input
            type="text"
            name="jobRole"
            value={formData.jobRole}
            onChange={onChange}
            placeholder="Job Role"
          />
        </div>
        <button type="submit">Search</button>
      </form>
      <div>
        {candidates.map((candidate) => (
          <CandidateCard key={candidate._id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default CandidateSearch;
