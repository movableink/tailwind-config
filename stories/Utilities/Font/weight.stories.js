import { LoremIpsum } from 'lorem-ipsum';
import random from '../../_utils/random';

const lorem = new LoremIpsum({ random });

export default {
  title: 'Utilities|Font/Weight',
  decorators: [storyFn => `<div style="margin: 16px">${storyFn()}</div>`]
};

export const Normal = () => `
  <h2><pre>.font-normal</pre></h2>
  <p class="font-normal">${lorem.generateParagraphs(1)}</p>
`;

export const Bold = () => `
  <h2><pre>.font-bold</pre></h2>
  <p class="font-bold" style="margin-bottom: 16px">${lorem.generateParagraphs(1)}</p>
  <h2><pre>&lt;strong&gt;</pre></h2>
  <strong>${lorem.generateParagraphs(1)}</strong>
`;
