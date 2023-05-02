import { formatSuperPayTerm, SUPERPAY_TERMS } from '../SuperPayTerm';

it('formats known', () => {
  SUPERPAY_TERMS.map((term) => [term, formatSuperPayTerm(term)]);

  expect(SUPERPAY_TERMS.map((term) => [term, formatSuperPayTerm(term)]))
    .toMatchInlineSnapshot(`
    Array [
      Array [
        "1_3_days",
        "1-3 Business Days",
      ],
      Array [
        "5_days",
        "5 Business Days",
      ],
      Array [
        "10_days",
        "10 Business Days",
      ],
      Array [
        "15_days",
        "15 Business Days",
      ],
      Array [
        "20_days",
        "20 Business Days",
      ],
    ]
  `);
});

it('formats unknown', () => {
  expect(formatSuperPayTerm('FOO')).toMatchInlineSnapshot(`"Unknown"`);
  expect(
    formatSuperPayTerm('BAR', { fallback: 'No info' }),
  ).toMatchInlineSnapshot(`"No info"`);
});
