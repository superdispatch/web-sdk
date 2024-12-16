import {
  formatPaymentTerm,
  PAYMENT_TERMS,
  SUPERPAY_TERMS,
} from '../PaymentTerm';

it('formats known', () => {
  PAYMENT_TERMS.map((term) => [
    term,
    formatPaymentTerm(term),
    formatPaymentTerm(term, { short: true }),
  ]);

  expect(
    PAYMENT_TERMS.map((term) => [
      term,
      formatPaymentTerm(term),
      formatPaymentTerm(term, { short: true }),
    ]),
  ).toMatchInlineSnapshot(`
    Array [
      Array [
        "other",
        "Other",
        "Other",
      ],
      Array [
        "superpay",
        "SuperPay",
        "SuperPay",
      ],
      Array [
        "ach",
        "ACH",
        "ACH",
      ],
      Array [
        "comchek",
        "Comchek",
        "Comchek",
      ],
      Array [
        "cash_on_pickup",
        "Cash on Pickup",
        "COP",
      ],
      Array [
        "cash_on_delivery",
        "Cash on Delivery",
        "COD",
      ],
      Array [
        "quick_pay",
        "QuickPay",
        "QuickPay",
      ],
      Array [
        "check_on_delivery",
        "Check on Delivery",
        "CKOD",
      ],
      Array [
        "check_on_pickup",
        "Check on Pickup",
        "CKOP",
      ],
      Array [
        "2_days",
        "2 Business Days",
        "2 Business Days",
      ],
      Array [
        "5_days",
        "5 Business Days",
        "5 Business Days",
      ],
      Array [
        "7_days",
        "7 Business Days",
        "7 Business Days",
      ],
      Array [
        "10_days",
        "10 Business Days",
        "10 Business Days",
      ],
      Array [
        "15_days",
        "15 Business Days",
        "15 Business Days",
      ],
      Array [
        "20_days",
        "20 Business Days",
        "20 Business Days",
      ],
      Array [
        "30_days",
        "30 Business Days",
        "30 Business Days",
      ],
      Array [
        "45_days",
        "45 Business Days",
        "45 Business Days",
      ],
      Array [
        "60_days",
        "60 Business Days",
        "60 Business Days",
      ],
    ]
  `);
});

it('formats unknown', () => {
  expect(formatPaymentTerm('FOO')).toMatchInlineSnapshot(`"Unknown"`);
  expect(
    formatPaymentTerm('BAR', { fallback: 'No info' }),
  ).toMatchInlineSnapshot(`"No info"`);
});

it('formats superpay', () => {
  SUPERPAY_TERMS.map((term) => [term, formatPaymentTerm(term)]);

  expect(SUPERPAY_TERMS.map((term) => [term, formatPaymentTerm(term)]))
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
      Array [
        "30_days",
        "30 Business Days",
      ],
    ]
  `);
});
