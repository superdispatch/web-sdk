import {
  formatLoadPaymentMethod,
  LOAD_PAYMENT_METHODS,
} from '../LoadPaymentMethod';

it('formats known', () => {
  expect(
    LOAD_PAYMENT_METHODS.map((method) => [
      method,
      formatLoadPaymentMethod(method),
    ]),
  ).toMatchInlineSnapshot(`
    Array [
      Array [
        "cod",
        "COD",
      ],
      Array [
        "quickpay",
        "QuickPay",
      ],
      Array [
        "comchek",
        "Comchek",
      ],
      Array [
        "ckop",
        "CKOP",
      ],
      Array [
        "cop",
        "COP",
      ],
      Array [
        "ckod",
        "CKOD",
      ],
      Array [
        "ach",
        "ACH",
      ],
      Array [
        "factoring",
        "Factoring",
      ],
      Array [
        "venmo",
        "Venmo",
      ],
      Array [
        "cashapp",
        "CashApp",
      ],
      Array [
        "uship",
        "uShip",
      ],
      Array [
        "zelle",
        "Zelle",
      ],
      Array [
        "superpay",
        "SuperPay",
      ],
      Array [
        "other",
        "Other",
      ],
    ]
  `);
});

it('formats unknown', () => {
  expect(formatLoadPaymentMethod('FOO')).toMatchInlineSnapshot(`"Unknown"`);
  expect(
    formatLoadPaymentMethod('BAR', { fallback: 'No info' }),
  ).toMatchInlineSnapshot(`"No info"`);
});
