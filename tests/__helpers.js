'use strict';

const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const postcss = require('postcss');

const readFile = promisify(fs.readFile);

async function parse(filePath) {
  const file = await readFile(path.resolve(__dirname, filePath));
  const result = postcss.parse(file);

  return result;
}

function getAST() {
  return parse('../dist/fluid-tailwind.css');
}

module.exports = {
  getAST,
};
