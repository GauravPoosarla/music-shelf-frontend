import axios from 'axios';
import { BACKEND_URL } from '../constants/apiEndPoint';

const makeRequest = async ({ url, method }, dynamicConfig, navigate) => {
  try {
    const response = await axios({
      baseURL: BACKEND_URL,
      url,
      method,
      ...dynamicConfig,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      navigate('/error');
    }
  }
};

export default makeRequest;
