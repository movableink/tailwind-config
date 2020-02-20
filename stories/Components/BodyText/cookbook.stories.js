import { html } from 'htm/preact';
import Example from '../../_utils/Example';

export default {
  title: 'Components/Body Text|Cookbook'
};

export const OverridingFontWeight = () => html`
  <${Example}>
    <p class="body-base font-bold">
      Base body class, but with bold text
    </p>
  </>
`;
