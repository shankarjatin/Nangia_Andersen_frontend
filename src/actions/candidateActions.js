import api from '../utils/api';
import { SEARCH_CANDIDATES, SAVE_CANDIDATE } from './types';

export const searchCandidates = (params) => async (dispatch) => {
  try {
    const res = await api.get('/candidates', { params });
    dispatch({ type: SEARCH_CANDIDATES, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const saveCandidate = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/candidates', formData);
    dispatch({ type: SAVE_CANDIDATE, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};
