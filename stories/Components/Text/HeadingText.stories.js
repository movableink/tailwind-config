import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import random from '../../_utils/random';

const lorem = new LoremIpsum({
  random,
  wordsPerSentence: {
    min: 5,
    max: 8,
  },
});

function makeHeadingTextStory(size) {
  return <p className={`heading-${size}`}>{lorem.generateSentences(1)}</p>;
}

export default {
  title: 'Components/Text/Heading',
};

export const ExtraSmall = () => makeHeadingTextStory('xs');

export const Small = () => makeHeadingTextStory('sm');

export const Medium = () => makeHeadingTextStory('md');

export const Large = () => makeHeadingTextStory('lg');

export const ExtraLarge = () => makeHeadingTextStory('xl');

export const ExtraExtraLarge = () => makeHeadingTextStory('2xl');
