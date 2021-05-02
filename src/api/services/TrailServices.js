import axios from 'axios';
import queryString from 'query-string';
import * as config from '../../constants/config';

const TrailServices = axios.create({
  baseURL: config.API_LOGIN,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
TrailServices.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
TrailServices.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
    // error = error.response;
    // return error;
  }
);
export default TrailServices;
