import { LoremIpsum } from 'lorem-ipsum';
import makeCallout from '../_utils/callout';

const lorem = new LoremIpsum();

function makeFontSizeStory(size, notes) {
  return `
    <h2><pre>.text-${size}</pre></h2>
    ${notes ? makeCallout(notes) : ''}
    <p class="text-${size}">${lorem.generateParagraphs(1)}</p>
  `;
}

export default {
  title: 'Font|Size',
  decorators: [storyFn => `<div style="margin: 16px">${storyFn()}</div>`]
};

export const Minor3 = () =>
  makeFontSizeStory(
    '2xs',
    'Used for small caption text or Studio, where space is tigher. Use sparingly.'
  );

export const Minor2 = () =>
  makeFontSizeStory(
    'xs',
    'Used for caption text or studio where spacing is tighter. Use sparingly.'
  );

export const Minor1 = () =>
  makeFontSizeStory(
    'sm',
    'Minor sizes were created for caption text and for interfaces with much tighter size constraints like Studio'
  );

export const Base = () =>
  makeFontSizeStory(
    'base',
    'This should be the default font size. Generally we should try to stay above 16pt font wherever possible, however some of our interfaces will require slightly smaller text. '
  );

export const Major1 = () =>
  makeFontSizeStory(
    'lg',
    'This is a slightly larger body font that should be used to create more contrast and emphasis when combined with the default body size. '
  );

export const Major2 = () =>
  makeFontSizeStory(
    'xl',
    'This may not be used but has been defined to provide a step between 22px and 18px. Once we transition from current type to new type, this size may not be needed anymore. '
  );

export const Major3 = () => makeFontSizeStory('2xl', 'Used for H1-H6 elements');

export const Major4 = () => makeFontSizeStory('3xl', 'Used for H1-H6 elements');

export const Major5 = () => makeFontSizeStory('4xl', 'Used for H1-H6 elements');

export const Major6 = () => makeFontSizeStory('5xl', 'Used for H1-H6 elements');

export const Major7 = () => makeFontSizeStory('6xl', 'Used for H1-H6 elements');

export const Major8 = () => makeFontSizeStory('7xl', 'Used for H1-H6 elements');
