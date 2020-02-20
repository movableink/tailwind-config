import { LoremIpsum } from 'lorem-ipsum';
import { html } from 'htm/preact';
import Example from '../../_utils/Example';
import random from '../../_utils/random';

const lorem = new LoremIpsum({ random });

export default {
  title: 'Utilities|Font/Weight'
};

export const Normal = () => html`
  <${Example}>
    <p class="font-normal">${lorem.generateParagraphs(1)}</p>
  </>
`;

export const Bold = () => html`
  <${Example} className="mb-4">
    <p class="font-bold">${lorem.generateParagraphs(1)}</p>
  </>
  <${Example}>
    <strong>${lorem.generateParagraphs(1)}</strong>
  </>
`;
