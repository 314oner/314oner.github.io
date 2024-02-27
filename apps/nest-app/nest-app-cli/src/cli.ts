#!/usr/bin/env node

import * as program from 'commander';
import { startApi } from '@nest-app/api';
import { startApi2 } from '@nest-app/microservice-api2';
//import { startApi3 } from '@nest-app/microservice-api3';

program
  .version('0.1.0')
  .option('-p, --port <n>', 'server port', parseInt)
  .parse(process.argv);

startApi().then((port) => console.log(`Listening on port ${port}`));
startApi2().then((port = 2998) =>
  console.log(`Microservice(TCP) listening on port 2998`)
);
/*
startApi3(program.port).then((port = 2997) =>
  console.log(`Microservice(Kafka) listening on port 2997`)
);
*/
