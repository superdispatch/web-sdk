import { formatVehicleType, listVehicleTypes } from '../VehicleType';

it('returns list', () => {
  expect(listVehicleTypes()).toMatchInlineSnapshot(`
    Array [
      "sedan",
      "2_door_coupe",
      "suv",
      "pickup",
      "4_door_pickup",
      "van",
      "truck_daycab",
      "truck_sleeper",
      "motorcycle",
      "boat",
      "rv",
      "heavy_machinery",
      "freight",
      "livestock",
      "atv",
      "trailer_bumper_pull",
      "trailer_gooseneck",
      "trailer_5th_wheel",
      "other",
    ]
  `);
});

it('formats known', () => {
  expect([
    formatVehicleType('sedan'),
    formatVehicleType('2_door_coupe'),
    formatVehicleType('suv'),
    formatVehicleType('pickup'),
    formatVehicleType('4_door_pickup'),
    formatVehicleType('van'),
    formatVehicleType('truck_daycab'),
    formatVehicleType('truck_sleeper'),
    formatVehicleType('motorcycle'),
    formatVehicleType('boat'),
    formatVehicleType('rv'),
    formatVehicleType('heavy_machinery'),
    formatVehicleType('freight'),
    formatVehicleType('livestock'),
    formatVehicleType('atv'),
    formatVehicleType('trailer_bumper_pull'),
    formatVehicleType('trailer_gooseneck'),
    formatVehicleType('trailer_5th_wheel'),
    formatVehicleType('other'),
  ]).toMatchInlineSnapshot(`
    Array [
      "Sedan",
      "Coupe (2 doors)",
      "SUV",
      "Pickup (2 doors)",
      "Pickup (4 doors)",
      "Van",
      "Truck (daycab)",
      "Truck (with sleeper)",
      "Motorcycle",
      "Boat",
      "RV",
      "Heavy Machinery",
      "Freight",
      "Livestock",
      "ATV",
      "Trailer (Bumper Pull)",
      "Trailer (Gooseneck)",
      "Trailer (5th Wheel)",
      "Other",
    ]
  `);
});

it('formats unknown', () => {
  expect(formatVehicleType('FOO' as any)).toMatchInlineSnapshot(`"Unknown"`);
  expect(formatVehicleType('BAR' as any)).toMatchInlineSnapshot(`"Unknown"`);
});
