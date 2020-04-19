import axios from 'axios';
import qs from 'qs';

const ENDPOINTS = {
  rss: '/api/rss/read'
}

const http = axios.create({
  headers: {
    'Content-Type': 'text/xml',
    'Access-Control-Allow-Origin': '*'
  },
  paramsSerializer: params => qs.stringify(params, { skipNulls: true })
});

export { ENDPOINTS }
export default http;
