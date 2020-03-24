import { LoremIpsum } from 'lorem-ipsum';
import { html } from 'htm/preact';
import Example from '../_utils/Example';
import random from '../_utils/random';

const lorem = new LoremIpsum({ random });

function makeCaptionTextStory(size) {
  return html`
    <${Example}>
      <p class="caption-${size}">${lorem.generateParagraphs(1)}</p>
    </${Example}>
  `;
}

export default {
  title: 'Components|Caption Text',
};

export const Small = () => makeCaptionTextStory('sm');

export const Large = () => makeCaptionTextStory('lg');
