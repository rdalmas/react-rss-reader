import axios from "axios";
import qs from "qs";

const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  paramsSerializer: params => qs.stringify(params, { skipNulls: true })
});

export default http;