import fastify from 'fastify';
import path from 'node:path';

const server = fastify();

server.register(require('@fastify/static'), {
  root: path.join(__dirname, '..', 'build'),
});

server.listen({ port: 5000 }, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});
