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

test('there are no height classes', async t => {
  const ast = await parse('../dist/fluid-tailwind.css');
  const rules = ast.nodes.filter(node => node.type === 'rule');
  const heightRules = rules.filter(
    ({ selector }) =>
      selector.startsWith('.h-') || selector.startsWith('.max-h-') || selector.startsWith('.min-h-')
  );

  t.is(heightRules.length, 0);
});

test('there are no width classes', async t => {
  const ast = await parse('../dist/fluid-tailwind.css');
  const rules = ast.nodes.filter(node => node.type === 'rule');
  const widthRules = rules.filter(
    ({ selector }) =>
      selector.startsWith('.w-') || selector.startsWith('.max-w-') || selector.startsWith('.min-w-')
  );

  t.is(widthRules.length, 0);
});
