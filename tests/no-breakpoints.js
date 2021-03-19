'use strict';

const test = require('ava');
const { getAST } = require('./__helpers');

test('there are no width-based media queries', async (t) => {
  const ast = await getAST();

  const mediaQueries = ast.nodes.filter((node) => node.type === 'atrule');
  const minWidthMediaQueries = mediaQueries.filter((node) => node.params.includes('min-width'));

  t.is(minWidthMediaQueries.length, 0);
});
