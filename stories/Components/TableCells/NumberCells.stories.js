import React from 'react';

export default {
  title: 'Components/Table Cells/Number Cells',
};

export const NumberCell = () => (
  <div className="grid grid-cols-1 gap-2">
    <p>
      When using the table cell for number data the cell should always be right aligned, using the
      class `text-right`
    </p>

    <table>
      <thead>
        <tr>
          <th className="fluid-table__th">Data</th>
          <th className="fluid-table__th text-right">Amount</th>
          <th className="fluid-table__th text-right">Percent</th>
        </tr>
      </thead>

      <tbody>
        <tr className="divide-x">
          <td className="fluid-table__td spacing:compact">Compact Spacing</td>
          <td className="fluid-table__td spacing:compact text-right">$1.00</td>
          <td className="fluid-table__td spacing:compact text-right">90%</td>
        </tr>
        <tr className="divide-x">
          <td className="fluid-table__td spacing:default">Default Spacing</td>
          <td className="fluid-table__td spacing:default text-right">$1.00</td>
          <td className="fluid-table__td spacing:default text-right">90%</td>
        </tr>
        <tr className="divide-x">
          <td className="fluid-table__td spacing:relaxed">Relaxed Spacing</td>
          <td className="fluid-table__td spacing:relaxed text-right">$1.00</td>
          <td className="fluid-table__td spacing:relaxed text-right">90%</td>
        </tr>
      </tbody>
    </table>
  </div>
);
