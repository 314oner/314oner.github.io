const {useState, useEffect} = preactHooks;
import getEndpoints from "../db/index.js";
const endpoints = getEndpoints();
export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR"
};
export const useApi = (endpoint) => {
  const [data, setData] = useState({
    state: apiStates.LOADING,
    error: "",
    data: []
  });
  const env = `process.env.NODE_ENV=development`;
  const path = !!env ? `https://raw.githubusercontent.com/314oner/314oner.github.io/gh-pages/db/${endpoint}.json` : `http://localhost:3001/api/${endpoint}`;
  const setPartData = (partialData) => setData({...data, ...partialData});
  useEffect(() => {
    setPartData({
      state: apiStates.LOADING
    });
    fetch(path).then((response) => response.json()).then((data2) => {
      setPartData({
        state: apiStates.SUCCESS,
        data: data2
      });
    }).catch(() => {
      setPartData({
        state: apiStates.ERROR,
        error: "fetch failed"
      });
    });
  }, []);
  return data;
};
export default useApi;
