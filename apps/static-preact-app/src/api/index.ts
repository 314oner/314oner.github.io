//@ts-ignore
import getEndpoints from '../db';

const endpoints = getEndpoints();

type ENDPOINTS = keyof typeof endpoints;
type RESPONSE_DATA = {
  greeting: string;
};

const getJson = async <T>(endpoint: ENDPOINTS): Promise<T> => {
  /*
  https://raw.githubusercontent.com/userName/projectName/branchName/relative-directory-path/fileName, где:
  
  userName - имя пользователя в gitHub
  branchName - название ветки в git
  relative-directory-path - путь внутри репозитория до файла
  fileName - имя файла (например data.json)
  */
  //@ts-ignore
  //const path = `http://localhost:3001/api/${endpoint}`;
  const path = `https://raw.githubusercontent.com/314oner/314oner.github.io/gh-pages/db/${endpoint}.json`;
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