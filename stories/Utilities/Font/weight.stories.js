import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import random from '../../_utils/random';

const lorem = new LoremIpsum({ random });

export default {
  title: 'Utilities/Font/Weight',
};

export const Normal = () => <p className="font-normal">{lorem.generateParagraphs(1)}</p>;

export const Bold = () => (
  <>
    <p className="font-bold">{lorem.generateParagraphs(1)}</p>
    <strong>{lorem.generateParagraphs(1)}</strong>
  </>
);
