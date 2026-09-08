'use strict';

const test = require('ava');
const { getAST } = require('./__helpers');

test('placeholder text meets WCAG AA contrast', async (t) => {
  const ast = await getAST();

  // `neutral.600` (#757575) is ~4.6:1 on white. The previous value,
  // `neutral.500` (#9e9e9e), was ~2.7:1 and failed WCAG 1.4.3.
  const placeholderRule = ast.nodes
    .filter((node) => node.type === 'rule')
    .reverse()
    .find((node) => node.selector === 'input::placeholder, textarea::placeholder');

  t.truthy(placeholderRule);

  const color = placeholderRule.nodes.find((decl) => decl.prop === 'color');
  const opacity = placeholderRule.nodes.find((decl) => decl.prop === 'opacity');

  t.is(color.value, '#757575');

  // Without this, Firefox's default placeholder opacity lowers the effective
  // contrast back below the threshold.
  t.is(opacity.value, '1');
});
