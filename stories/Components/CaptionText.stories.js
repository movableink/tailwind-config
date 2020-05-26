import { LoremIpsum } from 'lorem-ipsum';
import { html } from 'htm/preact';
import random from '../_utils/random';

const lorem = new LoremIpsum({ random });

function makeCaptionTextStory(size) {
  return html` <p class="caption-${size}">${lorem.generateParagraphs(1)}</p> `;
}

export default {
  title: 'Components|Caption Text',
};

export const Small = () => makeCaptionTextStory('sm');

export const Large = () => makeCaptionTextStory('lg');
