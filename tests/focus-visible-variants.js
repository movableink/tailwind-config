'use strict';

const test = require('ava');
const { getAST } = require('./__helpers');

test('the `focus-visible` variant is generated for outline and ring utilities', async (t) => {
  const ast = await getAST();

  const selectors = ast.nodes.filter((node) => node.type === 'rule').map((node) => node.selector);

  for (const selector of [
    '.focus-visible\\:outline-none:focus-visible',
    '.focus-visible\\:ring-2:focus-visible',
    '.focus-visible\\:ring-blue-800:focus-visible',
    '.focus-visible\\:ring-offset-2:focus-visible',
    '.focus-visible\\:border-primary-main:focus-visible',
  ]) {
    t.true(selectors.includes(selector), `expected \`${selector}\` to be generated`);
  }
});

test('`focus-visible` is emitted after `focus` so it wins when both match', async (t) => {
  const ast = await getAST();

  const selectors = ast.nodes.filter((node) => node.type === 'rule').map((node) => node.selector);

  const focus = selectors.indexOf('.focus\\:ring-2:focus');
  const focusVisible = selectors.indexOf('.focus-visible\\:ring-2:focus-visible');

  t.not(focus, -1);
  t.not(focusVisible, -1);
  t.true(focusVisible > focus);
});
