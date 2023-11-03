//@ts-ignore
import getEndpoints from '../db';
const endpoints = getEndpoints();
const getJson = async (endpoint) => {
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
const api = {
    get: {
        data: () => getJson('data'),
    },
};
export default api;
