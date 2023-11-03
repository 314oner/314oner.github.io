import getEndpoints from "../db/index.js";
const endpoints = getEndpoints();
const getJson = async (endpoint) => {
  const path = process.env.NODE_ENV === "development" ? `http://localhost:3001/api/${endpoint}` : `https://raw.githubusercontent.com/314oner/314oner.github.io/gh-pages/db/${endpoint}.json`;
  const response = await fetch(path);
  return await response.json();
};
const api = {
  get: {
    data: () => getJson("data")
  }
};
export default api;
