import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

function makeFontWeightStory(size) {
  return `
    <h2><pre>.font-${size}</pre></h2>
    <p class="font-${size}">${lorem.generateParagraphs(1)}</p>
  `;
}

export default {
  title: 'Font|Weight',
  decorators: [storyFn => `<div style="margin: 16px">${storyFn()}</div>`]
};

export const Thin = () => makeFontWeightStory('thin');

export const Light = () => makeFontWeightStory('light');

export const Normal = () => makeFontWeightStory('normal');

export const SemiBold = () => makeFontWeightStory('semibold');

export const ExtraBold = () => makeFontWeightStory('extrabold');
