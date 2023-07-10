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

function makeStory(htmlClass) {
  return <p className={htmlClass}>{lorem.generateWords(3)}</p>;
}

export default {
  title: 'Components/Text/MUI',
};

export const h1 = () => {
  return <h1>{lorem.generateWords(3)}</h1>;
};
export const h2 = () => {
  return <h2>{lorem.generateWords(3)}</h2>;
};
export const h3 = () => {
  return <h3>{lorem.generateWords(3)}</h3>;
};
export const h4 = () => {
  return <h4>{lorem.generateWords(3)}</h4>;
};
export const h5 = () => {
  return <h5>{lorem.generateWords(3)}</h5>;
};
export const h6 = () => {
  return <h6>{lorem.generateWords(3)}</h6>;
};

export const subtitle1 = () => makeStory('subtitle1');
export const subtitle2 = () => makeStory('subtitle2');
export const body2 = () => makeStory('body2');
export const body1 = () => makeStory('body1');
export const caption = () => makeStory('caption');
export const overline = () => makeStory('overline');
