import { SEARCH_CANDIDATES, SAVE_CANDIDATE } from '../actions/types';

const initialState = {
  candidates: [],
  savedCandidates: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_CANDIDATES:
      return {
        ...state,
        candidates: payload,
      };
    case SAVE_CANDIDATE:
      return {
        ...state,
        savedCandidates: [...state.savedCandidates, payload],
      };
    default:
      return state;
  }
}
