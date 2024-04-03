//@ts-nocheck
const { useState, useEffect } = preactHooks;
//apis
import getEndpoints from '../db';

const endpoints = getEndpoints();

type ENDPOINTS = keyof typeof endpoints;
type RESPONSE_DATA = {
  greeting: string;
};
/*
type API = {
  get: {
    data: () => Promise<RESPONSE_DATA>;
  };
};
*/
export const apiStates = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const useApi = (endpoint: ENDPOINTS) => {
  const [data, setData] = useState({
    state: apiStates.LOADING,
    error: '',
    data: [],
  });
  const env = null || `process.env.NODE_ENV=development`; //TODO: add process for production
  const path = env
    ? `https://raw.githubusercontent.com/314oner/314oner.github.io/gh-pages/db/${endpoint}.json`
    : `http://localhost:3001/api/${endpoint}`;
  const setPartData = (partialData: {
    state: string;
    data?: unknown;
    error?: string;
  }) => setData({ ...data, ...partialData });
  useEffect(() => {
    setPartData({
      state: apiStates.LOADING,
    });
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        setPartData({
          state: apiStates.SUCCESS,
          data,
        });
      })
      .catch(() => {
        setPartData({
          state: apiStates.ERROR,
          error: 'fetch failed',
        });
      });
  }, []);

  return data;
};
export type { RESPONSE_DATA, ENDPOINTS };
export default useApi;
