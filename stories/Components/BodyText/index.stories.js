import { LoremIpsum } from 'lorem-ipsum';
import { html } from 'htm/preact';
import random from '../../_utils/random';

const lorem = new LoremIpsum({ random });

function makeBodyTextStory(size) {
  return html`
    <h2><pre>.body-${size}</pre></h2>
    <p class="body-${size}">${lorem.generateParagraphs(1)}</p>
  `;
}

export default {
  title: 'Components|Body Text'
};

export const Small = () => makeBodyTextStory('sm');

export const Base = () => makeBodyTextStory('base');

export const Large = () => makeBodyTextStory('lg');

export const ExtraLarge = () => makeBodyTextStory('xl');
