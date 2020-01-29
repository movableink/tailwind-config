export default function makeCallout(text) {
  return `
    <div style="padding: 16px; margin-top: 8px; margin-bottom: 8px;" class="bg-neutral-300">
      ${text}
    </div>
  `;
}
