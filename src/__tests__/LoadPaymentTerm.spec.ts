import { formatLoadPaymentTerm, LOAD_PAYMENT_TERMS } from '../LoadPaymentTerm';

it('formats known', () => {
  expect(LOAD_PAYMENT_TERMS.map((term) => [term, formatLoadPaymentTerm(term)]))
    .toMatchInlineSnapshot(`
    Array [
      Array [
        "5_days",
        "5 Days",
      ],
      Array [
        "7_days",
        "7 Days",
      ],
      Array [
        "10_days",
        "10 Days",
      ],
      Array [
        "15_days",
        "15 Days",
      ],
      Array [
        "20_days",
        "20 Days",
      ],
      Array [
        "30_days",
        "30 Days",
      ],
      Array [
        "45_days",
        "45 Days",
      ],
      Array [
        "60_days",
        "60 Days",
      ],
      Array [
        "other",
        "Other",
      ],
    ]
  `);
});

it('formats unknown', () => {
  expect(formatLoadPaymentTerm('FOO')).toMatchInlineSnapshot(`"Unknown"`);
  expect(
    formatLoadPaymentTerm('BAR', { fallback: 'No info' }),
  ).toMatchInlineSnapshot(`"No info"`);
});
