import { html } from 'htm/preact';
import render from 'preact-render-to-string';
import Prism from 'prismjs';
import { v4 as uuid } from 'uuid';

function highlightWithPrism(code) {
  return Prism.highlight(code, Prism.languages.html);
}

export default function Example({ className, children, ...rest }) {
  const code = render(children, {}, { pretty: true });
  const highlightedCode = highlightWithPrism(code);
  const id = uuid();

  // Necessary to "hack" the highlighted code example into the DOM so that
  // indentation is preserved in an attractive way. Preact either strips the
  // whitespace out completely, or inserts too much whitespace around the
  // highlighted elements from Prism
  requestAnimationFrame(() => {
    document.getElementById(id).innerHTML = highlightedCode;
  });

  return html`
    <div class="border border-neutral-300 rounded ${className}" ...${rest}>
      <div class="border-b border-neutral-300 p-4">
        ${children}
      </div>
      <pre class="p-4 bg-neutral-200" style="tab-size: 2">
        <code class="block max-w-full whitespace-pre-wrap leading-xs" id=${id} />
      </pre>
    </div>
  `;
}
