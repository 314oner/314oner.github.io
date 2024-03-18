#!/usr/bin/env node
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
import { Command } from 'commander';

const command = new Command();

function sleep(time, value, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfill") {
        return resolve(value);
      } else {
        return reject(new Error(value));
      }
    }, time);
  });
}


command
  .version('0.1.0')
  .option('-p, --port <n>', 'server port', parseInt)
  .parse(process.argv);


const startAP1 = new Promise((resolve, reject) => {
  Promise.resolve(startService1().then(() => console.log(`Microservice_1(TCP) listening on port 2999`)))
});

const startAP2 = new Promise((resolve, reject) => {
  Promise.resolve(startService2().then(() => console.log(`Microservice_6(TCP) listening on port 2998`)))
});

const startAPI3 = new Promise((resolve, reject) => {
  Promise.resolve(startService3().then(() => console.log(`Microservice_6(TCP) listening on port 2997`)))
});

const startAPI4 = new Promise((resolve, reject) => {
  Promise.resolve(startService4().then(() => console.log(`Microservice_6(TCP) listening on port 2996`)))
});

const startAPI5 = new Promise((resolve, reject) => {
  Promise.resolve(startService5().then(() => console.log(`Microservice_6(TCP) listening on port 2995`)))
});

const startAPI6 = new Promise((resolve, reject) => {
  Promise.resolve(startService6().then(() => console.log(`Microservice_6(TCP) listening on port 2994`)))
});

const startAPI7 = new Promise((resolve, reject) => {
  Promise.resolve(startService7().then(() => console.log(`Microservice_7(TCP) listening on port 2993`)))
});

const startAPI8 = new Promise((resolve, reject) => {
  Promise.resolve(startService8().then(() => console.log(`Microservice_8(TCP) listening on port 2992`)))
});

const startAPI9 = new Promise((resolve, reject) => {
  Promise.resolve(startService9().then(() => console.log(`Microservice_9(TCP) listening on port 2991`)))
});

const startAPI10 = new Promise((resolve, reject) => {
  Promise.resolve(startService10().then(() => console.log(`Microservice_10(TCP) listening on port 2990`)))
});

const startAPI11 = new Promise((resolve, reject) => {
  Promise.resolve(startService11().then(() => console.log(`Microservice_11(TCP) listening on port 2989`)))
});

const startAPI12 = new Promise(async (resolve, reject) => {
  Promise.resolve(startService12().then(() => console.log(`Microservice_11(TCP) listening on port 2988`)))
});

const s1 = sleep(200, startAP1, "fulfill");
const s2 = sleep(200, startAP2, "fulfill");
const s3 = sleep(200, startAPI3, "fulfill");
const s4 = sleep(200, startAPI4, "fulfill");
const s5 = sleep(200, startAPI5, "fulfill");
const s6 = sleep(200, startAPI6, "fulfill");
const s7 = sleep(200, startAPI7, "fulfill");
const s8 = sleep(200, startAPI8, "fulfill");
const s9 = sleep(200, startAPI9, "fulfill");
const s10 = sleep(100, startAPI10, "fulfill");
const s11 = sleep(100, startAPI11, "fulfill");
const s12 = sleep(100, startAPI12, "fulfill");


Promise.allSettled([
  Promise.resolve(startGateway().then(() => console.log(`Gateway listening on port 3000`))),
  Promise.race([s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12]).then((value) => {
    console.log(value);
    // some code...
  })
]).then((results) => {
  // results is an array of:
});