import { LoremIpsum } from 'lorem-ipsum';
import { html } from 'htm/preact';
import random from '../../_utils/random';

const lorem = new LoremIpsum({ random });

export default {
  title: 'Utilities/Font/Family',
};

export const SansSerif = () => html` <p class="font-sans">${lorem.generateParagraphs(1)}</p> `;

export const MonoSpace = () => html` <p class="font-mono">${lorem.generateParagraphs(1)}</p> `;
