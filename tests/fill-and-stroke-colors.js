'use strict';

const test = require('ava');
const { getAST } = require('./__helpers');

test('all colors of fill are present', async (t) => {
  const ast = await getAST();

  const fillNeutralRules = ast.nodes
    .filter((node) => node.type === 'rule')
    .filter((node) => node.selector.startsWith('.fill-neutral'));

  // 9 colors plus default
  t.is(fillNeutralRules.length, 10);
});

test('`fill-current` is present', async (t) => {
  const ast = await getAST();

  const fillCurrentRule = ast.nodes
    .filter((node) => node.type === 'rule')
    .find((node) => node.selector === '.fill-current');

  t.truthy(fillCurrentRule);

  const fillDecl = fillCurrentRule.nodes.find((decl) => decl.prop === 'fill');

  t.is(fillDecl.value, 'currentColor');
});

test('all colors of stroke are present', async (t) => {
  const ast = await getAST();

  const strokeNeutralRules = ast.nodes
    .filter((node) => node.type === 'rule')
    .filter((node) => node.selector.startsWith('.stroke-neutral'));

  // 9 colors plus default
  t.is(strokeNeutralRules.length, 10);
});

test('`stroke-current` is present', async (t) => {
  const ast = await getAST();

  const strokeCurrentRule = ast.nodes
    .filter((node) => node.type === 'rule')
    .find((node) => node.selector === '.stroke-current');

  t.truthy(strokeCurrentRule);

  const strokeDecl = strokeCurrentRule.nodes.find((decl) => decl.prop === 'stroke');

  t.is(strokeDecl.value, 'currentColor');
});
