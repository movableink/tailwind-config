'use strict';

const test = require('ava');
// eslint-disable-next-line ava/no-import-test-files
const { buildSafeList } = require('../utility/build-safelist.js');

test('it creates a list of classes from tailwind config object', async (t) => {
  t.deepEqual(buildSafeList(mockObject), []);
});