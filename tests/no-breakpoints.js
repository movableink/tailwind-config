'use strict';

const test = require('ava');
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

test('there are no width-based media queries', async (t) => {
  const ast = await parse('../dist/fluid-tailwind.css');

  const mediaQueries = ast.nodes.filter((node) => node.type === 'atrule');
  const minWidthMediaQueries = mediaQueries.filter((node) => node.params.includes('min-width'));

  t.is(minWidthMediaQueries.length, 0);
});
