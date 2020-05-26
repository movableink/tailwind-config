import { LoremIpsum } from 'lorem-ipsum';
import { html } from 'htm/preact';
import random from '../../_utils/random';

const lorem = new LoremIpsum({ random });

export default {
  title: 'Utilities|Font/Weight',
};

export const Normal = () => html` <p class="font-normal">${lorem.generateParagraphs(1)}</p> `;

export const Bold = () => html`
  <p class="font-bold">${lorem.generateParagraphs(1)}</p>
  <strong>${lorem.generateParagraphs(1)}</strong>
`;
