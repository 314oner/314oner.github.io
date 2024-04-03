import jsonServer from 'json-server';
import pause from 'connect-pause';

const server = jsonServer.create();
const router = jsonServer.router(process.env.DB_PATH || './src/data.json');
const customRoutes = jsonServer.rewriter('./routes.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(customRoutes);
server.use(pause(1000));
server.use(router);
server.listen(port, () => {
  console.log('json-server is running!');
});
