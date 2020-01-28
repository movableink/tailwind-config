import { LoremIpsum } from 'lorem-ipsum';
import makeCallout from '../../_utils/callout';

const lorem = new LoremIpsum();

function makeLetterSpacingStory(size, notes) {
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

export const ExtraExtraSmall = () =>
  makeLetterSpacingStory('2xs', 'Use sparingly. Caption text only.');

export const ExtraSmall = () => makeLetterSpacingStory('xs', 'Use sparingly. Caption text only.');

export const Small = () => makeLetterSpacingStory('sm', 'Use sparingly. Caption text only.');

export const Base = () => makeLetterSpacingStory('base', 'Default line height for all type');

export const Medium = () => makeLetterSpacingStory('md', 'Used for the largest body styles');

export const Large = () =>
  makeLetterSpacingStory(
    'lg',
    'Reserved for the smaller heading styles. Should never be applied to body text.'
  );

export const ExtraLarge = () =>
  makeLetterSpacingStory(
    'xl',
    'Reserved for the smaller heading styles. Should never be applied to body text.'
  );

export const ExtraLarge2 = () =>
  makeLetterSpacingStory(
    '2xl',
    'Reserved for the larged heading styles. Should never be applied to body text.'
  );

export const ExtraLarge3 = () =>
  makeLetterSpacingStory(
    '3xl',
    'Reserved for the largest heading styles. Should never be applied to body text.'
  );
