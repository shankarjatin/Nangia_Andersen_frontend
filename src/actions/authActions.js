import api from '../utils/api';
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';

export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/auth/register', formData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: REGISTER_FAIL });
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/auth/login', formData);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: LOGIN_FAIL });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
