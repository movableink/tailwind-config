import { html } from 'htm/preact';

export default function InlineCode({ children }) {
  return html`
    <code class="bg-neutral-200 rounded py-px px-1 border border-neutral-300 leading-none">
      ${children}
    </code>
  `;
}
