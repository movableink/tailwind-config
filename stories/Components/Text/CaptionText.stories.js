import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import random from '../../_utils/random';

const lorem = new LoremIpsum({ random });

function makeCaptionTextStory(size) {
  return <p className={`caption-${size}`}>{lorem.generateParagraphs(1)}</p>;
}

export default {
  title: 'Components/Text/Caption',
};

export const Small = () => makeCaptionTextStory('sm');

export const Large = () => makeCaptionTextStory('lg');
