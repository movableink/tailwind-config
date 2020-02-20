import { LoremIpsum } from 'lorem-ipsum';
import { html } from 'htm/preact';
import Callout from '../../_utils/Callout';
import random from '../../_utils/random';

const lorem = new LoremIpsum({ random });

function makeLetterSpacingStory(size, notes) {
  return html`
    <h2><pre>.tracking-${size}</pre></h2>
    ${notes ? html`<${Callout}>${notes}</Callout>` : ''}
    <p class="tracking-${size}">${lorem.generateParagraphs(1)}</p>
  `;
}

export default {
  title: 'Utilities|Font/Letter Spacing'
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
