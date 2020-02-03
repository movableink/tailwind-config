import { LoremIpsum } from 'lorem-ipsum';
import random from '../_utils/random';

const lorem = new LoremIpsum({
  random,
  wordsPerSentence: {
    min: 5,
    max: 8
  }
});

function makeHeadingTextStory(size) {
  return `
    <h2><pre>.heading-${size}</pre></h2>
    <p class="heading-${size}">${lorem.generateSentences(1)}</p>
  `;
}

export default {
  title: 'Components|Heading Text',
  decorators: [storyFn => `<div style="margin: 16px">${storyFn()}</div>`]
};

export const ExtraSmall = () => makeHeadingTextStory('xs');

export const Small = () => makeHeadingTextStory('sm');

export const Medium = () => makeHeadingTextStory('md');

export const Large = () => makeHeadingTextStory('lg');

export const ExtraLarge = () => makeHeadingTextStory('xl');

export const ExtraExtraLarge = () => makeHeadingTextStory('2xl');
