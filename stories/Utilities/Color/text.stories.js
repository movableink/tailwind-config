import { html } from 'htm/preact';
import Example from '../../_utils/Example';

export default {
  title: 'Utilities|Color/Text'
};

export const ChangeOnHover = () => html`
  <${Example}>
    <p class="text-red hover:text-blue">
      Hover me for blue text!
    </p>
  </>
`;
