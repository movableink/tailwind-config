import { LoremIpsum } from 'lorem-ipsum';
import makeCallout from '../../_utils/callout';
import random from '../../_utils/random';

const lorem = new LoremIpsum({ random });

function makeLetterSpacingStory(size, notes) {
  return `
    <h2><pre>.tracking-${size}</pre></h2>
    ${notes ? makeCallout(notes) : ''}
    <p class="tracking-${size}">${lorem.generateParagraphs(1)}</p>
  `;
}

export default {
  title: 'Utilities|Font/Letter Spacing',
  decorators: [storyFn => `<div class="m-4">${storyFn()}</div>`]
};

export const ExtraExtraSmall = () =>
  makeLetterSpacingStory('2xs', 'Reserved for large text, like headers');

export const ExtraSmall = () =>
  makeLetterSpacingStory('xs', 'Reserved for large text, like headers');

export const Small = () =>
  makeLetterSpacingStory('sm', 'Slightly decreased letter spacing for larger body text');

export const Base = () => makeLetterSpacingStory('base', 'Default letter spacing');

export const Medium = () =>
  makeLetterSpacingStory('md', 'Increased letter spacing for small text, like captions');
