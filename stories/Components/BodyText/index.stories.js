import { LoremIpsum } from 'lorem-ipsum';
import { html } from 'htm/preact';
import Example from '../../_utils/Example';
import random from '../../_utils/random';

const lorem = new LoremIpsum({ random });

function makeBodyTextStory(size) {
  return html`
    <${Example}>
      <p class="body-${size}">
        ${lorem.generateParagraphs(1)}
      </p>
    </${Example}>
  `;
}

export default {
  title: 'Components|Body Text',
};

export const Small = () => makeBodyTextStory('sm');

export const Base = () => makeBodyTextStory('base');

export const Large = () => makeBodyTextStory('lg');

export const ExtraLarge = () => makeBodyTextStory('xl');
