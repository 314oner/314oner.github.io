"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const node_path_1 = __importDefault(require("node:path"));
const server = (0, fastify_1.default)();
server.register(require('@fastify/static'), {
    root: node_path_1.default.join(__dirname, 'dist')
});
server.listen({ port: 5000 }, (err, address) => {
    if (err)
        throw err;
    console.log(`Server is now listening on ${address}`);
});
