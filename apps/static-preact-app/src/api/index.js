"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
const db_1 = __importDefault(require("../db"));
const endpoints = (0, db_1.default)();
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
    const path = `https://raw.githubusercontent.com/314oner/314oner.github.io/gh-pages/apps/json-server/dist/db/${endpoint}.json`;
    const response = await fetch(path);
    return await response.json();
};
const api = {
    get: {
        data: () => getJson('data'),
    },
};
exports.default = api;
