import React from 'react';
import { useDispatch } from 'react-redux';
import { saveCandidate } from '../../actions/candidateActions';

const CandidateCard = ({ candidate }) => {
  const dispatch = useDispatch();

  const onSave = () => {
    dispatch(saveCandidate(candidate));
  };

  return (
    <div
        className="relative bg-gradient-to-r from-blue-100 to-purple-200 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      >
              <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-700">Name:</h3>
          <h3 className="text-2xl font-bold text-gray-900">{candidate.name}</h3>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-700">Location:</h3>
          <p className="text-xl text-gray-800">{candidate.location}</p>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-700">Job Role:</h3>
          <p className="text-xl text-gray-800">{candidate.jobRole}</p>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-700">Experience:</h3>
          <p className="text-xl text-gray-800">{candidate.experience}</p>
        </div>

        </div>
  );
};

export default CandidateCard;
