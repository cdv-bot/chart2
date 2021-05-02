import axios from 'axios';
import queryString from 'query-string';
import * as config from '../../constants/config';

const TopAssets = axios.create({
  baseURL: config.API_TOP_ASSETS,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
TopAssets.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
TopAssets.interceptors.response.use(
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
export default TopAssets;
