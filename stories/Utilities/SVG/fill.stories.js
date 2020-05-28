import { html } from 'htm/preact';
import Gear from '../../_icons/Gear';

export default {
  title: 'Utilities/SVG/Path',
};

export const SettingColor = () => html`<${Gear} className="h-6 w-6 text-blue fill-current" />`;
