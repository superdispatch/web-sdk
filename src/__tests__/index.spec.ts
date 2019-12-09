import * as api from '../index';

it('exports public api', () => {
  expect(api).toMatchInlineSnapshot(`
    Object {
      "formatCustomerType": [Function],
      "formatDateType": [Function],
      "formatPaymentMethod": [Function],
      "formatPaymentTerm": [Function],
      "formatVehicleType": [Function],
      "listCustomerTypes": [Function],
      "listDateTypes": [Function],
      "listPaymentMethods": [Function],
      "listPaymentTerms": [Function],
      "listVehicleTypes": [Function],
    }
  `);
});
