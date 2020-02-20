import { html } from 'htm/preact';

export default function Callout({ children }) {
  return html`
    <div class="bg-neutral-300 p-4 my-2">
      ${children}
    </div>
  `;
}
