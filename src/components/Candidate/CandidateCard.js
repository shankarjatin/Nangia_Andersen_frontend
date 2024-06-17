import React from 'react';
import { useDispatch } from 'react-redux';
import { saveCandidate } from '../../actions/candidateActions';

const CandidateCard = ({ candidate }) => {
  const dispatch = useDispatch();

  const onSave = () => {
    dispatch(saveCandidate(candidate));
  };

  return (
    <div>
      <h3>{candidate.name}</h3>
      <p>{candidate.location}</p>
      <p>{candidate.jobRole}</p>
      <p>{candidate.experience}</p>
      <button onClick={onSave}>Save</button>
    </div>
  );
};

export default CandidateCard;
