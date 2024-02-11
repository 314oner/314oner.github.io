'use strict';

const { resolve } = require('path');

const globalCachePath = resolve(`${__dirname}/.cache`);

function sanitize(packageName) {
  return packageName.replace('/', '.').replace(/[^a-z0-9.@_-]+/gi, '-');
}


function getEslintCachePath(packageName) {
  return `${globalCachePath}/${sanitize(packageName)}/eslint`;
}

function getJestCachePath(packageName) {
  return `${globalCachePath}/${sanitize(packageName)}/jest`;
}

module.exports = {
  getJestCachePath,
  getEslintCachePath,
};
