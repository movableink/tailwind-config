import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import random from '../../_utils/random';

const lorem = new LoremIpsum({ random });

export default {
  title: 'Utilities/Font/Family',
};

export const SansSerif = () => <p className="font-sans">{lorem.generateParagraphs(1)}</p>;

export const MonoSpace = () => <p className="font-mono">{lorem.generateParagraphs(1)}</p>;
