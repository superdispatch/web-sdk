import {formatDateType, listDateTypes} from '../DateType';

it('returns list', () => {
  expect(listDateTypes()).toMatchInlineSnapshot(`
    Array [
      "estimated",
      "exact",
      "not_earlier_than",
      "not_later_than",
    ]
  `);
});

it('formats known', () => {
  expect([
    formatDateType('estimated'),
    formatDateType('exact'),
    formatDateType('not_earlier_than'),
    formatDateType('not_later_than'),
  ]).toMatchInlineSnapshot(`
    Array [
      "Estimated",
      "Exactly",
      "No Earlier than",
      "No Later than",
    ]
  `);
});

it('formats unknown', () => {
  expect(formatDateType('FOO' as any)).toMatchInlineSnapshot(`"Unknown"`);
  expect(formatDateType('BAR' as any)).toMatchInlineSnapshot(`"Unknown"`);
  expect(formatDateType('BAR' as any, { fallback: 'No info' })).toMatchInlineSnapshot(`"No info"`);
});
