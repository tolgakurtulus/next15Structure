import axios from 'axios';
import { toastError, toastSuccess } from '@/components/Toast';

const apiEnvUrl = `https://96318a87-0588-4da5-9843-b3d7919f1782.mock.pstmn.io`;

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    const statusCode = err?.response?.status;
    if (statusCode === 401) {
      localStorage.removeItem('token');
      window.location.href = '/auth/login';
    }
    throw err;
  }
);

export const CallApi = async ({ method, url, data, responseType }) => {
  const token = localStorage.getItem('token');
  if (url !== '/sign-in-request' && !token) {
    window.location.href = '/auth/login';
    return;
  }

  try {
    const response = await axios({
      method,
      url: `${apiEnvUrl}${url}`,
      data,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      responseType: responseType ?? 'json',
    });

    toastSuccess('Connection Successful');
    return response.data;
  } catch (error) {
    toastError(error?.response?.data?.message || 'Connection Unsuccessful');
    throw error;
  }
};
