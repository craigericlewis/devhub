import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

// Register User
export const registerUser = (userData, history) => dispatch =>{
  axios
      .post("/api/users/register", userData)
      .then(res => history.push('/login'))
      .catch(err => 
        dispatch({
          type: GET_ERRORS,
          payload : err.response.data
        })
      );
};

export const loginUser = (userData) => dispatch => {
  axios.post('/api/users/login', userData)
  .then(res => {
    // Save to local storage
    const {token} = res.data;
    // Set to local storage
    localStorage.setItem('jwtToken', token);
    // Set token to Auth Header
    setAuthToken(token);
    // Decode token
    const decoded = jwt_decode(token);
    // Set current user
    dispatch(setCurrentUser(decoded));
  })
  .catch(err => {
    dispatch({
      type: GET_ERRORS,
      payload : err.response.data
    })
  });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return{
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// Log user out
export const logoutUser = () => dispatch => {
  //Remove token from localStorage
  localStorage.removeItem('jwtToken');
  //Remove auth header for future requests
  setAuthToken(false);
  
  dispatch(setCurrentUser({}));
}