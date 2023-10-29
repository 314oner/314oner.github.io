"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
const db_1 = __importDefault(require("../../../json-server/src/db"));
const endpoints = (0, db_1.default)();
const getJson = async (endpoint) => {
    //@ts-ignore
    const path = `http://localhost:3001/api/${endpoint}`;
    const response = await fetch(path);
    return await response.json();
};
const api = {
    get: {
        data: () => getJson('data'),
    },
};
exports.default = api;
