'use strict';

const test = require('ava');
const { getAST } = require('./__helpers');

function rules(ast) {
  return ast.nodes.filter((node) => node.type === 'rule');
}

function declaration(rule, prop) {
  return rule.nodes.find((node) => node.type === 'decl' && node.prop === prop);
}

test('the `outline` reset never applies to keyboard focus', async (t) => {
  const ast = await getAST();

  // The bug this guards against: an unqualified `.fluid-button:focus { outline: none }`
  // outranks a consuming app's `button:focus-visible` rule and hides the focus
  // indicator (WCAG 2.4.7). Any rule that suppresses the outline must exclude
  // `:focus-visible`.
  const unscopedResets = rules(ast)
    .filter((rule) => rule.selector.includes('.fluid-button'))
    .filter((rule) => !rule.selector.includes(':not(:focus-visible)'))
    .filter((rule) => {
      const outline = declaration(rule, 'outline');

      return outline && outline.value === 'none';
    });

  t.deepEqual(
    unscopedResets.map((rule) => rule.selector),
    []
  );
});

test('the `outline` reset is present for pointer focus', async (t) => {
  const ast = await getAST();

  const reset = rules(ast).find((rule) =>
    rule.selector.startsWith('.fluid-button:focus:not(:focus-visible)')
  );

  t.truthy(reset);
  t.is(declaration(reset, 'outline').value, 'none');
});

test('buttons have a visible focus ring for keyboard focus', async (t) => {
  const ast = await getAST();

  const ring = rules(ast).find((rule) => rule.selector.startsWith('.fluid-button:focus-visible'));

  t.truthy(ring);
  t.is(declaration(ring, 'outline').value, '2px solid #2962ff');
  t.is(declaration(ring, 'outline-offset').value, '2px');

  // The static appearance class shares the rule so Storybook's "Focused" state
  // shows the same ring a keyboard user gets.
  t.true(ring.selector.includes('.fluid-button.appearance\\:focused'));
});
