import { formatVehicleType, VEHICLE_TYPES } from '../VehicleType';

it('formats known', () => {
  expect(VEHICLE_TYPES.map((type) => [type, formatVehicleType(type)]))
    .toMatchInlineSnapshot(`
    Array [
      Array [
        "sedan",
        "Sedan",
      ],
      Array [
        "2_door_coupe",
        "Coupe (2 doors)",
      ],
      Array [
        "suv",
        "SUV",
      ],
      Array [
        "pickup",
        "Pickup (2 doors)",
      ],
      Array [
        "4_door_pickup",
        "Pickup (4 doors)",
      ],
      Array [
        "van",
        "Van",
      ],
      Array [
        "truck_daycab",
        "Truck (daycab)",
      ],
      Array [
        "truck_sleeper",
        "Truck (with sleeper)",
      ],
      Array [
        "motorcycle",
        "Motorcycle",
      ],
      Array [
        "boat",
        "Boat",
      ],
      Array [
        "rv",
        "RV",
      ],
      Array [
        "heavy_machinery",
        "Heavy Machinery",
      ],
      Array [
        "freight",
        "Freight",
      ],
      Array [
        "livestock",
        "Livestock",
      ],
      Array [
        "atv",
        "ATV",
      ],
      Array [
        "trailer_bumper_pull",
        "Trailer (Bumper Pull)",
      ],
      Array [
        "trailer_gooseneck",
        "Trailer (Gooseneck)",
      ],
      Array [
        "trailer_5th_wheel",
        "Trailer (5th Wheel)",
      ],
      Array [
        "other",
        "Other",
      ],
    ]
  `);
});

it('formats unknown', () => {
  expect(formatVehicleType('FOO')).toMatchInlineSnapshot(`"Unknown"`);
  expect(
    formatVehicleType('BAR', { fallback: 'No info' }),
  ).toMatchInlineSnapshot(`"No info"`);
});
