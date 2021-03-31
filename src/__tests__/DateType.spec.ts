import { DATE_TYPES, formatDateType } from '../DateType';

it('formats known', () => {
  expect(DATE_TYPES.map((type) => [type, formatDateType(type)]))
    .toMatchInlineSnapshot(`
    Array [
      Array [
        "estimated",
        "Estimated",
      ],
      Array [
        "exact",
        "Exact",
      ],
      Array [
        "not_earlier_than",
        "No Earlier than",
      ],
      Array [
        "not_later_than",
        "No Later than",
      ],
    ]
  `);
});

it('formats unknown', () => {
  expect(formatDateType('FOO')).toMatchInlineSnapshot(`"Unknown"`);
  expect(formatDateType('BAR', { fallback: 'No info' })).toMatchInlineSnapshot(
    `"No info"`,
  );
});
