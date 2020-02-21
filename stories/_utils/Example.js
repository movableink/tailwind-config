import { html } from 'htm/preact';
import render from 'preact-render-to-string';
import Prism from 'prismjs';

function highlightWithPrism(code) {
  return Prism.highlight(code, Prism.languages.html);
}

function renderString(input) {
  return html([input]);
}

export default function Example({ className, children, ...rest }) {
  const code = render(children);
  const highlightedCode = highlightWithPrism(code);

  return html`
    <div class="border border-neutral-300 rounded ${className}" ...${rest}>
      <div class="border-b border-neutral-300 p-4">
        ${children}
      </div>
      <pre class="p-4 bg-neutral-200">
        <code class="block max-w-full whitespace-pre-wrap leading-xs">
          ${renderString(highlightedCode)}
        </code>
      </pre>
    </div>
  `;
}
