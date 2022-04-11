import axios from 'axios';

const instance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

export const sendRequest = async (url: string) => {
  return await instance
    .request({
      method: 'post',
      url: url,
    })
    .then((response: any) => {
      return response;
    })
    .catch(e => {
      return 'error';
    });
};
