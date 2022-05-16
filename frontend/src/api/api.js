//@Libs
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

export const $api = async ({ url, method = 'GET', body, auth = true }) => {
  if (auth) {
    const token = localStorage.getItem('token');
    instance.defaults.headers.common['Authorization'] = token;
  }

  let req = null;

  try {
    switch (method) {
      case 'GET':
      default:
        req = await instance.get(url);
        break;
      case 'POST':
        req = await instance.post(url, body);
        break;
      case 'PUT':
        req = await instance.put(url, body);
        break;
      case 'DELETE':
        req = await instance.delete(url);
        break;
    }
  } catch (error) {
    throw error.response && error.response.data
      ? error.response.data.message
      : error.message;
  }

  return req.data;
};
