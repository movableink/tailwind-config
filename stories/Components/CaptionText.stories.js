import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

function makeCaptionTextStory(size) {
  return `
    <h2><pre>.caption-${size}</pre></h2>
    <p class="caption-${size}">${lorem.generateParagraphs(1)}</p>
  `;
}

export default {
  title: 'Components|Caption Text',
  decorators: [storyFn => `<div style="margin: 16px">${storyFn()}</div>`]
};

export const Small = () => makeCaptionTextStory('sm');

export const Large = () => makeCaptionTextStory('lg');
