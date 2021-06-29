import React from 'react';
import Gear from '../../_icons/Gear';

export default {
  title: 'Components/Table Cells',
};

export const Spacing = () => (
  <div className="grid grid-cols-1 gap-2">
    <table>
      <thead>
        <tr>
          <th className="fluid-table__th spacing:default">Text Only</th>
          <th className="fluid-table__th spacing:default">
            <Gear />
            Icon Left w/Text
          </th>
          <th className="fluid-table__th spacing:default">
            Icon Right w/Text
            <Gear />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th
            className="fluid-table__th spacing:default bg-transparent text-neutral-500 italic"
            colSpan="3"
          >
            No Spacing Modifier!
          </th>
        </tr>
        <tr className="divide-x">
          <td className="fluid-table__td">No Spacing</td>
          <td className="fluid-table__td">
            <Gear />
            No Spacing
          </td>
          <td className="fluid-table__td">
            No Spacing
            <Gear />
          </td>
        </tr>
        <tr>
          <th
            className="fluid-table__th spacing:default bg-transparent text-neutral-500 italic"
            colSpan="3"
          >
            Modifier `spacing:default`
          </th>
        </tr>
        <tr className="divide-x">
          <td className="fluid-table__td spacing:default">Default Spacing</td>
          <td className="fluid-table__td spacing:default">
            <Gear />
            Default Spacing
          </td>
          <td className="fluid-table__td spacing:default">
            Default Spacing
            <Gear />
          </td>
        </tr>

        <tr>
          <th
            className="fluid-table__th spacing:relaxed bg-transparent text-neutral-500 italic"
            colSpan="3"
          >
            Modifier `spacing:relaxed`
          </th>
        </tr>

        <tr className="divide-x">
          <td className="fluid-table__td spacing:relaxed">Relax Spacing</td>
          <td className="fluid-table__td spacing:relaxed">
            <Gear />
            <span>Relax Spacing</span>
          </td>
          <td className="fluid-table__td spacing:relaxed">
            <span>Relax Spacing</span>
            <Gear />
          </td>
        </tr>

        <tr>
          <th
            className="fluid-table__th spacing:relaxed bg-transparent text-neutral-500 italic"
            colSpan="3"
          >
            Modifier `spacing:compact`
          </th>
        </tr>

        <tr className="divide-x">
          <td className="fluid-table__td spacing:compact">Compact Spacing</td>
          <td className="fluid-table__td spacing:compact">
            <Gear />
            Compact Spacing
          </td>
          <td className="fluid-table__td spacing:compact">
            Compact Spacing
            <Gear />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
