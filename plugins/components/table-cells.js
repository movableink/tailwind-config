'use strict';

module.exports = function tableCellComponentsPlugin({ addComponents, e, theme }) {
  const defaultClasses = {
    borderBottomWidth: '1px',
    borderColor: theme('colors.neutral.400'),
    color: theme('colors.neutral.700'),
    fontSize: theme('fontSize.base'),

    paddingTop: 'var(--fluid-table-cell-spacing)',
    paddingRight: 'var(--fluid-table-cell-spacing)',
    paddingBottom: 'var(--fluid-table-cell-spacing)',
    paddingLeft: 'var(--fluid-table-cell-spacing)',

    svg: {
      height: theme('height.4'),
      width: theme('width.4'),
      display: 'inline-block',
      marginLeft: theme('margin.3'),
      marginRight: theme('margin.3'),
    },
  };

  const tableCellClass = '.fluid-table__td';
  const tableHeaderCellClass = '.fluid-table__th';

  addComponents({
    /** == Table Cell == **/
    [`${tableCellClass}`]: {
      ...defaultClasses,
    },
    [`${tableCellClass}:not([class*="spacing"])`]: {
      '--fluid-table-cell-spacing': theme('padding.3'),
    },
    /** == Default Spacing == **/
    [`${tableCellClass}.${e('spacing:default')}`]: {
      '--fluid-table-cell-spacing': theme('padding.3'),
    },
    /** == Relaxed Spacing == **/
    [`${tableCellClass}.${e('spacing:relaxed')}`]: {
      '--fluid-table-cell-spacing': theme('padding.4'),
    },
    /** == Compact Spacing == **/
    [`${tableCellClass}.${e('spacing:compact')}`]: {
      '--fluid-table-cell-spacing': theme('padding.2'),
    },

    /** == Table Header Cell == **/
    [`${tableHeaderCellClass}`]: {
      ...defaultClasses,
      fontStyle: theme('fontStyle.bold'),
      backgroundColor: theme('colors.neutral.300'),
    },
    /** == Default Spacing == **/
    [`${tableHeaderCellClass}:not([class*="spacing"])`]: {
      '--fluid-table-cell-spacing': theme('padding.3'),
    },
    [`${tableHeaderCellClass}.${e('spacing:default')}`]: {
      '--fluid-table-cell-spacing': theme('padding.3'),
    },
    /** == Relaxed Spacing == **/
    [`${tableHeaderCellClass}.${e('spacing:relaxed')}`]: {
      '--fluid-table-cell-spacing': theme('padding.4'),
    },
    /** == Compact Spacing == **/
    [`${tableHeaderCellClass}.${e('spacing:compact')}`]: {
      '--fluid-table-cell-spacing': theme('padding.2'),
    },
  });
};
