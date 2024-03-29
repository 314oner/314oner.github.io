#!/usr/bin/env node
import { Command } from 'commander';
import { startGateway } from '@apps/nest-app-gateway';
import { startService1 } from '@apps/nest-app-microservice-1-user';
import { startService2 } from '@apps/nest-app-microservice-2-permission';
import { startService3 } from '@apps/nest-app-microservice-3-token';
import { startService4 } from '@apps/nest-app-microservice-4-mailer';
import { startService5 } from '@apps/nest-app-microservice-5-task';
import { startService6 } from '@apps/nest-app-microservice-6-post';
import { startService7 } from '@apps/nest-app-microservice-7-tag';
import { startService8 } from '@apps/nest-app-microservice-8-like';
import { startService9 } from '@apps/nest-app-microservice-9-security';
import { startService10 } from '@apps/nest-app-microservice-10-authorization';
import { startService11 } from '@apps/nest-app-microservice-11-order';
import { startService12 } from '@apps/nest-app-microservice-12-payment';

const command = new Command();

command
  .version('0.1.0')
  .option('-p, --port <n>', 'server port', parseInt)
  .parse(process.argv);

function sleep(time, value, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfill") {
        return resolve(value);
      } else {
        return reject();
      }
    }, time);
  });
}

const startAPI1 = () => ((command) => startService1().then(
  () => {
    console.log(`Microservice_1(TCP) listening on port 2999`)
  },
  (error) => {
    console.log(error);
  }).catch((error) => console.log(error)))(command)

const startAPI2 = () => ((command) => startService2().then(
  () => {
    console.log(`Microservice_2(TCP) listening on port 2998`)
  },
  (error) => {
    console.log(error);
  }).catch((error) => console.log(error)))(command)

const startAPI3 = () => ((command) => startService3().then(
  () => {
    console.log(`Microservice_3(TCP) listening on port 2997`)
  },
  (error) => {
    console.log(error);
  }).catch((error) => console.log(error)))(command)

const startAPI4 = () => ((command) => startService4().then(
  () => {
    console.log(`Microservice_4(TCP) listening on port 2996`)
  },
  (error) => {
    console.log(error);
  }).catch((error) => console.log(error)))(command)

const startAPI5 = () => ((command) => startService5().then(
  () => {
    console.log(`Microservice_7(TCP) listening on port 2995`)
  },
  (error) => {
    console.log(error);
  }).catch((error) => console.log(error)))(command)

const startAPI6 = () => ((command) => startService6().then(
  () => {
    console.log(`Microservice_6(TCP) listening on port 2994`)
  },
  (error) => {
    console.log(error);
  }).catch((error) => console.log(error)))(command)

const startAPI7 = () => ((command) => startService7().then(
  () => {
    console.log(`Microservice_7(TCP) listening on port 2993`)
  },
  (error) => {
    console.log(error);
  }).catch((error) => console.log(error)))(command)

const startAPI8 = () => ((command) => startService8().then(
  () => {
    console.log(`Microservice_8(TCP) listening on port 2992`)
  },
  (error) => {
    console.log(error);
  }).catch((error) => console.log(error)))(command)

const startAPI9 = () => ((command) => startService9().then(
  () => {
    console.log(`Microservice_9(TCP) listening on port 2991`)
  },
  (error) => {
    console.log(error);
  }).catch((error) => console.log(error)))(command)

const startAPI10 = () => ((command) => startService10().then(
  () => {
    console.log(`Microservice_10(TCP) listening on port 2990`)
  },
  (error) => {
    console.log(error);
  }).catch((error) => console.log(error)))(command)

const startAPI11 = () => ((command) => startService11().then(
  () => {
    console.log(`Microservice_11(TCP) listening on port 2989`)
  },
  (error) => {
    console.log(error);
  }).catch((error) => console.log(error)))(command)

const startAPI12 = () => ((command) => startService12().then(
  () => {
    console.log(`Microservice_12(TCP) listening on port 2988`)
  },
  (error) => {
    console.log(error);
  }).catch((error) => console.log(error)))(command)

async function* main() {
  while (true) {
    await sleep(100, startAPI1(), "fulfill");
    await sleep(100, startAPI2(), "fulfill");
    await sleep(100, startAPI3(), "fulfill");
    await sleep(100, startAPI4(), "fulfill");
    await sleep(100, startAPI5(), "fulfill");
    await sleep(100, startAPI6(), "fulfill");
    await sleep(100, startAPI7(), "fulfill");
    await sleep(100, startAPI8(), "fulfill");
    await sleep(100, startAPI9(), "fulfill");
    await sleep(100, startAPI10(), "fulfill");
    await sleep(100, startAPI11(), "fulfill");
    await sleep(100, startAPI12(), "fulfill");
    await sleep(100, startGateway(), "fulfill");
    const value = yield;
    console.log(value);
  }
}
main().next()
process.on('unhandledRejection', (reason, promise) => {
  console.log('unhandledRejection', reason, promise);
});