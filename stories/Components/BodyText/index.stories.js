import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

function makeBodyTextStory(size) {
  return `
    <h2><pre>.body-${size}</pre></h2>
    <p class="body-${size}">${lorem.generateParagraphs(1)}</p>
  `;
}

export default {
  title: 'Components|Body Text',
  decorators: [storyFn => `<div style="margin: 16px">${storyFn()}</div>`]
};

export const Small = () => makeBodyTextStory('sm');

export const Base = () => makeBodyTextStory('base');

export const Large = () => makeBodyTextStory('lg');

export const ExtraLarge = () => makeBodyTextStory('xl');
