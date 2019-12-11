import {
  formatLoadPaymentTerm,
  listLoadPaymentTerms,
} from '../LoadPaymentTerm';
import { formatPaymentTerm } from '../PaymentTerm';

it('returns list ofs', () => {
  expect(listLoadPaymentTerms()).toMatchInlineSnapshot(`
    Array [
      "5_days",
      "7_days",
      "10_days",
      "15_days",
      "20_days",
      "30_days",
      "45_days",
      "other",
    ]
  `);
});

it('formats known', () => {
  expect([
    formatLoadPaymentTerm('5_days'),
    formatLoadPaymentTerm('7_days'),
    formatLoadPaymentTerm('10_days'),
    formatLoadPaymentTerm('15_days'),
    formatLoadPaymentTerm('20_days'),
    formatLoadPaymentTerm('30_days'),
    formatLoadPaymentTerm('45_days'),
    formatLoadPaymentTerm('other'),
  ]).toMatchInlineSnapshot(`
    Array [
      "5 Days",
      "7 Days",
      "10 Days",
      "15 Days",
      "20 Days",
      "30 Days",
      "45 Days",
      "Other",
    ]
  `);
});

it('formats unknown', () => {
  expect(formatPaymentTerm('FOO' as any)).toMatchInlineSnapshot(`"Unknown"`);
  expect(formatPaymentTerm('BAR' as any)).toMatchInlineSnapshot(`"Unknown"`);
});
