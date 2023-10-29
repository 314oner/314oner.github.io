//@ts-ignore
import getEndpoints from '../../../json-server/src/db';

const endpoints = getEndpoints();

type ENDPOINTS = keyof typeof endpoints;
type RESPONSE_DATA = {
  greeting: string;
};

const getJson = async <T>(endpoint: ENDPOINTS): Promise<T> => {
  //@ts-ignore
  const path = `http://localhost:3001/api/${endpoint}`;
  const response = await fetch(path);

  return await response.json();
};

type API = {
  get: {
    data: () => Promise<RESPONSE_DATA>;
  };
};
const api: API = {
  get: {
    data: () => getJson<RESPONSE_DATA>('data'),
  },
};

export type { RESPONSE_DATA, ENDPOINTS };
export default api;