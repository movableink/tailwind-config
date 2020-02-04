import { LoremIpsum } from 'lorem-ipsum';
import makeCallout from '../../_utils/callout';
import random from '../../_utils/random';

const lorem = new LoremIpsum({ random });

function makeLineHeightStory(size, notes) {
  return `
    <h2><pre>.leading-${size}</pre></h2>
    ${notes ? makeCallout(notes) : ''}
    <p class="leading-${size}">${lorem.generateParagraphs(1)}</p>
  `;
}

export default {
  title: 'Utilities|Font/Line Height',
  decorators: [storyFn => `<div style="margin: 16px">${storyFn()}</div>`]
};

export const None = () =>
  makeLineHeightStory(
    'none',
    'Match the line height to the font size, no matter what the font size is'
  );

export const ExtraExtraSmall = () =>
  makeLineHeightStory('2xs', 'Use sparingly. Caption text only.');

export const ExtraSmall = () => makeLineHeightStory('xs', 'Use sparingly. Caption text only.');

export const Small = () => makeLineHeightStory('sm', 'Use sparingly. Caption text only.');

export const Base = () => makeLineHeightStory('base', 'Default line height for all type');

export const Medium = () => makeLineHeightStory('md', 'Used for the largest body styles');

export const Large = () =>
  makeLineHeightStory(
    'lg',
    'Reserved for the smaller heading styles. Should never be applied to body text.'
  );

export const ExtraLarge = () =>
  makeLineHeightStory(
    'xl',
    'Reserved for the smaller heading styles. Should never be applied to body text.'
  );

export const ExtraLarge2 = () =>
  makeLineHeightStory(
    '2xl',
    'Reserved for the larged heading styles. Should never be applied to body text.'
  );

export const ExtraLarge3 = () =>
  makeLineHeightStory(
    '3xl',
    'Reserved for the largest heading styles. Should never be applied to body text.'
  );
