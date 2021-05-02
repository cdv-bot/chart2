import axios from 'axios';
import queryString from 'query-string';
import * as config from '../../constants/config';

const PriceServices = axios.create({
  baseURL: config.API_LIST_PRICE,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
PriceServices.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
PriceServices.interceptors.response.use(
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
export default PriceServices;
