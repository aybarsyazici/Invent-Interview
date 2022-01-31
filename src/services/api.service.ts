import Axios from 'axios';
import { environment } from '../environment/environment';


const apiClient = Axios.create({
  baseURL: environment.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
  withCredentials: true,
  timeout: 5 * 1000,
  params: {},
});

export default apiClient;
