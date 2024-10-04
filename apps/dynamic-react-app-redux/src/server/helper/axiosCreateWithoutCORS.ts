import axios from 'axios';

const axiosCreate = axios.create({
  withCredentials: false,
});

export default axiosCreate;
