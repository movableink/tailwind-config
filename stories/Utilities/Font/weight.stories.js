import { LoremIpsum } from 'lorem-ipsum';
import { html } from 'htm/preact';
import random from '../../_utils/random';

const lorem = new LoremIpsum({ random });

export default {
  title: 'Utilities|Font/Weight'
};

export const Normal = () => html`
  <h2><pre>.font-normal</pre></h2>
  <p class="font-normal">${lorem.generateParagraphs(1)}</p>
`;

export const Bold = () => html`
  <h2><pre>.font-bold</pre></h2>
  <p class="font-bold mb-4">${lorem.generateParagraphs(1)}</p>
  <h2><pre>&lt;strong&gt;</pre></h2>
  <strong>${lorem.generateParagraphs(1)}</strong>
`;
