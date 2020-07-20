import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import random from '../../../_utils/random';

const lorem = new LoremIpsum({ random });

function makeBodyTextStory(size) {
  return <p className={`body-${size}`}>{lorem.generateParagraphs(1)}</p>;
}

export default {
  title: 'Components/Text/Body',
};

export const Small = () => makeBodyTextStory('sm');

export const Base = () => makeBodyTextStory('base');

export const Large = () => makeBodyTextStory('lg');

export const ExtraLarge = () => makeBodyTextStory('xl');
