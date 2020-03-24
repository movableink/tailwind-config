import { LoremIpsum } from 'lorem-ipsum';
import { html } from 'htm/preact';
import Example from '../_utils/Example';
import random from '../_utils/random';

const lorem = new LoremIpsum({
  random,
  wordsPerSentence: {
    min: 5,
    max: 8,
  },
});

function makeHeadingTextStory(size) {
  return html`
    <${Example}>
      <p class="heading-${size}">${lorem.generateSentences(1)}</p>
    </${Example}>
  `;
}

export default {
  title: 'Components|Heading Text',
};

export const ExtraSmall = () => makeHeadingTextStory('xs');

export const Small = () => makeHeadingTextStory('sm');

export const Medium = () => makeHeadingTextStory('md');

export const Large = () => makeHeadingTextStory('lg');

export const ExtraLarge = () => makeHeadingTextStory('xl');

export const ExtraExtraLarge = () => makeHeadingTextStory('2xl');
