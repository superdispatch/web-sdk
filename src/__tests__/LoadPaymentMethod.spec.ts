import {formatLoadPaymentMethod, listLoadPaymentMethods,} from '../LoadPaymentMethod';

it('returns list', () => {
  expect(listLoadPaymentMethods()).toMatchInlineSnapshot(`
    Array [
      "cod",
      "quickpay",
      "comcheck",
      "cop",
      "ckod",
      "ach",
      "factoring",
      "other",
    ]
  `);
});

it('formats known', () => {
  expect([
    formatLoadPaymentMethod('cod'),
    formatLoadPaymentMethod('quickpay'),
    formatLoadPaymentMethod('comcheck'),
    formatLoadPaymentMethod('cop'),
    formatLoadPaymentMethod('ckod'),
    formatLoadPaymentMethod('ach'),
    formatLoadPaymentMethod('factoring'),
    formatLoadPaymentMethod('other'),
  ]).toMatchInlineSnapshot(`
    Array [
      "COD",
      "QuickPay",
      "COMcheck",
      "COP",
      "CKOD",
      "ACH",
      "Factoring",
      "Other",
    ]
  `);
});

it('formats unknown', () => {
  expect(formatLoadPaymentMethod('FOO' as any)).toMatchInlineSnapshot(
    `"Unknown"`,
  );
  expect(formatLoadPaymentMethod('BAR' as any)).toMatchInlineSnapshot(
    `"Unknown"`,
  );
  expect(formatLoadPaymentMethod('BAR' as any, { fallback: 'No info' })).toMatchInlineSnapshot(`"No info"`);
});
