import { LoremIpsum } from 'lorem-ipsum';
import { html } from 'htm/preact';
import random from '../_utils/random';

const lorem = new LoremIpsum({ random });

function makeCaptionTextStory(size) {
  return html`
    <h2><pre>.caption-${size}</pre></h2>
    <p class="caption-${size}">${lorem.generateParagraphs(1)}</p>
  `;
}

export default {
  title: 'Components|Caption Text'
};

export const Small = () => makeCaptionTextStory('sm');

export const Large = () => makeCaptionTextStory('lg');
