import { formatLoadPaymentTerm, LOAD_PAYMENT_TERMS } from '../LoadPaymentTerm';

it('formats known', () => {
  expect(LOAD_PAYMENT_TERMS.map((term) => [term, formatLoadPaymentTerm(term)]))
    .toMatchInlineSnapshot(`
    Array [
      Array [
        "5_days",
        "5 Business Days",
      ],
      Array [
        "7_days",
        "7 Business Days",
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
      Array [
        "30_days",
        "30 Business Days",
      ],
      Array [
        "45_days",
        "45 Business Days",
      ],
      Array [
        "60_days",
        "60 Business Days",
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
