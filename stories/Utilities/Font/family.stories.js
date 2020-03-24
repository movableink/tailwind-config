import { LoremIpsum } from 'lorem-ipsum';
import { html } from 'htm/preact';
import Example from '../../_utils/Example';
import random from '../../_utils/random';

const lorem = new LoremIpsum({ random });

export default {
  title: 'Utilities|Font/Family',
};

export const SansSerif = () => html`
  <${Example}>
    <p class="font-sans">${lorem.generateParagraphs(1)}</p>
  </${Example}>
`;

export const MonoSpace = () => html`
  <${Example}>
    <p class="font-mono">${lorem.generateParagraphs(1)}</p>
  </${Example}>
`;
