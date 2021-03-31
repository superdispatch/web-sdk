import { formatPaymentTerm, PAYMENT_TERMS } from '../PaymentTerm';

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
        "5_days",
        "5 Days",
        "5 Days",
      ],
      Array [
        "7_days",
        "7 Days",
        "7 Days",
      ],
      Array [
        "10_days",
        "10 Days",
        "10 Days",
      ],
      Array [
        "15_days",
        "15 Days",
        "15 Days",
      ],
      Array [
        "20_days",
        "20 Days",
        "20 Days",
      ],
      Array [
        "30_days",
        "30 Days",
        "30 Days",
      ],
      Array [
        "45_days",
        "45 Days",
        "45 Days",
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
