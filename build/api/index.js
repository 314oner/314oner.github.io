import getEndpoints from "../db/index.js";
const endpoints = getEndpoints();
const getJson = async (endpoint) => {
  const path = `https://raw.githubusercontent.com/314oner/314oner.github.io/gh-pages/apps/json-server/dist/db/${endpoint}.json`;
  const response = await fetch(path);
  return await response.json();
};
const api = {
  get: {
    data: () => getJson("data")
  }
};
export default api;
